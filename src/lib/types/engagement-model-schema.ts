import { z } from 'zod'

// Define schema for engagement features (bullet points)
export const EngagementFeatureSchema = z.string()

// Define schema for the engagement highlights (best for, pricing, etc.)
export const EngagementHighlightSchema = z.object({
  icon: z.string(), // Emoji or icon identifier
  label: z.string(), // Label like "Best for" or "Pricing"
  value: z.string(), // The actual value
})

// Define schema for additional information (FAQ-like)
export const AdditionalInfoSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

// Define the main engagement model schema
export const EngagementModelSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  features: z.array(EngagementFeatureSchema),
  highlights: z.array(EngagementHighlightSchema),
  additionalInfo: z.array(AdditionalInfoSchema).optional(),
})

// TypeScript types inferred from the schemas
export type EngagementFeature = z.infer<typeof EngagementFeatureSchema>
export type EngagementHighlight = z.infer<typeof EngagementHighlightSchema>
export type AdditionalInfo = z.infer<typeof AdditionalInfoSchema>
export type EngagementModel = z.infer<typeof EngagementModelSchema>
