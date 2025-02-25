import type { Meta, StoryObj } from '@storybook/react'
import EngagementModels from './page'
import React from 'react'

const meta = {
  title: 'app/engagement-models',
  component: EngagementModels,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EngagementModels>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

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

export const Dark: Story = {
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
