import imageTechnologyStrategy from '@/images/technology-strategy.webp'
import imageLaptop from '@/images/software-engineering-consulting.webp'
import imageStartupAdvisory from '@/images/startup-advisory.webp'
import { Service } from '@/lib/types/services-model-schema'

export const services: Service[] = [
  {
    title: 'Fractional CTO & Technology Leadership',
    subTitle: 'Senior Tech Leadership, Tailored to Your Needs',
    bestFor:
      '<strong>Best for:</strong> Startups that need <strong>expert technical leadership and hands-on execution </strong> without committing to a full-time CTO.',
    image: { src: imageTechnologyStrategy, shape: 0 },
    items: [
      {
        title: 'Tech Strategy, Roadmap & Growth Execution',
        description:
          'Defining a <strong>clear roadmap</strong> that aligns with business goals, ensuring <strong>scalability, security, and long-term growth</strong>. This includes leveraging AI to optimize workflows, automate processes, and improve engineering efficiency.',
      },
      {
        title: 'Team Leadership, Scaling & Process Optimization',
        description:
          'Helping engineers grow, improving team workflows, and implementing <strong>automation strategies</strong> to reduce bottlenecks and improve efficiency.',
      },
      {
        title: 'Architecture & Scalability Consulting',
        description:
          'Designing systems to handle growth efficiently, incorporating <strong>AI-driven insights</strong> to improve performance, reduce costs, and enhance operational resilience.',
      },
    ],
  },
  {
    title: 'Software Engineering Consulting',
    subTitle: 'Hands-On Expertise to Build, Scale & Improve Your Software',
    bestFor:
      '<strong>Best for:</strong> Startups & teams looking to <strong>scale their web and mobile applications efficiently</strong> while integrating AI and automation.',
    image: { src: imageLaptop, shape: 1 },
    items: [
      {
        title: 'Full-Stack Development',
        items: [
          '<strong>High-performance web applications</strong> (<strong>React, Next.js</strong>) deliver fast, scalable, and engaging experiences. These applications provide <strong>a seamless and responsive user interface</strong> optimized for performance.',
          '<strong>Robust backend systems</strong> (<strong>REST APIs, GraphQL, PostgreSQL</strong>) ensure security, efficiency, and scalability. These systems support <strong>complex features and integrations</strong>, enabling seamless data flow.',
        ],
      },
      {
        title: 'Mobile Development',
        description:
          '<strong>High-performance mobile applications</strong> (<strong>React Native, iOS, Flutter</strong>) deliver fast, reliable, and scalable experiences. These applications are designed to provide <strong>a seamless user experience across devices</strong>.',
      },
      {
        title: 'Cloud Infrastructure & DevOps Optimization',
        description:
          '<strong>Designing secure, scalable cloud architectures</strong> while automating deployments with <strong>CI/CD pipelines</strong>, <strong>Infrastructure as Code</strong>, and <strong>AI-driven monitoring</strong> to optimize cost and performance.',
      },
      {
        title: 'AI Application Development',
        description:
          '<strong>Building agentic systems</strong>, such as AI agents and autonomous workflows, to streamline operations, automate decision-making, and improve process efficiency.',
      },
    ],
  },
  {
    title: 'Startup Advisory',
    subTitle: 'From Idea to Execution: Laying a Strong Foundation',
    bestFor:
      '<strong>Best for:</strong> Founders who need <strong>strategic technical guidance to validate, build, and scale effectively</strong>.',
    image: { src: imageStartupAdvisory, shape: 2 },
    items: [
      {
        title: 'Technical Feasibility Assessments',
        description:
          'Evaluating product viability, identifying risks, and ensuring smart tech decisions.',
      },
      {
        title: 'Early Product Strategy',
        description:
          'Shaping an MVP</strong>, prioritizing features, and aligning development with market needs, including exploring AI where it <strong>drives measurable impact</strong>.',
      },
      {
        title: 'Building Your First Engineering Team',
        description:
          'Guidance on <strong>hiring, structuring, and leading a high-performing team</strong> from day one.',
      },
      {
        title: 'From MVP to Scale',
        description:
          'Setting up <strong>development processes, team structures, and tech stacks</strong> that enable seamless scaling.',
      },
    ],
  },
]
