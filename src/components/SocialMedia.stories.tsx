import type { Meta, StoryObj } from '@storybook/react'
import { SocialMedia } from './SocialMedia'

const meta = {
  title: 'components/social-media',
  component: SocialMedia,
} satisfies Meta<typeof SocialMedia>

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
