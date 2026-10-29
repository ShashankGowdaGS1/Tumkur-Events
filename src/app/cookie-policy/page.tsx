import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Tumkur Events',
  description:
    'Provisional Cookie Policy shell for Tumkur Events navigation and compliance testing.',
};

export default function CookiePolicyPage() {
  return (
    <main className="flex-1 bg-ivory text-charcoal py-24 sm:py-32">
      <div className="container-narrow">
        <div className="border-b border-[#E8DFCF] pb-8 mb-10">
          <span className="overline-luxury text-gold-deep mb-3 block">
            COOKIES & TRACKING
          </span>
          <h1 className="font-display text-fluid-h1 text-charcoal mb-4">
            Cookie Policy
          </h1>
          <p className="font-sans text-sm text-charcoal/60">
            Last updated: October 2026 • Status: Provisional Shell
          </p>
        </div>

        <div className="prose prose-neutral max-w-none font-sans text-charcoal/80 space-y-6 leading-relaxed">
          <div className="p-4 sm:p-5 rounded-sm bg-[#E8DFCF]/30 border border-[#E8DFCF] text-xs sm:text-sm text-charcoal/70">
            <strong className="text-charcoal font-semibold">Note:</strong> This is a
            provisional route shell implemented for application architecture and
            navigation verification. We currently employ only essential performance
            and navigation session states.
          </div>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            1. What Are Cookies
          </h2>
          <p>
            Cookies are small text files placed on your device to ensure reliable
            navigation, remember preferences, and improve page loading performance
            across the Tumkur Events experience.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            2. Essential Usage
          </h2>
          <p>
            Tumkur Events utilizes minimal technical cookies strictly necessary for
            interactive elements, such as maintaining presentation state and
            responsive media playback.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            3. Further Questions
          </h2>
          <p>
            To learn more or inquire about privacy practices, please contact us via our{' '}
            <Link
              href="/contact"
              className="text-gold-deep underline hover:text-gold transition-colors"
            >
              Contact Page
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
