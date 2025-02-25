import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import { ServiceSection } from '@/components/ServiceSection'
import { services } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'My Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="My Services"
        title="Helping Startups & Scale-Ups Build Great Software"
      >
        <p>
          I partner with startups and growing companies to turn ambitious ideas
          into reality. With over 20 years in software engineering, I help teams
          build solid, scalable technology while making the development process
          smoother and more efficient.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {services.map((service) => (
          <ServiceSection key={service.title} service={service} />
        ))}
      </div>

      <ContactSection />
    </>
  )
}
