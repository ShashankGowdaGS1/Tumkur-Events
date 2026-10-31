'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(
        [
          eyebrowRef.current,
          headlineLine1Ref.current,
          headlineLine2Ref.current,
          descRef.current,
          ctaGroupRef.current,
          scrollIndicatorRef.current,
          imageContainerRef.current,
          imageInnerRef.current,
        ],
        { opacity: 1, y: 0, scale: 1, clearProps: 'all' }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      gsap.set(headlineLine1Ref.current, { opacity: 0, y: 32 });
      gsap.set(headlineLine2Ref.current, { opacity: 0, y: 24 });
      gsap.set(descRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaGroupRef.current, { opacity: 0, y: 16 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });

      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, {
          clipPath: 'inset(4% 0% 4% 0%)',
          opacity: 0.9,
        });
      }
      if (imageInnerRef.current) {
        gsap.set(imageInnerRef.current, { scale: 1.08 });
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to(imageContainerRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        duration: 1.1,
        ease: 'power3.inOut',
      })
        .to(imageInnerRef.current, { scale: 1, duration: 1.3, ease: 'power2.out' }, 0.1)
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.3)
        .to(headlineLine1Ref.current, { opacity: 1, y: 0, duration: 0.75 }, 0.45)
        .to(headlineLine2Ref.current, { opacity: 1, y: 0, duration: 0.75 }, 0.6)
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.75)
        .to(ctaGroupRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.9)
        .to(scrollIndicatorRef.current, { opacity: 1, duration: 0.6 }, 1.05);

      // Parallax on image on desktop
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        if (imageInnerRef.current) {
          gsap.to(imageInnerRef.current, {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('service-index');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Services Hero"
      className="relative w-full min-h-[82svh] lg:min-h-[88svh] flex flex-col justify-between bg-charcoal text-ivory pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden border-b border-charcoal-light"
    >
      {/* Background High-Craft Stage Photography */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div ref={imageInnerRef} className="relative w-full h-full">
          <Image
            src="/images/events/weddings.jpg"
            alt="Exquisite luxury wedding and celebration floral stage craftsmanship in Tumakuru"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center sm:object-[center_35%]"
          />

          {/* Carefully tuned cinematic scrim (preserving photo depth & guaranteeing contrast) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/45"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent lg:w-3/4"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorative Subtle Corner Lantern Watermark */}
      <div
        className="pointer-events-none select-none absolute top-4 right-4 lg:right-12 z-10 w-[140px] lg:w-[190px] opacity-20 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/decor/golden-hanging-lanterns.webp"
          alt=""
          width={190}
          height={380}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>

      {/* Main Content Container */}
      <div className="container-luxury relative z-10 my-auto">
        {/* Eyebrow Label */}
        <div ref={eyebrowRef} className="inline-flex items-center gap-3 mb-4 sm:mb-6">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold font-semibold">
            OUR EXPERTISE &middot; TUMAKURU
          </span>
        </div>

        {/* Editorial Headline with Script Accent */}
        <h1 className="leading-[1.08] tracking-tight max-w-3xl mb-5 sm:mb-7">
          <span
            ref={headlineLine1Ref}
            className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ivory"
          >
            The Art Behind
          </span>
          <span
            ref={headlineLine2Ref}
            className="block font-accent text-gold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl pt-1 sm:pt-2 font-normal"
          >
            Every Celebration.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p
          ref={descRef}
          className="font-sans text-base sm:text-lg lg:text-xl text-silver-light/90 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-light"
        >
          From the first creative idea to the final beautiful detail, we shape spaces that make your most meaningful moments extraordinary across Tumakuru.
        </p>

        {/* Dual Actions */}
        <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={scrollToServices}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-lg shadow-gold/15"
          >
            <span>Explore Our Services</span>
            <ArrowDown
              className="w-4 h-4 text-charcoal transition-transform duration-normal ease-luxury group-hover:translate-y-1"
              aria-hidden="true"
            />
          </button>

          <Link
            href="/contact?source=services-hero"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xs border border-ivory/20 text-ivory hover:border-gold hover:text-gold text-xs sm:text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold backdrop-blur-sm"
          >
            <span>Discuss Your Event</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Scroll Discovery Indicator */}
      <div className="container-luxury relative z-10 pt-8 sm:pt-12">
        <button
          ref={scrollIndicatorRef}
          type="button"
          onClick={scrollToServices}
          aria-label="Scroll down to services index"
          className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.2em] text-silver-light/60 hover:text-gold transition-colors group cursor-pointer"
        >
          <span className="w-6 h-px bg-gold/50 group-hover:w-10 transition-all duration-300" />
          <span>Six Creative Disciplines</span>
          <ArrowDown className="w-3 h-3 text-gold animate-bounce" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
