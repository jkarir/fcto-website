import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { List, ListItem } from '@/components/List'
import imageLaptop from '@/images/laptop.jpg'
import { type ReactNode } from 'react'

interface ServiceItemProps {
  title: string
}

function ServiceItem({
  title,
  children,
}: React.PropsWithChildren<ServiceItemProps>) {
  return <ListItem title={title}>{children}</ListItem>
}

interface ServiceItemListItemProps {}

function ServiceItemListItem({
  children,
}: React.PropsWithChildren<ServiceItemListItemProps>) {
  return <li>{children}</li>
}

interface ServiceItemListProps {}

function ServiceItemList({
  children,
}: React.PropsWithChildren<ServiceItemListProps>) {
  return <ul className="ms-4 list-outside list-disc">{children}</ul>
}

interface ServicesProps {
  className?: string
  eyebrow?: string
  title?: string
}

export function Services({
  className = 'mt-24 sm:mt-32 lg:mt-40',
  eyebrow = 'Services',
  title = 'Tech Leadership. Scalable Systems. Startup Growth.',
  children = (
    <>
      From strategy to execution, I help startups and scale-ups build the right
      technology, grow high-performing teams, and find{' '}
      <strong>product-market fit faster</strong>.
    </>
  ),
}: React.PropsWithChildren<ServicesProps>) {
  return (
    <>
      <SectionIntro eyebrow={eyebrow} title={title} className={className}>
        <p>{children}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ServiceItem title="🚀 Fractional CTO & Tech Leadership">
              <ServiceItemList>
                <ServiceItemListItem>
                  Defining the right architecture, improving engineering
                  processes, and making technology decisions that help startups
                  scale efficiently and avoid costly mistakes.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Build and support strong engineering teams, creating a culture
                  of learning, collaboration, and solid best practices
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Improve infrastructure, security, and DevOps, using automation
                  and AI tools to keep things running smoothly and reliably.
                </ServiceItemListItem>
              </ServiceItemList>
            </ServiceItem>
            <ServiceItem title="🏗️ Software Architecture & Scaling">
              <ServiceItemList>
                <ServiceItemListItem>
                  Architecting reliable, efficient systems that handle growth,
                  improve performance, and minimize downtime for high-growth
                  startups.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Automating infrastructure, optimizing cloud scalability, and
                  implementing CI/CD pipelines for faster, more reliable
                  deployments. Leveraging AI for monitoring and performance
                  optimization.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Clean up and improve code quality with audits and refactoring,
                  making everything easier to maintain and scale.
                </ServiceItemListItem>
              </ServiceItemList>
            </ServiceItem>
            <ServiceItem title="📱 Mobile & Full-Stack Development">
              <ServiceItemList>
                <ServiceItemListItem>
                  Designing, building, and scaling high-performance{' '}
                  <strong>iOS</strong>, <strong>Android</strong>, and{' '}
                  <strong>React Native</strong> apps.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Building scalable web and mobile apps with efficient backends
                  and smooth user experiences. Using AI-driven tools to improve
                  code quality, automate testing, and speed up development for
                  faster time to market.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Fine-tune performance, security, and user experience using AI
                  insights, automated testing, and industry best practices.
                </ServiceItemListItem>
              </ServiceItemList>
            </ServiceItem>
            <ServiceItem title="🎯 Startup Tech Strategy & Advisory">
              <ServiceItemList>
                <ServiceItemListItem>
                  Help founders make informed tech decisions, balancing risks,
                  opportunities, and business goals.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Guide MVP development & product roadmaps, focusing on fast
                  iterations, market feedback, and smart scaling.
                </ServiceItemListItem>
                <ServiceItemListItem>
                  Assist with fundraising & investor prep, making sure your tech
                  is solid, scalable, and investor-ready.
                </ServiceItemListItem>
              </ServiceItemList>
            </ServiceItem>
          </List>
        </div>
      </Container>
    </>
  )
}
