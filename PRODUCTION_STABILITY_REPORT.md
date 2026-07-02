# Production Stability Report — Lending Bridge (Next.js 15)

**Date:** June 2026  
**Environment:** Ubuntu · Nginx · PM2 · AWS EC2  
**Symptoms:** Intermittent 504 Gateway Timeout, `connect() failed (111: Connection refused)`, PM2 shows "online" while site is down, restart fixes issue, historical OOM kill  

**Audit scope:** Full application codebase (`src/`, `next.config.ts`, API layer, App Router pages, client components)

---

## Executive summary

This application is a **mostly static marketing site** with **no database**, **no middleware**, and **no Server Actions**. All dynamic content comes from an **external REST API** via **Axios without timeouts**.

The **most likely application-level cause** of intermittent 504s and “PM2 online but site dead” is:

> **Server-side routes block indefinitely waiting on slow/hung upstream API calls, exhausting Node worker capacity. `/health` returns OK because the process is alive but request handlers are stuck.**

Secondary contributors: **Next.js image optimization memory pressure** on small EC2 instances, **duplicate API calls per SSR request**, and **no process-level error/rejection handlers**.

---

## Architecture map (request paths)

| Path | Rendering | Upstream API? | Risk |
|------|-----------|---------------|------|
| `/`, `/products/*`, legal pages | Static / SSG | No | Low |
| `/blogs/[slug]` | SSG (`generateStaticParams`) | At build only | Medium (build hang) |
| `/case-studies/[slug]` | **Dynamic SSR** | **Yes — 2× per request** | **Critical** |
| `/sitemap.xml` | **force-dynamic** | **Yes — 2× per request** | **Critical** |
| `/health` | Route handler | No | Low (shallow check) |
| Homepage carousels, `/team`, `/resources` | Client fetch | Yes (browser) | Medium (UX only) |

**Not found in project:** `middleware.ts`, `prisma`, `mongoose`, `mysql`, `postgres`, `redis`, `unstable_cache`, Server Actions (`"use server"`), WebSockets, `pages/api`, recursive functions, infinite loops, blocking `fs` sync I/O.

---

## Critical issues

### C1 — Axios has no timeout (indefinite hang)

| | |
|---|---|
| **File** | `src/utils/api/axios.ts` lines 11–16 |
| **Severity** | **Critical** |
| **Could cause intermittent hangs?** | **Yes — primary suspect** |

```11:16:src/utils/api/axios.ts
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-website": true,
  },
});
```

Axios default `timeout` is `0` (wait forever). When the external API is slow, down, or TCP-stalls, **any server-side caller blocks until Nginx `proxy_read_timeout`** → **504**.

**Affected server-side callers:**
- `src/app/sitemap.ts` — `getAllBlogs()`, `listCaseStudies()`
- `src/app/case-studies/[slug]/page.tsx` — `getCaseStudy()` ×2
- `src/app/blogs/[slug]/page.tsx` — `getBlog()` ×2 (build + metadata if revalidated)

**Safest fix:**

```typescript
// src/utils/api/axios.ts
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000, // 10s hard cap
  headers: { "x-website": true },
});
```

Also add timeout to `src/utils/helpers.ts` line 57 (`sendMail` uses raw `axios.get` without timeout).

---

### C2 — Dynamic sitemap blocks on every crawl/bot hit

| | |
|---|---|
| **File** | `src/app/sitemap.ts` lines 7–20, 87–94 |
| **Severity** | **Critical** |
| **Could cause intermittent hangs?** | **Yes** |

```7:20:src/app/sitemap.ts
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ...
  try {
    blogs = await getAllBlogs();
    caseStudies = await listCaseStudies();
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }
```

- `force-dynamic` = **every `/sitemap.xml` request hits the upstream API** (Googlebot, Bing, SEO tools).
- No timeout (see C1) = workers can block for minutes.
- **Bug:** If `getAllBlogs()` throws, `caseStudies` is never assigned but used on line 87 → **runtime crash** on sitemap.

**Safest fix:**

```typescript
export const revalidate = 3600; // ISR: refresh hourly, not per request
// Remove: export const dynamic = "force-dynamic";

export default async function sitemap() {
  let blogs = [];
  let caseStudies = [];
  try {
    [blogs, caseStudies] = await Promise.all([
      getAllBlogs(),
      listCaseStudies(),
    ]);
  } catch (error) {
    console.error("[sitemap] upstream failed:", error);
  }
  // ... rest unchanged, caseStudies always defined
}
```

---

### C3 — Case study pages are fully dynamic with duplicate API calls

| | |
|---|---|
| **File** | `src/app/case-studies/[slug]/page.tsx` lines 10–14, 46–50 |
| **Severity** | **Critical** |
| **Could cause intermittent hangs?** | **Yes** |

`getCaseStudy(slug)` is called **twice per page view** (metadata + page). Next.js **does not dedupe Axios** (only `fetch()` with cache). No `generateStaticParams`, no `revalidate` → **every visit = 2 blocking upstream calls**.

Build output confirms: `ƒ /case-studies/[slug]` (dynamic).

**Safest fix:** Add ISR + dedupe via shared cached fetch wrapper, or `generateStaticParams` + `revalidate: 3600`:

```typescript
export const revalidate = 3600;

// Use React cache() to dedupe within one request:
import { cache } from "react";
const getCaseStudyCached = cache(getCaseStudy);

// In generateMetadata and page component, use getCaseStudyCached(slug)
```

---

### C4 — `/health` is shallow — PM2 thinks app is fine while workers are stuck

| | |
|---|---|
| **File** | `src/app/health/route.ts` lines 3–11 |
| **Severity** | **Critical** (for monitoring accuracy) |
| **Could cause intermittent hangs?** | Explains symptom: PM2 online + site down |

```3:11:src/app/health/route.ts
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    { status: 200 }
  );
}
```

Returns OK even when all workers are blocked on hung Axios calls.

**Safest fix:** Add optional deep check with short timeout:

```typescript
export async function GET() {
  const checks = { app: "ok", api: "unknown" as string };
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 3000);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      signal: ctrl.signal,
      headers: { "x-website": "true" },
    });
    clearTimeout(t);
    checks.api = res.ok ? "ok" : `http_${res.status}`;
  } catch {
    checks.api = "unreachable";
  }
  const healthy = checks.app === "ok"; // or require api === "ok"
  return NextResponse.json({ status: healthy ? "ok" : "degraded", checks, ... }, {
    status: healthy ? 200 : 503,
  });
}
```

---

## High risk issues

### H1 — Axios error interceptor swallows rejections incorrectly

| | |
|---|---|
| **File** | `src/utils/api/axios.ts` lines 34–36 |
| **Severity** | **High** |

```34:36:src/utils/api/axios.ts
  (err) => {
    return err;
  }
```

Should be `return Promise.reject(err)`. Returning the error object can cause **resolved promises with error-shaped data**, leading to silent failures and unpredictable downstream behavior.

**Fix:** `return Promise.reject(err);`

---

### H2 — `react-hot-toast` imported in shared Axios module used server-side

| | |
|---|---|
| **File** | `src/utils/api/axios.ts` lines 2, 22–27 |
| **Severity** | **High** |

Server components import `blogs.ts` → `axios.ts` → `react-hot-toast`. Toast side effects on POST are client-only, but this couples server bundle to a client library and risks SSR edge cases.

**Fix:** Split into `axios.server.ts` (no toast) and `axios.client.ts` (toast on POST), or move toast to form components only.

---

### H3 — Blog `generateMetadata` + page = duplicate `getBlog()` calls

| | |
|---|---|
| **File** | `src/app/blogs/[slug]/page.tsx` lines 18–20, 67–69 |
| **Severity** | **High** |

Two upstream calls per SSR regeneration. Use `cache(getBlog)` from React.

---

### H4 — `sendMail` external call has no timeout

| | |
|---|---|
| **File** | `src/utils/helpers.ts` lines 57–71 |
| **Severity** | **High** |

```57:71:src/utils/helpers.ts
    await axios.get("https://send-mail-server-weld.vercel.app", {
      params: { ... },
      headers: { Authorization: process.env.NEXT_PUBLIC_MAIL_AUTH },
    });
```

Calculator form can hang client-side indefinitely. Less likely to cause 504 on server, but blocks user and ties up browser connections.

**Fix:** `timeout: 15000` + AbortController.

---

### H5 — No global `unhandledRejection` / `uncaughtException` handlers

| | |
|---|---|
| **File** | Missing (`instrumentation.ts` not present) |
| **Severity** | **High** |

Unhandled promise rejections from `useEffectAsync` can crash Node silently or leave PM2 in a bad state.

**Fix:** Add `src/instrumentation.ts`:

```typescript
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    process.on("unhandledRejection", (reason) => {
      console.error("[unhandledRejection]", reason);
    });
    process.on("uncaughtException", (err) => {
      console.error("[uncaughtException]", err);
    });
  }
}
```

Enable in `next.config.ts`: `experimental: { instrumentationHook: true }` (or `instrumentationHook: true` in Next 15).

---

### H6 — `useEffectAsync` has no error handling or abort

| | |
|---|---|
| **File** | `src/utils/hooks.ts` lines 3–10 |
| **Severity** | **High** |

Used by: `TeamClient`, `BlogsCarousel`, `CaseStudiesCarousel`, `ResourcesClient`, `BookAppointmentModal`.

```3:10:src/utils/hooks.ts
export const useEffectAsync = (
  effect: () => Promise<void>,
  deps: DependencyList
) => {
  useEffect(() => {
    effect();
  }, deps);
};
```

- No `try/catch` → unhandled rejection if API fails.
- No abort on unmount → `setState` on unmounted component if slow request returns.
- Client-only impact (won't 504 server) but can leak warnings and unstable UI.

**Fix:**

```typescript
useEffect(() => {
  let cancelled = false;
  (async () => {
    try {
      await effect(cancelled);
    } catch (e) {
      if (!cancelled) console.error(e);
    }
  })();
  return () => { cancelled = true; };
}, deps);
```

---

### H7 — Next.js Image Optimization memory pressure (OOM)

| | |
|---|---|
| **File** | `next.config.ts` lines 5–14; remote S3 images across site |
| **Severity** | **High** |
| **Could cause intermittent hangs?** | **Yes — explains historical OOM** |

`/_next/image` runs Sharp in the Node process. Concurrent optimization of large S3 images on a **small EC2 instance** can spike RAM → OOM kill → **Connection refused** until PM2 restarts.

**Fix options:**
- Set `images: { minimumCacheTTL: 86400, deviceSizes: [...] }` — limit variants
- Offload to CDN / S3 direct URLs for CMS images
- PM2: `max_memory_restart: "512M"`
- Increase EC2 instance size or add swap (infra)

---

## Medium risk issues

### M1 — `generateStaticParams` for blogs calls API at build with no timeout

| **File** | `src/app/blogs/[slug]/page.tsx` lines 130–135 |
| **Severity** | Medium |
| Build can hang if API is down during `next build`. |

---

### M2 — `listCaseStudies` can return `undefined` instead of `[]`

| **File** | `src/utils/api/caseStudy.ts` lines 3–13 |
| **Severity** | Medium |

On non-SUCCESS response, function returns `undefined`. Callers like `CaseStudiesCarousel` may crash on `.length`.

**Fix:** Always `return []` as fallback.

---

### M3 — `getTeamMemberAvailability` returns `undefined` on failure

| **File** | `src/utils/api/team.ts` lines 15–24 |
| **Severity** | Medium |

`BookAppointmentModal` sets `availability` to `undefined` → calendar `tileDisabled` may behave incorrectly.

---

### M4 — Synchronous HTML parsing on large blog content in `generateMetadata`

| **File** | `src/app/blogs/[slug]/page.tsx` lines 39–41 |
| **Severity** | Medium |

`stripHtmlToPlainText(blog.content)` on very large HTML blocks event loop briefly during metadata generation.

---

### M5 — `convertH2ToH1` uses `DOMParser` on every carousel card render

| **File** | `src/components/common/CaseStudiesCarousel.tsx` line 19 |
| **Severity** | Medium |

Called outside `useMemo`; parses HTML on every re-render. Client-only CPU cost, not server hang.

---

### M6 — `moment` + `moment-timezone` on server pages

| **File** | `src/app/blogs/[slug]/page.tsx`, `BookAppointmentModal.tsx` |
| **Severity** | Medium |

Large locale data increases server bundle and memory. Prefer `date-fns` or native `Intl.DateTimeFormat`.

---

### M7 — Duplicate product routes (`/product/[id]` and `/products/[slug]`)

| **File** | `src/app/product/`, `src/app/products/`, `sitemap.ts` line 70 |
| **Severity** | Medium |

Doubles crawl surface; not a hang cause but wastes crawler and server resources.

---

### M8 — API modules only `console.log` errors — no structured logging

| **Files** | All `src/utils/api/*.ts` |
| **Severity** | Medium |

Production debugging is hard; no correlation IDs, no log levels.

---

## Low risk issues

### L1 — `Reveal.tsx` timeout cleanup bug

| **File** | `src/components/common/Reveal.tsx` lines 27–35 |
| **Severity** | Low |

`clearTimeout` only returned when `isInView` is true; minor timer leak on fast unmount.

---

### L2 — Team page `setTimeout` auto-slide (5s)

| **File** | `src/components/Team/TeamClient.tsx` lines 94–118 |
| **Severity** | Low |

Properly cleaned up in `useEffect` return. No leak.

---

### L3 — Health endpoint exposes `uptime`

| **File** | `src/app/health/route.ts` |
| **Severity** | Low |

Minor info disclosure; acceptable for internal monitoring.

---

### L4 — No `AbortController` on any client API calls

| **Severity** | Low |
| Client-only; affects UX on navigation away, not server 504. |

---

## External request audit

| Call site | Method | Timeout | Retry | Error handling | Logging | Fallback |
|-----------|--------|---------|-------|----------------|---------|----------|
| `axios.ts` (all API) | GET/POST | **None** | No | Partial | `console.log` | Empty array / undefined |
| `helpers.ts` sendMail | GET | **None** | No | try/catch | `console.log` | `false` |
| `sitemap.ts` | GET ×2 | **None** | No | try/catch (incomplete) | `console.error` | Partial crash |
| `blogs/[slug]` SSR | GET ×2 | **None** | No | null check | `console.log` | "Not found" UI |
| `case-studies/[slug]` SSR | GET ×2 | **None** | No | null check | `console.log` | Renders empty |
| Client carousels | GET | **None** | No | None in hook | `console.log` | Empty UI |
| `/health` | — | N/A | N/A | N/A | N/A | Always 200 |

**Verdict:** No external request has a timeout. This is the single highest-priority fix.

---

## Why symptoms match this codebase

| Symptom | Application-level explanation |
|---------|------------------------------|
| **504 Gateway Timeout** | Nginx waits for Next.js; Next.js waits forever on Axios (no timeout) to external API |
| **Connection refused (111)** | Node process OOM-killed or restarting; or all workers busy, accept queue full |
| **PM2 shows online** | Process is alive; `/health` returns 200; workers blocked on I/O |
| **Restart fixes it** | Clears stuck connections, frees memory, resets worker pool |
| **Hang vs crash** | TCP hang = process alive but unresponsive; OOM = crash + refuse |
| **Health OK after restart** | Shallow check passes; doesn't test upstream API or worker saturation |

---

## Performance improvements

1. Add `revalidate = 3600` to dynamic routes (`case-studies/[slug]`, sitemap).
2. Use `React.cache()` to dedupe `getBlog` / `getCaseStudy` within a request.
3. Replace `moment` with lighter date formatting.
4. Memoize `convertH2ToH1` in `CaseStudiesCarousel`.
5. Homepage already uses `next/dynamic` for below-fold sections — good.
6. Add `loading.tsx` for dynamic routes so Nginx/users see fast feedback.

---

## Memory improvements

1. Cap Axios response size if API returns huge payloads.
2. Tune Next.js image `deviceSizes` / `imageSizes` in `next.config.ts`.
3. Serve CMS images directly from S3 CDN where possible (bypass Sharp).
4. PM2 `max_memory_restart` to auto-recover before OOM.
5. Run `next build` with `NODE_OPTIONS=--max-old-space-size=2048` on small build servers.

---

## Reliability improvements

### Priority 1 (do immediately)

```typescript
// src/utils/api/axios.ts
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: { "x-website": true },
});

axiosInstance.interceptors.response.use(
  (response) => { /* toast logic — client only */ return response; },
  (err) => Promise.reject(err)
);
```

### Priority 2

- Fix `sitemap.ts`: remove `force-dynamic`, add `revalidate`, fix `caseStudies` undefined bug.
- Add `revalidate` + `cache()` to `case-studies/[slug]/page.tsx`.
- Deep health check with 3s API timeout.

### Priority 3

- Split server/client Axios instances.
- Add `instrumentation.ts` for unhandled rejections.
- Fix `useEffectAsync` with abort + error handling.
- Structured logging (pino/winston) with request ID.

---

## Monitoring recommendations

| Monitor | Target | Alert if |
|---------|--------|----------|
| `/health` (deep) | Every 30s | status ≠ 200 or `api !== ok` |
| Nginx 5xx rate | Access logs | > 1% over 5 min |
| PM2 memory | `pm2 monit` | > 80% of instance RAM |
| Upstream API latency | External probe | p95 > 5s |
| `proxy_read_timeout` | Nginx config | Ensure 60s max (fail fast) |
| PM2 restarts | `pm2 logs` | > 3 restarts/hour |
| OOM | `dmesg \| grep -i oom` | Any kill |

**PM2 ecosystem suggestion:**

```javascript
module.exports = {
  apps: [{
    name: "lending-bridge",
    script: "node_modules/next/dist/bin/next",
    args: "start -p 3000",
    instances: 1, // or "max" on larger EC2
    max_memory_restart: "600M",
    exp_backoff_restart_delay: 100,
    listen_timeout: 10000,
    kill_timeout: 5000,
  }],
};
```

**Nginx:**

```nginx
proxy_connect_timeout 10s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;
```

---

## Issue summary table

| ID | Severity | File:Line | Intermittent hang? |
|----|----------|-----------|-------------------|
| C1 | Critical | `axios.ts:11` | Yes |
| C2 | Critical | `sitemap.ts:7` | Yes |
| C3 | Critical | `case-studies/[slug]/page.tsx:14,50` | Yes |
| C4 | Critical | `health/route.ts:3` | Explains false positive |
| H1 | High | `axios.ts:35` | Possible |
| H2 | High | `axios.ts:2` | Possible SSR issues |
| H3 | High | `blogs/[slug]/page.tsx:20,69` | Yes (on regen) |
| H4 | High | `helpers.ts:57` | Client hang |
| H5 | High | missing `instrumentation.ts` | Crash risk |
| H6 | High | `hooks.ts:7` | Client instability |
| H7 | High | `next.config.ts:5` | OOM → refuse |
| M1–M8 | Medium | various | Partial |
| L1–L4 | Low | various | No |

---

## Recommended fix order

1. **Add Axios timeout (10s)** — `src/utils/api/axios.ts`
2. **Fix sitemap** — remove `force-dynamic`, fix `caseStudies` bug, add `revalidate`
3. **ISR + cache** on `case-studies/[slug]`
4. **Deep health check** with upstream probe
5. **PM2 memory limit** + Nginx timeout alignment
6. **instrumentation.ts** for unhandled rejections
7. **Split server/client axios** (remove toast from server path)

---

*This report focuses on application-level causes per request. After applying Priority 1–2 fixes, re-test under load with `ab` or `k6` against `/case-studies/{slug}` and `/sitemap.xml` while upstream API is artificially delayed.*
