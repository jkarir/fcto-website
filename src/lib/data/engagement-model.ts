import { EngagementModel } from '@/lib/types/engagement-model-schema'

export const engagementModels: EngagementModel[] = [
  {
    title: '1.  MVP Launch: Get to Market Fast',
    subtitle:
      'For founders who need to go from idea to product—quickly and with confidence.',
    features: [
      'Architect and build an investor-ready MVP',
      'Choose the right tech stack for speed and scale',
      'Validate product-market fit through lean development',
      'Set the stage for smooth post-MVP scaling',
    ],
    highlights: [
      {
        icon: '💡',
        label: 'Best for',
        value: 'Early-stage startups ready to build and launch fast.',
      },
      {
        icon: '💰',
        label: 'Pricing',
        value: 'Fixed price based on deliverables.',
      },
    ],
    additionalInfo: [
      {
        question: "Don't have a tech team yet?",
        answer:
          "I'll guide your early decisions and bring in trusted resources if needed.",
      },
    ],
  },
  {
    title: '2.  Fractional CTO: Scale Without a Full-Time Hire',
    subtitle:
      "For startups that need strategic technical leadership but aren't ready to hire a full-time CTO.",
    features: [
      'Define and execute a strong technical vision',
      'Build systems that grow with your business',
      'Lead product development and engineering execution',
      'Hire, mentor, and scale your technical team',
    ],
    highlights: [
      {
        icon: '💡',
        label: 'Best for',
        value: 'Startups needing hands-on leadership and strategic direction.',
      },
      {
        icon: '💰',
        label: 'Pricing',
        value: 'Retainer, based on business outcomes.',
      },
    ],
    additionalInfo: [
      {
        question: 'Already have an engineering team?',
        answer:
          "I'll integrate with your team to align execution with strategy and accelerate progress.",
      },
    ],
  },
  {
    title: '3.  Fractional Engineering Manager: Optimize Your Team & Execution',
    subtitle:
      'For startups growing their team and needing strong execution, structure, and coaching.',
    features: [
      'Establish engineering best practices and clear processes',
      'Improve delivery speed and collaboration',
      'Mentor engineers and level up your team',
      'Reduce technical debt without slowing development',
    ],
    highlights: [
      {
        icon: '💡',
        label: 'Best for',
        value: 'Startups scaling their engineering team.',
      },
      {
        icon: '💰',
        label: 'Pricing',
        value: 'Retainer, based on team growth and efficiency.',
      },
    ],
    additionalInfo: [
      {
        question: 'Need a balance between strategy and execution?',
        answer:
          'I provide leadership and mentorship to keep your team focused and effective.',
      },
    ],
  },
]
