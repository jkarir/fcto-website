import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import jurgen_karir from '@/images/jurgen-karir-cropped.jpg'
import Image from 'next/image'

export function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-4xl flex-1 text-center md:text-left">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Technology Strategy, When You Need It.
          </h1>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-neutral-950 [text-wrap:balance]">
            You don&apos;t need a full-time CTO—just the right one when it
            matters most.
          </h2>
          <div className="mt-4 text-xl text-neutral-800 [text-wrap:balance]">
            <p>
              I&apos;m <strong>Jürgen Karir</strong>, and I help startups build{' '}
              <strong>scalable, efficient, and high-performing software</strong>{' '}
              —without the overhead.
            </p>
          </div>
        </div>

        <div className="group relative max-h-[418px] w-full max-w-[300px] overflow-hidden rounded-3xl bg-neutral-100 md:max-w-[360px]">
          <Image
            src={jurgen_karir}
            alt="Jürgen Karir - Fractional CTO"
            priority
            className="h-[418px] w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
              Jürgen Karir
            </p>
            <p className="mt-2 text-sm text-white">Fractional CTO</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
