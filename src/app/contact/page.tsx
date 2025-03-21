import { type Metadata } from 'next'
import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { Offices } from '@/components/Offices'

export const metadata: Metadata = {
  title:
    'Contact Jürgen Karir | Fractional CTO & Software Engineering Consultant',
  description:
    "Get in touch to discuss your startup's technical challenges. As a Fractional CTO, I offer strategic guidance, technical leadership, and hands-on expertise to help your business grow.",
  keywords: [
    'Fractional CTO Contact',
    'Technical Consultation',
    'Software Engineering Services',
    'Startup Technical Help',
    'CTO Services',
    'Technology Consulting',
    'Technical Leadership',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/contact',
  },
  openGraph: {
    title:
      'Contact Jürgen Karir | Fractional CTO & Software Engineering Consultant',
    description:
      "Get in touch to discuss your startup's technical challenges and how we can work together.",
    url: 'https://jurgenkarir.com/contact',
    siteName: 'Jürgen Karir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurgenkarir.com/images/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact Jürgen Karir - Fractional CTO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Jürgen Karir | Fractional CTO',
    description: "Get in touch to discuss your startup's technical challenges.",
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
            Building something new? Scaling up? Stuck on a technical decision?
            Let’s talk.
          </p>
          <p>
            Whether you need a Fractional CTO, hands-on leadership, or clarity
            on your architecture, I bring experience, focus, and a no-fluff
            approach to solving tough challenges.
          </p>
        </div>
      </PageIntro>
      <div className="mt-10 space-y-16">
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
