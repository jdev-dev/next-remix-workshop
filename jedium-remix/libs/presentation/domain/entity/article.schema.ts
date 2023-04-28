import { z } from 'zod';

export const ArticleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  tagList: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  favorited: z.boolean(),
  favoritesCount: z.number(),
  author: z.object({
    username: z.string(),
    bio: z.string().nullable(),
    image: z.string(),
    following: z.boolean()
  })
})

export const ArticleListSchema = z.object({
  articles: z.array(
    ArticleSchema
  ),
  articlesCount: z.number()
});

export const ArticleResponseSchema = z.object({
  article: ArticleSchema
});

export const ArticleBulletPointsSchema = z.object({
  slug: z.string(),
  bulletPoints: z.string(),
});

export type ArticleType = z.infer<typeof ArticleSchema>;
export type ArticleListType = z.infer<typeof ArticleListSchema>;
export type ArticleResponseType = z.infer<typeof ArticleResponseSchema>;
export type ArticleBulletPointsType = z.infer<typeof ArticleBulletPointsSchema>;

