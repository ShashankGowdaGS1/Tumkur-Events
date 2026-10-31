'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { packageCollections } from '@/config/packages-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackagesCollectionSelector() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      const items = rowRef.current?.querySelectorAll('[data-selector-item]');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rowRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      const navbarOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="collections-overview"
      ref={sectionRef}
      aria-label="Collections Overview"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Section Intro */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep font-mono">
              CURATED CELEBRATION TIERS
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Find the Celebration That Fits You.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Three thoughtful collections for every occasion.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Whether welcoming close family to an intimate milestone at home or staging a grand wedding reception in Tumakuru, explore our three foundational collections below.
          </p>
        </div>

        {/* =====================================================================
            COMPACT EDITORIAL SELECTOR ROW (Not 3 generic boxes)
            A refined horizontal editorial row with gold hairline separators
           ===================================================================== */}
        <div
          ref={rowRef}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal/15 border-y border-charcoal/15 bg-white/50 rounded-xs shadow-xs"
        >
          {packageCollections.map((pkg) => (
            <div
              key={pkg.id}
              data-selector-item
              onClick={() => scrollToSection(pkg.anchorId)}
              className="group p-6 sm:p-8 lg:p-10 flex flex-col justify-between cursor-pointer hover:bg-champagne/25 transition-all duration-300 relative"
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-gold-deep uppercase tracking-widest">
                    COLLECTION {pkg.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-gold-deep transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl text-charcoal tracking-tight mb-2 group-hover:text-gold-deep transition-colors">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light mb-6">
                  {pkg.headline}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal/50 block">
                    Indicative Budget
                  </span>
                  <span className="font-display text-lg sm:text-xl font-semibold text-charcoal">
                    {pkg.priceDisplay}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full border border-charcoal/20 group-hover:border-gold-deep group-hover:bg-gold-deep group-hover:text-ivory flex items-center justify-center transition-all duration-300">
                  <ArrowDown className="w-4 h-4 text-charcoal/70 group-hover:text-ivory transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
