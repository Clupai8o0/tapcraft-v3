import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import { getAllPostSlugs, getPost, getRelatedPosts } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Not found — TapCraft', description: '' };
  return {
    title: `${post.title} — TapCraft`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.tags);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'TapCraft Studio',
      logo: { '@type': 'ImageObject', url: 'https://tapcraft.shop/logo/tapcraft-icon.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://tapcraft.shop/blog/${slug}` },
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section--hero" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <Link
              href="/blog"
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--muted)',
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Field notes
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
              {post.tags.map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="display balance"
              style={{
                fontSize: 'clamp(36px, 5.2vw, 60px)',
                lineHeight: 1.05,
                maxWidth: '22ch',
                marginBottom: 24,
              }}
            >
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="lede" style={{ marginBottom: 32, maxWidth: '58ch' }}>{post.description}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="post-meta-row">
              <span>{post.author}</span>
              <span className="sep" />
              <span>{formatDate(post.publishedAt)}</span>
              <span className="sep" />
              <span>{post.readingTimeMin} min read</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <article className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Reveal>

          <Reveal>
            <div
              style={{
                marginTop: 64,
                paddingTop: 32,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p className="mono" style={{ color: 'var(--muted)', fontSize: 12 }}>
                Written by {post.author} · {formatDate(post.publishedAt)}
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <Link className="btn btn--primary" href="/customise">
                  Get a quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link className="btn btn--ghost" href="/blog">
                  More posts
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Related</span>
              <h2 className="h2" style={{ marginTop: 14 }}>Keep reading</h2>
            </Reveal>
            <div className="related-row">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link href={`/blog/${r.slug}`} className="post-card" style={{ padding: 22 }}>
                    <div className="meta">{r.readingTimeMin} min read</div>
                    <h2 style={{ fontSize: 20 }}>{r.title}</h2>
                    <p className="lede" style={{ fontSize: 13.5 }}>{r.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
