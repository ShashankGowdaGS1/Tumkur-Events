'use client';

import { useEffect, useState, useCallback } from 'react';
import { gsap, ScrollTrigger, registerGsapPlugins } from '@/lib/gsap';
import { heroConfig } from '@/config/hero';

interface UseHeroScrollProps {
  heroSectionRef: React.RefObject<HTMLElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  chapterRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  progressBarRef: React.RefObject<HTMLDivElement | null>;
  chapterBadgeRef: React.RefObject<HTMLSpanElement | null>;
  leftScrimRef?: React.RefObject<HTMLDivElement | null>;
  rightScrimRef?: React.RefObject<HTMLDivElement | null>;
}

export interface UseHeroScrollReturn {
  isVideoReady: boolean;
  actualDuration: number;
  handleLoadedMetadata: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleCanPlay: () => void;
}

/**
 * Authoritative Unified GSAP ScrollTrigger Controller for the Cinematic Hero
 *
 * Fully supports both Desktop and Mobile devices:
 * - Desktop: 4-chapter synchronized scrollytelling with alternating Left/Right choreography
 *   and directional readability scrims (scroll multiplier: 3.5).
 * - Mobile: Calibrated touch-responsive 4-chapter pinned journey (scroll multiplier: 2.2, scrub: 0.5)
 *   ensuring complete video scrubbing, chapter progression, and fluid pin release.
 * - Reduced Motion: Single-viewport accessible static view without pinning.
 */
export function useHeroScroll({
  heroSectionRef,
  videoRef,
  chapterRefs,
  progressBarRef,
  chapterBadgeRef,
  leftScrimRef,
  rightScrimRef,
}: UseHeroScrollProps): UseHeroScrollReturn {
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [actualDuration, setActualDuration] = useState<number>(heroConfig.media.nominalDuration);

  // Read actual media duration from video metadata
  const handleLoadedMetadata = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video && !isNaN(video.duration) && video.duration > 0) {
      setActualDuration(video.duration);
      video.pause();
      video.currentTime = 0;
      setIsVideoReady(true);
    }
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  useEffect(() => {
    registerGsapPlugins();

    const heroSection = heroSectionRef.current;
    const video = videoRef.current;

    if (!heroSection) return;

    // Fast check: if video already has metadata cached
    if (video && !isNaN(video.duration) && video.duration > 0) {
      setActualDuration(video.duration);
      setIsVideoReady(true);
    }

    // Use GSAP MatchMedia for responsive and reduced-motion isolation
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        isMobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)',
        isReducedMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          isReducedMotion: boolean;
        };

        if (isDesktop || isMobile) {
          const duration =
            video && video.duration > 0 ? video.duration : heroConfig.media.nominalDuration;

          let isSeeking = false;
          let pendingSeekTime: number | null = null;
          let lastSeekTimestamp = 0;

          // Non-blocking seek scheduler with auto-recovery watchdog
          const seekVideo = (targetSeconds: number) => {
            if (!video) return;

            const clampedTime = Math.max(0, Math.min(targetSeconds, duration - 0.05));

            // Skip negligible seek differences (< 30ms, approx sub-frame at 24fps)
            if (Math.abs(video.currentTime - clampedTime) < 0.03) {
              return;
            }

            if (video.seeking || isSeeking) {
              pendingSeekTime = clampedTime;
              return;
            }

            isSeeking = true;
            lastSeekTimestamp = performance.now();
            try {
              video.currentTime = clampedTime;
            } catch {
              isSeeking = false;
            }
          };

          const handleSeeked = () => {
            isSeeking = false;
            if (pendingSeekTime !== null) {
              const nextTime = pendingSeekTime;
              pendingSeekTime = null;
              seekVideo(nextTime);
            }
          };

          video?.addEventListener('seeked', handleSeeked);

          // Watchdog: auto-release seeking lock if browser decoder didn't fire seeked within 100ms
          const watchdogInterval = setInterval(() => {
            if (isSeeking && performance.now() - lastSeekTimestamp > 100) {
              isSeeking = false;
              if (pendingSeekTime !== null) {
                const nextTime = pendingSeekTime;
                pendingSeekTime = null;
                seekVideo(nextTime);
              }
            }
          }, 100);

          // Set initial navbar state (transparent over hero)
          window.dispatchEvent(
            new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
          );

          // Calibrate scroll travel and scrub duration for desktop vs touch mobile
          const scrollMultiplier = isDesktop
            ? heroConfig.scroll.scrollMultiplier
            : 2.2; // Optimized touch travel distance for mobile

          const scrubSmoothing = isDesktop
            ? heroConfig.scroll.scrubSmoothing
            : 0.4; // Snappy touch scrub on mobile

          // Single Authoritative Master Timeline with ScrollTrigger Pinning
          const masterTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: () => '+=' + Math.round(window.innerHeight * scrollMultiplier),
              pin: true,
              pinSpacing: true,
              scrub: scrubSmoothing,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const p = self.progress;

                // 1. Synchronize video playhead
                seekVideo(p * duration);

                // 2. Direct DOM update for progress bar width
                if (progressBarRef.current) {
                  progressBarRef.current.style.width = `${p * 100}%`;
                }

                // 3. Direct DOM update for chapter badge
                if (chapterBadgeRef.current) {
                  let ch = '01';
                  if (p >= 0.82) ch = '04';
                  else if (p >= 0.52) ch = '03';
                  else if (p >= 0.20) ch = '02';
                  if (chapterBadgeRef.current.textContent !== ch) {
                    chapterBadgeRef.current.textContent = ch;
                  }
                }
              },
              onLeave: () => {
                // Pin has released and user is entering the continuation section
                window.dispatchEvent(
                  new CustomEvent('tumkur:hero-state', { detail: { isScrolled: true } })
                );
              },
              onEnterBack: () => {
                // User scrolled back into pinned hero
                window.dispatchEvent(
                  new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
                );
              },
              onEnter: () => {
                window.dispatchEvent(
                  new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
                );
              },
              onLeaveBack: () => {
                // User scrolled above hero (top of page)
                window.dispatchEvent(
                  new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
                );
              },
            },
          });

          // Master Timeline Chapter & Scrim Animations
          const ch1 = chapterRefs.current[0];
          const ch2 = chapterRefs.current[1];
          const ch3 = chapterRefs.current[2];
          const ch4 = chapterRefs.current[3];
          const leftScrim = leftScrimRef?.current;
          const rightScrim = rightScrimRef?.current;

          const travelOffset = isDesktop ? 30 : 20;

          if (ch1 && ch2 && ch3 && ch4) {
            // Chapter 1 (Active on load) -> Chapter 2
            masterTl.to(
              ch1,
              {
                opacity: 0,
                x: -travelOffset,
                duration: 4,
                ease: 'power1.out',
                pointerEvents: 'none',
              },
              16
            );
            if (isDesktop && leftScrim && rightScrim) {
              masterTl.to(leftScrim, { opacity: 0, duration: 6, ease: 'power1.out' }, 17);
              masterTl.to(rightScrim, { opacity: 1, duration: 6, ease: 'power1.out' }, 17);
            }

            // Chapter 2 Enters
            masterTl.fromTo(
              ch2,
              { opacity: 0, x: travelOffset, pointerEvents: 'none' },
              { opacity: 1, x: 0, duration: 4, ease: 'power1.out', pointerEvents: 'auto' },
              22
            );

            // Chapter 2 -> Chapter 3
            masterTl.to(
              ch2,
              {
                opacity: 0,
                x: travelOffset,
                duration: 4,
                ease: 'power1.out',
                pointerEvents: 'none',
              },
              46
            );
            if (isDesktop && leftScrim && rightScrim) {
              masterTl.to(rightScrim, { opacity: 0, duration: 6, ease: 'power1.out' }, 47);
              masterTl.to(leftScrim, { opacity: 1, duration: 6, ease: 'power1.out' }, 47);
            }

            // Chapter 3 Enters
            masterTl.fromTo(
              ch3,
              { opacity: 0, x: -travelOffset, pointerEvents: 'none' },
              { opacity: 1, x: 0, duration: 4, ease: 'power1.out', pointerEvents: 'auto' },
              53
            );

            // Chapter 3 -> Chapter 4
            masterTl.to(
              ch3,
              {
                opacity: 0,
                x: -travelOffset,
                duration: 4,
                ease: 'power1.out',
                pointerEvents: 'none',
              },
              77
            );
            if (isDesktop && leftScrim && rightScrim) {
              masterTl.to(leftScrim, { opacity: 0, duration: 6, ease: 'power1.out' }, 78);
              masterTl.to(rightScrim, { opacity: 1, duration: 6, ease: 'power1.out' }, 78);
            }

            // Chapter 4 Enters
            masterTl.fromTo(
              ch4,
              { opacity: 0, x: travelOffset, pointerEvents: 'none' },
              { opacity: 1, x: 0, duration: 4, ease: 'power1.out', pointerEvents: 'auto' },
              84
            );

            // Settle and hold Chapter 4 until pin release
            masterTl.to({}, { duration: 12 }, 88);
          }

          return () => {
            clearInterval(watchdogInterval);
            video?.removeEventListener('seeked', handleSeeked);
          };
        } else {
          // Reduced Motion fallback: Static presentation, toggle navbar at boundary
          ScrollTrigger.create({
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            onLeave: () => {
              window.dispatchEvent(
                new CustomEvent('tumkur:hero-state', { detail: { isScrolled: true } })
              );
            },
            onEnterBack: () => {
              window.dispatchEvent(
                new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
              );
            },
            onEnter: () => {
              window.dispatchEvent(
                new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
              );
            },
            onLeaveBack: () => {
              window.dispatchEvent(
                new CustomEvent('tumkur:hero-state', { detail: { isScrolled: false } })
              );
            },
          });
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, [
    actualDuration,
    heroSectionRef,
    videoRef,
    chapterRefs,
    progressBarRef,
    chapterBadgeRef,
    leftScrimRef,
    rightScrimRef,
  ]);

  return {
    isVideoReady,
    actualDuration,
    handleLoadedMetadata,
    handleCanPlay,
  };
}
