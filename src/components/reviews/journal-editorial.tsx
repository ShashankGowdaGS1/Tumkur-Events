import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { journalStory, journalFooter, verifiedTestimonials } from '@/config/testimonials';

export interface JournalEditorialProps {
  className?: string;
}

/**
 * Supporting Editorial Area (40–45% of content width)
 *
 * Provides expressive brand storytelling, fine botanical divider,
 * verified review integration (if available), and dual exploration links.
 */
export function JournalEditorial({ className }: { className?: string }) {
  const hasVerifiedReviews = verifiedTestimonials.length > 0;
  const firstReview = hasVerifiedReviews ? verifiedTestimonials[0] : null;

  return (
    <div className={cn('flex flex-col justify-between h-full', className)}>
      <div>
        {/* Section Heading */}
        <h3 className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-charcoal tracking-tight leading-tight">
          {journalStory.heading}
        </h3>

        {/* Primary Story Paragraph */}
        <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed mt-4">
          {journalStory.description}
        </p>

        {/* Delicate Botanical Line Flourish */}
        <div className="flex items-center gap-3 my-5 sm:my-6" aria-hidden="true">
          <span className="h-px w-8 bg-gold-deep/30" />
          <span className="text-gold-deep text-xs font-serif italic">✦ Tumakuru Celebrations ✦</span>
          <span className="h-px w-8 bg-gold-deep/30" />
        </div>

        {/* Secondary Story Paragraph */}
        <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-lg">
          {journalStory.supporting}
        </p>

        {/* Verified Customer Quote (Only when authenticated data exists) */}
        {hasVerifiedReviews && firstReview && (
          <blockquote className="mt-6 pt-5 border-t border-charcoal/15">
            <p className="font-display text-lg sm:text-xl text-charcoal italic leading-snug">
              &ldquo;{firstReview.quote}&rdquo;
            </p>
            <footer className="mt-2.5 flex items-center justify-between text-xs text-charcoal/60">
              <cite className="font-sans font-semibold text-charcoal not-italic">
                {firstReview.displayName}
              </cite>
              {firstReview.eventCategory && (
                <span className="font-sans uppercase tracking-wider text-[11px] text-gold-deep">
                  {firstReview.eventCategory}
                </span>
              )}
            </footer>
          </blockquote>
        )}
      </div>

      {/* Dual Exploration CTAs */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-charcoal/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Primary CTA */}
        <Link
          href={journalFooter.primaryCtaHref}
          className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.16em] font-semibold border border-charcoal hover:bg-charcoal-light hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <span>{journalFooter.primaryCtaText}</span>
          <ArrowRight
            className="h-3.5 w-3.5 text-gold transition-transform duration-normal ease-luxury group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        {/* Secondary Understated Link */}
        <Link
          href={journalFooter.secondaryCtaHref}
          className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-semibold text-charcoal/80 hover:text-gold-deep transition-colors duration-fast"
        >
          <span>{journalFooter.secondaryCtaText}</span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-fast group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

