'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, Plus } from 'lucide-react';
import { GalleryItem, galleryItems } from '@/config/gallery';
import { GalleryLightbox } from '@/components/gallery/gallery-lightbox';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface EditorialGalleryProps {
  readonly activeCategory: string;
}

const INITIAL_DISPLAY_COUNT = 8;
const LOAD_MORE_INCREMENT = 4;

export function EditorialGallery({ activeCategory }: EditorialGalleryProps) {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);

  // Filter items based on activeCategory
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.categoryId === activeCategory);
  }, [activeCategory]);

  // Reset pagination when active category changes
  useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  }, [activeCategory]);

  // Items currently visible in the grid
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, displayCount);
  }, [filteredItems, displayCount]);

  const hasMore = displayCount < filteredItems.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + LOAD_MORE_INCREMENT, filteredItems.length));
  };

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  // GSAP Stagger Entrance for Visible Items
  useEffect(() => {
    registerGsapPlugins();

    const grid = gridRef.current;
    if (!grid) return;

    if (prefersReducedMotion()) return;

    const cards = grid.querySelectorAll('.gallery-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [visibleItems]);

  return (
    <section
      aria-label="Celebration Image Gallery"
      className="relative w-full bg-ivory text-charcoal py-8 sm:py-12 lg:py-16"
    >
      <div className="container-luxury">
        {/* Gallery Grid */}
        <div
          id="gallery-grid"
          ref={gridRef}
          role="region"
          aria-live="polite"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch"
        >
          {visibleItems.map((item: GalleryItem, index: number) => {
            // Determine desktop column span classes
            const colSpanClass =
              item.colSpanDesktop === 12
                ? 'lg:col-span-12'
                : item.colSpanDesktop === 8
                ? 'lg:col-span-8'
                : item.colSpanDesktop === 7
                ? 'lg:col-span-7'
                : item.colSpanDesktop === 5
                ? 'lg:col-span-5'
                : 'lg:col-span-4';

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.title}`}
                onClick={() => handleOpenLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
                className={`gallery-card group relative w-full overflow-hidden rounded-xs cursor-pointer border border-charcoal/10 bg-champagne/20 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 select-none ${colSpanClass} ${item.heightDesktop}`}
              >
                {/* Background Image with subtle zoom on hover */}
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.035]"
                  loading={index < 4 ? 'eager' : 'lazy'}
                />

                {/* Localized Bottom Scrim Gradient (Preserves floral details while offering high contrast for text) */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-80 sm:opacity-60 group-hover:opacity-95 transition-opacity duration-normal" />

                {/* Top Corner Chapter Number & Category Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="font-mono text-xs font-semibold text-ivory/80 px-2 py-0.5 bg-charcoal/40 backdrop-blur-xs rounded-[2px] border border-white/10">
                    {item.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-champagne px-2 py-0.5 bg-charcoal/40 backdrop-blur-xs rounded-[2px] border border-white/10">
                    {item.categoryName}
                  </span>
                </div>

                {/* Bottom Overlay: Title, Caption & Expand Action */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col justify-end text-ivory">
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-ivory tracking-tight group-hover:text-gold transition-colors duration-fast">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-silver-light/80 font-light line-clamp-2 mt-1 sm:mt-1.5 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>

                    {/* View Action Pill / Icon */}
                    <div className="shrink-0 w-9 h-9 rounded-full bg-charcoal/70 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-normal shadow-md">
                      <Maximize2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Subtle Gold Hairline Corner on Hover */}
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-normal pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* Load More Celebrations Button */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-3 px-8 py-3.5 border border-charcoal/30 bg-transparent text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-xs"
            >
              <span>Load More Celebrations</span>
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-normal" aria-hidden="true" />
            </button>
            <p className="font-mono text-[11px] text-charcoal/50 mt-2">
              Showing {visibleItems.length} of {filteredItems.length} curated moments
            </p>
          </div>
        )}
      </div>

      {/* Accessible Fullscreen Lightbox */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={selectedPhotoIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
      />
    </section>
  );
}
