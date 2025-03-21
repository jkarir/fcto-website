import { GridList, GridListItem } from '@/components/GridList'
import { MarginButton } from '@/components/MarginButton'
import { SectionTitle } from '@/components/SectionTitle'

interface ServicesProps {}

export function Services({}: React.PropsWithChildren<ServicesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>How I Help</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="Fractional CTO for Early-Stage Startups">
          I help founders make smart technical decisions early—building only
          what’s needed, avoiding tech debt, and staying focused on product and
          growth.
        </GridListItem>
        <GridListItem title="MVP Strategy & Product Acceleration">
          From idea to launch, I guide you through building a lean, scalable MVP
          that gets to market fast and lays the groundwork for future growth.
        </GridListItem>
        <GridListItem title="Engineering Team Setup & Execution">
          I help you hire right, set up lightweight processes, and coach your
          team to ship faster, stay aligned, and work like a high-performing
          unit.
        </GridListItem>
        <GridListItem title="Mobile & Web App Development Leadership">
          Hands-on technical guidance to build fast, reliable, AI-enabled
          apps—so you can move quickly without cutting corners.
        </GridListItem>
      </GridList>
      <MarginButton href="/services" aria-label="Explore my services">
        Explore My Services
      </MarginButton>
    </div>
  )
}
