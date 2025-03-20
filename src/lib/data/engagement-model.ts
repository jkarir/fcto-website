import { EngagementModel } from '@/lib/types/engagement-model-schema'

export const engagementModels: EngagementModel[] = [
  {
    title: 'MVP Launch: Get to Market Fast',
    subtitle: 'For founders who need to go from idea to product quickly.',
    features: [
      'Architect and build an investor-ready MVP',
      'Choose the right tech stack for speed and scalability',
      'Validate product-market fit through lean development',
      'Ensure a smooth transition from MVP to a scalable product',
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
        question: "Don't have a technical team yet?",
        answer:
          "I'll help you make the right early decisions and, if needed, bring in the right resources to get your MVP built efficiently.",
      },
    ],
  },
  {
    title: 'Fractional CTO: Scale Without a Full-Time Hire',
    subtitle:
      "For startups that need strategic technical leadership but aren't ready to hire a full-time CTO.",
    features: [
      'Define and execute a strong technical vision',
      'Build scalable, high-performing systems',
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
          'I integrate as a fractional leader, working with your existing developers to improve execution and bridge the gap between business and technology.',
      },
    ],
  },
  {
    title: 'Fractional Engineering Manager: Optimize Your Team & Execution',
    subtitle:
      'For startups scaling their engineering team and needing structure, execution, and leadership.',
    features: [
      'Establish engineering best practices and improve team efficiency',
      'Implement processes to scale the team and accelerate delivery',
      'Provide hands-on mentorship and coaching for engineers',
      'Reduce technical debt while keeping development fast and focused',
    ],
    highlights: [
      {
        icon: '💡',
        label: 'Best for',
        value:
          'Startups growing their engineering team and looking for execution-focused leadership.',
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
          'I provide both technical leadership and hands-on mentorship to help your engineering team operate at its best.',
      },
    ],
  },
]
