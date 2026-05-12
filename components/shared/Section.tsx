import { type ReactNode } from 'react';
import Reveal from './Reveal';

type SectionProps = {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
  tight?: boolean;
  hero?: boolean;
  id?: string;
  noReveal?: boolean;
};

export default function Section({
  children,
  eyebrow,
  className = '',
  tight = false,
  hero = false,
  id,
  noReveal = false,
}: SectionProps) {
  const base = 'section';
  const mod = tight ? ' section--tight' : hero ? ' section--hero' : '';
  return (
    <section id={id} className={`${base}${mod} ${className}`}>
      <div className="wrap">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        {noReveal ? children : <Reveal delay={eyebrow ? 0.08 : 0}>{children}</Reveal>}
      </div>
    </section>
  );
}
