import { z } from 'zod';

export const CommentSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  body: z.string(),
  author: z.object({
    username: z.string(),
    bio: z.null(),
    image: z.string(),
    following: z.boolean()
  })
})

export const CommentsResponseSchema = z.object({
    comments: z.array(
      CommentSchema
    )
}).optional()

export type CommentsResponseType = z.infer<typeof CommentsResponseSchema>;
export type CommentType = z.infer<typeof CommentSchema>;