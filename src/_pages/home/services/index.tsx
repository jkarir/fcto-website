import { SectionTitle } from '@/components/SectionTitle'
import { Button } from '@/components/Button'
import { GridList, GridListItem } from '@/components/GridList'

interface ServicesProps {}

export function Services({}: React.PropsWithChildren<ServicesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>How I Help</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="Fractional CTO Services">
          Strategic technology leadership to align engineering with business
          goals, improve development processes, and foster a high-performing
          engineering culture.
        </GridListItem>
        <GridListItem title="Full-Stack & Mobile Development">
          Building modern, high-performance apps that scale with your users.
        </GridListItem>
        <GridListItem title="Technical Due Diligence">
          Assess technology, architecture, and team capabilities to ensure
          long-term scalability and product-market fit.
        </GridListItem>
        <GridListItem title="Startup Advisory">
          Guidance on MVP development, product strategy, technical hiring, team
          mentorship, and roadmap execution to build sustainable and high-value
          solutions.
        </GridListItem>
      </GridList>
      <Button href="/services" aria-label="Explore my services">
        Explore My Services
      </Button>
    </div>
  )
}
