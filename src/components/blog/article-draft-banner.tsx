import React from 'react';
import { Eye, ShieldAlert } from 'lucide-react';

interface ArticleDraftBannerProps {
  readonly slug: string;
}

/**
 * Editorial Draft Preview Banner
 * Rendered only during local development or internal preview to clearly indicate
 * that the article is an unpublished blueprint and not publicly accessible.
 */
export function ArticleDraftBanner({ slug }: ArticleDraftBannerProps) {
  return (
    <aside
      aria-label="Editorial draft notice"
      className="w-full bg-amber-500/10 border-b border-amber-500/30 text-amber-900 py-3 px-4 sm:px-6 relative z-30"
    >
      <div className="container-luxury max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0" aria-hidden="true" />
          <span>
            <strong>EDITORIAL DRAFT PREVIEW</strong> — Slug:{' '}
            <code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-950 font-bold">
              {slug}
            </code>
          </span>
        </div>
        <div className="flex items-center gap-2 text-amber-800/80">
          <Eye className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Unpublished · Excluded from public sitemaps and indexers</span>
        </div>
      </div>
    </aside>
  );
}
