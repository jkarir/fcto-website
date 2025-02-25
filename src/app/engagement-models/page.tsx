import { type Metadata } from 'next'

import { BulletedList, BulletedListItem } from '@/components/BulletedList'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { SectionTitle } from '@/components/SectionTitle'

export const metadata: Metadata = {
  title: 'Engagement Models',
  description: 'The Right Technical Leadership, Tailored to Your Needs',
}

export default async function EngagementModels() {
  return (
    <>
      <PageIntro
        eyebrow="Engagement Models"
        title="The Right Technical Leadership, Tailored to Your Needs"
      >
        <p>
          Every startup and scale-up has unique challenges—whether you&apos;re
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
      <br />
      <div className="space-y-16">
        <SectionIntro title="How We Can Work Together" fullWidth>
          <p>
            Every startup is different, and so is the kind of technical
            leadership it needs. Below are some common ways I help founders and
            teams—whether it’s getting an MVP off the ground, scaling an
            engineering org, or making sure your tech won’t hold you back.
          </p>
          <br />
          <List className="text-lg">
            <ListItem>
              <div className="space-y-6">
                <SectionTitle>Rapid MVP Launch</SectionTitle>
                <strong>
                  For early-stage startups looking to go from idea to product
                  quickly.
                </strong>
                <BulletedList>
                  <BulletedListItem>
                    Define a scalable architecture from day one
                  </BulletedListItem>
                  <BulletedListItem>
                    Build a functional, investor-ready MVP
                  </BulletedListItem>
                  <BulletedListItem>
                    Choose the right tech stack to accelerate growth
                  </BulletedListItem>
                </BulletedList>

                <p>
                  <strong>Value-Based Pricing</strong>: You pay for a successful
                  MVP launch, not endless development cycles. <br />
                  Ideal for founders who need a technical leader to{' '}
                  <strong>validate, build, and launch fast</strong>.
                </p>
              </div>
            </ListItem>
            <ListItem>
              <div className="space-y-6">
                <SectionTitle>Scalable Architecture Design</SectionTitle>
                <strong>
                  For startups and scale-ups preparing for rapid growth.
                </strong>
                <BulletedList>
                  <BulletedListItem>
                    Audit your current infrastructure and tech stack
                  </BulletedListItem>
                  <BulletedListItem>
                    Implement best practices for performance and scalability
                  </BulletedListItem>
                  <BulletedListItem>
                    Ensure your system is ready for increased traffic and data
                    loads
                  </BulletedListItem>
                </BulletedList>

                <p>
                  <strong>Value-Based Pricing</strong>: Your investment is based
                  on the long-term efficiency, reliability, and scalability
                  gains—not just consulting hours.
                  <br />
                  Best suited for teams hitting scaling challenges or planning
                  for <strong>long-term growth</strong>.
                </p>
              </div>
            </ListItem>
            <ListItem>
              <div className="space-y-6">
                <SectionTitle>Tech Team Growth & Mentorship</SectionTitle>
                <strong>
                  For companies looking to build and level up their engineering
                  teams.
                </strong>
                <BulletedList>
                  <BulletedListItem>
                    Hire and retain top-tier engineering talent
                  </BulletedListItem>
                  <BulletedListItem>
                    Establish engineering culture and best practices
                  </BulletedListItem>
                  <BulletedListItem>
                    Coach and mentor existing developers and leaders
                  </BulletedListItem>
                </BulletedList>

                <p>
                  <strong>Value-Based Pricing</strong>: The focus is on
                  delivering high-performing teams and long-term capability
                  improvements, not just &quot;training sessions.&quot;
                  <br />
                  Best for growing startups that need{' '}
                  <strong>
                    strategic leadership without the overhead of a full-time CTO
                  </strong>
                  .
                </p>
              </div>
            </ListItem>
          </List>
        </SectionIntro>
        <SectionIntro
          title="Investing in Outcomes, Not Hours"
          fullWidth
          smaller
        >
          <p>
            My pricing isn’t based on how many hours I work—it’s structured
            around the tangible impact I deliver. Whether it&apos;s launching
            your MVP, scaling your architecture, or transforming your
            engineering team, you&apos;re investing in meaningful results.
          </p>
          <p>
            Let&apos;s discuss your goals and find the right engagement model
            for your business.
          </p>
          <div className="mt-10">
            <Button href="/about" aria-label="About Me">
              Let&apos;s Talk
            </Button>
          </div>
        </SectionIntro>
      </div>

      <ContactSection />
    </>
  )
}
