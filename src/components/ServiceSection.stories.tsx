import type { Meta, StoryObj } from '@storybook/react'
import { ServiceSection } from './ServiceSection'
import React from 'react'
import { services } from '../lib/data/services'

const meta = {
  title: 'components/service-section',
  component: ServiceSection,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ServiceSection>

export default meta

type Story = StoryObj<typeof meta>

export const FractionalCTO: Story = {
  args: {
    service: services[0],
  },
}

export const SoftwareEngineering: Story = {
  args: {
    service: services[1],
  },
}

export const StartupAdvisory: Story = {
  args: {
    service: services[2],
  },
}

export const Mobile: Story = {
  args: {
    service: services[0],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
