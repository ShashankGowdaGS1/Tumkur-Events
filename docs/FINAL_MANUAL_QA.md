# Tumkur Events — Final Manual QA Test Matrix
**Phase 14: Release Candidate Manual Acceptance Testing Guide**  
**Document Reference:** `docs/FINAL_MANUAL_QA.md`  
**Target Release Candidate:** `RC-1.0.0-phase14` (Base Git Commit: `df6c12e`)  
**Auditor:** QA Lead, Principal Frontend Engineer, Accessibility Specialist  
**Execution Note:** All actual results and status columns are initially marked as `NOT TESTED`. Tests must be executed on physical hardware by the designated QA tester or stakeholder.

---

## 1. Responsive Viewport Test Matrix

| Category | Viewports | Primary Target Devices | Critical QA Focus |
|---|---|---|---|
| **Mobile (Compact)** | 320px – 375px | iPhone SE, Galaxy A-series | No horizontal overflow, readable typography, FAB sizing (52px) |
| **Mobile (Standard)** | 390px – 430px | iPhone 14/15/16, Galaxy S23/S24, Pixel 7/8 | Hero scrollytelling feel, pinned occasions scrub, touch gestures |
| **Tablet** | 768px – 1024px | iPad Air, iPad Mini, Galaxy Tab | Grid transitions, navbar breakpoint switch, gallery layout |
| **Desktop** | 1280px – 1920px | MacBook Pro, Windows Desktop (1080p, 1440p) | 17.88s hero video sync, pinned chapter rails, multi-column editorial |

---

## 2. Test Execution Suite

### Suite A: Android Chrome (Physical Device Testing)

| Test ID | Route | Action | Expected Result | Actual Result | Pass/Fail | Notes |
|---|---|---|---|---|---|---|
| `AND-01` | `/` | Scroll slowly through Section 01 (Cinematic Hero) | Hero chapter narrative text alternates smoothly; video scrub tracks finger scroll without stutter. | NOT TESTED | NOT TESTED | Test on Chrome mobile with 4G/5G connection. |
| `AND-02` | `/` | Scroll through Section 04 (Explore Our Occasions) | Section pins cleanly under fixed navbar (84px offset); Scene 1 to 4 enter/exit with alternating reveals; releases smoothly into Section 05 without scroll trapping. | NOT TESTED | NOT TESTED | Verify no vertical jitter or sudden viewport jumps. |
| `AND-03` | `/` | Swipe horizontally on Section 05 (Selected Celebrations) | Filmstrip cards snap smoothly with finger drag; `01 / 05` counter updates; next card peeks on right edge. | NOT TESTED | NOT TESTED | Test swipe responsiveness and scroll-snap. |
| `AND-04` | `/` | Tap through Section 07 (How We Work) chapters | Tapping `01 Vision`, `02 Concept`, `03 Details`, `04 Delivery` buttons updates displayed photograph, title, and gold progress rule. | NOT TESTED | NOT TESTED | Verify touch target bounding box (>=44px). |
| `AND-05` | Any | Tap hamburger menu icon in header | Mobile navigation drawer slides open at `z-[70]`; body scroll is locked; all 7 event links and pages appear; tapping 'X' restores scrolling. | NOT TESTED | NOT TESTED | Test after scrolling down 50% of the page. |
| `AND-06` | `/gallery` | Tap image thumbnail in gallery | Modal lightbox opens in full screen; image loads sharply; tap outside or 'X' button dismisses lightbox. | NOT TESTED | NOT TESTED | Verify back button closes modal. |
| `AND-07` | Any | Tap floating WhatsApp button (bottom-left) | WhatsApp application (or web fallback) opens immediately targeted to configured number (`+91 94812 34567`) with prefill text. | NOT TESTED | NOT TESTED | Do not send message without client permission. |
| `AND-08` | Any | Tap floating Chatbot button (bottom-right) | Celebration Assistant panel opens; tap quick inquiry actions (e.g. 'Package pricing'); relevant FAQ accordion reveals; tap WhatsApp handoff. | NOT TESTED | NOT TESTED | Verify panel does not overflow small screens. |
| `AND-09` | `/contact` | Fill out enquiry form and submit | Inputs validate required fields; upon submission, pre-formatted WhatsApp chat launches containing client's exact selections. | NOT TESTED | NOT TESTED | Test invalid phone/blank name handling. |

---

### Suite B: iPhone Safari (iOS Physical Device Testing)

| Test ID | Route | Action | Expected Result | Actual Result | Pass/Fail | Notes |
|---|---|---|---|---|---|---|
| `IOS-01` | `/` | Load homepage from fresh Safari tab | Hero video plays inline without launching native iOS full-screen player (`playsInline`, `muted`). | NOT TESTED | NOT TESTED | Verify on iOS 17 / iOS 18 with Low Power Mode off. |
| `IOS-02` | `/` | Scroll through Section 01 & Section 04 | GSAP ScrollTrigger transitions smoothly; address bar collapsing/expanding does not cause layout jitter or white flashes. | NOT TESTED | NOT TESTED | Dynamic viewport height (`100dvh` / safe area) check. |
| `IOS-03` | Any | Inspect bottom edge of screen | Floating buttons (WhatsApp bottom-left, Chatbot bottom-right) maintain clear distance from iOS home indicator line (`env(safe-area-inset-bottom)`). | NOT TESTED | NOT TESTED | Check on iPhone with Dynamic Island or notch. |
| `IOS-04` | Any | Open mobile navigation drawer | Drawer covers screen cleanly; status bar background remains aesthetic; no double-tap zoom glitches on navigation links. | NOT TESTED | NOT TESTED | Check fast toggle open/close. |
| `IOS-05` | `/contact` | Tap 'Event Date' field in contact form | Native iOS calendar / date picker sheet opens smoothly without breaking page layout. | NOT TESTED | NOT TESTED | Verify date selection populates input. |
| `IOS-06` | `/packages` | Tap 'Enquire About This Package' on any card | Navigates to `/contact` with prefilled `package` query parameter or opens direct WhatsApp prompt with package name. | NOT TESTED | NOT TESTED | Check URL query parameter parsing. |
| `IOS-07` | `/gallery` | Swipe left/right inside open lightbox | Lightbox advances to next/previous celebration photograph with smooth gesture response. | NOT TESTED | NOT TESTED | Verify pinch-to-zoom does not break modal container. |

---

### Suite C: Tablet (iPad Safari / Chrome)

| Test ID | Route | Action | Expected Result | Actual Result | Pass/Fail | Notes |
|---|---|---|---|---|---|---|
| `TAB-01` | `/` | Load homepage in portrait & landscape orientation | Layout adapts fluidly; hero video maintains aspect ratio; grid columns transition cleanly between 2-col and 3-col. | NOT TESTED | NOT TESTED | Test at 768px (portrait) and 1024px (landscape). |
| `TAB-02` | Any | Inspect header navigation at 1024px | Desktop navigation bar renders with accessible hover/click dropdown for event categories. | NOT TESTED | NOT TESTED | Verify header doesn't wrap or collide with logo. |
| `TAB-03` | `/services` | Scroll through 6 bespoke service pillars | Section anchors scroll smoothly to designated service headings; customization calculator operates responsively. | NOT TESTED | NOT TESTED | Test interactive sliders and toggle options. |
| `TAB-04` | `/packages` | Inspect 3 package collections | Pricing ranges, inclusions, exclusions, and photography render in balanced tablet layout without overlapping text. | NOT TESTED | NOT TESTED | Verify typography scale. |
| `TAB-05` | Any | Inspect footer layout | Multi-column footer stacks gracefully; social links, phone, and legal links maintain comfortable touch clearance. | NOT TESTED | NOT TESTED | Verify no awkward column line wraps. |

---

### Suite D: Desktop (1280px, 1440px, 1920px)

| Test ID | Route | Action | Expected Result | Actual Result | Pass/Fail | Notes |
|---|---|---|---|---|---|---|
| `DSK-01` | `/` | Scroll slowly through fullscreen hero | 17.88s video scrub tracks mouse wheel; 4 narrative chapters transition with alternating left/right positioning. | NOT TESTED | NOT TESTED | Test on Chrome, Safari, and Firefox. |
| `DSK-02` | `/` | Hover over 'Events' in header navbar | Dropdown reveals all 7 event categories; hover state highlights gold; clicking any category navigates to `/events/[slug]`. | NOT TESTED | NOT TESTED | Verify dropdown closes when mouse leaves container. |
| `DSK-03` | `/events/[slug]` | Navigate to `/events/weddings` | Hero banner displays wedding photography; cultural narrative, decor disciplines, and photo showcase render accurately. | NOT TESTED | NOT TESTED | Repeat for `birthdays` and `traditional-ceremonies`. |
| `DSK-04` | `/gallery` | Filter gallery by categories (e.g. 'Mandapams', 'Florals') | Grid updates instantaneously without page reload; layout shifts are animated or smooth; active category pill is highlighted. | NOT TESTED | NOT TESTED | Verify count matches displayed items. |
| `DSK-05` | `/blog` | Navigate to Celebration Journal archive | Editorial empty state ("Archive in Progress") renders cleanly; search bar and category pills function without errors. | NOT TESTED | NOT TESTED | Verify no broken draft articles leak to public view. |
| `DSK-06` | `/our-work` | Navigate to legacy route `/our-work` in address bar | Browser immediately redirects (308) to canonical `/gallery` exhibition. | NOT TESTED | NOT TESTED | Verify browser address bar displays `/gallery`. |
| `DSK-07` | `/invalid-url` | Enter a non-existent URL (e.g. `/events/xyz`) | Custom luxury 404 error page renders with Marcellus typography and direct buttons back to Home and Events. | NOT TESTED | NOT TESTED | Verify HTTP 404 response code. |
| `DSK-08` | Any | Navigate entire site using keyboard only (`Tab`, `Shift+Tab`, `Enter`, `Esc`) | Visible gold focus rings appear on all active elements; modals close on `Escape`; skip-to-content works as intended. | NOT TESTED | NOT TESTED | Test keyboard accessibility compliance. |

---

## 3. QA Sign-Off Summary

* **Total Manual Test Cases:** 29 test cases across 4 environments.
* **Current Status:** **READY FOR EXECUTION BY STAKEHOLDER.**
* **Pass Rate:** `0 / 29 Tested` (Pending physical hardware execution).

