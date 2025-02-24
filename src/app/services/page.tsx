import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  subTitle,
  image,
  children,
}: {
  title: string
  subTitle: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-neutral-950 sm:text-2xl">
              - {subTitle}
            </h3>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function FractionalCTO() {
  return (
    <Section
      title="Fractional CTO & Technology Leadership"
      subTitle="Senior Tech Leadership, Tailored to Your Needs"
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          For startups that need senior technical leadership without hiring a
          full-time CTO, I offer:
        </h3>
        <List className="mt-8">
          <ListItem title="Tech Strategy & Roadmap">
            Ensuring your technology stack is scalable, secure, and aligned with
            your long-term business strategy.
          </ListItem>
          <ListItem title="Team Leadership & Mentorship">
            Guiding your engineers to develop stronger technical skills,
            collaborate effectively, and build high-quality software with
            confidence.
          </ListItem>
          <ListItem title="Architecture & Scalability Consulting">
            Ensuring your platform is built to handle increasing demand while
            optimizing for performance, automation, and user experience,
            leveraging AI where it makes sense to enhance scalability and
            efficiency.
          </ListItem>
          <ListItem title="Growth Strategy & Execution">
            Helping startups refine their product vision, scale technology
            efficiently, and optimize team structures for sustainable success.
            This includes strategic planning, process improvements, and ensuring
            your tech infrastructure supports future expansion.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function SoftwareEngineeringConsulting() {
  return (
    <Section
      title="Software Engineering Consulting"
      subTitle="Hands-On Expertise to Build, Scale & Improve Your Software"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          I roll up my sleeves and help with:
        </h3>
        <List className="mt-8">
          <ListItem title="Full-Stack & Mobile Development">
            Building reliable, high-performance applications that scale with
            your business, ensuring seamless user experiences and
            maintainability.
          </ListItem>
          <ListItem title="Code & Architecture Reviews">
            Spotting weaknesses and making your codebase rock solid, making
            smart use of AI in the review process when possible.
          </ListItem>
          <ListItem title="DevOps & Cloud Optimization">
            Improving CI/CD, cloud infrastructure, and automation, leveraging AI
            for efficiency where possible.
          </ListItem>
          <ListItem title="Agile & Product Development">
            Helping your team streamline workflows, remove bottlenecks, and
            deliver high-quality software faster with well-defined processes and
            best practices.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function StartupAdvisory() {
  return (
    <Section
      title="Startup Advisory"
      subTitle="From Idea to Execution: Laying a Strong Foundation"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          I work with early-stage startups to turn ideas into tangible, scalable
          products by validating technical feasibility, aligning technology with
          business goals, and setting up the right foundations for growth. My
          services include:
        </h3>
        <List className="mt-8">
          <ListItem title="Technical Feasibility Assessments">
            Evaluating the viability of your product idea, identifying potential
            risks, and ensuring your tech choices align with your long-term
            goals.
          </ListItem>
          <ListItem title="Early Product Strategy">
            Helping you shape an MVP, prioritize features, and refine your
            product vision based on market needs and customer feedback.
          </ListItem>
          <ListItem title="Building Your First Engineering Team">
            Guidance on hiring, structuring, and leading a strong technical team
            that can execute effectively from day one.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'My Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="My Services"
        title="Helping Startups & Scale-Ups Build Great Softwares"
      >
        <p>
          I partner with startups and growing companies to turn ambitious ideas
          into reality. With over 20 years in software engineering, I help teams
          build solid, scalable technology while making the development process
          smoother and more efficient. My goal is to ensure your tech not only
          meets your business needs but also fuels your long-term growth.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <FractionalCTO />
        <SoftwareEngineeringConsulting />
        <StartupAdvisory />
      </div>

      <ContactSection />
    </>
  )
}
