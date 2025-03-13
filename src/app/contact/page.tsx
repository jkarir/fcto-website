import { type Metadata } from 'next'

import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: "Let's work together. We can't wait to hear from you.",
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact Me" title="Let's Connect">
        <div className="space-y-6">
          <p>
            <strong>
              Building something new? Scaling up? Facing technical roadblocks?
            </strong>{' '}
            Let’s talk.
          </p>
          <p>
            Whether you need a{' '}
            <strong>
              Fractional CTO, technical leadership, or a fresh perspective on
              your product’s architecture
            </strong>
            , I bring{' '}
            <strong>experience, clarity, and a no-nonsense approach</strong> to
            solving complex challenges.
          </p>
        </div>
      </PageIntro>
      <div className="mt-10 space-y-16">
        <SectionIntro title="What To Expect" smaller>
          <BulletedList>
            <BulletedListItem>
              <strong>A response within 24 hours.</strong>
            </BulletedListItem>
            <BulletedListItem>
              <strong>An initial conversation</strong> to understand your
              challenges and goals.
            </BulletedListItem>
            <BulletedListItem>
              <strong>A clear, actionable path forward</strong> to solving your
              technical challenges.
            </BulletedListItem>
          </BulletedList>
        </SectionIntro>
      </div>

      <Container className="mt-16 sm:mt-32 lg:mt-16">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  )
}
