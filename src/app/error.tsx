'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected errors securely without sensitive leakage
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 py-24 text-center">
      <div className="container-reading mx-auto flex flex-col items-center space-y-6">
        <span className="overline-luxury text-gold-deep">
          Application Notice
        </span>

        <h1 className="text-fluid-h2 font-display text-charcoal">
          Something Interrupted Our Flow
        </h1>

        <p className="text-fluid-body max-w-md text-charcoal/80">
          An unexpected interruption occurred while preparing this view. You may safely retry.
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-sm border border-charcoal bg-charcoal px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-ivory transition-colors duration-fast hover:bg-charcoal-light hover:border-gold focus-visible:outline-2 focus-visible:outline-gold"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    </main>
  );
}

