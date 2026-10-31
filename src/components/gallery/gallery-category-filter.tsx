'use client';

import React, { useRef, useEffect } from 'react';
import { galleryCategories, GalleryCategory } from '@/config/gallery';

interface GalleryCategoryFilterProps {
  readonly activeCategory: string;
  readonly onSelectCategory: (categoryId: string) => void;
  readonly categoryCounts: Record<string, number>;
}

export function GalleryCategoryFilter({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: GalleryCategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active tab into view on mobile
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeButton = scrollContainerRef.current.querySelector(
      `[data-category="${activeCategory}"]`
    ) as HTMLElement | null;

    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeCategory]);

  return (
    <div id="gallery-explorer" className="w-full scroll-mt-28 mb-8 sm:mb-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
        <span className="overline-luxury text-gold-deep text-xs font-mono block mb-2">
          CURATED ARCHIVE &middot; TUMAKURU
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
          Explore Every Kind of Celebration.
        </h2>
      </div>

      {/* Filter Rail Container */}
      <div className="relative w-full border-b border-charcoal/10">
        <div
          ref={scrollContainerRef}
          role="tablist"
          aria-label="Filter celebration gallery by occasion"
          className="flex items-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto scroll-smooth pb-3 sm:pb-0 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-6 md:justify-center"
        >
          {galleryCategories.map((cat: GalleryCategory) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;

            // Only display filter options that have content or are 'all'
            if (cat.id !== 'all' && count === 0) return null;

            return (
              <button
                key={cat.id}
                role="tab"
                data-category={cat.id}
                aria-selected={isActive}
                aria-controls="gallery-grid"
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative shrink-0 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-all duration-normal ease-luxury whitespace-nowrap focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                  isActive
                    ? 'text-charcoal font-semibold'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-gold-deep opacity-80">
                    {cat.number}
                  </span>
                  <span>{cat.label}</span>
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full transition-colors ${
                      isActive
                        ? 'bg-champagne/60 text-charcoal font-medium'
                        : 'text-charcoal/40 group-hover:text-charcoal/70'
                    }`}
                  >
                    {count}
                  </span>
                </div>

                {/* Thin gold active underline */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold-deep animate-in fade-in duration-200"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
