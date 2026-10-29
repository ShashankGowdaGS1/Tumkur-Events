'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { finalCtaConfig } from '@/config/final-cta';

/**
 * Section 11: Final Cinematic Enquiry CTA
 * Design Name: "THE FINAL INVITATION"
 *
 * Cinematic full-bleed photographic closing section for Tumkur Events:
 * - Edge-to-edge full viewport photograph with rich evening celebration canopy.
 * - Left 45-50%: Sophisticated typography region within container-luxury.
 * - Right 55%: Luminous evening floral installations, glowing fairy lights, and brass lanterns.
 * - Subtle directional gradient ensuring contrast and readability across all viewports.
 * - Smooth transition from Section 10 (Warm Ivory) down into future Charcoal (#151515) footer.
 * - Primary CTA: "PLAN YOUR EVENT" -> /contact?source=home-final-cta
 * - Secondary CTA: "EXPLORE OUR WORK" -> /our-work
 * - No pinning; refined GSAP ScrollTrigger entrance with reduced-motion support.
 */
export function FinalCelebrationCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const accentRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(
        [
          imageContainerRef.current,
          eyebrowRef.current,
          headingLine1Ref.current,
          headingLine2Ref.current,
          accentRef.current,
          descRef.current,
          ctaGroupRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: 'all',
        }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial hidden states for animated elements
      gsap.set(imageContainerRef.current, { scale: 1.04, opacity: 0.85 });
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      gsap.set([headingLine1Ref.current, headingLine2Ref.current], {
        opacity: 0,
        y: 24,
      });
      gsap.set(accentRef.current, { opacity: 0, y: 16 });
      gsap.set(descRef.current, { opacity: 0, y: 18 });
      gsap.set(ctaGroupRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      // 1. Image scale gently settles to 1.0
      tl.to(imageContainerRef.current, {
        scale: 1.0,
        opacity: 1,
        duration: 1.0,
        ease: 'power2.out',
      })
        // 2. Eyebrow reveals
        .to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.75'
        )
        // 3. Main heading lines stagger reveal
        .to(
          [headingLine1Ref.current, headingLine2Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        // 4. Accent phrase reveals
        .to(
          accentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.35'
        )
        // 5. Description reveals
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.35'
        )
        // 6. Action buttons reveal together
        .to(
          ctaGroupRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="final-invitation"
      ref={sectionRef}
      aria-label="The Final Invitation — Begin Planning Your Celebration"
      className="relative w-full overflow-hidden bg-[#151515] text-[#F7F4EE] py-24 sm:py-32 lg:py-0 lg:min-h-[82svh] flex items-center border-t border-[#151515]"
    >
      {/* =======================================================================
          01. FULL-BLEED BACKGROUND PHOTOGRAPH & CINEMATIC GRADIENT OVERLAYS
         ======================================================================= */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src={finalCtaConfig.image.src}
          alt={finalCtaConfig.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[65%_center] lg:object-center transform-gpu will-change-transform"
          priority={false}
          quality={90}
        />

        {/* Directional Gradient Overlays:
            - Mobile: Multi-stop vertical + horizontal protection
            - Desktop: Left-to-right directional fade keeping right 50% vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515]/85 via-[#151515]/65 to-[#151515]/95 lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#151515]/95 via-[#151515]/75 to-transparent via-55% to-85%" />

        {/* Ambient bottom transition to seamlessly meet future dark Charcoal footer */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#151515] via-[#151515]/70 to-transparent" />

        {/* Top subtle fade from previous section */}
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#151515]/70 to-transparent" />
      </div>

      {/* =======================================================================
          02. EDITORIAL CONTENT REGION (Positioned within container-luxury)
         ======================================================================= */}
      <div className="container-luxury relative z-10 w-full">
        <div
          ref={contentRef}
          className="max-w-xl xl:max-w-2xl py-6 lg:py-16 flex flex-col items-start"
        >
          {/* Eyebrow Label with Accent Line */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-3 mb-4 sm:mb-5"
          >
            <span
              className="h-px w-8 sm:w-10 bg-[#C79E22]"
              aria-hidden="true"
            />
            <span className="overline-luxury text-[#C79E22] tracking-[0.22em] text-xs sm:text-[13px]">
              {finalCtaConfig.eyebrow}
            </span>
          </div>

          {/* Main Display Headline (Marcellus) */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] text-[#F7F4EE] leading-[1.08] tracking-tight mb-2 sm:mb-3">
            <span ref={headingLine1Ref} className="block">
              {finalCtaConfig.headingLine1}
            </span>
            <span ref={headingLine2Ref} className="block text-[#FAF7F2]">
              {finalCtaConfig.headingLine2}
            </span>
          </h2>

          {/* Emotional Script Accent Phrase (Allura) */}
          <p
            ref={accentRef}
            className="font-accent text-3xl sm:text-4xl lg:text-[44px] text-[#C79E22] leading-tight mb-5 sm:mb-6 select-none"
          >
            {finalCtaConfig.accentLine}
          </p>

          {/* Body Description (Manrope) */}
          <p
            ref={descRef}
            className="font-sans text-sm sm:text-base lg:text-lg text-[#F7F4EE]/85 max-w-lg leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            {finalCtaConfig.description}
          </p>

          {/* Dual Action CTAs: Primary Plan Event Button + Secondary Explore Link */}
          <div
            ref={ctaGroupRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            {/* Primary CTA Button: Brand Gold Solid */}
            <Link
              href={finalCtaConfig.primaryCta.href}
              className="inline-flex items-center justify-center px-7 sm:px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold font-sans text-[#151515] bg-[#C79E22] hover:bg-[#D6AC2A] active:bg-[#B38C1B] rounded-sm transition-all duration-300 shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79E22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
            >
              <span>{finalCtaConfig.primaryCta.label}</span>
              <ArrowUpRight
                className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary CTA Link: Warm Ivory Editorial Text Link */}
            <Link
              href={finalCtaConfig.secondaryCta.href}
              className="inline-flex items-center justify-center sm:justify-start px-4 py-3 text-xs sm:text-sm uppercase tracking-[0.16em] font-medium font-sans text-[#F7F4EE]/90 hover:text-[#C79E22] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79E22] rounded-sm"
            >
              <span className="relative">
                {finalCtaConfig.secondaryCta.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C79E22] transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-[#C79E22]"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
