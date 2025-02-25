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

export const engagementModels: EngagementModel[] = [
  {
    title: 'Rapid MVP Launch',
    description:
      'For early-stage startups looking to go from idea to product quickly.',
    features: [
      'Define a scalable architecture from day one',
      'Build a functional, investor-ready MVP',
      'Choose the right tech stack to accelerate growth',
      'Validate product-market fit with lean, effective development',
      'Ensure a smooth transition from MVP to scalable product',
    ],
    pricing: {
      headline: 'Value-Based Pricing',
      detail:
        'You pay for a successful MVP launch, not endless development cycles.',
    },
    idealFor:
      'Ideal for founders who need a technical leader to validate, build, and launch fast.',
  },
  {
    title: 'Fractional CTO & Technical Leadership',
    description:
      'For startups and scale-ups that need experienced technical leadership without a full-time hire.',
    features: [
      'Define and execute a strong technical vision',
      'Build a scalable, high-performing tech foundation',
      'Lead technology strategy, product development, and team growth',
      'Hire, mentor, and scale your engineering team',
      'Optimize development workflows for better productivity',
    ],
    pricing: {
      headline: 'Value-Based Pricing',
      detail:
        'Your investment is based on business outcomes—scalability, team efficiency, and technical excellence—not a fixed number of hours.',
    },
    idealFor:
      'Best for growing startups that need both strategic leadership and hands-on execution without committing to a full-time CTO.',
  },
]
