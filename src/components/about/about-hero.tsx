'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { aboutHeroData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Image entrance reveal with subtle zoom-out
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.05, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
          }
        );
      }

      // Staggered text content reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power2.out',
            delay: 0.2,
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleScrollToStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('our-story');
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
      aria-label="About Tumkur Events Introduction"
      className="relative w-full min-h-[75vh] sm:min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center text-ivory overflow-hidden bg-charcoal pt-24 sm:pt-28 pb-16 sm:pb-20"
    >
      {/* Background Image Stage with Restrained Contrast Scrim */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src={aboutHeroData.image}
          alt={aboutHeroData.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-charcoal/80" />
      </div>

      <div className="container-luxury relative z-10 text-center flex flex-col items-center">
        <div ref={contentRef} className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold text-xs font-mono">
              {aboutHeroData.eyebrow}
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-fluid-h1 text-ivory tracking-tight leading-[1.08] mb-4 sm:mb-6">
            {aboutHeroData.heading.line1}
            <span className="block text-gold font-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl pt-2 font-normal">
              {aboutHeroData.heading.line2Accent}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-silver-light/90 leading-relaxed font-light max-w-2xl mb-8 sm:mb-12">
            {aboutHeroData.introduction}
          </p>

          {/* CTA Smooth Scroll */}
          <a
            href={aboutHeroData.ctaTarget}
            onClick={handleScrollToStory}
            className="group inline-flex items-center gap-3 px-8 py-3.5 border border-gold/50 bg-charcoal/60 backdrop-blur-xs text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-lg"
          >
            <span>{aboutHeroData.ctaText}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-fast" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Decorative Bottom Gold Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" />
    </section>
  );
}
