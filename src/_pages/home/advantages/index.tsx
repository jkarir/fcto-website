import { SectionTitle } from '@/components/SectionTitle'
import { Button } from '@/components/Button'
import { GridList, GridListItem } from '@/components/GridList'

interface AdvantagesProps {
  className?: string
  eyebrow?: string
  title?: string
  description?: string
}

export function Advantages({}: React.PropsWithChildren<AdvantagesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>Why Work With Me?</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="I take a value-first approach">
          Every decision is focused on impact, not just technology for
          technology&apos;s sake.
        </GridListItem>
        <GridListItem title="I've been there">
          Leading teams, building products, and solving complex engineering
          challenges.
        </GridListItem>
        <GridListItem title="I'm both strategic & hands-on">
          I don&apos;t just advise; I help implement real solutions.
        </GridListItem>
        <GridListItem title="I tailor my approach">
          Every company is different, and I adapt to your specific needs and
          stage of growth.
        </GridListItem>
      </GridList>
      <Button href="/engagement-models" aria-label="Engagement Models">
        Let's Work Together
      </Button>
    </div>
  )
}
