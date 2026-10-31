'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function PackagesBespoke() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const photoColRef = useRef<HTMLDivElement>(null);

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

  const bespokePoints = [
    'Unique cultural ceremonies and multi-day family milestones',
    'Custom color palettes matching heirloom sarees or bridal attire',
    'Unconventional venues: farmhouses, private gardens & open rooftops',
    'Specialized imported blooms, floral arches, or suspended floral clouds',
    'Tailored budgets and phased setups across multiple ceremony days',
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Bespoke Celebration Commissions"
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols): Editorial Invitation */}
          <div ref={textColRef} className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep font-mono">
                BESPOKE COMMISSIONS &middot; TUMAKURU
              </span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight leading-[1.12] mb-6">
              Your Occasion.
              <span className="block font-accent text-gold-deep text-3xl sm:text-4xl lg:text-5xl pt-1">
                Your Vision. Our Craft.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-6 max-w-xl">
              Have an event that falls outside our three standard collections? Whether you are envisioning an intimate poolside cocktail, an elaborate multi-generation golden jubilee, or a rare cultural ceremony with specific Vedic specifications, we are delighted to curate an entirely custom design.
            </p>

            <div className="space-y-2.5 mb-8">
              {bespokePoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-deep shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-charcoal/85">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact?source=bespoke-packages"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury shadow-md"
              >
                <span>Request a Custom Estimate</span>
                <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>

              <span className="font-mono text-xs text-charcoal/50 uppercase tracking-widest">
                No Obligation Initial Consultation
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Atmospheric Craft Photo */}
          <div ref={photoColRef} className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-xl">
              <Image
                src="/images/events/special-occasions.jpg"
                alt="Intimate custom celebration dining table with ambient fairy lights and candlelit florals in Tumakuru"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold block mb-1">
                  Custom Milestone Commission
                </span>
                <p className="font-display text-lg text-ivory tracking-tight">
                  Tailored candlelit lawn banquet in Tumakuru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
