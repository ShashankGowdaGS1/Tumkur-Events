'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function JournalInspiration() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  return (
    <section
      ref={sectionRef}
      aria-label="Editor's Inspiration: The Details We Love"
      className="relative w-full bg-[#181818] text-ivory py-16 sm:py-20 lg:py-24 border-t border-b border-charcoal-light overflow-hidden"
    >
      <div className="container-luxury relative z-10">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto"
        >
          {/* IMAGE STAGE (5 Cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-xs border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.3)] bg-charcoal">
              <Image
                src="/images/decor/faq-decor-detail.jpg"
                alt="Close-up of fresh marigolds, water lilies, and ceremonial brass samai lamps in Tumakuru"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* EDITORIAL CONTENT (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span className="overline-luxury text-gold text-xs font-mono">
                THE DETAILS WE LOVE &middot; EDITORIAL NOTE
              </span>
            </div>

            <h2 className="font-display text-fluid-h2 text-ivory tracking-tight mb-4">
              Beautiful Ideas Begin With the Details.
            </h2>

            <p className="font-sans text-sm sm:text-base lg:text-lg text-silver-light/85 leading-relaxed font-light mb-6 sm:mb-8">
              Explore the colors, textures, and thoughtful touches that shape memorable celebrations. From hand-strung jasmine malas to custom fabric draping, authentic craftsmanship transforms every setting.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md w-full sm:w-auto"
              >
                <span>Discover Styling Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gold/40 text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold/10 hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold w-full sm:w-auto"
              >
                <span>View Inspiration Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
