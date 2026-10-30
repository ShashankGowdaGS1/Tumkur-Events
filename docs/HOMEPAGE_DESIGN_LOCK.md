# Tumkur Events — Homepage Design Lock & Reference Specification

**Document Version:** 1.0.0 (Production Master)  
**Date Established:** October 30, 2026  
**Status:** **HOMEPAGE DESIGN LOCKED**  
**Role:** Definitive architectural and visual reference for all future inner pages (`/events/*`, `/services`, `/packages`, `/gallery`, `/our-work/*`, `/reviews`, `/blog/*`, `/contact`, etc.)

---

## 1. Approved Visual Direction

Tumkur Events embodies **"Contemporary Celebration Luxury"** rooted in South Karnataka cultural authenticity:
- **Tone:** Refined, bespoke, celebratory, culturally reverent, uncluttered.
- **Atmosphere:** Seamless interplay between luminous Warm Ivory daylight canvases and dramatic, theatrical Charcoal evening settings.
- **Imagery Policy:** Authentic, color-accurate celebration photography featuring South Indian floral artistry, grand wedding mandaps, bespoke lighting installations, and handcrafted ritual details. Zero generic stock photography.
- **Compositional Rhythm:** Intentional alternation between full-bleed cinematic visual stages, asymmetric editorial layouts, and high-readability typography columns.

---

## 2. Brand Color Tokens

All colors are codified in `src/styles/tokens.css` and mapped to Tailwind configuration in `tailwind.config.ts`:

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Charcoal** | `#151515` | Deepest foundation. Used for Cinematic Hero, Selected Celebrations, Process Journey, Footer, and dark mode scrims. |
| **Charcoal Light** | `#222222` | Card backgrounds on dark canvas, borders, hairline separators, and subtle elevation layers. |
| **Warm Ivory** | `#F7F4EE` | Primary editorial daytime canvas. Used for Trust & Local Presence, The Art of Celebration, Our Expertise, and FAQ. |
| **Champagne** | `#E8DFCF` | Secondary warm luxury surface. Used for The Celebration Journal (Section 09) and active package accents. |
| **Champagne Light** | `#FAF7F2` | Subtle tinted background used for Celebration Packages (Section 08). |
| **Brand Gold** | `#C79E22` | Primary metallic accent. Used for progress bars, icons, badges, highlights, and active borders on dark backgrounds. |
| **Gold Deep** | `#8A6714` | High-contrast WCAG-compliant gold used for text links, eyebrows, and markers on light/ivory backgrounds (>= 4.5:1 ratio). |
| **Silver Light** | `#B8B8B6` | Secondary body text on Charcoal backgrounds. |
| **WhatsApp Green** | `#25D366` | Official brand action color for direct WhatsApp concierge entry. |

---

## 3. Typography Families & Roles

Loaded via `next/font` with zero layout shift and CSS variables in `src/lib/fonts.ts`:

| Font Family | CSS Variable | Fallback | Primary Usage |
| :--- | :--- | :--- | :--- |
| **Marcellus** | `--font-marcellus` | Serif | Primary luxury display font. Used for all `h1`, `h2`, `h3` section headlines, numbers in editorial editions, and brand wordmarks. |
| **Manrope** | `--font-manrope` | Sans-serif | Clean, modern editorial workhorse. Used for body paragraphs, eyebrows, data attributes, CTAs, button labels, and tables. |
| **Allura** | `--font-allura` | Cursive / Script | Expressive script accent font. Reserved strictly for short, poignant emotional phrases (e.g. *"Made for Your Moments."*, *"The art is in the details."*). Never used for body text or navigational items. |

### Hierarchy Guidelines:
- **Eyebrow / Overline:** `font-sans text-xs tracking-[0.2em] uppercase font-bold text-gold / text-gold-deep` paired with a `1.5px` horizontal gold accent line.
- **Section Heading:** `font-display text-fluid-h2 text-charcoal / text-ivory tracking-tight leading-[1.08]`.
- **Emotional Script Accent:** `font-accent text-[1.12em] leading-normal text-gold-deep / text-gold`.
- **Body Text:** `font-sans text-sm sm:text-base text-charcoal/80 / text-silver-light/80 leading-[1.7]`.

---

## 4. Homepage Section Order

The 11 homepage sections render in strict editorial sequence:

1. **Section 01: Fullscreen Cinematic Scrollytelling Hero (`CinematicHero`)**
   - Full-bleed 17.88s video scrub synced to 4 alternating left/right narrative chapters.
2. **Section 02: Trust & Local Presence (`TrustLocalPresence`)**
   - Daytime Ivory transition, "Rooted in Tumakuru. Made for Your Moments.", 3 core service anchors, upper-right hanging golden lantern.
3. **Section 03: The Art of Celebration (`ArtOfCelebration`)**
   - 47%/53% asymmetric split-screen, stage styling narrative, edge-to-edge photography with clip-mask reveal.
4. **Section 04: Explore Your Occasion (`ExploreYourOccasion`)**
   - Desktop: Pinned 4-chapter alternating showcase. Mobile: "The Celebration Journey" scroll-driven alternating reveal.
5. **Section 05: Selected Celebrations (`SelectedCelebrations`)**
   - Charcoal evening stage. Desktop: 5-category horizontal expanding accordion. Mobile: "The Celebration Filmstrip" swipe gallery.
6. **Section 06: Our Expertise (`OurExpertise`)**
   - Warm Ivory typography showcase. Desktop: 3x2 editorial grid. Mobile: "Horizontal Expertise Editions" snap carousel.
7. **Section 07: From Vision to Celebration (`EventProcessTimeline`)**
   - Charcoal canvas. Desktop: Pinned horizontal process track with alternating milestones. Mobile: "The Art of Making a Celebration" 4-chapter interactive storyboard.
8. **Section 08: Packages & Flexible Celebrations (`CelebrationPackages`)**
   - "The Celebration Atelier". 3 expandable package tiers, single prominent price display, indicative pricing disclaimer, desktop sticky photo.
9. **Section 09: The Celebration Journal (`ClientStories`)**
   - Warm Champagne canvas. 3-image editorial triptych and genuine brand philosophy. Zero fake testimonials.
10. **Section 10: Frequently Asked Questions (`CelebrationFaq`)**
    - "The Celebration Concierge". Two-column split layout, sticky decor photo, 6-question zero-CLS single-open accordion.
11. **Section 11: Final Cinematic Enquiry CTA (`FinalCelebrationCta`)**
    - Full-bleed evening celebration canopy, luminous floral lighting, dual CTAs leading into contact and portfolio.

---

## 5. Mobile Interaction Patterns (Phase M01–M04)

Four bespoke, luxury-calibrated mobile experiences are locked:

### M01. Explore Our Occasions ("The Celebration Journey")
- **Container:** Pinned under fixed navbar (safe offset: 84px).
- **Choreography:** Scene 01 begins active. Scene 01 exits left as Scene 02 enters from right. Reverse direction for Scene 03 (enters from left). Alternate again for Scene 04 (enters from right).
- **Controls:** Fully scrub-controlled and bidirectional with smooth release at progress 1.0.

### M02. Selected Celebrations ("The Celebration Filmstrip")
- **Container:** Native horizontal scroll with CSS scroll-snap (`snap-x snap-mandatory`).
- **Layout:** Dominant `84vw` slide with next image peeking from right edge.
- **Controls:** Touch gestures (`touch-pan-x touch-pan-y`), thin segmented progress indicator, `01 / 05` index counter, and step chevrons.
- **Scroll:** Natural vertical scrolling is strictly preserved (never pinned).

### M03. Our Expertise ("Horizontal Expertise Editions")
- **Container:** Native horizontal snap carousel (`snap-x snap-mandatory`).
- **Layout:** `82vw` card width, edition numeral, Marcellus heading, concise description, and gold active accent line.
- **Controls:** `01 — 06` active counter, thin gold segmented progress indicator, chevron controls.

### M04. How We Work ("The Art of Making a Celebration")
- **Container:** Unpinned compact storyboard stage with charcoal backdrop.
- **Stage:** Real project photography with monumental translucent gold chapter numeral (`01`–`04`) and stage badge.
- **Navigator:** 4 tactile buttons (`01 Vision`, `02 Concept`, `03 Details`, `04 Delivery`) with active gold glow.
- **Transitions:** Seamless image cross-dissolve, gentle text wipe, and animated gold progress rule (`25%` → `100%`).

---

## 6. Shared Spacing & Layout Rules

- **Standard Container:** `.container-luxury` (`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16`).
- **Vertical Section Spacing:**
  - Mobile: `py-14 sm:py-20` (prevents endless scrolling exhaustion).
  - Desktop: `py-24 sm:py-32 lg:py-36` (ample luxury negative space).
- **Grid Gaps:** `gap-6 sm:gap-10 lg:gap-16`.
- **Touch Targets:** All interactive controls maintain minimum `44px x 44px` physical touch bounds.
- **Hairline Dividers:** Single-pixel borders using low-opacity tokens (`border-charcoal/10` on light, `border-charcoal-light/60` on dark).

---

## 7. GSAP Animation Engine Rules

All animations adhere to the centralized infrastructure in `src/lib/gsap.ts`:
- **Registration:** Always invoke `registerGsapPlugins()` inside `useEffect`.
- **Responsive Isolation:** Use `gsap.matchMedia()` (`mm.add('(min-width: 1024px)', ...)` and `mm.add('(max-width: 1023px)', ...)`).
- **Cleanup:** Always return `() => mm.revert()` or `ctx.revert()` from `useEffect`.
- **Reduced Motion:** Mandatory check via `prefersReducedMotion()`. If enabled, set components to final state immediately with zero transforms, and eliminate pinning.
- **Pinning Rules:** Pinning is used sparingly (Hero, Desktop Section 04, Desktop Section 07, Mobile Section 04). Never overlap pinned triggers. Always include `pinSpacing: true` and `anticipatePin: 1`.

---

## 8. Decorative Asset Guidelines

- **Section 02:** Golden Hanging Lanterns (`/decor/golden-lantern-corner.webp`) anchored at `top-0 right-0`. Restricted to `hidden md:block` to prevent mobile headline collision.
- **Section 05:** Golden Pampas Grass (`/decor/golden-pampas-accent.webp`) anchored at bottom-right (`hidden lg:block`).
- **Section 07:** Golden Hanging Lanterns watermark (`/decor/golden-hanging-lanterns.webp`) at `top-0 right-12` (`hidden md:block`, opacity 0.20).
- **Section 08:** Organic Floral Corner (`/images/decor/floral-corner.png`) at `top-0 right-0`. Configured with `opacity-20 sm:opacity-75 lg:opacity-85 w-36 sm:w-72 lg:w-96` so it never obscures text on mobile viewports.
- **Section 09:** Journal Corner Floral (`/decor/journal-corner-floral.webp`) at `top-0 left-0`.
- **Footer:** Signature Gold Butterfly Line Art (`/decor/gold-butterfly-signature.webp`) anchored to the end of the oversized wordmark outline.

---

## 9. Layout Header & Floating Systems

- **SiteHeader (`src/components/layout/site-header.tsx`):**
  - Fixed at `top-0 inset-x-0 z-40 h-20 sm:h-[84px]`.
  - Transparent gradient over hero, smoothly transitions to `bg-ivory/95 backdrop-blur-md` with boundary detection on `#trust-presence`.
- **Mobile Navigation (`src/components/layout/mobile-navigation.tsx`):**
  - Rendered via React Portal into `document.body` to eliminate z-index or filter trapping.
  - Opaque `#F7F4EE` canvas, body scroll lock, escape key listener, safe area insets.
- **Floating Contact Actions (`src/components/floating/`):**
  - Bottom-Left: WhatsApp click-to-chat (`#25D366`) with tooltip and safe-area padding.
  - Bottom-Right: Celebration Chat Launcher with animated morphing icon and gold pulse.
  - Chat Panel: Accessible modal dialog with quick action dispatchers. Gemini API ready.

---

## 10. Known Temporary Content & Production Dependencies

- **Indicative Pricing:** All package prices are explicitly marked with `*` and accompanied by: *"Indicative starting investment. Final pricing tailored to venue scale, floral selections, and bespoke additions."*
- **Chatbot Gemini API:** Chat launcher and panel UI are fully functional and accessible, ready for future Gemini Live / Chat API integration.
- **Media Optimization:** All photos served via Next.js `<Image>` with responsive `sizes` attribute, WebP formats, and explicit aspect ratios.
- **SEO & Structured Data:** Semantic `h1`-`h3` hierarchy, `LocalBusiness` schema with Tumakuru geo-coordinates, openGraph cards, and canonical metadata.

