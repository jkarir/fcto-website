import { type Metadata } from 'next'
import { ImageProps } from 'next/image'

import { loadCaseStudies } from '#src/lib/mdx'
import { Clients } from '@/_pages/home/clients'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoCbcLight from '@/images/clients/cbc/logo-light.svg'
import logoCossetteLight from '@/images/clients/cossette/logo-light.svg'
import logoEricssonLight from '@/images/clients/ericsson/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoHyundaiLight from '@/images/clients/hyundai/logo-light.svg'
import logoLciLight from '@/images/clients/lci/logo-light.svg'
import logoLumenaltaLight from '@/images/clients/lumenalta/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoOriumLight from '@/images/clients/orium/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoQuebecorLight from '@/images/clients/quebecor/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'

import { CaseStudies } from '@/_pages/home/case-studies'
import { Services } from '@/_pages/home/services'

const clients: Array<[string, ImageProps['src']]> = [
  ['LCI', logoLciLight],
  ['Orium', logoOriumLight],
  ['Quebecor', logoQuebecorLight],
  ['CBC', logoCbcLight],
  ['Lumenalta', logoLumenaltaLight],
  ['Cossette', logoCossetteLight],
  ['Ericsson', logoEricssonLight],
  ['Hyundai', logoHyundaiLight],
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Award-winning development studio based in Denmark.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Clients clients={clients} />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
