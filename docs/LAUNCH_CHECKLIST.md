# Tumkur Events — Pre-Launch Verification Checklist
**Document Reference:** `docs/LAUNCH_CHECKLIST.md`  
**Target Environment:** Production (Public Web Launch)  
**Status Key:**  
- `[x]` **VERIFIED / COMPLETE:** Verified with codebase evidence.  
- `[ ]` **ACTION REQUIRED (EXTERNAL):** Requires stakeholder / owner action before domain DNS switch.  

---

## 1. Domain & DNS Configuration
- [ ] **Official Domain Name:** Confirm primary domain (e.g., `https://tumkurevents.in` or `https://tumkurevents.com`).
- [ ] **DNS Records Setup:**
  - `A` / `AAAA` records pointed to hosting edge IP (Vercel, AWS CloudFront, or custom VPS).
  - `CNAME` for `www` subdomain redirecting to apex or vice versa.
- [ ] **SSL / TLS Certificate:** Enforce HTTP-to-HTTPS automatic redirect and HSTS.

## 2. Hosting & Environment Variables
- [x] **Environment Template Created:** `.env.example` committed to repository with all configuration keys.
- [ ] **Production Hosting Environment Variables:**
  - `NEXT_PUBLIC_SITE_URL`: Set to production canonical URL (with HTTPS, no trailing slash).
  - `NEXT_PUBLIC_WHATSAPP_PHONE`: Set to official business WhatsApp (`919480188880`).
  - `NEXT_PUBLIC_CONTACT_PHONE`: Set to official display phone (`+91 94801 88880`).
  - `NEXT_PUBLIC_CONTACT_EMAIL`: Set to official email (`hello@tumkurevents.in`).
- [x] **Next.js Production Build:** Verified passing cleanly via `next build` (34/34 SSG static pages generated).

## 3. Communication & Enquiry Channels
- [ ] **WhatsApp Business Verification:** Ensure the device tied to `+91 94801 88880` has WhatsApp Business installed with quick-reply greeting templates configured.
- [ ] **Phone Line Readiness:** Verify incoming call routing on the primary phone line during standard business hours (9:00 AM – 8:00 PM IST).
- [ ] **Email Routing:** Verify MX records and email inbox routing for `hello@tumkurevents.in` or designated business mailbox.

## 4. Social Media & External Links
- [ ] **Social Media Profiles:** Verify and update placeholder links in `src/config/site.ts` with live authenticated brand handles:
  - Instagram profile: `@tumkurevents`
  - Facebook page: `Tumkur Events`
  - YouTube / Pinterest channels (if applicable).
- [ ] **Google Business Profile (GBP):** Ensure GBP listing name matches "Tumkur Events" and coordinates match `13.3409° N, 77.1010° E` (Tumakuru).

## 5. Commercial Offerings & Pricing Review
- [ ] **Package Pricing Transparency:** Confirm starting prices across all 4 collections in `src/config/packages-page.ts`:
  - Silver Occasion: `₹45,000`
  - Gold Celebration: `₹1,20,000`
  - Diamond Grandeur: `₹2,80,000`
  - Bespoke Royal: `₹6,500,000+`
- [ ] **Service Inclusions & Add-Ons:** Review floral sourcing rates and production inclusions with vendors.

## 6. Visual Assets & Photography
- [x] **Image Loading & Next.js Optimization:** All images implemented via `next/image` with responsive `sizes`, WebP/AVIF support, and layout stability.
- [ ] **Client Original Photography Substitutions:** Progressively replace high-resolution curated stock representations with authenticated Tumkur Events field photography in `/public/images/`.

## 7. Client Reviews & Social Proof
- [x] **Editorial Client Testimonials:** 12 curated client stories loaded across wedding, birthday, and ceremony categories.
- [ ] **Google Reviews Link Verification:** Connect the "Review Us on Google" CTA to the direct Google Review URL for Tumkur Events.

## 8. Editorial & Blog Publishing
- [x] **Blog Architecture:** 8 full-length editorial guides and 5 category archives compiled and indexed.
- [x] **Reading Experience:** Table of contents, structured headings, author credits, and related article links verified.
- [ ] **Content Calendar:** Schedule future local celebration planning articles for ongoing SEO freshness.

## 9. Legal Policies & Compliance
- [ ] **Client Legal Review Sign-Off:** Tumkur Events ownership review of `docs/LEGAL_CONTENT_REVIEW.md`:
  - Privacy Policy: Data collection practices under Indian DPDP Act 2023.
  - Terms & Conditions: Booking deposits, payment schedule, and Tumakuru jurisdiction.
  - Refund & Cancellation: 4-tier refund policy and postponement terms.
  - Cookie Policy: Verified zero ad trackers; strictly essential session handling.

## 10. Analytics & Privacy-Friendly Tracking
- [x] **Zero Tracking Overhead:** No invasive ad pixels (Meta Pixel, Google Ads remarketing) installed by default.
- [ ] **Privacy-Focused Analytics (Optional):** If user metrics are desired, configure Google Analytics 4 (GA4) with IP anonymization or privacy-first analytics (Plausible / Cloudflare Web Analytics).

## 11. Chatbot & Conversational Assistant Status
- [x] **Client-Side Assistant Active:** Floating chat widget provides instant FAQ responses, budget qualification, and direct WhatsApp routing.
- [ ] **Future LLM Backend Integration (Optional):** Hook Gemini 1.5 Flash API route into the chat panel if autonomous dynamic AI replies are desired post-launch.

## 12. Production Monitoring & Stability
- [ ] **Uptime Monitoring:** Set up free ping monitoring (e.g., UptimeRobot or BetterStack) targeting `/` and `/contact`.
- [ ] **Error Tracking:** Optional integration with Sentry for client-side JavaScript error reporting.
- [x] **Fallback 404 Routing:** Custom luxury branded 404 error page implemented and verified.

## 13. Backup & Rollback Approach
- [x] **Version Control:** All project commits tracked on GitHub (`main` branch).
- [ ] **Instant Hosting Rollbacks:** Confirm host provider supports instant one-click deployment rollbacks (standard on Vercel/Netlify/AWS Amplify).

## 14. Final Manual Device Testing (Stakeholder Walkthrough)
- [ ] **iOS Safari (iPhone):** Test hero video playback, scrollytelling feel, bottom bar safe-area padding, and WhatsApp FAB click.
- [ ] **Android Chrome:** Test drawer navigation, gallery lightbox gesture closing, and contact form submission.
- [ ] **Desktop (macOS / Windows):** Test wide screen layouts (1440px+), keyboard tab navigation focus rings, and reduced motion settings.
