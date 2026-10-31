'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { footerConfig } from '@/config/footer';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 }
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
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

      if (imageWrapperRef.current) {
        tl.fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.5'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('enquiry-form');
    if (target) {
      const yOffset = -90;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={containerRef}
      className="relative w-full bg-[#F7F4EE] text-charcoal pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 border-b border-sand/50 overflow-hidden"
    >
      {/* Decorative Botanical Corner Watermark */}
      <div
        className="pointer-events-none select-none absolute top-4 right-0 w-[180px] sm:w-[240px] opacity-[0.05] z-0 hidden lg:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/journal-corner-floral.webp"
          alt=""
          width={240}
          height={300}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>

      <div className="container-luxury relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-6 sm:w-8 h-px bg-gold" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-gold-dark font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                <span>LET’S CONNECT</span>
              </span>
              <span className="w-6 sm:w-8 h-px bg-gold" aria-hidden="true" />
            </div>

            {/* Main Editorial H1 */}
            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.12] mb-4 sm:mb-5"
            >
              Let’s Create
              <span className="block font-serif italic text-gold-dark">
                Something Beautiful.
              </span>
            </h1>

            {/* Accent phrase in Allura */}
            <p className="font-accent text-3xl sm:text-4xl text-gold mb-4 sm:mb-5 font-normal select-none">
              Your moment starts here.
            </p>

            {/* Supporting Copy */}
            <p
              ref={textRef}
              className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal"
            >
              Every celebration begins with an idea. Tell us about your occasion, and let’s explore how to make it truly special across Tumakuru and South Karnataka.
            </p>

            {/* Action Buttons */}
            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#enquiry-form"
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold hover:text-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md"
              >
                <span>Plan Your Event</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-normal" />
              </a>

              <a
                href={footerConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-gold/40 text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] hover:bg-gold/10 hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Atmospheric Event Photography */}
          <div className="lg:col-span-5 w-full">
            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-sm overflow-hidden bg-sand/30 shadow-xl shadow-charcoal/5 border border-sand"
            >
              <Image
                src="/images/events/art-of-celebration.jpg"
                alt="Handcrafted luxury event floral decoration and ambient lighting by Tumkur Events"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                className="object-cover object-center"
              />
              {/* Subtle gold inner framing ring */}
              <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10 pointer-events-none" />

              {/* Atmospheric Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent p-5 sm:p-6 text-ivory">
                <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-1">
                  Atelier Craftsmanship
                </span>
                <p className="font-display text-sm sm:text-base leading-snug text-ivory/90">
                  Bespoke Mandapams, Florals & Ambient Light
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
