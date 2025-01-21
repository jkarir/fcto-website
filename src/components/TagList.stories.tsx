import type { Meta, StoryObj } from '@storybook/react'
import { TagList, TagListItem } from './TagList'

const meta = {
  title: 'components/tag-list',
  component: TagList,
} satisfies Meta<typeof TagList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <TagListItem key="1">React</TagListItem>,
      <TagListItem key="2">TypeScript</TagListItem>,
      <TagListItem key="3">Next.js</TagListItem>,
    ],
  },
}
