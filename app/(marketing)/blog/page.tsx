import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Field notes — TapCraft',
  description: 'Notes from the Brunswick studio floor — NFC keychains, 3D printing, events, real estate, hospitality. What we make and what we\'ve learned.',
};

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <PageHero
        eyebrow="Field notes"
        heading="What we make."
        emphasis={<>What we&apos;ve <em className="serif-em">learned.</em></>}
        lede="Notes from the Brunswick studio floor. NFC, 3D-printing, events, real estate, hospitality, and the boring operations stuff that actually moves a job from brief to box."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {tags.length > 0 && (
            <Reveal>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                {tags.map((t) => (
                  <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className="tag-pill">
                    {t}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}

          {posts.length === 0 ? (
            <Reveal>
              <p className="lede" style={{ marginTop: 40 }}>
                The first posts are landing this week. Come back soon.
              </p>
            </Reveal>
          ) : (
            <div className="post-grid">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="post-card">
                    <div className="meta">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--muted-2)' }} />
                      <span>{post.readingTimeMin} min read</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p className="lede">{post.description}</p>
                    <div className="tags">
                      {post.tags.slice(0, 4).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <span className="read">Read post <ArrowRight className="h-3 w-3" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="display" style={{ maxWidth: '20ch', margin: '0 auto' }}>
              Want a brief on <em>your job?</em>
            </h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>
              Tell us what you&apos;re making. We&apos;ll quote it in 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/samples">
                Order a sample
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
