import { type Metadata } from 'next'

import { loadArticles } from '#src/lib/mdx'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

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
      <SectionIntro title="My Approach" smaller fullWidth>
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
      <SectionIntro title="My Background" smaller fullWidth>
        <div className="space-y-6">
          <p>
            I’m the{' '}
            <strong>
              Founder and Software Consultant at Blue Pixel Software
            </strong>
            , where I’ve taken on <strong>technical leadership roles</strong> as
            a <strong>Tech Lead and Staff Engineer</strong>, driving strategy,
            mentoring teams, and helping companies scale their engineering
            efforts. I specialize in both{' '}
            <strong>full-stack development</strong> (React, Node.js, cloud
            platforms) and <strong>mobile engineering</strong> (React Native,
            iOS), ensuring that teams build scalable, maintainable, and
            high-performing systems.
          </p>
          <p>
            I’ve always had an <strong>entrepreneurial drive</strong>, which has
            shaped how I approach technology and leadership. Whether working
            with startups or established companies, I bring a{' '}
            <strong>founder’s mindset</strong>—focused on efficiency,
            scalability, and long-term impact. Over the years, I’ve led teams
            and guided technical decisions across{' '}
            <strong>
              video games, news media, streaming services, e-commerce, health,
              lotteries, banking, and education
            </strong>
            , helping organizations navigate complex challenges with{' '}
            <strong>
              strong leadership, strategic thinking, and hands-on expertise
            </strong>
            .
          </p>
          <p>
            Beyond writing code, my focus has always been on{' '}
            <strong>building and empowering high-performing teams</strong>. I
            help organizations establish{' '}
            <strong>
              technical vision, improve engineering culture, and implement
              processes that enable teams to scale efficiently
            </strong>
            . Whether defining architecture, optimizing workflows, or mentoring
            engineers, I aim to create an environment where teams can thrive and
            deliver meaningful impact.
          </p>
          <p>
            If you&apos;re working through technical challenges, trying to
            scale, or just need a fresh perspective on your architecture and
            engineering processes, I&apos;d love to chat.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/about" aria-label="About Me">
            Let&apos;s Talk
          </Button>
        </div>
      </SectionIntro>

      <ContactSection />
    </>
  )
}
