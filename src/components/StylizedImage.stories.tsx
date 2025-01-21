import type { Meta, StoryObj } from '@storybook/react'
import { StylizedImage } from './StylizedImage'
import image from '@/images/team/leslie-alexander.jpg'

const meta = {
  title: 'components/stylized-image',
  component: StylizedImage,
} satisfies Meta<typeof StylizedImage>

export default meta
type Story = StoryObj<typeof meta>

export const Shape0: Story = {
  args: {
    src: image,
    shape: 0,
  },
}

export const Shape1: Story = {
  args: {
    src: image,
    shape: 1,
  },
}

export const Shape2: Story = {
  args: {
    src: image,
    shape: 2,
  },
}
