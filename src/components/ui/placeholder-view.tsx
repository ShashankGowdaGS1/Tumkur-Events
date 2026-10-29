import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface PlaceholderViewProps {
  title: string;
  category?: string;
  description?: string;
  plannedPhase?: string;
}

/**
 * Minimal temporary page placeholder for functional navigation testing.
 * Does not implement full page layouts.
 */
export function PlaceholderView({
  title,
  category = 'Route Verification',
  description = 'This route has been architected and integrated with the shared navigation system. Full layout and editorial content will be implemented in subsequent phases.',
  plannedPhase = 'Upcoming Phase',
}: PlaceholderViewProps) {
  return (
    <main className="flex-1 bg-ivory pt-32 pb-24 px-6 text-charcoal">
      <div className="container-reading mx-auto space-y-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-ivory-light px-3.5 py-1 text-gold-deep">
          <Clock className="h-3.5 w-3.5" />
          <span className="overline-luxury text-[11px] tracking-widest">
            {category} &bull; {plannedPhase}
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-fluid-h1 font-display text-charcoal">
            {title}
          </h1>
          <p className="text-fluid-body max-w-xl text-charcoal/80">
            {description}
          </p>
        </div>

        <div className="rounded-sm border border-charcoal/10 bg-ivory-light p-6">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            Navigation System Integration
          </h2>
          <p className="mt-2 text-xs text-charcoal/80">
            Active navigation state confirmed for <span className="font-mono text-gold-deep font-semibold">{title}</span>. The shared navbar remains in solid warm ivory mode with accessible charcoal and gold contrast.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href={siteConfig.routes.home}
            className="inline-flex items-center gap-2 rounded-xs border border-charcoal bg-charcoal px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-ivory transition-colors duration-fast hover:bg-charcoal-light hover:border-gold focus-visible:outline-2 focus-visible:outline-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

