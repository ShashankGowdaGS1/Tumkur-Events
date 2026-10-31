'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { signatureStories } from '@/config/events-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function SignatureStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const story1Ref = useRef<HTMLDivElement>(null);
  const story2Ref = useRef<HTMLDivElement>(null);
  const story3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Staggered reveal for the 3 distinct magazine compositions
      const stories = [story1Ref.current, story2Ref.current, story3Ref.current].filter(Boolean);
      stories.forEach((story) => {
        gsap.fromTo(
          story,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: story,
              start: 'top 82%',
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const storyA = signatureStories[0]; // Intimate & Personal
  const storyB = signatureStories[1]; // Cultural & Traditional
  const storyC = signatureStories[2]; // Grand & Spectacular

  return (
    <section
      ref={sectionRef}
      aria-label="Signature Celebration Approaches"
      className="relative w-full bg-[#E8DFCF] text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* =====================================================================
            01. SECTION INTRO
           ===================================================================== */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep">SIGNATURE PHILOSOPHIES</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Celebration Approaches.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Curated for scale, intimacy, and tradition.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Every gathering carries its own rhythm. Discover how we tailor our aesthetic direction
            across three foundational expressions of luxury event styling in Tumakuru.
          </p>
        </div>

        {/* =====================================================================
            02. MAGAZINE-STYLE COMPOSITION (Varied scales & deliberate whitespace)
           ===================================================================== */}
        <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
          {/* -------------------------------------------------------------------
              STORY 01: INTIMATE & PERSONAL (Asymmetric 45% Text / 55% Photo)
             ------------------------------------------------------------------- */}
          <div
            ref={story1Ref}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gold-deep font-semibold">
                <span>APPROACH {storyA.roman}</span>
                <span>&bull;</span>
                <span className="uppercase tracking-widest">{storyA.tag}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight leading-tight mb-3">
                {storyA.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-charcoal/60 mb-4">
                {storyA.subtitle}
              </p>

              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6">
                {storyA.description}
              </p>

              <blockquote className="border-l-2 border-gold-deep pl-4 italic text-sm text-charcoal/75 font-serif mb-6">
                &ldquo;{storyA.quote}&rdquo;
              </blockquote>

              <Link
                href="/events/birthdays"
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase font-semibold tracking-widest text-charcoal hover:text-gold-deep transition-colors"
              >
                <span>Explore Intimate Occasions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs border border-charcoal/15 shadow-[0_12px_36px_rgba(21,21,21,0.08)] bg-charcoal">
                <Image
                  src={storyA.image}
                  alt={storyA.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              STORY 02: CULTURAL & TRADITIONAL (Prominent Dominant Full-Bleed Showcase)
             ------------------------------------------------------------------- */}
          <div
            ref={story2Ref}
            className="relative bg-[#DFD5C3] p-6 sm:p-10 lg:p-14 rounded-xs border border-charcoal/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xs border border-charcoal/15 shadow-md bg-charcoal">
                  <Image
                    src={storyB.image}
                    alt={storyB.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-4 z-10 text-ivory font-mono text-xs uppercase tracking-widest bg-charcoal/80 px-3 py-1 border border-gold/40">
                    Karnataka Sacred Heritage
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gold-deep font-semibold">
                  <span>APPROACH {storyB.roman}</span>
                  <span>&bull;</span>
                  <span className="uppercase tracking-widest">{storyB.tag}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight leading-tight mb-3">
                  {storyB.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-charcoal/60 mb-4">
                  {storyB.subtitle}
                </p>

                <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6">
                  {storyB.description}
                </p>

                <blockquote className="border-l-2 border-gold-deep pl-4 italic text-sm text-charcoal/75 font-serif mb-6">
                  &ldquo;{storyB.quote}&rdquo;
                </blockquote>

                <Link
                  href="/events/traditional-ceremonies"
                  className="group inline-flex items-center gap-2 font-sans text-xs uppercase font-semibold tracking-widest text-charcoal hover:text-gold-deep transition-colors"
                >
                  <span>Explore Ceremonial Heritage</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              STORY 03: GRAND & SPECTACULAR (Asymmetric 55% Photo / 45% Text)
             ------------------------------------------------------------------- */}
          <div
            ref={story3Ref}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs border border-charcoal/15 shadow-[0_12px_36px_rgba(21,21,21,0.08)] bg-charcoal">
                <Image
                  src={storyC.image}
                  alt={storyC.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-gold-deep font-semibold">
                <span>APPROACH {storyC.roman}</span>
                <span>&bull;</span>
                <span className="uppercase tracking-widest">{storyC.tag}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight leading-tight mb-3">
                {storyC.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-charcoal/60 mb-4">
                {storyC.subtitle}
              </p>

              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6">
                {storyC.description}
              </p>

              <blockquote className="border-l-2 border-gold-deep pl-4 italic text-sm text-charcoal/75 font-serif mb-6">
                &ldquo;{storyC.quote}&rdquo;
              </blockquote>

              <Link
                href="/events/stage-events"
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase font-semibold tracking-widest text-charcoal hover:text-gold-deep transition-colors"
              >
                <span>Explore Grand Productions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

