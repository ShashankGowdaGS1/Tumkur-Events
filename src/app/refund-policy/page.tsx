import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Tumkur Events',
  description:
    'Provisional Refund and Cancellation Policy shell for Tumkur Events navigation testing.',
};

export default function RefundPolicyPage() {
  return (
    <main className="flex-1 bg-ivory text-charcoal py-24 sm:py-32">
      <div className="container-narrow">
        <div className="border-b border-[#E8DFCF] pb-8 mb-10">
          <span className="overline-luxury text-gold-deep mb-3 block">
            CANCELLATION & ADJUSTMENT
          </span>
          <h1 className="font-display text-fluid-h1 text-charcoal mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="font-sans text-sm text-charcoal/60">
            Last updated: October 2026 • Status: Provisional Shell
          </p>
        </div>

        <div className="prose prose-neutral max-w-none font-sans text-charcoal/80 space-y-6 leading-relaxed">
          <div className="p-4 sm:p-5 rounded-sm bg-[#E8DFCF]/30 border border-[#E8DFCF] text-xs sm:text-sm text-charcoal/70">
            <strong className="text-charcoal font-semibold">Note:</strong> This is a
            provisional route shell implemented for application architecture and
            navigation verification. Event-specific cancellation and date rescheduling
            provisions are provided directly in the client written agreement.
          </div>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            1. Bespoke Resource Allocation
          </h2>
          <p>
            Due to the custom nature of floral procurement, structural staging, and
            specialized artisan scheduling, booking reservations and cancellations are
            handled according to individualized contractual agreements established
            at confirmation.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            2. Rescheduling & Adjustments
          </h2>
          <p>
            We endeavor to accommodate date modifications subject to calendar
            availability and supplier commitments. Please notify us as early as
            feasible regarding any scheduling changes.
          </p>

          <h2 className="font-display text-2xl text-charcoal pt-4">
            3. Assistance
          </h2>
          <p>
            For questions regarding policies or specific bookings, visit our{' '}
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
