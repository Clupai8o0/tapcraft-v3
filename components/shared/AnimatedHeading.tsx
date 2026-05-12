'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { easing, durations } from '@/lib/motion';

type AnimatedHeadingProps = {
  children: string;
  emphasis?: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  ariaLabel?: string;
  startDelay?: number;
  perChar?: number;
};

export default function AnimatedHeading({
  children,
  emphasis,
  as = 'h1',
  className = 'display balance',
  ariaLabel,
  startDelay = 0.05,
  perChar = 0.018,
}: AnimatedHeadingProps) {
  const chars = children.split('');
  const Tag = as;

  return (
    <Tag className={className} aria-label={ariaLabel ?? children}>
      <span aria-hidden className="inline-block">
        {chars.map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.heroChar,
              delay: startDelay + i * perChar,
              ease: easing.out,
            }}
            className="inline-block"
            style={{ whiteSpace: c === ' ' ? 'pre' : 'normal' }}
          >
            {c}
          </motion.span>
        ))}
      </span>
      {emphasis && (
        <>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: durations.slow,
              delay: startDelay + chars.length * perChar + 0.1,
              ease: easing.out,
            }}
            className="inline-block"
          >
            {emphasis}
          </motion.span>
        </>
      )}
    </Tag>
  );
}
