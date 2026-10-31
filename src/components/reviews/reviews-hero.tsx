'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { reviewsHeroData } from '@/config/reviews-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ReviewsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            delay: 0.15,
          }
        );
      }

      if (imageColRef.current) {
        gsap.fromTo(
          imageColRef.current,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.25,
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleScrollToStories = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('celebration-stories');
    if (!target) return;
    const navbarOffset = 90;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Client Stories and Experiences Introduction"
      className="relative w-full bg-[#FAF7F2] text-charcoal pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {reviewsHeroData.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-fluid-h1 text-charcoal tracking-tight leading-[1.08] mb-4 sm:mb-5">
              {reviewsHeroData.heading.line1}
              <span className="block text-gold-deep font-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl pt-2 font-normal">
                {reviewsHeroData.heading.line2}
              </span>
            </h1>

            {/* Accent Phrase */}
            <p className="font-accent text-2xl sm:text-3xl text-gold-deep/90 mb-4 sm:mb-6 font-normal">
              {reviewsHeroData.accentPhrase}
            </p>

            {/* Introduction */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-charcoal/80 leading-relaxed font-light max-w-xl mb-8 sm:mb-10">
              {reviewsHeroData.introduction}
            </p>

            {/* Smooth Scroll CTA */}
            <a
              href={reviewsHeroData.primaryCtaTarget}
              onClick={handleScrollToStories}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md"
            >
              <span>{reviewsHeroData.primaryCtaText}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-fast" aria-hidden="true" />
            </a>
          </div>

          {/* RIGHT COLUMN: ATMOSPHERIC CELEBRATION PHOTOGRAPHY */}
          <div ref={imageColRef} className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-xs border border-charcoal/10 shadow-[0_12px_36px_rgba(21,21,21,0.08)] bg-champagne/20">
              <Image
                src={reviewsHeroData.image}
                alt={reviewsHeroData.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

              {/* Decorative Corner Element */}
              <div
                className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40 pointer-events-none"
                aria-hidden="true"
              />

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-ivory">
                <span className="font-mono text-[10px] uppercase tracking-widest text-champagne px-2 py-0.5 bg-charcoal/60 backdrop-blur-xs rounded-[2px] border border-white/10">
                  Tumakuru Celebrations
                </span>
                <span className="text-xs font-accent text-gold">
                  Moments That Matter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
