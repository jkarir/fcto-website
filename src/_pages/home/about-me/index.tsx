import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Services } from '../services'
import { Advantages } from '../advantages'
import { MarginButton } from '@/components/MarginButton'

export function AboutMe() {
  return (
    <>
      <SectionIntro
        title="Helping Startups & Scale-Ups Build the Right Tech for Growth"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div className="space-y-10">
          <div className="mt-10 max-w-2xl space-y-6">
            <p>
              I help startups and scale-ups build scalable systems, grow strong
              engineering teams, and launch innovative products.
            </p>
            <p>
              With years of hands-on experience leading engineering teams, I
              focus on practical, high-impact solutions that move businesses
              forward. From architecting fast, reliable systems to thoughtfully
              integrating AI, I ensure technology enables growth—not becomes a
              bottleneck.
            </p>
            <p>
              I&apos;m currently focused on joining a team full-time, where I
              can lead engineering efforts, scale systems, and drive long-term
              product impact.
            </p>
          </div>
          <MarginButton href="/about-me" aria-label="About Me">
            About Me
          </MarginButton>
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <div className="space-y-16">
          <Services />
          <Advantages />
          <StatList>
            <StatListItem
              value="19"
              label="Engineering teams led—Built high-performing, cross-functional teams focused on autonomy and delivery at scale."
            />
            <StatListItem
              value="17"
              label="Mobile apps shipped—Delivered performant, user-centered mobile experiences across iOS, Android, and React Native."
            />
            <StatListItem
              value="15"
              label="Web platforms launched—from concept to production—scalable, maintainable, and business-aligned."
            />
            <StatListItem
              value="14"
              label="Organizations impacted—through improved architecture, smarter delivery, and team enablement."
            />
          </StatList>
        </div>
      </Container>
    </>
  )
}
