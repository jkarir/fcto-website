import { z } from 'zod'

export const EngagementModelSchema = z.object({
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  pricing: z.object({
    headline: z.string(),
    detail: z.string(),
  }),
  idealFor: z.string(),
})

export type EngagementModel = z.infer<typeof EngagementModelSchema>
