'use client';

import React, { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

interface ArticleReadingProgressProps {
  readonly targetId?: string;
}

/**
 * Editorial Reading Progress Indicator
 * Renders a very thin, elegant gold bar at the top of the reading interface.
 * Reflects actual article reading progress, avoiding expensive React re-renders.
 */
export function ArticleReadingProgress({ targetId = 'article-content' }: ArticleReadingProgressProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let ticking = false;

    const updateProgress = () => {
      const target = document.getElementById(targetId);
      if (!target) {
        setProgress(0);
        ticking = false;
        return;
      }

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when target top enters the upper third of screen
      const startOffset = windowHeight * 0.25;
      const totalDistance = rect.height - windowHeight * 0.5;

      if (totalDistance <= 0) {
        setProgress(100);
        ticking = false;
        return;
      }

      const currentDistance = -rect.top + startOffset;
      const rawRatio = currentDistance / totalDistance;
      const clampedPercent = Math.min(100, Math.max(0, Math.round(rawRatio * 100)));

      setProgress(clampedPercent);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [targetId]);

  if (progress <= 0) return null;

  return (
    <div
      className="fixed top-[72px] sm:top-[80px] lg:top-[84px] left-0 right-0 h-[2.5px] z-40 bg-gold/15 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-gold/80 via-gold to-gold transition-all duration-75 ease-out shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
