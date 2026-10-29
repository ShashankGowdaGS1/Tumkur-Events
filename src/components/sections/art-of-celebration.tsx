'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

/**
 * Section 03: The Art of Celebration
 *
 * Design Direction: Contemporary Celebration Luxury
 * Asymmetric editorial split-screen composition:
 * - Left side (~47% desktop): Warm ivory editorial storytelling with Marcellus, Allura, and Manrope.
 * - Right side (~53% desktop): Edge-to-edge luxury South Indian celebration photography with zero frames/borders.
 * - Mobile: Intentional single-column layout (Editorial narrative -> Prominent portrait-friendly photograph).
 *
 * GSAP Animations:
 * - Natural scrolling (NOT pinned).
 * - Coordinated clip-mask & scale reveal for the photography.
 * - Restrained internal vertical parallax scrub on desktop (disabled on mobile & reduced-motion).
 * - Staggered line-by-line reveal for typography and understated CTA.
 * - Complete prefers-reduced-motion compatibility and cleanup.
 */
export function ArtOfCelebration() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    const isReduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      // 1. Reduced Motion Mode: Immediate full visibility without transforms
      if (isReduced) {
        gsap.set(
          [
            eyebrowRef.current,
            headingLine1Ref.current,
            headingLine2Ref.current,
            accentRef.current,
            bodyRef.current,
            ctaRef.current,
          ],
          { opacity: 1, y: 0, clearProps: 'all' }
        );
        if (eyebrowLineRef.current) gsap.set(eyebrowLineRef.current, { scaleX: 1 });
        if (imageWrapperRef.current) {
          gsap.set(imageWrapperRef.current, {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            clearProps: 'all',
          });
        }
        if (imageInnerRef.current) {
          gsap.set(imageInnerRef.current, { y: 0, scale: 1, clearProps: 'all' });
        }
        return;
      }

      // 2. Initial Setup for ScrollTrigger Entrance Animations
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      if (eyebrowLineRef.current) {
        gsap.set(eyebrowLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
      }
      gsap.set([headingLine1Ref.current, headingLine2Ref.current], { y: 36, opacity: 0 });
      gsap.set(accentRef.current, { opacity: 0, y: 22 });
      gsap.set(bodyRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaRef.current, { opacity: 0, y: 16 });

      // Image clip mask and initial scale
      if (imageWrapperRef.current) {
        gsap.set(imageWrapperRef.current, {
          clipPath: 'inset(8% 0% 8% 0%)',
          opacity: 0.85,
        });
      }
      if (imageInnerRef.current) {
        gsap.set(imageInnerRef.current, { scale: 1.08 });
      }

      // 3. Coordinated Entrance Timeline
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });

      // Photo reveal sequence
      if (imageWrapperRef.current) {
        entranceTl.to(imageWrapperRef.current, {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      if (imageInnerRef.current) {
        entranceTl.to(
          imageInnerRef.current,
          {
            scale: 1,
            duration: 1.4,
            ease: 'power2.out',
          },
          '<'
        );
      }

      // Text reveal sequence (overlapping smoothly with photo unmasking)
      entranceTl
        .to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=1.0'
        )
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
          [headingLine1Ref.current, headingLine2Ref.current],
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
          accentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
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
        );

      // 4. Subtle Internal Parallax Scrub (Desktop Only)
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop && imageInnerRef.current) {
        gsap.to(imageInnerRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="art-of-celebration"
      ref={sectionRef}
      aria-labelledby="art-of-celebration-heading"
      className="relative w-full bg-ivory text-charcoal overflow-hidden"
    >
      {/* Asymmetric Split-Screen Layout: Full Height on Desktop */}
      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[85svh] lg:min-h-[90svh] xl:min-h-[95svh]">
        {/* Left Side: Editorial Storytelling (47% Desktop) */}
        <div
          ref={contentColRef}
          className="w-full lg:w-[47%] xl:w-[46%] flex flex-col justify-center px-6 sm:px-10 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-14 2xl:pl-28 py-16 sm:py-20 lg:py-24 z-10"
        >
          <div className="w-full max-w-xl xl:max-w-2xl">
            {/* Eyebrow Label with Deep Gold Accent Line */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="overline-luxury text-gold-deep text-[11px] sm:text-xs">
                THE ART OF CELEBRATION
              </span>
              <span
                ref={eyebrowLineRef}
                className="h-[1.5px] w-8 sm:w-12 bg-gold"
                aria-hidden="true"
              />
            </div>

            {/* Main Editorial Headline (Marcellus) */}
            <h2
              id="art-of-celebration-heading"
              className="font-display text-charcoal leading-[1.06] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(3.2rem, 4.8vw, 5.8rem)' }}
            >
              <span className="block overflow-hidden">
                <span
                  ref={headingLine1Ref}
                  className="inline-block will-change-transform"
                >
                  More Than D&eacute;cor.
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-2">
                <span
                  ref={headingLine2Ref}
                  className="inline-block will-change-transform"
                >
                  A Feeling You Remember.
                </span>
              </span>
            </h2>

            {/* Expressive Accent Phrase (Allura) */}
            <div
              ref={accentRef}
              className="mt-3 sm:mt-4 mb-6 sm:mb-8 pt-1 pb-2 sm:pb-3 -mb-2 will-change-transform"
            >
              <span
                className="font-accent text-gold-deep block leading-[1.2] tracking-normal"
                style={{ fontSize: 'clamp(2.6rem, 3.8vw, 4.5rem)' }}
              >
                Beautifully imagined.
              </span>
            </div>

            {/* Supporting Description Narrative (Manrope) */}
            <p
              ref={bodyRef}
              className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.75] text-charcoal/80 font-light max-w-lg lg:max-w-xl"
            >
              Every celebration has its own character. From vibrant themed decorations to elegant
              traditional arrangements, we bring thoughtful details, color, and creativity together
              to make each occasion feel truly personal.
            </p>

            {/* Understated Editorial CTA Link */}
            <div ref={ctaRef} className="mt-8 sm:mt-10">
              <Link
                href="/our-work"
                className="group inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors duration-fast hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
              >
                <span className="relative py-1">
                  Discover Our Work
                  {/* Subtle animated gold underline reveal */}
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

        {/* Right Side: Edge-to-Edge Event Photography (53% Desktop) */}
        <div
          ref={imageWrapperRef}
          className="w-full lg:w-[53%] xl:w-[54%] relative min-h-[460px] sm:min-h-[580px] lg:min-h-full h-[460px] sm:h-[580px] lg:h-auto overflow-hidden will-change-transform"
        >
          {/* Internal Parallax Container (116% height for safe vertical translate) */}
          <div
            ref={imageInnerRef}
            className="relative w-full h-[116%] -top-[8%] will-change-transform"
          >
            <Image
              src="/images/events/art-of-celebration.jpg"
              alt="Artisanal South Indian celebration stage decor featuring fragrant jasmine garlands, brass samai lamps, and exquisite floral styling"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center select-none"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

