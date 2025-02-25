import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import jurgen_karir from '@/images/jurgen-karir-cropped.jpg'
import Image, { StaticImageData } from 'next/image'

interface HeroProps {
  title?: React.ReactNode
  description?: React.ReactNode
  person?: {
    name: React.ReactNode
    title: string
    image: StaticImageData
  }
}

export function Hero({
  title = "Your Startup's Fractional CTO",
  description = (
    <>
      <strong>
        You don't need a full-time CTO—just the right one at the right time.
      </strong>
      <br />
      <br />
      I’m <strong>J&#252;rgen Karir</strong>, and I help startups build{' '}
      <strong>scalable, efficient, and high-performing</strong> software—without
      the overhead of a full-time CTO.
    </>
  ),
  person = {
    name: <>J&#252;rgen Karir</>,
    title: 'Fractional CTO',
    image: jurgen_karir,
  },
}: HeroProps) {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
        {/* Left Side - Text Content */}
        <div className="max-w-4xl flex-1 text-center md:text-left">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-neutral-600 [text-wrap:balance]">
            {description}
          </p>
        </div>

        {/* Right Side - Image (Max Width: 280px, Max Height: 390px) */}
        <div className="group relative max-h-[418px] w-full max-w-[300px] overflow-hidden rounded-3xl bg-neutral-100 md:max-w-[360px]">
          <Image
            alt="Jürgen Karir"
            {...person.image}
            className="h-[418px] w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
              {person.name}
            </p>
            <p className="mt-2 text-sm text-white">{person.title}</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
