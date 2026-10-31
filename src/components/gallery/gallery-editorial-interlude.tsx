'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { galleryInterludeData } from '@/config/gallery';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function GalleryEditorialInterlude() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Behind the Decorative Details"
      className="relative w-full bg-[#181818] text-ivory py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-b border-charcoal-light"
    >
      <div className="container-luxury relative z-10">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-6xl mx-auto"
        >
          {/* Visual Column (5 Cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-xs border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.3)] bg-charcoal">
              <Image
                src={galleryInterludeData.image}
                alt={galleryInterludeData.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Decorative Corner Element */}
              <div
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Editorial Content Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
              <span className="overline-luxury text-gold text-xs font-mono">
                {galleryInterludeData.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-fluid-h2 text-ivory tracking-tight mb-4 sm:mb-5">
              {galleryInterludeData.heading}
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-silver-light/85 leading-relaxed font-light mb-6 sm:mb-8">
              {galleryInterludeData.description}
            </p>

            {/* Highlight Quote */}
            <div className="border-l-2 border-gold/50 pl-4 sm:pl-5 py-1 mb-6 sm:mb-8 bg-white/[0.02]">
              <p className="font-display italic text-base sm:text-lg text-champagne leading-snug">
                &ldquo;{galleryInterludeData.quote}&rdquo;
              </p>
            </div>

            {/* Craftsmanship Highlights Pills */}
            <div className="flex flex-wrap gap-2.5">
              {galleryInterludeData.pills.map((pill) => (
                <div
                  key={pill}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-light/70 border border-white/10 text-xs font-mono text-silver-light"
                >
                  <Sparkles className="w-3 h-3 text-gold shrink-0" aria-hidden="true" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
