# Tumkur Events — Pre-Launch Verification & Approval Registry
**Phase 13B: Pre-Launch Content, Identity & Approval Verification**  
**Document Reference:** `docs/PRE_LAUNCH_APPROVAL.md`  
**Date Generated:** October 31, 2026  
**Auditor / Roles:** Senior Web Architect, Luxury Art Director, Security & Legal Compliance Engineer  
**Repository Branch:** `main` (Audit Commit: `df6c12e`)  

---

## Executive Summary
This document provides an evidence-based audit of all website claims, business identity details, interactive mobile implementations, commercial collections, and release gates for the Tumkur Events web platform. 

Every claim has been investigated directly against repository source code. Each item is strictly categorized into one of four statuses:
- **VERIFIED:** Fully established and backed by repository source code.
- **REQUIRES APPROVAL:** Implemented with realistic/indicative placeholders; requires explicit confirmation from the business owner.
- **UNVERIFIED:** Factual claim or previous report statement that lacks verifiable source evidence in the codebase.
- **NOT IMPLEMENTED:** Feature or external service is intentionally absent or reserved for future phases.

---

## 1. Release Verification Matrix

### Category 1: Technically Verified (Codebase Confirmed)

| Item | Current Value | Codebase Evidence | Status | Required Action |
|---|---|---|---|---|
| **Framework & Engine** | Next.js 16.4.3 (App Router with Turbopack) + TypeScript | `package.json`, `next.config.ts` | **VERIFIED** | None. Builds cleanly in production. |
| **Route Coverage** | 17 canonical routes (34 SSG static pages generated) | `src/app/`, `next build` output | **VERIFIED** | None. All routes compile with 0 errors. |
| **Sitemap Completeness** | All 7 event categories, 5 blog categories, and published articles | `src/app/sitemap.ts`, `sitemap.xml` | **VERIFIED** | Automatically syncs with canonical data. |
| **Legacy Route Handling** | `/our-work` redirects (HTTP 308) to `/gallery` | `src/app/our-work/page.tsx`, `src/config/site.ts` | **VERIFIED** | None. Seamless redirection active. |
| **Occasions Mobile Showcase (M01)** | Pinned alternating visual reveal showcase (Scene 1-4) | `src/components/sections/explore-your-occasion.tsx` (`mm.add('(max-width: 1023px)', ... pin: true)`) | **VERIFIED** | Preserved exact approved mobile pinning & smooth scrub. |
| **Selected Celebrations Mobile (M02)** | Photographic filmstrip with native snap scroll & touch gestures | `src/components/sections/selected-celebrations.tsx` (`snap-x`, `w-[84vw]`, `touch-pan-x touch-pan-y`) | **VERIFIED** | Preserved approved touch navigation & counter. |
| **Our Expertise Mobile (M03)** | Horizontal expertise editions snap carousel | `src/components/sections/our-expertise.tsx` (`snap-x snap-mandatory`, edition cards) | **VERIFIED** | Preserved approved editions horizontal scroll. |
| **How We Work Mobile (M04)** | Four-chapter interactive storyboard with chapter badges | `src/components/sections/event-process-timeline.tsx` (4 interactive chapters: Vision, Concept, Details, Delivery) | **VERIFIED** | Preserved approved non-pinning mobile storyboard. |
| **Hero Scrollytelling (Desktop)** | 17.88s video scrub synced to 4 narrative chapters | `src/components/sections/hero/cinematic-hero.tsx`, `use-hero-scroll.ts` | **VERIFIED** | Desktop video scrub and mobile fallbacks active. |
| **Motion Accessibility** | `prefers-reduced-motion` suppresses heavy pinning & instant-renders | `src/lib/gsap.ts`, `prefersReducedMotion()` in all section components | **VERIFIED** | Tested and verified in GSAP contexts. |
| **Touch Targets & FABs** | Floating WhatsApp, Phone, and Chatbot: 52px (mobile), 56px (tablet), 60px (desktop) | `src/styles/tokens.css`, `src/components/floating/` | **VERIFIED** | Exceeds WCAG 2.1 AA 44×44px standards; incorporates safe-area-insets. |
| **Internal Link Integrity** | 100% of internal links point to valid canonical routes | Automated AST link audit across all components | **VERIFIED** | Zero broken internal links. |
| **Ad Trackers & Pixels** | 0 third-party advertising cookies, 0 tracking pixels | Codebase audit of `package.json`, `layout.tsx`, `head` | **VERIFIED** | Privacy-conscious architecture; zero intrusive trackers. |
| **LocalBusiness Schema** | `@type: 'LocalBusiness'` with address & contact points | `src/app/page.tsx`, `src/app/contact/page.tsx` | **VERIFIED** | Correct schema used; no inappropriate `EventVenue` types. |

---

### Category 2: Pending Client / Business Owner Approval

| Item | Current Value | Codebase Evidence | Status | Required Action |
|---|---|---|---|---|
| **Package Curation Names** | 01. Intimate Moments<br>02. Signature Celebrations<br>03. Grand Statements<br>+ Custom Bespoke Commissions | `src/config/packages.ts`, `src/config/packages-page.ts` | **REQUIRES APPROVAL** | Business owner must confirm whether these 3 collection names align with commercial offerings. |
| **Package Indicative Pricing** | Intimate: `₹18,000 – ₹35,000`<br>Signature: `₹45,000 – ₹85,000`<br>Grand: `₹1,10,000 – ₹2,50,000+` | `src/config/packages.ts`, `src/config/packages-page.ts` | **REQUIRES APPROVAL** | Client must review and approve indicative pricing tiers and disclaimers. |
| **Package Inclusions & Exclusions** | Balloon arches, fresh jasmine/marigold mandapams, crystal chandeliers, couple seating | `src/config/packages.ts` (`detailedInclusions`) | **REQUIRES APPROVAL** | Confirm specific vendor procurement inclusions per package tier. |
| **Primary Contact Number** | `+91 94812 34567` (and Alt: `+91 98801 23456`) | `src/config/site.ts`, `src/config/footer.ts`, `src/components/contact/contact-direct.tsx` | **REQUIRES APPROVAL** | Client must provide their official active mobile SIM number for calls and WhatsApp. |
| **Business Address** | `B.H. Road, Near Ashoka Nagar, Ashoka Nagar, Tumakuru, Karnataka — 572102` | `src/config/site.ts`, `src/components/contact/contact-direct.tsx` | **REQUIRES APPROVAL** | Confirm exact physical studio address or update to registered office premises. |
| **Founding Year Discrepancy** | `2018` (in `site.ts`) vs `Celebrations Since 2021` (in `trust-local-presence.tsx`) | `src/config/site.ts` (`establishedYear: 2018`), `src/components/sections/trust-local-presence.tsx` | **REQUIRES APPROVAL** | Clarify the official founding year (2018 vs. 2021) and synchronize across components. |
| **Legal Entity & GSTIN** | `Tumkur Events Management & Luxury Decor` (GSTIN not specified) | `src/config/site.ts`, `docs/LEGAL_CONTENT_REVIEW.md` | **REQUIRES APPROVAL** | Provide registered corporate entity name (Proprietorship / LLP / Pvt Ltd) and GSTIN for invoice disclosures. |
| **Commercial Terms & Conditions** | Advance deposit percentage, payment milestones, venue access hours, cancellation tiers | `src/content/legal/terms-and-conditions.ts`, `src/content/legal/refund-policy.ts` | **REQUIRES APPROVAL** | Complete business sign-off on items highlighted in `docs/LEGAL_CONTENT_REVIEW.md`. |
| **Editorial Blog Publications** | 7 prepared editorial drafts (`status: 'draft'`, `publishedAt: null`) | `src/lib/blog/posts.ts` | **REQUIRES APPROVAL** | Client review of drafts before changing status from `'draft'` to `'published'`. |
| **Client Testimonials** | `verifiedReviews: []` (Empty array; renders graceful "Archive in progress" state) | `src/config/reviews-page.ts`, `src/config/testimonials.ts` | **REQUIRES APPROVAL** | Supply authenticated client quotes, names, and event dates to display live testimonials. |

---

### Category 3: Pending Manual Device Testing (Stakeholder Review)

| Item | Target Device / Viewport | Test Objective | Status | Required Action |
|---|---|---|---|---|
| **Occasions Pinned Scrub** | iOS Safari (iPhone 13/14/15/16) | Verify scroll resistance, navbar safe offset (84px), and bidirectional chapter exits | **PENDING MANUAL TESTING** | Stakeholder manual scroll test on physical device. |
| **Mobile Video Scrub** | Android Chrome (Samsung / Pixel) | Verify smooth hero video scrubbing and touch responsiveness | **PENDING MANUAL TESTING** | Stakeholder manual playback test on physical device. |
| **Touch Gesture Galleries** | iOS Safari & Android Chrome | Verify filmstrip swiping (`Selected Celebrations`) and horizontal editions snapping (`Our Expertise`) | **PENDING MANUAL TESTING** | Verify touch swipe momentum and lack of horizontal viewport drift. |
| **WhatsApp Direct Concierge** | Mobile browsers | Click floating WhatsApp button and package enquiry buttons | **PENDING MANUAL TESTING** | Confirm native WhatsApp application launches with prefilled message. |
| **Gallery Lightbox Gestures** | Mobile & Tablet | Open photo lightbox on `/gallery`, paginate via swipe/touch, close via tap outside | **PENDING MANUAL TESTING** | Verify lightbox modal ergonomics on physical screens. |
| **Safe-Area Inset Ergonomics** | iPhone with Dynamic Island / Home Indicator | Check bottom floating action bar clearance | **PENDING MANUAL TESTING** | Verify buttons do not overlap system gesture bar. |

---

### Category 4: Pending Deployment & Infrastructure Configuration

| Item | Current Value | Target Specification | Status | Required Action |
|---|---|---|---|---|
| **Production Domain & DNS** | `https://tumkurevents.com` (Configured in metadata) | Live Apex / `www` DNS pointing to host | **PENDING DEPLOYMENT** | Configure DNS `A`/`AAAA`/`CNAME` records with hosting provider. |
| **SSL / TLS Certificate** | Not active on localhost | Let's Encrypt / Cloudflare Edge SSL | **PENDING DEPLOYMENT** | Enable automated HTTPS redirection and HSTS. |
| **Environment Variables** | Documented in `.env.example` | Production dashboard secrets | **PENDING DEPLOYMENT** | Add `NEXT_PUBLIC_SITE_URL`, contact phone overrides, and emails in hosting platform. |
| **Social Media Profiles** | Placeholder URLs (`instagram.com/tumkurevents`, etc.) | Verified live authenticated brand profiles | **PENDING DEPLOYMENT** | Verify that official handles match links in `src/config/site.ts`. |
| **Chatbot Backend API** | Client-side deterministic assistant (FAQ & WhatsApp) | Optional future Gemini 1.5 Flash API route | **NOT IMPLEMENTED** | Preserved as safe client-side triage; AI integration deferred to post-launch phase. |

---

## 2. Inconsistencies Corrected from Previous Audit Report

The technical audit in Phase 13 made several generalized claims in its summary text that differed from the actual repository code:

1. **Package Curation Discrepancy:**
   - *Previous Report Claim:* "4 tiered collections (Silver, Gold, Diamond, Bespoke Royal) with budget transparency (₹45k, ₹1.2L, ₹2.8L, ₹65L)".
   - *Actual Codebase Reality:* The codebase in both `src/config/packages.ts` and `src/config/packages-page.ts` contains:
     1. **Intimate Moments** (`₹18,000 – ₹35,000`)
     2. **Signature Celebrations** (`₹45,000 – ₹85,000`)
     3. **Grand Statements** (`₹1,10,000 – ₹2,50,000+`)
     4. **Bespoke Commissions** (Custom quotation)
   - *Resolution:* Preserved the authentic codebase data; flagged the exact 3 collections for client pricing approval.

2. **Mobile Pinning Discrepancy:**
   - *Previous Report Claim:* Stated that mobile breakpoint "suppresses heavy pinning".
   - *Actual Codebase Reality:* `src/components/sections/explore-your-occasion.tsx` maintains the exact approved mobile pinning (`mm.add('(max-width: 1023px)', ... pin: true)`) with smooth 2.2× viewport scrub and alternating reveals (M01).
   - *Resolution:* Confirmed that the approved mobile pinned sequence is 100% active and intact in the repository.

3. **Published Blog Posts Discrepancy:**
   - *Previous Report Claim:* "All 8 editorial blog posts compiled and indexed in sitemap".
   - *Actual Codebase Reality:* There are 7 drafted article blueprints in `src/lib/blog/posts.ts` with `status: 'draft'`, `publishedAt: null`. `getPublishedPosts()` correctly returns `[]`, meaning zero unapproved drafts are published live or indexed in `sitemap.xml`. `/blog` displays an authentic "EDITORIAL ARCHIVE IN PROGRESS" status.
   - *Resolution:* Clarified that blog drafts remain in draft mode until client editorial approval.

4. **Reviews & Testimonials Discrepancy:**
   - *Previous Report Claim:* "12 curated client stories loaded... Google review verification pill".
   - *Actual Codebase Reality:* In strict adherence to the zero-fake-review policy, `verifiedReviews` in `src/config/reviews-page.ts` is an empty array `[]`. The page displays an honest "Archive in Progress" editorial notice and invites genuine feedback.
   - *Resolution:* Confirmed zero fabricated customer feedback exists in the project.

5. **Reported Phone Number & Coordinates:**
   - *Previous Report Claim:* Stated `+91 94801 88880` and coordinates `13.3409, 77.1010` with `EventVenue` schema.
   - *Actual Codebase Reality:* The codebase uses `+91 94812 34567` (and Alt: `+91 98801 23456`) in `src/config/site.ts`. Coordinates `13.3409, 77.1010` do not exist in the source code. Structured data correctly uses `@type: 'LocalBusiness'` (not `EventVenue`).
   - *Resolution:* Flagged phone number and address for client confirmation.

---

## 3. Final Pre-Launch Decision & Sign-Off Gate

| Gate | Status | Detail |
|---|---|---|
| **Technical Validation Gate** | **PASSED** | 0 TypeScript errors, 0 lint warnings, Next.js build succeeds with 34/34 SSG static pages. |
| **Interactive Design Gate** | **PASSED** | All desktop and mobile approved interaction patterns (M01-M04) verified intact. |
| **Business Approval Gate** | **PENDING** | Pending client sign-off on contact phone, address, founding year, package pricing, and legal terms. |
| **Device Smoke Test Gate** | **PENDING** | Pending manual walkthrough by stakeholder on physical iOS Safari and Android Chrome devices. |

**Current Release Status:** **READY FOR CLIENT APPROVAL**  
*(Deployment is strictly held until the business owner completes the approval items listed in Category 2).*

