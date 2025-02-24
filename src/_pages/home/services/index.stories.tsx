import type { Meta, StoryObj } from '@storybook/react'
import { Services } from './index'
import React from 'react'

const meta = {
  title: 'pages/home/services',
  component: Services,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Services>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  eyebrow: 'Services',
  title: 'Your Fractional CTO & Technical Partner',
  description:
    'Technical leadership, software development, and expert guidance to help you build the right tech for your business.',
}

export const Primary: Story = {
  args: defaultArgs,
}

export const WithCustomContent: Story = {
  args: {
    ...defaultArgs,
    eyebrow: 'Our Expertise',
    title: 'Technical Leadership & Development',
    description:
      'Strategic guidance and hands-on development to help you build scalable, efficient software.',
  },
}

export const Inverted: Story = {
  args: {
    ...defaultArgs,
    invert: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-neutral-950">
        <Story />
      </div>
    ),
  ],
}

export const Mobile: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
