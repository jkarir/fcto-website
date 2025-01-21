import type { Meta, StoryObj } from '@storybook/react'
import { GrayscaleTransitionImage } from './GrayscaleTransitionImage'
import imageFile from '@/images/team/leslie-alexander.jpg'

const meta = {
  title: 'components/grayscale-transition-image',
  component: GrayscaleTransitionImage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GrayscaleTransitionImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: imageFile,
    alt: 'Sample image',
  },
}
