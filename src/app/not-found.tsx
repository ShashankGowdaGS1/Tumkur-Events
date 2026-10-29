import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 py-24 text-center">
      <div className="container-reading mx-auto flex flex-col items-center space-y-6">
        <span className="overline-luxury text-gold-deep">
          404 — Page Not Found
        </span>

        <h1 className="text-fluid-h1 font-display text-charcoal">
          A Moment Outside Our Narrative
        </h1>

        <p className="text-fluid-body max-w-md text-charcoal/80">
          The page or celebration chapter you are seeking does not exist or may have been relocated.
        </p>

        <div className="pt-4">
          <Link
            href={siteConfig.routes.home}
            className="inline-flex items-center gap-2 rounded-sm border border-charcoal bg-charcoal px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-ivory transition-colors duration-fast hover:bg-charcoal-light hover:border-gold focus-visible:outline-2 focus-visible:outline-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

