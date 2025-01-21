import type { Meta, StoryObj } from '@storybook/react'
import { Testimonial } from './Testimonial'
import logoImage from '@/images/clients/family-fund/logomark-dark.svg'

const meta = {
  title: 'components/testimonial',
  component: Testimonial,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Testimonial>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    client: {
      name: 'Family Fund',
      logo: logoImage,
    },
    children:
      'We approached Studio looking for a unique brand that would stand out in a crowded market. What they delivered surpassed our expectations.',
  },
}
