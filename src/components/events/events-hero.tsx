'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function EventsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

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
          ctaRef.current,
          imageContainerRef.current,
          imageInnerRef.current,
        ],
        { opacity: 1, y: 0, scale: 1, clipPath: 'none', clearProps: 'all' }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Initial hidden states
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      gsap.set(headlineLine1Ref.current, { opacity: 0, y: 32 });
      gsap.set(headlineLine2Ref.current, { opacity: 0, y: 24 });
      gsap.set(descRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaRef.current, { opacity: 0, y: 16 });

      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, {
          clipPath: 'inset(6% 0% 6% 0%)',
          opacity: 0.9,
        });
      }
      if (imageInnerRef.current) {
        gsap.set(imageInnerRef.current, { scale: 1.08 });
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(headlineLine1Ref.current, { opacity: 1, y: 0, duration: 0.75 }, '-=0.4')
        .to(headlineLine2Ref.current, { opacity: 1, y: 0, duration: 0.75 }, '-=0.55')
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.45')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.55 }, '-=0.35')
        .to(
          imageContainerRef.current,
          { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.1, ease: 'power3.inOut' },
          0.2
        )
        .to(imageInnerRef.current, { scale: 1, duration: 1.3, ease: 'power2.out' }, 0.2);

      // Subtle parallax scrub on desktop image
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

  const scrollToExplorer = () => {
    const el = document.getElementById('celebration-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Events Overview Hero"
      className="relative w-full bg-ivory text-charcoal pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-charcoal/10"
    >
      {/* Decorative Subtle Corner Botanical Watermark */}
      <div
        className="pointer-events-none select-none absolute top-0 right-0 z-0 hidden lg:block overflow-hidden"
        aria-hidden="true"
      >
        <div className="w-[280px] xl:w-[320px] opacity-25">
          <Image
            src="/decor/golden-lantern-corner.webp"
            alt=""
            width={660}
            height={1024}
            className="w-full h-auto object-contain object-top-right"
            priority={false}
          />
        </div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Asymmetrical 2-Column Composition: 35-40% Editorial Narrative + 60-65% Immersive Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Introduction */}
          <div ref={textColRef} className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs">
                CELEBRATION DIRECTORY &middot; TUMAKURU
              </span>
            </div>

            {/* Main Editorial Headline with Script Accent */}
            <h1 className="text-charcoal leading-[1.08] tracking-tight mb-5 sm:mb-6">
              <span
                ref={headlineLine1Ref}
                className="block font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-charcoal"
              >
                Every Occasion.
              </span>
              <span
                ref={headlineLine2Ref}
                className="block font-accent text-gold-deep text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.4rem] pt-1"
              >
                Exceptionally Yours.
              </span>
            </h1>

            {/* Narrative Description */}
            <p
              ref={descRef}
              className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-lg mb-8 sm:mb-10 font-normal sm:font-light"
            >
              From intimate family milestones to grand celebrations, discover thoughtfully crafted
              experiences for every beautiful occasion across Tumakuru district and South Karnataka.
            </p>

            {/* Call to Action */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToExplorer}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md"
              >
                <span>Explore Celebrations</span>
                <ArrowDown
                  className="w-4 h-4 text-gold transition-transform duration-normal ease-luxury group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </button>

              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">
                07 Curated Categories
              </span>
            </div>
          </div>

          {/* Right Column: 65-70% Dominant Atmospheric Event Photography */}
          <div className="lg:col-span-7">
            <div
              ref={imageContainerRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden rounded-xs border border-charcoal/10 shadow-[0_12px_40px_rgba(21,21,21,0.08)] bg-charcoal-light"
            >
              <div ref={imageInnerRef} className="relative w-full h-full">
                <Image
                  src="/images/events/weddings.jpg"
                  alt="Opulent luxury South Indian wedding and celebration stage decor in Tumakuru"
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-center"
                />

                {/* Subtle Luxury Gradient & Inner Border */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Overlaid Editorial Metadata Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-3 px-3.5 py-2 bg-charcoal/80 backdrop-blur-md border border-gold/30 rounded-xs text-ivory">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory">
                    Grand Celebrations &middot; Tumakuru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

