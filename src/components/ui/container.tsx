import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'default' | 'narrow' | 'reading' | 'full';
}

/**
 * Editorial Container Component
 * Enforces consistent fluid margins, gutters, and maximum constraints
 * across mobile, tablet, and widescreen viewports.
 */
export function Container({
  as: Component = 'div',
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClass = {
    default: 'container-luxury',
    narrow: 'container-narrow',
    reading: 'container-reading',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  }[size];

  return (
    <Component className={cn(sizeClass, className)} {...props}>
      {children}
    </Component>
  );
}

