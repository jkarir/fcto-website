import { GridList, GridListItem } from '@/components/GridList'
import { MarginButton } from '@/components/MarginButton'
import { SectionTitle } from '@/components/SectionTitle'

interface ServicesProps {}

export function Services({}: React.PropsWithChildren<ServicesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>How I Help</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="Fractional CTO Services">
          I provide technical strategy, hands-on leadership, and scalable
          architecture to align engineering with business goals, mentor teams,
          and drive growth.
        </GridListItem>
        <GridListItem title="Full-Stack & Mobile Development">
          build fast, reliable, and scalable web and mobile apps, ensuring
          seamless user experiences and AI-driven efficiency.
        </GridListItem>
        <GridListItem title="Cloud & AI Engineering">
          I design secure cloud infrastructures, optimize DevOps workflows, and
          develop AI-powered solutions to automate processes and enhance
          decision-making.
        </GridListItem>
        <GridListItem title="Startup Advisory">
          I help startups launch MVPs, integrate AI, hire technical talent, and
          mentor teams, ensuring they scale effectively and reach product-market
          fit.
        </GridListItem>
      </GridList>
      <MarginButton href="/services" aria-label="Explore my services">
        Explore My Services
      </MarginButton>
    </div>
  )
}
