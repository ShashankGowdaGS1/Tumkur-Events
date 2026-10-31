'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Compass, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export default function NotFound() {
  const containerRef = useRef<HTMLElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (codeRef.current) {
        tl.fromTo(
          codeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 }
        );
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );
      }

      if (bodyRef.current) {
        tl.fromTo(
          bodyRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
      }

      if (actionsRef.current) {
        tl.fromTo(
          actionsRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-[85vh] flex flex-col items-center justify-center bg-[#FDFBF7] text-charcoal px-4 sm:px-6 py-24 sm:py-32 overflow-hidden selection:bg-champagne selection:text-charcoal"
    >
      {/* Subtle Botanical Corner Watermark */}
      <div
        className="pointer-events-none select-none absolute top-6 right-6 w-[160px] sm:w-[220px] opacity-[0.06] z-0 hidden sm:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/journal-corner-floral.webp"
          alt=""
          width={220}
          height={280}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>

      <div className="container-luxury max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
          <span className="w-6 sm:w-8 h-px bg-gold" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
            <span>PAGE NOT FOUND</span>
          </span>
          <span className="w-6 sm:w-8 h-px bg-gold" aria-hidden="true" />
        </div>

        {/* Large Elegant 404 Display */}
        <div ref={codeRef} className="mb-4 sm:mb-6 select-none">
          <span className="font-display text-7xl sm:text-8xl md:text-9xl text-charcoal/90 tracking-tight leading-none block">
            404
          </span>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-4 sm:mb-5 max-w-2xl"
        >
          Looks Like This
          <span className="block font-serif italic text-gold-dark pt-1">
            Moment Has Passed.
          </span>
        </h1>

        {/* Description */}
        <p
          ref={bodyRef}
          className="font-sans text-base sm:text-lg text-charcoal/75 leading-relaxed max-w-lg mb-8 sm:mb-10 font-normal"
        >
          The page or celebration chapter you are seeking may have moved or is no longer available. Let’s help you find your way back.
        </p>

        {/* CTAs */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            href={siteConfig.routes.home}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold hover:text-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-normal" />
            <span>Back to Home</span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href={siteConfig.routes.events}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gold/50 text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] hover:bg-gold/10 hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold"
          >
            <Compass className="w-4 h-4 text-gold" aria-hidden="true" />
            <span>Explore Celebrations</span>
          </Link>
        </div>

        {/* Tertiary Contact Link */}
        <div className="mt-8 pt-6 border-t border-sand/70 text-xs font-mono text-charcoal/60">
          <span>Looking for custom event assistance? </span>
          <Link
            href={siteConfig.routes.contact}
            className="text-gold-dark underline hover:text-gold transition-colors inline-flex items-center gap-1 font-semibold focus-visible:outline-2 focus-visible:outline-gold"
          >
            <MessageSquare className="w-3 h-3 text-gold" aria-hidden="true" />
            <span>Contact Our Concierge</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
