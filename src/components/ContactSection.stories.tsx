import type { Meta, StoryObj } from '@storybook/react'

import { ContactSection } from './ContactSection'

const meta = {
  title: 'components/contact-section',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const IntersectionObserverMock: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}
