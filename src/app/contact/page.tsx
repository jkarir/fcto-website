import { type Metadata } from 'next'
import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { Offices } from '@/components/Offices'

export const metadata: Metadata = {
  title: 'Contact Jürgen Karir | Engineering Leader',
  description:
    "Get in touch to discuss your engineering team's challenges. As an Engineering Leader, I offer strategic guidance, technical leadership, and hands-on expertise to help your team grow.",
  keywords: [
    'Engineering Manager Contact',
    'Technical Consultation',
    'Software Engineering Services',
    'Engineering Team Leadership',
    'Engineering Leadership',
    'Technology Consulting',
    'Technical Leadership',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/contact',
  },
  openGraph: {
    title:
      'Contact Jürgen Karir | Engineering Manager & Software Engineering Leader',
    description:
      "Get in touch to discuss your engineering team's challenges and how we can work together.",
    url: 'https://jurgenkarir.com/contact',
    siteName: 'Jürgen Karir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurgenkarir.com/images/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact Jürgen Karir - Engineering Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Jürgen Karir | Engineering Leader',
    description: "Get in touch to discuss your engineering team's challenges.",
    creator: '@jurgenkarir',
    images: ['https://jurgenkarir.com/images/contact-og.png'],
  },
}

// Structured data for the contact page
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Jürgen Karir',
  description:
    "Get in touch to discuss your startup's technical challenges and how we can work together.",
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://jurgenkarir.com/contact',
  },
  provider: {
    '@type': 'Person',
    name: 'Jürgen Karir',
    jobTitle: 'Fractional CTO',
    url: 'https://jurgenkarir.com',
  },
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageIntro eyebrow="Contact Me" title="Let's Connect">
        <div className="space-y-6">
          <p>
            I&apos;m always open to conversations about engineering leadership,
            product development, and scalable system design.
          </p>
          <p>
            If you&apos;re interested in working together—or just want to
            connect—feel free to reach out using the form below. I&apos;m
            currently open to{' '}
            <strong>full-time engineering leadership roles</strong>, as well as
            select strategic collaborations.
          </p>
        </div>
      </PageIntro>

      {/* NOTE: Commenting out the section intro for now as I'm not sure if I want to keep it */}
      {/* <div className="mt-10 space-y-16">
        <SectionIntro title="What To Expect" smaller>
          <BulletedList>
            <BulletedListItem>A reply within 24 hours</BulletedListItem>
            <BulletedListItem>
              A quick, focused call to understand your goals and current
              challenges
            </BulletedListItem>
            <BulletedListItem>
              A clear next step toward solving your technical challenges
            </BulletedListItem>
          </BulletedList>
        </SectionIntro>
      </div> */}

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
