# Tumkur Events &middot; Contemporary Celebration Luxury

A cinematic, editorial web experience for **Tumkur Events** &mdash; a premier event management and bespoke decoration company based in Tumakuru, Karnataka.

Built with Next.js 16 App Router, TypeScript, Tailwind CSS, and GSAP ScrollTrigger.

---

## 🏛️ Brand & Design System

- **Philosophy:** Contemporary Celebration Luxury
- **Visual Palette (60 / 30 / 10 Principle):**
  - **60% Warm Ivory (`#F7F4EE`):** Primary editorial canvas.
  - **30% Charcoal (`#151515`):** Text, structure, and high-contrast dramatic sections.
  - **10% Brand Gold (`#C79E22` / Deep Gold `#8A6714`):** Accents, rules, and interactive highlights.
  - Supporting Silver (`#B8B8B6`) and Champagne (`#E8DFCF`).
- **Typography Triad:**
  - **Marcellus:** Majestic display & editorial headlines.
  - **Manrope:** Clean, accessible body copy, labels, and interactive UI.
  - **Allura:** Expressive, handwritten decorative accent phrases.

---

## 🎬 Implemented Sections

1. **Shared Navigation (`SiteHeader`):**
   - Translucent gradient on the dark hero; transitions to frosted Warm Ivory with gold detailing as soon as scrolling continues.
   - Accessible desktop dropdown menu and mobile slide-out drawer.
2. **Section 01 &mdash; Cinematic Scrollytelling Hero (`CinematicHero`):**
   - Pinned fullscreen 4-chapter synchronized video scrub (0s &rarr; 17.88s).
   - Alternating typography compositions with fluid responsiveness and reduced-motion fallback.
3. **Section 02 &mdash; Trust & Local Presence (`TrustLocalPresence`):**
   - Spacious editorial composition establishing local credibility in Tumakuru, operating history since 2021, and core celebration services.
4. **Section 03 &mdash; The Art of Celebration (`ArtOfCelebration`):**
   - Asymmetric split-screen composition with edge-to-edge artisanal South Indian floral stage photography and subtle parallax.
5. **Section 04 &mdash; Explore Your Occasion (`ExploreYourOccasion`):**
   - Pinned 100svh alternating cinematic showcase with fixed navbar clearance (`pt-[84px]`).
   - 4 sequential event chapters (Birthdays, Traditional Ceremonies, Weddings, Baby Showers) entering along alternating horizontal axes.
   - Interactive typographic index (Corporate, Special Occasions, Large Stages) with live image previews and mobile touch thumbnails.
6. **Section 05 &mdash; Selected Celebrations (`SelectedCelebrations`):**
   - Full Charcoal (`#151515`) canvas with an expanding horizontal image accordion on desktop (62% active, 9.5% inactive with desaturation).
   - Touch-friendly category selector on mobile and an accessible modal lightbox.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS 3.4 with custom design tokens (`tokens.css`)
- **Animation:** GSAP 3.12 + ScrollTrigger (`@gsap/react`)
- **Icons:** Lucide React
- **Fonts:** `next/font/google` (Marcellus, Manrope, Allura)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `20.x` or later (tested on Node `22.x` and `24.x`)
- npm `10.x` or later

### Installation

```bash
git clone https://github.com/<your-username>/tumkur-events.git
cd tumkur-events
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Build

```bash
npm run type-check   # Validate TypeScript types
npm run build        # Production Next.js Turbopack build
npm run start        # Start local production server
```

---

## ☁️ Vercel Deployment

This project is fully optimized for one-click deployment on **Vercel**:

1. Push your repository to **GitHub**.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `tumkur-events` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Build and Output Settings:
   - **Build Command:** `next build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)
6. Click **Deploy**.

---

## 📄 License

Proprietary &copy; Tumkur Events Management & Luxury Decor. All rights reserved.
