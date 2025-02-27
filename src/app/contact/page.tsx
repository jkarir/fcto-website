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
            Building something new? Scaling up? Facing technical roadblocks?
            I&apos;d love to help.
          </p>
          <p>
            Whether you need a{' '}
            <strong>fractional CTO, technical leadership</strong>, or just a
            fresh perspective on your product&apos;s architecture, I bring
            experience, clarity, and a no-nonsense approach to solving complex
            challenges.
          </p>
        </div>
      </PageIntro>
      <div className="mt-10 space-y-16">
        <SectionIntro title="What To Expect" smaller>
          <BulletedList>
            <BulletedListItem>
              A response within <strong>24 hours.</strong>
            </BulletedListItem>
            <BulletedListItem>
              An <strong>initial conversation</strong> to understand your
              challenges and goals.
            </BulletedListItem>
            <BulletedListItem>
              A <strong>clear path forward</strong> to solving your technical
              challenges.
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
