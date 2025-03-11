import type { Meta, StoryObj } from '@storybook/react'
import { Clients } from './index'
import { faker } from '@faker-js/faker'
import React from 'react'

const mockClients = {
  client1: {
    name: 'Acme Corp',
    image: {
      light: faker.image.url(),
      dark: faker.image.url(),
      imageisName: false,
    },
  },
  client2: {
    name: 'TechStart',
    image: {
      light: faker.image.url(),
      dark: faker.image.url(),
      imageisName: true,
    },
  },
  client3: {
    name: 'Innovation Labs',
    image: {
      light: faker.image.url(),
      dark: faker.image.url(),
      imageisName: false,
    },
  },
  client4: {
    name: 'Future Systems',
    image: {
      light: faker.image.url(),
      dark: faker.image.url(),
      imageisName: true,
    },
  },
}

const meta = {
  title: 'pages/home/clients',
  component: Clients,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-white">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
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
    clients: mockClients,
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

export const SingleClient: Story = {
  args: {
    clients: {
      client1: mockClients.client1,
    },
  },
}

export const ManyClients: Story = {
  args: {
    clients: Object.fromEntries(
      Array.from({ length: 8 }, (_, i) => [
        `client${i + 1}`,
        {
          name: faker.company.name(),
          image: {
            light: faker.image.url(),
            dark: faker.image.url(),
            imageisName: i % 2 === 0,
          },
        },
      ]),
    ),
  },
}
