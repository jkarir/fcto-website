import { z } from 'zod'

// Define schema for a single FAQ item
export const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

// Define schema for a collection of FAQ items
export const FAQsSchema = z.array(FAQItemSchema)

// TypeScript types inferred from the schemas
export type FAQItem = z.infer<typeof FAQItemSchema>
export type FAQs = z.infer<typeof FAQsSchema>
