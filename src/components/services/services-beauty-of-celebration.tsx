'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { servicesData, ServiceDetailItem } from '@/config/services-page';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServicesBeautyOfCelebration() {
  const svc3 = servicesData[2]; // 03 — Balloon & Themed Installations
  const svc4 = servicesData[3]; // 04 — Stage & Backdrop Design

  const [activeTab, setActiveTab] = useState<'balloon' | 'stage'>('balloon');
  const activeSvc: ServiceDetailItem = activeTab === 'balloon' ? svc3 : svc4;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stageDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
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
    }, section);

    return () => ctx.revert();
  }, []);

  const handleTabChange = (tab: 'balloon' | 'stage') => {
    if (tab === activeTab) return;

    if (prefersReducedMotion()) {
      setActiveTab(tab);
      return;
    }

    if (stageDisplayRef.current) {
      gsap.fromTo(
        stageDisplayRef.current,
        { opacity: 0.4, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
    setActiveTab(tab);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="The Beauty of Celebration Services"
      className="relative w-full bg-[#E8DFCF] text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep font-mono">
              EXPRESSIVE ARTISTRY &amp; ARCHITECTURE
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            The Beauty of Celebration.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Imaginative balloons, statement stages, and bespoke backdrops.
            </span>
          </h2>
        </div>

        {/* =====================================================================
            DUAL-SERVICE INTERACTIVE SHOWCASE
            Toggle between Service 03 (Balloon & Themed) and Service 04 (Stage & Backdrop)
           ===================================================================== */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            type="button"
            id={svc3.anchorId}
            onClick={() => handleTabChange('balloon')}
            className={cn(
              'px-6 py-3 rounded-xs font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold',
              activeTab === 'balloon'
                ? 'bg-charcoal text-ivory shadow-md border-b-2 border-gold-deep'
                : 'bg-ivory/60 text-charcoal/70 hover:bg-ivory hover:text-charcoal border border-charcoal/10'
            )}
          >
            03 &middot; {svc3.title}
          </button>

          <button
            type="button"
            id={svc4.anchorId}
            onClick={() => handleTabChange('stage')}
            className={cn(
              'px-6 py-3 rounded-xs font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold',
              activeTab === 'stage'
                ? 'bg-charcoal text-ivory shadow-md border-b-2 border-gold-deep'
                : 'bg-ivory/60 text-charcoal/70 hover:bg-ivory hover:text-charcoal border border-charcoal/10'
            )}
          >
            04 &middot; {svc4.title}
          </button>
        </div>

        {/* Dynamic Display Area */}
        <div
          ref={stageDisplayRef}
          className="rounded-xs overflow-hidden border border-charcoal/15 bg-ivory shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Image Showcase (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] bg-charcoal">
              <Image
                src={activeSvc.image}
                alt={activeSvc.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-charcoal/85 backdrop-blur-md border border-gold/40 text-[10px] font-mono tracking-widest text-gold uppercase rounded-xs">
                Discipline {activeSvc.number} &middot; Tumkur Events
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold block mb-1">
                  {activeSvc.tagline}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-ivory tracking-tight">
                  {activeSvc.headline}
                </h3>
              </div>
            </div>

            {/* Right Editorial Tray (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-ivory">
              <div>
                <span className="font-mono text-xs font-semibold text-gold-deep uppercase tracking-widest block mb-3">
                  CRAFT SPECIFICATION
                </span>

                <h4 className="font-display text-xl sm:text-2xl text-charcoal tracking-tight mb-4">
                  {activeSvc.title}
                </h4>

                <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light mb-6">
                  {activeSvc.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {activeSvc.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-gold-deep/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-gold-deep" aria-hidden="true" />
                      </div>
                      <span className="font-sans text-xs text-charcoal/85 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href={`/contact?service=${activeSvc.enquirySlug}`}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-colors"
                >
                  <span>Enquire for {activeSvc.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="font-mono text-xs text-charcoal/60">
                  Custom sizes available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
