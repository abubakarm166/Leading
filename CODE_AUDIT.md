# Full Code Audit — Lending Bridge Redesign

**Project:** `lending_bridge_redesign`  
**Stack:** Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS v4  
**Audit date:** June 2026  
**Scope:** Design-focused redesign with SEO content preserved

---

## 1. What areas were reviewed?

### Architecture & configuration
- Next.js App Router structure (`src/app/`)
- `next.config.ts` — image domains, compression, cache headers
- `package.json` scripts and dependency setup
- Environment variable usage (`.env.dev`, `.env.prod`)
- TypeScript configuration (`tsconfig.json`)

### Frontend pages (18 routes)
- Homepage and all marketing pages
- Dynamic routes: `/blogs/[slug]`, `/case-studies/[slug]`, `/products/[slug]`, `/product/[id]`
- Legal pages: privacy, cookie policy, terms, complaints, website terms
- Utility routes: `sitemap.ts`, `robots.ts`
- Internal `/testing` sandbox page

### Components
- **Common:** Navbar, MobileNav, Footer, Button, Input, ContactUs, FAQ, modals, carousels
- **Home:** Hero, Features, About, Calculator, Products, CaseStudies, Blogs, etc.
- **Team:** TeamClient, BookAppointmentModal, TeamDetailsModal
- **Other:** Resources, CaseStudies, Awards, ClientBroker

### Data & API layer
- Axios instance and interceptors (`src/utils/api/axios.ts`)
- API modules: blogs, case studies, team, contact, registration, appointment, newsletter, files
- Static content and constants (`src/utils/constants.ts`)
- Form validation helpers (`src/utils/helpers.ts`)
- TypeScript types (`src/types/index.ts`)

### Design system
- Global styles and Tailwind theme (`globals.css`, `tailwind.config.js`)
- Typography: League Spartan, Gilroy, Nunito Sans
- Color tokens: primary `#21558a`, background `#ebeff1`
- Responsive breakpoints and component-level styling

### SEO & analytics
- Per-page `metadata` exports (title, description, canonical, Open Graph)
- `sitemap.xml` generation (static + dynamic pages)
- Google Analytics / Google Ads scripts in root layout
- `robots.ts` and `llms.txt` / `llms.xml`

### Forms & user interactions
- Contact form (homepage + `/contact-us`)
- Loan calculator and email submission
- Broker registration (intermediaries page)
- Newsletter signup
- Team appointment booking

### Build & tooling
- npm vs Yarn package manager setup
- Native dependency resolution (`@tailwindcss/oxide`)
- ESLint configuration

---

## 2. What issues were identified?

### Critical / blocking

| # | Issue | Location | Severity |
|---|-------|----------|----------|
| 1 | **Build failure** — `@tailwindcss/oxide` native binding missing (`Cannot find native binding`) caused `next/font` and PostCSS to fail | `node_modules`, Tailwind v4 | Critical |
| 2 | **Broken `node_modules`** — mixed/corrupt install from npm + Yarn lockfiles coexisting | Project root | Critical |

### Functional / data

| # | Issue | Location | Severity |
|---|-------|----------|----------|
| 3 | **Incomplete loan purpose options** — contact form only had 2 options (BTL, Refinance) vs 8 on live site | `src/utils/constants.ts` | Medium |
| 4 | **`TCreateContact` type mismatch** — type defines 4 fields; form submits 8+ fields (`loanPurpose`, `propertyValue`, etc.) | `src/types/index.ts`, `ContactUs.tsx` | Medium |
| 5 | **Email typo in mobile nav** — `enquires@` instead of `enquiries@` | `src/components/common/MobileNav.tsx` | Low |

### Routing & SEO

| # | Issue | Location | Severity |
|---|-------|----------|----------|
| 6 | **Duplicate product routes** — both `/product/[id]` and `/products/[slug]` serve product pages; sitemap uses `/product/` only | `src/app/product/`, `src/app/products/`, `sitemap.ts` | Medium |
| 7 | **Products listing not in sitemap** — `/products` page missing from `sitemap.ts` | `src/app/sitemap.ts` | Low |

### UX / design

| # | Issue | Location | Severity |
|---|-------|----------|----------|
| 8 | **Navbar clutter** — “Enquire Now” as text link crowded the nav alongside contact details | `src/components/common/Navbar.tsx` | Medium |
| 9 | **Hero missing enquire CTA** — only “Calculate Now” present; no direct path to contact | `src/components/Home/Hero.tsx` | Medium |
| 10 | **Hero buttons oversized** — padding and font size too large relative to hero layout | `src/components/Home/Hero.tsx` | Low |

### DevOps / documentation

| # | Issue | Location | Severity |
|---|-------|----------|----------|
| 11 | **Package manager inconsistency** — `package.json` specifies Yarn 4; project also has `package-lock.json`; Yarn not installed locally | `package.json`, lockfiles | Low |
| 12 | **README is boilerplate** — default create-next-app content, no project-specific setup docs | `README.md` | Low |
| 13 | **Env file naming** — `yarn dev` expects `.env.dev`; warning message references `.env.development` / `.env.local` | `package.json`, `axios.ts` | Low |

### Not changed (by design)
- All SEO copy, metadata text, and product descriptions intentionally left unchanged per client requirements
- API integration logic unchanged
- Backend contract (`/contacts` payload shape) unchanged

---

## 3. What fixes were implemented?

### Build & environment

| Fix | Details |
|-----|---------|
| **Clean dependency reinstall** | Removed `node_modules` and `package-lock.json`, ran `npm install` to restore `@tailwindcss/oxide-linux-x64-gnu` native binding |
| **Build verified** | `npm run build` completes successfully; all routes compile |
| **Dev server verified** | `npm run dev` runs with `.env.dev` via `env-cmd` |

### Navigation (`Navbar.tsx`)

| Fix | Details |
|-----|---------|
| **Enquire CTA redesigned** | Removed “Enquire Now” text link from main nav items |
| **“!” enquire button** | Added circular primary button with `!` icon on far right (desktop, tablet, mobile) |
| **Layout restructured** | Nav links grouped left; contact info + enquire button grouped right with divider |
| **Accessibility** | `aria-label="Enquire Now"` and `title="Enquire Now"` on icon button |

### Contact form (`constants.ts`)

| Fix | Details |
|-----|---------|
| **Loan purpose options expanded** | Updated `LOAN_PURPOSE_OPTIONS` from 2 to 8 options matching live site: Re-finance, Normal Purchase, Auction Purchase, Development funds, Capital Raise, Re-Finance + Capital Raise, Purchase + Capital Raise, Re-Finance + Development Funds |

### Hero section (`Hero.tsx`)

| Fix | Details |
|-----|---------|
| **Enquire Now button added** | Outline-style button placed beside “Calculate Now”; links to `/contact-us` |
| **Button sizing reduced** | Padding `px-8 py-3` / `lg:px-10 lg:py-3.5`; text `14px`–`15px` (down from `18px`–`20px`) |
| **Decorative arrow adjusted** | Scaled and repositioned to fit smaller button group |

---

## 4. Open items (not yet fixed)

These were identified during the audit but are **not implemented** — recommend addressing in a follow-up:

1. **Fix mobile nav email typo** — `enquires@` → `enquiries@lendingbridge.co.uk`
2. **Align `TCreateContact` type** with actual form fields sent to `/contacts`
3. **Consolidate product routes** — pick `/products/[slug]` or `/product/[id]` and add redirects for the other
4. **Add `/products` to sitemap**
5. **Standardize on one package manager** (Yarn via corepack, or npm only — remove unused lockfile)
6. **Update README** with env setup, scripts, and deployment notes

---

## 5. Files modified in this audit cycle

| File | Change type |
|------|-------------|
| `src/components/common/Navbar.tsx` | Design — enquire button, layout |
| `src/utils/constants.ts` | Data — loan purpose options |
| `src/components/Home/Hero.tsx` | Design — enquire button, button sizing |
| `node_modules/` (reinstalled) | Build fix |
| `package-lock.json` (regenerated) | Build fix |

---

## 6. Testing checklist

- [x] Production build passes (`npm run build`)
- [x] Dev server starts (`npm run dev`)
- [x] Homepage hero — Calculate + Enquire buttons render
- [x] Navbar — `!` enquire button on all breakpoints
- [x] Contact form — 8 loan purpose options in dropdown
- [ ] Contact form submission to live API (requires valid `NEXT_PUBLIC_API_URL`)
- [ ] Loan calculator email send (requires `NEXT_PUBLIC_MAIL_*` vars)
- [ ] Cross-browser visual check (Chrome, Safari, mobile)

---

*This document should be updated as additional audit findings are resolved or new changes are shipped.*
