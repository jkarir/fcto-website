import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactSection } from '@/components/ContactSection'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionTitle } from '@/components/SectionTitle'
import { type Metadata } from 'next'
import { type EngagementModel } from '@/lib/types/engagement-model-schema'
import { engagementModels } from '@/lib/data/engagement-model'
import { Container } from '@/components/Container'

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
      description: model.subtitle,
    })),
  },
}

function EngagementModel({ model }: { model: EngagementModel }) {
  return (
    <ListItem>
      <div className="space-y-6">
        <SectionTitle>{model.title}</SectionTitle>
        <strong>{model.subtitle}</strong>
        <BulletedList>
          {model.features.map((feature) => (
            <BulletedListItem key={feature}>{feature}</BulletedListItem>
          ))}
        </BulletedList>
        <p>
          {model.highlights.map((highlight) => (
            <span key={highlight.label}>
              <strong>{highlight.label}:</strong> {highlight.value} <br />
            </span>
          ))}
        </p>
        <p>
          {model.additionalInfo?.map((info) => (
            <span key={info.question}>
              <strong>{info.question}:</strong> {info.answer}
            </span>
          ))}
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
        title="Flexible, Effective Technical Leadership For Early-Stage Startups."
      >
        <div className="space-y-6">
          <p>
            Startups need different kinds of tech leadership at different
            stages. Some need to launch fast, others need help scaling, and some
            just need expert guidance on key decisions.
          </p>
          <p>
            Below are the flexible ways we can work together—each tailored to
            your stage, goals, and challenges. If nothing fits exactly, we’ll
            shape an engagement that does.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-10">
        <div className="space-y-16">
          <List className="mt-10 text-lg">
            {engagementModels.map((model) => (
              <EngagementModel key={model.title} model={model} />
            ))}
          </List>
          <div className="space-y-6 text-lg">
            <SectionTitle>How I Work & Pricing</SectionTitle>
            <strong>
              I offer flexible engagement models tailored to your startup’s
              stage, goals, and resources:
            </strong>
            <BulletedList>
              <BulletedListItem>
                <strong>Part-time Leadership</strong> - Ongoing CTO-level
                support (1–2 days/week) for strategy, architecture, and team
                leadership.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Dedicated Blocks of Time</strong> - Focused time for
                critical initiatives like MVP delivery, scaling infrastructure,
                or unblocking teams.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Retainer-Based Advisory</strong> - Consistent guidance
                for technical decisions, team growth, and keeping engineering
                aligned with business goals.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Custom Engagements</strong> - Every startup is
                different. If you need a mix of strategy, execution, or
                mentorship—we’ll design an approach that fits.
              </BulletedListItem>
            </BulletedList>
          </div>
          <div className="space-y-6 text-lg">
            <SectionTitle>
              Pricing That Scales With Your Startup’s Needs
            </SectionTitle>
            <strong>
              I use value-based pricing—you’re paying for outcomes, not hours.
            </strong>
            <BulletedList>
              <BulletedListItem>
                <strong>Fixed Pricing for MVP Launches</strong> - Pay for a
                successful MVP, not an open-ended dev cycle.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Retainer-Based Pricing for Fractional CTO/EM</strong> -
                Your investment is tied to impact: team growth, better
                execution, and faster delivery.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Custom Engagements</strong> - Need something different?
                We’ll shape a pricing model that fits your goals and stage.
              </BulletedListItem>
            </BulletedList>
          </div>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
