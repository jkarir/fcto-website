import { type Metadata } from 'next'
import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { ContactSection } from '@/components/ContactSection'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionTitle } from '@/components/SectionTitle'
import {
  engagementModels,
  type EngagementModel,
} from './engagement-model-schema'
import { CallToAction } from '@/components/Cta'

export const metadata: Metadata = {
  title: 'Engagement Models',
  description: 'The Right Technical Leadership, Tailored to Your Needs',
}

function EngagementModel({ model }: { model: EngagementModel }) {
  return (
    <ListItem>
      <div className="space-y-6">
        <SectionTitle>{model.title}</SectionTitle>
        <strong>{model.description}</strong>
        <BulletedList>
          {model.features.map((feature) => (
            <BulletedListItem key={feature}>{feature}</BulletedListItem>
          ))}
        </BulletedList>
        <p>
          <strong>{model.pricing.headline}</strong>: {model.pricing.detail}
          <br />
          {model.idealFor}
        </p>
      </div>
    </ListItem>
  )
}

export default function EngagementModels() {
  return (
    <>
      <PageIntro
        eyebrow="Engagement Models"
        title="The Right Technical Leadership, Tailored to Your Needs"
      >
        <p>
          Every startup and scale-up has unique challenges—whether you're
          launching an MVP, scaling your platform, or optimizing your
          engineering team. I offer flexible engagement models designed to meet
          you where you are and drive meaningful results.
        </p>
        <p>
          Unlike traditional consulting or hourly billing, my approach is{' '}
          <strong>value-based</strong>—pricing is structured around the impact
          and outcomes delivered, not the time spent. You invest in results, not
          hours.
        </p>
      </PageIntro>
      <div className="mt-10 space-y-16">
        <SectionIntro title="How We Can Work Together" fullWidth>
          <p>
            <strong>
              Every startup is different, and so is the kind of technical
              leadership it needs
            </strong>
            . Below are some common ways I help{' '}
            <strong>founders and teams</strong>—whether it's getting an{' '}
            <strong>
              MVP off the ground, scaling an engineering org, or making sure
              your tech won't hold you back
            </strong>
            .
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
