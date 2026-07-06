# Server Operations — 504 Incidents, Security, Watchdog

**Project:** Lending Bridge · Next.js 15 on EC2  
**Last updated:** July 2026

---

## 1. Are `/tmp/dashboard` and `cpu-logind` expected?

**No. These are not part of a standard Next.js, Nginx, PM2, or SSL deployment.**

| Process | Expected? | Verdict |
|---------|-----------|---------|
| `nginx` | Yes | Reverse proxy |
| `pm2` / `node` (Next.js) | Yes | Application |
| `amazon-cloudwatch-agent` | Optional | AWS monitoring |
| **`/tmp/dashboard --config /tmp/v.json`** | **No** | **Highly suspicious** |
| **`cpu-logind` from `/var/tmp`** | **No** | **Highly suspicious** (name mimics `systemd-logind`) |

### Why they are suspicious

1. **Location** — Legitimate services do not run unsigned binaries from `/tmp` or `/var/tmp`.
2. **High CPU** — One process using ~1 full core matches cryptominer or malware behaviour.
3. **Reappears after kill** — Indicates persistence (cron, systemd user unit, `rc.local`, shell profile, or compromised package).
4. **Naming** — `cpu-logind` disguises itself as a system daemon.

### Could they cause your symptoms?

**Yes, very plausibly:**

| Symptom | How malware contributes |
|---------|-------------------------|
| 504 Gateway Timeout | CPU starvation → Node event loop delayed → Nginx times out |
| PM2 shows "online" | Process exists but cannot serve HTTP in time |
| Restart fixes temporarily | Frees CPU/memory until malware respawns or contention returns |
| OOM (historical) | Miners + Next.js image optimization compete for RAM |

**Conclusion:** Treat this as a **security incident** until proven otherwise. Application fixes alone may not stop 504s if the host remains compromised or CPU-saturated.

---

## 2. Immediate security actions (EC2)

Run on the server (replace paths as discovered):

```bash
# Inspect the suspicious processes
ps aux | grep -E 'dashboard|cpu-logind|/tmp/|/var/tmp' | grep -v grep
ls -la /tmp/dashboard /tmp/v.json 2>/dev/null
ls -la /var/tmp/cpu-logind 2>/dev/null

# Check persistence
sudo crontab -l
sudo crontab -u ubuntu -l  # or deploy user
sudo grep -r dashboard /etc/cron* /var/spool/cron 2>/dev/null
systemctl list-units --type=service | grep -i logind
grep -r 'dashboard\|cpu-logind\|/var/tmp' /etc/systemd /home/*/.bashrc /home/*/.profile 2>/dev/null

# File hashes (for incident report)
sha256sum /tmp/dashboard /var/tmp/cpu-logind 2>/dev/null

# Stop and remove (after documenting)
sudo kill -9 $(pgrep -f '/tmp/dashboard') 2>/dev/null
sudo kill -9 $(pgrep -f 'cpu-logind') 2>/dev/null
sudo rm -f /tmp/dashboard /tmp/v.json /var/tmp/cpu-logind
```

**Strongly recommended:**

1. Rotate all secrets (API keys, `.env`, SSH keys, SSL if compromised).
2. Review `authorized_keys` and IAM roles.
3. Scan with `rkhunter` / `chkrootkit` or AWS Inspector.
4. Consider **rebuilding EC2 from a clean AMI** and redeploying (safest).
5. Restrict SSH (key-only, security group, fail2ban).

---

## 3. Automatic health watchdog (implemented)

When Next.js **hangs** (PM2 still "online"), manual `pm2 restart` fixes it. This watchdog automates that.

### How it works

```
Every 1 minute (cron)
    → curl http://127.0.0.1:3000/health (8s max)
    → on failure: increment counter
    → after 3 consecutive failures: pm2 restart leading
```

### Files in this repo

| File | Purpose |
|------|---------|
| `scripts/pm2-health-watchdog.sh` | Watchdog script |
| `scripts/leading-health-watchdog.cron` | Cron template |
| `ecosystem.config.cjs` | PM2 production config |
| `src/app/health/route.ts` | **Fast** liveness (no API call) |
| `src/app/health/deep/route.ts` | Optional API readiness check |

### Install on EC2

```bash
cd /path/to/Leading   # your deploy directory

# 1. Deploy latest code (includes /health fix)
git pull && npm ci && npm run build

# 2. PM2 ecosystem
pm2 delete leading 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

# 3. Watchdog
sudo cp scripts/pm2-health-watchdog.sh /usr/local/bin/leading-health-watchdog
sudo chmod +x /usr/local/bin/leading-health-watchdog

# Edit cron user if not 'deploy':
sudo nano scripts/leading-health-watchdog.cron
sudo cp scripts/leading-health-watchdog.cron /etc/cron.d/leading-health-watchdog
sudo chmod 644 /etc/cron.d/leading-health-watchdog

# 4. Test
curl -s http://127.0.0.1:3000/health | jq .
/usr/local/bin/leading-health-watchdog && echo "OK"
```

### Endpoints

| URL | Use |
|-----|-----|
| `GET /health` | Watchdog + fast liveness |
| `GET /health/deep` | Monitoring dashboards (includes API probe) |

---

## 4. Application vs infrastructure — evidence to collect

Before upgrading EC2, gather **one snapshot during normal traffic** and **one during a 504**:

### CPU & memory

```bash
# Live
htop
pm2 monit
free -h
swapon --show

# Logs
pm2 logs leading --lines 200
sudo tail -100 /var/log/nginx/error.log
dmesg | grep -i 'oom\|kill' | tail -20
```

### AWS CloudWatch (2 weeks)

| Metric | Application issue | Resource issue | Compromised host |
|--------|-------------------|----------------|------------------|
| CPUUtilization | Low–moderate spikes | Sustained >80% | **One core pegged 24/7** |
| CPUCreditBalance (t-class) | N/A | Near 0, throttled | Credits drained by miner |
| Memory % | Moderate | >85% sustained | High with unknown process |
| StatusCheckFailed | Rare | Rare | Possible |

### Decision matrix

| Evidence | Likely cause | Action |
|----------|--------------|--------|
| Unknown `/tmp/dashboard` using 1 CPU, respawns | **Compromise / miner** | **Rebuild EC2, rotate secrets** — not upgrade |
| `node` memory >600MB, PM2 restarts often | App memory (images) | App tuning + `max_memory_restart` (done) |
| CPU low, 504 only on `/case-studies`, `/sitemap` | Upstream API hang | App timeouts (done) + API SLA |
| t3.small credits exhausted | Instance too small | Upgrade to **t3.medium** or **m6i.large** |
| All metrics healthy, 504 persists | Hung event loop | Watchdog (done) + Node profiling |

**Upgrading EC2 is justified when:**

- CPU credits consistently depleted **without** unknown processes.
- `node` RSS grows unbounded under normal load.
- Legitimate traffic (not miners) saturates CPU.

**Upgrading is NOT the first step when:**

- Suspicious `/tmp` binaries exist (fix security first).
- 504 correlates with upstream API outages.
- Watchdog restarts fix incidents (points to app hang, not insufficient RAM).

---

## 5. Nginx timeout alignment

Ensure `/etc/nginx/sites-available/leading` includes:

```nginx
location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_connect_timeout 10s;
  proxy_send_timeout 60s;
  proxy_read_timeout 60s;
}
```

`/health` should respond in &lt;100ms. If Nginx logs 504 after 60s while PM2 is online, the Node process is hung — watchdog addresses this.

---

## 6. Summary for stakeholders

| Question | Answer |
|----------|--------|
| Are `dashboard` and `cpu-logind` expected? | **No** — investigate as security incident |
| Can they cause 504s? | **Yes** — CPU/memory contention |
| Auto-restart when unresponsive? | **Yes** — `scripts/pm2-health-watchdog.sh` + cron |
| Upgrade EC2 now? | **Not before** removing malware and collecting CloudWatch metrics |
| App fixes still matter? | **Yes** — Axios timeouts, ISR, fast `/health` (deployed in codebase) |

---

*Deploy latest code, install watchdog, remediate suspicious processes, then monitor for 48–72 hours before infrastructure changes.*
