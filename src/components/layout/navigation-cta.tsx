import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface NavigationCTAProps {
  isScrolled: boolean;
  className?: string;
  onClick?: () => void;
}

export function NavigationCTA({
  isScrolled,
  className,
  onClick,
}: NavigationCTAProps) {
  return (
    <Link
      href={siteConfig.navigation.cta.href}
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-xs px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-fast focus-visible:outline-2 focus-visible:outline-gold active:scale-[0.98]',
        isScrolled
          ? 'bg-charcoal text-ivory border border-charcoal hover:bg-charcoal-light hover:border-gold'
          : 'bg-gold text-charcoal border border-gold hover:bg-gold-hover shadow-sm',
        className
      )}
    >
      <Sparkles
        className={cn(
          'h-3.5 w-3.5 transition-transform duration-normal ease-luxury group-hover:rotate-12',
          isScrolled ? 'text-gold' : 'text-charcoal'
        )}
        aria-hidden="true"
      />
      <span>{siteConfig.navigation.cta.label}</span>
    </Link>
  );
}

