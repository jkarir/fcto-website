import type { Meta, StoryObj } from '@storybook/react'
import { ContactForm } from './ContactForm'
import { within, userEvent } from '@storybook/test'
import { faker } from '@faker-js/faker'
import React from 'react'

const meta = {
  title: 'components/contact-form',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-2xl bg-white p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const Filled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const nameInput = canvas.getByLabelText('Name')
    const emailInput = canvas.getByLabelText('Email')
    const companyInput = canvas.getByLabelText('Company')
    const messageInput = canvas.getByLabelText('Message')

    await userEvent.type(nameInput, faker.person.fullName())
    await userEvent.type(emailInput, faker.internet.email())
    await userEvent.type(companyInput, faker.company.name())
    await userEvent.type(messageInput, faker.lorem.paragraph())
  },
}

export const WithValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText('Email')
    await userEvent.type(emailInput, 'invalid-email')
    await userEvent.tab()

    const messageInput = canvas.getByLabelText('Message')
    await userEvent.type(messageInput, 'short')
    await userEvent.tab()
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
