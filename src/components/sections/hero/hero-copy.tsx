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
 * - On narrow screens (< 1024px), chapters retain natural left alignment.
 * - On desktop (>= 1024px), alternating LEFT/RIGHT layout engages the photography.
 *
 * Directional Motion:
 * - Left chapters transition with subtle horizontal movement from/to the left (-30px).
 * - Right chapters transition with subtle horizontal movement from/to the right (+30px).
 * - Inactive chapters enforce pointer-events: none so buttons never intercept clicks inappropriately.
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
      <div className="h-20 sm:h-24" aria-hidden="true" />

      {/* Main Chapter Content Area */}
      <div className="container-luxury mx-auto flex-1 flex items-center relative pb-16 lg:pb-24">
        {heroConfig.chapters.map((chapter, index) => {
          const isFirst = chapter.id === 1;
          const isRightAligned = chapter.alignment === 'right';

          // Desktop alternating alignment classes
          const containerAlignmentClass = isRightAligned
            ? 'max-w-[560px] text-left items-start lg:text-right lg:items-end lg:ml-auto'
            : 'max-w-[560px] text-left items-start';

          const paragraphAlignmentClass = isRightAligned
            ? 'mt-4 max-w-lg font-light text-silver drop-shadow-sm text-balance text-left lg:text-right lg:ml-auto'
            : 'mt-4 max-w-lg font-light text-silver drop-shadow-sm text-balance text-left';

          const ctaAlignmentClass = isRightAligned
            ? 'mt-8 flex flex-wrap items-center gap-4 pointer-events-auto justify-start lg:justify-end'
            : 'mt-8 flex flex-wrap items-center gap-4 pointer-events-auto justify-start';

          const badgeRowClass = isRightAligned
            ? 'mb-4 inline-flex items-center gap-2 lg:flex-row-reverse'
            : 'mb-4 inline-flex items-center gap-2';

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
                  ? 'translate3d(30px, 0, 0)'
                  : 'translate3d(-30px, 0, 0)',
                pointerEvents: isFirst ? 'auto' : 'none',
                willChange: 'transform, opacity',
              }}
              className={`absolute inset-x-0 flex flex-col justify-center ${containerAlignmentClass} ${
                isFirst ? 'z-20' : 'z-10'
              } lg:flex ${isFirst ? 'flex' : 'hidden lg:flex'}`}
            >
              {/* Luxury Overline Badge */}
              <div className={badgeRowClass}>
                <span className="overline-luxury text-gold">
                  {`Chapter 0${chapter.id} \u2014 ${chapter.title}`}
                </span>
                <span className="h-[1px] w-8 bg-gold/50" aria-hidden="true" />
              </div>

              {/* Main Chapter Statement */}
              {chapter.isSemanticH1 ? (
                <h1 className="text-fluid-display font-display text-ivory tracking-tight drop-shadow-md text-balance">
                  {chapter.statement}
                </h1>
              ) : (
                <p className="text-fluid-display font-display text-ivory tracking-tight drop-shadow-md text-balance">
                  {chapter.statement}
                </p>
              )}

              {/* Supporting Editorial Description */}
              <p className={`text-fluid-body-lg ${paragraphAlignmentClass}`}>
                {chapter.supportingText}
              </p>

              {/* Chapter Actions (Buttons) */}
              {(chapter.primaryCta || chapter.secondaryCta) && (
                <div className={ctaAlignmentClass}>
                  {chapter.primaryCta && (
                    <Link
                      href={chapter.primaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-xs bg-gold px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-charcoal border border-gold shadow-md transition-all duration-fast hover:bg-gold-hover hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      <Sparkles className="h-4 w-4 text-charcoal transition-transform duration-normal ease-luxury group-hover:rotate-12" />
                      <span>{chapter.primaryCta.label}</span>
                    </Link>
                  )}

                  {chapter.secondaryCta && (
                    <Link
                      href={chapter.secondaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-xs border border-ivory/40 bg-charcoal/40 backdrop-blur-sm px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-all duration-fast hover:border-gold hover:text-gold hover:bg-charcoal/60 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      <span>{chapter.secondaryCta.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Padding */}
      <div className="h-10 sm:h-14" aria-hidden="true" />
    </div>
  );
}
