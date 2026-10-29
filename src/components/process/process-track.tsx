import React, { forwardRef } from 'react';
import { processSteps } from '@/config/event-process';
import { ProcessMilestone } from '@/components/process/process-milestone';

export interface ProcessTrackProps {
  className?: string;
}

/**
 * Desktop Horizontal Process Track
 *
 * Houses:
 * - Continuous central horizontal background rail and animated gold progress fill
 * - Four alternating process milestones (Above / Below / Above / Below)
 * - Concluding Celebration node representing the realization of the event
 */
export const ProcessTrack = forwardRef<HTMLDivElement, ProcessTrackProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        data-process-track
        className="w-max h-full flex items-center relative pl-12 sm:pl-20 lg:pl-32 pr-24 sm:pr-36 lg:pr-48 gap-16 sm:gap-24 lg:gap-32 select-none"
      >
        {/* =====================================================================
            01. CONTINUOUS CENTRAL HORIZONTAL RAIL (Static Muted Layer)
           ===================================================================== */}
        <div
          data-element="central-rail"
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-charcoal-light/90 z-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* =====================================================================
            02. ANIMATED CENTRAL GOLD PROGRESS LINE
           ===================================================================== */}
        <div
          data-element="progress-line"
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-gold via-gold-hover to-gold transform origin-left scale-x-0 z-0 pointer-events-none shadow-sm shadow-gold/30"
          aria-hidden="true"
        />

        {/* =====================================================================
            03. FOUR ALTERNATING PROCESS MILESTONES
           ===================================================================== */}
        {processSteps.map((step, index) => (
          <ProcessMilestone key={step.id} step={step} index={index} />
        ))}

        {/* =====================================================================
            04. CONCLUDING DESTINATION NODE (CELEBRATION DAY)
           ===================================================================== */}
        <div
          data-milestone
          data-milestone-index={4}
          data-milestone-pos="above"
          className="relative w-[300px] lg:w-[340px] shrink-0 h-full flex flex-col justify-center select-none"
        >
          {/* Circular Gold Destination Emblem */}
          <div
            data-element="marker"
            className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-6 h-6 rounded-full border-2 border-gold bg-charcoal shadow-md shadow-gold/40"
          >
            <span
              data-element="marker-dot"
              className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"
            />
          </div>

          {/* Vertical Connecting Stem */}
          <div
            data-element="stem"
            className="absolute left-8 bottom-[calc(50%+12px)] -translate-x-1/2 w-[1.5px] h-[52px] bg-charcoal-light overflow-hidden origin-bottom z-10"
          >
            <div
              data-element="stem-fill"
              className="w-full h-full bg-gradient-to-t from-gold to-gold/40 transform scale-y-0 origin-bottom"
            />
          </div>

          {/* Concluding Text Box */}
          <div
            data-element="content-box"
            className="absolute left-0 w-full pl-8 pr-4 bottom-[calc(50%+68px)] z-10"
          >
            <span
              data-element="tag"
              className="font-sans text-[10px] tracking-[0.22em] uppercase font-bold text-gold"
            >
              CELEBRATION DAY
            </span>
            <h3
              data-element="title"
              className="font-display text-2xl lg:text-3xl text-ivory tracking-tight mt-1"
            >
              An Unforgettable Gathering
            </h3>
            <p
              data-element="desc"
              className="font-sans text-xs sm:text-sm text-silver-light/80 leading-relaxed mt-2"
            >
              Every element in place, warm ambiance, and seamless memories in Tumakuru.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ProcessTrack.displayName = 'ProcessTrack';

