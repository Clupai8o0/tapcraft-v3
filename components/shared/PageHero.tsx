'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import AnimatedHeading from './AnimatedHeading';
import { easing, durations } from '@/lib/motion';

type PageHeroProps = {
  eyebrow?: string;
  heading: string;
  emphasis?: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
  tight?: boolean;
};

export default function PageHero({
  eyebrow,
  heading,
  emphasis,
  lede,
  actions,
  as = 'h1',
  className,
  tight = false,
}: PageHeroProps) {
  const headingChars = heading.length;
  const ledeDelay = 0.15 + headingChars * 0.018 + (emphasis ? 0.4 : 0.1);
  const actionsDelay = ledeDelay + 0.18;

  return (
    <section className={`section${tight ? ' section--tight' : ' section--hero'} ${className ?? ''}`}>
      <div className="wrap">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.base, ease: easing.out }}
            className="eyebrow"
            style={{ display: 'inline-flex', marginBottom: 22 }}
          >
            {eyebrow}
          </motion.span>
        )}

        <AnimatedHeading as={as} emphasis={emphasis}>
          {heading}
        </AnimatedHeading>

        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.base, delay: ledeDelay, ease: easing.out }}
            className="lede"
            style={{ marginTop: 28 }}
          >
            {lede}
          </motion.p>
        )}

        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.base, delay: actionsDelay, ease: easing.out }}
            style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            {actions}
          </motion.div>
        )}
      </div>
    </section>
  );
}
