import React from 'react';
import { CinematicHero } from '@/components/sections/hero/cinematic-hero';
import { TrustLocalPresence } from '@/components/sections/trust-local-presence';
import { ArtOfCelebration } from '@/components/sections/art-of-celebration';
import { ExploreYourOccasion } from '@/components/sections/explore-your-occasion';
import { SelectedCelebrations } from '@/components/sections/selected-celebrations';
import { OurExpertise } from '@/components/sections/our-expertise';
import { EventProcessTimeline } from '@/components/sections/event-process-timeline';
import { CelebrationPackages } from '@/components/sections/celebration-packages';

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col bg-ivory text-charcoal">
      {/* =========================================================================
          HOMEPAGE SECTION 01: FULLSCREEN CINEMATIC SCROLLYTELLING HERO
          4-chapter synchronized video scrub (0s to 17.88s) overlaying dark canvas.
         ========================================================================= */}
      <CinematicHero />

      {/* =========================================================================
          HOMEPAGE SECTION 02: TRUST & LOCAL PRESENCE
          Spacious editorial composition establishing local identity, credibility,
          and core celebration services in Tumakuru, Karnataka.
         ========================================================================= */}
      <TrustLocalPresence />

      {/* =========================================================================
          HOMEPAGE SECTION 03: THE ART OF CELEBRATION
          Asymmetric editorial split-screen celebrating bespoke stage artistry,
          personalized decor philosophy, and authentic craftsmanship.
         ========================================================================= */}
      <ArtOfCelebration />

      {/* =========================================================================
          HOMEPAGE SECTION 04: EXPLORE YOUR OCCASION
          Immersive multi-category editorial showcase with alternating layouts,
          high-contrast traditional ceremony shift, and interactive category index.
         ========================================================================= */}
      <ExploreYourOccasion />

      {/* =========================================================================
          HOMEPAGE SECTION 05: SELECTED CELEBRATIONS — THE EDITORIAL GALLERY
          Asymmetric 12-column photographic mosaic on charcoal with interactive lightbox.
         ========================================================================= */}
      <SelectedCelebrations />

      {/* =========================================================================
          HOMEPAGE SECTION 06: OUR EXPERTISE
          Typography-led editorial services grid communicating Tumkur Events'
          decoration and creative styling capabilities ("Every Detail. Beautifully Considered.").
         ========================================================================= */}
      <OurExpertise />

      {/* =========================================================================
          HOMEPAGE SECTION 07: FROM VISION TO CELEBRATION
          Horizontal travelling, scroll-driven process timeline with alternating
          milestones above and below a continuous central gold rail.
         ========================================================================= */}
      <EventProcessTimeline />

      {/* =========================================================================
          HOMEPAGE SECTION 08: PACKAGES & FLEXIBLE CELEBRATIONS
          "The Celebration Atelier" — Editorial pricing and package curations with
          dynamic featured photography, organic floral corner, and custom quote area.
         ========================================================================= */}
      <CelebrationPackages />
    </main>
  );
}
