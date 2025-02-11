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

export const Default: Story = {}

export const CustomContent: Story = {
  args: {
    eyebrow: 'Our Expertise',
    title: 'Modern solutions for modern problems',
    description:
      'We leverage cutting-edge technologies to deliver exceptional results.',
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
