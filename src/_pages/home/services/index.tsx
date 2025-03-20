import { GridList, GridListItem } from '@/components/GridList'
import { MarginButton } from '@/components/MarginButton'
import { SectionTitle } from '@/components/SectionTitle'

interface ServicesProps {}

export function Services({}: React.PropsWithChildren<ServicesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>How I Help</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="Fractional CTO & Engineering Leadership">
          I align engineering with business goals, mentor teams, and design
          scalable architectures to drive growth—without the cost of a full-time
          CTO.
        </GridListItem>
        <GridListItem title="Engineering Team Execution & Optimization">
          I help startups improve execution, streamline development processes,
          and implement AI-driven workflows to increase efficiency.
        </GridListItem>
        <GridListItem title="Startup Advisory & MVP Acceleration">
          I help startups validate ideas, build scalable MVPs, and leverage AI
          to differentiate their products—while assembling the right technical
          foundation for growth.
        </GridListItem>
        <GridListItem title="AI-Powered Mobile & Web Apps">
          I help startups build intelligent apps that automate processes and
          optimize performance to drive growth and efficiency.
        </GridListItem>
      </GridList>
      <MarginButton href="/services" aria-label="Explore my services">
        Explore My Services
      </MarginButton>
    </div>
  )
}
