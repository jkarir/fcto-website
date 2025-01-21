import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta = {
  title: 'components/container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div className="bg-gray-100 p-4">Content</div>,
  },
}

export const AsSection: Story = {
  args: {
    as: 'section',
    children: <div className="bg-gray-100 p-4">Section Content</div>,
  },
}
