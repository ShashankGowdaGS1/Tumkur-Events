'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Ensures GSAP plugins are registered safely in the client browser environment only.
 */
let isGsapRegistered = false;

export function registerGsapPlugins(): void {
  if (typeof window !== 'undefined' && !isGsapRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isGsapRegistered = true;
  }
}

/**
 * Utility to check if user has requested reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, ScrollTrigger };

