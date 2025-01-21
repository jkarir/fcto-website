import type { Meta, StoryObj } from '@storybook/react'
import { Offices } from './Offices'

const meta = {
  title: 'components/offices',
  component: Offices,
} satisfies Meta<typeof Offices>

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
