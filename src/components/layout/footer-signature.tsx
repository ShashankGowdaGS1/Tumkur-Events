import React from 'react';
import { footerConfig } from '@/config/footer';

/**
 * Footer Area C: Signature Wordmark & Botanical Detail
 * An oversized, restrained typographic outline treatment and fine vector ornament.
 */
export function FooterSignature() {
  return (
    <div className="relative py-8 sm:py-12 overflow-hidden border-b border-[#222222]">
      {/* Decorative Jasmine Botanical Line Art Ornament (Option A) */}
      <svg
        className="absolute right-0 bottom-2 w-32 sm:w-44 h-auto text-[#C79E22] opacity-15 pointer-events-none select-none"
        viewBox="0 0 160 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 70C40 65 70 45 110 50C130 52 145 35 155 10" />
        <path d="M70 45C65 30 75 20 85 22C95 24 90 40 70 45Z" />
        <path d="M110 50C115 35 130 32 135 40C140 48 125 55 110 50Z" />
        <circle cx="85" cy="22" r="2.5" fill="currentColor" />
        <circle cx="135" cy="40" r="2" fill="currentColor" />
        <circle cx="155" cy="10" r="2.5" fill="currentColor" />
      </svg>

      {/* Oversized Signature Wordmark Outline */}
      <div className="w-full text-center select-none overflow-hidden">
        <p
          className="font-display uppercase tracking-[0.08em] sm:tracking-[0.1em] text-transparent leading-none select-none text-[clamp(2.2rem,8.5vw,7.2rem)] font-normal pointer-events-none"
          style={{
            WebkitTextStroke: '1px rgba(199, 158, 34, 0.22)',
          }}
          aria-hidden="true"
        >
          {footerConfig.signatureWordmark}
        </p>
        <span className="sr-only">{footerConfig.signatureWordmark}</span>
      </div>
    </div>
  );
}
