'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { EventCategoryDetail } from '@/config/event-detail-data';
import { FaqAccordion } from '@/components/faq/faq-accordion';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryFaqProps {
  readonly category: EventCategoryDetail;
}

export function CategoryFaq({ category }: CategoryFaqProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionContainerRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        accordionContainerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accordionContainerRef.current,
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
      aria-label={`Frequently Asked Questions for ${category.title}`}
      className="relative w-full bg-[#FAF7F2] text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep text-xs font-mono">
              QUESTIONS &amp; CLARITY
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold-deep" aria-hidden="true" />
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            Planning Clarity.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Common questions about {category.shortTitle.toLowerCase()} styling.
            </span>
          </h2>
        </div>

        {/* Accessible Accordion */}
        <div ref={accordionContainerRef} className="mb-10 sm:mb-12">
          <FaqAccordion
            items={category.faqs}
            defaultActiveId={category.faqs[0]?.id ?? null}
          />
        </div>

        {/* Support Prompt */}
        <div className="p-6 rounded-xs bg-ivory border border-charcoal/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-champagne/40 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-gold-deep" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-sm sm:text-base text-charcoal font-medium">
                Have a unique question about your venue or date?
              </h3>
              <p className="font-sans text-xs text-charcoal/70">
                Our concierge team is available to discuss custom ideas and site logistics.
              </p>
            </div>
          </div>

          <Link
            href={`/contact?event=${category.slug}&source=faq`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-gold-deep hover:text-charcoal transition-colors shrink-0"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
