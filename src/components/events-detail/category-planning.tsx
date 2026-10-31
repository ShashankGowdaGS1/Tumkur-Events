'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { EventCategoryDetail } from '@/config/event-detail-data';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryPlanningProps {
  readonly category: EventCategoryDetail;
}

export function CategoryPlanning({ category }: CategoryPlanningProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
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

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightColRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const planningSteps = [
    {
      number: '01',
      title: 'Share Your Occasion',
      desc: `Tell us your event date, chosen venue in Tumakuru, estimated guest count, and the specific vibe or floral aesthetic you have in mind for your ${category.shortTitle.toLowerCase()}.`,
    },
    {
      number: '02',
      title: 'Explore Styling Possibilities',
      desc: 'We share customized decor sketches, material palettes, and itemized quotations tailored specifically to your venue’s stage dimensions and natural lighting.',
    },
    {
      number: '03',
      title: 'Bring the Vision Together',
      desc: 'Our experienced in-house floral and decor craftsmen arrive early, meticulously install every garland and lighting cue, and deliver a pristine stage ready on time.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-label={`Planning Your ${category.title}`}
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols): Planning Steps */}
          <div ref={leftColRef} className="lg:col-span-7">
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
                <span className="overline-luxury text-gold-deep">THOUGHTFUL COLLABORATION</span>
              </div>

              <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
                Planning Made Simple.
                <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
                  From first consultation to celebration day.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-xl font-light">
                {category.planningNotes}
              </p>
            </div>

            {/* 3 Step Cards */}
            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {planningSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 sm:p-6 rounded-xs bg-ivory border border-charcoal/10 flex items-start gap-4 sm:gap-5 shadow-xs"
                >
                  <span className="font-mono text-sm sm:text-base text-gold-deep font-semibold tracking-wider shrink-0 mt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-charcoal tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/contact?event=${category.slug}&source=planning-assurance`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-charcoal transition-all duration-normal ease-luxury shadow-md"
            >
              <span>Discuss Your Celebration</span>
              <ArrowRight
                className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Right Column (5 cols): Authentic Craft Photography */}
          <div ref={rightColRef} className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xs overflow-hidden border border-charcoal/15 bg-charcoal shadow-lg">
              <Image
                src="/images/events/art-of-celebration.jpg"
                alt="Artisan flower craftsmanship and thoughtful event setup by Tumkur Events"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-gold" aria-hidden="true" />
                  <span className="font-mono text-xs text-gold uppercase tracking-widest font-semibold">
                    100% On-Time Handover
                  </span>
                </div>
                <p className="font-sans text-xs text-silver-light/90 font-light">
                  Dedicated in-house decor crew ensuring pristine finish before your first guest arrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
