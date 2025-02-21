import { type Metadata } from 'next'

import { loadArticles } from '#src/lib/mdx'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="About Me"
        title="Building Scalable, High-Performing Tech for Startups & Scale-Ups"
      >
        <p>
          I&apos;ve spent over <strong>20 years in software engineering</strong>
          , working across different industries, teams, and technologies. My
          experience spans <strong>full-stack and mobile development</strong>,{' '}
          <strong>MACH and composable commmerce</strong>, and{' '}
          <strong>technical leadership</strong>, but at my core, I love solving
          complex problems and helping companies build software that{' '}
          <strong>delivers real value</strong>.
        </p>
      </PageIntro>
      <br />
      <SectionIntro title="My Approach" smaller>
        <div className="space-y-6">
          <p>
            I believe technology should be <strong>a business enabler</strong>,{' '}
            <strong>not a roadblock</strong>. Over the years, I’ve worked with
            startups and scale-ups, helping them:
          </p>
          <ul className="ms-4 list-outside list-disc">
            <li>
              <p>
                Define and execute <strong>technical strategy</strong> that
                aligns with their goals
              </p>
            </li>
            <li>
              Build <strong>scalable and maintainable systems</strong> that
              support growth
            </li>
            <li>
              Improve <strong>engineering teams’ performance</strong> through
              better processes and mentorship
            </li>
            <li>
              Navigate <strong>startup advisory and tech due diligence</strong>{' '}
              to mitigate risks
            </li>
            <li>
              Explore <strong>AI and ML opportunities</strong> where they make
              sense
            </li>
          </ul>
          <p>
            I approach every project with a <strong>pragmatic mindset</strong>,
            focusing on what actually moves the needle rather than getting lost
            in trends or over-engineering.
          </p>
        </div>
      </SectionIntro>
      <br />
      <SectionIntro title="My Background" smaller>
        <div className="space-y-6">
          <p>
            I’m the{' '}
            <strong>
              Founder and Software Consultant at Blue Pixel Software
            </strong>
            , where I’ve taken on <strong>technical leadership roles</strong> as{' '}
            <strong>Tech Lead and Staff Engineer</strong>, helping my clients
            scale their engineering teams, improve development workflows, and
            build products that are both scalable and maintainable. My work
            spans both <strong>full-stack engineering</strong>, where I’ve built
            scalable applications with <strong>React</strong>,{' '}
            <strong>Node.js</strong>, <strong>and cloud platforms</strong>, and{' '}
            <strong>mobile engineering</strong>, where I’ve led development
            efforts in <strong>React Native and iOS</strong>.
          </p>
          <p>
            Beyond hands-on development, I’ve helped my clients{' '}
            <strong>
              navigate architectural decisions, optimize team performance, and
              implement best practices that support long-term growth
            </strong>
            . Whether working with early-stage startups or established
            businesses, my focus has always been on delivering practical,
            high-impact solutions that drive success.
          </p>
          <p>
            Before starting my own consultancy, I spent years in{' '}
            <strong>technical leadership and engineering roles</strong> across
            different industries, working with teams of all sizes. Along the
            way, I’ve led development efforts, shaped technical strategy, and
            helped build software that real people rely on every day. From
            scaling architectures to mentoring engineers, each experience has
            reinforced my belief that great software isn’t just about clean
            code—it’s about solving real problems in a way that’s sustainable
            and adaptable as businesses grow.
          </p>
          <p>
            If you&apos;re working through technical challenges, trying to
            scale, or just need a fresh perspective on your architecture and
            engineering processes, I&apos;d love to chat.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/about" aria-label="About Me">
            Let&apos;s Connect
          </Button>
        </div>
      </SectionIntro>

      <ContactSection />
    </>
  )
}
