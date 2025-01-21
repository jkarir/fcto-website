import type { Meta, StoryObj } from '@storybook/react'
import { MDXComponents } from './MDXComponents'
import imageFile from '@/images/team/leslie-alexander.jpg'

const meta = {
  title: 'components/mdx-components',
  component: MDXComponents.wrapper,
} satisfies Meta<typeof MDXComponents.wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <MDXComponents.Typography key="1">
        <h1>MDX Components Demo</h1>

        <MDXComponents.img src={imageFile} alt="Sample image" />
        <MDXComponents.TopTip>Here's an important tip!</MDXComponents.TopTip>
      </MDXComponents.Typography>,
    ],
  },
}
