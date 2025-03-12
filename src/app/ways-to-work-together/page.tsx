import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactSection } from '@/components/ContactSection'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionTitle } from '@/components/SectionTitle'
import { type Metadata } from 'next'
import { type EngagementModel } from '@/lib/types/engagement-model-schema'
import { engagementModels } from '@/lib/data/engagement-models'
import Image from 'next/image'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Fractional CTO Engagement Models | Ways To Work Together',
  description:
    'Explore flexible ways to work with a Fractional CTO - from technical strategy sessions and MVP development to ongoing advisory and team leadership.',
  keywords: [
    'Fractional CTO',
    'Technical Leadership',
    'MVP Development',
    'Tech Strategy',
    'Engineering Consulting',
    'Software Development',
    'Technology Advisory',
    'Startup Technology',
    'Technical Consulting',
    'Software Architecture',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/ways-to-work-together',
  },
  openGraph: {
    title: 'Fractional CTO Engagement Models | Ways To Work Together',
    description:
      'Flexible technical leadership options designed to meet your startup needs - from strategic advisory to hands-on development.',
    url: 'https://jurgenkarir.com/ways-to-work-together',
    siteName: 'Jürgen Karir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurgenkarir.com/images/engagement-models-og.png',
        width: 1200,
        height: 630,
        alt: 'Jürgen Karir - Fractional CTO Engagement Models',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO Engagement Models | Ways To Work Together',
    description:
      'Flexible technical leadership options designed to meet your startup needs.',
    creator: '@jurgenkarir',
    images: ['https://jurgenkarir.com/images/engagement-models-og.png'],
  },
}

// JSON-LD structured data for better search results
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional CTO Services',
  serviceType: 'Technical Consulting',
  provider: {
    '@type': 'Person',
    name: 'Jürgen Karir',
    jobTitle: 'Fractional CTO',
    url: 'https://jurgenkarir.com',
  },
  description:
    'Technical leadership services tailored to startup and scale-up needs.',
  offers: {
    '@type': 'AggregateOffer',
    offerCount: engagementModels.length,
    highPrice: '15000',
    lowPrice: '2500',
    priceCurrency: 'USD',
    offers: engagementModels.map((model) => ({
      '@type': 'Offer',
      name: model.title,
      description: model.description.replace(/<\/?[^>]+(>|$)/g, ''), // Strip HTML
    })),
  },
}

function EngagementModel({ model }: { model: EngagementModel }) {
  return (
    <ListItem>
      <div className="space-y-6">
        <SectionTitle id={model.title.toLowerCase().replace(/\s+/g, '-')}>
          {model.title}
        </SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: model.description }} />
        <BulletedList>
          {model.features.map((feature) => (
            <BulletedListItem key={feature}>
              <div dangerouslySetInnerHTML={{ __html: feature }} />
            </BulletedListItem>
          ))}
        </BulletedList>
        <div>
          <h3 className="text-lg font-semibold">Pricing</h3>
          <div dangerouslySetInnerHTML={{ __html: model.pricingDetail }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Ideal For</h3>
          <div dangerouslySetInnerHTML={{ __html: model.idealFor }} />
        </div>
        <div className="mt-8">
          <Button href={`/contact?service=${encodeURIComponent(model.title)}`}>
            Inquire About This Service
          </Button>
        </div>
      </div>
    </ListItem>
  )
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article>
        <PageIntro
          eyebrow="Ways To Work Together"
          title="The Right Technical Leadership, Tailored to Your Needs"
        >
          <div className="space-y-6">
            <p>
              Every startup and scale-up has <strong>unique challenges</strong>
              —whether you&apos;re{' '}
              <strong>
                launching an MVP, scaling your platform, or optimizing your
                engineering team
              </strong>
              . I offer <strong>flexible ways to collaborate</strong> designed
              to meet you where you are and{' '}
              <strong>drive meaningful results</strong>.
            </p>
            <p>
              Unlike <strong>traditional consulting or hourly billing</strong>,
              my approach is <strong>value-based</strong>—pricing is structured
              around <strong>impact and outcomes</strong>, not hours.{' '}
              <strong>You invest in results, not time.</strong>
            </p>
          </div>
        </PageIntro>
        <nav className="container mx-auto mt-8">
          <h2 className="sr-only">Engagement Models</h2>
          <ul className="flex flex-wrap gap-4">
            {engagementModels.map((model) => (
              <li key={model.title}>
                <a
                  href={`#${model.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-100"
                >
                  {model.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 space-y-16">
          <SectionIntro title="How We Can Work Together" fullWidth>
            <p>
              Every startup is different, and so is the{' '}
              <strong>kind of technical leadership it needs</strong>. Below are
              common ways I help founders and teams—whether it&apos;s{' '}
              <strong>
                getting an MVP off the ground, scaling an engineering org,
              </strong>{' '}
              or <strong>ensuring your tech won&apos;t hold you back</strong>.
            </p>
            <List className="mt-10 text-lg">
              {engagementModels.map((model) => (
                <EngagementModel key={model.title} model={model} />
              ))}
            </List>
          </SectionIntro>
        </div>
      </article>
      <ContactSection />
    </>
  )
}
