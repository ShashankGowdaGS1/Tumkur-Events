'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { shareExperienceData } from '@/config/reviews-page';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export function ReviewsShareExperience() {
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

  const feedbackWhatsappMessage = encodeURIComponent(
    'Hello Tumkur Events, I recently celebrated with you and would like to share my feedback and experience.'
  );
  const whatsappUrl = `${siteConfig.social.whatsapp}?text=${feedbackWhatsappMessage}`;

  return (
    <section
      ref={sectionRef}
      aria-label="Share Your Celebration Experience"
      className="relative w-full bg-[#181818] text-ivory py-16 sm:py-20 lg:py-24 border-b border-charcoal-light overflow-hidden"
    >
      <div className="container-luxury relative z-10">
        <div
          ref={containerRef}
          className="max-w-3xl mx-auto p-8 sm:p-12 bg-charcoal border border-charcoal-light rounded-xs text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
            <span className="overline-luxury text-gold text-xs font-mono">
              {shareExperienceData.eyebrow}
            </span>
            <span className="h-px w-6 sm:w-8 bg-gold" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ivory tracking-tight mb-4">
            {shareExperienceData.heading}
          </h2>

          {/* Supporting */}
          <p className="font-sans text-sm sm:text-base text-silver-light/85 leading-relaxed font-light max-w-xl mx-auto mb-8 sm:mb-10">
            {shareExperienceData.supporting}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <Link
              href={shareExperienceData.primaryCtaHref}
              className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-hover transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold shadow-md w-full sm:w-auto"
            >
              <span>{shareExperienceData.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden="true" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gold/40 text-ivory text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold/10 hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          <p className="font-mono text-[11px] text-silver-light/50">
            Your reflections help families in Tumakuru discover authentic celebration craft.
          </p>
        </div>
      </div>
    </section>
  );
}
