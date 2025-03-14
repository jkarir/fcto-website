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
              I&apos;m a{' '}
              <strong>
                Fractional CTO and Software Engineering Consultant
              </strong>
              , helping startups and scale-ups turn great ideas into{' '}
              <strong>scalable, high-impact technology</strong>. I specialize in{' '}
              <strong>technology strategy</strong>,{' '}
              <strong>full-stack and mobile development</strong>,{' '}
              <strong>system architecture</strong>,{' '}
              <strong>engineering leadership</strong>, and{' '}
              <strong>AI-driven solutions</strong>&mdash; all focused on{' '}
              <strong>delivering real business value</strong>.
            </p>
            <p>
              I&apos;ve worked with{' '}
              <strong>startups, scale-ups, and enterprises</strong> across
              industries,{' '}
              <strong>leading and managing engineering teams</strong> to{' '}
              <strong>
                build technology that empowers businesses, enhances user
                experience, and drives measurable results.
              </strong>
            </p>
            <div className="space-y-2">
              <p>
                <strong>My mission is simple:</strong>
              </p>
              <p>
                <strong>
                  Align technology with business objectives to create high-value
                  products.
                </strong>{' '}
                Whether you need <strong>technical leadership</strong>,{' '}
                <strong>a scalable tech strategy</strong>, or a{' '}
                <strong>hands-on expert</strong> to grow your team, I provide{' '}
                <strong>
                  CTO-level expertise&mdash;without the full-time cost
                </strong>
                .
              </p>
            </div>
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
              label="Engineering teams led across startups and enterprises."
            />
            <StatListItem
              value="17"
              label="Mobile apps shipped for iOS and Android."
            />
            <StatListItem
              value="15"
              label="Web platforms built and deployed."
            />
            <StatListItem
              value="14"
              label="Companies delivered better products with smarter tech."
            />
          </StatList>
        </div>
      </Container>
    </>
  )
}
