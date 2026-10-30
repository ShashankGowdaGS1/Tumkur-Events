'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import {
  selectedCelebrations,
} from '@/config/selected-celebrations';
import { GalleryLightbox } from '@/components/gallery/gallery-lightbox';

/**
 * Section 05: Selected Celebrations — Phase 07A Refinement
 *
 * Design Direction: "The Expanding Editorial Gallery"
 * Inspired by the Alur Pari Trends horizontal expanding image accordion:
 * - Exactly 5 celebration categories displayed in ONE single-row horizontal gallery.
 * - Default State: Image 01 (Birthday) is expanded; Images 02-05 remain narrow.
 * - Desktop Hover: Hovering any panel expands it to ~60-65% width with full natural color
 *   and brightness, while inactive panels contract to ~9-10% with subtle desaturation.
 * - Mouse Leave: Cursor leaving the gallery smoothly returns to Image 01 expanded.
 * - Mobile (< 1024px): Touch-friendly PARI-style layout with one dominant image
 *   and five numbered category selector tabs.
 * - Lightbox: Preserved accessible modal preview across all five images.
 * - Normal vertical scrolling throughout (NOT pinned).
 */
export function SelectedCelebrations() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const eyebrowLineRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Desktop accordion active index (Default: 0 - Image 01 expanded)
  const [activeDesktopIndex, setActiveDesktopIndex] = useState<number>(0);

  // Mobile active index
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  // Lightbox modal state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    const isReduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.set(
          [
            eyebrowRef.current,
            headlineRef.current,
            bodyRef.current,
            galleryRef.current,
            footerRef.current,
          ],
          { opacity: 1, y: 0, clearProps: 'all' }
        );
        if (eyebrowLineRef.current) gsap.set(eyebrowLineRef.current, { scaleX: 1 });
        return;
      }

      // Initial visual states
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      if (eyebrowLineRef.current) {
        gsap.set(eyebrowLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
      }
      gsap.set(headlineRef.current, { opacity: 0, y: 24 });
      gsap.set(bodyRef.current, { opacity: 0, y: 18 });
      gsap.set(galleryRef.current, { opacity: 0, y: 28 });
      gsap.set(footerRef.current, { opacity: 0, y: 16 });

      // Entrance ScrollTrigger Timeline (Not pinned, natural vertical scroll)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });

      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to(eyebrowLineRef.current, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
        .to(bodyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(galleryRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
        .to(footerRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="selected-celebrations"
      ref={sectionRef}
      aria-labelledby="selected-celebrations-heading"
      className="relative w-full bg-charcoal text-ivory overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      {/* Bottom-Right Edge: Golden Pampas Grass & Dried Florals Accent */}
      <div
        className="pointer-events-none select-none absolute -bottom-10 -right-6 z-0 hidden lg:block overflow-hidden"
        aria-hidden="true"
      >
        <div className="w-[clamp(160px,13vw,240px)] opacity-90">
          <Image
            src="/decor/golden-pampas-accent.webp"
            alt=""
            width={483}
            height={1022}
            className="w-full h-auto object-contain object-bottom-right"
            priority={false}
          />
        </div>
      </div>

      <div className="container-luxury mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* =========================================================================
            01. SECTION INTRODUCTION
            Compact editorial intro on Charcoal (#151515).
           ========================================================================= */}
        <div className="mb-12 sm:mb-16">
          {/* Eyebrow Label with Expanding Gold Accent */}
          <div ref={eyebrowRef} className="inline-flex items-center gap-3 mb-5 sm:mb-6">
            <span className="overline-luxury text-gold text-[11px] sm:text-xs">
              SELECTED CELEBRATIONS
            </span>
            <span ref={eyebrowLineRef} className="h-[1.5px] w-8 sm:w-12 bg-gold" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2
                id="selected-celebrations-heading"
                ref={headlineRef}
                className="font-display text-ivory leading-[1.08] tracking-[-0.015em]"
                style={{ fontSize: 'clamp(2.75rem, 4.6vw, 4.8rem)' }}
              >
                Moments Worth
                <br />
                Remembering.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <p
                ref={bodyRef}
                className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-silver-light font-light max-w-md"
              >
                An editorial glimpse into beautiful celebrations, thoughtful details, and inspiring
                event d&eacute;cor.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            02. DESKTOP: HORIZONTAL EXPANDING IMAGE ACCORDION (>= 1024px)
            - 5 celebration images in ONE shared horizontal row (h-[500px] xl:h-[540px]).
            - Active panel: ~62% width with full color and detailed text overlay.
            - Inactive panels: ~9.5% width with subtle desaturation and small number badge.
            - Mouse leaving gallery returns smoothly to Image 01 expanded.
           ========================================================================= */}
        <div ref={galleryRef}>
          <div
            onMouseLeave={() => setActiveDesktopIndex(0)}
            className="hidden lg:flex w-full h-[500px] xl:h-[540px] gap-2.5 sm:gap-3 items-stretch"
          >
            {selectedCelebrations.map((item, index) => {
              const isActive = activeDesktopIndex === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveDesktopIndex(index)}
                  onFocus={() => setActiveDesktopIndex(index)}
                  style={{
                    flex: isActive ? '6.5 1 0%' : '1 1 0%',
                  }}
                  className="relative overflow-hidden border border-charcoal-light/60 bg-charcoal-light cursor-pointer group transition-[flex] duration-500 ease-luxury will-change-[flex]"
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label={`View celebration: ${item.category} - ${item.title}`}
                    className="w-full h-full text-left relative block focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  >
                    {/* Background Image: Active has full color & brightness; Inactive has subtle desaturation */}
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes={isActive ? '65vw' : '15vw'}
                      className={`object-cover object-center select-none transition-all duration-500 ease-luxury ${
                        isActive
                          ? 'filter-none brightness-100 contrast-100 scale-100 group-hover:scale-[1.02]'
                          : 'grayscale-[65%] brightness-[0.75] contrast-[0.95]'
                      }`}
                      priority={index === 0}
                    />

                    {/* Inactive Panel Overlay: Darkened tint */}
                    <div
                      className={`absolute inset-0 bg-charcoal/25 transition-opacity duration-500 ease-luxury ${
                        isActive ? 'opacity-0' : 'opacity-100'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Top Number Badge: Always visible */}
                    <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
                      <span
                        className={`font-mono text-xs font-semibold px-2.5 py-1 border backdrop-blur-xs transition-colors duration-fast ${
                          isActive
                            ? 'text-gold bg-charcoal/80 border-gold/40'
                            : 'text-ivory/70 bg-charcoal/60 border-white/10 group-hover:text-gold'
                        }`}
                      >
                        {item.number}
                      </span>
                      {isActive && item.isConcept && (
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-charcoal-light text-silver-light border border-white/10 rounded-[2px] hidden xl:inline-block">
                          Visual Concept
                        </span>
                      )}
                    </div>

                    {/* Active Panel Bottom Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent transition-opacity duration-300 ease-luxury pointer-events-none ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Active Panel Text Content: Fades in only when sufficiently expanded */}
                    <div
                      className={`absolute inset-x-0 bottom-0 p-6 xl:p-8 z-20 flex items-end justify-between transition-all duration-300 ease-luxury ${
                        isActive
                          ? 'opacity-100 translate-y-0 delay-150'
                          : 'opacity-0 translate-y-3 pointer-events-none'
                      }`}
                    >
                      <div className="pr-4 max-w-xl">
                        <span className="overline-luxury text-gold text-xs block mb-1.5">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl xl:text-2xl text-ivory tracking-tight leading-snug line-clamp-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs xl:text-sm text-silver-light font-light leading-relaxed line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      </div>

                      {/* View Image Action Pill */}
                      <div className="shrink-0 inline-flex items-center gap-2 px-3.5 py-2 bg-charcoal/90 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider transition-all duration-fast group-hover:bg-gold group-hover:text-charcoal">
                        <span>View</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              03. MOBILE & TABLET: PARI TOUCH ACCORDION (< 1024px)
              - 1 Large dominant interactive image
              - 5 simple numbered category selector tabs
              - Tapping tabs changes image smoothly
              - Tapping image opens the lightbox
             ========================================================================= */}
          <div className="lg:hidden flex flex-col space-y-4">
            {/* Top 5 Numbered Selector Tabs */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {selectedCelebrations.map((item, idx) => {
                const isSelected = activeMobileIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveMobileIndex(idx)}
                    className={`py-2 sm:py-2.5 px-1 sm:px-2 border text-center transition-all duration-fast ${
                      isSelected
                        ? 'bg-gold text-charcoal border-gold font-bold shadow-sm'
                        : 'bg-charcoal-light text-silver-light border-white/10 hover:border-gold/30'
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-sm block">
                      {item.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dominant Active Image Stage */}
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden border border-charcoal-light/60 bg-charcoal-light">
              {selectedCelebrations.map((item, idx) => {
                const isSelected = activeMobileIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-300 ease-luxury ${
                      isSelected ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => openLightbox(idx)}
                      aria-label={`View celebration: ${item.category} - ${item.title}`}
                      className="w-full h-full text-left relative block focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="100vw"
                        className="object-cover object-center select-none"
                        priority={idx === 0}
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent pointer-events-none"
                        aria-hidden="true"
                      />

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex items-end justify-between">
                        <div className="pr-4">
                          <span className="overline-luxury text-gold text-[10px] sm:text-[11px] block mb-1">
                            {item.category}
                          </span>
                          <h3 className="font-display text-ivory text-base sm:text-lg tracking-tight leading-snug line-clamp-1 mb-1">
                            {item.title}
                          </h3>
                          <p className="font-sans text-xs text-silver-light font-light line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <div className="shrink-0 p-2.5 bg-gold text-charcoal">
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            04. COMPACT EDITORIAL FOOTER & CTA
           ========================================================================= */}
        <div
          ref={footerRef}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-charcoal-light/60"
        >
          <div>
            <p className="font-display text-lg sm:text-xl text-ivory/90">
              A closer look at every detail.
            </p>
            <span className="font-sans text-xs text-silver-light/60 font-light mt-0.5 block">
              Curated d&eacute;cor elements captured across Tumakuru celebrations.
            </span>
          </div>

          <Link
            href="/our-work"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-gold/40 text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-normal ease-luxury hover:bg-gold-deep hover:border-gold-deep hover:text-ivory focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
          >
            <span>Explore Our Work</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-normal ease-luxury group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Accessible Gallery Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={activeLightboxIndex}
        items={selectedCelebrations}
        onClose={closeLightbox}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </section>
  );
}
