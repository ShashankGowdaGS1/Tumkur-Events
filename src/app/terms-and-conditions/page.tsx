import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Tumkur Events',
  description:
    'Provisional Terms & Conditions shell for Tumkur Events navigation and compliance testing.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex-1 bg-ivory text-charcoal py-24 sm:py-32">
      <div className="container-narrow">
        <div className="border-b border-[#E8DFCF] pb-8 mb-10">
          <span className="overline-luxury text-gold-deep mb-3 block">
            TERMS OF SERVICE
          </span>
          <h1 className="font-display text-fluid-h1 text-charcoal mb-4">
            Terms & Conditions
          </h1>
          <p className="font-sans text-sm text-charcoal/60">
            Last updated: October 2026 • Status: Provisional Shell
          </p>
        </div>

        <div className="prose prose-neutral max-w-none font-sans text-charcoal/80 space-y-6 leading-relaxed">
          <div className="p-4 sm:p-5 rounded-sm bg-[#E8DFCF]/30 border border-[#E8DFCF] text-xs sm:text-sm text-charcoal/70">
            <strong className="text-charcoal font-semibold">Note:</strong> This is a
            provisional route shell implemented for application architecture,
            footer navigation, and route resolution testing. Final client engagement
            contracts and commercial terms govern actual event bookings.
          </div>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            1. Services & Quotations
          </h2>
          <p>
            All event quotations provided by Tumkur Events are customized based on
            scope, materials, floral arrangements, and venue logistics. Estimates are
            subject to written confirmation upon date reservation.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            2. Intellectual Property
          </h2>
          <p>
            All decoration concepts, stage design renderings, and photography featured
            on this website are proprietary to Tumkur Events and protected under
            applicable intellectual property laws.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            3. Inquiries
          </h2>
          <p>
            For contractual questions, please connect directly via our{' '}
            <Link
              href="/contact"
              className="text-gold-deep underline hover:text-gold transition-colors"
            >
              Contact Concierge
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
