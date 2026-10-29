import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { journalImages } from '@/config/testimonials';

export interface JournalTriptychProps {
  className?: string;
}

/**
 * Editorial Photographic Triptych (55–60% of content width)
 *
 * Designed with magazine-grade visual layering and depth:
 * 01 — Dominant event stage photograph with fine gold border and editorial caption
 * 02 — Detail close-up of ceremonial florals & sacred samai lamps with subtle overlap
 * 03 — Detail close-up of warm chandeliers & cascading roses
 *
 * Features:
 * - Editorial figure indices (FIG. 01, FIG. 02, FIG. 03)
 * - Fine gold hairlines between labels and captions
 * - Subtly offset vertical detail column for authentic editorial depth
 * - Mobile: Dominant image on top with side-by-side detail close-ups below
 */
export function JournalTriptych({ className }: { className?: string }) {
  const [mainImage, detailImage1, detailImage2] = journalImages;

  return (
    <div data-element="triptych-root" className={cn('w-full relative', className)}>
      {/* =======================================================================
          DESKTOP EDITORIAL COMPOSITION (lg:grid lg:grid-cols-12 gap-3)
         ======================================================================= */}
      <div className="hidden lg:grid grid-cols-12 gap-3 h-[520px] xl:h-[570px] relative">
        {/* Dominant Main Photograph (7 columns) */}
        <div
          data-element="main-photo"
          className="col-span-7 relative h-full overflow-hidden rounded-xs border border-charcoal/20 bg-charcoal shadow-sm group"
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 600px"
            priority
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-102"
          />

          {/* Vignette Gradient for Legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Top-Left Figure Index Badge */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-ivory/80 bg-charcoal/60 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-ivory/10">
              FIG. 01
            </span>
          </div>

          {/* Bottom Caption Overlay with Gold Hairline */}
          <div className="absolute bottom-5 left-5 right-5 text-ivory z-10 pointer-events-none">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-px w-4 bg-gold" />
              <span className="font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-gold">
                {mainImage.label}
              </span>
            </div>
            <h4 className="font-display text-base xl:text-lg text-ivory tracking-tight">
              {mainImage.caption}
            </h4>
          </div>
        </div>

        {/* Supporting Detail Photographs (5 columns) with Subtle Visual Layering */}
        <div className="col-span-5 flex flex-col gap-3 h-full relative -ml-1 z-10">
          {/* Detail Photo 01: Ceremonial Florals & Brass Samai */}
          <div
            data-element="detail-photo-1"
            className="flex-1 relative overflow-hidden rounded-xs border border-charcoal/20 bg-charcoal shadow-sm group"
          >
            <Image
              src={detailImage1.src}
              alt={detailImage1.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 400px"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-103"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Figure Tag */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-ivory/80 bg-charcoal/60 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-ivory/10">
                FIG. 02
              </span>
            </div>

            {/* Caption */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-gold block">
                {detailImage1.label}
              </span>
              <p className="font-sans text-xs text-ivory/90 mt-0.5 line-clamp-1">
                {detailImage1.caption}
              </p>
            </div>
          </div>

          {/* Detail Photo 02: Warm Ambience & Chandeliers */}
          <div
            data-element="detail-photo-2"
            className="flex-1 relative overflow-hidden rounded-xs border border-charcoal/20 bg-charcoal shadow-sm group"
          >
            <Image
              src={detailImage2.src}
              alt={detailImage2.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 400px"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-103"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Figure Tag */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-ivory/80 bg-charcoal/60 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-ivory/10">
                FIG. 03
              </span>
            </div>

            {/* Caption */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-gold block">
                {detailImage2.label}
              </span>
              <p className="font-sans text-xs text-ivory/90 mt-0.5 line-clamp-1">
                {detailImage2.caption}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          MOBILE & TABLET EDITORIAL COMPOSITION (< 1024px)
         ======================================================================= */}
      <div className="lg:hidden flex flex-col gap-2.5">
        {/* Dominant Photograph on top */}
        <div
          data-element="main-photo-mobile"
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xs border border-charcoal/20 bg-charcoal shadow-sm"
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase text-ivory/80 bg-charcoal/60 px-2 py-0.5 rounded-xs">
              FIG. 01
            </span>
          </div>
          <div className="absolute bottom-3.5 left-4 right-4 text-ivory z-10 pointer-events-none">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold block">
              {mainImage.label}
            </span>
            <span className="font-display text-sm text-ivory/90 block mt-0.5">
              {mainImage.caption}
            </span>
          </div>
        </div>

        {/* Two Detail Photographs side-by-side */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/20 bg-charcoal shadow-sm">
            <Image
              src={detailImage1.src}
              alt={detailImage1.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 350px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-gold block">
                {detailImage1.label}
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/20 bg-charcoal shadow-sm">
            <Image
              src={detailImage2.src}
              alt={detailImage2.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 350px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-gold block">
                {detailImage2.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
