import { type Metadata } from 'next'

import { Clients } from '@/_pages/home/clients'
import { ContactSection } from '@/components/ContactSection'
import { Testimonial } from '@/components/Testimonial'

import { AboutMe } from '@/_pages/home/about-me'
import { Hero } from '@/_pages/home/hero'
import { clients } from '@/lib/clients'

export const metadata: Metadata = {
  title: 'Jürgen Karir | Fractional CTO & Software Engineering Consultant',
  description:
    'Expert Fractional CTO helping startups build scalable software, optimize engineering teams, and accelerate product development with full-stack, mobile, and AI solutions.',
  keywords: [
    'Fractional CTO',
    'Software Consultant',
    'Tech Advisor',
    'Full-Stack Development',
    'Mobile Development',
    'iOS Development',
    'React Native',
    'AI Solutions',
    'Startup Tech Strategy',
    'Engineering Leadership',
    'Technical Leadership',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jurgenkarir.com',
    title: 'Jürgen Karir | Fractional CTO & Software Engineering Consultant',
    description:
      'Expert Fractional CTO helping startups build scalable software, optimize engineering teams, and accelerate product development.',
    siteName: 'Jürgen Karir',
    images: [
      {
        url: 'https://www.jurgenkarir.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jürgen Karir - Fractional CTO & Software Engineering Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jürgen Karir | Fractional CTO & Software Engineering Consultant',
    description:
      'Expert Fractional CTO helping startups build scalable software, optimize engineering teams, and accelerate product development.',
    creator: '@jurgenkarir',
    images: ['https://www.jurgenkarir.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.jurgenkarir.com',
  },
  verification: {
    google: 'your-verification-code',
  },
}

// Enhanced structured data with multiple schema types for better SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.jurgenkarir.com/#website',
      url: 'https://www.jurgenkarir.com',
      name: 'Jürgen Karir',
      description: metadata.description,
      publisher: {
        '@id': 'https://www.jurgenkarir.com/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.jurgenkarir.com/#person',
      name: 'Jürgen Karir',
      jobTitle: 'Fractional CTO & Software Engineering Consultant',
      description: metadata.description,
      image: 'https://www.jurgenkarir.com/jurgen-karir.jpg',
      url: 'https://www.jurgenkarir.com',
      sameAs: [
        'https://github.com/jurgenkarir',
        'https://linkedin.com/in/jurgenkarir',
        'https://twitter.com/jurgenkarir',
      ],
      knowsAbout: [
        'Software Architecture',
        'Technical Leadership',
        'Mobile Development',
        'Full Stack Development',
        'React Native',
        'AI & Machine Learning',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.jurgenkarir.com/#organization',
      name: 'Jürgen Karir - Fractional CTO Services',
      url: 'https://www.jurgenkarir.com',
      logo: 'https://www.jurgenkarir.com/logo.png',
      description:
        'Fractional CTO and software engineering services for startups and scale-ups',
      founder: {
        '@id': 'https://www.jurgenkarir.com/#person',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fractional CTO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fractional CTO Services',
              description:
                'Strategic technical leadership for startups and scale-ups',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software Engineering Consulting',
              description:
                'Expert guidance on architecture, development, and team optimization',
            },
          },
        ],
      },
    },
  ],
}

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
