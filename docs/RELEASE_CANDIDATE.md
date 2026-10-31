# Tumkur Events — Release Candidate Specification & Readiness Manifesto
**Release Candidate Identifier:** `RC-1.0.0-phase14`  
**Base Git Commit:** `df6c12e`  
**Date Generated:** October 31, 2026  
**Release Lead:** Principal Frontend Engineer, Senior QA Architect & Release Manager  
**Target Environment:** Production Web (Self-Hosted Node / Vercel / Cloudflare Pages)  

---

## 1. Release Candidate Overview

This Release Candidate (`RC-1.0.0-phase14`) represents the completed, fully audited, and design-locked implementation of the **Tumkur Events** contemporary luxury celebration website. 

The application architecture has been frozen and verified across all technical dimensions:
- Next.js 16.4.3 App Router with Turbopack static site generation (SSG).
- Strictly typed TypeScript codebase with zero compilation errors (`tsc --noEmit`).
- Static code analysis passing with zero ESLint warnings.
- 100% link integrity across all internal routes and navigation components.
- Zero third-party invasive trackers, marketing pixels, or unauthorized cookies.

---

## 2. Routes & Architecture Inventory

The release candidate compiles **34 static HTML pages** across 17 canonical routes:

| # | Route | Purpose | Prerendering Mode |
|---|---|---|---|
| 1 | `/` | Approved Homepage (Scrollytelling Hero, 11 luxury sections) | Static (SSG) |
| 2 | `/about` | Brand story, founder philosophy, craft metrics | Static (SSG) |
| 3 | `/events` | Occasion catalog with filtering & occasion detail routing | Static (SSG) |
| 4 | `/events/birthdays` | Kids & milestone birthdays occasion detail | Dynamic SSG |
| 5 | `/events/traditional-ceremonies` | Traditional ceremonies (Upanayana, Naming, Saree) | Dynamic SSG |
| 6 | `/events/weddings` | Grand weddings & engagement celebrations | Dynamic SSG |
| 7 | `/events/baby-showers` | Seemantha & traditional cradle ceremonies | Dynamic SSG |
| 8 | `/events/corporate` | Corporate galas, brand launches, annual days | Dynamic SSG |
| 9 | `/events/special-occasions` | Milestone anniversaries & private family galas | Dynamic SSG |
| 10 | `/events/stage-events` | Grand auditoriums & large public stage productions | Dynamic SSG |
| 11 | `/services` | 6 service pillars & interactive customization calculator | Static (SSG) |
| 12 | `/packages` | 3 curated decoration collections + bespoke commission | Static (SSG) |
| 13 | `/gallery` | 12-category filterable photo exhibition & lightbox | Static (SSG) |
| 14 | `/reviews` | Client reflection archive (Honest empty state) | Static (SSG) |
| 15 | `/blog` | Celebration Journal magazine archive & search | Static (SSG) |
| 16 | `/blog/category/[slug]` | 5 category archives (`weddings`, `birthdays`, etc.) | Dynamic SSG (5 paths) |
| 17 | `/blog/[slug]` | Editorial reading system (7 draft blueprints) | Dynamic SSG |
| 18 | `/contact` | Conversion enquiry form & direct WhatsApp routing | Static (SSG) |
| 19 | `/privacy-policy` | DPDP Act 2023 & IT Act compliant privacy terms | Static (SSG) |
| 20 | `/terms-and-conditions` | Event booking terms, payment schedules, jurisdiction | Static (SSG) |
| 21 | `/refund-policy` | 4-tier cancellation policy & postponement terms | Static (SSG) |
| 22 | `/cookie-policy` | Zero third-party ad tracker policy & essential storage | Static (SSG) |
| 23 | `/not-found` (404) | Custom branded luxury error recovery view | Static (SSG) |
| * | `/our-work` | Legacy route — 308 permanent redirect to `/gallery` | Redirect |

---

## 3. Technical Verification Audit Results

* **TypeScript Compilation:** `npm run type-check` (`tsc --noEmit`)  
  *Result:* **PASSED (0 errors)**.
* **ESLint / Static Analysis:** `npm run lint`  
  *Result:* **PASSED (0 warnings, 0 errors)**.
* **Production Build:** `npm run build` (`next build` with Turbopack)  
  *Result:* **PASSED**. 34/34 static pages compiled in 750ms with zero hydration errors.
* **Internal Link Auditing:** Scanned all internal `<Link>` and `<a>` references.  
  *Result:* **PASSED (0 broken links)**.

---

## 4. Known Technical Issues & Limitations

* **Critical Technical Bugs:** `0` (None identified).
* **High-Priority Technical Bugs:** `0` (None identified).
* **Architectural Boundaries / Limitations:**
  - *Chatbot:* Operates deterministically on the client side for FAQ triage and WhatsApp routing. Autonomous dynamic LLM integration (Gemini 1.5 Flash API) is intentionally deferred to post-launch.
  - *Localhost Performance Metrics:* Synthetic local Lighthouse audits cannot measure real-world multi-region CDN edge distribution, HTTP/3 delivery, or dynamic image optimization. Production performance must be benchmarked on live DNS.

---

## 5. Outstanding Content & Business Approvals

Before this release candidate is transitioned from staging to live public DNS, the following items require formal business owner verification:

1. **Official WhatsApp & Phone Line:**
   - *Current Code Value:* `+91 94812 34567` (and Alt: `+91 98801 23456`).
   - *Action Required:* Client must confirm their active business SIM card number so incoming calls and WhatsApp messages land on the owner's device.
2. **Studio Physical Address:**
   - *Current Code Value:* `B.H. Road, Near Ashoka Nagar, Ashoka Nagar, Tumakuru, Karnataka — 572102`.
   - *Action Required:* Client must confirm their exact studio or registered office premises in Tumakuru.
3. **Founding Year Synchronization:**
   - *Current Code Values:* `2018` (in `site.ts`) vs. `2021` (in `trust-local-presence.tsx`).
   - *Action Required:* Confirm whether 2018 or 2021 is the official founding date.
4. **Decoration Collection Pricing:**
   - *Current Code Values:*
     - Intimate Moments: `₹18,000 – ₹35,000`
     - Signature Celebrations: `₹45,000 – ₹85,000`
     - Grand Statements: `₹1,10,000 – ₹2,50,000+`
   - *Action Required:* Client must confirm indicative price points and inclusion tiers.
5. **Blog Editorial Drafts:**
   - *Current Code Status:* 7 drafts in `src/lib/blog/posts.ts` with `status: 'draft'`.
   - *Action Required:* Client must review drafted articles and authorize publication before changing status to `'published'`.

---

## 6. Outstanding Legal & Statutory Approvals

As documented in [`docs/LEGAL_CONTENT_REVIEW.md`](file:///d:/Projects/Tumkur Events/docs/LEGAL_CONTENT_REVIEW.md), commercial terms require formal sign-off:

1. **Statutory Entity Information:** Append official registered legal name (e.g. Sole Proprietorship, LLP, or Pvt Ltd) and GSTIN.
2. **Booking Advance Terms:** Confirm reservation deposit percentage (e.g. 25%, 30%, or 50%).
3. **Cancellation & Refund Schedule:** Formalize customer cancellation tiers (e.g. >30 days vs <15 days).
4. **Court Jurisdiction:** Confirm court jurisdiction clause (Tumakuru, Karnataka).

---

## 7. Remaining Deployment & Infrastructure Configuration

1. **Domain Delegation:** Configure apex `A`/`AAAA` and `CNAME` records with domain registrar pointing to the production edge network.
2. **SSL / TLS Certificate:** Enforce automated HTTPS redirection and HSTS.
3. **Production Secrets:** Populate environment variables defined in `.env.example`:
   - `NEXT_PUBLIC_SITE_URL=https://tumkurevents.com`
   - `NEXT_PUBLIC_WHATSAPP_PHONE=919481234567`
   - `NEXT_PUBLIC_CONTACT_PHONE=+91 94812 34567`
   - `NEXT_PUBLIC_CONTACT_EMAIL=concierge@tumkurevents.com`
4. **Social Links:** Verify that links in `src/config/site.ts` connect to active, authenticated business handles (`@tumkurevents`).

---

## 8. Required Manual Device Acceptance Testing

Before going live, the 29 practical manual tests documented in [`docs/FINAL_MANUAL_QA.md`](file:///d:/Projects/Tumkur Events/docs/FINAL_MANUAL_QA.md) must be executed on physical hardware:
- **Suite A:** Android Chrome (Hero scrollytelling, pinned occasions, filmstrip swipe, WhatsApp click).
- **Suite B:** iPhone Safari (Inline hero video, Dynamic Island safe-area clearance, date picker, lightbox swipe).
- **Suite C:** Tablet (iPad portrait & landscape grid adaptation).
- **Suite D:** Desktop (17.88s hero video sync, multi-column editorial, keyboard tab navigation).

---

## 9. Rollback & Contingency Plan

In the event of an unforeseen production regression upon DNS cutover:
1. **Hosting Edge Rollback:** Hosting providers (Vercel, Netlify, Cloudflare) support instantaneous zero-downtime rollbacks to previous deployment SHAs.
2. **Git Stability:** Commit `df6c12e` is tagged as the stable release candidate baseline on `origin/main`.
3. **Static Integrity:** Because the site is 100% SSG static HTML, no database migrations or server state rollbacks are required.

---

## 10. Final Release Sign-Off Matrix

| Release Gate | Gate Owner | Evaluation Status | Decision |
|---|---|---|---|
| **Technical & Code Quality Gate** | Frontend Engineer / QA Lead | All builds, types, linters, and routes verified | **PASSED** |
| **Interactive Design Lock Gate** | Creative Art Director | All 11 homepage sections & mobile patterns (M01-M04) verified | **PASSED** |
| **Business Data & Pricing Gate** | Tumkur Events Ownership | Phone, address, package prices, and founding year | **PENDING APPROVAL** |
| **Legal Compliance Gate** | Legal Counsel / Management | Commercial cancellation tiers and GSTIN details | **PENDING APPROVAL** |
| **Physical Device QA Gate** | Stakeholder / QA Tester | 29 physical test cases in `FINAL_MANUAL_QA.md` | **PENDING TESTING** |

**Current Release Status:** **RELEASE CANDIDATE READY FOR FINAL ACCEPTANCE REVIEW**  
*(Deployment is strictly held until the business owner completes the sign-off items in Sections 5 and 6).*

