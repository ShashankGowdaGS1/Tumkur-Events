'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Heart, Sparkles } from 'lucide-react';
import { packageCollections } from '@/config/packages-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackageIntimateMoments() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  const pkg = packageCollections[0]; // 01 — Intimate Moments

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textColRef.current,
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
        imageColRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageColRef.current,
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
      aria-label="Collection 01: Intimate Moments"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6 cols): Photography & Floating Supporting Image */}
          <div ref={imageColRef} className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-lg">
              <Image
                src={pkg.image}
                alt={pkg.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 text-[10px] font-mono tracking-widest text-gold uppercase rounded-xs">
                Collection {pkg.number} &middot; {pkg.priceDisplay}
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold block mb-1">
                  Intimate Celebration Atmosphere
                </span>
                <p className="font-display text-xl text-ivory tracking-tight">
                  Pastel balloons, custom arches &amp; cake table pedestals.
                </p>
              </div>
            </div>

            {/* Supporting Floating Detail (Desktop only) */}
            {pkg.supportingImage && (
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 aspect-[4/3] rounded-xs overflow-hidden border-2 border-ivory shadow-xl bg-charcoal">
                <Image
                  src={pkg.supportingImage}
                  alt={pkg.supportingImageAlt ?? ''}
                  fill
                  sizes="224px"
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>

          {/* Right Column (6 cols): Editorial Content & Options */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-gold-deep tracking-widest uppercase">
                COLLECTION {pkg.number}
              </span>
              <span className="h-px w-6 bg-gold-deep" aria-hidden="true" />
              <span className="font-sans text-xs text-charcoal/60 uppercase tracking-wider">
                {pkg.priceDisplay}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.14] mb-4">
              {pkg.headline}
            </h2>

            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6">
              {pkg.description}
            </p>

            {/* Suitable For Tags */}
            <div className="mb-6 p-4 rounded-xs bg-champagne/25 border border-charcoal/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold-deep font-semibold block mb-2">
                IDEALLY SUITED FOR
              </span>
              <div className="flex flex-wrap gap-1.5">
                {pkg.suitableFor.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-xs bg-ivory text-charcoal/85 border border-charcoal/10 font-sans"
                  >
                    &bull; {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Illustrative Styling Options */}
            <div className="space-y-3 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">
                ILLUSTRATIVE STYLING ELEMENTS (CUSTOMIZABLE)
              </span>
              {pkg.options.map((opt, i) => (
                <div key={i} className="flex items-start gap-3">
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

            {/* Action */}
            <div>
              <Link
                href={pkg.enquiryHref}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury shadow-md"
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
