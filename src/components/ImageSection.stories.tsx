import type { Meta, StoryObj } from '@storybook/react'
import { ImageSection } from './ImageSection'
import { List, ListItem } from './List'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import React from 'react'

const meta = {
  title: 'components/image-section',
  component: ImageSection,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageSection>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  title: 'Fractional CTO & Technology Leadership',
  subTitle: 'Senior Tech Leadership, Tailored to Your Needs',
  image: { src: imageWhiteboard },
  children: (
    <div className="space-y-6 text-base text-neutral-600">
      <h3 className="font-display text-base font-semibold text-neutral-950">
        For startups that need senior technical leadership without hiring a
        full-time CTO
      </h3>
      <p>
        Strategic guidance and hands-on development to help you build scalable,
        efficient software.
      </p>
    </div>
  ),
}

export const Primary: Story = {
  args: defaultArgs,
}

export const WithList: Story = {
  args: {
    ...defaultArgs,
    image: { src: imageLaptop, shape: 1 },
    children: (
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="font-display text-base font-semibold text-neutral-950">
          Key services include:
        </h3>
        <List className="mt-8 text-lg">
          <ListItem title="Tech Strategy & Roadmap">
            Ensuring your technology stack is scalable, secure, and aligned with
            your business goals.
          </ListItem>
          <ListItem title="Team Leadership">
            Guiding your engineers to develop stronger technical skills and
            collaborate effectively.
          </ListItem>
        </List>
      </div>
    ),
  },
}

export const WithAlternateImage: Story = {
  args: {
    ...defaultArgs,
    title: 'Software Engineering Consulting',
    subTitle: 'Hands-On Expertise to Build & Scale',
    image: { src: imageMeeting, shape: 2 },
  },
}

export const Mobile: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
