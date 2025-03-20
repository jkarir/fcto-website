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
        title="Flexible, high-impact technical leadership for early-stage startups."
      >
        <div className="space-y-6">
          <p>
            Startups need different kinds of technical leadership at different
            stages. Some need to <strong>launch an MVP fast</strong>, others
            need a <strong>technical leader to guide scaling</strong>, and some
            just need <strong>expert advice on critical tech decisions</strong>.
          </p>
          <p>
            This page outlines my <strong>Engagement Models</strong>—the
            different ways I work with founders to help them move faster, avoid
            costly mistakes, and build scalable technology. Each model is
            tailored to meet your startup&apos;s specific needs, and if none of
            these fit perfectly, we can customize an engagement that does.
          </p>
        </div>
      </PageIntro>

      <Container className="mx-10 mt-10">
        <div className="space-y-16">
          <List className="mt-10 text-lg">
            {engagementModels.map((model) => (
              <EngagementModel key={model.title} model={model} />
            ))}
          </List>
          <div className="space-y-6 text-lg">
            <SectionTitle>How I Work & Pricing</SectionTitle>
            <strong>
              I offer flexible engagement models based on your startup’s needs:
            </strong>
            <BulletedList>
              <BulletedListItem>
                <strong>Part-time Leadership</strong> - Ongoing support (1–2
                days/week) for technical strategy and execution.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Dedicated Blocks of Time</strong> - Focused execution
                for high-priority initiatives.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Retainer-Based Advisory</strong> - Continuous support
                for strategic decisions and team growth.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Custom Engagements</strong> - Need something different?
                Let’s design an engagement that fits your startup’s specific
                challenges.
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
                <strong>Fixed Pricing for MVP Launches</strong> - You pay for a
                successful MVP, not endless development cycles.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Retainer-Based Pricing for Fractional CTO/EM</strong> -
                Your investment is based on team growth, efficiency, and
                business impact.
              </BulletedListItem>
              <BulletedListItem>
                <strong>Custom Engagements</strong> - If your needs don’t fit a
                set model, we can design a pricing structure that aligns with
                your goals.
              </BulletedListItem>
            </BulletedList>
            <div>
              <strong>
                No hidden costs, no hourly billing—just clear pricing aligned
                with your startup’s success.
              </strong>
            </div>
          </div>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
