import type { Meta, StoryObj } from '@storybook/react'
import { List, ListItem } from './List'

const meta = {
  title: 'components/list',
  component: List,
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <ListItem key="1" title="First Item">
        This is the first item content
      </ListItem>,
      <ListItem key="2" title="Second Item">
        This is the second item content
      </ListItem>,
      <ListItem key="3" title="Third Item">
        This is the third item content
      </ListItem>,
    ],
  },
}

export const WithoutTitles: Story = {
  args: {
    children: [
      <ListItem key="1">Content without title 1</ListItem>,
      <ListItem key="2">Content without title 2</ListItem>,
    ],
  },
}
