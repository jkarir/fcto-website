import { Button } from './Button'
import { SectionIntro } from './SectionIntro'

interface CtaProps {
  className?: string
}

export function CallToAction({ className }: CtaProps) {
  return (
    <div className={className}>
      <SectionIntro
        title="Let's discuss your technical challenges and how I can help"
        fullWidth
        smaller
      >
        <p>
          Whether you're launching an MVP, scaling your platform, or building a
          high-performing team, I'd love to chat.
        </p>

        <div className="mt-10">
          <Button href="/contact" aria-label="Contact Me">
            Let's Talk
          </Button>
        </div>
      </SectionIntro>
    </div>
  )
}
