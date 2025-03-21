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
        <GridListItem title="Technology that drives growth">
          I help you make smart, lean tech decisions—so you avoid overbuilding,
          ship faster, and stay focused on what matters.
        </GridListItem>
        <GridListItem title="Hands-on leadership from real experience">
          I’ve led engineering teams and built scalable systems from the ground
          up. I know what works—and what slows you down.
        </GridListItem>
        <GridListItem title="More than advice—I execute">
          I roll up my sleeves and work with your team to solve problems, ship
          product, and get results.
        </GridListItem>
        <GridListItem title="Built around your stage and goals">
          Every startup is different. I tailor my approach to where you are and
          what you need right now.
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
