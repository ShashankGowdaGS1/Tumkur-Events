'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventCategoryDetail } from '@/config/event-detail-data';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryConceptsProps {
  readonly category: EventCategoryDetail;
}

export function CategoryConcepts({ category }: CategoryConceptsProps) {
  const [activeConceptIndex, setActiveConceptIndex] = useState<number>(0);
  const activeConcept = category.concepts[activeConceptIndex] ?? category.concepts[0];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const infoTrayRef = useRef<HTMLDivElement>(null);

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

  const handleSelectConcept = (index: number) => {
    if (index === activeConceptIndex) return;

    if (prefersReducedMotion()) {
      setActiveConceptIndex(index);
      return;
    }

    if (infoTrayRef.current) {
      gsap.fromTo(
        infoTrayRef.current,
        { opacity: 0.35, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    setActiveConceptIndex(index);
  };

  return (
    <section
      id="concepts"
      ref={sectionRef}
      aria-label={`Decoration Concepts for ${category.title}`}
      className="relative w-full bg-[#171717] text-ivory py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal-light"
    >
      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold">THREE SIGNATURE DIRECTIONS</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-ivory tracking-tight">
            Curated Decoration Concepts.
            <span className="block text-gold font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Distinctive aesthetics for {category.shortTitle.toLowerCase()}.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-silver-light/85 leading-relaxed mt-4 max-w-2xl font-light">
            Every celebration can be styled in multiple bespoke directions. Explore our three foundational
            design concepts below to envision the ambience, scale, and materials for your event in Tumakuru.
          </p>
        </div>

        {/* =====================================================================
            DESKTOP & TABLET TWO-COLUMN COMPOSITION (>= 768px)
            Left: Interactive Concept Selector List
            Right: Dominant Cross-Dissolving Visual Stage & Detail Card
           ===================================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Interactive Concept Selector Tabs (4-5 cols) */}
          <div
            role="tablist"
            aria-label="Decoration concepts list"
            className="md:col-span-5 lg:col-span-4 flex flex-col space-y-3"
          >
            {category.concepts.map((concept, idx) => {
              const isActive = idx === activeConceptIndex;

              return (
                <div
                  key={concept.id}
                  role="tab"
                  id={`concept-tab-${concept.id}`}
                  aria-selected={isActive}
                  aria-controls={`concept-panel-${concept.id}`}
                  tabIndex={0}
                  onClick={() => handleSelectConcept(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectConcept(idx);
                    } else if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      handleSelectConcept((idx + 1) % category.concepts.length);
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      handleSelectConcept((idx - 1 + category.concepts.length) % category.concepts.length);
                    }
                  }}
                  className={cn(
                    'p-5 lg:p-6 rounded-xs border text-left cursor-pointer transition-all duration-300 relative select-none',
                    isActive
                      ? 'bg-charcoal border-gold shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
                      : 'bg-[#1e1e1e]/60 border-charcoal-light/70 hover:bg-[#1e1e1e] hover:border-gold/30 opacity-75 hover:opacity-100'
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        'font-mono text-xs font-semibold tracking-widest',
                        isActive ? 'text-gold' : 'text-silver-light/50'
                      )}
                    >
                      DIRECTION {concept.number}
                    </span>
                    <span
                      className={cn(
                        'w-2 h-2 rounded-full transition-all duration-300',
                        isActive ? 'bg-gold scale-125' : 'bg-transparent'
                      )}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-lg lg:text-xl text-ivory tracking-tight mb-1">
                    {concept.title}
                  </h3>
                  <p className="font-sans text-xs text-silver-light/75 line-clamp-1">
                    {concept.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Dominant Visual Stage with Cross-Dissolve (7-8 cols) */}
          <div className="md:col-span-7 lg:col-span-8">
            <div
              id={`concept-panel-${activeConcept.id}`}
              role="tabpanel"
              aria-labelledby={`concept-tab-${activeConcept.id}`}
              className="relative w-full rounded-xs overflow-hidden border border-charcoal-light bg-charcoal shadow-xl"
            >
              {/* Stacked Images for instantaneous cross-fade */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                {category.concepts.map((concept, idx) => (
                  <div
                    key={concept.id}
                    className={cn(
                      'absolute inset-0 transition-all duration-700 ease-luxury',
                      idx === activeConceptIndex
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    )}
                  >
                    <Image
                      src={concept.image}
                      alt={concept.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover object-center"
                      priority={idx === 0}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 rounded-xs text-[10px] font-mono tracking-widest text-gold uppercase">
                      Direction {concept.number} &middot; {concept.subtitle}
                    </div>
                  </div>
                ))}

                {/* Overlaid Concept Title */}
                <div className="absolute bottom-4 left-6 right-6 z-20 text-ivory">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                    Concept {activeConcept.number}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl text-ivory tracking-tight">
                    {activeConcept.title}
                  </h3>
                </div>
              </div>

              {/* Detail Info Tray */}
              <div ref={infoTrayRef} className="p-6 lg:p-8 bg-[#181818] border-t border-charcoal-light">
                <p className="font-sans text-sm text-silver-light/90 leading-relaxed mb-6 font-light">
                  {activeConcept.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-gold block mb-3">
                    SIGNATURE CRAFT HIGHLIGHTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeConcept.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal rounded-xs border border-charcoal-light text-xs text-silver-light"
                      >
                        <Sparkles className="w-3 h-3 text-gold" aria-hidden="true" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-charcoal-light/60 flex items-center justify-between">
                  <Link
                    href={`/contact?event=${category.slug}&concept=${activeConcept.id}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
                  >
                    <span>Request This Concept</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="font-mono text-xs text-silver-light/60">
                    Bespoke customization available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            MOBILE TOUCH-FRIENDLY CONCEPT SHOWCASE (< 768px)
           ===================================================================== */}
        <div className="md:hidden flex flex-col">
          {/* Mobile Top Stepper Controls */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
              0{activeConceptIndex + 1} / 0{category.concepts.length} &middot; {activeConcept.subtitle}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleSelectConcept(Math.max(0, activeConceptIndex - 1))}
                disabled={activeConceptIndex === 0}
                aria-label="Previous concept"
                className="p-1 rounded-full border border-ivory/20 text-ivory disabled:opacity-20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleSelectConcept(Math.min(category.concepts.length - 1, activeConceptIndex + 1))}
                disabled={activeConceptIndex === category.concepts.length - 1}
                aria-label="Next concept"
                className="p-1 rounded-full border border-ivory/20 text-ivory disabled:opacity-20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Mobile Card */}
          <div className="w-full rounded-xs overflow-hidden border border-gold/40 bg-charcoal shadow-lg">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={activeConcept.image}
                alt={activeConcept.imageAlt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                  Direction {activeConcept.number}
                </span>
                <h3 className="font-display text-xl text-ivory tracking-tight">
                  {activeConcept.title}
                </h3>
              </div>
            </div>

            <div className="p-5 bg-[#181818] text-ivory">
              <p className="font-sans text-xs text-silver-light/85 leading-relaxed mb-4">
                {activeConcept.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {activeConcept.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-0.5 rounded-xs bg-charcoal border border-charcoal-light text-silver-light/90"
                  >
                    &bull; {h}
                  </span>
                ))}
              </div>

              <Link
                href={`/contact?event=${category.slug}&concept=${activeConcept.id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
              >
                <span>Request This Direction</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
