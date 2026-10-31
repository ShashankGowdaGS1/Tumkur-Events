'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ourApproachData } from '@/config/reviews-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ReviewsOurApproach() {
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
      aria-label="Our Approach to Every Celebration"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        <div ref={containerRef} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {ourApproachData.eyebrow}
              </span>
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-4">
              {ourApproachData.heading}
            </h2>

            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
              {ourApproachData.description}
            </p>
          </div>

          {/* Grid: Visual Stage (5 Cols) + 3 Themes (7 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Stage */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-xs border border-charcoal/10 shadow-[0_12px_36px_rgba(21,21,21,0.06)] bg-champagne/20">
                <Image
                  src={ourApproachData.image}
                  alt={ourApproachData.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-ivory z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-champagne block mb-1">
                    Authentic Craftsmanship
                  </span>
                  <p className="font-display text-base sm:text-lg">
                    Every stage is shaped with dedicated local precision.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Numbered Themes */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
              {ourApproachData.steps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 sm:p-7 rounded-xs bg-[#FAF7F2] border border-charcoal/10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-normal hover:border-gold-deep/30 hover:shadow-xs"
                >
                  <span className="font-mono text-xl sm:text-2xl font-semibold text-gold-deep shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-charcoal tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
