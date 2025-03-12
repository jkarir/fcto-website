import { GridList, GridListItem } from '@/components/GridList'
import { MarginButton } from '@/components/MarginButton'
import { SectionTitle } from '@/components/SectionTitle'

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
        <GridListItem title="I focus on impact, not just technology">
          Every decision I make is about real business value, not
          technology&apos;s sake.
        </GridListItem>
        <GridListItem title="I've led teams and built products">
          I understand the challenges of scaling technology, managing teams, and
          delivering real results.
        </GridListItem>
        <GridListItem title="I don't just advise—I build">
          Strategy is important, but so is execution. I work alongside teams to
          implement real solutions, not just give recommendations.
        </GridListItem>
        <GridListItem title="I adapt to your needs">
          Every company is different, and I adjust my approach to fit your
          goals, challenges, and stage of growth.
        </GridListItem>
      </GridList>
      <MarginButton
        href="/ways-to-work-together"
        aria-label="Ways To Work Together"
      >
        Let&apos;s Work Together
      </MarginButton>
    </div>
  )
}
