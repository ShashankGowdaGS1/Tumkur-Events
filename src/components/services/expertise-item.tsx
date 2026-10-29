import React, { forwardRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ExpertiseService } from '@/config/expertise';

export interface ExpertiseItemProps {
  service: ExpertiseService;
  index: number;
}

/**
 * Editorial Service Group Item
 *
 * Designed as a refined luxury editorial index entry:
 * - Open structure with fine horizontal divider (not a card)
 * - Two-digit index number with deep gold accent
 * - Subtle directional arrow that translates diagonally on hover
 * - Hairline gold rule that expands across the top border on hover
 * - Semantic H3 in Marcellus display serif
 */
export const ExpertiseItem = forwardRef<HTMLLIElement, ExpertiseItemProps>(
  ({ service, index }, ref) => {
    return (
      <li
        ref={ref}
        className="group relative pt-7 pb-8 sm:pt-8 sm:pb-10 flex flex-col justify-between border-t border-charcoal/10 transition-colors duration-normal ease-luxury list-none"
      >
        {/* Hairline gold accent rule expanding on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[1.5px] bg-gold-deep transform scale-x-0 origin-left transition-transform duration-normal ease-luxury group-hover:scale-x-100 pointer-events-none"
          aria-hidden="true"
        />

        <div>
          {/* Service Number & Category Tag + Subtle Directional Arrow */}
          <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
            <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-gold-deep">
              {service.number} / {service.category}
            </span>
            <ArrowUpRight
              className="w-4 h-4 text-charcoal/30 transition-all duration-normal ease-luxury group-hover:text-gold-deep group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>

          {/* Service Heading (H3 in Marcellus) */}
          <h3 className="font-display text-xl sm:text-2xl text-charcoal tracking-tight transition-colors duration-fast ease-luxury group-hover:text-gold-deep">
            {service.title}
          </h3>

          {/* Service Description (Manrope body) */}
          <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed mt-3 max-w-md">
            {service.description}
          </p>
        </div>

        {/* Subtle decorative bottom accent */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2">
          <span className="h-px w-6 bg-charcoal/15 transition-all duration-normal ease-luxury group-hover:w-10 group-hover:bg-gold-deep" />
          <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/40 group-hover:text-charcoal/70 transition-colors duration-fast">
            Bespoke Execution
          </span>
        </div>
      </li>
    );
  }
);

ExpertiseItem.displayName = 'ExpertiseItem';

