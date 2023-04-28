import { z } from "zod";

export const UserSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    bio: z.string(),
    image: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;