'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';

export function BlogSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(currentQuery);

  useEffect(() => {
    setSearchTerm(currentQuery);
  }, [currentQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm.trim()) {
      params.set('q', searchTerm.trim());
      params.delete('page');
    } else {
      params.delete('q');
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    setSearchTerm('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      aria-label="Search celebration articles"
      className="relative w-full max-w-md mx-auto mb-10"
    >
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-charcoal/40 pointer-events-none" aria-hidden="true" />
        <input
          type="search"
          name="q"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search the celebration journal..."
          className="w-full pl-10 pr-10 py-2.5 bg-[#FAF7F2] border border-charcoal/15 rounded-xs text-xs sm:text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-gold-deep focus:ring-1 focus:ring-gold-deep transition-all"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search input"
            className="absolute right-3 p-1 text-charcoal/40 hover:text-charcoal focus-visible:outline-2 focus-visible:outline-gold"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </form>
  );
}
