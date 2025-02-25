import imageWhiteboard from '@/images/whiteboard.jpg'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import { Service } from '@/lib/types/services-model-schema'

export const services: Service[] = [
  {
    title: 'Fractional CTO & Technology Leadership',
    subTitle: 'Senior Tech Leadership, Tailored to Your Needs',
    intro:
      'For startups that need senior technical leadership without hiring a full-time CTO, I offer:',
    image: { src: imageWhiteboard },
    items: [
      {
        title: 'Tech Strategy & Roadmap',
        description:
          'Ensuring your technology stack is scalable, secure, and aligned with your long-term business strategy.',
      },
      {
        title: 'Team Leadership & Mentorship',
        description:
          'Guiding your engineers to develop stronger technical skills, collaborate effectively, and build high-quality software with confidence.',
      },
      {
        title: 'Architecture & Scalability Consulting',
        description:
          'Ensuring your platform is built to handle increasing demand while optimizing for performance, automation, and user experience, leveraging AI where it makes sense to enhance scalability and efficiency.',
      },
      {
        title: 'Growth Strategy & Execution',
        description:
          'Helping startups refine their product vision, scale technology efficiently, and optimize team structures for sustainable success. This includes strategic planning, process improvements, and ensuring your tech infrastructure supports future expansion.',
      },
    ],
  },
  {
    title: 'Software Engineering Consulting',
    subTitle: 'Hands-On Expertise to Build, Scale & Improve Your Software',
    intro: 'I roll up my sleeves and help with:',
    image: { src: imageLaptop },
    items: [
      {
        title: 'Full-Stack & Mobile Development',
        description:
          'Building reliable, high-performance applications that scale with your business, ensuring seamless user experiences and maintainability.',
      },
      {
        title: 'Code & Architecture Reviews',
        description:
          'Spotting weaknesses and making your codebase rock solid, making smart use of AI in the review process when possible.',
      },
      {
        title: 'DevOps & Cloud Optimization.',
        description:
          'Improving CI/CD, cloud infrastructure, and automation, leveraging AI for efficiency where possible.',
      },
      {
        title: 'Agile & Product Development',
        description:
          'Helping your team streamline workflows, remove bottlenecks, and deliver high-quality software faster with well-defined processes and best practices.',
      },
    ],
  },
  {
    title: 'Startup Advisory',
    subTitle: 'From Idea to Execution: Laying a Strong Foundation',
    intro:
      'I work with early-stage startups to turn ideas into tangible, scalable products by validating technical feasibility, aligning technology with business goals, and setting up the right foundations for growth. My services include:',
    image: { src: imageWhiteboard },
    items: [
      {
        title: 'Technical Feasibility Assessments',
        description:
          'Evaluating the viability of your product idea, identifying potential risks, and ensuring your tech choices align with your long-term goals.',
      },
      {
        title: 'Early Product Strategy',
        description:
          'Helping you shape an MVP, prioritize features, and refine your product vision based on market needs and customer feedback.',
      },
      {
        title: 'Building Your First Engineering Team',
        description:
          'Guidance on hiring, structuring, and leading a strong technical team that can execute effectively from day one.',
      },
    ],
  },
]
