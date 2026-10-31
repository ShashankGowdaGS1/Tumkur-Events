'use client';

import React, { useRef } from 'react';
import { HeroVideo } from './hero-video';
import { HeroCopy } from './hero-copy';
import { HeroProgress } from './hero-progress';
import { useHeroScroll } from '@/components/animations/use-hero-scroll';

/**
 * Fullscreen Cinematic Scrollytelling Hero
 *
 * Real document-flow section with GSAP ScrollTrigger pinning and pin-spacing.
 * Controlled by a single authoritative timeline synchronizing the 17.88s source video
 * and the 4 alternating visual chapters (Left -> Right -> Left -> Right).
 */
export function CinematicHero() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const chapterBadgeRef = useRef<HTMLSpanElement>(null);
  const leftScrimRef = useRef<HTMLDivElement>(null);
  const rightScrimRef = useRef<HTMLDivElement>(null);

  const { isVideoReady, handleLoadedMetadata, handleCanPlay } = useHeroScroll({
    heroSectionRef,
    videoRef,
    chapterRefs,
    progressBarRef,
    chapterBadgeRef,
    leftScrimRef,
    rightScrimRef,
  });

  return (
    <section
      id="cinematic-hero-section"
      ref={heroSectionRef}
      aria-label="Cinematic Celebration Experience"
      className="relative w-full min-h-[100svh] lg:h-[100svh] overflow-hidden bg-charcoal"
    >
      {/* Fullscreen Video Layer & Localized Alternating Scrims */}
      <HeroVideo
        ref={videoRef}
        isReady={isVideoReady}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        leftScrimRef={leftScrimRef}
        rightScrimRef={rightScrimRef}
      />

      {/* Synchronized Alternating Chapter Copy & Action CTAs */}
      <HeroCopy chapterRefs={chapterRefs} />

      {/* Minimal Luxury Progress Bar */}
      <HeroProgress
        progressBarRef={progressBarRef}
        chapterBadgeRef={chapterBadgeRef}
      />
    </section>
  );
}
