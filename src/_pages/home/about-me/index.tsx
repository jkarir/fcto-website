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
              I help startups and scale-ups build scalable tech, grow strong
              engineering teams, and launch innovative products — without the
              cost of a full-time CTO.
            </p>
            <p>
              With years of hands-on experience leading engineering teams, I
              focus on practical, high-impact solutions that move your business
              forward. From architecting fast, reliable systems to integrating
              AI for new capabilities, I ensure technology is a growth driver —
              not a bottleneck.
            </p>
            <p>
              Need strategic tech leadership, expert product development, or
              team mentorship? I&rsquo;ll help you build and scale with
              confidence — without the overhead.
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
              label="Engineering teams led—guiding teams from startups to enterprises."
            />
            <StatListItem
              value="17"
              label="Mobile apps shipped—built for performance, scalability, and seamless user experience."
            />
            <StatListItem
              value="15"
              label="Web platforms launched—turning ideas into fully deployed, scalable products."
            />
            <StatListItem
              value="14"
              label="Companies transformed—leveraging smarter tech decisions to accelerate growth"
            />
          </StatList>
        </div>
      </Container>
    </>
  )
}
