import type { Meta, StoryObj } from '@storybook/react'
import { Logo, Logomark } from './Logo'
import React from 'react'

const meta = {
  title: 'components/logo',
  component: Logo,
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Inverted: Story = {
  args: {
    invert: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Filled: Story = {
  args: {
    filled: true,
  },
}

export const LogomarkOnly: Story = {
  render: () => <Logomark className="h-8 w-8" />,
}
