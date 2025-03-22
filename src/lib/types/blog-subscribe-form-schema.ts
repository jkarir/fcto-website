import { z } from 'zod'

export const BlogSubscribeFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})
export type BlogSubscribeFormValues = z.infer<typeof BlogSubscribeFormSchema>
