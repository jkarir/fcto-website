import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  company: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
})
export type ContactFormValues = z.infer<typeof ContactFormSchema>
