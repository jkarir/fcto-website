import type { Meta, StoryObj } from '@storybook/react'
import { SectionIntro } from './SectionIntro'

const meta = {
  title: 'components/section-intro',
  component: SectionIntro,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SectionIntro>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Build something great',
    eyebrow: 'Services',
    children: 'We help startups and enterprises build amazing products.',
  },
}

export const Smaller: Story = {
  args: {
    title: 'Latest Articles',
    eyebrow: 'Blog',
    smaller: true,
    children: 'Insights and updates from our team.',
  },
}

export const Inverted: Story = {
  args: {
    title: 'Our Mission',
    eyebrow: 'About',
    invert: true,
    children: 'Creating exceptional digital experiences.',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
