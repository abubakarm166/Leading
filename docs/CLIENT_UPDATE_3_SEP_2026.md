# Lending Bridge Website — Update Summary
**Date:** 3 September 2026  
**Prepared for:** Lending Bridge  
**Regarding:** Final Website Review amendments

---

Hi,

Please find below a summary of the work completed today against your Final Website Review. The latest updates have now been deployed to the server.

---

## Completed today

### 1. Product pages — duplicate URLs fixed
You highlighted that both of these were live as separate pages:

- `https://www.lendingbridge.co.uk/product/...`
- `https://www.lendingbridge.co.uk/products/...`

**What we did:**
- Consolidated so there is **one product page per product** under `/products/...`
- Old `/product/...` links now **redirect** to the correct `/products/...` page
- This has been applied across **all products**, not only Residential Bridges & BTL Bridges

### 2. Products section — text cut off
Where product titles and highlight text were being cut off at the end, the layout has been adjusted so the full text displays correctly.

### 3. Case studies layout
Updated to match the centred layout you provided:

- Property image on the **left**
- Title and key details on the **right** (Location, Value of Loan, LTV, Property Type, Type of Deal)
- Case study story content **below**

### 4. Consistency & proofread (further tidy-up)
- Button wording aligned (e.g. Enquire Now / Calculate Now / Read More)
- Minor copy and link corrections
- Mobile navigation email corrected to `enquiries@lendingbridge.co.uk`

### 5. Tracking preparation (Google Tag Manager)
As requested for analytics and call tracking:

- The website is now **ready for Google Tag Manager**
- Enquiry form submissions and phone/email clicks already fire tracking events
- Once you provide your **GTM container ID** (e.g. `GTM-XXXXXXX`), it can be switched on so GA4, Ads conversions, and call tracking can be managed in Tag Manager without further developer work for most changes

---

## Already completed earlier (confirmed still in place)

| Item | Status |
|------|--------|
| Office address updated to **Ground Floor, 172 Edmund St, Birmingham B3 2HB** | Done |
| Website Terms — `lendhub.co.uk` replaced with **lendingbridge.co.uk** | Done |
| Top bar — **!** replaced with **Enquire Now** | Done |
| Enquiry form — only First Name, Last Name, Email, Phone required | Done |

---

## Recommended live checks (please review)

We recommend you quickly confirm the following on the live site:

1. Address appears correctly in the footer / contact / legal pages  
2. Header shows **Enquire Now**  
3. An old product link such as `/product/residential-bridges-and-btl-bridges` opens the correct `/products/...` page  
4. Enquiry form submits successfully and you receive the notification email  
5. A case study page matches the new centred layout  
6. Mobile view looks correct (no cut-off text / horizontal scroll)

---

## Remaining items & completed transfers

| Item | Notes |
|------|--------|
| **GTM container ID** | Please send when ready so Tag Manager can be fully enabled |
| Final mobile / browser sign-off | **Done** — reviewed across mobile devices and main browsers |
| Ownership & access transfer | **Done** — GitHub access added (`marketag2020-glitch`); AWS already belongs to the client; domain already in the client account |
| Formal project sign-off | Once you are happy with the live checks above |

---

## Next step

Mobile/browser review and ownership/access transfer are complete. Please review the live website against the checks above and let us know:

1. Any remaining feedback  
2. Your **Google Tag Manager ID** (if available)  
3. Confirmation that you are happy to proceed to formal project sign-off


Thank you for your patience and clear feedback throughout this final stage.

Kind regards,  
[Your name]  
[Your company / contact details]
