import { z } from 'zod';

export const PostFrontmatterSchema = z.object({
  title: z.string().min(8).max(120),
  description: z.string().min(40).max(200),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  author: z.enum(['Samridh Limbu', 'Nikhil Gupta', 'TapCraft Studio']),
  tags: z.array(z.string()).min(1).max(6),
  ogImage: z.string().optional(),
  draft: z.boolean().optional(),
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export type Post = PostFrontmatter & {
  slug: string;
  html: string;
  readingTimeMin: number;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTimeMin: number;
};
