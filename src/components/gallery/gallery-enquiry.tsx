'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { galleryEnquiryData } from '@/config/gallery';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function GalleryEnquiry() {
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

  const whatsappMessage = encodeURIComponent(
    'Hello Tumkur Events, I explored your celebration gallery and would like to discuss decoration and styling for an upcoming event in Tumakuru.'
  );
  const whatsappUrl = `${siteConfig.social.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      ref={sectionRef}
      aria-label="Enquire About Your Celebration"
      className="relative w-full bg-charcoal text-ivory py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-charcoal-light"
    >
      {/* Decorative Gold Lanterns Watermark */}
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
        <div ref={containerRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold text-xs">
              {galleryEnquiryData.eyebrow}
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ivory tracking-tight leading-[1.12] mb-5 sm:mb-6">
            Imagine What We Could
            <span className="block font-accent text-gold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl pt-1">
              Create for You.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-silver-light/85 max-w-2xl leading-relaxed mb-8 sm:mb-12 font-light">
            {galleryEnquiryData.supporting}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-8">
            <Link
              href={galleryEnquiryData.primaryHref}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-lg shadow-gold/10 w-full sm:w-auto"
            >
              <span>{galleryEnquiryData.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-normal" aria-hidden="true" />
            </Link>

            <Link
              href={galleryEnquiryData.secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 border border-gold/40 text-ivory text-xs sm:text-sm font-medium uppercase tracking-[0.16em] hover:bg-gold/10 hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold w-full sm:w-auto"
            >
              <span>{galleryEnquiryData.secondaryCta}</span>
            </Link>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="pt-6 border-t border-charcoal-light/60 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-silver-light/70 font-mono">
            <span>Prefer instant WhatsApp consultation?</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-gold"
            >
              <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Chat with Our Decor Team (+91 80734 50547)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
