'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { exploreWorldData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutExploreOurWorld() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const cards = gridRef.current?.querySelectorAll('.explore-card');
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
      aria-label="Explore Tumkur Events"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {exploreWorldData.eyebrow}
              </span>
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
              {exploreWorldData.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
              {exploreWorldData.description}
            </p>
          </div>

          {/* 3 Navigation Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {exploreWorldData.links.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="explore-card group relative flex flex-col rounded-xs overflow-hidden border border-charcoal/10 bg-[#FAF7F2] transition-all duration-normal hover:shadow-[0_12px_36px_rgba(21,21,21,0.08)] hover:border-gold-deep/40"
              >
                {/* Image Stage */}
                <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden bg-champagne/20">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="font-mono text-xs font-semibold text-ivory px-2 py-0.5 bg-charcoal/50 backdrop-blur-xs rounded-[2px] border border-white/10">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-charcoal tracking-tight mb-2 group-hover:text-gold-deep transition-colors duration-fast">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light mb-6">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-gold-deep transition-colors">
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
