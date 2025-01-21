import type { Meta, StoryObj } from '@storybook/react'
import Contact from './page'

const meta = {
  title: 'app/contact',
  component: Contact,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Contact>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Name',
    name: 'name',
  },
}
