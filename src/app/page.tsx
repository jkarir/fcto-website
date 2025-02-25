import { type Metadata } from 'next'

import { Clients } from '@/_pages/home/clients'
import { ContactSection } from '@/components/ContactSection'
import { Testimonial } from '@/components/Testimonial'

import { AboutMe } from '@/_pages/home/about-me'
import { Hero } from '@/_pages/home/hero'
import { clients } from '@/lib/clients'
import { CallToAction } from '@/components/Cta'

export const metadata: Metadata = {
  title: 'Fractional CTO & Software Engineering Consultant | Jürgen Karir',
  description:
    'Helping startups & scale-ups build scalable software, optimize engineering teams, and accelerate product development. Expert in full-stack, mobile, and AI-driven solutions.',
  keywords: [
    'Fractional CTO',
    'Software Consultant',
    'Tech Advisor',
    'Full-Stack Development',
    'Mobile Development',
    'iOS Development',
    'React Native',
    'AI & ML Solutions',
    'Startup Tech Strategy',
    'Engineering Leadership',
  ],
  openGraph: {
    title: 'Fractional CTO & Software Engineering Consultant | Jürgen Karir',
    description:
      'Helping startups & scale-ups build scalable software, optimize engineering teams, and accelerate product development.',
    url: 'https://www.jurgenkarir.com',
  },
}

export default async function Home() {
  return (
    <>
      <Hero />

      <Clients clients={clients} />

      <AboutMe />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        clientIdentifier={'LCI Education'}
      >
        ... His deep expertise in composable architecture, strategic thinking,
        and hands-on approach were instrumental in delivering a scalable,
        high-performing digital experience...
      </Testimonial>

      <ContactSection />
    </>
  )
}
