import type { Meta, StoryObj } from '@storybook/react'
import { CaseStudies } from './index'
import { faker } from '@faker-js/faker'
import { type CaseStudy, type MDXEntry } from '@/lib/mdx'

const createMockCaseStudy = (): MDXEntry<CaseStudy> => {
  const title = faker.company.catchPhrase()
  return {
    href: `/work/${faker.helpers.slugify(title)}`,
    metadata: {
      date: faker.date.past().toISOString().split('T')[0],
      client: faker.company.name(),
      title,
      description: faker.company.buzzPhrase(),
      summary: Array.from({ length: 3 }, () => faker.company.catchPhrase()),
      logo: faker.image.url({ width: 64, height: 64 }),
      image: {
        src: faker.image.url({ width: 1920, height: 1080 }),
        alt: title,
      },
      service: faker.company.buzzNoun(),
      testimonial: {
        author: {
          name: faker.person.fullName(),
          role: faker.person.jobTitle(),
        },
        content: faker.lorem.paragraph(),
      },
    },
    date: faker.date.past().toISOString().split('T')[0],
    client: faker.company.name(),
    title,
    description: faker.company.buzzPhrase(),
    summary: Array.from({ length: 3 }, () => faker.company.catchPhrase()),
    logo: faker.image.url({ width: 64, height: 64 }),
    image: {
      src: faker.image.url({ width: 1920, height: 1080 }),
      alt: title,
    },
    service: faker.company.buzzNoun(),
    testimonial: {
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
      },
      content: faker.lorem.paragraph(),
    },
  }
}

const mockCaseStudies = Array.from({ length: 3 }, createMockCaseStudy)

const meta = {
  title: 'pages/home/case-studies',
  component: CaseStudies,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CaseStudies>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    caseStudies: mockCaseStudies,
  },
}

export const SingleCaseStudy: Story = {
  args: {
    caseStudies: [mockCaseStudies[0]],
  },
}

export const CustomTitle: Story = {
  args: {
    caseStudies: mockCaseStudies,
    title: 'Our Success Stories',
    description: 'Take a look at some of our proudest achievements',
  },
}

export const Mobile: Story = {
  args: {
    caseStudies: mockCaseStudies,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
