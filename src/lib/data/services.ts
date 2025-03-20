import imageTechnologyStrategy from '@/images/technology-strategy.webp'
import imageLaptop from '@/images/software-engineering-consulting.webp'
import imageStartupAdvisory from '@/images/startup-advisory.webp'
import { Service } from '@/lib/types/services-model-schema'

export const services: Service[] = [
  {
    title: 'Fractional CTO & Technology Leadership',
    subTitle:
      'Hands-on technical leadership to help you scale fast, avoid tech debt, and stay focused on growth',
    image: { src: imageTechnologyStrategy, shape: 0 },
    items: [
      {
        title: 'Startup Tech Strategy & Execution',
        description:
          'I help you define a <strong>clear, actionable tech roadmap</strong> that aligns with your business vision. Whether you’re building your MVP, preparing to scale, or optimizing development processes, I provide the technical strategy to keep you moving <strong>fast without breaking things</strong>.',
      },
      {
        title: 'Engineering & Product Alignment',
        description:
          'Engineering should drive business success—not just ship code. I ensure your development efforts are focused on <strong>building the right features, solving real customer problems, and hitting key milestones</strong>, so you don’t waste time or resources.',
      },
      {
        title: 'Smart Architecture & Scalability Planning',
        description:
          'Scaling too early is a waste; scaling too late is a disaster. I design <strong>lean, scalable architectures that grow with your business</strong>, ensuring you avoid <strong>technical debt, costly rewrites, and scaling bottlenecks</strong> when your startup takes off.',
      },
      {
        title: 'Early-Stage Tech Team Leadership',
        description:
          'Early-stage teams need <strong>clarity, focus, and the right technical culture</strong>. I help you set up strong engineering processes, improve team efficiency, and provide <strong>mentorship and guidance</strong>—even if you’re not ready for a full-time CTO.',
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
        title: 'Engineering Team Leadership & Growth',
        description:
          'Your early-stage engineers need <strong>guidance, structure, and mentorship</strong> to stay efficient and grow with the company. I provide <strong>hands-on leadership</strong> to help your team <strong>stay motivated, collaborate effectively, and level up their skills</strong>, even if you’re not ready for a full-time EM.',
      },
      {
        title: 'Efficient Development & Faster Delivery',
        description:
          'Speed matters in early-stage startups. I help <strong>streamline workflows, remove bottlenecks, and improve collaboration</strong> so your team can build and ship high-quality products <strong>faster—without cutting corners</strong>.',
      },
      {
        title: 'Smart, Fast Technical Decision-Making',
        description:
          'Startups can’t afford costly mistakes. When technical challenges arise, I provide <strong>practical guidance on architecture, trade-offs, and best practices</strong>, ensuring your team makes the <strong>right decisions quickly</strong> and avoids technical debt that slows you down later.',
      },
      {
        title: 'Cross-Team Communication & Alignment',
        description:
          'Misalignment between <strong>engineering, product, and leadership</strong> kills momentum. I make sure your team is always <strong>focused on the right priorities</strong>, keeping stakeholders aligned so engineers can build <strong>without distractions or wasted effort</strong>.',
      },
      {
        title: 'Full-Stack & Mobile Development Leadership',
        description:
          "If you're building <strong>full-stack or mobile applications</strong>, I provide <strong>deep technical leadership</strong> to ensure your team follows best practices, builds scalable systems, and delivers a <strong>high-quality product that can grow with your business</strong>.",
      },
    ],
    cta: {
      title: "Let's talk",
      header: 'Need hands-on execution and team leadership?',
    },
  },
]
