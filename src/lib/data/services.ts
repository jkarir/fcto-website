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
          "I'll help you build a tech strategy that aligns with your business vision, making sure your engineering efforts are focused on achieving your goals. Together, we'll create a clear roadmap that guides your growth while minimizing risks and ensuring scalability.",
      },
      {
        title: 'Business & Product Alignment',
        description:
          'I ensure your engineering team’s efforts are directly tied to your product’s goals and business objectives, making sure your technology solves real customer problems, fits market demands, and supports business growth.',
      },
      {
        title: 'Tech-Driven Business Strategy',
        description:
          'I align your technology strategy with your business goals, using tech to differentiate your company, streamline operations, and create new revenue opportunities, all while positioning you for long-term success.',
      },
      {
        title: 'Architecture & Scalability Consulting',
        description:
          'I help design secure and scalable systems that grow with your business. From creating a strategic tech architecture to implementing cloud solutions and automation, I ensure your infrastructure is future-proof and capable of supporting long-term growth.',
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
    subTitle: 'Hands-On Leadership to Scale & Strengthen Your Engineering Team',
    image: { src: imageLaptop, shape: 1 },
    items: [
      {
        title: 'Team Leadership & Mentorship',
        description:
          "I bring hands-on leadership to help guide your engineers, fostering a culture of collaboration and growth. I'm there to help your team stay motivated, communicate effectively, and keep development on track.",
      },
      {
        title: 'Process Optimization & Delivery Execution',
        description:
          "I'll work with your team to streamline workflows, remove bottlenecks, and improve collaboration. My focus is on making sure your development processes are efficient and that your team delivers quality work on time, every time.",
      },
      {
        title: 'Technical Decision-Making Support',
        description:
          "When technical challenges arise, I'm there to provide the guidance needed to make the right decisions quickly. I'll help your team navigate blockers, improve code quality, and keep development moving forward without bottlenecks.",
      },
      {
        title: 'Cross-Team Communication & Alignment',
        description:
          'I ensure your engineering, product, and leadership teams are always aligned on priorities and goals. With clear communication and a shared vision, your team can focus on what matters most—delivering great products.',
      },
      {
        title: 'Full-Stack & Mobile Development Leadership',
        description:
          'I lead your development teams in building solid, scalable systems using the best practices in full-stack and mobile development. I’ll help ensure your team works efficiently, executes seamlessly, and builds products that are ready to scale.',
      },
    ],
    cta: {
      title: "Let's talk",
      header: 'Need hands-on execution and team leadership?',
    },
  },
]
