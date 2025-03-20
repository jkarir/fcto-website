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
              I help <strong>startups and scale-ups</strong> build the right
              technology foundation to scale, grow their engineering teams, and
              launch innovative products—offering
              <strong> CTO-level leadership</strong> without the overhead of a
              full-time hire.
            </p>
            <p>
              With years of hands-on experience leading engineering teams, I
              ensure
              <strong> technology accelerates your business</strong> rather than
              holding it back. Whether it’s architecting{' '}
              <strong>fast, scalable systems</strong> or integrating{' '}
              <strong>AI to unlock new capabilities</strong>, I focus on
              practical, high-impact solutions that drive long-term success.
            </p>
            <p>
              If you need <strong>strategic technology leadership</strong>,
              expert product development, or mentorship to level up your team, I
              bring the expertise to help you
              <strong> build and scale—without the full-time cost</strong>.
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
              label="Engineering teams led—guiding teams to deliver high-impact products across startups and enterprises."
            />
            <StatListItem
              value="17"
              label="Mobile apps shipped—optimized for performance, scalability, and seamless user experience, driving engagement."
            />
            <StatListItem
              value="15"
              label="Web platforms launched—helping businesses turn ideas into scalable, fully deployed products."
            />
            <StatListItem
              value="14"
              label="Companies transformed—leveraging smarter tech decisions to build better products and drive growth."
            />
          </StatList>
        </div>
      </Container>
    </>
  )
}
