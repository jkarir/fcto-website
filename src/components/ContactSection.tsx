import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div>
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Let&apos;s build scalable systems and strong teams.
            </h2>

            <p className="mt-6 text-lg text-neutral-400">
              Whether you&apos;re solving technical challenges or scaling
              delivery, I bring hands-on engineering leadership that drives
              results.
            </p>
            <p className="mt-6 text-lg text-neutral-400">
              Open to full-time opportunities and meaningful collaborations.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" invert>
                Let&apos;s Connect
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
