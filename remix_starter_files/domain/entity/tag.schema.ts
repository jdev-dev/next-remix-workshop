import { z } from "zod";

export const TagsSchema = z.object({
    tags: z.array(z.string())
})

export type TagsType = z.infer<typeof TagsSchema>;