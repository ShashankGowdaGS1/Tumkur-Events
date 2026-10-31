'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ChevronRight } from 'lucide-react';
import { EventCategoryDetail } from '@/config/event-detail-data';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryHeroProps {
  readonly category: EventCategoryDetail;
}

export function CategoryHero({ category }: CategoryHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLSpanElement>(null);
  const headline2Ref = useRef<HTMLSpanElement>(null);
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
          breadcrumbRef.current,
          eyebrowRef.current,
          headline1Ref.current,
          headline2Ref.current,
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
      gsap.set(breadcrumbRef.current, { opacity: 0, y: -10 });
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      gsap.set(headline1Ref.current, { opacity: 0, y: 32 });
      gsap.set(headline2Ref.current, { opacity: 0, y: 24 });
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
        .to(breadcrumbRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.4)
        .to(headline1Ref.current, { opacity: 1, y: 0, duration: 0.75 }, 0.5)
        .to(headline2Ref.current, { opacity: 1, y: 0, duration: 0.75 }, 0.65)
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
        .to(ctaGroupRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.95)
        .to(scrollIndicatorRef.current, { opacity: 1, duration: 0.6 }, 1.1);

      // Parallax on image on desktop
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        if (imageInnerRef.current) {
          gsap.to(imageInnerRef.current, {
            yPercent: 10,
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

  const scrollToConcepts = () => {
    const el = document.getElementById('concepts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label={`${category.title} Hero`}
      className="relative w-full min-h-[80svh] lg:min-h-[88svh] flex flex-col justify-between bg-charcoal text-ivory pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden border-b border-charcoal-light"
    >
      {/* Background Hero Image with Category-Specific Focal Point */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div ref={imageInnerRef} className="relative w-full h-full">
          <Image
            src={category.heroImage}
            alt={category.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: category.heroFocalPoint }}
          />

          {/* Carefully tuned cinematic scrim (preserving photo vibrancy while guaranteeing text contrast) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent lg:w-3/4"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorative Subtle Lantern Watermark on Top Right */}
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
        {/* Breadcrumb Navigation */}
        <nav
          ref={breadcrumbRef}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-silver-light/70 mb-6 sm:mb-8"
        >
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gold/60" aria-hidden="true" />
          <Link href="/events" className="hover:text-gold transition-colors">
            Events
          </Link>
          <ChevronRight className="w-3 h-3 text-gold/60" aria-hidden="true" />
          <span className="text-gold font-semibold truncate max-w-[200px] sm:max-w-none">
            {category.shortTitle}
          </span>
        </nav>

        {/* Category Eyebrow */}
        <div ref={eyebrowRef} className="inline-flex items-center gap-3 mb-4 sm:mb-5">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold font-semibold">
            {category.number} / 07 &middot; {category.tag}
          </span>
        </div>

        {/* Editorial Headline with Allura Script Accent */}
        <h1 className="leading-[1.08] tracking-tight max-w-3xl mb-5 sm:mb-7">
          <span
            ref={headline1Ref}
            className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ivory"
          >
            {category.headline.line1}
          </span>
          <span
            ref={headline2Ref}
            className="block font-accent text-gold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl pt-1 sm:pt-2 font-normal"
          >
            {category.headline.line2Accent}
          </span>
        </h1>

        {/* Short Editorial Introduction */}
        <p
          ref={descRef}
          className="font-sans text-base sm:text-lg lg:text-xl text-silver-light/90 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-light"
        >
          {category.shortIntro}
        </p>

        {/* Dual Actions */}
        <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href={`/contact?event=${category.slug}`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-lg shadow-gold/15"
          >
            <span>Plan This Celebration</span>
            <ArrowRight
              className="w-4 h-4 text-charcoal transition-transform duration-normal ease-luxury group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <button
            type="button"
            onClick={scrollToConcepts}
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xs border border-ivory/20 text-ivory hover:border-gold hover:text-gold text-xs sm:text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold backdrop-blur-sm"
          >
            <span>Explore Concepts</span>
            <ArrowDown className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Scroll Discovery Indicator at Bottom */}
      <div className="container-luxury relative z-10 pt-8 sm:pt-12">
        <button
          ref={scrollIndicatorRef}
          type="button"
          onClick={scrollToConcepts}
          aria-label="Scroll down to exploration"
          className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.2em] text-silver-light/60 hover:text-gold transition-colors group cursor-pointer"
        >
          <span className="w-6 h-px bg-gold/50 group-hover:w-10 transition-all duration-300" />
          <span>Scroll to explore</span>
          <ArrowDown className="w-3 h-3 text-gold animate-bounce" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

