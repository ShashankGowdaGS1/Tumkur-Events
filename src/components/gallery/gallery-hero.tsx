'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { galleryHeroData } from '@/config/gallery';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function GalleryHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Reveal Text elements
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

      // Reveal Images with subtle scale
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

  const handleScrollToExplorer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('gallery-explorer');
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
      aria-label="Celebration Gallery Introduction"
      className="relative w-full bg-[#FAF7F2] text-charcoal pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY (7 Cols on LG) */}
          <div ref={textColRef} className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {galleryHeroData.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-fluid-h1 text-charcoal tracking-tight leading-[1.08] mb-4 sm:mb-5">
              {galleryHeroData.heading.line1}
              <span className="block text-gold-deep font-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl pt-2 font-normal">
                {galleryHeroData.heading.line2}
              </span>
            </h1>

            {/* Accent Phrase */}
            <p className="font-accent text-2xl sm:text-3xl text-gold-deep/90 mb-4 sm:mb-6 font-normal">
              {galleryHeroData.accentPhrase}
            </p>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-charcoal/80 leading-relaxed font-light max-w-xl mb-8 sm:mb-10">
              {galleryHeroData.description}
            </p>

            {/* Smooth Scroll CTA */}
            <a
              href={galleryHeroData.primaryCtaTarget}
              onClick={handleScrollToExplorer}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md"
            >
              <span>{galleryHeroData.primaryCtaText}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-fast" aria-hidden="true" />
            </a>
          </div>

          {/* RIGHT COLUMN: ASYMMETRIC PHOTOGRAPHIC STAGE (6 Cols on LG) */}
          <div ref={imageColRef} className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">
            {/* Main Dominant Image */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-xs border border-charcoal/10 shadow-[0_12px_36px_rgba(21,21,21,0.08)] bg-champagne/20">
              <Image
                src={galleryHeroData.dominantImage.src}
                alt={galleryHeroData.dominantImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />

              {/* Decorative Subtle Gold Corner Accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Offset Detail Photograph (Desktop & Tablet) */}
            <div
              className="hidden sm:block absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-[180px] sm:w-[220px] lg:w-[240px] h-[130px] sm:h-[150px] lg:h-[160px] overflow-hidden rounded-xs border-2 border-ivory shadow-[0_16px_36px_rgba(21,21,21,0.14)] z-20 bg-champagne/30"
              aria-hidden="true"
            >
              <Image
                src={galleryHeroData.supportingImage.src}
                alt={galleryHeroData.supportingImage.alt}
                fill
                sizes="240px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[10px] font-mono tracking-widest uppercase text-ivory/95 font-semibold">
                Ceremonial Detail
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
