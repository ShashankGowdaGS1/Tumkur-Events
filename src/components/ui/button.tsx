import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Contemporary Luxury Button Component
 * - Accessible focus indicators (2px gold ring, offset)
 * - Supports keyboard navigation
 * - Follows contrast governance (Gold on dark, Charcoal/Deep Gold on light)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans uppercase font-medium tracking-widest transition-colors duration-fast focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary:
        'bg-charcoal text-ivory hover:bg-charcoal-light border border-charcoal hover:border-gold',
      secondary:
        'bg-champagne text-charcoal hover:bg-champagne-light border border-gold/30',
      'outline-gold':
        'border border-gold text-gold-deep hover:bg-gold/10 hover:border-gold-hover',
      ghost:
        'text-charcoal hover:bg-charcoal/5 border border-transparent',
    };

    const sizes = {
      sm: 'text-[11px] px-3.5 py-2 rounded-xs gap-1.5',
      md: 'text-xs px-5 py-2.5 rounded-xs gap-2',
      lg: 'text-xs px-7 py-3.5 rounded-sm gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

