'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { inspirationImages } from '@/config/events-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function CelebrationInspiration() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Asymmetric image items staggered reveal
      const items = galleryRef.current?.querySelectorAll('[data-gallery-item]');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 80%',
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
      aria-label="Celebration Inspiration Gallery"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* =====================================================================
            01. SECTION HEADER
           ===================================================================== */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep">CURATED VISUAL MOMENTS</span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
              Every Detail Tells a Story.
              <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
                From morning rituals to midnight toasts.
              </span>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span>View Our Gallery</span>
              <ArrowRight
                className="w-4 h-4 text-gold transition-transform duration-normal ease-luxury group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            02. ASYMMETRICAL EDITORIAL GALLERY MOSAIC (6 items with varied scales)
           ===================================================================== */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Item 01: Large Highlight (Span 7 cols on lg) */}
          <div
            data-gallery-item
            className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal group shadow-sm"
          >
            <Image
              src={inspirationImages[0].src}
              alt={inspirationImages[0].alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-4 left-4 z-10 text-ivory">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                01 &middot; {inspirationImages[0].category}
              </span>
              <p className="font-display text-lg text-ivory">{inspirationImages[0].alt}</p>
            </div>
          </div>

          {/* Item 02: Tall Medium (Span 5 cols on lg) */}
          <div
            data-gallery-item
            className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal group shadow-sm"
          >
            <Image
              src={inspirationImages[1].src}
              alt={inspirationImages[1].alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-4 left-4 z-10 text-ivory">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                02 &middot; {inspirationImages[1].category}
              </span>
              <p className="font-display text-lg text-ivory">{inspirationImages[1].alt}</p>
            </div>
          </div>

          {/* Item 03: Balanced (Span 4 cols on lg) */}
          <div
            data-gallery-item
            className="lg:col-span-4 relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal group shadow-sm"
          >
            <Image
              src={inspirationImages[2].src}
              alt={inspirationImages[2].alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-4 left-4 z-10 text-ivory">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                03 &middot; {inspirationImages[2].category}
              </span>
              <p className="font-display text-base text-ivory">{inspirationImages[2].category}</p>
            </div>
          </div>

          {/* Item 04: Balanced (Span 4 cols on lg) */}
          <div
            data-gallery-item
            className="lg:col-span-4 relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal group shadow-sm"
          >
            <Image
              src={inspirationImages[3].src}
              alt={inspirationImages[3].alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-4 left-4 z-10 text-ivory">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                04 &middot; {inspirationImages[3].category}
              </span>
              <p className="font-display text-base text-ivory">{inspirationImages[3].category}</p>
            </div>
          </div>

          {/* Item 05: Balanced (Span 4 cols on lg) */}
          <div
            data-gallery-item
            className="lg:col-span-4 relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal group shadow-sm"
          >
            <Image
              src={inspirationImages[4].src}
              alt={inspirationImages[4].alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-4 left-4 z-10 text-ivory">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                05 &middot; {inspirationImages[4].category}
              </span>
              <p className="font-display text-base text-ivory">{inspirationImages[4].category}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
