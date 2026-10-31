'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { servicesGalleryImages } from '@/config/services-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServicesInspirationGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

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

      const items = galleryRef.current?.querySelectorAll('[data-gallery-tile]');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
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
      aria-label="Services Inspiration Gallery"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep font-mono">
                VISUAL MOMENTS IN ACTION
              </span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
              Beautiful Ideas.
              <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
                Thoughtfully executed across Tumakuru.
              </span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-colors shrink-0"
          >
            <span>Explore Our Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetrical 6-Photo Mosaic */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6"
        >
          {/* Tile 01: Dominant Photograph (Spans 7 cols on lg) */}
          <div
            data-gallery-tile
            className="lg:col-span-7 relative aspect-[16/11] lg:aspect-[16/10] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-md group"
          >
            <Image
              src={servicesGalleryImages[0].image}
              alt={servicesGalleryImages[0].imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-1">
                {servicesGalleryImages[0].service}
              </span>
              <h3 className="font-display text-xl lg:text-2xl text-ivory tracking-tight">
                {servicesGalleryImages[0].title}
              </h3>
            </div>
          </div>

          {/* Tile 02: Tall Secondary Feature (Spans 5 cols on lg) */}
          <div
            data-gallery-tile
            className="lg:col-span-5 relative aspect-[4/3] lg:aspect-[16/10] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-md group"
          >
            <Image
              src={servicesGalleryImages[1].image}
              alt={servicesGalleryImages[1].imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-1">
                {servicesGalleryImages[1].service}
              </span>
              <h3 className="font-display text-lg lg:text-xl text-ivory tracking-tight">
                {servicesGalleryImages[1].title}
              </h3>
            </div>
          </div>

          {/* Tiles 03, 04, 05, 06: Lower Grid (Spans 3 cols each on lg, or 2 cols on md) */}
          {servicesGalleryImages.slice(2, 6).map((img) => (
            <div
              key={img.id}
              data-gallery-tile
              className="lg:col-span-3 md:col-span-1 relative aspect-[4/3] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-md group"
            >
              <Image
                src={img.image}
                alt={img.imageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent opacity-85"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 right-3 z-10 text-ivory">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold block mb-0.5">
                  {img.service}
                </span>
                <h4 className="font-display text-base text-ivory tracking-tight line-clamp-1">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
