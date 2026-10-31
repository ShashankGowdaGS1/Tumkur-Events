'use client';

import React, { useRef, useEffect } from 'react';
import { aboutManifestoData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutCelebrationManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Gentle progressive reveal of the manifesto lines
      const textLines = containerRef.current?.querySelectorAll('.manifesto-line');
      if (textLines && textLines.length) {
        gsap.fromTo(
          textLines,
          { opacity: 0.25, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      // Gentle expansion of the gold line
      if (goldLineRef.current) {
        gsap.fromTo(
          goldLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="What Celebrations Mean to Us"
      className="relative w-full bg-[#151515] text-ivory py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-b border-charcoal-light flex items-center justify-center"
    >
      <div className="container-luxury relative z-10 text-center">
        <div ref={containerRef} className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold text-xs font-mono">
              {aboutManifestoData.eyebrow}
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
          </div>

          {/* Lead Statement */}
          <p className="manifesto-line font-display text-fluid-h2 text-ivory/80 tracking-tight leading-[1.14] mb-6 sm:mb-8 max-w-2xl">
            {aboutManifestoData.lead}
          </p>

          {/* Core Emotional Lines */}
          <div className="space-y-2 sm:space-y-4 mb-8 sm:mb-10">
            {aboutManifestoData.lines.map((line, idx) => (
              <p
                key={idx}
                className="manifesto-line font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ivory tracking-tight font-medium"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Delicate Expanding Gold Line */}
          <div
            ref={goldLineRef}
            className="w-24 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mb-6 sm:mb-8 origin-center"
            aria-hidden="true"
          />

          {/* Accent Script */}
          <p className="manifesto-line font-accent text-3xl sm:text-4xl lg:text-5xl text-gold font-normal">
            {aboutManifestoData.accentPhrase}
          </p>
        </div>
      </div>
    </section>
  );
}
