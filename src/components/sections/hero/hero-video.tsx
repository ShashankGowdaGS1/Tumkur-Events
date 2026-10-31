'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config/hero';

interface HeroVideoProps {
  isReady: boolean;
  onLoadedMetadata: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  onCanPlay: () => void;
  leftScrimRef?: React.RefObject<HTMLDivElement | null>;
  rightScrimRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

/**
 * Fullscreen Cinematic Video Layer
 * - Fills viewport 100% width and 100svh height with object-fit: cover.
 * - Deliberate mobile portrait composition: object-[72%_center] positions the
 *   illuminated floral doorway centrally on narrow screens instead of cutting it off.
 * - Seamless poster crossfade to prevent any black flashes during initialization.
 * - Dynamic alternating left/right localized scrim gradients on desktop, with
 *   dedicated mobile readability gradients.
 */
export const HeroVideo = forwardRef<HTMLVideoElement, HeroVideoProps>(
  (
    { isReady, onLoadedMetadata, onCanPlay, leftScrimRef, rightScrimRef, className },
    ref
  ) => {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-charcoal', className)}>
        {/* Fullscreen Video Element — Desktop GSAP Scrollytelling Scrubbing */}
        <video
          ref={ref}
          src={heroConfig.media.videoSrc}
          poster={heroConfig.media.posterSrc}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={onLoadedMetadata}
          onCanPlay={onCanPlay}
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 h-full w-full object-cover lg:object-center select-none pointer-events-none"
        />

        {/* Static Floral Doorway Hero Image */}
        {/* Mobile (< 1024px): Permanent high-resolution floral doorway composition with zero black frame or decode latency */}
        {/* Desktop (>= 1024px): Seamless poster crossfade that reveals video once playhead is initialized */}
        <div
          className={cn(
            'absolute inset-0 pointer-events-none z-10',
            isReady ? 'opacity-100 lg:opacity-0 transition-opacity duration-slow ease-luxury' : 'opacity-100'
          )}
          aria-hidden="true"
        >
          <Image
            src={heroConfig.media.posterSrc}
            alt="Tumkur Events Celebration Floral Doorway Entrance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
          />
        </div>

        {/* Directional Overlays for Contrast & Readability */}
        {/* 1. Subtle top scrim for navbar contrast against bright video frames */}
        <div
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 2. Mobile-Specific Directional Readability Protection */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/60 lg:hidden pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 3. Alternating Left-Hand Scrim for Left Chapters on Desktop */}
        <div
          ref={leftScrimRef}
          style={{ opacity: 1, willChange: 'opacity' }}
          className="hidden lg:block absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 4. Alternating Right-Hand Scrim for Right Chapters on Desktop */}
        <div
          ref={rightScrimRef}
          style={{ opacity: 0, willChange: 'opacity' }}
          className="hidden lg:block absolute inset-y-0 right-0 w-[52%] bg-gradient-to-l from-charcoal/80 via-charcoal/35 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 5. Subtle bottom vignette for smooth transition into subsequent sections */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
      </div>
    );
  }
);

HeroVideo.displayName = 'HeroVideo';
