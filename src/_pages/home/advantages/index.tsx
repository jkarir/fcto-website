import { GridList, GridListItem } from '@/components/GridList'
// import { MarginButton } from '@/components/MarginButton'
import { SectionTitle } from '@/components/SectionTitle'

interface AdvantagesProps {
  className?: string
  eyebrow?: string
  title?: string
  description?: string
}

// NOTE: Commenting out the margin button for now as I'm not sure if I want to keep it
export function Advantages({}: React.PropsWithChildren<AdvantagesProps>) {
  return (
    <div className="space-y-10">
      <SectionTitle>My Leadership Approach</SectionTitle>
      <GridList className="lg:grid-cols-4">
        <GridListItem title="Technology that drives growth">
          I focus on lean, scalable decisions that avoid overbuilding,
          accelerate delivery, and keep teams aligned with product goals.
        </GridListItem>
        <GridListItem title="Hands-on leadership from real experience">
          I&apos;ve led engineering teams and built systems from the ground up,
          balancing strategy with execution and staying close to the work.
        </GridListItem>
        <GridListItem title="Execution-focused and outcome-driven">
          I work directly with teams to solve problems, ship product, and create
          long-term value—whether shaping architecture or unblocking delivery.
        </GridListItem>
        <GridListItem title="Adaptable to stage and scale">
          Every team is different. I adjust my leadership style and processes to
          fit your current context, while helping you grow into what&apos;s
          next.
        </GridListItem>
      </GridList>
      {/* <MarginButton
        href="/ways-to-work-together"
        aria-label="Ways To Work Together"
      >
        Let&apos;s Work Together
      </MarginButton> */}
    </div>
  )
}
