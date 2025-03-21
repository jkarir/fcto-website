import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import { ServiceSection } from '@/components/ServiceSection'
import { services } from '@/lib/data/services'
import { SectionIntro } from '@/components/SectionIntro'
import { faqs } from '@/lib/data/faqs'
import { BulletedList, BulletedListItem } from '@/components/BulletedList'

export const metadata: Metadata = {
  title: 'Fractional CTO & Software Engineering Services | Jürgen Karir',
  description:
    'Expert software engineering services for startups and scale-ups - from technical leadership and full-stack development to mobile apps and cloud infrastructure.',
  keywords: [
    'Fractional CTO Services',
    'Software Engineering Consulting',
    'Technical Leadership',
    'Full-Stack Development',
    'Mobile App Development',
    'Cloud Infrastructure',
    'Startup Advisory',
    'Tech Strategy',
    'React Native',
    'Next.js',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/services',
  },
  openGraph: {
    title: 'Fractional CTO & Software Engineering Services | Jürgen Karir',
    description:
      'Expert software engineering services for startups and scale-ups - from technical leadership and full-stack development to mobile apps and cloud infrastructure.',
    url: 'https://jurgenkarir.com/services',
    siteName: 'Jürgen Karir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurgenkarir.com/images/services-og.png',
        width: 1200,
        height: 630,
        alt: 'Jürgen Karir - Software Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO & Software Engineering Services | Jürgen Karir',
    description:
      'Expert software engineering services for startups and scale-ups.',
    creator: '@jurgenkarir',
    images: ['https://jurgenkarir.com/images/services-og.png'],
  },
}

// Define structured data for services
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.subTitle,
      provider: {
        '@type': 'Person',
        name: 'Jürgen Karir',
        jobTitle: 'Fractional CTO',
        url: 'https://jurgenkarir.com',
      },
    },
  })),
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageIntro
        eyebrow="Services"
        title="Helping Startups & Scale-Ups Build Great Software"
      >
        <p>
          <strong>
            Startups rarely fail because of bad code—they fail because of the
            wrong technical decisions.
          </strong>
          . Without clear leadership, tech debt piles up, teams slow down, and
          product momentum stalls.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-20 lg:space-y-20">
        {services.map((service) => (
          <ServiceSection key={service.title} service={service} />
        ))}
      </div>

      <SectionIntro
        smaller
        className="mt-24 sm:mt-32 lg:mt-20"
        title="FAQ: How I Help Early-Stage Startups"
        fullWidth
      >
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <p>
                <strong>- {faq.question}</strong>
              </p>
              <div className="ml-3 mt-2">
                {faq.intro && (
                  <div
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: faq.intro }}
                  />
                )}
                {Array.isArray(faq.answer) ? (
                  <BulletedList>
                    {faq.answer.map((answer, index) => (
                      <BulletedListItem key={index}>
                        <div dangerouslySetInnerHTML={{ __html: answer }} />
                      </BulletedListItem>
                    ))}
                  </BulletedList>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionIntro>
      <ContactSection />
    </>
  )
}
