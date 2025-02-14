import type { Meta, StoryObj } from '@storybook/react'
import { SectionIntro } from './SectionIntro'
import React from 'react'

const meta = {
  title: 'components/section-intro',
  component: SectionIntro,
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
} satisfies Meta<typeof SectionIntro>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  title: 'Build something great',
  eyebrow: 'Services',
  children: 'We help startups and enterprises build amazing products.',
}

export const Primary: Story = {
  args: defaultArgs,
}

export const Smaller: Story = {
  args: {
    ...defaultArgs,
    title: 'Latest Articles',
    eyebrow: 'Blog',
    smaller: true,
    children: 'Insights and updates from our team.',
  },
}

export const Inverted: Story = {
  args: {
    ...defaultArgs,
    title: 'Our Mission',
    eyebrow: 'About',
    invert: true,
    children: 'Creating exceptional digital experiences.',
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

export const WithDescription: Story = {
  args: {
    ...defaultArgs,
    description:
      'A longer description that provides more context about this section and what it contains.',
  },
}

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    fullWidth: true,
    children: (
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 p-8">
            Content {i + 1}
          </div>
        ))}
      </div>
    ),
  },
}

export const Mobile: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
