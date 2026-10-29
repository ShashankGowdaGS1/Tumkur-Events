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
 * Art-directed editorial spread combining:
 * 01 — Dominant event stage photograph (Left / 7 cols)
 * 02 — Detail close-up of ceremonial florals & brass lamps (Top Right / 5 cols)
 * 03 — Detail close-up of warm lighting & chandeliers (Bottom Right / 5 cols)
 *
 * Mobile: Main photograph with the two detail photos arranged side by side below it.
 */
export function JournalTriptych({ className }: { className?: string }) {
  const [mainImage, detailImage1, detailImage2] = journalImages;

  return (
    <div className={cn('w-full', className)}>
      {/* =======================================================================
          DESKTOP EDITORIAL LAYOUT (lg:grid lg:grid-cols-12 gap-2.5 sm:gap-3)
         ======================================================================= */}
      <div className="hidden lg:grid grid-cols-12 gap-3 h-[520px] xl:h-[560px]">
        {/* Dominant Event Photograph (7 columns) */}
        <div className="col-span-7 relative h-full overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm group">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 600px"
            priority
            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-102"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 right-4 text-ivory z-10 pointer-events-none">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold block">
              {mainImage.label}
            </span>
            <span className="font-display text-sm text-ivory/90 block mt-0.5">
              {mainImage.caption}
            </span>
          </div>
        </div>

        {/* Two Vertical Detail Photographs (5 columns) */}
        <div className="col-span-5 flex flex-col gap-3 h-full">
          {/* Detail 01: Ceremonial Florals & Brass Lamps */}
          <div className="flex-1 relative overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm group">
            <Image
              src={detailImage1.src}
              alt={detailImage1.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 400px"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-103"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-3 right-3 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-gold block">
                {detailImage1.label}
              </span>
              <span className="font-sans text-xs text-ivory/85 block mt-0.5 line-clamp-1">
                {detailImage1.caption}
              </span>
            </div>
          </div>

          {/* Detail 02: Warm Lighting & Chandeliers */}
          <div className="flex-1 relative overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm group">
            <Image
              src={detailImage2.src}
              alt={detailImage2.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 400px"
              className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-103"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-3 right-3 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase text-gold block">
                {detailImage2.label}
              </span>
              <span className="font-sans text-xs text-ivory/85 block mt-0.5 line-clamp-1">
                {detailImage2.caption}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          MOBILE & TABLET EDITORIAL LAYOUT (< 1024px)
         ======================================================================= */}
      <div className="lg:hidden flex flex-col gap-2.5">
        {/* Dominant Photograph on top */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm">
            <Image
              src={detailImage1.src}
              alt={detailImage1.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 350px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-ivory z-10 pointer-events-none">
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-gold block">
                {detailImage1.label}
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm">
            <Image
              src={detailImage2.src}
              alt={detailImage2.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 350px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
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
