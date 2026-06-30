# Frontend Improvements Report — Lending Bridge Redesign

**Project:** `lending_bridge_redesign`  
**Report date:** June 2026  
**Companion document:** [`CODE_AUDIT.md`](./CODE_AUDIT.md)

This report covers frontend stability, performance/responsiveness, and forms/user-flow work completed during the redesign cycle.

---

## 2. Frontend Stability Improvements

### Bugs fixed

| Bug | Impact | Resolution |
|-----|--------|------------|
| **Build crash — Tailwind Oxide native binding missing** | `next dev` / `next build` failed with `Cannot find native binding` in `@tailwindcss/oxide`, blocking all local development | Removed corrupted `node_modules` and `package-lock.json`, ran clean `npm install` to restore platform-specific `@tailwindcss/oxide-linux-x64-gnu` binary |
| **Broken dependency tree** | PostCSS/Tailwind pipeline failed during CSS compilation (surfaced as `next/font` error) | Full reinstall; verified `npm run build` and `npm run dev` complete without errors |
| **Incomplete loan purpose dropdown** | Contact form showed only 2 options (BTL, Refinance) while live site expects 8 — users could not select correct loan purpose | Expanded `LOAN_PURPOSE_OPTIONS` in `src/utils/constants.ts` to match production options |

### UI / layout issues resolved

| Issue | Component | Fix |
|-------|-----------|-----|
| **Crowded desktop navbar** | `Navbar.tsx` | Removed inline “Enquire Now” text link from nav items; restructured layout into nav links + contact block + CTA |
| **Enquire CTA not visible enough** | `Navbar.tsx` | Added circular `!` button on far right (desktop, tablet, mobile) linking to `/contact-us` |
| **Hero missing enquiry path** | `Hero.tsx` | Added “Enquire Now” outline button beside “Calculate Now” |
| **Oversized hero buttons** | `Hero.tsx` | Reduced padding (`px-8 py-3` → `lg:px-10 py-3.5`) and font size (`14px`–`15px`); tightened button gap |
| **Decorative arrow overlap** | `Hero.tsx` | Scaled arrow (`72px`–`80px`) and repositioned to align with smaller button group |

### Stability improvements made

| Improvement | Details |
|-------------|---------|
| **Production build verified** | `npm run build` completes; all 18+ routes compile (static, SSG, and dynamic) |
| **Dev environment restored** | `npm run dev` runs with `.env.dev` via `env-cmd` |
| **Hydration-safe homepage sections** | `ClientOnly` wrapper with layout-preserving fallbacks around Calculator and Products prevents SSR/client mismatch |
| **Graceful API fallbacks** | Blog and case study API calls return empty arrays on failure instead of crashing pages |
| **Axios dev warning** | Missing `NEXT_PUBLIC_API_URL` logs a clear console warning in development |
| **Accessibility on icon CTA** | Navbar enquire button includes `aria-label` and `title` for screen readers |

### Known stability items (not yet fixed)

- Mobile nav email typo: `enquires@` → should be `enquiries@lendingbridge.co.uk` (`MobileNav.tsx`)
- `TCreateContact` TypeScript type does not match all fields sent by the contact form
- Duplicate product routes (`/product/[id]` and `/products/[slug]`) may cause confusion in analytics and SEO

---

## 3. Performance & Responsiveness Improvements

### Image optimizations

| Optimization | Where | Benefit |
|--------------|-------|---------|
| **AVIF + WebP formats** | `next.config.ts` | Next.js Image serves modern formats automatically |
| **Remote image allowlist** | `next.config.ts` | S3 (`lending-bridge.s3.eu-north-1.amazonaws.com`) and Unsplash domains configured for optimized delivery |
| **Hero LCP image** | `Hero.tsx` | `priority` + `fetchPriority="high"` on hero image; responsive `sizes` attribute for correct srcset selection |
| **Responsive `sizes` on images** | Hero, product pages, carousels | Browser loads appropriately sized images per viewport |
| **Hero WebP asset** | `/images/hero.webp` | Compressed hero illustration vs raw PNG |
| **Logo priority load** | `Navbar.tsx` | `priority` on desktop logo for faster above-the-fold paint |
| **Long-cache static assets** | `next.config.ts` headers | `/_next/static`, `/_next/image`, `/fonts`, `/images`, `/svg`, `/gif` cached up to 1 year |

### Performance improvements completed

| Improvement | Where | Benefit |
|-------------|-------|---------|
| **Gzip compression enabled** | `next.config.ts` (`compress: true`) | Smaller JS/CSS payloads over the wire |
| **`poweredByHeader: false`** | `next.config.ts` | Removes unnecessary `X-Powered-By` header |
| **Homepage code splitting** | `src/app/page.tsx` | 9 below-fold sections lazy-loaded via `next/dynamic` (About, Affiliations, Awards, Blogs, CaseStudies, Features, Highlights, LoanProcess, NewsLetter) |
| **Client-only heavy widgets** | Homepage Calculator + Products | Deferred to client mount — reduces initial JS execution and avoids hydration errors |
| **Font display swap** | `globals.css` | Gilroy `@font-face` uses `font-display: swap` to prevent invisible text during load |
| **Google fonts via `next/font`** | `layout.tsx` | Geist, League Spartan, Nunito Sans self-hosted/optimized by Next.js |

### Measurable build output (post-fix)

Captured from successful `npm run build`:

| Route | First Load JS |
|-------|---------------|
| `/` (Homepage) | **295 kB** |
| `/contact-us` | **177 kB** |
| `/team` | **291 kB** |
| Shared chunks (all pages) | **101 kB** |

> **Note:** Lighthouse / Core Web Vitals scores were not run in this cycle. Recommend a follow-up audit with Lighthouse on production URL for LCP, CLS, and TBT baselines.

### Mobile responsiveness fixes

| Area | Breakpoints | Behaviour |
|------|-------------|-----------|
| **Navbar** | `< md`, `md–xl`, `xl+` | Three dedicated layouts: mobile bar, tablet icons + burger, full desktop nav |
| **Hero** | `sm`, `lg`, `xl`, `2xl` | Stacked layout on mobile; side-by-side on desktop; buttons stack on mobile, row on `sm+` |
| **Hero typography** | `42px` → `70px` scaling | Readable headings across phone to desktop |
| **Contact form** | `lg:w-[40%]` | Full-width on mobile; fixed column width on desktop |
| **Homepage sections** | `px-5 lg:px-[80px]` | Consistent horizontal padding pattern sitewide |
| **Calculator calendar** | `max-width: 450px` | Calendar width 100% on small screens (`globals.css`) |
| **Custom tablet breakpoint** | `780px–1050px` | Defined in `tailwind.config.js` for mid-range layouts |
| **Overflow control** | `overflow-x-clip` on `html`, `body`, main sections | Prevents horizontal scroll on narrow viewports |

### Tablet / desktop testing performed

| Viewport | Method | Result |
|----------|--------|--------|
| **Desktop (xl+, 1280px+)** | Dev server compile + layout review | Full navbar, enquire `!` button, contact details, hero side-by-side layout — OK |
| **Tablet (md–xl, 768–1279px)** | Component breakpoint review | Tablet navbar with mail/phone/enquire icons + burger menu — OK |
| **Mobile (< md, < 768px)** | Component breakpoint review | Compact navbar, stacked hero buttons, mobile nav drawer — OK |
| **Production build** | `npm run build` | All routes compile without errors — OK |

### Responsiveness improvements from this cycle

| Change | Impact |
|--------|--------|
| Hero button row (`flex-col` → `sm:flex-row`) | Better tap targets and alignment on phones vs tablets |
| Smaller hero buttons | Reduced vertical space consumption on mobile |
| Navbar enquire button on all breakpoints | Consistent enquiry access without opening mobile menu |

### Recommended follow-up (performance)

- [ ] Run Lighthouse on staging/production and record LCP, FID/INP, CLS
- [ ] Add `sizes` to any remaining `<Image>` tags missing responsive hints
- [ ] Consider consolidating duplicate product routes to reduce crawl budget waste

---

## 4. Forms & User Flow Fixes

### Which forms were fixed?

| Form | Location | What changed |
|------|----------|--------------|
| **Contact / Enquiry form** | `ContactUs.tsx` (homepage + `/contact-us`) | Loan purpose dropdown expanded from 2 → 8 options via `LOAN_PURPOSE_OPTIONS` |
| **Navbar enquire flow** | `Navbar.tsx` | New `!` button routes directly to `/contact-us` from every breakpoint |
| **Hero CTA flow** | `Hero.tsx` | New “Enquire Now” button routes to `/contact-us`; “Calculate Now” still smooth-scrolls to `#calculator` |

### Forms reviewed (no code changes in this cycle)

| Form | Location | Status |
|------|----------|--------|
| **Loan calculator** | `Calculator.tsx` + `UserDetailsModal.tsx` | Reviewed — validation and email send logic unchanged |
| **Broker registration** | `intermediaries/page.tsx` | Reviewed — Formik form posts to `/registrations` |
| **Newsletter signup** | `NewsLetter.tsx` | Reviewed — posts to newsletter API |
| **Team appointment booking** | `BookAppointmentModal.tsx` | Reviewed — calendar + time slot selection |
| **Contact form (API)** | `contact.ts` | Reviewed — posts to `POST /contacts` |

### Validation issues resolved

| Issue | Resolution |
|-------|------------|
| **Missing loan purpose options** | Users can now select all 8 loan purposes matching the live site (Re-finance, Normal Purchase, Auction Purchase, Development funds, Capital Raise, and combined options) |
| **Loan purpose required field** | Existing validation in `validateFormInputs()` already enforces selection — now works correctly with full option set |

### Existing validation (unchanged, documented for reference)

Contact form validates via `validateFormInputs()` in `src/utils/helpers.ts`:

| Field | Rule |
|-------|------|
| Full name | Required |
| Phone number | Required; E.164-style pattern (`+` optional, 2–15 digits) |
| Email | Required; standard email regex |
| Property address | Required |
| Property value | Required; digits only |
| Net loan required | Required; digits only |
| Loan purpose | Required; must select from dropdown |
| Other information | Required (message field) |

Errors surface via `react-hot-toast` with the first failing message.

### User flow improvements completed

| Flow | Before | After |
|------|--------|-------|
| **Homepage → Enquire** | User had to scroll to contact section or find nav link | Hero “Enquire Now” button + navbar `!` button provide immediate paths to `/contact-us` |
| **Homepage → Calculator** | “Calculate Now” scrolls to calculator | Unchanged — still smooth-scrolls to `#calculator` |
| **Any page → Enquire (desktop)** | “Enquire Now” was a text nav item among 5 links | Dedicated `!` icon button on far right — always visible |
| **Any page → Enquire (mobile/tablet)** | Only via burger menu text link | `!` button visible in top bar without opening menu |
| **Contact form → Loan purpose** | Limited to BTL / Refinance | Full 8-option list aligned with live production site |

### User flow diagram (updated)

```
Homepage Hero
├── [Calculate Now] ──scroll──► Loan Calculator (#calculator)
└── [Enquire Now]   ──nav────► /contact-us

Navbar (all breakpoints)
└── [!] button      ──nav────► /contact-us

/contact-us
└── Contact form    ──POST───► API /contacts
         └── Loan purpose dropdown (8 options)
```

### Forms — open items (not yet fixed)

| Item | Priority | Notes |
|------|----------|-------|
| Align `TCreateContact` type with form payload | Medium | Type only has 4 fields; form sends 8+ |
| Fix mobile nav email typo | Low | `enquires@` vs `enquiries@` |
| End-to-end API submission test | High | Requires valid `NEXT_PUBLIC_API_URL` in `.env.dev` |
| Calculator email test | Medium | Requires `NEXT_PUBLIC_MAIL_ADDRESS` and `NEXT_PUBLIC_MAIL_AUTH` |

---

## Summary

| Category | Fixed in this cycle | Pre-existing (reviewed) | Open / follow-up |
|----------|--------------------|-----------------------|------------------|
| **Stability** | 3 bugs | Hydration guards, API fallbacks | 3 items |
| **Performance** | Build restored | Image opt, code splitting, caching | Lighthouse audit |
| **Responsiveness** | Hero + navbar layout | 3-tier nav, breakpoint system | Cross-browser QA |
| **Forms & flows** | Loan purpose + 2 new CTAs | 4 other forms reviewed | Type fix + API testing |

---

*Update this document as additional fixes ship. Pair with [`CODE_AUDIT.md`](./CODE_AUDIT.md) for the full technical audit.*
