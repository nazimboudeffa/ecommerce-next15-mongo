import { z } from "zod";

export const singInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});