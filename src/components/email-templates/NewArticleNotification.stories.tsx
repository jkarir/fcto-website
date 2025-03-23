import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { NewArticleNotification } from './NewArticleNotification'

const meta = {
  title: 'components/email-templates/new-article-notification',
  component: NewArticleNotification,
} satisfies Meta<typeof NewArticleNotification>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    articleTitle: 'Building Scalable Web Applications with Next.js',
    articleDescription:
      'A comprehensive guide to building performant and scalable web applications using Next.js and React.',
    articleExcerpt:
      'When it comes to modern web development, choosing the right framework is crucial. Next.js offers an excellent balance of performance, developer experience, and scalability...',
    articleUrl:
      'https://jurgenkarir.com/blog/building-scalable-web-applications-with-nextjs',
    publicationDate: 'March 20, 2025',
    coverImageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    unsubscribeUrl: 'https://jurgenkarir.com/unsubscribe?token=abc123',
  },
}

export const LongTitle: Story = {
  args: {
    articleTitle:
      'The Complete Guide to Microservices Architecture: Patterns, Best Practices, and Common Pitfalls to Avoid in 2025',
    articleDescription:
      'Learn how to implement microservices effectively and avoid common architectural mistakes.',
    articleExcerpt:
      'Microservices have become the de facto standard for building scalable, maintainable applications. However, implementing them correctly requires careful consideration...',
    articleUrl: 'https://jurgenkarir.com/blog/microservices-architecture-guide',
    publicationDate: 'March 15, 2025',
    coverImageUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    unsubscribeUrl: 'https://jurgenkarir.com/unsubscribe?token=xyz789',
  },
}

export const WithoutCoverImage: Story = {
  args: {
    articleTitle: 'AI for Startups: Practical Applications',
    articleDescription:
      'Discover how early-stage startups can leverage AI without massive investments.',
    articleExcerpt:
      "AI doesn't have to be complicated or expensive to implement. In this article, we explore practical ways startups can integrate AI capabilities without dedicated data science teams.",
    articleUrl: 'https://jurgenkarir.com/blog/ai-for-startups',
    publicationDate: 'March 10, 2025',
    unsubscribeUrl: 'https://jurgenkarir.com/unsubscribe?token=def456',
  },
}

export const WithCustomAuthor: Story = {
  args: {
    articleTitle: 'Technical Debt: When to Pay It Off and When to Live With It',
    articleDescription:
      'A pragmatic approach to managing technical debt in growing products.',
    articleExcerpt:
      'Not all technical debt is created equal. Some needs immediate attention, while other forms can be strategically deferred. The key is knowing the difference.',
    articleUrl: 'https://jurgenkarir.com/blog/managing-technical-debt',
    publicationDate: 'March 5, 2025',
    authorName: 'Jürgen Karir & Engineering Team',
    coverImageUrl:
      'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    unsubscribeUrl: 'https://jurgenkarir.com/unsubscribe?token=ghi789',
  },
}
