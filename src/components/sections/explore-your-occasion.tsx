'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import {
  featuredEvents,
  additionalCategories,
} from '@/config/event-categories';

/**
 * Section 04: Explore Your Occasion — Phase 06B (Vertical Positioning & Transition Refinement)
 *
 * Design Direction: "Alternating Cinematic Event Showcase"
 *
 * Key Refinements in Phase 06B:
 * 1. Precision Vertical Centering:
 *    - Pinned showcase stage set to full viewport height (100svh).
 *    - Content safe area accounts for the 84px fixed navbar (pt-[84px]).
 *    - Usable area is calc(100svh - 84px), perfectly centering each complete image-and-text
 *      composition between the bottom of the navbar and the bottom of the viewport.
 * 2. Elimination of Transition Artifacts:
 *    - Panels feature solid opaque brand background (bg-ivory) and cascading z-index (10, 20, 30, 40).
 *    - Outgoing chapter text fades out before incoming chapter text enters (zero double-exposure).
 *    - Clean horizontal slides without pale overlays or white flashes.
 *    - 100% reversible in both scroll directions.
 * 3. Consistent Editorial Balance:
 *    - Images constrained to responsive max-height (52svh-58svh, max 520px) to prevent clipping.
 *    - Text columns share the exact same vertical center line as the accompanying photographs.
 * 4. Responsive & Accessible:
 *    - Desktop (>= 1024px): Pinned alternating showcase with HUD progress indicator.
 *    - Mobile (< 1024px): Compact natural vertical scroll without pinning.
 */
export function ExploreYourOccasion() {
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseContainerRef = useRef<HTMLDivElement>(null);

  // Intro refs
  const introEyebrowRef = useRef<HTMLDivElement>(null);
  const introLineRef = useRef<HTMLSpanElement>(null);
  const introHeadingRef = useRef<HTMLHeadingElement>(null);
  const introAccentRef = useRef<HTMLDivElement>(null);
  const introBodyRef = useRef<HTMLParagraphElement>(null);

  // Desktop Chapter Panel Refs
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);
  const chapter3Ref = useRef<HTMLDivElement>(null);
  const chapter4Ref = useRef<HTMLDivElement>(null);

  // Desktop Chapter Text Refs (for isolated text fade animations)
  const chapter1TextRef = useRef<HTMLDivElement>(null);
  const chapter2TextRef = useRef<HTMLDivElement>(null);
  const chapter3TextRef = useRef<HTMLDivElement>(null);
  const chapter4TextRef = useRef<HTMLDivElement>(null);

  // Active chapter state for HUD indicator and accessibility
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  // Additional Categories state for hover/focus preview
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    const isReduced = prefersReducedMotion();
    const mm = gsap.matchMedia();

    // =========================================================================
    // 1. SECTION INTRO REVEAL (ALL SCREEN SIZES)
    // =========================================================================
    mm.add('all', () => {
      if (isReduced) {
        gsap.set(
          [
            introEyebrowRef.current,
            introHeadingRef.current,
            introAccentRef.current,
            introBodyRef.current,
          ],
          { opacity: 1, y: 0, clearProps: 'all' }
        );
        if (introLineRef.current) gsap.set(introLineRef.current, { scaleX: 1 });
        return;
      }

      gsap.set(introEyebrowRef.current, { opacity: 0, y: 16 });
      if (introLineRef.current) {
        gsap.set(introLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
      }
      gsap.set(introHeadingRef.current, { opacity: 0, y: 24 });
      gsap.set(introAccentRef.current, { opacity: 0, y: 18 });
      gsap.set(introBodyRef.current, { opacity: 0, y: 16 });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      introTl
        .to(introEyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to(introLineRef.current, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(introHeadingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
        .to(introAccentRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .to(introBodyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    });

    // =========================================================================
    // 2. DESKTOP PINNED ALTERNATING SHOWCASE (>= 1024px)
    // =========================================================================
    mm.add('(min-width: 1024px)', () => {
      const stage = showcaseContainerRef.current;
      const c1 = chapter1Ref.current;
      const c2 = chapter2Ref.current;
      const c3 = chapter3Ref.current;
      const c4 = chapter4Ref.current;

      const t1 = chapter1TextRef.current;
      const t2 = chapter2TextRef.current;
      const t3 = chapter3TextRef.current;
      const t4 = chapter4TextRef.current;

      if (!stage || !c1 || !c2 || !c3 || !c4) return;
      if (isReduced) return;

      // Initial Panel Placements & Visibility
      // Chapter 1 is active immediately (no initial blank frame)
      gsap.set(c1, { xPercent: 0, autoAlpha: 1, zIndex: 10 });
      if (t1) gsap.set(t1, { opacity: 1, x: 0 });

      // Chapter 2 waiting offscreen RIGHT (+100%)
      gsap.set(c2, { xPercent: 100, autoAlpha: 0, zIndex: 20 });
      if (t2) gsap.set(t2, { opacity: 0, x: 30 });

      // Chapter 3 waiting offscreen LEFT (-100%)
      gsap.set(c3, { xPercent: -100, autoAlpha: 0, zIndex: 30 });
      if (t3) gsap.set(t3, { opacity: 0, x: -30 });

      // Chapter 4 waiting offscreen RIGHT (+100%)
      gsap.set(c4, { xPercent: 100, autoAlpha: 0, zIndex: 40 });
      if (t4) gsap.set(t4, { opacity: 0, x: 30 });

      // Authoritative GSAP master timeline with ScrollTrigger
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => '+=' + window.innerHeight * 2.4,
          pin: true,
          pinSpacing: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            let idx = 0;
            if (p >= 0.76) idx = 3;
            else if (p >= 0.48) idx = 2;
            else if (p >= 0.20) idx = 1;
            else idx = 0;
            setActiveChapterIndex(idx);
          },
        },
      });

      // Timeline Schedule (Total duration = 6.4 units)
      // Phase 1: 0.0 - 0.8 (C1 settles in place)
      // Transition 1: 0.8 - 1.8 (C1 exits, C2 enters from RIGHT)
      // Phase 2: 1.8 - 2.6 (C2 settles in place)
      // Transition 2: 2.6 - 3.6 (C2 exits, C3 enters from LEFT)
      // Phase 3: 3.6 - 4.4 (C3 settles in place)
      // Transition 3: 4.4 - 5.4 (C3 exits, C4 enters from RIGHT)
      // Phase 4: 5.4 - 6.4 (C4 settles in place before unpin)

      // --- TRANSITION 1: C1 exits to LEFT, C2 enters from RIGHT ---
      if (t1) {
        masterTl.to(t1, { opacity: 0, x: -25, duration: 0.35, ease: 'power1.out' }, 0.8);
      }
      masterTl
        .to(c1, { xPercent: -20, duration: 1.0, ease: 'power2.inOut' }, 0.8)
        .fromTo(
          c2,
          { xPercent: 100, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 1.0, ease: 'power2.inOut' },
          0.8
        )
        .set(c1, { autoAlpha: 0 }, 1.8);

      if (t2) {
        masterTl.to(t2, { opacity: 1, x: 0, duration: 0.45, ease: 'power1.out' }, 1.35);
      }

      // --- TRANSITION 2: C2 exits to RIGHT, C3 enters from LEFT ---
      if (t2) {
        masterTl.to(t2, { opacity: 0, x: 25, duration: 0.35, ease: 'power1.out' }, 2.6);
      }
      masterTl
        .to(c2, { xPercent: 20, duration: 1.0, ease: 'power2.inOut' }, 2.6)
        .fromTo(
          c3,
          { xPercent: -100, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 1.0, ease: 'power2.inOut' },
          2.6
        )
        .set(c2, { autoAlpha: 0 }, 3.6);

      if (t3) {
        masterTl.to(t3, { opacity: 1, x: 0, duration: 0.45, ease: 'power1.out' }, 3.15);
      }

      // --- TRANSITION 3: C3 exits to LEFT, C4 enters from RIGHT ---
      if (t3) {
        masterTl.to(t3, { opacity: 0, x: -25, duration: 0.35, ease: 'power1.out' }, 4.4);
      }
      masterTl
        .to(c3, { xPercent: -20, duration: 1.0, ease: 'power2.inOut' }, 4.4)
        .fromTo(
          c4,
          { xPercent: 100, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 1.0, ease: 'power2.inOut' },
          4.4
        )
        .set(c3, { autoAlpha: 0 }, 5.4);

      if (t4) {
        masterTl.to(t4, { opacity: 1, x: 0, duration: 0.45, ease: 'power1.out' }, 4.95);
      }

      // Hold C4 completely settled until release
      masterTl.to({}, { duration: 1.0 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const event1 = featuredEvents[0];
  const event2 = featuredEvents[1];
  const event3 = featuredEvents[2];
  const event4 = featuredEvents[3];

  return (
    <section
      id="explore-occasions"
      ref={sectionRef}
      aria-labelledby="explore-occasions-heading"
      className="relative w-full bg-ivory text-charcoal overflow-hidden"
    >
      {/* =========================================================================
          PART A: SECTION INTRODUCTION
          Compact, editorial statement with balanced vertical whitespace.
         ========================================================================= */}
      <div className="container-luxury mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14">
        {/* Eyebrow Label with Deep Gold Rule */}
        <div ref={introEyebrowRef} className="inline-flex items-center gap-3 mb-5 sm:mb-6">
          <span className="overline-luxury text-gold-deep text-[11px] sm:text-xs">
            EXPLORE OUR OCCASIONS
          </span>
          <span ref={introLineRef} className="h-[1.5px] w-8 sm:w-12 bg-gold" aria-hidden="true" />
        </div>

        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2
              id="explore-occasions-heading"
              ref={introHeadingRef}
              className="font-display text-charcoal leading-[1.08] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4.75rem)' }}
            >
              Every Occasion,
              <br />
              Beautifully Imagined.
            </h2>
            <div
              ref={introAccentRef}
              className="mt-2 sm:mt-2.5 pt-0.5 pb-1 sm:pb-2 will-change-transform"
            >
              <span
                className="font-accent text-gold-deep block leading-[1.2] tracking-normal"
                style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.8rem)' }}
              >
                Made for your moments.
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-3">
            <p
              ref={introBodyRef}
              className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-charcoal/80 font-light"
            >
              From colorful birthday celebrations to meaningful traditional ceremonies and elegant
              engagements, discover thoughtful d&eacute;cor for every occasion.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PART B: PINNED ALTERNATING SHOWCASE (DESKTOP: >= 1024px)
          - Stage Height: 100svh (full viewport)
          - Safe Content Area: pt-[84px] accounts for the fixed navbar
          - Usable Stage Area: calc(100svh - 84px)
          - Centering: grid place-items-center guarantees the image & text are centered
            harmoniously between the bottom of the navbar and the bottom of the viewport.
         ========================================================================= */}
      <div
        ref={showcaseContainerRef}
        className="hidden lg:block relative w-full h-[100svh] min-h-[640px] bg-ivory text-charcoal overflow-hidden border-y border-charcoal/10"
      >
        {/* Fixed Navbar Safe Area Wrapper */}
        <div className="relative w-full h-full pt-[84px] box-border">
          {/* Subtle HUD Event Progress Indicator (Positioned safely 20px below navbar) */}
          <div className="absolute top-5 right-8 xl:right-16 z-50 flex items-center gap-4 bg-ivory/90 backdrop-blur-sm px-4 py-2 border border-charcoal/10 shadow-[0_2px_12px_rgba(21,21,21,0.03)]">
            <span className="font-mono text-xs font-semibold tracking-widest text-gold-deep">
              0{activeChapterIndex + 1}&nbsp;/&nbsp;04
            </span>
            <div className="w-16 h-[2px] bg-charcoal/15 overflow-hidden" aria-hidden="true">
              <div
                className="h-full bg-gold transition-all duration-300 ease-out"
                style={{ width: `${((activeChapterIndex + 1) / 4) * 100}%` }}
              />
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-charcoal/60 font-medium hidden xl:inline">
              {featuredEvents[activeChapterIndex]?.category}
            </span>
          </div>

          {/* Central Usable Stage: calc(100svh - 84px) */}
          <div className="relative w-full h-full overflow-hidden">
            {/* -------------------------------------------------------------------
                CHAPTER 01: BIRTHDAYS & KIDS' CELEBRATIONS
                Enters from LEFT. Layout: Text Left (42%) / Photo Right (58%)
               ------------------------------------------------------------------- */}
            <div
              ref={chapter1Ref}
              aria-hidden={activeChapterIndex !== 0}
              className={`absolute inset-0 w-full h-full flex items-center justify-center bg-ivory will-change-transform ${
                activeChapterIndex === 0 ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 grid grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16">
                {/* Text Column (Left 42%) */}
                <div
                  ref={chapter1TextRef}
                  className="col-span-5 flex flex-col justify-center will-change-transform"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                      {event1.number}
                    </span>
                    <span className="text-charcoal/30">&middot;</span>
                    <span className="overline-luxury text-gold-deep text-[11px]">
                      {event1.category}
                    </span>
                  </div>

                  <h3
                    className="font-display text-charcoal leading-[1.08] tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.8rem)' }}
                  >
                    Little Moments.
                    <br />
                    Big Celebrations.
                  </h3>

                  <p className="font-sans text-[15px] xl:text-[16px] text-charcoal/80 font-light leading-[1.7] mb-7 max-w-md">
                    {event1.description}
                  </p>

                  <div>
                    <Link
                      href={event1.href}
                      tabIndex={activeChapterIndex === 0 ? 0 : -1}
                      className="group inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                    >
                      <span className="relative py-1">
                        {event1.ctaText}
                        <span
                          className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-normal ease-luxury group-hover:w-full"
                          aria-hidden="true"
                        />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-deep transition-transform duration-normal ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>

                {/* Photo Column (Right 58%) */}
                <div className="col-span-7 flex items-center justify-center">
                  <div className="relative w-full h-[52svh] xl:h-[58svh] max-h-[520px] min-h-[360px] overflow-hidden border border-charcoal/10 bg-ivory-subtle shadow-[0_8px_32px_rgba(21,21,21,0.06)]">
                    <Image
                      src={event1.image}
                      alt={event1.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 50vw, 45vw"
                      className="object-cover object-center select-none"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                CHAPTER 02: TRADITIONAL CEREMONIES
                Enters from RIGHT. Layout: Photo Left (58%) / Text Right (42%)
               ------------------------------------------------------------------- */}
            <div
              ref={chapter2Ref}
              aria-hidden={activeChapterIndex !== 1}
              className={`absolute inset-0 w-full h-full flex items-center justify-center bg-ivory will-change-transform ${
                activeChapterIndex === 1 ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 grid grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16">
                {/* Photo Column (Left 58%) */}
                <div className="col-span-7 flex items-center justify-center">
                  <div className="relative w-full h-[52svh] xl:h-[58svh] max-h-[520px] min-h-[360px] overflow-hidden border border-charcoal/10 bg-ivory-subtle shadow-[0_8px_32px_rgba(21,21,21,0.06)]">
                    <Image
                      src={event2.image}
                      alt={event2.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 50vw, 45vw"
                      className="object-cover object-center select-none"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Text Column (Right 42%) */}
                <div
                  ref={chapter2TextRef}
                  className="col-span-5 flex flex-col justify-center will-change-transform"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                      {event2.number}
                    </span>
                    <span className="text-charcoal/30">&middot;</span>
                    <span className="overline-luxury text-gold-deep text-[11px]">
                      {event2.category}
                    </span>
                  </div>

                  <h3
                    className="font-display text-charcoal leading-[1.08] tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.8rem)' }}
                  >
                    Traditions,
                    <br />
                    Beautifully Celebrated.
                  </h3>

                  <p className="font-sans text-[15px] xl:text-[16px] text-charcoal/80 font-light leading-[1.7] mb-7 max-w-md">
                    {event2.description}
                  </p>

                  <div>
                    <Link
                      href={event2.href}
                      tabIndex={activeChapterIndex === 1 ? 0 : -1}
                      className="group inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                    >
                      <span className="relative py-1">
                        {event2.ctaText}
                        <span
                          className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-normal ease-luxury group-hover:w-full"
                          aria-hidden="true"
                        />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-deep transition-transform duration-normal ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                CHAPTER 03: WEDDINGS & ENGAGEMENTS
                Enters from LEFT. Layout: Text Left (42%) / Photo Right (58%)
               ------------------------------------------------------------------- */}
            <div
              ref={chapter3Ref}
              aria-hidden={activeChapterIndex !== 2}
              className={`absolute inset-0 w-full h-full flex items-center justify-center bg-ivory will-change-transform ${
                activeChapterIndex === 2 ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 grid grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16">
                {/* Text Column (Left 42%) */}
                <div
                  ref={chapter3TextRef}
                  className="col-span-5 flex flex-col justify-center will-change-transform"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                      {event3.number}
                    </span>
                    <span className="text-charcoal/30">&middot;</span>
                    <span className="overline-luxury text-gold-deep text-[11px]">
                      {event3.category}
                    </span>
                  </div>

                  <h3
                    className="font-display text-charcoal leading-[1.08] tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.8rem)' }}
                  >
                    Where Beautiful
                    <br />
                    Stories Begin.
                  </h3>

                  <p className="font-sans text-[15px] xl:text-[16px] text-charcoal/80 font-light leading-[1.7] mb-7 max-w-md">
                    {event3.description}
                  </p>

                  <div>
                    <Link
                      href={event3.href}
                      tabIndex={activeChapterIndex === 2 ? 0 : -1}
                      className="group inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                    >
                      <span className="relative py-1">
                        {event3.ctaText}
                        <span
                          className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-normal ease-luxury group-hover:w-full"
                          aria-hidden="true"
                        />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-deep transition-transform duration-normal ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>

                {/* Photo Column (Right 58%) */}
                <div className="col-span-7 flex items-center justify-center">
                  <div className="relative w-full h-[52svh] xl:h-[58svh] max-h-[520px] min-h-[360px] overflow-hidden border border-charcoal/10 bg-ivory-subtle shadow-[0_8px_32px_rgba(21,21,21,0.06)]">
                    <Image
                      src={event3.image}
                      alt={event3.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 50vw, 45vw"
                      className="object-cover object-center select-none"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                CHAPTER 04: BABY SHOWERS & NEW BEGINNINGS
                Enters from RIGHT. Layout: Photo Left (58%) / Text Right (42%)
               ------------------------------------------------------------------- */}
            <div
              ref={chapter4Ref}
              aria-hidden={activeChapterIndex !== 3}
              className={`absolute inset-0 w-full h-full flex items-center justify-center bg-ivory will-change-transform ${
                activeChapterIndex === 3 ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 grid grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16">
                {/* Photo Column (Left 58%) */}
                <div className="col-span-7 flex items-center justify-center">
                  <div className="relative w-full h-[52svh] xl:h-[58svh] max-h-[520px] min-h-[360px] overflow-hidden border border-charcoal/10 bg-ivory-subtle shadow-[0_8px_32px_rgba(21,21,21,0.06)]">
                    <Image
                      src={event4.image}
                      alt={event4.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 50vw, 45vw"
                      className="object-cover object-center select-none"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Text Column (Right 42%) */}
                <div
                  ref={chapter4TextRef}
                  className="col-span-5 flex flex-col justify-center will-change-transform"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                      {event4.number}
                    </span>
                    <span className="text-charcoal/30">&middot;</span>
                    <span className="overline-luxury text-gold-deep text-[11px]">
                      {event4.category}
                    </span>
                  </div>

                  <h3
                    className="font-display text-charcoal leading-[1.08] tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.8rem)' }}
                  >
                    Welcoming Life&apos;s
                    <br />
                    Sweetest Moments.
                  </h3>

                  <p className="font-sans text-[15px] xl:text-[16px] text-charcoal/80 font-light leading-[1.7] mb-7 max-w-md">
                    {event4.description}
                  </p>

                  <div>
                    <Link
                      href={event4.href}
                      tabIndex={activeChapterIndex === 3 ? 0 : -1}
                      className="group inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                    >
                      <span className="relative py-1">
                        {event4.ctaText}
                        <span
                          className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-normal ease-luxury group-hover:w-full"
                          aria-hidden="true"
                        />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-deep transition-transform duration-normal ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET FALLBACK (< 1024px)
          Compact, naturally scrolling stack with alternating layout and NO scroll pinning.
         ========================================================================= */}
      <div className="lg:hidden space-y-16 px-6 sm:px-10 py-10 border-t border-charcoal/10">
        {featuredEvents.map((evt) => (
          <div key={evt.id} className="flex flex-col space-y-6">
            {/* Compact Event Photography */}
            <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden border border-charcoal/10 bg-ivory-subtle">
              <Image
                src={evt.image}
                alt={evt.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>

            {/* Event Typography */}
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="font-mono text-xs font-semibold text-gold-deep uppercase">
                  {evt.number}
                </span>
                <span className="text-charcoal/30">&middot;</span>
                <span className="overline-luxury text-gold-deep text-[11px]">
                  {evt.category}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight mb-3 whitespace-pre-line">
                {evt.headline}
              </h3>

              <p className="font-sans text-sm sm:text-base text-charcoal/80 font-light leading-relaxed mb-5">
                {evt.description}
              </p>

              <Link
                href={evt.href}
                className="group inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep"
              >
                <span className="relative py-0.5">
                  {evt.ctaText}
                  <span
                    className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-normal ease-luxury group-hover:w-full"
                    aria-hidden="true"
                  />
                </span>
                <ArrowUpRight className="h-4 w-4 text-gold-deep" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================================
          PART C: ADDITIONAL EVENT CATEGORIES (05-07) & DIRECTORY CTA
          Interactive typographic index with desktop live hover preview & mobile thumbnails.
         ========================================================================= */}
      <div className="w-full bg-ivory text-charcoal pt-14 sm:pt-16 pb-20 sm:pb-28 border-t border-charcoal/10">
        <div className="container-luxury mx-auto px-6 sm:px-10 lg:px-16">
          {/* Index Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <span className="overline-luxury text-gold-deep text-[11px] sm:text-xs block mb-2.5">
                MORE EXPERTISE
              </span>
              <h3 className="font-display text-charcoal text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                There&apos;s More to Celebrate.
              </h3>
            </div>
            <p className="font-sans text-sm text-charcoal/70 max-w-md font-light">
              Explore bespoke stage setups, corporate galas, and intimate celebrations designed
              with matching precision.
            </p>
          </div>

          {/* Interactive Split on Desktop: Typographic List (Left) + Contained Preview (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Typographic List */}
            <div className="lg:col-span-7 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {additionalCategories.map((cat, index) => {
                const isActive = activeCategoryIndex === index;
                return (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    onMouseEnter={() => setActiveCategoryIndex(index)}
                    onFocus={() => setActiveCategoryIndex(index)}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-7 transition-colors duration-fast hover:bg-charcoal/[0.02] focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-gold-deep mt-1 sm:mt-0">
                        {cat.number}
                      </span>
                      <div>
                        <h4
                          className={`font-display text-xl sm:text-2xl lg:text-3xl tracking-tight transition-colors duration-fast ${
                            isActive ? 'text-gold-deep' : 'text-charcoal group-hover:text-gold-deep'
                          }`}
                        >
                          {cat.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-1 max-w-md">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile Compact Image Thumbnail */}
                    <div className="sm:hidden mt-4 relative w-full h-40 overflow-hidden border border-charcoal/10">
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt}
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority={false}
                      />
                    </div>

                    <div className="hidden sm:flex items-center gap-2 pl-4">
                      <ArrowUpRight
                        className={`h-5 w-5 transition-transform duration-normal ease-luxury ${
                          isActive
                            ? 'text-gold-deep translate-x-0.5 -translate-y-0.5'
                            : 'text-charcoal/40 group-hover:text-gold-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Contained Image Preview Region */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative w-full h-[360px] xl:h-[400px] overflow-hidden border border-charcoal/10 bg-ivory-subtle">
                {additionalCategories.map((cat, index) => {
                  const isActive = activeCategoryIndex === index;
                  return (
                    <div
                      key={cat.id}
                      className={`absolute inset-0 transition-opacity duration-300 ease-luxury ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt}
                        fill
                        sizes="(max-width: 1280px) 40vw, 35vw"
                        className="object-cover object-center select-none"
                        priority={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Directory Ending CTA */}
          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-charcoal/10">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal/60 font-semibold block mb-1">
                Looking for something unique?
              </span>
              <p className="font-display text-base sm:text-lg text-charcoal">
                Browse our complete collection of celebration milestones and stage craft.
              </p>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-normal ease-luxury hover:bg-gold-deep hover:text-ivory focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
            >
              <span>Explore All Events</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-normal ease-luxury group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
