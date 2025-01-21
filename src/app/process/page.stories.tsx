import type { Meta, StoryObj } from '@storybook/react'
import ProcessPage from './page'

import imageWhiteboard from '@/images/whiteboard.jpg'
import imageDebraFiscal from '@/images/team/debra-fiscal.jpg'

const meta = {
  title: 'app/process',
  component: ProcessPage,
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
} satisfies Meta<typeof ProcessPage>

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
