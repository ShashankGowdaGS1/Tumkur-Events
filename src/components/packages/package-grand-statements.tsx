'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { packageCollections } from '@/config/packages-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackageGrandStatements() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  const pkg = packageCollections[2]; // 03 — Grand Statements

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
      aria-label="Collection 03: Grand Statements"
      className="relative w-full bg-charcoal text-ivory py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-charcoal-light"
    >
      {/* Decorative Subtle Gold Hanging Lanterns Watermark */}
      <div
        className="pointer-events-none select-none absolute top-0 right-4 lg:right-12 w-[140px] lg:w-[185px] opacity-[0.16] z-0 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/golden-hanging-lanterns.webp"
          alt=""
          width={175}
          height={385}
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(199,158,34,0.18)]"
          priority={false}
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6 cols): Editorial Narrative & Detailed Options */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold text-gold tracking-widest uppercase">
                COLLECTION {pkg.number}
              </span>
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              <span className="font-mono text-xs text-silver-light/70 uppercase tracking-wider">
                {pkg.priceDisplay}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight leading-[1.14] mb-4">
              {pkg.headline}
            </h2>

            <p className="font-sans text-sm sm:text-base text-silver-light/85 leading-relaxed font-light mb-6">
              {pkg.description}
            </p>

            {/* Suitable For Tags */}
            <div className="mb-6 p-4 rounded-xs bg-[#1a1a1a] border border-charcoal-light">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">
                IDEALLY SUITED FOR
              </span>
              <div className="flex flex-wrap gap-1.5">
                {pkg.suitableFor.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-xs bg-charcoal text-silver-light border border-charcoal-light font-sans"
                  >
                    &bull; {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Illustrative Styling Options */}
            <div className="space-y-3 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-silver-light/60 font-semibold block">
                ILLUSTRATIVE STYLING POSSIBILITIES (CUSTOMIZABLE)
              </span>
              {pkg.options.map((opt, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm text-ivory font-semibold">
                      {opt.title}
                    </h4>
                    <p className="font-sans text-xs text-silver-light/75 leading-relaxed font-light">
                      {opt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href={pkg.enquiryHref}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury shadow-lg shadow-gold/15"
              >
                <span>Enquire About {pkg.title}</span>
                <ArrowRight className="w-4 h-4 text-charcoal transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): Monumental Architectural Photography */}
          <div ref={imageColRef} className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden border border-charcoal-light bg-charcoal shadow-2xl">
              <Image
                src={pkg.image}
                alt={pkg.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 text-[10px] font-mono tracking-widest text-gold uppercase rounded-xs">
                Collection {pkg.number} &middot; {pkg.priceDisplay}
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold block mb-1">
                  Panoramic Floral Architecture &middot; Tumakuru
                </span>
                <p className="font-display text-xl sm:text-2xl text-ivory tracking-tight">
                  Curved arches, crystal chandeliers &amp; concert-grade lighting.
                </p>
              </div>
            </div>

            {/* Secondary Supporting Image (Desktop) */}
            {pkg.supportingImage && (
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-60 aspect-[4/3] rounded-xs overflow-hidden border-2 border-charcoal-light shadow-2xl bg-charcoal">
                <Image
                  src={pkg.supportingImage}
                  alt={pkg.supportingImageAlt ?? ''}
                  fill
                  sizes="240px"
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
