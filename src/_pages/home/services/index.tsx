import { GridList, GridListItem } from '@/components/GridList'
// import { MarginButton } from '@/components/MarginButton'
import { SectionTitle } from '@/components/SectionTitle'

interface ServicesProps {}

// NOTE: Commenting out the margin button for now as I'm not sure if I want to keep it
export function Services({}: React.PropsWithChildren<ServicesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>Where I Create Impact</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="Early-Stage Technical Leadership">
          Helping teams make smart architectural decisions early—avoiding
          unnecessary complexity and staying focused on product delivery and
          growth.
        </GridListItem>
        <GridListItem title="MVP Strategy & Product Acceleration">
          Leading teams from concept to launch with lean, scalable MVPs that go
          to market quickly and lay the foundation for long-term success.
        </GridListItem>
        <GridListItem title="Team Growth & Execution">
          Supporting hiring, process design, and team coaching to improve
          delivery speed, alignment, and engineering culture.
        </GridListItem>
        <GridListItem title="Mobile & Web App Development Leadership">
          Deep experience leading the delivery of fast, reliable, AI-enhanced
          applications across iOS, React Native, and full-stack platforms.
        </GridListItem>
      </GridList>
      {/* <MarginButton href="/services" aria-label="Explore my services">
        Explore My Services
      </MarginButton> */}
    </div>
  )
}
