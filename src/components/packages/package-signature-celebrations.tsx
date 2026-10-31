'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { packageCollections } from '@/config/packages-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackageSignatureCelebrations() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoStageRef = useRef<HTMLDivElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);

  const pkg = packageCollections[1]; // 02 — Signature Celebrations

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        photoStageRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: photoStageRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        contentCardRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentCardRef.current,
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
      id={pkg.anchorId}
      ref={sectionRef}
      aria-label="Collection 02: Signature Celebrations"
      className="relative w-full bg-[#E8DFCF] text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
              COLLECTION {pkg.number}
            </span>
            <span className="h-px w-6 bg-gold-deep" aria-hidden="true" />
            <span className="font-sans text-xs text-charcoal/70 uppercase tracking-wider">
              {pkg.priceDisplay}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.14]">
            {pkg.headline}
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed mt-4 max-w-2xl font-light">
            {pkg.description}
          </p>
        </div>

        {/* =====================================================================
            PROMINENT ASYMMETRIC PHOTOGRAPHIC SHOWCASE + BALANCED CONTENT TRAY
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-10">
          {/* Main Visual Stage (7 cols) */}
          <div
            ref={photoStageRef}
            className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-xl"
          >
            <Image
              src={pkg.image}
              alt={pkg.imageAlt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 text-[10px] font-mono tracking-widest text-gold uppercase rounded-xs">
              Collection {pkg.number} &middot; {pkg.priceDisplay}
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold block mb-1">
                Authentic South Karnataka Craftsmanship
              </span>
              <p className="font-display text-xl sm:text-2xl text-ivory tracking-tight">
                Fresh Sevanti marigolds, heirloom brass samai &amp; traditional mandap styling.
              </p>
            </div>
          </div>

          {/* Detailed Content & Illustrative Options (5 cols) */}
          <div
            ref={contentCardRef}
            className="lg:col-span-5 p-6 sm:p-8 lg:p-10 rounded-xs bg-ivory border border-charcoal/15 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Suitable For */}
              <div className="mb-6 pb-6 border-b border-charcoal/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-deep font-semibold block mb-2">
                  IDEALLY SUITED FOR
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.suitableFor.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-xs bg-champagne/30 text-charcoal/85 border border-charcoal/10 font-sans"
                    >
                      &bull; {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Illustrative Options */}
              <div className="space-y-3 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">
                  ILLUSTRATIVE STYLING ELEMENTS
                </span>
                {pkg.options.map((opt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-gold-deep/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-gold-deep" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs sm:text-sm text-charcoal font-semibold">
                        {opt.title}
                      </h4>
                      <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                        {opt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
              <Link
                href={pkg.enquiryHref}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-colors shadow-md w-full sm:w-auto justify-center"
              >
                <span>Enquire About {pkg.title}</span>
                <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
