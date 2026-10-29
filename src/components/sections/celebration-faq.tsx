'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import { celebrationFaqs, faqIntro, faqCta } from '@/config/faqs';
import { FaqAccordion } from '@/components/faq/faq-accordion';

/**
 * Section 10: Frequently Asked Questions — "The Celebration Concierge"
 *
 * Design Direction: "The Celebration Concierge"
 * - Warm Ivory background (#F7F4EE) smoothly transitioning from Champagne of Section 09.
 * - Two-column split-screen layout on desktop:
 *   - Left (~42% / 5 cols): Sticky close-up photograph of authentic Indian event decor
 *     details with caption "THOUGHTFULLY PLANNED. BEAUTIFULLY CELEBRATED."
 *   - Right (~58% / 7 cols): Header, 6-item single-open accordion, and Help CTA box.
 * - Mobile: Linear vertical flow (Header -> Detail Photo -> 6-item Accordion -> Help CTA).
 * - Zero fabricated claims (no invented advance payments, percentages, or cancellation promises).
 * - Scoped GSAP ScrollTrigger entrance without pinning.
 * - Full accessibility: semantic HTML, ARIA states, keyboard friendly.
 */
export function CelebrationFaq() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoColRef = useRef<HTMLDivElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set([photoColRef.current, contentColRef.current], {
        opacity: 1,
        y: 0,
        clearProps: 'all',
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(photoColRef.current, { opacity: 0, y: 28 });
      gsap.set(contentColRef.current, { opacity: 0, y: 28 });

      // Entrance animation on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      tl.to(photoColRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      }).to(
        contentColRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.45'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      aria-label="Frequently Asked Questions — The Celebration Concierge"
      className="relative bg-[#F7F4EE] text-charcoal py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-[#E8DFCF]/70"
    >
      <div className="container-luxury relative z-10">
        {/* =====================================================================
            MOBILE HEADER (Shown only on mobile & tablet below lg breakpoint)
           ===================================================================== */}
        <div className="lg:hidden mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#8A6714]" aria-hidden="true" />
            <span className="overline-luxury text-[#8A6714]">
              {faqIntro.eyebrow}
            </span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-3">
            {faqIntro.headline}
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed">
            {faqIntro.description}
          </p>
        </div>

        {/* =====================================================================
            TWO-COLUMN DESKTOP SPLIT / MOBILE STACK
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* ===================================================================
              LEFT COLUMN (~42% / 5 cols): STICKY ARTISAN DECOR PHOTOGRAPH
             =================================================================== */}
          <div
            ref={photoColRef}
            className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="lg:sticky lg:top-28">
              {/* Framed Photograph Container */}
              <div className="relative p-2.5 sm:p-3 bg-white/70 border border-[#E8DFCF] shadow-[0_16px_40px_rgba(21,21,21,0.04)] rounded-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-[#E8DFCF]/30">
                  <Image
                    src="/images/decor/faq-decor-detail.jpg"
                    alt="Intimate artisan Indian decor detail with traditional brass oil lamp, jasmine garlands and petals"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority={false}
                  />

                  {/* Gentle warm gradient vignette overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Corner Accent Ornament */}
                  <div
                    className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/60 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Editorial Photo Caption */}
                <div className="pt-3 pb-1 text-center">
                  <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#8A6714] font-medium select-none">
                    {faqIntro.photoCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN (~58% / 7 cols): EDITORIAL HEADER & ACCORDION
             =================================================================== */}
          <div ref={contentColRef} className="lg:col-span-7 flex flex-col">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#8A6714]" aria-hidden="true" />
                <span className="overline-luxury text-[#8A6714]">
                  {faqIntro.eyebrow}
                </span>

                {/* Botanical line art flourish */}
                <svg
                  viewBox="0 0 48 16"
                  fill="none"
                  stroke="currentColor"
                  className="w-8 h-3 text-[#8A6714]/60 ml-1"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8C12 8 18 2 24 2C30 2 36 14 47 8"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <circle cx="24" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </div>

              <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight mb-4">
                {faqIntro.headline}
              </h2>

              <p className="font-sans text-base lg:text-lg text-charcoal/75 max-w-xl leading-relaxed">
                {faqIntro.description}
              </p>
            </div>

            {/* Accessible FAQ Accordion */}
            <FaqAccordion items={celebrationFaqs} defaultActiveId="faq-01" />

            {/* Bottom Help Prompt Box */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-sm border border-[#E8DFCF] bg-[#FAF7F2]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-colors hover:border-[#D9CFBE]">
              <div className="space-y-1">
                <h3 className="font-display text-lg sm:text-xl text-[#151515] font-normal">
                  {faqCta.heading}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-md">
                  {faqCta.description}
                </p>
              </div>

              <Link
                href={faqCta.ctaHref}
                className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium font-sans text-white bg-[#151515] hover:bg-[#8A6714] transition-all duration-300 rounded-sm shadow-sm group shrink-0"
              >
                <span>{faqCta.ctaText}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
