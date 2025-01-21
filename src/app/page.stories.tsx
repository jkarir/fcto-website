import type { Meta, StoryObj } from '@storybook/react'

import Home from '#src/app/page'

const meta = {
  title: 'app/home',
  component: Home,
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
