'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { expertiseServices } from '@/config/expertise';
import { ExpertiseItem } from '@/components/services/expertise-item';

/**
 * Section 06: Our Expertise
 *
 * Design Direction: "The Details Behind Every Celebration"
 * - Typography-led editorial layout contrasting with the preceding dark photo gallery.
 * - Warm Ivory background (#F7F4EE) with Charcoal typography (#151515) and Deep Gold (#8A6714) accents.
 * - Desktop: Open 3-column x 2-row editorial grid (LOCKED).
 * - Mobile: "Horizontal Expertise Editions" — touch-first snap series with progress line.
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

  // Mobile Horizontal Editions Refs & State (< 768px)
  const editionsContainerRef = useRef<HTMLDivElement>(null);
  const editionsScrollRef = useRef<HTMLDivElement>(null);
  const [activeEditionIndex, setActiveEditionIndex] = useState<number>(0);

  const handleScroll = () => {
    const el = editionsScrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;
    const itemWidth = firstChild.offsetWidth + 16; // 16px is gap-4
    const newIndex = Math.round(scrollLeft / itemWidth);
    const clamped = Math.max(0, Math.min(newIndex, expertiseServices.length - 1));
    if (clamped !== activeEditionIndex) {
      setActiveEditionIndex(clamped);
    }
  };

  const scrollToEdition = (index: number) => {
    const el = editionsScrollRef.current;
    if (!el) return;
    const targetChild = el.children[index] as HTMLElement;
    if (targetChild) {
      targetChild.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveEditionIndex(index);
    }
  };

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
            editionsContainerRef.current,
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
      if (editionsContainerRef.current) {
        gsap.set(editionsContainerRef.current, { opacity: 0, y: 22 });
      }
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
        // 5. Six Service Items in controlled stagger (desktop)
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
        );

      if (editionsContainerRef.current) {
        tl.to(
          editionsContainerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '<0.1'
        );
      }

      // 6. Footer CTA
      tl.to(
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
      className="relative bg-ivory text-charcoal py-14 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative White Floral Corner Arrangement (Upper-Right Margin) */}
      <div
        className="pointer-events-none select-none absolute -top-10 -right-10 sm:-top-14 sm:-right-14 lg:-top-16 lg:-right-16 w-[200px] sm:w-[260px] lg:w-[320px] opacity-40 sm:opacity-50 lg:opacity-60 z-0 hidden sm:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/white-floral-corner.webp"
          alt=""
          width={320}
          height={242}
          className="w-full h-auto object-contain transform scale-x-[-1]"
          priority={false}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* =========================================================================
            01. SECTION HEADER: TWO-COLUMN EDITORIAL INTRO
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 sm:pb-12 lg:pb-16 border-b border-charcoal/10">
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
            02A. MOBILE: "HORIZONTAL EXPERTISE EDITIONS" (< 768px)
            - Horizontal series of six editorial panels with native scroll-snap.
            - Panel width 80–84vw, next panel visible at right edge.
            - Elegant numeral, Marcellus heading, warm champagne card background.
            - Thin gold segmented progress line and 01 — 06 status counter.
            - Normal vertical scrolling preserved.
           ========================================================================= */}
        <div ref={editionsContainerRef} className="md:hidden mt-8 flex flex-col will-change-transform">
          {/* Progress Header / Control Bar */}
          <div className="flex items-center justify-between mb-4 px-0.5">
            {/* Left: 01 — 06 Index */}
            <div className="flex items-center gap-2 font-mono text-xs text-charcoal/70">
              <span className="font-semibold text-gold-deep tracking-wider">
                0{activeEditionIndex + 1}
              </span>
              <span className="text-charcoal/30">—</span>
              <span className="text-charcoal/50">06</span>
              <span className="text-charcoal/30 mx-0.5">&middot;</span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/70 truncate max-w-[150px] sm:max-w-xs">
                {expertiseServices[activeEditionIndex]?.title}
              </span>
            </div>

            {/* Right: Thin Gold Segmented Line + Chevrons */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-1"
                role="tablist"
                aria-label="Expertise edition tabs"
              >
                {expertiseServices.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={activeEditionIndex === idx}
                    aria-label={`Go to expertise edition ${idx + 1}`}
                    onClick={() => scrollToEdition(idx)}
                    className={`h-[2px] rounded-full transition-all duration-300 ease-out focus-visible:outline-1 focus-visible:outline-gold-deep ${
                      activeEditionIndex === idx
                        ? 'w-6 bg-gold-deep'
                        : 'w-2 bg-charcoal/15 hover:bg-gold-deep/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollToEdition(Math.max(0, activeEditionIndex - 1))}
                  disabled={activeEditionIndex === 0}
                  aria-label="Previous expertise edition"
                  className="p-1 rounded-full border border-charcoal/15 text-charcoal/60 transition-colors hover:text-gold-deep hover:border-gold-deep disabled:opacity-20 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToEdition(
                      Math.min(expertiseServices.length - 1, activeEditionIndex + 1)
                    )
                  }
                  disabled={activeEditionIndex === expertiseServices.length - 1}
                  aria-label="Next expertise edition"
                  className="p-1 rounded-full border border-charcoal/15 text-charcoal/60 transition-colors hover:text-gold-deep hover:border-gold-deep disabled:opacity-20 disabled:pointer-events-none"
                >
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Snap Track */}
          <div
            ref={editionsScrollRef}
            onScroll={handleScroll}
            className="-mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 pt-1 touch-pan-x touch-pan-y [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {expertiseServices.map((service, index) => {
              const isActive = activeEditionIndex === index;
              return (
                <div
                  key={service.id}
                  className="shrink-0 w-[82vw] max-w-[360px] snap-start relative"
                >
                  <div
                    className={`relative w-full h-[320px] p-6 rounded-xl border flex flex-col justify-between transition-all duration-300 ease-luxury ${
                      isActive
                        ? 'bg-[#F4EFE6] border-[#C79E22]/50 shadow-[0_8px_24px_rgba(21,21,21,0.06)]'
                        : 'bg-[#F9F6F0] border-charcoal/10 opacity-80'
                    }`}
                  >
                    {/* Top Accent Line */}
                    <div
                      className={`absolute top-0 left-6 right-6 h-[1.5px] transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-gold-deep/80 via-gold to-transparent'
                          : 'bg-transparent'
                      }`}
                      aria-hidden="true"
                    />

                    <div>
                      {/* Chapter Header: Large Numeral + Tag */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-gold-deep uppercase">
                          EDITION {service.number}
                        </span>
                        <span
                          className={`font-display text-3xl font-light select-none transition-colors duration-300 ${
                            isActive ? 'text-gold-deep' : 'text-charcoal/20'
                          }`}
                        >
                          {service.number}
                        </span>
                      </div>

                      {/* Marcellus Heading */}
                      <h3 className="font-display text-xl text-charcoal tracking-tight leading-snug mb-2.5">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Small Gold Editorial Detail & Directional Cue */}
                    <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-px w-5 bg-gold-deep" aria-hidden="true" />
                        <span className="font-sans text-[10px] uppercase tracking-wider text-charcoal/60 font-medium">
                          Bespoke Craft
                        </span>
                      </div>

                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform duration-normal ease-luxury ${
                          isActive
                            ? 'text-gold-deep translate-x-0.5 -translate-y-0.5'
                            : 'text-charcoal/30'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            02B. DESKTOP & TABLET: 3-COLUMN x 2-ROW EDITORIAL GRID (>= 768px, LOCKED)
           ========================================================================= */}
        <ul
          role="list"
          className="hidden md:grid mt-12 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-12"
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
          className="mt-10 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
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

