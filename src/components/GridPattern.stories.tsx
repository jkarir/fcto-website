import type { Meta, StoryObj } from '@storybook/react'
import { GridPattern } from './GridPattern'

const meta = {
  title: 'components/grid-pattern',
  component: GridPattern,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GridPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'h-64 w-64',
  },
}

export const Interactive: Story = {
  args: {
    className: 'h-64 w-64',
    interactive: true,
    yOffset: 0,
  },
}
