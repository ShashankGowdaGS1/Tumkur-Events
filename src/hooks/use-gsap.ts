'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { gsap, registerGsapPlugins, prefersReducedMotion } from '@/lib/gsap';

export interface UseGsapOptions {
  scope?: RefObject<HTMLElement | null>;
  dependencies?: unknown[];
  revertOnUnmount?: boolean;
}

/**
 * Custom hook to safely instantiate and cleanup GSAP animations & ScrollTriggers
 * within a scoped React lifecycle, respecting prefers-reduced-motion.
 */
export function useGsapEffect(
  effect: (context: gsap.Context) => void | (() => void),
  options: UseGsapOptions = {}
): void {
  const { scope, dependencies = [], revertOnUnmount = true } = options;
  const isReduced = prefersReducedMotion();

  useEffect(() => {
    registerGsapPlugins();

    if (isReduced) {
      return;
    }

    const ctx = gsap.context((self) => {
      effect(self);
    }, scope?.current ?? undefined);

    return () => {
      if (revertOnUnmount) {
        ctx.revert();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReduced, ...dependencies]);
}

