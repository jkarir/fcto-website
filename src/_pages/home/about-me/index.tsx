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
              I help startups and scale-ups{' '}
              <strong>define scalable technology strategies</strong>,{' '}
              <strong>build high-performing engineering teams</strong>, and{' '}
              <strong>develop innovative products</strong>—providing{' '}
              <strong>
                CTO-level leadership without the full-time commitment
              </strong>
              .
            </p>
            <p>
              With extensive experience leading engineering teams, I ensure
              technology becomes a <strong>growth enabler</strong>, not a{' '}
              <strong>bottleneck</strong>—helping businesses build{' '}
              <strong>fast, scalable, and AI-powered solutions</strong> that
              drive long-term success.
            </p>
            <p>
              Whether you need <strong>strategic technology leadership</strong>,{' '}
              <strong>expert product engineering</strong>, or{' '}
              <strong>technical mentorship for your team</strong>, I provide the
              expertise to help you{' '}
              <strong>build scalable, high-impact technology</strong>—without
              the full-time cost.
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
