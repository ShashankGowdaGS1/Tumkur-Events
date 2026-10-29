import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tumkur Events',
  description:
    'Provisional Privacy Policy shell for Tumkur Events navigation and compliance testing.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-ivory text-charcoal py-24 sm:py-32">
      <div className="container-narrow">
        <div className="border-b border-[#E8DFCF] pb-8 mb-10">
          <span className="overline-luxury text-gold-deep mb-3 block">
            LEGAL & PRIVACY
          </span>
          <h1 className="font-display text-fluid-h1 text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-charcoal/60">
            Last updated: October 2026 • Status: Provisional Shell
          </p>
        </div>

        <div className="prose prose-neutral max-w-none font-sans text-charcoal/80 space-y-6 leading-relaxed">
          <div className="p-4 sm:p-5 rounded-sm bg-[#E8DFCF]/30 border border-[#E8DFCF] text-xs sm:text-sm text-charcoal/70">
            <strong className="text-charcoal font-semibold">Note:</strong> This is a
            provisional route shell implemented for application architecture,
            footer navigation, and route resolution testing. Official, legally vetted
            privacy terms will be published upon final commercial review.
          </div>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            1. Information Collection
          </h2>
          <p>
            Tumkur Events collects only the information necessary to provide bespoke
            event styling and decoration services—such as contact details, event dates,
            and venue specifications submitted voluntarily via our contact and enquiry
            forms.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            2. Use of Information
          </h2>
          <p>
            Your information is solely used to communicate regarding event planning,
            quotations, and execution. We do not sell, rent, or lease client
            information to third parties.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            3. Contacting Us
          </h2>
          <p>
            For any queries regarding this provisional policy, please reach out via our{' '}
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
