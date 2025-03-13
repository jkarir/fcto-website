import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactSection } from '@/components/ContactSection'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionTitle } from '@/components/SectionTitle'
import { type Metadata } from 'next'
import { type EngagementModel } from '@/lib/types/engagement-model-schema'
import { engagementModels } from '@/lib/data/engagement-models'

export const metadata: Metadata = {
  title: 'Fractional CTO Services & Engagement Models | Ways To Work Together',
  description:
    'Explore flexible engagement models for fractional CTO services - from technical strategy sessions and MVP development to ongoing advisory and engineering team leadership.',
  keywords: [
    'Fractional CTO',
    'Technical Leadership',
    'Engagement Models',
    'MVP Development',
    'Tech Strategy',
    'Engineering Consulting',
    'Software Development',
    'Technology Advisory',
    'Startup Technology',
    'Technical Consulting',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/ways-to-work-together',
  },
  openGraph: {
    title:
      'Fractional CTO Services & Engagement Models | Ways To Work Together',
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
    title:
      'Fractional CTO Services & Engagement Models | Ways To Work Together',
    description:
      'Flexible technical leadership options designed to meet your startup needs.',
    creator: '@jurgenkarir',
    images: ['https://jurgenkarir.com/images/engagement-models-og.png'],
  },
}

const structuredData = {
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
        <SectionTitle>{model.title}</SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: model.description }} />
        <BulletedList>
          {model.features.map((feature) => (
            <BulletedListItem key={feature}>
              <div dangerouslySetInnerHTML={{ __html: feature }} />
            </BulletedListItem>
          ))}
        </BulletedList>
        <p>
          <div dangerouslySetInnerHTML={{ __html: model.pricingDetail }} />
        </p>
        <p>
          <div dangerouslySetInnerHTML={{ __html: model.idealFor }} />
        </p>
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
            . I offer <strong>flexible ways to collaborate</strong> designed to
            meet you where you are and <strong>drive meaningful results</strong>
            .
          </p>
          <p>
            Unlike <strong>traditional consulting or hourly billing</strong>, my
            approach is <strong>value-based</strong>—pricing is structured
            around <strong>impact and outcomes</strong>, not hours.{' '}
            <strong>You invest in results, not time.</strong>
          </p>
        </div>
      </PageIntro>
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
      <ContactSection />
    </>
  )
}
