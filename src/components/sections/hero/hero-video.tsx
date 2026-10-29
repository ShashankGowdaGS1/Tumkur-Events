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
 * - Zero decorative frames or rounded borders.
 * - Seamless poster crossfade to prevent any black flashes during initialization.
 * - Dynamic alternating left/right localized scrim gradients for editorial legibility
 *   without darkening the vibrant event decoration.
 */
export const HeroVideo = forwardRef<HTMLVideoElement, HeroVideoProps>(
  (
    { isReady, onLoadedMetadata, onCanPlay, leftScrimRef, rightScrimRef, className },
    ref
  ) => {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-charcoal', className)}>
        {/* Fullscreen Video Element */}
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
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        />

        {/* Seamless Poster Image Crossfade (Eliminates Initial Black Flash) */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-slow ease-luxury pointer-events-none z-10',
            isReady ? 'opacity-0' : 'opacity-100'
          )}
          aria-hidden="true"
        >
          <Image
            src={heroConfig.media.posterSrc}
            alt="Tumkur Events Cinematic Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Restrained Directional Overlays for Contrast & Readability */}
        {/* 1. Subtle top scrim for navbar contrast against bright video frames */}
        <div
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 2. Alternating Left-Hand Scrim for Left Chapters (Chapters 01 & 03) */}
        <div
          ref={leftScrimRef}
          style={{ opacity: 1, willChange: 'opacity' }}
          className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-[52%] bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 3. Alternating Right-Hand Scrim for Right Chapters (Chapters 02 & 04) */}
        <div
          ref={rightScrimRef}
          style={{ opacity: 0, willChange: 'opacity' }}
          className="absolute inset-y-0 right-0 w-full sm:w-2/3 lg:w-[52%] bg-gradient-to-l from-charcoal/80 via-charcoal/35 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* 4. Subtle bottom vignette for smooth transition into subsequent sections */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
      </div>
    );
  }
);

HeroVideo.displayName = 'HeroVideo';
