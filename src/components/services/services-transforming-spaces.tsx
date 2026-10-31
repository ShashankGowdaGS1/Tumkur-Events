'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '@/config/services-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServicesTransformingSpaces() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const photoInnerRef = useRef<HTMLDivElement>(null);
  const svc5Ref = useRef<HTMLDivElement>(null);
  const svc6Ref = useRef<HTMLDivElement>(null);

  const svc5 = servicesData[4]; // 05 — Venue & Entrance Styling
  const svc6 = servicesData[5]; // 06 — Decorative Lighting & Details

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Two service blocks reveal
      [svc5Ref.current, svc6Ref.current].forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              once: true,
            },
          }
        );
      });

      // Subtle Parallax on the central atmospheric photo
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        if (photoInnerRef.current) {
          gsap.to(photoInnerRef.current, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: photoContainerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Transforming Spaces Services"
      className="relative w-full bg-charcoal text-ivory py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-charcoal-light"
    >
      {/* Decorative Subtle Gold Botanical Corner */}
      <div
        className="pointer-events-none select-none absolute top-0 right-0 w-[240px] opacity-15 hidden lg:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/golden-hanging-lanterns.webp"
          alt=""
          width={240}
          height={480}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold font-mono">
              IMMERSIVE AMBIENCE &amp; ARRIVAL
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-ivory tracking-tight">
            From the First Impression
            <span className="block text-gold font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              to the final celebratory glow.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-silver-light/85 leading-relaxed mt-4 max-w-2xl font-light">
            Great celebrations don&apos;t happen by accident. They are shaped from the entrance driveway
            to the warm amber glow surrounding late-night conversations.
          </p>
        </div>

        {/* =====================================================================
            CINEMATIC ATMOSPHERIC PHOTO STAGE
           ===================================================================== */}
        <div
          ref={photoContainerRef}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xs overflow-hidden border border-charcoal-light mb-16 sm:mb-24 shadow-2xl bg-charcoal-light"
        >
          <div ref={photoInnerRef} className="relative w-full h-[120%] -top-[10%]">
            <Image
              src="/images/events/final-cta-canopy.jpg"
              alt="Atmospheric entrance walkway with fairy lights and floral canopies by Tumkur Events"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-ivory">
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold">
                Atmospheric Spatial Craft &middot; Tumakuru
              </span>
              <span className="font-sans text-xs text-silver-light/70 hidden sm:inline-block">
                Entrance Canopies &amp; Warm Illumination
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            TWO DISTINCT EDITORIAL SERVICE CONTENT BLOCKS
            Service 05 (Venue & Entrance) + Service 06 (Decorative Lighting)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Service 05 Block */}
          <div
            id={svc5.anchorId}
            ref={svc5Ref}
            className="p-8 sm:p-10 rounded-xs bg-[#191919] border border-charcoal-light flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-gold uppercase tracking-widest">
                  DISCIPLINE {svc5.number}
                </span>
                <span className="font-mono text-[11px] text-silver-light/50 uppercase">
                  Arrival Styling
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-ivory tracking-tight mb-4">
                {svc5.title}
              </h3>

              <p className="font-sans text-sm text-silver-light/85 leading-relaxed font-light mb-6">
                {svc5.description}
              </p>

              <div className="space-y-2.5 mb-8">
                {svc5.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-gold" aria-hidden="true" />
                    </div>
                    <span className="font-sans text-xs text-silver-light/90 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal-light">
              <Link
                href={`/contact?service=${svc5.enquirySlug}`}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
              >
                <span>Enquire About {svc5.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5 text-charcoal transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Service 06 Block */}
          <div
            id={svc6.anchorId}
            ref={svc6Ref}
            className="p-8 sm:p-10 rounded-xs bg-[#191919] border border-charcoal-light flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-gold uppercase tracking-widest">
                  DISCIPLINE {svc6.number}
                </span>
                <span className="font-mono text-[11px] text-silver-light/50 uppercase">
                  Lighting &amp; Details
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-ivory tracking-tight mb-4">
                {svc6.title}
              </h3>

              <p className="font-sans text-sm text-silver-light/85 leading-relaxed font-light mb-6">
                {svc6.description}
              </p>

              <div className="space-y-2.5 mb-8">
                {svc6.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-gold" aria-hidden="true" />
                    </div>
                    <span className="font-sans text-xs text-silver-light/90 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal-light">
              <Link
                href={`/contact?service=${svc6.enquirySlug}`}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-colors"
              >
                <span>Enquire About {svc6.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5 text-charcoal transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
