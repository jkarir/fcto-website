import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Advantages } from './index'

const meta = {
  title: '_pages/home/advantages',
  component: Advantages,
} satisfies Meta<typeof Advantages>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithCustomTitle: Story = {
  args: {
    title: 'The Benefits of Hiring a Fractional CTO',
  },
}

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Benefits',
    title: 'Why Choose My Services',
  },
}

export const WithDescription: Story = {
  args: {
    eyebrow: 'Advantages',
    title: 'Why Choose My Services',
    description:
      'I bring decades of experience in software engineering and technical leadership to help your business grow.',
  },
}
