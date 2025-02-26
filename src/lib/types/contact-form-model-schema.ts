import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  company: z.string().optional(),
  message: z.string().trim().min(1, { message: 'Message is required' }),
})
export type ContactFormValues = z.infer<typeof ContactFormSchema>
