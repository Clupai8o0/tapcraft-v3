import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';

export const metadata = {
  title: 'Not found — TapCraft',
  description: 'The page you\'re looking for doesn\'t exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        heading="That page got"
        emphasis={<em>recycled.</em>}
        lede="Either it never existed or it&apos;s been refactored. Either way, it&apos;s not here. Head back to the homepage or browse the work."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/">Back to home</Link>
            <Link className="btn btn--ghost btn--lg" href="/showcase">See the work</Link>
          </>
        }
      />
    </>
  );
}
