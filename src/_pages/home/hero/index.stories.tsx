import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './index'
import React from 'react'

import jurgen_karir from '@/images/jurgen-karir-cropped.jpg'

const meta = {
  title: 'pages/home/hero',
  component: Hero,
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
} satisfies Meta<typeof Hero>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  title: "Your Startup's Fractional CTO",
  description: (
    <>
      <strong>
        You don&apos;t need a full-time CTO—just the right one at the right
        time.
      </strong>
      <br />
      <br />
      I&apos;m <strong>J&#252;rgen Karir</strong>, and I help startups build{' '}
      <strong>scalable, efficient, and high-performing</strong> software—without
      the overhead of a full-time CTO.
    </>
  ),
  person: {
    name: <>J&#252;rgen Karir</>,
    title: 'Fractional CTO',
    image: jurgen_karir,
  },
}

export const Default: Story = {
  args: defaultArgs,
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

export const WithCustomTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Custom Hero Title',
  },
}

export const WithCustomDescription: Story = {
  args: {
    ...defaultArgs,
    description: (
      <>
        <strong>Custom description header</strong>
        <br />
        <br />
        Custom description content with <strong>emphasized text</strong> and
        professional formatting.
      </>
    ),
  },
}
