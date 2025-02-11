import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { clients, ClientIdentifier } from '@/lib/clients'

interface TestimonialProps {
  children: ReactNode
  clientIdentifier: ClientIdentifier
  mode?: 'light' | 'dark'
  className?: string
}

export function Testimonial({
  children,
  clientIdentifier,
  mode = 'dark',
  className,
}: TestimonialProps) {
  const client = clients[clientIdentifier]
  console.log({ client })
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['“'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                src={clients[clientIdentifier].image[mode]}
                alt={clientIdentifier}
                unoptimized
                width={158}
                height={48}
                className="object-contain"
              />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
