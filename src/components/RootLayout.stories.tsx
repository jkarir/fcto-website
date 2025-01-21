import type { Meta, StoryObj } from '@storybook/react'
import { RootLayout } from './RootLayout'

const meta = {
  title: 'components/root-layout',
  component: RootLayout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RootLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div className="p-16">Page Content</div>,
  },
}

export const WithContent: Story = {
  args: {
    children: (
      <div className="space-y-8 p-16">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg">This is a sample page content.</p>
      </div>
    ),
  },
}
