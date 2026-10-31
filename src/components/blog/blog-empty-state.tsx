'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface BlogEmptyStateProps {
  readonly categoryName?: string;
}

export function BlogEmptyState({ categoryName }: BlogEmptyStateProps) {
  const headingText = categoryName
    ? `${categoryName} Stories in Preparation.`
    : 'The Celebration Journal Is in Preparation.';

  const bodyText = categoryName
    ? `We are currently curating in-depth decor guides and styling ideas for ${categoryName.toLowerCase()}. In the meantime, explore our visual portfolio or consult directly with our creative team.`
    : 'We are curating in-depth decor guides, traditional ceremonial wisdom, and celebration styling ideas across Tumakuru. In the meantime, explore our visual portfolio or consult directly with our creative team.';

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-3xl mx-auto p-8 sm:p-12 lg:p-14 bg-[#FAF7F2] border border-charcoal/10 rounded-xs text-center relative overflow-hidden shadow-[0_8px_30px_rgba(21,21,21,0.04)]">
        {/* Subtle Decorative Accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-deep/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
          <span className="overline-luxury text-gold-deep text-xs font-mono">
            EDITORIAL ARCHIVE IN PROGRESS
          </span>
        </div>

        {/* Heading */}
        <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight mb-4">
          {headingText}
        </h3>

        {/* Body */}
        <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light max-w-xl mx-auto mb-8">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/gallery"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md w-full sm:w-auto"
          >
            <span>Explore Our Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-charcoal/30 text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold w-full sm:w-auto"
          >
            <span>Discover Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
