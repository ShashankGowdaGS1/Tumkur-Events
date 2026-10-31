'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { packagesComparisonRows, packageCollections } from '@/config/packages-page';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackagesComparison() {
  const [selectedMobileIndex, setSelectedMobileIndex] = useState<number>(0);
  const activeMobilePkg = packageCollections[selectedMobileIndex] ?? packageCollections[0];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Packages Comparison"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep font-mono">
              SIDE-BY-SIDE OVERVIEW
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Three Collections.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Endless celebration possibilities.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Compare essential celebration dimensions at a glance. All inclusions are tailored to your venue and confirmed through an itemized quote.
          </p>
        </div>

        {/* =====================================================================
            DESKTOP COMPARISON TABLE (>= 768px)
            Spacious, elegant table with gold dividers and clear typography
           ===================================================================== */}
        <div
          ref={tableRef}
          className="hidden md:block rounded-xs overflow-hidden border border-charcoal/15 bg-white shadow-md mb-8"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-charcoal/15 bg-champagne/30 text-charcoal">
                <th scope="col" className="p-6 font-mono text-xs uppercase tracking-wider text-charcoal/60 w-1/4">
                  Planning Dimension
                </th>
                <th scope="col" className="p-6 font-display text-lg text-charcoal w-1/4">
                  <span className="font-mono text-xs text-gold-deep uppercase tracking-widest block mb-0.5">
                    01
                  </span>
                  Intimate Moments
                  <span className="block font-mono text-xs text-charcoal/70 mt-1 font-normal">
                    ₹18,000 – ₹35,000
                  </span>
                </th>
                <th scope="col" className="p-6 font-display text-lg text-charcoal w-1/4 bg-champagne/40">
                  <span className="font-mono text-xs text-gold-deep uppercase tracking-widest block mb-0.5">
                    02
                  </span>
                  Signature Celebrations
                  <span className="block font-mono text-xs text-charcoal/70 mt-1 font-normal">
                    ₹45,000 – ₹85,000
                  </span>
                </th>
                <th scope="col" className="p-6 font-display text-lg text-charcoal w-1/4">
                  <span className="font-mono text-xs text-gold-deep uppercase tracking-widest block mb-0.5">
                    03
                  </span>
                  Grand Statements
                  <span className="block font-mono text-xs text-charcoal/70 mt-1 font-normal">
                    ₹1,10,000 – ₹2,50,000+
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/10 font-sans text-xs sm:text-sm">
              {packagesComparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-champagne/15 transition-colors">
                  <td className="p-6 font-medium text-charcoal font-display bg-champagne/10">
                    {row.criteria}
                  </td>
                  <td className="p-6 text-charcoal/80 leading-relaxed font-light">
                    {row.intimate}
                  </td>
                  <td className="p-6 text-charcoal/90 leading-relaxed font-medium bg-champagne/20">
                    {row.signature}
                  </td>
                  <td className="p-6 text-charcoal/80 leading-relaxed font-light">
                    {row.grand}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-charcoal/15 bg-champagne/20">
                <td className="p-6 font-mono text-xs text-charcoal/60 uppercase">
                  Action
                </td>
                <td className="p-6">
                  <Link
                    href="/contact?package=intimate-moments"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-gold-deep transition-colors"
                  >
                    <span>Enquire Intimate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-deep" />
                  </Link>
                </td>
                <td className="p-6 bg-champagne/30">
                  <Link
                    href="/contact?package=signature-celebrations"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-gold-deep transition-colors"
                  >
                    <span>Enquire Signature</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-deep" />
                  </Link>
                </td>
                <td className="p-6">
                  <Link
                    href="/contact?package=grand-statements"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-gold-deep transition-colors"
                  >
                    <span>Enquire Grand</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-deep" />
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* =====================================================================
            MOBILE COMPARISON SELECTOR (< 768px)
            No table overflow: clean segmented selector with readable key metrics
           ===================================================================== */}
        <div className="md:hidden flex flex-col space-y-4 mb-8">
          {/* Segmented Button Row */}
          <div className="grid grid-cols-3 gap-2">
            {packageCollections.map((pkg, idx) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedMobileIndex(idx)}
                className={cn(
                  'py-2 px-1 text-center rounded-xs border font-mono text-xs transition-colors',
                  idx === selectedMobileIndex
                    ? 'border-gold-deep bg-gold-deep text-ivory font-semibold'
                    : 'border-charcoal/15 bg-white text-charcoal/70'
                )}
              >
                {pkg.shortTitle}
              </button>
            ))}
          </div>

          {/* Active Collection Mobile Card */}
          <div className="p-6 rounded-xs border border-charcoal/15 bg-white shadow-sm space-y-4">
            <div>
              <span className="font-mono text-xs text-gold-deep uppercase tracking-widest font-semibold block">
                Collection {activeMobilePkg.number}
              </span>
              <h3 className="font-display text-xl text-charcoal tracking-tight">
                {activeMobilePkg.title}
              </h3>
              <p className="font-mono text-sm font-semibold text-charcoal mt-1">
                {activeMobilePkg.priceDisplay}
              </p>
            </div>

            <div className="divide-y divide-charcoal/10 pt-2 font-sans text-xs">
              {packagesComparisonRows.map((row, i) => {
                const val =
                  selectedMobileIndex === 0
                    ? row.intimate
                    : selectedMobileIndex === 1
                    ? row.signature
                    : row.grand;

                return (
                  <div key={i} className="py-2.5 flex flex-col justify-between gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal/50">
                      {row.criteria}
                    </span>
                    <span className="font-medium text-charcoal leading-snug">
                      {val}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href={activeMobilePkg.enquiryHref}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-gold-deep hover:text-charcoal transition-colors rounded-xs"
            >
              <span>Enquire for {activeMobilePkg.shortTitle}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>

        {/* Small Disclaimer */}
        <p className="text-center font-sans text-xs text-charcoal/60 max-w-2xl mx-auto">
          Indicative budget ranges are based on standard venue setups in Tumakuru. Exact quotations depend on custom floral choices, venue dimensions, and event timing.
        </p>
      </div>
    </section>
  );
}
