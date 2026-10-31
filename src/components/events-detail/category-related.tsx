'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EventCategoryDetail, eventCategoryDetails } from '@/config/event-detail-data';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryRelatedProps {
  readonly category: EventCategoryDetail;
}

export function CategoryRelated({ category }: CategoryRelatedProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll('[data-related-card]');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // Fetch the 3 related category objects
  const relatedCategories = category.relatedSlugs
    .map((slug) => eventCategoryDetails[slug])
    .filter(Boolean);

  if (relatedCategories.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      aria-label="Related Celebration Categories"
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
              <span className="overline-luxury text-gold-deep">CONTINUE EXPLORING</span>
            </div>

            <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
              Related Celebrations.
              <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
                Explore more moments worth styling.
              </span>
            </h2>
          </div>

          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-gold-deep transition-colors shrink-0"
          >
            <span>View All 07 Occasions</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Related Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {relatedCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/events/${item.slug}`}
              data-related-card
              className="group block rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-md hover:border-gold-deep/50 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-charcoal-light">
                <Image
                  src={item.heroImage}
                  alt={item.heroImageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-xs bg-charcoal/80 border border-gold/40 text-[10px] font-mono tracking-widest text-gold uppercase">
                  {item.number} &middot; {item.shortTitle}
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-[#181818] text-ivory">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg text-ivory tracking-tight group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-7 h-7 rounded-full border border-charcoal-light flex items-center justify-center shrink-0 text-silver-light group-hover:border-gold group-hover:text-gold transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="font-sans text-xs text-silver-light/80 line-clamp-2 leading-relaxed font-light">
                  {item.shortIntro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

