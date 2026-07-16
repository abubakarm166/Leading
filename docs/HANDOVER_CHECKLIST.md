# Lending Bridge — Phase 1 Final QA & Handover

**Date:** 16 July 2026  
**Purpose:** End-to-end confirmation that all agreed Phase 1 amendments are complete before client sign-off.

---

## QA summary (items 1–12)

| # | Requirement | Code status | Live / ops status |
|---|-------------|-------------|-------------------|
| 1 | Office address → Ground Floor, 172 Edmund St, Birmingham B3 2HB | ✅ Done (Contact, Footer, Complaints, Privacy) | ⏳ Deploy required |
| 2 | Website Terms — remove `lendhub.co.uk` | ✅ Done → lendingbridge.co.uk + company name | ⏳ Deploy required |
| 3 | Top bar — replace `!` with Enquire Now | ✅ Done | ⏳ Deploy required |
| 4 | Enquiry form — only First/Last Name, Email, Phone required | ✅ Done (other fields optional) | ⏳ Deploy + live form test |
| 5 | Final proofread | ✅ Key copy/grammar fixes applied | ⏳ Spot-check on live after deploy |
| 6 | Consistency (caps, buttons, headings, spacing) | ✅ CTAs aligned (Enquire Now / Calculate Now / Submit Enquiry) | ⏳ Visual pass on live |
| 7 | Links & forms | ✅ Code ready | ⏳ Live test checklist below |
| 8 | Mobile & browser | ✅ Layout patterns unchanged / form improved | ⏳ Device pass below |
| 9 | Stability & AWS monitoring | ✅ Next.js 15.2.9, PM2, watchdog, `/health` | ⚠️ Confirm CloudWatch + SSH lockdown |
| 10 | Performance | ✅ Build optimised; team page heaviest | ⏳ PageSpeed after deploy |
| 11 | Ownership & access transfer | 📄 Checklist ready | ⏳ Client action |
| 12 | Final QA & handover | 📄 This document | ⏳ Sign-off after deploy + live QA |

**Blocker for Phase 1 sign-off:** changes are complete in the local repo but **not yet committed, pushed, or deployed to production**.

---

## Code verification (local)

| Check | Result |
|-------|--------|
| Old address (Branston / B18 6BA) | ❌ Not found in `src/` |
| `lendhub` / `Lendhub` | ❌ Not found in `src/` |
| New address constants | ✅ `COMPANY_ADDRESS_*` in `constants.ts` |
| Navbar CTA | ✅ “Enquire Now” (no `!`) |
| Form validation | ✅ Only firstName, lastName, email, number required |
| Next.js version | ✅ `15.2.9` (CVE-2025-66478 patched) |
| Build | ✅ Passes (`npm run build`) |

---

## Deploy to production (required before sign-off)

```bash
# Local
git add -A
git commit -m "Phase 1 handover: address, website terms, enquire CTA, simplified enquiry form"
git push origin main

# EC2
cd ~/Leading
git pull
npm ci
npm run build
pm2 restart leading --update-env
pm2 save

# Verify
npx next --version
curl -s http://127.0.0.1:3000/health
curl -I https://www.lendingbridge.co.uk
```

---

## Live QA checklist (post-deploy)

### Content
- [ ] Contact page / footer show **Ground Floor, 172 Edmund St, Birmingham B3 2HB**
- [ ] Complaints & Privacy show the same address
- [ ] Website Terms show **lendingbridge.co.uk** (no lendhub)
- [ ] Header shows **Enquire Now** (not `!`)

### Forms
- [ ] Enquiry submits with only First Name, Last Name, Email, Phone
- [ ] Success toast appears
- [ ] Enquiry email received by Lending Bridge
- [ ] Broker registration still works (`/intermediaries`)
- [ ] Calculator / newsletter still work

### Links
- [ ] Nav: Products, Team, Blogs, Case Studies, Resources, Intermediaries
- [ ] Footer legal links: Complaints, Cookie, Privacy, Terms, Website Terms
- [ ] 404 page for unknown URL

### Mobile / browsers
- [ ] Chrome, Safari, Firefox — no layout break
- [ ] iPhone + Android — no horizontal scroll; Enquire Now tappable

### Stability
- [ ] `curl http://127.0.0.1:3000/health` → `ok`
- [ ] `pm2 status` → `leading` online
- [ ] No `/tmp/dashboard` or `cpu-logind` processes
- [ ] CloudWatch CPU alarm set (recommended)
- [ ] SSH restricted to known IPs (recommended)

---

## Ownership transfer (item 11)

| Asset | Transferred to Lending Bridge? |
|-------|--------------------------------|
| GitHub repo access | [ ] |
| AWS / EC2 access | [ ] |
| Domain DNS | [ ] |
| SSL / Certbot notes | [ ] |
| Email API (Vercel) | [ ] |
| CMS / API admin | [ ] |
| Production `.env` (rotated) | [ ] |
| SSH keys (dev keys removed) | [ ] |

---

## Sign-off

| Role | Name | Date | Signed |
|------|------|------|--------|
| Developer — Phase 1 complete | | | |
| Lending Bridge — Phase 1 accepted | | | |

Once the deploy and live QA boxes above are ticked, Phase 1 can be closed and Phase 2 can begin.
