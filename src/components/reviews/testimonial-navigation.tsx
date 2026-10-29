import React from 'react';
import { cn } from '@/lib/utils';
import type { TestimonialItem } from '@/config/testimonials';

export interface TestimonialNavigationProps {
  testimonials: readonly TestimonialItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

/**
 * Minimal Editorial Review Navigation
 *
 * Provides fine-lined interactive selectors (e.g. "01 — Host / Occasion")
 * and an active progress indicator derived from real testimonial data.
 */
export function TestimonialNavigation({
  testimonials,
  activeIndex,
  onSelect,
  className,
}: TestimonialNavigationProps) {
  if (testimonials.length <= 1) return null;

  const currentDisplay = String(activeIndex + 1).padStart(2, '0');
  const totalDisplay = String(testimonials.length).padStart(2, '0');

  return (
    <div className={cn('pt-6 border-t border-charcoal/15 flex flex-col gap-4', className)}>
      {/* Progress Indicator */}
      <div className="flex items-center justify-between text-xs text-charcoal/60">
        <span className="font-sans font-semibold tracking-widest text-[11px] uppercase">
          STORY {currentDisplay} / {totalDisplay}
        </span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1 rounded-full transition-all duration-normal ease-luxury',
                i === activeIndex ? 'w-6 bg-gold-deep' : 'w-2 bg-charcoal/20'
              )}
            />
          ))}
        </div>
      </div>

      {/* Selector Buttons */}
      <div
        role="tablist"
        aria-label="Client review selection"
        className="flex flex-col sm:flex-row gap-2 sm:gap-4"
      >
        {testimonials.map((item, idx) => {
          const isSelected = idx === activeIndex;
          const numberStr = String(idx + 1).padStart(2, '0');
          const label = item.displayName
            ? `${numberStr} — ${item.displayName}`
            : `${numberStr} — ${item.eventCategory || 'Celebration'}`;

          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelect(idx)}
              className={cn(
                'py-2 px-3 text-left font-sans text-xs tracking-wider transition-colors duration-fast border-b-2 focus-visible:outline-2 focus-visible:outline-gold',
                isSelected
                  ? 'border-gold-deep text-charcoal font-semibold'
                  : 'border-transparent text-charcoal/50 hover:text-charcoal hover:border-charcoal/30'
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

