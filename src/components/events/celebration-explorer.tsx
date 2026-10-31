'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { allEventCategories, EventOverviewCategory } from '@/config/events-page';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function CelebrationExplorer() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const activeCategory = allEventCategories[activeCategoryIndex] ?? allEventCategories[0];

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  // Desktop right-panel animation refs
  const imageStageRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Entrance reveal for section header
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

  // Smooth category transition on desktop without flicker
  const handleCategoryChange = (index: number) => {
    if (index === activeCategoryIndex) return;

    if (prefersReducedMotion()) {
      setActiveCategoryIndex(index);
      return;
    }

    // Subtle cross-wipe of text info
    if (infoCardRef.current) {
      gsap.fromTo(
        infoCardRef.current,
        { opacity: 0.4, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    setActiveCategoryIndex(index);
  };

  // Mobile horizontal swipe scroll detection
  const handleMobileScroll = () => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;
    const itemWidth = firstChild.offsetWidth + 16;
    const newIndex = Math.round(el.scrollLeft / itemWidth);
    const clamped = Math.max(0, Math.min(newIndex, allEventCategories.length - 1));
    if (clamped !== activeCategoryIndex) {
      setActiveCategoryIndex(clamped);
    }
  };

  const scrollToMobileIndex = (index: number) => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement;
    if (firstChild) {
      const itemWidth = firstChild.offsetWidth + 16;
      el.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    }
    setActiveCategoryIndex(index);
  };

  return (
    <section
      id="celebration-explorer"
      ref={sectionRef}
      aria-label="Interactive Celebration Catalogue"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* =====================================================================
            01. SECTION HEADER
           ===================================================================== */}
        <div ref={headerRef} className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep">SEVEN CURATED OCCASIONS</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            The Celebration Catalogue.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Crafted for life&apos;s finest milestones.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Explore our specialized event verticals across Tumakuru. Select an occasion below to preview
            its design philosophy, signature arrangements, and dedicated styling offerings.
          </p>
        </div>

        {/* =====================================================================
            02. DESKTOP INTERACTIVE CATALOGUE (>= 1024px)
            Left: Vertical Numbered List of 7 Categories
            Right: Large Photographic Showcase Responding Instantly
           ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column (5 cols): Numbered Vertical Directory */}
          <div
            role="tablist"
            aria-label="Event Categories List"
            className="lg:col-span-5 flex flex-col divide-y divide-charcoal/10 border-y border-charcoal/10"
          >
            {allEventCategories.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;

              return (
                <div
                  key={cat.id}
                  role="tab"
                  id={`cat-tab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls={`cat-panel-${cat.id}`}
                  tabIndex={0}
                  onMouseEnter={() => handleCategoryChange(idx)}
                  onFocus={() => handleCategoryChange(idx)}
                  onClick={() => handleCategoryChange(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCategoryChange(idx);
                    }
                  }}
                  className={cn(
                    'group relative py-4 sm:py-5 px-3 flex items-center justify-between cursor-pointer transition-all duration-300 rounded-xs select-none',
                    isActive
                      ? 'bg-champagne/40 border-l-2 border-gold-deep pl-4'
                      : 'hover:bg-champagne/15'
                  )}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Category Number */}
                    <span
                      className={cn(
                        'font-mono text-xs sm:text-sm tracking-widest font-semibold transition-colors duration-200',
                        isActive ? 'text-gold-deep' : 'text-charcoal/40 group-hover:text-charcoal/70'
                      )}
                    >
                      {cat.number}
                    </span>

                    {/* Category Title & Small Tag */}
                    <div>
                      <h3
                        className={cn(
                          'font-display text-lg xl:text-xl transition-colors duration-200 tracking-tight',
                          isActive ? 'text-charcoal font-medium' : 'text-charcoal/80 group-hover:text-charcoal'
                        )}
                      >
                        {cat.title}
                      </h3>
                      <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-charcoal/50 block mt-0.5">
                        {cat.tag}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div
                    className={cn(
                      'shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300',
                      isActive
                        ? 'border-gold-deep bg-gold-deep text-ivory translate-x-1'
                        : 'border-transparent text-charcoal/30 group-hover:border-charcoal/20 group-hover:text-charcoal'
                    )}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Reactive Visual Showcase */}
          <div className="lg:col-span-7 sticky top-28">
            <div
              ref={imageStageRef}
              id={`cat-panel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`cat-tab-${activeCategory.id}`}
              className="relative w-full overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-[0_16px_50px_rgba(21,21,21,0.12)]"
            >
              {/* Stacked Images for instantaneous cross-dissolve without white flash */}
              <div className="relative w-full h-[400px] xl:h-[450px] overflow-hidden">
                {allEventCategories.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className={cn(
                      'absolute inset-0 transition-all duration-700 ease-luxury',
                      idx === activeCategoryIndex
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    )}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover object-center"
                      priority={idx === 0}
                    />

                    {/* Dark gradient for text readability */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-charcoal/10"
                      aria-hidden="true"
                    />

                    {/* Top Right Category Pill */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 rounded-xs text-[10px] font-mono tracking-widest text-gold uppercase">
                      {cat.number} &middot; {cat.tag}
                    </div>
                  </div>
                ))}

                {/* Overlaid Bottom Title & Headline */}
                <div className="absolute bottom-4 left-6 right-6 z-20 text-ivory">
                  <span className="font-mono text-xs text-gold uppercase tracking-widest font-semibold block mb-1">
                    {activeCategory.shortTitle}
                  </span>
                  <h4 className="font-display text-2xl xl:text-3xl text-ivory tracking-tight leading-snug">
                    {activeCategory.headline}
                  </h4>
                </div>
              </div>

              {/* Showcase Detail Tray (Description + Highlights + Link) */}
              <div ref={infoCardRef} className="p-6 xl:p-8 bg-[#181818] text-ivory border-t border-charcoal-light">
                <p className="font-sans text-sm text-silver-light/85 leading-relaxed mb-6 font-light">
                  {activeCategory.description}
                </p>

                {/* Signature Highlights */}
                <div className="mb-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-gold block mb-3">
                    SIGNATURE ELEMENTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.highlights.map((h, i) => (
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

                {/* Actions: Explore Event Detail & Direct Consultation */}
                <div className="flex items-center justify-between pt-4 border-t border-charcoal-light">
                  <Link
                    href={activeCategory.href}
                    className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <span>Explore {activeCategory.shortTitle}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-normal ease-luxury group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href={`/contact?event=${activeCategory.id}`}
                    className="font-sans text-xs text-silver-light/70 hover:text-gold uppercase tracking-wider underline-offset-4 hover:underline transition-colors"
                  >
                    Enquire for this event &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            03. MOBILE & TABLET TOUCH-FRIENDLY EXPLORER (< 1024px)
            Full-width swipeable cards with index navigator, crisp photography,
            and direct navigation links.
           ===================================================================== */}
        <div className="lg:hidden flex flex-col">
          {/* Top Mobile Category Indicator & Step Chevrons */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-charcoal">
              <span className="text-gold-deep font-semibold tracking-wider">
                0{activeCategoryIndex + 1}
              </span>
              <span className="text-charcoal/30">/</span>
              <span className="text-charcoal/60">07</span>
              <span className="text-charcoal/30 mx-1">&middot;</span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/80 font-medium truncate max-w-[170px] sm:max-w-xs">
                {activeCategory.shortTitle}
              </span>
            </div>

            {/* Segmented Line Progress + Chevrons */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-1"
                role="tablist"
                aria-label="Event category mobile slides"
              >
                {allEventCategories.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={activeCategoryIndex === idx}
                    aria-label={`Go to category ${idx + 1}`}
                    onClick={() => scrollToMobileIndex(idx)}
                    className={cn(
                      'h-[2px] rounded-full transition-all duration-300 ease-out focus-visible:outline-1 focus-visible:outline-gold-deep',
                      activeCategoryIndex === idx ? 'w-5 bg-gold-deep' : 'w-1.5 bg-charcoal/20'
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollToMobileIndex(Math.max(0, activeCategoryIndex - 1))}
                  disabled={activeCategoryIndex === 0}
                  aria-label="Previous event category"
                  className="p-1 rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-gold-deep hover:text-gold-deep disabled:opacity-25 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToMobileIndex(Math.min(allEventCategories.length - 1, activeCategoryIndex + 1))
                  }
                  disabled={activeCategoryIndex === allEventCategories.length - 1}
                  aria-label="Next event category"
                  className="p-1 rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-gold-deep hover:text-gold-deep disabled:opacity-25 disabled:pointer-events-none"
                >
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Full-width snap track (one card at a time, zero cut-off) */}
          <div
            ref={mobileTrackRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 touch-pan-x touch-pan-y [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {allEventCategories.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;

              return (
                <div
                  key={cat.id}
                  className="shrink-0 w-full snap-start relative"
                >
                  <div
                    className={cn(
                      'relative w-full rounded-sm overflow-hidden border transition-all duration-300 bg-charcoal shadow-md',
                      isActive ? 'border-gold/45' : 'border-charcoal/20 opacity-90'
                    )}
                  >
                    {/* Visual Aspect Ratio */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-charcoal-light">
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover object-center"
                        priority={idx === 0}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent pointer-events-none"
                        aria-hidden="true"
                      />

                      {/* Overlaid Badges */}
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 rounded-xs text-[10px] font-mono tracking-widest text-gold uppercase">
                        {cat.number} &middot; {cat.tag}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 z-10 text-ivory">
                        <h3 className="font-display text-xl sm:text-2xl text-ivory tracking-tight">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content & Action */}
                    <div className="p-5 bg-[#171717] text-ivory border-t border-charcoal-light">
                      <p className="font-sans text-xs sm:text-sm text-silver-light/85 leading-relaxed mb-4">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cat.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-0.5 rounded-xs bg-charcoal border border-charcoal-light text-silver-light/90"
                          >
                            &bull; {h}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-charcoal-light/70">
                        <Link
                          href={cat.href}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
                        >
                          <span>Explore Event</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>

                        <Link
                          href={`/contact?event=${cat.id}`}
                          className="font-sans text-[11px] text-silver-light/70 hover:text-gold uppercase tracking-wider"
                        >
                          Enquire &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
