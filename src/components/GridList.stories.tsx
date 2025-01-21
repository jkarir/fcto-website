import type { Meta, StoryObj } from '@storybook/react'
import { GridList, GridListItem } from './GridList'

const meta = {
  title: 'components/grid-list',
  component: GridList,
} satisfies Meta<typeof GridList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <GridListItem key="1" title="Item 1">
        Content for item 1
      </GridListItem>,
      <GridListItem key="2" title="Item 2">
        Content for item 2
      </GridListItem>,
      <GridListItem key="3" title="Item 3">
        Content for item 3
      </GridListItem>,
    ],
  },
}

export const Inverted: Story = {
  args: {
    children: [
      <GridListItem key="1" title="Item 1" invert>
        Content for item 1
      </GridListItem>,
      <GridListItem key="2" title="Item 2" invert>
        Content for item 2
      </GridListItem>,
      <GridListItem key="3" title="Item 3" invert>
        Content for item 3
      </GridListItem>,
    ],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
