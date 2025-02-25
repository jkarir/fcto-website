import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Services } from '../services'
import { Advantages } from '../advantages'

interface AboutMeProps {
  className?: string
  eyebrow?: string
  title?: string
  description?: string
}

export function AboutMe({
  className = 'mt-24 sm:mt-32 lg:mt-40',
  title = 'Helping Startups & Scale-Ups Build the Right Tech for Growth',
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
            I’m a{' '}
            <strong>Fractional CTO and Software Engineering Consultant</strong>,
            specializing in <strong>technology strategy</strong>,{' '}
            <strong>full-stack and mobile development</strong>,{' '}
            <strong>system architecture</strong>, and{' '}
            <strong>engineering leadership</strong>. With{' '}
            <strong>20+ years of experience</strong>, I help startups and
            scale-ups build <strong>scalable</strong>, <strong>reliable</strong>
            , and <strong>high-performing technology</strong>—always with a
            focus on <strong>business impact</strong>, and{' '}
            <strong>product value</strong>.
            <br />
            <br />
            My mission is simple:{' '}
            <strong>
              Align technology with business goals to drive growth. Whether you
              need technical leadership, scalable product development, or a
              hands-on expert to guide and grow your team, I provide CTO-level
              expertise—without the full-time cost
            </strong>
            .
          </p>
          <div className="mt-10">
            <Button href="/about-me" aria-label="About Me">
              About Me
            </Button>
          </div>
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <div className="space-y-16">
          <Services />

          <Advantages />
          <StatList>
            <StatListItem value="19" label="Teams led" />
            <StatListItem value="17" label="Mobile apps shipped" />
            <StatListItem value="15" label="Websites launched" />
            <StatListItem value="14" label="Successful clients" />
          </StatList>
        </div>
      </Container>
    </>
  )
}
