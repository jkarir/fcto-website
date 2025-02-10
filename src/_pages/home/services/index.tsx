import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { List, ListItem } from '@/components/List'
import imageLaptop from '@/images/laptop.jpg'
import { type ReactNode } from 'react'

interface ServiceItemProps {
  title: string
  children: ReactNode
}

function ServiceItem({ title, children }: ServiceItemProps) {
  return <ListItem title={title}>{children}</ListItem>
}

interface ServicesProps {
  className?: string
  eyebrow?: string
  title?: string
  description?: string
}

export function Services({
  className = 'mt-24 sm:mt-32 lg:mt-40',
  eyebrow = 'Services',
  title = 'We help you identify, explore and respond to new opportunities.',
  description = 'As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.',
}: ServicesProps) {
  return (
    <>
      <SectionIntro eyebrow={eyebrow} title={title} className={className}>
        <p>{description}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ServiceItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ServiceItem>
            <ServiceItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ServiceItem>
            <ServiceItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ServiceItem>
            <ServiceItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ServiceItem>
          </List>
        </div>
      </Container>
    </>
  )
}
