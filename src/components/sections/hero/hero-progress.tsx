'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProgressProps {
  progressBarRef: React.RefObject<HTMLDivElement | null>;
  chapterBadgeRef: React.RefObject<HTMLSpanElement | null>;
  className?: string;
}

/**
 * Minimal Luxury Progress Indicator
 * Updated directly by GSAP ScrollTrigger ticker on DOM refs without triggering React re-renders.
 */
export function HeroProgress({
  progressBarRef,
  chapterBadgeRef,
  className,
}: HeroProgressProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute bottom-8 right-6 z-30 hidden items-center gap-4 text-xs font-mono uppercase tracking-widest text-silver/80 lg:flex',
        className
      )}
    >
      <div className="flex items-center gap-1.5">
        <span ref={chapterBadgeRef} className="font-bold text-gold">
          01
        </span>
        <span className="text-silver/40">/</span>
        <span className="text-silver/60">04</span>
      </div>

      <div className="relative h-[2px] w-24 overflow-hidden rounded-full bg-ivory/20">
        <div
          ref={progressBarRef}
          className="h-full bg-gold transition-none"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}
