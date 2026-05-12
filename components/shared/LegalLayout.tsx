import { type ReactNode } from 'react';
import PageHero from './PageHero';
import Reveal from './Reveal';

type LegalLayoutProps = {
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalLayout({ eyebrow, heading, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        heading={heading}
        lede={`Last updated: ${lastUpdated}`}
        tight
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <article className="legal-prose">{children}</article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
