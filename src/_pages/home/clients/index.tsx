import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ClientRecord } from '@/lib/clients'
import Image from 'next/image'

export function Clients({ clients }: { clients: ClientRecord }) {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            I&apos;ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {Object.entries(clients).map(([identifier, client]) => (
              <li key={identifier}>
                <FadeIn className="flex h-full items-center gap-2 sm:gap-4">
                  <Image
                    src={client.image.light}
                    alt={`${client.name} logo`}
                    width={client.image.imageisName ? 100 : 36}
                    height={36}
                    className="h-9 w-auto object-contain"
                  />
                  {!client.image.imageisName && (
                    <p className="hyphens-auto break-words text-sm leading-tight text-white [text-wrap:balance] sm:text-base lg:text-lg">
                      <strong>{client.name}</strong>
                    </p>
                  )}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
