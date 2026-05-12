'use client';

// Safari / iOS friendly Three.js helpers.
//
// Why: Safari (especially mobile) has known WebGL pain points —
//  - High DPR + shadow maps + HDR environment maps can OOM the tab
//  - Environment preset HDR decode is slow / sometimes crashes older iOS
//  - Some iPads run with `failIfMajorPerformanceCaveat: true` by default and
//    silently fail to create a WebGL context
//
// These helpers detect mobile / iOS / reduced-motion and return safe values.

import { useEffect, useState } from 'react';

export type ThreeProfile = {
  isMobile: boolean;
  isIOS: boolean;
  prefersReducedMotion: boolean;
  dpr: [number, number];
  shadows: boolean;
  useHDR: boolean;
};

const SSR_DEFAULTS: ThreeProfile = {
  isMobile: false,
  isIOS: false,
  prefersReducedMotion: false,
  dpr: [1, 2],
  shadows: true,
  useHDR: true,
};

export function useThreeProfile(): ThreeProfile {
  const [profile, setProfile] = useState<ThreeProfile>(SSR_DEFAULTS);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMobile = isIOS || /Android|Mobile/.test(ua);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Conservative DPR on mobile/iOS — capping at 1.5 prevents the tab from
    // running out of GPU memory on iOS Safari while still looking sharp.
    const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2];

    setProfile({
      isMobile,
      isIOS,
      prefersReducedMotion,
      dpr,
      shadows: !isMobile && !prefersReducedMotion,
      useHDR: !isMobile && !prefersReducedMotion,
    });
  }, []);

  return profile;
}

// Sensible GL options. `failIfMajorPerformanceCaveat: false` is the critical
// one — Safari iPad sometimes refuses context creation otherwise.
export const SAFE_GL = {
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance' as const,
  failIfMajorPerformanceCaveat: false,
  preserveDrawingBuffer: false,
};
