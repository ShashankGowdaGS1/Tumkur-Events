'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { aboutStoryData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutOurStory() {
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
        { opacity: 0, y: 26 },
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
      id="our-story"
      ref={sectionRef}
      aria-label="Our Story"
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 scroll-mt-24 overflow-hidden"
    >
      <div className="container-luxury">
        <div ref={containerRef} className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8 sm:mb-12">
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep text-xs font-mono">
              {aboutStoryData.sectionNumber}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT COLUMN: LARGE DISPLAY STATEMENT */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight leading-[1.14]">
                &ldquo;{aboutStoryData.statement}&rdquo;
              </h2>
              <div className="h-0.5 w-16 bg-gold-deep/40 mt-6 sm:mt-8" aria-hidden="true" />
            </div>

            {/* RIGHT COLUMN: EDITORIAL NARRATIVE & OFFSET DETAIL PHOTO */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
              <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight">
                {aboutStoryData.heading}
              </h3>

              <div className="space-y-4 sm:space-y-5 font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                {aboutStoryData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Offset Detail Photograph */}
              <div className="mt-4 pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                <div className="relative w-full sm:w-[180px] h-[120px] rounded-xs overflow-hidden shrink-0 border border-charcoal/10 shadow-sm bg-champagne/20">
                  <Image
                    src={aboutStoryData.detailImage}
                    alt={aboutStoryData.detailImageAlt}
                    fill
                    sizes="180px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold-deep block mb-1">
                    Authentic Cultural Reverence
                  </span>
                  <p className="font-display text-sm sm:text-base text-charcoal">
                    {aboutStoryData.detailCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
