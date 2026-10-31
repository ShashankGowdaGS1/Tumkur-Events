'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { momentsBehindWordsData } from '@/config/reviews-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ReviewsMomentsBehindWords() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const cards = gridRef.current?.querySelectorAll('.inspiration-card');
    if (!cards || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
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
      aria-label="Moments Behind the Words: Decorative Inspiration"
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-20 lg:py-24 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep text-xs font-mono">
              {momentsBehindWordsData.eyebrow}
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
            {momentsBehindWordsData.heading}
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light mb-3">
            {momentsBehindWordsData.description}
          </p>

          <span className="inline-block font-mono text-[11px] text-charcoal/50 uppercase tracking-wider">
            {momentsBehindWordsData.disclaimer}
          </span>
        </div>

        {/* 4-Image Editorial Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {momentsBehindWordsData.images.map((img, idx) => {
            // Asymmetric layout: Item 1 & 4 take 7 cols; Item 2 & 3 take 5 cols
            const colSpan =
              idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            const heightClass =
              idx === 0 || idx === 3
                ? 'h-[320px] sm:h-[360px] lg:h-[400px]'
                : 'h-[320px] sm:h-[360px] lg:h-[400px]';

            return (
              <div
                key={img.id}
                className={`inspiration-card group relative w-full overflow-hidden rounded-xs border border-charcoal/10 bg-champagne/20 select-none ${colSpan} ${heightClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-xs font-semibold text-ivory/80 px-2 py-0.5 bg-charcoal/40 backdrop-blur-xs rounded-[2px] border border-white/10">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-ivory">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-champagne block mb-1">
                    {img.subtitle}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-ivory tracking-tight group-hover:text-gold transition-colors duration-fast">
                    {img.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
