import type { Variants } from 'framer-motion';

export const easing = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  springy: [0.34, 1.56, 0.64, 1] as const,
};

export const durations = {
  fast: 0.25,
  base: 0.5,
  slow: 0.7,
  heroChar: 0.6,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: durations.base, ease: easing.out } },
};

export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: durations.base, ease: easing.out } },
};

export const stagger = (each = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});

export const charStagger = (i: number) => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.heroChar, delay: 0.1 + i * 0.018, ease: easing.out },
  },
});
