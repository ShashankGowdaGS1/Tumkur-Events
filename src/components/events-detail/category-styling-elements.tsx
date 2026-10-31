'use client';

import React, { useRef, useEffect } from 'react';
import { Layers, Flower2, Sparkles, DoorOpen, HeartHandshake, Armchair, ShieldCheck } from 'lucide-react';
import { EventCategoryDetail, StylingElementItem } from '@/config/event-detail-data';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

interface CategoryStylingElementsProps {
  readonly category: EventCategoryDetail;
}

export function CategoryStylingElements({ category }: CategoryStylingElementsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      const items = listRef.current?.querySelectorAll('[data-style-item]');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const getElementIcon = (iconType: StylingElementItem['iconType']) => {
    switch (iconType) {
      case 'backdrop':
        return <Layers className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
      case 'floral':
        return <Flower2 className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
      case 'lighting':
        return <Sparkles className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
      case 'entrance':
        return <DoorOpen className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
      case 'cradle':
        return <HeartHandshake className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
      case 'table':
        return <Armchair className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
      case 'stage':
      default:
        return <ShieldCheck className="w-5 h-5 text-gold-deep" aria-hidden="true" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label={`Styling Elements for ${category.title}`}
      className="relative w-full bg-ivory text-charcoal py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-charcoal/10"
    >
      <div className="container-luxury relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-gold-deep" aria-hidden="true" />
            <span className="overline-luxury text-gold-deep">POSSIBILITIES & CRAFT</span>
          </div>

          <h2 className="font-display text-fluid-h2 text-charcoal tracking-tight">
            The Details That Make It Special.
            <span className="block text-gold-deep font-accent text-3xl sm:text-4xl lg:text-5xl pt-1">
              Thoughtful craftsmanship in every corner.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed mt-4 max-w-2xl font-light">
            Each celebration setup is custom-tailored to the scale of your venue and personal aesthetic.
            Here are the core styling dimensions our creative team typically orchestrates.
          </p>
        </div>

        {/* 4-Item Structured Grid */}
        <div
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12"
        >
          {category.stylingElements.map((elem) => (
            <div
              key={elem.id}
              data-style-item
              className="p-6 lg:p-7 rounded-xs bg-[#FAF7F2] border border-charcoal/10 hover:border-gold-deep/40 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/40 flex items-center justify-center">
                    {getElementIcon(elem.iconType)}
                  </div>
                  <span className="font-mono text-xs text-charcoal/40 font-semibold tracking-widest">
                    {elem.number}
                  </span>
                </div>

                <h3 className="font-display text-lg lg:text-xl text-charcoal tracking-tight mb-2">
                  {elem.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                  {elem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 sm:p-5 rounded-xs bg-champagne/30 border border-charcoal/10 text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-normal">
            <span className="font-semibold text-charcoal">Please note:</span> All celebration elements described above represent customizable styling possibilities. Exact inclusions, florals, and staging dimensions are itemized in your personalized quotation based on venue architecture and budget.
          </p>
        </div>
      </div>
    </section>
  );
}
