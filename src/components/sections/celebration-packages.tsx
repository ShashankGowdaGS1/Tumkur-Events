'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import {
  celebrationPackages,
  packagesIntro,
  customQuoteContent,
  pricingDisclaimerText,
} from '@/config/packages';

/**
 * Section 08: Packages & Flexible Celebrations — "The Celebration Atelier"
 *
 * UX & Hierarchy Refinements (Phase 10B):
 * - Simplified, scannable content hierarchy (5–8 second comprehension)
 * - Single prominent price display per package (removed redundant "Starting at" labels)
 * - One concise description followed by exactly four single-column highlights
 * - Refined, unobtrusive checkmarks with high-contrast charcoal typography
 * - Prominent, uniform CTA: "Enquire About This Package"
 * - Clear pricing disclaimer above the enquiry button
 * - Preserved 55%/45% desktop composition, dynamic event photography, and floral corner
 */
export function CelebrationPackages() {
  const [activePackageId, setActivePackageId] = useState<string>('signature-celebrations');

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const floralCornerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const customQuoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(
        [
          headerRef.current,
          floralCornerRef.current,
          leftColRef.current,
          rightColRef.current,
          customQuoteRef.current,
        ],
        { opacity: 1, y: 0, clearProps: 'all' }
      );
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 24 });
      gsap.set(floralCornerRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(leftColRef.current, { opacity: 0, y: 28 });
      gsap.set(rightColRef.current, { opacity: 0, y: 32 });
      gsap.set(customQuoteRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
        .to(
          floralCornerRef.current,
          {
            opacity: 0.85,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          [leftColRef.current, rightColRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          customQuoteRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
          },
          '-=0.2'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const handlePackageToggle = (id: string) => {
    // Keep at least one package active so featured photograph remains visible
    setActivePackageId(id);
  };

  return (
    <section
      id="packages"
      ref={sectionRef}
      aria-label="Celebration Packages and Flexible Curations"
      className="relative bg-[#FAF7F2] text-charcoal py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-charcoal/5"
    >
      {/* =======================================================================
          01. ORGANIC FLORAL CORNER DECORATION (Cascading from upper-right)
         ======================================================================= */}
      <div
        ref={floralCornerRef}
        className="absolute top-0 right-0 w-36 sm:w-72 lg:w-96 aspect-square pointer-events-none select-none z-0 opacity-20 sm:opacity-75 lg:opacity-85 mix-blend-multiply overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/decor/floral-corner.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-contain object-top-right transform translate-x-3 -translate-y-3"
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* =======================================================================
            02. SECTION INTRODUCTION: EDITORIAL HEADLINE & BOTANICAL ACCENT
           ======================================================================= */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep">{packagesIntro.eyebrow}</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Curated With Care.
            <span className="block text-charcoal/90">Priced With Transparency.</span>
          </h2>

          <div className="flex items-center gap-3 my-3" aria-hidden="true">
            <span className="h-px w-10 bg-gold-deep/30" />
            <span className="text-gold-deep text-xs font-serif italic">✦ The Atelier ✦</span>
            <span className="h-px w-10 bg-gold-deep/30" />
          </div>

          <p className="font-sans text-fluid-body text-charcoal/75 leading-relaxed max-w-2xl">
            {packagesIntro.description}
          </p>
        </div>

        {/* =======================================================================
            03. MAIN PACKAGE REGION: 55% ACCORDION + 45% FEATURED PHOTOGRAPH
           ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* -------------------------------------------------------------------
              LEFT COLUMN (55%): 3 Interactive Package Rows
             ------------------------------------------------------------------- */}
          <div ref={leftColRef} className="lg:col-span-7 flex flex-col gap-4">
            {celebrationPackages.map((pkg) => {
              const isActive = pkg.id === activePackageId;

              return (
                <div
                  key={pkg.id}
                  className={cn(
                    'border rounded-xs transition-all duration-normal ease-luxury overflow-hidden',
                    isActive
                      ? 'bg-champagne/20 border-gold/45 shadow-sm'
                      : 'bg-ivory/50 border-charcoal/10 hover:border-gold/30 hover:bg-champagne/10'
                  )}
                >
                  {/* Package Row Button Header */}
                  <button
                    type="button"
                    onClick={() => handlePackageToggle(pkg.id)}
                    aria-expanded={isActive}
                    className="w-full p-4 sm:p-7 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 transition-colors focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      {/* Package Number */}
                      <span
                        className={cn(
                          'font-sans text-xs sm:text-sm font-bold tracking-[0.2em] transition-colors shrink-0 pt-0.5 sm:pt-0',
                          isActive ? 'text-gold-deep' : 'text-charcoal/40'
                        )}
                      >
                        {pkg.number}
                      </span>

                      {/* Package Title & Short One-Line Description */}
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl lg:text-[1.65rem] text-charcoal tracking-tight">
                          {pkg.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-[13px] text-charcoal/65 mt-0.5">
                          {pkg.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Single Prominent Price & Small Expand Indicator */}
                    <div className="flex items-center gap-3 shrink-0 text-right">
                      <span className="font-sans text-base sm:text-lg lg:text-xl font-semibold text-charcoal">
                        {pkg.priceDisplay}
                      </span>
                      <div
                        className={cn(
                          'w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-normal ease-luxury shrink-0',
                          isActive
                            ? 'border-gold-deep bg-gold-deep text-ivory rotate-180'
                            : 'border-charcoal/20 text-charcoal/60 hover:border-gold-deep hover:text-gold-deep'
                        )}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content Area */}
                  {isActive && (
                    <div className="px-5 pb-6 sm:px-7 sm:pb-8 pt-3 border-t border-gold/20 animate-fadeIn">
                      {/* 1. Concise Package Description */}
                      <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed mb-5">
                        {pkg.description}
                      </p>

                      {/* MOBILE ONLY: Embedded Featured Photograph */}
                      <div className="lg:hidden mb-6 relative w-full aspect-[16/10] overflow-hidden rounded-xs border border-gold/25 shadow-sm bg-charcoal">
                        <Image
                          src={pkg.image}
                          alt={pkg.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent pointer-events-none"
                          aria-hidden="true"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory">
                          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold block">
                            {pkg.captionTag}
                          </span>
                          <p className="font-sans text-xs text-silver-light/90 italic mt-0.5">
                            &ldquo;{pkg.captionQuote}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* 2. Package Highlights (Single-Column List, Max 4 items) */}
                      <div className="mb-6">
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal/60 block mb-3">
                          PACKAGE HIGHLIGHTS
                        </span>
                        <ul className="flex flex-col gap-2.5">
                          {pkg.highlights.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-3 text-sm sm:text-[15px] text-charcoal/90 leading-normal"
                            >
                              <Check className="w-3.5 h-3.5 text-gold-deep shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 3. Divider, Pricing Disclaimer & Primary Enquiry CTA */}
                      <div className="pt-5 border-t border-charcoal/10 flex flex-col gap-4">
                        <p className="font-sans text-xs text-charcoal/60 italic font-light">
                          {pricingDisclaimerText}
                        </p>

                        <div>
                          <Link
                            href={pkg.enquiryHref}
                            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.16em] font-semibold border border-charcoal hover:bg-charcoal-light hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 w-full sm:w-auto"
                          >
                            <span>Enquire About This Package</span>
                            <ArrowRight
                              className="h-3.5 w-3.5 text-gold transition-transform duration-normal ease-luxury group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN (45%): Large Edge-to-Edge Featured Photograph (Desktop)
             ------------------------------------------------------------------- */}
          <div ref={rightColRef} className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative w-full h-[580px] lg:h-[620px] overflow-hidden rounded-xs border border-gold/30 shadow-md bg-charcoal">
              {celebrationPackages.map((pkg, idx) => {
                const isActive = pkg.id === activePackageId;

                return (
                  <div
                    key={pkg.id}
                    className={cn(
                      'absolute inset-0 transition-all duration-500 ease-luxury',
                      isActive
                        ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    )}
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 600px"
                      priority={idx === 1}
                      className="object-cover"
                    />

                    {/* Subtle Dark Vignette at Bottom */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Editorial Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-ivory z-20">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="h-px w-5 bg-gold" />
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                          {pkg.captionTag}
                        </span>
                      </div>
                      <h4 className="font-display text-2xl text-ivory tracking-tight">
                        {pkg.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-silver-light/90 leading-relaxed mt-1.5 italic font-light max-w-md">
                        &ldquo;{pkg.captionQuote}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =======================================================================
            04. CLOSING CUSTOM QUOTE BLOCK (Bespoke Commissions)
           ======================================================================= */}
        <div
          ref={customQuoteRef}
          className="mt-16 sm:mt-24 p-8 sm:p-12 bg-ivory border border-gold/25 rounded-xs relative overflow-hidden shadow-sm"
        >
          {/* Subtle decorative line element */}
          <div className="flex items-center gap-2 mb-3 text-gold-deep" aria-hidden="true">
            <span className="h-px w-6 bg-gold-deep" />
            <span className="overline-luxury text-[10px] tracking-[0.25em]">
              {customQuoteContent.eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight">
                {customQuoteContent.headline}
              </h3>
              <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-2.5 max-w-2xl">
                {customQuoteContent.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href={customQuoteContent.ctaHref}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] border border-charcoal hover:bg-charcoal-light hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 shadow-sm"
              >
                <span>{customQuoteContent.ctaText}</span>
                <ArrowRight
                  className="h-4 w-4 text-gold transition-transform duration-normal ease-luxury group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
