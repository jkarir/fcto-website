import { z } from 'zod'

// Define schema for a single FAQ item
export const FAQItemSchema = z.object({
  question: z.string(),
  intro: z.string().optional(),
  answer: z.union([z.string(), z.array(z.string())]),
})

// Helper function to check if an answer is an array
export function isAnswerArray(answer: FAQItem['answer']): answer is string[] {
  return Array.isArray(answer)
}

// Define schema for a collection of FAQ items
export const FAQsSchema = z.array(FAQItemSchema)

// TypeScript types inferred from the schemas
export type FAQItem = z.infer<typeof FAQItemSchema>
export type FAQs = z.infer<typeof FAQsSchema>
