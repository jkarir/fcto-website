import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { GridList, GridListItem } from '@/components/GridList'
import { FadeIn } from '#src/components/FadeIn.jsx'
import { List } from '#src/components/List.jsx'
import { StylizedImage } from '#src/components/StylizedImage.jsx'
import { title } from 'process'
import { ReactNode } from 'react'
import { Button } from '@/components/Button'

interface AboutMeProps {
  className?: string
  eyebrow?: string
  title?: string
  description?: string
}

export function AboutMe({
  className = 'mt-24 sm:mt-32 lg:mt-40',
  title = 'Your Technical Vision, Executed.',
  description = 'Some description about me',
}: AboutMeProps) {
  return (
    <>
      <SectionIntro
        title={title}
        className={className}
        description={description}
      >
        <div className="mt-10 max-w-2xl space-y-6">
          <p>
            The right <strong>technology strategy</strong> transforms ideas into{' '}
            <strong>scalable products</strong>, streamlines operations, and
            fuels business growth. Whether you&apos;re launching your first
            product or scaling an existing one, I bring the{' '}
            <strong>leadership and hands-on expertise</strong> needed to turn
            your vision into reality.
            <br />
            <br />
            With <strong>20+ years</strong> of experience as a{' '}
            <strong>software engineering consultant</strong>,
            <strong>tech lead</strong>, and <strong>staff engineer</strong>,
            I&apos;ve helped companies of all sizes, including startups and
            scale-ups, turn ideas into reality by building scalable software,
            optimizing engineering teams, and driving innovation. My focus is on{' '}
            <strong>building impactful solutions</strong>, improving user
            experience, and <strong>measurable value</strong>—all without the
            overhead of a full-time CTO.
          </p>
          <div className="mt-10">
            <Button href="/about" aria-label="About Me">
              About Me
            </Button>
          </div>
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <div className="space-y-16">
          <SectionIntro title="How I help" smaller fullWidth>
            <GridList className="lg:grid-cols-4">
              <GridListItem title="Fractional CTO Services">
                Strategic technology leadership to align engineering with
                business goals, improve development processes, and foster a
                high-performing engineering culture.
              </GridListItem>
              <GridListItem title="Full-Stack & Mobile Development">
                Building modern, high-performance apps that scale with your
                users.
              </GridListItem>
              <GridListItem title="Technical Due Diligence">
                Assess technology, architecture, and team capabilities to ensure
                long-term scalability and product-market fit.
              </GridListItem>
              <GridListItem title="Startup Advisory">
                Guidance on product development, technical hiring, team
                mentorship, and roadmap execution to build sustainable and
                high-value solutions.
              </GridListItem>
            </GridList>
            <div className="mt-10">
              <Button href="/contact" aria-label="Explore my services">
                Explore My Services
              </Button>
            </div>
          </SectionIntro>

          <SectionIntro title={'Why work with me?'} smaller fullWidth>
            <GridList className="lg:grid-cols-4">
              <GridListItem title="I take a value-first approach">
                Every decision is focused on impact, not just technology for
                technology&apos;s sake.
              </GridListItem>
              <GridListItem title="I've been there">
                Leading teams, building products, and solving complex
                engineering challenges.
              </GridListItem>
              <GridListItem title="I'm both strategic & hands-on">
                I don&apos;t just advise; I help implement real solutions.
              </GridListItem>
              <GridListItem title="I tailor my approach">
                Every company is different, and I adapt to your specific needs
                and stage of growth.
              </GridListItem>
            </GridList>
            <div className="mt-10">
              <Button href="/contact" aria-label="Explore My Services">
                Let&apos;s Connect
              </Button>
            </div>
          </SectionIntro>
        </div>
      </Container>

      <Container className="mt-16">
        <Container className="mt-16">
          <StatList>
            <StatListItem value="17" label="Mobile apps shipped" />
            <StatListItem value="15" label="Websites launched" />
            <StatListItem value="19" label="Teams led" />
          </StatList>
        </Container>
      </Container>
    </>
  )
}
