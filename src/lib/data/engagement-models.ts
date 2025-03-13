import { EngagementModel } from '@/lib/types/engagement-model-schema'

export const engagementModels: EngagementModel[] = [
  {
    title: 'Rapid MVP Launch',
    description:
      '<strong>For early-stage startups looking to go from idea to product quickly.</strong>',
    features: [
      '<strong>Define a scalable architecture</strong> from day one',
      '<strong>Build a functional, investor-ready MVP</strong>',
      '<strong>Choose the right tech stack</strong> to accelerate growth',
      '<strong>Validate product-market fit</strong> with lean, efficient development',
      '<strong>Ensure a smooth transition</strong> from MVP to a scalable product',
    ],
    pricingDetail:
      '<strong>Value-Based Pricing:</strong> You pay for a <strong>successful MVP launch</strong>, not endless development cycles.',
    idealFor:
      '<strong>Best for:</strong> Founders who need a <strong>technical leader to validate, build, and launch quickly.</strong>',
  },
  {
    title: 'Fractional CTO & Technical Leadership',
    description:
      '<strong>For startups and scale-ups that need experienced technical leadership without a full-time hire.</strong>',
    features: [
      '<strong>Define and execute a strong technical vision</strong>',
      '<strong>Build a scalable, high-performing tech foundation</strong>',
      '<strong>Lead technology strategy, product development, and team growth</strong>',
      '<strong>Hire, mentor, and scale your engineering team</strong>',
      '<strong>Optimize development workflows</strong> for better productivity',
    ],
    pricingDetail:
      '<strong>Value-Based Pricing:</strong> Your investment is based on <strong>business outcomes</strong>—scalability, team efficiency, and technical excellence—<strong>not a fixed number of hours.</strong>',
    idealFor:
      '<strong>Best for:</strong> Growing startups that need <strong>strategic leadership and hands-on execution</strong> without committing to a full-time CTO.',
  },
]
