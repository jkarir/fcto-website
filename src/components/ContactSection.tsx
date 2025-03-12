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
              Let&apos;s build smarter, faster, better.
            </h2>

            <p className="mt-6 text-lg text-neutral-400">
              Launching an MVP, scaling fast, or optimizing your tech?
              Let&apos;s make it work.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" invert>
                Let&apos;s Talk
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
