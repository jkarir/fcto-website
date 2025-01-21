import type { Meta, StoryObj } from '@storybook/react'
import BlogPage from './page'

const meta = {
  title: 'app/blog',
  component: BlogPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlogPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Mobile: Story = {
  ...Default,
  parameters: {
    ...Default.parameters,
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
