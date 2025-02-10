import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

interface HeroProps {
  title?: string
  description?: string
}

export function Hero({
  title = 'Award-winning development studio based in Denmark.',
  description = "We are a development studio working at the intersection of design and technology. It's a really busy intersection though — a lot of our staff have been involved in hit and runs.",
}: HeroProps) {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">{description}</p>
      </FadeIn>
    </Container>
  )
}
