'use client';

import React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  readonly currentPage: number;
  readonly totalPages: number;
  readonly hasPrevPage: boolean;
  readonly hasNextPage: boolean;
}

export function BlogPagination({
  currentPage,
  totalPages,
  hasPrevPage,
  hasNextPage,
}: BlogPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <nav
      aria-label="Journal pagination"
      className="w-full flex items-center justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 pt-8 border-t border-charcoal/10"
    >
      <button
        type="button"
        disabled={!hasPrevPage}
        onClick={() => navigateToPage(currentPage - 1)}
        aria-label="Previous page"
        className="inline-flex items-center gap-1.5 px-4 py-2 border border-charcoal/15 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-ivory disabled:opacity-30 disabled:pointer-events-none transition-all duration-normal"
      >
        <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Prev</span>
      </button>

      <span className="font-mono text-xs text-charcoal/70 px-2">
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        disabled={!hasNextPage}
        onClick={() => navigateToPage(currentPage + 1)}
        aria-label="Next page"
        className="inline-flex items-center gap-1.5 px-4 py-2 border border-charcoal/15 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-ivory disabled:opacity-30 disabled:pointer-events-none transition-all duration-normal"
      >
        <span>Next</span>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </nav>
  );
}
