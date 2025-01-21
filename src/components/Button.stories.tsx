import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'components/button',
  component: Button,
  args: {
    children: 'Click me',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: fn(),
  },
}

export const Inverted: Story = {
  args: {
    invert: true,
    onClick: fn(),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const AsLink: Story = {
  args: {
    href: '/about',
    children: 'Learn more',
  },
}

export const LongText: Story = {
  args: {
    children: 'This is a very long button text that might wrap',
  },
}
