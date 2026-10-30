'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { processSteps, processIntro, processClosing } from '@/config/event-process';
import { ProcessTrack } from '@/components/process/process-track';

/**
 * Section 07: Event Process Timeline — "From Vision to Celebration"
 *
 * Design Direction: "The Journey of a Celebration"
 * - Dark editorial stage in Charcoal (#151515) contrasting with the preceding ivory sections.
 * - Pinned horizontal scroll-driven journey on desktop:
 *   Vertical scroll controls smooth horizontal travel from right to left.
 *   Milestones alternate above and below the continuous central line.
 *   Central progress line and connecting stems fill with Brand Gold (#C79E22).
 * - Vertically centered stage beneath fixed navbar (84px offset).
 * - Completely intentional, unpinned vertical timeline for mobile devices.
 * - Robust prefers-reduced-motion fallback with full accessibility.
 */
export function EventProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const visibleStageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    const stage = stageRef.current;
    const visibleStage = visibleStageRef.current;
    const track = trackRef.current;

    if (!section || !stage || !visibleStage || !track) return;

    if (prefersReducedMotion()) {
      return;
    }

    const mm = gsap.matchMedia();

    // Desktop & Tablet Landscape (>= 768px): Pinned Horizontal Timeline
    mm.add('(min-width: 768px)', () => {
      const getTravelDistance = () => {
        return Math.max(0, track.scrollWidth - visibleStage.clientWidth);
      };

      const milestones = Array.from(
        track.querySelectorAll<HTMLElement>('[data-milestone]')
      );
      const progressLine = track.querySelector<HTMLElement>('[data-element="progress-line"]');

      // Initial visual states for milestone components
      milestones.forEach((m, idx) => {
        const stemFill = m.querySelector<HTMLElement>('[data-element="stem-fill"]');
        const marker = m.querySelector<HTMLElement>('[data-element="marker"]');
        const markerDot = m.querySelector<HTMLElement>('[data-element="marker-dot"]');
        const title = m.querySelector<HTMLElement>('[data-element="title"]');
        const desc = m.querySelector<HTMLElement>('[data-element="desc"]');
        const number = m.querySelector<HTMLElement>('[data-element="number"]');

        if (idx === 0) {
          // Milestone 01 starts active
          if (stemFill) gsap.set(stemFill, { scaleY: 1 });
          if (marker) gsap.set(marker, { borderColor: '#C79E22', scale: 1 });
          if (markerDot) gsap.set(markerDot, { scale: 1, opacity: 1 });
          if (title) gsap.set(title, { opacity: 1, y: 0 });
          if (desc) gsap.set(desc, { opacity: 1, y: 0 });
          if (number) gsap.set(number, { opacity: 1, color: '#C79E22' });
        } else {
          if (stemFill) gsap.set(stemFill, { scaleY: 0 });
          if (marker) gsap.set(marker, { borderColor: 'rgba(199, 158, 34, 0.3)', scale: 0.85 });
          if (markerDot) gsap.set(markerDot, { scale: 0.6, opacity: 0.4 });
          if (title) gsap.set(title, { opacity: 0.4, y: 14 });
          if (desc) gsap.set(desc, { opacity: 0.15, y: 10 });
          if (number) gsap.set(number, { opacity: 0.4 });
        }
      });

      // Master Scroll-driven scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: stage,
          start: 'top top',
          end: () => '+=' + Math.round(window.innerHeight * 1.5),
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Horizontal track travel
      tl.to(
        track,
        {
          x: () => -getTravelDistance(),
          ease: 'none',
          duration: 1,
        },
        0
      );

      // 2. Central gold progress line animation
      if (progressLine) {
        tl.to(
          progressLine,
          {
            scaleX: 1,
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // 3. Synchronized milestone activations based on horizontal arrival
      // We calculate each milestone's center arrival relative to the total travel distance
      const travel = getTravelDistance();
      const stageWidth = visibleStage.clientWidth;
      const targetArrivalX = stageWidth * 0.45;

      milestones.forEach((m, idx) => {
        if (idx === 0) return; // Milestone 1 is already active

        const offset = m.offsetLeft;
        const arrivalProgress = travel > 0
          ? Math.max(0.08, Math.min(0.96, (offset - targetArrivalX) / travel))
          : idx * 0.22;

        const startTime = Math.max(0, arrivalProgress - 0.1);
        const animDuration = 0.14;

        const stemFill = m.querySelector<HTMLElement>('[data-element="stem-fill"]');
        const marker = m.querySelector<HTMLElement>('[data-element="marker"]');
        const markerDot = m.querySelector<HTMLElement>('[data-element="marker-dot"]');
        const title = m.querySelector<HTMLElement>('[data-element="title"]');
        const desc = m.querySelector<HTMLElement>('[data-element="desc"]');
        const number = m.querySelector<HTMLElement>('[data-element="number"]');

        if (stemFill) {
          tl.to(
            stemFill,
            { scaleY: 1, duration: animDuration, ease: 'power2.out' },
            startTime
          );
        }
        if (marker) {
          tl.to(
            marker,
            { borderColor: '#C79E22', scale: 1, duration: animDuration, ease: 'back.out(1.5)' },
            startTime
          );
        }
        if (markerDot) {
          tl.to(
            markerDot,
            { scale: 1, opacity: 1, duration: animDuration, ease: 'power2.out' },
            startTime
          );
        }
        if (number) {
          tl.to(
            number,
            { opacity: 1, color: '#C79E22', duration: animDuration, ease: 'power2.out' },
            startTime
          );
        }
        if (title) {
          tl.to(
            title,
            { opacity: 1, y: 0, duration: animDuration, ease: 'power2.out' },
            startTime + 0.02
          );
        }
        if (desc) {
          tl.to(
            desc,
            { opacity: 1, y: 0, duration: animDuration, ease: 'power2.out' },
            startTime + 0.04
          );
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      aria-label="How We Work — The Journey of a Celebration"
      className="relative bg-charcoal text-ivory overflow-hidden"
    >
      {/* =======================================================================
          A. DESKTOP PINNED STAGE (>= 768px)
         ======================================================================= */}
      <div
        ref={stageRef}
        className="hidden md:flex relative w-full h-[100svh] min-h-[640px] overflow-hidden flex-col justify-between pt-[84px] box-border"
      >
        {/* Static Background Golden Lanterns (Top-Right, independent of scroll scrub) */}
        <div
          className="pointer-events-none select-none absolute top-0 right-4 lg:right-12 w-[130px] lg:w-[175px] opacity-80 z-0 hidden md:block"
          aria-hidden="true"
        >
          <Image
            src="/decor/golden-hanging-lanterns.webp"
            alt=""
            width={175}
            height={385}
            className="w-full h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(199,158,34,0.18)]"
            priority={false}
          />
        </div>

        {/* Stage Header: Compact Editorial Introduction */}
        <div className="container-luxury py-4 sm:py-6 shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-charcoal-light/60 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              <span className="overline-luxury text-gold">{processIntro.eyebrow}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ivory tracking-tight">
              {processIntro.headline}
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-silver-light/70 max-w-md leading-relaxed">
            {processIntro.description}
          </p>
        </div>

        {/* Usable Visual Stage: Vertically centered horizontal track */}
        <div
          ref={visibleStageRef}
          className="flex-1 relative w-full overflow-hidden flex items-center"
        >
          <ProcessTrack ref={trackRef} />
        </div>

        {/* Stage Footer: Subtle Scroll Instruction Indicator */}
        <div className="container-luxury py-3 shrink-0 flex items-center justify-between text-xs text-silver-light/50 border-t border-charcoal-light/40">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-sans uppercase tracking-widest text-[11px] text-ivory/70">
              Interactive Process Journey
            </span>
          </div>
          <span className="font-sans uppercase tracking-widest text-[11px]">
            Scroll to travel &bull; 01 &rarr; 04
          </span>
        </div>
      </div>

      {/* =======================================================================
          B. MOBILE INTENTIONAL VERTICAL TIMELINE (< 768px)
         ======================================================================= */}
      <div className="md:hidden py-16 px-6 container-luxury">
        {/* Mobile Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold">{processIntro.eyebrow}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-ivory tracking-tight">
            {processIntro.headline}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-silver-light/75 mt-2 leading-relaxed">
            {processIntro.description}
          </p>
        </div>

        {/* Vertical Connected Timeline */}
        <div className="relative pl-10">
          {/* Continuous Vertical Gold Line */}
          <div
            className="absolute left-[13px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold via-gold/80 to-gold/30"
            aria-hidden="true"
          />

          {/* Process Step Items */}
          <div className="flex flex-col gap-10">
            {processSteps.map((step) => (
              <div key={step.id} className="relative">
                {/* Node Marker on vertical line */}
                <div className="absolute -left-[37px] top-1.5 w-6 h-6 rounded-full border-2 border-gold bg-charcoal flex items-center justify-center shadow-sm shadow-gold/30">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-gold">
                      PHASE {step.number}
                    </span>
                    <span className="text-silver-light/40 text-xs">&bull;</span>
                    <span className="font-sans text-[10px] tracking-wider uppercase text-silver-light/60">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ivory tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-silver-light/80 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Final Mobile Milestone */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-6 h-6 rounded-full border-2 border-gold bg-gold/20 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-[0.22em] uppercase font-bold text-gold">
                  CELEBRATION DAY
                </span>
                <h3 className="font-display text-xl text-ivory tracking-tight mt-0.5">
                  An Unforgettable Gathering
                </h3>
                <p className="font-sans text-sm text-silver-light/80 leading-relaxed mt-2">
                  Every element in place, warm ambiance, and seamless memories in Tumakuru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          C. CLOSING EDITORIAL CTA BANNER
         ======================================================================= */}
      <div className="bg-charcoal text-ivory border-t border-charcoal-light/80 py-16 sm:py-24 relative overflow-hidden">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 max-w-5xl mx-auto text-center lg:text-left">
            <div>
              <span className="overline-luxury text-gold block mb-2">BEGIN YOUR JOURNEY</span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ivory tracking-tight">
                {processClosing.headline}
              </h3>
              <p className="font-sans text-sm sm:text-base text-silver-light/80 mt-3 max-w-xl mx-auto lg:mx-0">
                {processClosing.description}
              </p>
            </div>
            <div className="shrink-0 flex justify-center">
              <Link
                href={processClosing.ctaHref}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 shadow-lg shadow-gold/10"
              >
                <span>{processClosing.ctaText}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-normal ease-luxury group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

