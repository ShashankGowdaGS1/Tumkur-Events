'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { processSteps, processIntro, processClosing } from '@/config/event-process';
import { ProcessTrack } from '@/components/process/process-track';

interface MobileChapter {
  readonly id: string;
  readonly number: string;
  readonly shortLabel: string;
  readonly title: string;
  readonly tag: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
}

const mobileChapters: readonly MobileChapter[] = [
  {
    id: 'step-01',
    number: '01',
    shortLabel: 'Vision',
    title: 'Share Your Vision',
    tag: 'CONSULTATION & INTAKE',
    description:
      'Tell us about your occasion, venue, preferred style, and the atmosphere you have in mind.',
    image: '/images/events/art-of-celebration.jpg',
    imageAlt: 'Intimate event consultation and creative planning setting in Tumakuru',
  },
  {
    id: 'step-02',
    number: '02',
    shortLabel: 'Concept',
    title: 'Shape the Concept',
    tag: 'CREATIVE DIRECTION',
    description:
      'Explore decoration ideas, color palettes, themes, and styling possibilities for your celebration.',
    image: '/images/events/birthdays.jpg',
    imageAlt: 'Creative event styling concepts and color palettes for birthdays and ceremonies',
  },
  {
    id: 'step-03',
    number: '03',
    shortLabel: 'Details',
    title: 'Perfect the Details',
    tag: 'DESIGN REFINEMENT',
    description:
      'Bring the agreed design details, decoration requirements, and practical arrangements together.',
    image: '/images/decor/faq-decor-detail.jpg',
    imageAlt: 'Detailed ceremonial flowers and handcrafted decor accents',
  },
  {
    id: 'step-04',
    number: '04',
    shortLabel: 'Delivery',
    title: 'Bring It to Life',
    tag: 'ON-SITE STYLING',
    description:
      'Prepare the celebration space with the selected décor, thoughtful arrangements, and finishing touches.',
    image: '/images/events/stage-events.jpg',
    imageAlt: 'Grand completed celebration stage with on-site styling in Tumakuru',
  },
];

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
 * - Mobile: "The Art of Making a Celebration" — compact, interactive four-chapter storyboard.
 * - Robust prefers-reduced-motion fallback with full accessibility.
 */
export function EventProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const visibleStageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Mobile Storyboard Interactive State & Refs
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileStoryboardRef = useRef<HTMLDivElement>(null);
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileDescRef = useRef<HTMLParagraphElement>(null);
  const mobileNumRef = useRef<HTMLDivElement>(null);

  const handleStepChange = (nextIndex: number) => {
    if (nextIndex === activeStepIndex || isAnimatingRef.current) return;

    if (prefersReducedMotion()) {
      setActiveStepIndex(nextIndex);
      return;
    }

    isAnimatingRef.current = true;
    const title = mobileTitleRef.current;
    const desc = mobileDescRef.current;
    const num = mobileNumRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    // 1. Gentle exit of story typography & monumental chapter numeral
    tl.to([title, desc, num], {
      opacity: 0,
      y: -6,
      duration: 0.16,
      ease: 'power2.in',
    });

    // 2. Advance active chapter state mid-timeline
    tl.add(() => {
      setActiveStepIndex(nextIndex);
    });

    // 3. Gentle entrance reveal for new chapter story
    tl.fromTo(
      num,
      { opacity: 0, y: 10, scale: 0.9 },
      { opacity: 0.25, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.2)' }
    );
    tl.fromTo(
      title,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      '<0.04'
    );
    tl.fromTo(
      desc,
      { opacity: 0, y: 6 },
      { opacity: 0.85, y: 0, duration: 0.3, ease: 'power2.out' },
      '<0.04'
    );
  };

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

    // Mobile (< 768px): Editorial Storyboard Entrance Animation
    mm.add('(max-width: 767px)', () => {
      const mobileHeader = mobileHeaderRef.current;
      const mobileNav = mobileNavRef.current;
      const mobileStoryboard = mobileStoryboardRef.current;

      if (mobileHeader && mobileStoryboard) {
        const entranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: mobileHeader,
            start: 'top 85%',
            once: true,
          },
        });

        entranceTl
          .fromTo(
            mobileHeader,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }
          )
          .fromTo(
            mobileNav,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
            '-=0.25'
          )
          .fromTo(
            mobileStoryboard,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
            '-=0.2'
          );
      }
    });

    return () => mm.revert();
  }, []);

  const activeChapter = mobileChapters[activeStepIndex] ?? mobileChapters[0];

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
        {/* Static Background Golden Element (Top-Right, independent of scroll scrub, subtle background watermark) */}
        <div
          className="pointer-events-none select-none absolute top-0 right-4 lg:right-12 w-[140px] lg:w-[185px] opacity-[0.18] lg:opacity-[0.20] z-0 hidden md:block"
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
          B. MOBILE EDITORIAL PROCESS STORYBOARD (< 768px)
          "The Art of Making a Celebration"
         ======================================================================= */}
      <div className="md:hidden py-14 px-5 sm:px-6 container-luxury">
        {/* Mobile Editorial Header */}
        <div ref={mobileHeaderRef} className="mb-6">
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

        {/* Compact Chapter Navigator (01  02  03  04) */}
        <div
          ref={mobileNavRef}
          role="tablist"
          aria-label="Celebration Process Chapters"
          className="grid grid-cols-4 gap-2 mb-4"
        >
          {mobileChapters.map((chapter, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={chapter.id}
                type="button"
                role="tab"
                id={`process-tab-${chapter.id}`}
                aria-selected={isActive}
                aria-controls={`process-panel-${chapter.id}`}
                onClick={() => handleStepChange(idx)}
                className={`group relative flex flex-col items-center justify-center py-2.5 px-1 rounded-sm border transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                  isActive
                    ? 'bg-charcoal-light/60 border-gold/60 text-ivory shadow-[0_2px_12px_rgba(199,158,34,0.12)]'
                    : 'bg-charcoal/40 border-charcoal-light/40 text-silver-light/50 hover:border-gold/30 hover:text-silver-light/80'
                }`}
              >
                <span
                  className={`font-mono text-xs sm:text-sm tracking-wider transition-colors ${
                    isActive ? 'text-gold font-bold' : 'text-silver-light/40 group-hover:text-gold/70'
                  }`}
                >
                  {chapter.number}
                </span>
                <span
                  className={`font-sans text-[10px] tracking-wider uppercase mt-0.5 transition-colors ${
                    isActive ? 'text-ivory font-medium' : 'text-silver-light/50'
                  }`}
                >
                  {chapter.shortLabel}
                </span>
                {/* Active Top Gold Accent */}
                {isActive && (
                  <span
                    className="absolute top-0 left-2 right-2 h-[2px] bg-gold rounded-full shadow-[0_0_8px_rgba(199,158,34,0.6)]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Storyboard Stage */}
        <div
          ref={mobileStoryboardRef}
          className="relative bg-charcoal-dark/70 rounded-sm border border-charcoal-light/50 p-4 sm:p-5 overflow-hidden"
        >
          {/* Main Visual Stage: Atmospheric Event Detail Photography */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden bg-charcoal border border-charcoal-light/40">
            {/* Stacked Images for Seamless Cross-dissolve without Flash */}
            {mobileChapters.map((chapter, idx) => (
              <div
                key={chapter.id}
                className={`absolute inset-0 transition-all duration-700 ease-luxury ${
                  idx === activeStepIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center"
                  priority={idx === 0}
                />
                {/* Luxury Vignette & Dark Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/10"
                  aria-hidden="true"
                />
              </div>
            ))}

            {/* Monumental Chapter Number Subtly Positioned Within Composition */}
            <div
              ref={mobileNumRef}
              className="absolute right-3.5 -bottom-2 font-display text-7xl sm:text-8xl text-gold/25 select-none pointer-events-none tracking-tighter leading-none z-20"
              aria-hidden="true"
            >
              {activeChapter.number}
            </div>

            {/* Stage Tag Badge on Upper Left */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/30 rounded-xs shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-gold">
                PHASE {activeChapter.number}
              </span>
            </div>

            {/* Chapter Navigation Arrows Overlay (Bottom-left of stage for thumb tap) */}
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleStepChange((activeStepIndex - 1 + 4) % 4)}
                aria-label="Previous process chapter"
                className="w-8 h-8 rounded-full bg-charcoal/80 backdrop-blur-md border border-charcoal-light/60 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleStepChange((activeStepIndex + 1) % 4)}
                aria-label="Next process chapter"
                className="w-8 h-8 rounded-full bg-charcoal/80 backdrop-blur-md border border-charcoal-light/60 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <span className="font-mono text-xs text-silver-light/60 pl-1 select-none">
                {activeChapter.number} / 04
              </span>
            </div>
          </div>

          {/* Thin Animated Gold Progress Rule */}
          <div className="mt-4 w-full h-[2px] bg-charcoal-light/60 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-gold/80 to-gold transition-all duration-500 ease-luxury rounded-full shadow-[0_0_8px_rgba(199,158,34,0.5)]"
              style={{ width: `${((activeStepIndex + 1) / 4) * 100}%` }}
              aria-hidden="true"
            />
          </div>

          {/* Story Content Below Visual Stage */}
          <div
            id={`process-panel-${activeChapter.id}`}
            role="tabpanel"
            aria-labelledby={`process-tab-${activeChapter.id}`}
            className="mt-4 pt-1"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-sans text-[10px] tracking-[0.22em] uppercase font-bold text-gold">
                {activeChapter.tag}
              </span>
            </div>

            <h3
              ref={mobileTitleRef}
              className="font-display text-xl sm:text-2xl text-ivory tracking-tight leading-snug"
            >
              {activeChapter.title}
            </h3>

            <p
              ref={mobileDescRef}
              className="font-sans text-xs sm:text-sm text-silver-light/85 leading-relaxed mt-2"
            >
              {activeChapter.description}
            </p>
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

