import imageTechnologyStrategy from '@/images/technology-strategy.webp'
import imageLaptop from '@/images/software-engineering-consulting.webp'
import imageStartupAdvisory from '@/images/startup-advisory.webp'
import { Service } from '@/lib/types/services-model-schema'

export const services: Service[] = [
  {
    title: 'Fractional CTO & Technology Leadership',
    subTitle:
      'Technical Strategy & Leadership to Align Engineering with Business Growth',
    image: { src: imageTechnologyStrategy, shape: 0 },
    items: [
      {
        title: 'Tech Strategy, Roadmap & Growth Execution',
        description:
          'I help startups define a <strong>scalable technology strategy</strong>, manage technical risks, and align product development with business goals.',
      },
      {
        title: 'Business & Product Alignment',
        description:
          'Technology should support <strong>business growth, customer needs, and long-term scalability.</strong> I ensure engineering priorities align with revenue and product-market fit.',
      },
      {
        title: 'Architecture & Scalability Consulting',
        description:
          'I design <strong>scalable, secure, and cost-efficient</strong> systems while incorporating modern AI, automation, and cloud strategies.',
      },
    ],
    subItem: {
      title: 'Scalable Full-Stack & Mobile Architecture',
      description:
        'I ensure your web and mobile applications are built with the right architecture and scalability in mind. From defining the right tech stack to ensuring seamless backend integration, I help you build a future-proof product.',
    },
    cta: {
      title: "Let's talk",
      header:
        'Need a Fractional CTO to define your roadmap, scale your team, and align tech with business growth?',
    },
  },
  {
    title: 'Fractional Engineering Management',
    subTitle: 'Hands-On Leadership to Scale & Strengthen Your Engineering Team',
    image: { src: imageLaptop, shape: 1 },
    items: [
      {
        title: 'Team Leadership & Mentorship',
        description:
          '<strong>Providing <strong>day-to-day engineering leadership</strong>, mentoring developers, and ensuring teams operate efficiently.',
      },
      {
        title: 'Process Optimization & Delivery Execution',
        description:
          'Running sprint planning, improving team collaboration, and keeping development <strong>on track and on schedule.</strong>',
      },
      {
        title: 'Technical Decision-Making Support',
        description:
          'Helping teams <strong>resolve technical blockers</strong>, improve code quality, and scale development processes without bottlenecks.',
      },
      {
        title: 'Cross-Team Communication & Alignment',
        description:
          'Bridging the gap between <strong>engineering, product, and leadership</strong> to keep priorities clear and execution efficient.',
      },
    ],
    subItem: {
      title: 'Full-Stack & Mobile Development Leadership',
      description:
        'I ensure your product is built with scalable infrastructure and best development practices while leading your team to execute efficiently.',
    },
    cta: {
      title: "Let's talk",
      header: 'Need hands-on execution and team leadership?',
    },
  },
]
