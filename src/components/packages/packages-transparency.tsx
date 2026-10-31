'use client';

import React, { useRef, useEffect } from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { pricingFactors, mandatoryTransparencyDisclaimer } from '@/config/packages-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackagesTransparency() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const items = gridRef.current?.querySelectorAll('[data-transparency-card]');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Pricing Transparency"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep text-xs font-mono">
              HONEST &amp; TRANSPARENT PLANNING
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Thoughtfully Planned.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Clearly discussed before we begin.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl mx-auto font-light">
            We believe you deserve total clarity regarding how celebration decor budgets work. Here are the core factors that shape your final quotation.
          </p>
        </div>

        {/* 6 Factors Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14"
        >
          {pricingFactors.map((factor, i) => (
            <div
              key={i}
              data-transparency-card
              className="p-6 rounded-xs bg-[#FAF7F2] border border-charcoal/10 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-gold-deep font-semibold tracking-widest block mb-2">
                  FACTOR 0{i + 1}
                </span>
                <h3 className="font-display text-lg text-charcoal tracking-tight mb-2">
                  {factor.title}
                </h3>
                <p className="font-sans text-xs text-charcoal/75 leading-relaxed font-light">
                  {factor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="p-6 sm:p-7 rounded-xs bg-champagne/35 border border-charcoal/15 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-gold-deep/15 flex items-center justify-center shrink-0 mt-0.5 text-gold-deep">
            <Info className="w-4 h-4" aria-hidden="true" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-charcoal font-semibold block mb-1">
              Important Budget Note
            </span>
            <p className="font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed font-normal">
              {mandatoryTransparencyDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
