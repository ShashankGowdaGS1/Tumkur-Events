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
 * - Warm Champagne background (#E8DFCF) with rich, inviting contrast against Warm Ivory.
 * - Balanced two-column introduction: Left (Eyebrow + Heading + Botanical line art), Right (Description).
 * - 58% / 42% asymmetric photographic editorial composition:
 *   Left 58%: 3-image editorial triptych (1 dominant setting + 2 stacked detail close-ups with visual layering).
 *   Right 42%: Expressive editorial brand storytelling, botanical flourish, and dual CTAs.
 * - Mobile: Dominant photo on top, followed by 2 detail closeups side-by-side and concise text.
 * - Zero fabricated customer reviews; completely authentic and visually finished.
 * - Scoped GSAP ScrollTrigger entrance with clip-path photo reveal and staggered detail transitions.
 */
export function ClientStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const triptychColRef = useRef<HTMLDivElement>(null);
  const editorialColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(
        [
          headerRef.current,
          headlineLine1Ref.current,
          headlineLine2Ref.current,
          triptychColRef.current,
          editorialColRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          clearProps: 'all',
        }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Initial hidden states
      gsap.set(headerRef.current, { opacity: 0, y: 18 });
      gsap.set([headlineLine1Ref.current, headlineLine2Ref.current], { opacity: 0, y: 22 });
      gsap.set(triptychColRef.current, { opacity: 0, y: 24 });
      gsap.set(editorialColRef.current, { opacity: 0, y: 24 });

      // Clip path for main photograph on desktop
      const mainPhoto = triptychColRef.current?.querySelector('[data-element="main-photo"]');
      if (mainPhoto) {
        gsap.set(mainPhoto, { clipPath: 'inset(8% 0% 0% 0%)' });
      }

      const detailPhoto1 = triptychColRef.current?.querySelector('[data-element="detail-photo-1"]');
      const detailPhoto2 = triptychColRef.current?.querySelector('[data-element="detail-photo-2"]');
      if (detailPhoto1 && detailPhoto2) {
        gsap.set([detailPhoto1, detailPhoto2], { opacity: 0, y: 16 });
      }

      // Master entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      // 1. Header & masked headline reveal
      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
      })
        .to(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        // 2. Triptych container reveal
        .to(
          triptychColRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.35'
        );

      // 3. Main photo clip-path unmask
      if (mainPhoto) {
        tl.to(
          mainPhoto,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.45'
        );
      }

      // 4. Staggered detail photos
      if (detailPhoto1 && detailPhoto2) {
        tl.to(
          [detailPhoto1, detailPhoto2],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // 5. Editorial story & dual CTAs
      tl.to(
        editorialColRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
        },
        '-=0.35'
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
          {/* Left Column (7 cols): Eyebrow, Botanical Line Art & Main Heading */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep">{journalIntro.eyebrow}</span>
              {/* Option A: Delicate botanical line art flourish */}
              <svg
                viewBox="0 0 48 16"
                fill="none"
                stroke="currentColor"
                className="w-8 h-3 text-gold-deep/60 hidden sm:inline-block ml-1"
                aria-hidden="true"
              >
                <path
                  d="M1 8C12 8 18 2 24 2C30 2 36 14 47 8"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="24" cy="2" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
              <span ref={headlineLine1Ref} className="block">
                {journalIntro.headlineLine1}
              </span>
              <span ref={headlineLine2Ref} className="block text-charcoal/90">
                {journalIntro.headlineLine2}
              </span>
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
