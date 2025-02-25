import { type Metadata } from 'next'

import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: "Let's work together. We can't wait to hear from you.",
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact Me" title="Let's Connect">
        <p>We can't wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  )
}
