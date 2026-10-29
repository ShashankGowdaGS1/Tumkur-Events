import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ReviewPhotographProps {
  imageSrc: string;
  imageAlt: string;
  categoryTag?: string;
  className?: string;
}

/**
 * Editorial Review Photograph (Left Column - ~45%)
 *
 * Displays a large, edge-to-edge rectangular event photograph.
 * Designed without artificial browser frames or heavy borders.
 */
export function ReviewPhotograph({
  imageSrc,
  imageAlt,
  categoryTag,
  className,
}: ReviewPhotographProps) {
  return (
    <div
      className={cn(
        'relative w-full h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-sm',
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover transition-transform duration-700 ease-luxury"
      />

      {/* Subtle bottom vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Tag Overlay */}
      {categoryTag && (
        <div className="absolute bottom-6 left-6 right-6 text-ivory z-10 pointer-events-none">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold block">
            {categoryTag}
          </span>
          <span className="font-display text-sm sm:text-base text-ivory/90 block mt-0.5">
            Tumkur Events Curated Decor
          </span>
        </div>
      )}
    </div>
  );
}
