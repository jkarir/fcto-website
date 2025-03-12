import type { Meta, StoryObj } from '@storybook/react'
import { ContactSection } from './ContactSection'

const meta = {
  title: 'components/contact-section',
  component: ContactSection,
} satisfies Meta<typeof ContactSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
