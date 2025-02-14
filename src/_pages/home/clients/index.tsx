import { ClientRecord } from '@/lib/clients'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image, { type ImageProps } from 'next/image'

interface ClientsProps {
  clients: ClientRecord
  className?: string
  children?: React.ReactNode
}

export function Clients({ clients, className, children }: ClientsProps) {
  return (
    <div
      className={`mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56 ${className ?? ''}`}
    >
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {children ?? "I've worked with hundreds of amazing people"}
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
                <FadeIn className="flex items-center gap-4">
                  <Image
                    src={client.image.light}
                    alt={`${client.name} logo`}
                    width={client.image.imageisName ? 100 : 36}
                    height={36}
                    className="h-9 w-auto object-contain"
                  />
                  {!client.image.imageisName && (
                    <p className="text-lg leading-9 text-white">
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
