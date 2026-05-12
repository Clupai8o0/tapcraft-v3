'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { easing, durations } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside' | 'li' | 'span';
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 12,
  duration = durations.base,
  className,
  as = 'div',
  once = true,
  amount = 0.2,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration, delay, ease: easing.out } },
  };

  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </Comp>
  );
}
