'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { planningAssuranceSteps } from '@/config/events-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PlanningAssurance() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsColRef = useRef<HTMLDivElement>(null);
  const photoColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Steps column entrance
      gsap.fromTo(
        stepsColRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsColRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Photo column entrance
      gsap.fromTo(
        photoColRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: photoColRef.current,
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
      aria-label="Planning Assurance"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols): Editorial Heading & 3 Clear Steps */}
          <div ref={stepsColRef} className="lg:col-span-7">
            <div ref={headerRef} className="mb-8 sm:mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
                <span className="overline-luxury text-gold-deep">PLANNING WITH CONFIDENCE</span>
              </div>

              <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
                Your Occasion.
                <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
                  Our Thoughtful Touch.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-xl font-light">
                Planning an event should feel inspiring, not overwhelming. Here is how we collaborate
                to translate your vision into a seamlessly styled celebration.
              </p>
            </div>

            {/* 3 Numbered Steps with Clean Dividers */}
            <div className="flex flex-col divide-y divide-charcoal/10 border-y border-charcoal/10 mb-8">
              {planningAssuranceSteps.map((step) => (
                <div key={step.number} className="py-4 sm:py-5 flex items-start gap-4 sm:gap-6">
                  <span className="font-mono text-sm sm:text-base text-gold-deep font-bold tracking-widest pt-0.5 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-charcoal tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Link to Full Process */}
            <div>
              <Link
                href="/#how-we-work"
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase font-semibold tracking-widest text-charcoal hover:text-gold-deep transition-colors"
              >
                <span>Read About Our Complete Working Process</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-normal ease-luxury group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Atmospheric Detail Photo */}
          <div ref={photoColRef} className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs border border-charcoal/15 bg-charcoal shadow-md">
              <Image
                src="/images/decor/faq-decor-detail.jpg"
                alt="Artisanal celebration decor and floral arrangements by Tumkur Events"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-0.5">
                  HANDCRAFTED EXCELLENCE
                </span>
                <p className="font-display text-base text-ivory">
                  From delicate florals to statement stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

