import React from 'react';
import { cn } from '@/lib/utils';
import type { ProcessStep } from '@/config/event-process';

export interface ProcessMilestoneProps {
  step: ProcessStep;
  index: number;
  className?: string;
}

/**
 * Desktop Horizontal Process Milestone
 *
 * Alternates above and below the continuous central gold timeline:
 * - Milestone Above: Content block elevated above, vertical stem connects down to center line.
 * - Milestone Below: Center line node connects down via vertical stem to content block below.
 * - Circular gold milestone marker sits exactly on the central rail.
 */
export function ProcessMilestone({
  step,
  index,
  className,
}: ProcessMilestoneProps) {
  const isAbove = step.position === 'above';

  return (
    <div
      data-milestone
      data-milestone-index={index}
      data-milestone-pos={step.position}
      className={cn(
        'relative w-[340px] sm:w-[380px] lg:w-[420px] shrink-0 h-full flex flex-col justify-center select-none',
        className
      )}
    >
      {/* =======================================================================
          01. CIRCULAR MARKER (Anchored directly on the central horizontal rail)
         ======================================================================= */}
      <div
        data-element="marker"
        className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-5 h-5 rounded-full border-2 border-gold/40 bg-charcoal shadow-sm shadow-gold/20 transition-all duration-fast"
      >
        <span
          data-element="marker-dot"
          className="w-2 h-2 rounded-full bg-gold/50 transition-transform duration-fast scale-75"
        />
      </div>

      {/* =======================================================================
          02. VERTICAL CONNECTING STEM
         ======================================================================= */}
      {isAbove ? (
        <div
          data-element="stem"
          className="absolute left-8 bottom-[calc(50%+10px)] -translate-x-1/2 w-[1.5px] h-[52px] bg-charcoal-light overflow-hidden origin-bottom z-10"
        >
          <div
            data-element="stem-fill"
            className="w-full h-full bg-gradient-to-t from-gold to-gold/40 transform scale-y-0 origin-bottom"
          />
        </div>
      ) : (
        <div
          data-element="stem"
          className="absolute left-8 top-[calc(50%+10px)] -translate-x-1/2 w-[1.5px] h-[52px] bg-charcoal-light overflow-hidden origin-top z-10"
        >
          <div
            data-element="stem-fill"
            className="w-full h-full bg-gradient-to-b from-gold to-gold/40 transform scale-y-0 origin-top"
          />
        </div>
      )}

      {/* =======================================================================
          03. EDITORIAL MILESTONE CONTENT BLOCK
         ======================================================================= */}
      <div
        data-element="content-box"
        className={cn(
          'absolute left-0 w-full pl-8 pr-6 z-10',
          isAbove
            ? 'bottom-[calc(50%+68px)]'
            : 'top-[calc(50%+68px)]'
        )}
      >
        {/* Step Header: Tag & Number */}
        <div className="flex items-center justify-between gap-4 mb-2.5">
          <span
            data-element="tag"
            className="font-sans text-[10px] tracking-[0.22em] uppercase font-semibold text-gold/80"
          >
            {step.tag}
          </span>
          <span
            data-element="number"
            className="font-sans text-xs font-bold tracking-[0.18em] text-gold/60"
          >
            PHASE {step.number}
          </span>
        </div>

        {/* Milestone Title */}
        <h3
          data-element="title"
          className="font-display text-2xl lg:text-3xl text-ivory tracking-tight transition-colors duration-fast"
        >
          {step.title}
        </h3>

        {/* Milestone Description */}
        <p
          data-element="desc"
          className="font-sans text-xs sm:text-sm lg:text-[15px] text-silver-light/75 leading-relaxed mt-2.5 max-w-[340px]"
        >
          {step.description}
        </p>

        {/* Hairline Editorial Divider */}
        <div
          data-element="divider"
          className="mt-4 w-12 h-[1px] bg-charcoal-light"
        />
      </div>
    </div>
  );
}

