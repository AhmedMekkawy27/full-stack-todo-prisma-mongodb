import { z } from "zod";

export const todoFormSchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  body: z.string().max(50, {message: "Body must not be longer than 50 characters."}).optional(),
  completed: z.boolean()
});
