import type { Meta, StoryObj } from '@storybook/react'
import BlogArticleWrapper from './wrapper'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import * as Content from './3-lessons-we-learned-going-back-to-the-office/page.mdx'

const meta = {
  title: 'app/blog/wrapper',
  component: BlogArticleWrapper,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogArticleWrapper>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    article: {
      metadata: {
        description: Content.metadata.description,
        title: Content.metadata.title,
        author: Content.article.author,
        date: Content.article.date,
      },
      author: Content.article.author,
      date: Content.article.date,
      description: Content.metadata.description,
      title: Content.metadata.title,
      href: '/blog/3-lessons-we-learned-going-back-to-the-office',
    },
    children: <Content.default />,
  },
}
