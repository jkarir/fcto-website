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
        <GridListItem title="I align technology with business growth">
          Too many startups overbuild or choose the wrong tech. I help you make
          smart, strategic decisions so technology fuels growth, not slows it
          down.
        </GridListItem>
        <GridListItem title="I've led technical teams and built complex systems">
          I understand the challenges of managing engineering teams, delivering
          scalable products, and aligning tech with business needs—because
          I&apos;ve done it firsthand.
        </GridListItem>
        <GridListItem title="More than strategy—I execute">
          I take a hands-on approach, working alongside teams to implement real
          solutions that deliver results—not just recommendations.
        </GridListItem>
        <GridListItem title="Tailored to your startup's needs">
          Every company is different. I adapt my approach to your goals,
          challenges, and growth stage so you get exactly what you need, when
          you need it.
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
