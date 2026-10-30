'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

/**
 * Section 02: Trust & Local Presence
 *
 * Design Direction: Contemporary Celebration Luxury
 * Minimal editorial composition contrasting with the dark cinematic hero.
 *
 * Refined in Phase 15B for Mobile Ergonomics:
 * - Compact, harmonious vertical spacing on mobile (py-14 sm:py-20 lg:py-36)
 * - Enhanced mobile typography scale (increased body and highlight description legibility)
 * - Tighter headline leading and margin rhythm
 * - Reduced divider dead space (my-10 sm:my-16 lg:my-24)
 * - Complete GSAP ScrollTrigger entrance with reduced-motion fallback
 */
export function TrustLocalPresence() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const highlightItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    const isReduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (isReduced) {
        // Immediate display for reduced-motion users
        gsap.set(
          [
            eyebrowRef.current,
            headlineLine1Ref.current,
            headlineLine2Ref.current,
            bodyRef.current,
            ctaRef.current,
            dividerRef.current,
            ...highlightItemsRef.current,
          ],
          { opacity: 1, y: 0, clearProps: 'all' }
        );
        if (eyebrowLineRef.current) gsap.set(eyebrowLineRef.current, { scaleX: 1 });
        if (dividerRef.current) gsap.set(dividerRef.current, { scaleX: 1 });
        return;
      }

      // Initial visual states
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      if (eyebrowLineRef.current) gsap.set(eyebrowLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set([headlineLine1Ref.current, headlineLine2Ref.current], { y: 32, opacity: 0 });
      gsap.set(bodyRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaRef.current, { opacity: 0, y: 16 });
      if (dividerRef.current) gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(highlightItemsRef.current, { opacity: 0, y: 20 });

      // Orchestrated Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
        .to(
          eyebrowLineRef.current,
          {
            scaleX: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          bodyRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          dividerRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          highlightItemsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '-=0.5'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trust-presence"
      ref={sectionRef}
      aria-labelledby="trust-presence-heading"
      className="relative w-full bg-ivory text-charcoal py-14 sm:py-20 lg:py-36 overflow-hidden"
    >
      {/* Upper-Right Corner: Golden Hanging Lanterns with Cream Floral Foliage */}
      <div
        className="pointer-events-none select-none absolute top-0 right-0 z-0 hidden md:block overflow-hidden"
        aria-hidden="true"
      >
        <div className="w-[220px] md:w-[250px] lg:w-[280px] xl:w-[320px] 2xl:w-[340px] opacity-95">
          <Image
            src="/decor/golden-lantern-corner.webp"
            alt=""
            width={660}
            height={1024}
            className="w-full h-auto object-contain object-top-right"
            priority={false}
          />
        </div>
      </div>

      <div className="container-luxury mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Eyebrow Label with Gold Accent */}
        <div ref={eyebrowRef} className="inline-flex items-center gap-3 mb-5 sm:mb-8 lg:mb-12">
          <span className="overline-luxury text-gold-deep text-xs sm:text-xs">
            TUMKUR EVENTS &middot; TUMAKURU, KARNATAKA
          </span>
          <span
            ref={eyebrowLineRef}
            className="h-[1.5px] w-8 sm:w-12 bg-gold"
            aria-hidden="true"
          />
        </div>

        {/* Main Row: Asymmetrical 55% / 45% Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline Pairing (Marcellus + Allura Accent) */}
          <div className="lg:col-span-7">
            <h2
              id="trust-presence-heading"
              className="text-charcoal leading-[1.08] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 5.25rem)' }}
            >
              <span className="block overflow-hidden font-display">
                <span
                  ref={headlineLine1Ref}
                  className="inline-block will-change-transform"
                >
                  Rooted in Tumakuru.
                </span>
              </span>
              <span className="block overflow-hidden pt-1 pb-1 sm:pb-2">
                <span
                  ref={headlineLine2Ref}
                  className="inline-block font-accent text-gold-deep text-[1.1em] sm:text-[1.16em] leading-[1.18] will-change-transform tracking-normal"
                >
                  Made for Your Moments.
                </span>
              </span>
            </h2>
          </div>

          {/* Right Column: Body Narrative & Editorial CTA */}
          <div className="lg:col-span-5 lg:pt-2">
            <p
              ref={bodyRef}
              className="font-sans text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.65] sm:leading-[1.75] text-charcoal/80 font-normal sm:font-light max-w-lg"
            >
              From joyful birthdays and traditional ceremonies to memorable engagements and
              grand celebrations, every occasion deserves thoughtful details and a personal touch.
            </p>

            <div ref={ctaRef} className="mt-5 sm:mt-8 lg:mt-10">
              <Link
                href="/events"
                className="group inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
              >
                <span className="relative py-1">
                  Explore Our Events
                  {/* Subtle animated underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-normal ease-luxury group-hover:w-full"
                    aria-hidden="true"
                  />
                </span>
                <ArrowRight
                  className="h-4 w-4 text-gold-deep transition-transform duration-normal ease-luxury group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Fine Horizontal Divider */}
        <div
          ref={dividerRef}
          className="my-10 sm:my-16 lg:my-24 h-[1px] w-full bg-charcoal/10"
          aria-hidden="true"
        />

        {/* Bottom Three Textual Highlights (Compact, scannable & legible) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Highlight 01 */}
          <div
            ref={(el) => {
              highlightItemsRef.current[0] = el;
            }}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-deep">
                01
              </span>
              <span className="text-charcoal/30">&mdash;</span>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-charcoal tracking-tight">
                Based in Tumakuru
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed pt-0.5">
              Serving families and hosts locally across Tumakuru district and South Karnataka.
            </p>
          </div>

          {/* Highlight 02 */}
          <div
            ref={(el) => {
              highlightItemsRef.current[1] = el;
            }}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-deep">
                02
              </span>
              <span className="text-charcoal/30">&mdash;</span>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-charcoal tracking-tight">
                Celebrations Since 2021
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed pt-0.5">
              Committed to crafting heartfelt memories and bespoke celebration milestones.
            </p>
          </div>

          {/* Highlight 03 */}
          <div
            ref={(el) => {
              highlightItemsRef.current[2] = el;
            }}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-deep">
                03
              </span>
              <span className="text-charcoal/30">&mdash;</span>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-charcoal tracking-tight">
                Personalized Event D&eacute;cor
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed pt-0.5">
              Custom scenic stages, floral styling, themed birthdays, and artistic setups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
