'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '@/config/services-page';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServiceIndex() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeService = servicesData[activeIndex] ?? servicesData[0];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const previewCardRef = useRef<HTMLDivElement>(null);

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
    }, section);

    return () => ctx.revert();
  }, []);

  const handleHoverService = (index: number) => {
    if (index === activeIndex) return;

    if (prefersReducedMotion()) {
      setActiveIndex(index);
      return;
    }

    if (previewCardRef.current) {
      gsap.fromTo(
        previewCardRef.current,
        { opacity: 0.45, y: 6 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    setActiveIndex(index);
  };

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
      id="service-index"
      ref={sectionRef}
      aria-label="Interactive Service Index"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Section Intro */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep font-mono">
              SIX CREATIVE DISCIPLINES
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Explore Our Creative Expertise.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Thoughtful design across every dimension.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Select any creative service below to preview its scope and jump directly to detailed design specifications, styling elements, and tailored consultation options.
          </p>
        </div>

        {/* =====================================================================
            DESKTOP INTERACTIVE SERVICE DIRECTORY (>= 1024px)
            Left: Interactive 6-Service Index List
            Right: Sticky Photographic Preview Stage with Quick Jump Action
           ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column (6 cols): Numbered Service List */}
          <div
            role="list"
            aria-label="Interactive services menu"
            className="lg:col-span-6 flex flex-col divide-y divide-charcoal/10 border-y border-charcoal/10"
          >
            {servicesData.map((svc, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={svc.id}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => handleHoverService(idx)}
                  onFocus={() => handleHoverService(idx)}
                  onClick={() => scrollToSection(svc.anchorId)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection(svc.anchorId);
                    }
                  }}
                  className={cn(
                    'group relative py-5 xl:py-6 px-4 flex items-center justify-between cursor-pointer transition-all duration-300 rounded-xs select-none',
                    isActive
                      ? 'bg-champagne/35 border-l-2 border-gold-deep pl-5'
                      : 'hover:bg-champagne/15'
                  )}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={cn(
                        'font-mono text-sm tracking-widest font-semibold transition-colors duration-200',
                        isActive ? 'text-gold-deep' : 'text-charcoal/40 group-hover:text-charcoal/70'
                      )}
                    >
                      {svc.number}
                    </span>

                    <div>
                      <h3
                        className={cn(
                          'font-display text-xl xl:text-2xl transition-colors duration-200 tracking-tight',
                          isActive ? 'text-charcoal font-medium' : 'text-charcoal/80 group-hover:text-charcoal'
                        )}
                      >
                        {svc.title}
                      </h3>
                      <span className="font-sans text-xs text-charcoal/50 block mt-0.5">
                        {svc.tagline}
                      </span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      'shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300',
                      isActive
                        ? 'border-gold-deep bg-gold-deep text-ivory translate-x-1'
                        : 'border-transparent text-charcoal/30 group-hover:border-charcoal/20 group-hover:text-charcoal'
                    )}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (6 cols): Sticky Preview Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div
              ref={previewCardRef}
              className="relative w-full rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-[0_16px_50px_rgba(21,21,21,0.12)] text-ivory"
            >
              {/* Stacked Images for instantaneous cross-dissolve */}
              <div className="relative w-full h-[360px] xl:h-[400px] overflow-hidden">
                {servicesData.map((svc, idx) => (
                  <div
                    key={svc.id}
                    className={cn(
                      'absolute inset-0 transition-all duration-700 ease-luxury',
                      idx === activeIndex
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    )}
                  >
                    <Image
                      src={svc.image}
                      alt={svc.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                      priority={idx === 0}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 rounded-xs text-[10px] font-mono tracking-widest text-gold uppercase">
                      Service {svc.number} &middot; Tumakuru
                    </div>
                  </div>
                ))}

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-4 left-6 right-6 z-20">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-1">
                    Creative Discipline {activeService.number}
                  </span>
                  <h4 className="font-display text-2xl xl:text-3xl text-ivory tracking-tight">
                    {activeService.title}
                  </h4>
                </div>
              </div>

              {/* Preview Tray with Description & Direct Scroll Anchor */}
              <div className="p-6 xl:p-7 bg-[#181818] border-t border-charcoal-light">
                <p className="font-sans text-sm text-silver-light/85 leading-relaxed mb-5 font-light">
                  {activeService.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-charcoal-light/60">
                  <button
                    type="button"
                    onClick={() => scrollToSection(activeService.anchorId)}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
                  >
                    <span>Read Full Service Details</span>
                    <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  </button>

                  <span className="font-mono text-xs text-silver-light/50">
                    Scrolls to chapter &darr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            MOBILE TOUCH-FRIENDLY SERVICE SELECTOR (< 1024px)
            Compact numbered selector with preview card and direct jump buttons
           ===================================================================== */}
        <div className="lg:hidden flex flex-col space-y-4">
          {/* Quick Tab Selector Row */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {servicesData.map((svc, idx) => (
              <button
                key={svc.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  'py-2 px-1 text-center rounded-xs border font-mono text-xs transition-colors',
                  idx === activeIndex
                    ? 'border-gold-deep bg-gold-deep text-ivory font-semibold'
                    : 'border-charcoal/15 bg-white text-charcoal/70'
                )}
              >
                {svc.number}
              </button>
            ))}
          </div>

          {/* Active Service Card on Mobile */}
          <div className="rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal text-ivory shadow-md">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                  Service {activeService.number}
                </span>
                <h3 className="font-display text-xl text-ivory tracking-tight">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <div className="p-5 bg-[#181818]">
              <p className="font-sans text-xs text-silver-light/85 leading-relaxed mb-4">
                {activeService.description}
              </p>

              <button
                type="button"
                onClick={() => scrollToSection(activeService.anchorId)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
              >
                <span>Jump to {activeService.shortTitle} Details</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
