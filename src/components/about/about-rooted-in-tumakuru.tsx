'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { rootedInTumakuruData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutRootedInTumakuru() {
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
      aria-label="Rooted in Tumakuru"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
        >
          {/* IMAGE STAGE (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-xs overflow-hidden border border-charcoal/10 shadow-[0_12px_36px_rgba(21,21,21,0.06)] bg-champagne/20">
              <Image
                src={rootedInTumakuruData.image}
                alt={rootedInTumakuruData.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />

              {/* Location Badge */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal/80 backdrop-blur-xs text-ivory text-xs font-mono rounded-[2px] border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                <span>{rootedInTumakuruData.locationBadge}</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL CONTENT (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {rootedInTumakuruData.eyebrow}
              </span>
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-4 sm:mb-5">
              {rootedInTumakuruData.heading}
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-charcoal/80 leading-relaxed font-light mb-6 sm:mb-8">
              {rootedInTumakuruData.description}
            </p>

            {/* Quote Box */}
            <div className="border-l-2 border-gold-deep/50 pl-4 sm:pl-5 py-1 bg-champagne/20 w-full rounded-r-xs">
              <p className="font-display italic text-base sm:text-lg text-charcoal/90 leading-snug">
                &ldquo;{rootedInTumakuruData.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
