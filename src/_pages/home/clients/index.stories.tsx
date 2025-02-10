import type { Meta, StoryObj } from '@storybook/react'
import { Clients } from './index'
import { faker } from '@faker-js/faker'

const mockClients: Array<[string, string]> = Array.from({ length: 8 }, () => [
  faker.company.name(),
  faker.image.dataUri({ width: 158, height: 48 }),
])

const meta = {
  title: 'pages/home/clients',
  component: Clients,
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
} satisfies Meta<typeof Clients>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    clients: mockClients,
  },
}

export const WithCustomTitle: Story = {
  args: {
    clients: mockClients,
    children: 'Our trusted partners',
  },
}

export const Mobile: Story = {
  args: {
    clients: mockClients.slice(0, 4),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Loading: Story = {
  args: {
    clients: [],
  },
}
