import type { Meta, StoryObj } from '@storybook/react'
import { FadeIn, FadeInStagger } from './FadeIn'

const meta = {
  title: 'components/fade-in',
  component: FadeIn,
} satisfies Meta<typeof FadeIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div className="bg-gray-100 p-4">Fade In Content</div>,
  },
}

export const WithStagger: Story = {
  render: () => (
    <FadeInStagger>
      <FadeIn>
        <div className="mb-4 bg-gray-100 p-4">Item 1</div>
      </FadeIn>
      <FadeIn>
        <div className="mb-4 bg-gray-100 p-4">Item 2</div>
      </FadeIn>
      <FadeIn>
        <div className="bg-gray-100 p-4">Item 3</div>
      </FadeIn>
    </FadeInStagger>
  ),
}
