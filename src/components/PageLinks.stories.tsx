import type { Meta, StoryObj } from '@storybook/react'
import { PageLinks } from './PageLinks'

const samplePages = [
  {
    href: '/work/family-fund',
    date: '2023-01-01',
    title: 'Family Fund',
    description: 'We helped Family Fund revolution financial services.',
  },
  {
    href: '/work/unseal',
    date: '2023-02-01',
    title: 'Unseal',
    description: 'Unseal is a modern platform for sharing secrets.',
  },
]

const meta = {
  title: 'components/page-links',
  component: PageLinks,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Our Work',
    pages: samplePages,
  },
}

export const WithIntro: Story = {
  args: {
    title: 'Our Work',
    pages: samplePages,
    intro: 'Take a look at some of our recent work.',
  },
}
