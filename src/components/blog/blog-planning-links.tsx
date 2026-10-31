'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

const planningLinks = [
  {
    number: '01',
    title: 'Explore Celebrations',
    subtitle: 'From intimate birthdays to grand weddings',
    href: '/events',
    image: '/images/events/weddings.jpg',
    imageAlt: 'Curated celebration occasions by Tumkur Events',
  },
  {
    number: '02',
    title: 'Discover Our Services',
    subtitle: 'Floral art, theme styling, stage design & lighting',
    href: '/services',
    image: '/images/events/stage-events.jpg',
    imageAlt: 'Event decoration and production disciplines in Tumakuru',
  },
  {
    number: '03',
    title: 'Find Your Collection',
    subtitle: 'Indicative budget ranges & curated packages',
    href: '/packages',
    image: '/images/events/special-occasions.jpg',
    imageAlt: 'Celebration packages and decoration collections',
  },
];

export function BlogPlanningLinks() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const cards = gridRef.current?.querySelectorAll('.planning-card');
    if (!cards || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
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
      aria-label="From Inspiration to Celebration Planning Links"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-20 lg:py-24 border-b border-charcoal/10 overflow-hidden"
    >
      <div className="container-luxury">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep text-xs font-mono">
                FROM INSPIRATION TO CELEBRATION
              </span>
              <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
              Bring Your Vision to Life.
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
              Connect inspiration to planning with our dedicated event occasions, styling services, and curated collections.
            </p>
          </div>

          {/* 3 Links */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {planningLinks.map((link) => (
              <Link
                key={link.number}
                href={link.href}
                className="planning-card group relative flex flex-col rounded-xs overflow-hidden border border-charcoal/10 bg-[#FAF7F2] p-6 sm:p-7 transition-all duration-normal hover:shadow-[0_12px_36px_rgba(21,21,21,0.08)] hover:border-gold-deep/40"
              >
                <div className="relative w-full h-[180px] rounded-xs overflow-hidden mb-5 bg-champagne/20">
                  <Image
                    src={link.image}
                    alt={link.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-xs font-semibold text-ivory px-2 py-0.5 bg-charcoal/50 backdrop-blur-xs rounded-[2px] border border-white/10">
                      {link.number}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-charcoal tracking-tight mb-1.5 group-hover:text-gold-deep transition-colors duration-fast">
                      {link.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light mb-5">
                      {link.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-gold-deep transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
