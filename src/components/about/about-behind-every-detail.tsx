'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { behindDetailsData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutBehindEveryDetail() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const cards = gridRef.current?.querySelectorAll('.detail-card');
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
      aria-label="Behind Every Detail: Craftsmanship Highlights"
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep text-xs font-mono">
              {behindDetailsData.eyebrow}
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
            {behindDetailsData.heading}
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
            {behindDetailsData.description}
          </p>
        </div>

        {/* 4-Image Asymmetric Collage Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {behindDetailsData.items.map((item, idx) => (
            <div
              key={item.id}
              className={`detail-card group relative w-full overflow-hidden rounded-xs border border-charcoal/10 bg-champagne/20 select-none ${item.span} ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent pointer-events-none" />

              {/* Number Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="font-mono text-xs font-semibold text-ivory/80 px-2 py-0.5 bg-charcoal/40 backdrop-blur-xs rounded-[2px] border border-white/10">
                  0{idx + 1}
                </span>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-ivory pointer-events-none">
                <span className="font-mono text-[10px] tracking-widest uppercase text-champagne block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-display text-lg sm:text-xl text-ivory tracking-tight group-hover:text-gold transition-colors duration-fast">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
