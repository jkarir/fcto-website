import type { Meta, StoryObj } from '@storybook/react'
import { MarginButton } from './MarginButton'

const meta = {
  title: 'components/margin-button',
  component: MarginButton,
} satisfies Meta<typeof MarginButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/about-me',
    ariaLabel: 'About Me',
    children: 'About Me',
  },
}

export const WithCustomMargin: Story = {
  args: {
    href: '/services',
    ariaLabel: 'Our Services',
    className: 'mt-8',
    children: 'Our Services',
  },
}

export const WithoutAriaLabel: Story = {
  args: {
    href: '/contact',
    children: 'Contact Us',
  },
}
