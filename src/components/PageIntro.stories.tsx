import type { Meta, StoryObj } from '@storybook/react'
import { PageIntro } from './PageIntro'

const meta = {
  title: 'components/page-intro',
  component: PageIntro,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageIntro>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eyebrow: 'About Us',
    title: 'Our mission is to create better digital experiences',
    children:
      'We are a team of passionate designers and developers creating exceptional digital experiences.',
  },
}

export const Centered: Story = {
  args: {
    eyebrow: 'Services',
    title: 'We help companies build great products',
    children:
      'From concept to launch, we help companies create successful digital products.',
    centered: true,
  },
}
