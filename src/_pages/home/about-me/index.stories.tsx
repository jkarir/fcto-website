import type { Meta, StoryObj } from '@storybook/react'
import { AboutMe } from './index'
import React from 'react'

const meta = {
  title: 'pages/home/about-me',
  component: AboutMe,
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
} satisfies Meta<typeof AboutMe>

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
