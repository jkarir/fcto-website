import type { Meta, StoryObj } from '@storybook/react'

import authorImage from '@/images/team/leslie-alexander.jpg'
import { Blockquote } from './Blockquote'

const meta = {
  title: 'components/blockquote',
  component: Blockquote,
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const WithoutImage: Story = {
  args: {
    children:
      "The team at Studio went above and beyond with our onboarding, even offering suggestions for improving our product's accessibility.",
    author: {
      name: 'Leslie Alexander',
      role: 'CEO, Catalyst Solutions',
    },
  },
}

export const WithImage: Story = {
  args: {
    children:
      "Studio's attention to detail and commitment to quality is unmatched. They truly care about delivering the best possible solution.",
    author: {
      name: 'Leslie Alexander',
      role: 'CEO, Catalyst Solutions',
    },
    image: {
      src: authorImage,
      alt: 'Photo of Leslie Alexander',
    },
  },
}
