import { z } from "zod";

export const ProfileSchema = z.object({
    userename: z.string(),
    bio: z.string(),
    image: z.string(),
    following: z.boolean(),
});

export type ProfileType = z.infer<typeof ProfileSchema>;