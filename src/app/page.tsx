import { type Metadata } from 'next'

import { loadCaseStudies } from '#src/lib/mdx'
import { Clients } from '@/_pages/home/clients'
import { ContactSection } from '@/components/ContactSection'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'

import { CaseStudies } from '@/_pages/home/case-studies'
import { Hero } from '@/_pages/home/hero'
import { Services } from '@/_pages/home/services'
import { clients } from '@/lib/clients'

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Hero />

      <Clients clients={clients} />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial className="mt-24 sm:mt-32 lg:mt-40" clientIdentifier={'LCI'}>
        ... His deep expertise in composable architecture, strategic thinking,
        and hands-on approach were instrumental in delivering a scalable,
        high-performing digital experience...
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
