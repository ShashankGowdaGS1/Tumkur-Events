'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { emptyStateData } from '@/config/reviews-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ReviewsEmptyState() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const container = containerRef.current;
    if (!container) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="celebration-stories"
      aria-label="Client Experience Archive"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-20 lg:py-24 border-b border-charcoal/10 scroll-mt-28"
    >
      <div className="container-luxury">
        <div
          ref={containerRef}
          className="max-w-3xl mx-auto p-8 sm:p-12 lg:p-14 bg-[#FAF7F2] border border-charcoal/10 rounded-xs shadow-[0_8px_30px_rgba(21,21,21,0.04)] text-center relative overflow-hidden"
        >
          {/* Subtle Decorative Accent Watermark */}
          <div
            className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-deep/20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep text-xs font-mono">
              {emptyStateData.eyebrow}
            </span>
          </div>

          {/* Editorial Heading */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight mb-4 sm:mb-5">
            {emptyStateData.heading}
          </h2>

          {/* Honest Body Copy */}
          <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light max-w-2xl mx-auto mb-8 sm:mb-10">
            {emptyStateData.body}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href={emptyStateData.ctaGalleryHref}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md w-full sm:w-auto"
            >
              <span>{emptyStateData.ctaGalleryText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
            </Link>

            <Link
              href={emptyStateData.ctaContactHref}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-charcoal/30 text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold w-full sm:w-auto"
            >
              <span>{emptyStateData.ctaContactText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
