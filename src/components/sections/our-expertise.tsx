'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { expertiseServices } from '@/config/expertise';
import { ExpertiseItem } from '@/components/services/expertise-item';

/**
 * Section 06: Our Expertise
 *
 * Design Direction: "The Details Behind Every Celebration"
 * - Typography-led editorial layout contrasting with the preceding dark photo gallery.
 * - Warm Ivory background (#F7F4EE) with Charcoal typography (#151515) and Deep Gold (#8A6714) accents.
 * - Open 3-column x 2-row editorial grid (not conventional cards).
 * - Hairline horizontal dividers and delicate directional hover cues.
 * - GSAP ScrollTrigger entrance animation with full prefers-reduced-motion fallback.
 */
export function OurExpertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const accentRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const serviceItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const ctaWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    const isReduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const items = serviceItemsRef.current.filter(Boolean);

      if (isReduced) {
        // Immediate display for reduced-motion users
        gsap.set(
          [
            eyebrowRef.current,
            headingLine1Ref.current,
            headingLine2Ref.current,
            accentRef.current,
            descRef.current,
            ...items,
            ctaWrapperRef.current,
          ],
          { opacity: 1, y: 0, clearProps: 'all' }
        );
        return;
      }

      // Initial visual states for gentle entrance
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      gsap.set([headingLine1Ref.current, headingLine2Ref.current], { opacity: 0, y: 24 });
      gsap.set(accentRef.current, { opacity: 0, y: 14 });
      gsap.set(descRef.current, { opacity: 0, y: 20 });
      gsap.set(items, { opacity: 0, y: 22 });
      gsap.set(ctaWrapperRef.current, { opacity: 0, y: 18 });

      // Orchestrated Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });

      // 1. Eyebrow
      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
        // 2. Main Heading lines
        .to(
          [headingLine1Ref.current, headingLine2Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        // 3. Allura Accent Phrase
        .to(
          accentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        // 4. Supporting Description
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.45'
        )
        // 5. Six Service Items in controlled stagger
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        // 6. Footer CTA
        .to(
          ctaWrapperRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.2'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-expertise"
      ref={sectionRef}
      aria-label="Our Expertise in Event Decoration and Styling"
      className="relative bg-ivory text-charcoal py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="container-luxury">
        {/* =========================================================================
            01. SECTION HEADER: TWO-COLUMN EDITORIAL INTRO
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 sm:pb-16 border-b border-charcoal/10">
          {/* Left Column: Eyebrow, Main Heading, Allura Accent */}
          <div className="lg:col-span-7">
            <div ref={eyebrowRef} className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep">OUR EXPERTISE</span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
              <span ref={headingLine1Ref} className="block">
                Every Detail.
              </span>
              <span ref={headingLine2Ref} className="block">
                Beautifully Considered.
              </span>
            </h2>

            <p
              ref={accentRef}
              className="font-accent text-accent-script text-2xl sm:text-3xl lg:text-[2rem] text-gold-deep mt-2 sm:mt-3 leading-snug"
            >
              The art is in the details.
            </p>
          </div>

          {/* Right Column: Supporting Description */}
          <div className="lg:col-span-5 lg:pb-2">
            <p
              ref={descRef}
              className="font-sans text-fluid-body text-charcoal/80 leading-relaxed max-w-xl"
            >
              From the first creative idea to the finishing touches, explore the decoration
              and styling that bring each celebration to life.
            </p>
          </div>
        </div>

        {/* =========================================================================
            02. SIX CAPABILITIES: 3-COLUMN x 2-ROW EDITORIAL GRID
           ========================================================================= */}
        <ul
          role="list"
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-12"
        >
          {expertiseServices.map((service, index) => (
            <ExpertiseItem
              key={service.id}
              service={service}
              index={index}
              ref={(el) => {
                serviceItemsRef.current[index] = el;
              }}
            />
          ))}
        </ul>

        {/* =========================================================================
            03. PRIMARY CTA FOOTER
           ========================================================================= */}
        <div
          ref={ctaWrapperRef}
          className="mt-14 sm:mt-20 pt-10 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-lg sm:text-xl text-charcoal">
              Bespoke Decoration &amp; Spatial Artistry
            </p>
            <p className="font-sans text-xs sm:text-sm text-charcoal/70 mt-0.5">
              Tailored stage backdrops, ceremonial florals, and personalized party styling across Tumakuru.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] border border-charcoal hover:bg-charcoal-light hover:border-gold hover:text-ivory transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            <span>Explore All Services</span>
            <ArrowRight
              className="h-4 w-4 text-gold transition-transform duration-normal ease-luxury group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

