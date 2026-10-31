'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '@/config/services-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServicesArtOfStyling() {
  const sectionRef = useRef<HTMLElement>(null);
  const svc1Ref = useRef<HTMLDivElement>(null);
  const svc2Ref = useRef<HTMLDivElement>(null);

  const svc1 = servicesData[0]; // 01 — Event Concept & Theme Styling
  const svc2 = servicesData[1]; // 02 — Floral & Traditional Décor

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      [svc1Ref.current, svc2Ref.current].forEach((block) => {
        if (!block) return;

        gsap.fromTo(
          block.querySelectorAll('[data-reveal]'),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="The Art of Styling Services"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10 space-y-24 sm:space-y-32">
        {/* =====================================================================
            SERVICE 01: EVENT CONCEPT & THEME STYLING
            Asymmetric Composition: Left Narrative & Details, Right Offset Image Pair
           ===================================================================== */}
        <div
          id={svc1.anchorId}
          ref={svc1Ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div data-reveal className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                DISCIPLINE {svc1.number}
              </span>
              <span className="h-px w-6 bg-gold-deep" aria-hidden="true" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
                {svc1.title}
              </span>
            </div>

            <h2 data-reveal className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.14] mb-5">
              {svc1.headline}
            </h2>

            <p data-reveal className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6">
              {svc1.description}
            </p>

            {/* Feature Bullets */}
            <div data-reveal className="space-y-2.5 mb-8">
              {svc1.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-champagne/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold-deep" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div data-reveal>
              <Link
                href={`/contact?service=${svc1.enquirySlug}`}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury shadow-md"
              >
                <span>Enquire About {svc1.shortTitle}</span>
                <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Offset Image Composition (6 cols) */}
          <div data-reveal className="lg:col-span-6 relative">
            {/* Primary Dominant Image */}
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-lg">
              <Image
                src={svc1.image}
                alt={svc1.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-4 right-4 text-ivory text-xs font-mono tracking-wider">
                Custom Concept Mood Board &middot; Tumkur Events
              </div>
            </div>

            {/* Secondary Floating Supporting Detail */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-56 lg:w-64 aspect-[4/3] rounded-xs overflow-hidden border-2 border-ivory shadow-xl bg-charcoal">
              <Image
                src={svc1.supportingImage}
                alt={svc1.supportingImageAlt}
                fill
                sizes="256px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* =====================================================================
            SERVICE 02: FLORAL & TRADITIONAL DÉCOR
            Reversed Asymmetric Composition: Left Offset Images, Right Narrative
           ===================================================================== */}
        <div
          id={svc2.anchorId}
          ref={svc2Ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 sm:pt-12"
        >
          {/* Offset Image Composition (6 cols) */}
          <div data-reveal className="lg:col-span-6 relative order-2 lg:order-1">
            {/* Primary Dominant Image */}
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-lg">
              <Image
                src={svc2.image}
                alt={svc2.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-4 right-4 text-ivory text-xs font-mono tracking-wider">
                Fresh Marigold &amp; Jasmine Garland Craft &middot; Tumakuru
              </div>
            </div>

            {/* Secondary Floating Supporting Detail */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 lg:w-64 aspect-[4/3] rounded-xs overflow-hidden border-2 border-ivory shadow-xl bg-charcoal">
              <Image
                src={svc2.supportingImage}
                alt={svc2.supportingImageAlt}
                fill
                sizes="256px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <div data-reveal className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                DISCIPLINE {svc2.number}
              </span>
              <span className="h-px w-6 bg-gold-deep" aria-hidden="true" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
                {svc2.title}
              </span>
            </div>

            <h2 data-reveal className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.14] mb-5">
              {svc2.headline}
            </h2>

            <p data-reveal className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6">
              {svc2.description}
            </p>

            {/* Feature Bullets */}
            <div data-reveal className="space-y-2.5 mb-8">
              {svc2.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-champagne/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold-deep" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div data-reveal>
              <Link
                href={`/contact?service=${svc2.enquirySlug}`}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury shadow-md"
              >
                <span>Enquire About {svc2.shortTitle}</span>
                <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
