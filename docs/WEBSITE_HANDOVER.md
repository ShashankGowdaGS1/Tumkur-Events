# Tumkur Events — Client Website Handover & Operating Manual
**Document Reference:** `docs/WEBSITE_HANDOVER.md`  
**System Architecture:** Next.js 16.4.3 (App Router with Turbopack), TypeScript, Tailwind CSS, GSAP 3  
**Release Candidate Baseline:** `RC-1.0.0-phase14` (Git Commit: `df6c12e`)  
**Target Domain:** `https://tumkurevents.com`  
**Confidentiality Note:** Zero passwords, API keys, or private secrets are stored in this document.

---

## 1. Website Architecture Overview

The Tumkur Events web platform is designed as a contemporary luxury celebration portal rooted in South Karnataka cultural authenticity. It features:
- **Fast Edge Performance:** 34 static pages generated at build time (SSG), loading in milliseconds with zero database latency.
- **Cinematic Scrollytelling:** Fullscreen hero video scrub and scroll-pinned chapter reveals powered by GSAP and ScrollTrigger.
- **Mobile-First UX:** 4 bespoke mobile interaction patterns (M01–M04) engineered for natural touch gestures and zero layout shift.
- **Privacy-First:** Zero third-party advertising cookies or invasive tracking scripts. Direct, encrypted WhatsApp enquiry routing.

---

## 2. Directory & Configuration Structure

All client-editable content, pricing, and business details are centralized in dedicated configuration files:

```
src/
├── app/                  # Next.js App Router canonical pages and layouts
├── components/           # Reusable UI components (header, footer, sections, floating FABs)
├── config/               # Centralized content and business datasets:
│   ├── site.ts           # Business identity, contact numbers, email, address, and navigation
│   ├── event-detail-data.ts # Content, descriptions, and FAQs for all 7 event categories
│   ├── services-page.ts  # 6 service pillars and customization calculator data
│   ├── packages.ts       # Homepage package curations and pricing
│   ├── packages-page.ts  # Dedicated /packages collections and inclusions
│   ├── gallery.ts        # 12-category gallery items, images, and captions
│   ├── reviews-page.ts   # Client testimonial repository (empty by default)
│   ├── about-page.ts     # Brand story, philosophy, and craft details
│   └── footer.ts         # Footer links, WhatsApp prefill text, and business hours
├── lib/
│   ├── blog/             # Editorial blog architecture (posts.ts, categories.ts, queries.ts)
│   └── gsap.ts           # GSAP animation registration and reduced-motion utilities
└── styles/
    └── tokens.css        # Brand color hex codes and floating action button sizing
```

---

## 3. How to Update Content

### A. Updating Business Contact Details
To update the business phone number, WhatsApp destination, email, or studio address:
1. Open `src/config/site.ts`.
2. Locate the `contact` object:
   ```ts
   contact: {
     phone: '+91 94812 34567',        // Update to your active phone number
     phoneDisplay: '+91 94812 34567', // Format as you wish it displayed
     email: 'concierge@tumkurevents.com',
     address: {
       streetAddress: 'Your Street Address',
       city: 'Tumakuru',
       postalCode: '572102',
     },
   }
   ```
3. Open `src/config/footer.ts` to update the WhatsApp click-to-chat URL if required (`https://wa.me/919481234567`).

### B. Updating Event Categories & Details
To modify text, floral disciplines, or FAQs for any of the 7 event categories (`birthdays`, `traditional-ceremonies`, `weddings`, `baby-showers`, `corporate`, `special-occasions`, `stage-events`):
1. Open `src/config/event-detail-data.ts`.
2. Locate the specific category slug (e.g. `weddings`).
3. Edit the title, subtitle, cultural narrative, decor disciplines, or FAQ items.

### C. Updating Decoration Package Pricing
Package collections appear on both the Homepage (Section 08) and the dedicated `/packages` page:
1. **Homepage Section 08:** Open `src/config/packages.ts` and modify `priceDisplay`, `highlights`, or `description`.
2. **Dedicated Packages Page:** Open `src/config/packages-page.ts` and modify the collection options, `priceDisplay` (e.g. `₹45,000 – ₹85,000`), or `preparedMessage`.

### D. Updating Gallery Photographs
To add or replace celebration photographs in the filterable exhibition:
1. Place new optimized images (`.jpg` or `.webp`) in `public/images/gallery/` or `public/images/events/`.
2. Open `src/config/gallery.ts`.
3. Add a new item to `galleryItems`:
   ```ts
   {
     id: 'gallery-wedding-04',
     title: 'Floral Mandapam Arch',
     category: 'mandapams',
     src: '/images/events/weddings.jpg',
     alt: 'Handcrafted wedding mandapam with fresh jasmine and brass samai lamps in Tumakuru',
     aspect: 'portrait', // 'portrait' or 'landscape'
   }
   ```

### E. Publishing Editorial Blog Articles
The blog system in `src/lib/blog/posts.ts` contains 7 prepared editorial drafts:
1. Open `src/lib/blog/posts.ts`.
2. Find the article you wish to publish.
3. Change its status from `'draft'` to `'published'`:
   ```ts
   status: 'published',
   publishedAt: '2026-11-01', // Set the publication date
   ```
4. Run `npm run build`. The article will automatically be indexed in `sitemap.xml`, appear on `/blog`, and be discoverable by search engines.

### F. Adding Authentic Client Reviews
In strict compliance with the zero-fake-review policy, `verifiedReviews` in `src/config/reviews-page.ts` is initially an empty array:
1. When real clients provide feedback, open `src/config/reviews-page.ts`.
2. Append a verified review object:
   ```ts
   {
     id: 'review-01',
     customerDisplayName: 'Sowmya & Karthik',
     quote: 'The jasmine mandapam and brass lighting made our wedding feel magical...',
     rating: 5,
     source: 'google', // 'google' | 'direct' | 'wedding_wire'
     sourceLabel: 'Google Review',
     eventCategory: 'Wedding & Reception',
     eventDate: 'October 2026',
     publicationApproved: true,
     isVerified: true,
   }
   ```
3. The review will automatically render on `/reviews` replacing the "Archive in progress" state.

---

## 4. Maintenance, Builds & Future Deployments

### A. Local Development Server
To preview the website locally on your computer:
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### B. Running Code Quality & TypeScript Verification
Before deploying any updates, verify code integrity:
```bash
npm run type-check   # Checks TypeScript for zero errors
npm run lint         # Runs static analysis
```

### C. Testing Production Builds Locally
To verify how Next.js will build the site for live release:
```bash
npm run build        # Generates production SSG static HTML files
npm run start        # Starts the production server locally at http://localhost:3000
```

### D. Ongoing Dependency Maintenance
Keep packages updated securely:
```bash
npm audit            # Check for security vulnerabilities
npm outdated         # Check for minor package updates
```
> [!NOTE]
> Do NOT upgrade major Next.js or React versions without testing GSAP animation compatibility.

---

## 5. Deployment Procedures

Refer to [`docs/PRODUCTION_DEPLOYMENT.md`](file:///d:/Projects/Tumkur%20Events/docs/PRODUCTION_DEPLOYMENT.md) for full instructions:
- **Automatic Git Deployments:** When using Vercel, any commit pushed to the `main` branch automatically triggers an optimized production build and instant global deployment.
- **Preview Branches:** Create a feature branch (e.g. `git checkout -b update-pricing`) and push to Git to generate an isolated preview URL that the client can review before merging into `main`.

---

## 6. Technical Support & Warranty

* **Repository Baseline:** `origin/main` (Commit: `df6c12e`)
* **Reference Specifications:**
  - Design Guidelines: `docs/HOMEPAGE_DESIGN_LOCK.md`
  - Pre-Launch Verification: `docs/PRE_LAUNCH_APPROVAL.md`
  - Manual Device QA Checklist: `docs/FINAL_MANUAL_QA.md`
  - Release Candidate Specification: `docs/RELEASE_CANDIDATE.md`
  - Deployment Runbook: `docs/PRODUCTION_DEPLOYMENT.md`

