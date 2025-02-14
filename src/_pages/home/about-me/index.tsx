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

interface AboutMeProps {
  className?: string
  eyebrow?: string
  title?: string
  description?: string
}

export function AboutMe({
  className = 'mt-24 sm:mt-32 lg:mt-40',
  eyebrow = 'About Me',
  title = 'Helping Startups & Scale-Ups Build the Right Tech for Growth',
  description = 'Some description about me',
}: AboutMeProps) {
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        className={className}
        description={description}
      >
        <div className="mt-10 max-w-2xl space-y-6">
          <p>
            I&apos;m a{' '}
            <strong>software engineering consultant and fractional CTO</strong>,
            specializing in <strong>full-stack and mobile development</strong>,
            system architecture, and engineering leadership. With over{' '}
            <strong>20 years of experience</strong>, I help startups and growing
            companies build{' '}
            <strong>scalable, reliable, and high-performing technology</strong>
            —always with a focus on{' '}
            <strong>delivering real business value</strong>.
          </p>
          <p>
            I take a <strong>value-driven approach</strong>, ensuring that every
            technical decision supports your product, your customers, and your
            business goals. Whether you need to{' '}
            <strong>align your tech strategy</strong>,{' '}
            <strong>improve your development processes</strong>, or{' '}
            <strong>scale your systems</strong>, I provide{' '}
            <strong>CTO-level expertise without the full-time cost</strong>.
          </p>
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <div className="space-y-14">
          <SectionIntro title="How I can help" smaller fullWidth>
            <GridList className="lg:grid-cols-4">
              <GridListItem title="Fractional CTO & Tech Strategy">
                Ensuring your tech decisions drive business value and long-term
                success.
              </GridListItem>
              <GridListItem title="Full-Stack & Mobile Development">
                Building modern, high-performance apps that scale with your
                users.
              </GridListItem>
              <GridListItem title="Engineering Leadership">
                Structuring teams, optimizing workflows, and improving
                development efficiency.
              </GridListItem>
              <GridListItem title="Scaling & System Architecture">
                Making sure your platform is built for sustainable growth.
              </GridListItem>
            </GridList>
          </SectionIntro>
          <SectionIntro title={'Why work with me'} smaller fullWidth>
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
          </SectionIntro>
        </div>
      </Container>

      <Container className="mt-16">
        <Container className="mt-16">
          <StatList>
            <StatListItem value="35" label="Underpaid employees" />
            <StatListItem value="52" label="Placated clients" />
            <StatListItem value="$25M" label="Invoices billed" />
          </StatList>
        </Container>
      </Container>
    </>
  )
}
