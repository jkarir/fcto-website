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
          Strategic technology leadership to align engineering with business
          goals, streamline development, and build a high-performing team.
        </GridListItem>
        <GridListItem title="Full-Stack & Mobile Development">
          Creating modern, scalable apps and AI-powered solutions that enhance
          user experience and efficiency.
        </GridListItem>
        <GridListItem title="Technical Due Diligence">
          Evaluating technology, AI readiness, architecture, and team
          capabilities to ensure scalability and product-market fit.
        </GridListItem>
        <GridListItem title="Startup Advisory">
          Guidance on MVP development, product strategy, AI integrations,
          technical hiring, and team mentorship to build long-term success.
        </GridListItem>
      </GridList>
      <MarginButton href="/services" aria-label="Explore my services">
        Explore My Services
      </MarginButton>
    </div>
  )
}
