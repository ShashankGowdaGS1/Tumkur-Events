'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { EventCategoryDetail } from '@/config/event-detail-data';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryEssenceProps {
  readonly category: EventCategoryDetail;
}

export function CategoryEssence({ category }: CategoryEssenceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightColRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const { essence } = category;

  return (
    <section
      ref={sectionRef}
      aria-label={`Essence of ${category.title}`}
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5-6 cols): Display Headline & Structured Attributes */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {essence.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight leading-[1.12] mb-6">
              {essence.headline}
              <span className="block font-accent text-gold-deep text-3xl sm:text-4xl lg:text-5xl pt-1">
                {essence.scriptAccent}
              </span>
            </h2>

            {/* Key Celebration Parameters / Attributes Strip */}
            <div className="mt-6 pt-6 border-t border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {essence.attributes.map((attr, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xs bg-champagne/25 border border-charcoal/10 flex flex-col justify-between"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 block mb-1">
                    {attr.label}
                  </span>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-charcoal leading-snug">
                    {attr.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6-7 cols): Narrative copy + Supporting detail photograph */}
          <div ref={rightColRef} className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-8">
              {essence.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Supporting Photographic Detail with Fine Border & Caption */}
            <div className="relative w-full rounded-xs overflow-hidden border border-charcoal/15 shadow-md bg-charcoal-light">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={essence.detailImage}
                  alt={essence.detailImageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-ivory">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                    <span className="font-sans text-xs text-ivory/90 font-medium">
                      Authentic Styling Craft &middot; Tumkur Events
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                    Tumakuru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

