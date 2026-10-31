'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutApproachData } from '@/config/about-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function AboutOurApproach() {
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
      aria-label="Our Styling Approach"
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-24 lg:py-28 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        <div ref={containerRef} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                {aboutApproachData.eyebrow}
              </span>
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
              {aboutApproachData.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
              {aboutApproachData.description}
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {aboutApproachData.steps.map((step) => (
              <div
                key={step.number}
                className="p-6 sm:p-8 rounded-xs bg-ivory border border-charcoal/10 flex flex-col justify-between shadow-xs hover:border-gold-deep/40 transition-all duration-normal"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl sm:text-2xl font-semibold text-gold-deep">
                      {step.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-deep/40" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-charcoal tracking-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Central CTA */}
          <div className="text-center">
            <Link
              href={aboutApproachData.ctaHref}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md"
            >
              <span>{aboutApproachData.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
