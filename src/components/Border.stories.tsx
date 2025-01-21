import type { Meta, StoryObj } from '@storybook/react'

import { Border } from './Border'

const meta = {
  title: 'components/border',
  component: Border,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Border>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Border Content',
    position: 'top',
  },
}

export const LeftPosition: Story = {
  args: {
    children: 'Left Border Content',
    position: 'left',
  },
}

export const Inverted: Story = {
  args: {
    children: 'Inverted Border Content',
    position: 'top',
    invert: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const AsHeading: Story = {
  args: {
    as: 'h2',
    children: 'Border as Heading',
    position: 'top',
  },
}
