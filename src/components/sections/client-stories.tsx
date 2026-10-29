'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';
import {
  verifiedTestimonials,
  testimonialsIntro,
  testimonialsEditorialFallback,
  testimonialsFooter,
} from '@/config/testimonials';
import { ReviewPhotograph } from '@/components/reviews/review-photograph';
import { FeaturedTestimonial } from '@/components/reviews/featured-testimonial';
import { TestimonialNavigation } from '@/components/reviews/testimonial-navigation';

/**
 * Section 09: Client Stories & Reviews — "Stories Behind the Celebrations"
 *
 * Design Direction:
 * - Warm Champagne background (#E8DFCF) providing an earthy, inviting transition from Section 08.
 * - Large 45% / 55% two-column editorial composition.
 * - Left 45%: Large rectangular edge-to-edge celebration photograph.
 * - Right 55%: Featured testimonial quote in Marcellus, attribution, and minimal navigation.
 * - Strict Data Integrity: Displays verified client reviews when available, or an honest,
 *   transparent editorial reflection when reviews are being curated.
 * - Unpinned natural scroll with GSAP ScrollTrigger entrance.
 */
export function ClientStories() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoColRef = useRef<HTMLDivElement>(null);
  const quoteColRef = useRef<HTMLDivElement>(null);
  const quoteContentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(
        [headerRef.current, photoColRef.current, quoteColRef.current, footerRef.current],
        { opacity: 1, y: 0, clearProps: 'all' }
      );
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 22 });
      gsap.set(photoColRef.current, { opacity: 0, y: 28 });
      gsap.set(quoteColRef.current, { opacity: 0, y: 28 });
      gsap.set(footerRef.current, { opacity: 0, y: 18 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power2.out',
      })
        .to(
          [photoColRef.current, quoteColRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          footerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.2'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSelectReview = (newIndex: number) => {
    if (newIndex === activeIndex || isTransitioning) return;

    if (prefersReducedMotion()) {
      setActiveIndex(newIndex);
      return;
    }

    setIsTransitioning(true);

    if (quoteContentRef.current) {
      gsap.to(quoteContentRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(newIndex);
          gsap.fromTo(
            quoteContentRef.current,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: 'power2.out',
              onComplete: () => setIsTransitioning(false),
            }
          );
        },
      });
    } else {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }
  };

  const hasReviews = verifiedTestimonials.length > 0;
  const currentTestimonial = hasReviews ? verifiedTestimonials[activeIndex] : undefined;

  const currentImage = hasReviews && currentTestimonial?.displayImage
    ? currentTestimonial.displayImage
    : testimonialsEditorialFallback.defaultImage;

  const currentImageAlt = hasReviews && currentTestimonial?.imageAlt
    ? currentTestimonial.imageAlt
    : testimonialsEditorialFallback.defaultImageAlt;

  const currentCategoryTag = hasReviews && currentTestimonial?.eventCategory
    ? currentTestimonial.eventCategory
    : 'CELEBRATION ARCHIVE';

  return (
    <section
      id="client-stories"
      ref={sectionRef}
      aria-label="Client Stories and Celebration Reviews"
      className="relative bg-[#E8DFCF] text-charcoal py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* =====================================================================
            01. SECTION HEADER: EDITORIAL INTRO
           ===================================================================== */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep">{testimonialsIntro.eyebrow}</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            The Moments That
            <span className="block text-charcoal/90">Stay With You.</span>
          </h2>

          <p className="font-sans text-fluid-body text-charcoal/75 leading-relaxed mt-4 max-w-xl">
            {testimonialsIntro.description}
          </p>
        </div>

        {/* =====================================================================
            02. MAIN TWO-COLUMN EDITORIAL COMPOSITION (45% / 55%)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column (45%): Large Event Photograph */}
          <div ref={photoColRef} className="lg:col-span-5">
            <ReviewPhotograph
              imageSrc={currentImage}
              imageAlt={currentImageAlt}
              categoryTag={currentCategoryTag}
            />
          </div>

          {/* Right Column (55%): Featured Review & Navigation */}
          <div
            ref={quoteColRef}
            className="lg:col-span-7 flex flex-col justify-between h-full min-h-[380px] sm:min-h-[440px]"
          >
            <div ref={quoteContentRef} className="flex-1">
              <FeaturedTestimonial testimonial={currentTestimonial} />
            </div>

            {hasReviews && (
              <TestimonialNavigation
                testimonials={verifiedTestimonials}
                activeIndex={activeIndex}
                onSelect={handleSelectReview}
                className="mt-6 sm:mt-8"
              />
            )}
          </div>
        </div>

        {/* =====================================================================
            03. SECTION CLOSING FOOTER & CTA
           ===================================================================== */}
        <div
          ref={footerRef}
          className="mt-14 sm:mt-20 pt-8 border-t border-charcoal/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-lg sm:text-xl text-charcoal">
              {testimonialsFooter.copy}
            </p>
            <span className="font-sans text-xs text-charcoal/60 mt-0.5 block">
              Read authentic feedback and celebration memories from Tumakuru hosts.
            </span>
          </div>

          <Link
            href={testimonialsFooter.ctaHref}
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.16em] font-semibold border border-charcoal hover:bg-charcoal-light hover:border-gold transition-all duration-normal ease-luxury focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            <span>{testimonialsFooter.ctaText}</span>
            <ArrowRight
              className="h-3.5 w-3.5 text-gold transition-transform duration-normal ease-luxury group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
