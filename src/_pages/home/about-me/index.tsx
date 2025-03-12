import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Services } from '../services'
import { Advantages } from '../advantages'

export function AboutMe() {
  return (
    <>
      <SectionIntro
        title="Helping Startups & Scale-Ups Build the Right Tech for Growth"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div className="mt-10 max-w-2xl space-y-6">
          <p>
            I&apos;m a{' '}
            <strong>Fractional CTO and Software Engineering Consultant</strong>,{' '}
            helping startups and scale-ups{' '}
            <strong>
              turn great ideas into scalable, high-performing technology
            </strong>
            . I specialize in <strong>technology strategy</strong>,{' '}
            <strong>full-stack and mobile development</strong>,{' '}
            <strong>system architecture</strong>,{' '}
            <strong>engineering leadership</strong>, and{' '}
            <strong>AI application and workflow development</strong>&mdash; all
            with a focus on <strong>real business impact</strong>.
          </p>
          <p>
            With <strong>20+ years of experience</strong>, I&apos;ve{' '}
            <strong>led and managed engineering teams</strong> of all sizes,{' '}
            helping them build <strong>reliable, scalable products</strong> that
            don&apos;t just work&mdash;they drive business growth.
          </p>
          <p>
            <strong>My mission is simple:</strong>
            <br />
            <strong>
              Align technology with business goals to build products that last.
            </strong>{' '}
            Whether you need <strong>technical leadership</strong>,{' '}
            <strong>scalable product development</strong>, or a{' '}
            <strong>hands-on expert</strong> to guide and grow your team, I
            provide{' '}
            <strong>
              CTO-level expertise&mdash;without the full-time cost
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
