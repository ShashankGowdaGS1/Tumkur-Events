'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { heroConfig } from '@/config/hero';

interface HeroCopyProps {
  chapterRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

/**
 * Synchronized Alternating Editorial Hero Copy & Interactive CTAs
 *
 * Alternating Composition:
 * - Chapter 01: LEFT  ("Every Celebration Has a Story.")
 * - Chapter 02: RIGHT ("Beautifully Imagined.")
 * - Chapter 03: LEFT  ("Crafted with Care.")
 * - Chapter 04: RIGHT ("Made Unforgettable.")
 *
 * Mobile Responsiveness:
 * - All 4 chapters remain accessible on mobile, orchestrated in sync with video/touch scroll.
 * - On narrow screens (< 1024px), chapters retain natural left alignment with readable contrast.
 * - On desktop (>= 1024px), alternating LEFT/RIGHT layout engages the photography.
 */
export function HeroCopy({ chapterRefs }: HeroCopyProps) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 sm:p-10 lg:p-16">
      {/* Screen Reader Semantic Narrative Summary (Permanent accessibility) */}
      <div className="sr-only">
        <h1>Every Celebration Has a Story.</h1>
        <p>Extraordinary moments begin with imagination.</p>
        <p>Beautifully Imagined. Personalized experiences for moments that matter.</p>
        <p>Crafted with Care. Every detail, thoughtfully considered.</p>
        <p>Made Unforgettable. Let&apos;s bring your celebration to life.</p>
      </div>

      {/* Top spacing to clear fixed navbar height */}
      <div className="h-16 sm:h-20 lg:h-24 shrink-0" aria-hidden="true" />

      {/* Main Chapter Content Area */}
      <div className="container-luxury mx-auto flex-1 flex items-center relative pb-12 sm:pb-16 lg:pb-24">
        {heroConfig.chapters.map((chapter, index) => {
          const isFirst = chapter.id === 1;
          const isRightAligned = chapter.alignment === 'right';

          // Alignment classes: clean left alignment on mobile; alternating on desktop
          const containerAlignmentClass = isRightAligned
            ? 'max-w-[560px] text-left items-start lg:text-right lg:items-end lg:ml-auto'
            : 'max-w-[560px] text-left items-start';

          const paragraphAlignmentClass = isRightAligned
            ? 'mt-3 sm:mt-4 max-w-lg font-light text-silver drop-shadow-sm text-balance text-left lg:text-right lg:ml-auto text-sm sm:text-base lg:text-fluid-body-lg'
            : 'mt-3 sm:mt-4 max-w-lg font-light text-silver drop-shadow-sm text-balance text-left text-sm sm:text-base lg:text-fluid-body-lg';

          const ctaAlignmentClass = isRightAligned
            ? 'mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pointer-events-auto justify-start lg:justify-end w-full sm:w-auto'
            : 'mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pointer-events-auto justify-start w-full sm:w-auto';

          const badgeRowClass = isRightAligned
            ? 'mb-3 sm:mb-4 inline-flex items-center gap-2 lg:flex-row-reverse'
            : 'mb-3 sm:mb-4 inline-flex items-center gap-2';

          return (
            <div
              key={chapter.key}
              ref={(el) => {
                chapterRefs.current[index] = el;
              }}
              data-chapter-id={chapter.id}
              data-alignment={chapter.alignment}
              style={{
                opacity: isFirst ? 1 : 0,
                transform: isFirst
                  ? 'translate3d(0, 0, 0)'
                  : isRightAligned
                  ? 'translate3d(24px, 0, 0)'
                  : 'translate3d(-24px, 0, 0)',
                pointerEvents: isFirst ? 'auto' : 'none',
                willChange: 'transform, opacity',
              }}
              className={`absolute inset-x-0 flex flex-col justify-center ${containerAlignmentClass} ${
                isFirst ? 'z-20' : 'z-10'
              }`}
            >
              {/* Luxury Overline Badge */}
              <div className={badgeRowClass}>
                <span className="overline-luxury text-gold text-[10px] sm:text-xs">
                  {`Chapter 0${chapter.id} \u2014 ${chapter.title}`}
                </span>
                <span className="h-[1px] w-8 bg-gold/50" aria-hidden="true" />
              </div>

              {/* Main Chapter Statement */}
              {chapter.isSemanticH1 ? (
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-fluid-display font-display text-ivory tracking-tight drop-shadow-md text-balance leading-[1.12]">
                  {chapter.statement}
                </h1>
              ) : (
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-fluid-display font-display text-ivory tracking-tight drop-shadow-md text-balance leading-[1.12]">
                  {chapter.statement}
                </p>
              )}

              {/* Supporting Editorial Description */}
              <p className={paragraphAlignmentClass}>
                {chapter.supportingText}
              </p>

              {/* Chapter Actions (Buttons) */}
              {(chapter.primaryCta || chapter.secondaryCta) && (
                <div className={ctaAlignmentClass}>
                  {chapter.primaryCta && (
                    <Link
                      href={chapter.primaryCta.href}
                      className="group inline-flex items-center justify-center gap-2 rounded-xs bg-gold px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-charcoal border border-gold shadow-md transition-all duration-fast hover:bg-gold-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold text-center"
                    >
                      <Sparkles className="h-4 w-4 text-charcoal transition-transform duration-normal ease-luxury group-hover:rotate-12 shrink-0" />
                      <span>{chapter.primaryCta.label}</span>
                    </Link>
                  )}

                  {chapter.secondaryCta && (
                    <Link
                      href={chapter.secondaryCta.href}
                      className="group inline-flex items-center justify-center gap-2 rounded-xs border border-ivory/40 bg-charcoal/40 backdrop-blur-sm px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-all duration-fast hover:border-gold hover:text-gold hover:bg-charcoal/60 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold text-center"
                    >
                      <span>{chapter.secondaryCta.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1 shrink-0" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Padding */}
      <div className="h-8 sm:h-12" aria-hidden="true" />
    </div>
  );
}
