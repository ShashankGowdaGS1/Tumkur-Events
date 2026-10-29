import React from 'react';
import { cn } from '@/lib/utils';
import type { TestimonialItem } from '@/config/testimonials';
import { testimonialsEditorialFallback } from '@/config/testimonials';

export interface FeaturedTestimonialProps {
  testimonial?: TestimonialItem;
  className?: string;
}

/**
 * Editorial Featured Testimonial (Right Column - ~55%)
 *
 * Designed with luxury editorial typography in Marcellus and Manrope:
 * - Generous opening quotation mark
 * - Expressive quote text with high contrast against Champagne
 * - Authentic customer attribution (when verified)
 * - Honest editorial fallback state when review data is in curation
 */
export function FeaturedTestimonial({
  testimonial,
  className,
}: FeaturedTestimonialProps) {
  const isVerified = testimonial?.isVerified;

  return (
    <div className={cn('flex flex-col justify-between h-full py-4', className)}>
      <div>
        {/* Large Decorative Opening Quotation Mark */}
        <span
          className="font-serif text-5xl sm:text-6xl text-gold-deep/40 leading-none select-none block -mb-4 sm:-mb-6"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {isVerified && testimonial ? (
          /* =================================================================
              VERIFIED TESTIMONIAL DISPLAY
             ================================================================= */
          <blockquote className="mt-2">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl text-charcoal leading-snug tracking-tight">
              {testimonial.quote}
            </p>

            {/* Attribution Area */}
            <footer className="mt-6 sm:mt-8 pt-4 border-t border-charcoal/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                {testimonial.displayName && (
                  <cite className="font-sans text-sm sm:text-base font-semibold text-charcoal not-italic block">
                    {testimonial.displayName}
                  </cite>
                )}
                {testimonial.eventCategory && (
                  <span className="font-sans text-xs tracking-wider uppercase text-charcoal/60 mt-0.5 block">
                    {testimonial.eventCategory}
                  </span>
                )}
              </div>

              {testimonial.reviewSource && (
                <span className="font-sans text-xs text-gold-deep font-medium tracking-wide">
                  Via {testimonial.reviewSource}
                </span>
              )}
            </footer>
          </blockquote>
        ) : (
          /* =================================================================
              EDITORIAL FALLBACK (When real customer reviews are in curation)
             ================================================================= */
          <div className="mt-2">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl text-charcoal leading-snug tracking-tight">
              {testimonialsEditorialFallback.quote}
            </p>

            <div className="mt-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs text-xs font-sans font-semibold tracking-wider uppercase text-gold-deep bg-gold/15 border border-gold-deep/30">
                ✦ {testimonialsEditorialFallback.badge}
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed mt-4 max-w-xl">
              {testimonialsEditorialFallback.contextNote}
            </p>

            <div className="mt-6 pt-4 border-t border-charcoal/15">
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-widest font-semibold block">
                Tumakuru Celebration Archive
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

