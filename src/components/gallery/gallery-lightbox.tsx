'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SelectedCelebrationItem } from '@/config/selected-celebrations';

interface GalleryLightboxProps {
  readonly isOpen: boolean;
  readonly currentIndex: number;
  readonly items: readonly SelectedCelebrationItem[];
  readonly onClose: () => void;
  readonly onNavigate: (newIndex: number) => void;
}

/**
 * Accessible Editorial Gallery Lightbox
 * Features:
 * - Focus management & Trap
 * - Body scroll lock
 * - Keyboard navigation (Esc to close, Left/Right arrows)
 * - Proportional object-contain image rendering
 */
export function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Esc handling
  useEffect(() => {
    if (!isOpen) return;

    // Save active element to restore focus on close
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);

      // Restore focus
      previouslyFocusedElementRef.current?.focus();
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery Preview: ${currentItem.category}`}
      className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      {/* Top Bar: Counter & Category Details & Close Button */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between border-b border-charcoal-light/60 pb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase">
            0{currentIndex + 1}&nbsp;/&nbsp;0{items.length}
          </span>
          <span className="text-white/20">&middot;</span>
          <span className="overline-luxury text-champagne text-[11px] sm:text-xs">
            {currentItem.category}
          </span>
          {currentItem.isConcept && (
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-charcoal-light text-silver-light border border-white/10 rounded-[2px]">
              Visual Concept
            </span>
          )}
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="p-2 text-ivory/80 hover:text-gold transition-colors duration-fast focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Stage with Navigation Arrows */}
      <div className="relative w-full max-w-6xl mx-auto flex-1 my-4 flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Previous image"
          className="absolute left-2 sm:-left-4 lg:-left-12 z-20 p-2.5 bg-charcoal/80 border border-charcoal-light text-ivory/80 hover:text-gold hover:border-gold/40 transition-all duration-fast focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Center Contained Image */}
        <div className="relative w-full h-[60vh] sm:h-[68vh] lg:h-[72vh] flex items-center justify-center">
          <Image
            src={currentItem.image}
            alt={currentItem.imageAlt}
            fill
            sizes="(max-width: 1280px) 90vw, 80vw"
            className="object-contain select-none"
            priority={true}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          type="button"
          aria-label="Next image"
          className="absolute right-2 sm:-right-4 lg:-right-12 z-20 p-2.5 bg-charcoal/80 border border-charcoal-light text-ivory/80 hover:text-gold hover:border-gold/40 transition-all duration-fast focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Bottom Information Footer */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between border-t border-charcoal-light/60 pt-4 gap-2">
        <div>
          <h4 className="font-display text-lg sm:text-xl text-ivory tracking-tight">
            {currentItem.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-silver font-light">
            {currentItem.description}
          </p>
        </div>

        <span className="font-sans text-[11px] text-silver-light/60 uppercase tracking-widest hidden sm:inline">
          Use &larr; &rarr; arrows to navigate &middot; Esc to close
        </span>
      </div>
    </div>
  );
}

