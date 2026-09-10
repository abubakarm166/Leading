# Lending Bridge — Final QA & Handover (vs client Final Website Review PDF)

**Last updated:** 3 September 2026  
**Purpose:** Track each client item before AWS deploy and sign-off.

---

## QA summary (items 1–12)

| # | Requirement | Code status | Live / ops status |
|---|-------------|-------------|-------------------|
| 1 | Office address → Ground Floor, 172 Edmund St, Birmingham B3 2HB | ✅ Done | ⏳ Deploy |
| 2 | Website Terms — remove `lendhub.co.uk` | ✅ Done | ⏳ Deploy |
| 3 | Top bar — `!` → Enquire Now | ✅ Done | ⏳ Deploy |
| 4 | Enquiry form — only First/Last/Email/Phone required | ✅ Done | ⏳ Deploy + live form/email test |
| 5 | Final proofread | ✅ Key copy/CTA fixes applied | ⏳ Spot-check live |
| 6 | Consistency + products text cutoff | ✅ Done | ⏳ Visual pass live |
| 7 | Links, forms, `/product` → `/products`, case studies layout | ✅ Code ready (redirect + centred mockup layout) | ⏳ Live QA + CMS upload test |
| 8 | Mobile/browsers + GTM / conversions / call tracking | ✅ GTM ready via env; enquiry + phone/email dataLayer events | ⏳ Need `NEXT_PUBLIC_GTM_ID`; device pass |
| 9 | Stability + AWS monitoring | ✅ Next 15.2.9, `/health`, docs | ⏳ Confirm on EC2 |
| 10 | Performance | ✅ Build optimisations in place | ⏳ PageSpeed after deploy |
| 11 | Ownership & access | 📄 Checklist below | ⏳ Client action |
| 12 | Pre-deploy review | 📄 This document | ⏳ Sign-off after deploy |

---

## Google Tag Manager (item 8)

**Where:** `src/app/layout.tsx`

**Installed:** `GTM-58DF5MRB` in `src/app/layout.tsx` (every page, including Auction Finance).

1. Rebuild and restart PM2 on production after deploy.
2. Optional env override: `NEXT_PUBLIC_GTM_ID=GTM-58DF5MRB` (already the code default).
3. Inside GTM, configure:
   - GA4 / Google Ads (move tags here — hard-coded gtag was removed once GTM went live)
   - Custom events already fired by the site:
     - `enquiry_submit` (form success)
     - `phone_click` (navbar / contact / mobile nav)
     - `email_click` (navbar / contact / mobile nav)
4. Verify with **GTM Preview** on:
   - `https://www.lendingbridge.co.uk/products/auction-bridging-finance`
   - Homepage and contact page
5. Map those events to Ads conversions / call tracking as needed.

---

## Deploy to production

```bash
# Local
git add -A
git status   # do NOT commit .env.dev / secrets
git commit -m "Final review: product redirects, case studies layout, GTM-ready tracking"
git push origin main

# EC2
cd ~/Leading
git pull
# ensure NEXT_PUBLIC_GTM_ID is in production env if ready
npm ci
npm run build
pm2 restart leading --update-env
pm2 save

# Verify
curl -s http://127.0.0.1:3000/health
curl -I https://www.lendingbridge.co.uk/product/residential-bridges-and-btl-bridges
# Expect 308/301 → /products/residential-bridges-and-btl-bridges
```

---

## Live QA checklist (post-deploy)

### Content
- [ ] Address shows **Ground Floor, 172 Edmund St, Birmingham B3 2HB**
- [ ] Website Terms: **lendingbridge.co.uk** only
- [ ] Header: **Enquire Now** (not `!`)

### Forms & tracking
- [ ] Enquiry with only name/email/phone succeeds
- [ ] Success toast appears
- [ ] Enquiry email received
- [ ] GTM Preview sees `enquiry_submit` / `phone_click` (if GTM ID set)

### Products
- [ ] `/product/...` redirects to `/products/...`
- [ ] Product titles not cut off
- [ ] All 8 product pages load

### Case studies / blogs
- [ ] Detail layout matches mockup (image left, details right, story below)
- [ ] New CMS blog + case study match templates

### Mobile / stability
- [ ] No horizontal scroll; buttons tappable
- [ ] `pm2 status` online; `/health` ok; CloudWatch alarm set

---

## Ownership transfer (item 11)

| Asset | Transferred? |
|-------|--------------|
| GitHub repo access | [ ] |
| AWS / EC2 access | [ ] |
| Domain DNS | [ ] |
| SSL / Certbot notes | [ ] |
| Email API | [ ] |
| CMS / API admin | [ ] |
| Production `.env` (rotated) | [ ] |
| SSH keys (dev keys removed) | [ ] |
