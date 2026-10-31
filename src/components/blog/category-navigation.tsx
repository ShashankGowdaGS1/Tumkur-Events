'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { blogCategories } from '@/lib/blog/categories';

interface CategoryNavigationProps {
  readonly activeCategorySlug?: string;
}

export function CategoryNavigation({ activeCategorySlug }: CategoryNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active tab into view on mobile
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeLink = scrollContainerRef.current.querySelector(
      `[data-active="true"]`
    ) as HTMLElement | null;

    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeCategorySlug]);

  const isAllActive = !activeCategorySlug || activeCategorySlug === 'all';

  return (
    <div id="journal-collection" className="w-full scroll-mt-28 mb-8 sm:mb-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
        <span className="overline-luxury text-gold-deep text-xs font-mono block mb-2">
          TOPICS &amp; INSPIRATION &middot; TUMAKURU
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
          Explore What Inspires You.
        </h2>
      </div>

      {/* Category Navigation Rail */}
      <div className="relative w-full border-b border-charcoal/10">
        <div
          ref={scrollContainerRef}
          role="navigation"
          aria-label="Filter celebration stories by topic"
          className="flex items-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto scroll-smooth pb-3 sm:pb-0 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-6 md:justify-center"
        >
          {/* All Stories Link */}
          <Link
            href="/blog"
            data-active={isAllActive}
            className={`group relative shrink-0 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-all duration-normal ease-luxury whitespace-nowrap focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
              isAllActive
                ? 'text-charcoal font-semibold'
                : 'text-charcoal/60 hover:text-charcoal'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-gold-deep opacity-80">
                00
              </span>
              <span>All Stories</span>
            </div>
            {isAllActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold-deep animate-in fade-in duration-200"
              />
            )}
          </Link>

          {/* 6 Category Links */}
          {blogCategories.map((cat) => {
            const isActive = activeCategorySlug === cat.slug;

            return (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                data-active={isActive}
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
                  <span>{cat.displayName}</span>
                </div>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold-deep animate-in fade-in duration-200"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
