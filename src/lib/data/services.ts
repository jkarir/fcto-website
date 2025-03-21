import imageTechnologyStrategy from '@/images/technology-strategy.webp'
import imageLaptop from '@/images/software-engineering-consulting.webp'
import imageStartupAdvisory from '@/images/startup-advisory.webp'
import { Service } from '@/lib/types/services-model-schema'

export const services: Service[] = [
  {
    title: 'Fractional CTO & Technology Leadership',
    subTitle:
      'Hands-on technical leadership to help you scale fast, avoid tech debt, and stay focused on what matters.',
    image: { src: imageTechnologyStrategy, shape: 0 },
    items: [
      {
        title: 'Startup Tech Strategy & Execution',
        description:
          "I help you define a clear, actionable roadmap that aligns with your business goals—whether you're building your MVP, scaling systems, or unblocking execution.",
      },
      {
        title: 'Engineering & Product Alignment',
        description:
          'I keep your team focused on building the right features, solving real problems, and hitting key milestones—so nothing slows you down.',
      },
      {
        title: 'Smart Architecture & Scalability Planning',
        description:
          'I design lean, scalable systems that grow with your business—avoiding costly rewrites, bottlenecks, or premature complexity.',
      },
      {
        title: 'Early-Stage Tech Team Leadership',
        description:
          'I guide early teams with the right technical culture, lightweight processes, and mentorship to help them stay efficient and focused.',
      },
    ],
    cta: {
      title: "Let's talk",
      header:
        'Need a Fractional CTO to define your roadmap, scale your team, and align tech with business growth?',
    },
  },
  {
    title: 'Fractional Engineering Management',
    subTitle:
      'Hands-on leadership to keep your engineering team focused, productive, and aligned with business goals.',
    image: { src: imageLaptop, shape: 1 },
    items: [
      {
        title: 'Team Leadership & Growth',
        description:
          'Early-stage engineers need guidance to stay efficient and grow with your company. I provide structure, mentorship, and technical leadership—even if you’re not ready for a full-time EM.',
      },
      {
        title: 'Faster, More Efficient Delivery',
        description:
          'I streamline workflows, remove bottlenecks, and improve collaboration so your team ships high-quality software—faster and with fewer setbacks.',
      },
      {
        title: 'Smart, Fast Decision-Making',
        description:
          'When challenges come up, I help your team make the right calls—balancing speed, quality, and long-term sustainability to avoid technical debt.',
      },
      {
        title: 'Cross-Functional Alignment',
        description:
          'I keep engineering, product, and leadership aligned—ensuring teams stay focused on the right priorities and momentum doesn’t get lost in translation.',
      },
      {
        title: 'Full-Stack & Mobile Leadership',
        description:
          'If you’re building web or mobile apps, I bring deep technical guidance to ensure your systems scale and your product quality holds up as you grow.',
      },
    ],
    cta: {
      title: "Let's talk",
      header: 'Need hands-on execution and team leadership?',
    },
  },
]
