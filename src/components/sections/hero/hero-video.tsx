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
      <div className={cn('absolute inset-0 w-full h-full overflow-hidden bg-charcoal', className)}>
        {/* =============================================================== */}
        {/* MOBILE STATIC HERO BACKGROUND (< 1024px)                        */}
        {/* The approved floral doorway composition rendered statically.    */}
        {/* Immediate high-priority paint, zero scroll animation,           */}
        {/* zero video decode delay, 100% visible behind content.           */}
        {/* =============================================================== */}
        <div
          className="absolute inset-0 lg:hidden pointer-events-none z-10"
          aria-hidden="true"
        >
          <Image
            src={heroConfig.media.posterSrc}
            alt="Tumkur Events Celebration Floral Doorway Entrance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] sm:object-[68%_center]"
          />
        </div>

        {/* Mobile Scrims: Soft, restrained contrast protection */}
        {/* Mobile Top Scrim (for navbar clarity against bright sunset sky) */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/70 via-charcoal/20 to-transparent lg:hidden pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Mobile Left Directional Scrim (protects headline and badge text while keeping doorway on the right bright) */}
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-4/5 bg-gradient-to-r from-charcoal/75 via-charcoal/30 to-transparent lg:hidden pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Mobile Bottom Scrim (anchors CTA buttons and floating action pills) */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent lg:hidden pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* =============================================================== */}
        {/* DESKTOP SCROLLYTELLING VIDEO LAYER (>= 1024px)                  */}
        {/* Preserves 100% of approved desktop scrollytelling behavior.     */}
        {/* =============================================================== */}
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

        {/* Desktop Seamless Poster Crossfade */}
        <div
          className={cn(
            'hidden lg:block absolute inset-0 pointer-events-none z-10 transition-opacity duration-slow ease-luxury',
            isReady ? 'opacity-0' : 'opacity-100'
          )}
          aria-hidden="true"
        >
          <Image
            src={heroConfig.media.posterSrc}
            alt="Tumkur Events Celebration Floral Doorway Entrance"
            fill
            priority
            sizes="100vw"
            className="object-cover lg:object-center"
          />
        </div>

        {/* Desktop Top Scrim */}
        <div
          className="hidden lg:block absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Desktop Alternating Left-Hand Scrim for Left Chapters */}
        <div
          ref={leftScrimRef}
          style={{ opacity: 1, willChange: 'opacity' }}
          className="hidden lg:block absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Desktop Alternating Right-Hand Scrim for Right Chapters */}
        <div
          ref={rightScrimRef}
          style={{ opacity: 0, willChange: 'opacity' }}
          className="hidden lg:block absolute inset-y-0 right-0 w-[52%] bg-gradient-to-l from-charcoal/80 via-charcoal/35 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Desktop Bottom Vignette */}
        <div
          className="hidden lg:block absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
      </div>
    );
  }
);

HeroVideo.displayName = 'HeroVideo';
