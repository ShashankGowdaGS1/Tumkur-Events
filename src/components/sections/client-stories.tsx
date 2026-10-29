'use client';

import React, { useRef, useEffect } from 'react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { journalIntro } from '@/config/testimonials';
import { JournalTriptych } from '@/components/reviews/journal-triptych';
import { JournalEditorial } from '@/components/reviews/journal-editorial';

/**
 * Section 09: The Celebration Journal (Phase 11A Visual Redesign)
 *
 * Design Direction: "The Celebration Journal"
 * - Warm Champagne background (#E8DFCF) providing a rich, inviting transition.
 * - Balanced two-column introduction (no large empty right void).
 * - 58% / 42% asymmetric photographic editorial composition:
 *   Left 58%: 3-image editorial triptych (1 large setting + 2 stacked detail close-ups).
 *   Right 42%: Expressive editorial brand storytelling, botanical flourish, and dual CTAs.
 * - Mobile: Main photo on top, followed by 2 detail closeups side-by-side and concise text.
 * - Zero fabricated customer reviews; completely authentic and visually finished.
 * - Lightweight GSAP ScrollTrigger entrance without pinned scrolling.
 */
export function ClientStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const triptychColRef = useRef<HTMLDivElement>(null);
  const editorialColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set([headerRef.current, triptychColRef.current, editorialColRef.current], {
        opacity: 1,
        y: 0,
        clearProps: 'all',
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 20 });
      gsap.set(triptychColRef.current, { opacity: 0, y: 26 });
      gsap.set(editorialColRef.current, { opacity: 0, y: 26 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power2.out',
      }).to(
        [triptychColRef.current, editorialColRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="celebration-journal"
      ref={sectionRef}
      aria-label="The Celebration Journal — Stories Behind Every Detail"
      className="relative bg-[#E8DFCF] text-charcoal py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* =====================================================================
            01. BALANCED TWO-COLUMN INTRODUCTION (Compact & Balanced)
           ===================================================================== */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-14 pb-8 sm:pb-10 border-b border-charcoal/15"
        >
          {/* Left Column (7 cols): Eyebrow & Main Heading */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep">{journalIntro.eyebrow}</span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
              {journalIntro.headlineLine1}
              <span className="block text-charcoal/90">{journalIntro.headlineLine2}</span>
            </h2>
          </div>

          {/* Right Column (5 cols): Description aligned to heading bottom */}
          <div className="lg:col-span-5 lg:pb-1">
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed">
              {journalIntro.description}
            </p>
          </div>
        </div>

        {/* =====================================================================
            02. MAIN ASYMMETRICAL EDITORIAL COMPOSITION (58% / 42%)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left (58%): 3-Image Photographic Triptych */}
          <div ref={triptychColRef} className="lg:col-span-7">
            <JournalTriptych />
          </div>

          {/* Right (42%): Supporting Editorial Story & Dual CTAs */}
          <div ref={editorialColRef} className="lg:col-span-5">
            <JournalEditorial />
          </div>
        </div>
      </div>
    </section>
  );
}
