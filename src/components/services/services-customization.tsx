'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Palette, Sliders, MapPin, WalletCards } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServicesCustomization() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const items = gridRef.current?.querySelectorAll('[data-custom-card]');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const dimensions = [
    {
      icon: MapPin,
      title: 'Occasion & Venue Fit',
      desc: 'Whether decorating an intimate family living room, a rooftop lawn, a resort lawn, or a grand Kalyana Mantapa, styling dimensions are tailored to the physical space.',
    },
    {
      icon: Palette,
      title: 'Theme & Palette Direction',
      desc: 'From custom double-stuffed pastel balloons to sacred yellow marigold and blush rose floral compositions, palettes match your vision, attire, and stationery.',
    },
    {
      icon: Sliders,
      title: 'Decorative Materials & Craft',
      desc: 'Choose between fresh fragrant botanicals, bespoke arched wooden panels, acrylic signage, carved temple pillars, or contemporary metallic truss framework.',
    },
    {
      icon: Compass,
      title: 'Scale & Spatial Arrangement',
      desc: 'From a simple elegant cake table with backdrop to a comprehensive 360-degree event transformation encompassing entrance, mandap, dining, and photo corners.',
    },
    {
      icon: WalletCards,
      title: 'Transparent Budget Planning',
      desc: 'We provide itemized quotations and adaptable decor scopes tailored to your priorities without pushing rigid, one-size-fits-all package tiers.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Customization Possibilities"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep font-mono">
              TAILORED BESPOKE CRAFT
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Every Detail, Your Way.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Crafted around your individual story.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            No two celebrations in Tumakuru are ever alike. Rather than forcing you into rigid templates,
            our decoration scope adapts to your chosen venue, family customs, and aesthetic preferences.
          </p>
        </div>

        {/* 5-Column Tailoring Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 mb-12 sm:mb-16"
        >
          {dimensions.map((dim, i) => {
            const Icon = dim.icon;

            return (
              <div
                key={i}
                data-custom-card
                className="p-6 rounded-xs bg-[#FAF7F2] border border-charcoal/10 hover:border-gold-deep/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-champagne/40 flex items-center justify-center mb-4 text-gold-deep">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-display text-lg text-charcoal tracking-tight mb-2">
                    {dim.title}
                  </h3>

                  <p className="font-sans text-xs text-charcoal/75 leading-relaxed font-light">
                    {dim.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro-Texture Photo Row & Narrative Callout */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-xs bg-champagne/30 border border-charcoal/15 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-gold-deep uppercase tracking-widest font-semibold block mb-2">
              PERSONAL CONSULTATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight mb-3">
              Ready to shape your celebration decor?
            </h3>
            <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light">
              Share your date, venue, and vision. We will walk you through material options, flower seasonalities,
              and structural configurations before drafting a tailored proposal.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contact?source=custom-estimate"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-colors shadow-md w-full sm:w-auto"
            >
              <span>Request a Custom Estimate</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
