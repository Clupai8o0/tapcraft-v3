import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import readingTime from 'reading-time';
import { PostFrontmatterSchema, type Post, type PostSummary } from './schema';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

marked.use({
  gfm: true,
  breaks: false,
});

function readPostFile(slug: string): Post {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = PostFrontmatterSchema.parse(data);
  const html = marked.parse(content, { async: false }) as string;
  const stats = readingTime(content);
  return {
    ...fm,
    slug,
    html,
    readingTimeMin: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getPost(slug: string): Post | null {
  try {
    const post = readPostFile(slug);
    if (post.draft) return null;
    return post;
  } catch {
    return null;
  }
}

export function getAllPosts(): PostSummary[] {
  return getAllPostSlugs()
    .map((slug) => {
      try {
        return readPostFile(slug);
      } catch (err) {
        console.error(`[blog] failed to read ${slug}:`, err);
        return null;
      }
    })
    .filter((p): p is Post => p !== null && !p.draft)
    .map(({ html: _html, ...rest }) => rest)
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getRelatedPosts(slug: string, tags: string[], limit = 3): PostSummary[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({ post: p, overlap: p.tags.filter((t) => tags.includes(t)).length }))
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}
