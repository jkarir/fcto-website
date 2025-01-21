import type { Meta, StoryObj } from '@storybook/react'
import { StatList, StatListItem } from './StatList'

const meta = {
  title: 'components/stat-list',
  component: StatList,
} satisfies Meta<typeof StatList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <StatListItem key="1" label="Projects" value="250+" />,
      <StatListItem key="2" label="Team Members" value="45" />,
      <StatListItem key="3" label="Countries" value="12" />,
    ],
  },
}
