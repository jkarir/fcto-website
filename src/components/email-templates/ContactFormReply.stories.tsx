import type { Meta, StoryObj } from '@storybook/react'
import { ContactFormReply } from './ContactFormReply'
import { faker } from '@faker-js/faker'
import React from 'react'

const meta = {
  title: 'components/email-template/ContactFormReply',
  component: ContactFormReply,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl rounded-2xl bg-white shadow-xl">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    firstName: {
      description: "The recipient's first name",
      control: 'text',
      required: true,
    },
    inquiryCompany: {
      description: 'Company name from the inquiry',
      control: 'text',
    },
    inquiryProjectDetails: {
      description: 'Project details from the inquiry',
      control: 'text',
      required: true,
    },
  },
} satisfies Meta<typeof ContactFormReply>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: {
    firstName: faker.person.firstName(),
    inquiryCompany: faker.company.name(),
    inquiryProjectDetails: 'Technical Leadership & MVP Development',
  },
}

export const TechnicalLeadership: Story = {
  args: {
    firstName: faker.person.firstName(),
    inquiryCompany: faker.company.name(),
    inquiryProjectDetails: 'Technical Leadership',
  },
}

export const WithoutCompany: Story = {
  args: {
    firstName: faker.person.firstName(),
    inquiryProjectDetails: 'Initial Consultation',
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: Initial.args,
}

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: Initial.args,
}
