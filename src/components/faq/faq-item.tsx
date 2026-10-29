import React from 'react';
import type { FaqItem } from '@/config/faqs';

interface FaqItemProps {
  readonly item: FaqItem;
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

/**
 * FaqItem Component
 *
 * An individual accessible question & answer row.
 * - Semantic button inside <h3>
 * - ARIA expanded & controls linkage
 * - Smooth CSS grid accordion transition without layout shifts
 * - Geometric morphing plus/minus indicator
 */
export function FaqItemComponent({ item, isOpen, onToggle }: FaqItemProps) {
  const buttonId = `faq-btn-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <div className="border-b border-[#E8DFCF] transition-colors duration-200">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-start justify-between py-5 sm:py-6 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79E22] focus-visible:ring-offset-2 rounded-sm"
        >
          <div className="flex items-start gap-4 sm:gap-6 pr-4">
            <span
              className={`font-mono text-xs sm:text-sm tracking-widest font-semibold transition-colors duration-200 pt-1 select-none ${
                isOpen ? 'text-[#8A6714]' : 'text-[#C79E22]'
              }`}
              aria-hidden="true"
            >
              {item.number}
            </span>
            <span
              className={`font-display text-lg sm:text-xl lg:text-[22px] leading-snug transition-colors duration-200 ${
                isOpen
                  ? 'text-[#8A6714]'
                  : 'text-[#151515] group-hover:text-[#8A6714]'
              }`}
            >
              {item.question}
            </span>
          </div>

          {/* Morphing Plus/Minus Indicator */}
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
              isOpen
                ? 'border-[#C79E22] bg-[#C79E22]/10 text-[#8A6714]'
                : 'border-[#D9CFBE] text-[#8A6714]/70 group-hover:border-[#C79E22] group-hover:text-[#8A6714]'
            }`}
            aria-hidden="true"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {/* Horizontal Bar (Always visible) */}
              <line x1="2" y1="7" x2="12" y2="7" />
              {/* Vertical Bar (Morphs/rotates away when open) */}
              <line
                x1="7"
                y1="2"
                x2="7"
                y2="12"
                className={`transition-all duration-300 origin-center ${
                  isOpen ? 'opacity-0 scale-y-0 rotate-90' : 'opacity-100 scale-y-100'
                }`}
              />
            </svg>
          </div>
        </button>
      </h3>

      {/* Accessible Collapsible Answer Region */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed pl-8 sm:pl-11 pb-6 pr-2 sm:pr-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
