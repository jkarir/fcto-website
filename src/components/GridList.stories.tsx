import type { Meta, StoryObj } from '@storybook/react'
import { GridList, GridListItem } from './GridList'
import React from 'react'

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
      <GridListItem key="4" title="Item 4">
        Content for item 4Content for item 4Content for item 4Content for item
        4Content for item 4Content for item 4
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
