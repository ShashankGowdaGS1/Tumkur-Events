'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { EventCategoryDetail, GalleryPhotoItem } from '@/config/event-detail-data';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryGalleryProps {
  readonly category: EventCategoryDetail;
}

export function CategoryGallery({ category }: CategoryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

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

      const items = galleryGridRef.current?.querySelectorAll('[data-gallery-tile]');
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
              trigger: galleryGridRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    previouslyFocusedRef.current?.focus();
  }, []);

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => (prev - 1 + category.gallery.length) % category.gallery.length);
  }, [category.gallery.length]);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => (prev + 1) % category.gallery.length);
  }, [category.gallery.length]);

  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [lightboxOpen, closeLightbox, handlePrev, handleNext]);

  const activePhoto = category.gallery[activePhotoIndex];

  return (
    <section
      ref={sectionRef}
      aria-label={`Visual Gallery of ${category.title}`}
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep">AUTHENTIC VISUAL ARCHIVE</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Visual Moments &amp; Craft.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Photographic highlights from our celebration archive.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Tap any photograph below to explore detailed perspectives of our celebration setups across Tumakuru.
          </p>
        </div>

        {/* =====================================================================
            ASYMMETRIC EDITORIAL GALLERY TILES
            Tile 0: Dominant Feature (Full height / 2-column span on lg)
            Tiles 1-4: Supporting Editorial Quad
           ===================================================================== */}
        <div
          ref={galleryGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6"
        >
          {/* Tile 01: Dominant Heroic Photograph (Spans 7 cols on lg) */}
          {category.gallery[0] && (
            <div
              data-gallery-tile
              onClick={() => openLightbox(0)}
              className="lg:col-span-7 group relative aspect-[16/11] lg:aspect-[16/10] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal cursor-pointer shadow-md"
            >
              <Image
                src={category.gallery[0].image}
                alt={category.gallery[0].imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                aria-hidden="true"
              />
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-charcoal/80 backdrop-blur-md border border-gold/40 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-gold" aria-hidden="true" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-1">
                  {category.gallery[0].category}
                </span>
                <h3 className="font-display text-xl lg:text-2xl text-ivory tracking-tight">
                  {category.gallery[0].title}
                </h3>
              </div>
            </div>
          )}

          {/* Tile 02: Tall Supporting Photograph (Spans 5 cols on lg) */}
          {category.gallery[1] && (
            <div
              data-gallery-tile
              onClick={() => openLightbox(1)}
              className="lg:col-span-5 group relative aspect-[4/3] lg:aspect-[16/10] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal cursor-pointer shadow-md"
            >
              <Image
                src={category.gallery[1].image}
                alt={category.gallery[1].imageAlt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                aria-hidden="true"
              />
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-charcoal/80 backdrop-blur-md border border-gold/40 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-gold" aria-hidden="true" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-1">
                  {category.gallery[1].category}
                </span>
                <h3 className="font-display text-lg lg:text-xl text-ivory tracking-tight">
                  {category.gallery[1].title}
                </h3>
              </div>
            </div>
          )}

          {/* Tiles 03, 04, 05: Lower 3-Column Strip (Each spans 4 cols on lg) */}
          {category.gallery.slice(2, 5).map((photo, sliceIdx) => {
            const actualIndex = sliceIdx + 2;

            return (
              <div
                key={photo.id}
                data-gallery-tile
                onClick={() => openLightbox(actualIndex)}
                className="lg:col-span-4 group relative aspect-[16/11] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal cursor-pointer shadow-md"
              >
                <Image
                  src={photo.image}
                  alt={photo.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                  aria-hidden="true"
                />
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-charcoal/80 backdrop-blur-md border border-gold/40 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 text-ivory">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold block mb-0.5">
                    {photo.category}
                  </span>
                  <h4 className="font-display text-base text-ivory tracking-tight line-clamp-1">
                    {photo.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          ACCESSIBLE FULLSCREEN LIGHTBOX MODAL
         ===================================================================== */}
      {lightboxOpen && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded image: ${activePhoto.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
        >
          {/* Close Button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close image lightbox"
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-charcoal/80 text-ivory border border-gold/40 hover:bg-gold hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-gold"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photograph"
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-charcoal/80 text-ivory border border-charcoal-light hover:border-gold hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photograph"
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-charcoal/80 text-ivory border border-charcoal-light hover:border-gold hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Main Stage Image & Caption */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center">
              <Image
                src={activePhoto.image}
                alt={activePhoto.imageAlt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption Tray */}
            <div className="w-full max-w-3xl pt-4 text-center text-ivory">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-mono text-xs text-gold uppercase tracking-widest">
                  {activePhotoIndex + 1} / {category.gallery.length} &middot; {activePhoto.category}
                </span>
              </div>
              <h3 className="font-display text-xl text-ivory tracking-tight mb-1">
                {activePhoto.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-silver-light/80 font-light">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
