import type { Meta, StoryObj } from '@storybook/react'
import { AboutMe } from './index'

const meta = {
  title: '_pages/home/about-me',
  component: AboutMe,
} satisfies Meta<typeof AboutMe>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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
