import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { BulletedList, BulletedListItem } from '@/components/BulletedList'

export const metadata: Metadata = {
  title: 'About Jürgen Karir | Software Engineering & Fractional CTO',
  description:
    'With 20+ years of experience in building scalable software, leading engineering teams, and solving complex technical challenges across industries from startups to enterprises.',
  keywords: [
    'Fractional CTO',
    'Software Engineering',
    'Technical Leadership',
    'Full Stack Development',
    'Mobile Development',
    'React Native',
    'Next.js',
    'Engineering Team Leadership',
    'Technology Strategy',
    'Startup Technology',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/about-me',
  },
  openGraph: {
    title: 'About Jürgen Karir | Software Engineering & Fractional CTO',
    description:
      'With 20+ years of experience in building scalable software, leading engineering teams, and solving complex technical challenges.',
    url: 'https://jurgenkarir.com/about-me',
    siteName: 'Jürgen Karir',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://jurgenkarir.com/images/about-me-og.png',
        width: 1200,
        height: 630,
        alt: 'Jürgen Karir - Fractional CTO & Software Engineering Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Jürgen Karir | Software Engineering & Fractional CTO',
    description:
      'With 20+ years of experience in building scalable software, leading engineering teams, and solving complex technical challenges.',
    creator: '@jurgenkarir',
    images: ['https://jurgenkarir.com/images/about-me-og.png'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jürgen Karir',
  jobTitle: 'Fractional CTO & Software Engineering Consultant',
  description:
    'With 20+ years of experience in building scalable software, leading engineering teams, and solving complex technical challenges across industries.',
  image: 'https://jurgenkarir.com/images/jurgen-karir.jpg',
  url: 'https://jurgenkarir.com',
  sameAs: [
    'https://www.linkedin.com/in/jurgenkarir/',
    'https://github.com/jurgenkarir',
    'https://twitter.com/jurgenkarir',
  ],
  knowsAbout: [
    'Software Engineering',
    'Technical Leadership',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'iOS Development',
    'Flutter',
    'Cloud Platforms',
    'MACH Architecture',
    'Composable Commerce',
    'Engineering Team Management',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Blue Pixel Software',
    url: 'https://bluepixel.software',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageIntro
        eyebrow="About Me"
        title="Building Scalable, High-Performing Tech for Startups & Scale-Ups"
      >
        <p>
          I&apos;ve spent the past 20 years building software, leading teams,
          and solving tough technical challenges across industries. I&apos;ve
          worked with startups and scale-ups to define technical strategy, build
          scalable systems, and grow strong engineering teams. At my core, I
          love solving complex problems and helping companies build software
          that actually delivers value—not just ticking boxes or chasing trends.
          I take a pragmatic, business-first approach, making sure technology
          enables growth rather than becoming a bottleneck.
        </p>
      </PageIntro>
      <br />
      <SectionIntro title="My Approach" smaller fullWidth>
        <div className="space-y-6">
          <p>
            As a <strong>Fractional CTO</strong> or{' '}
            <strong>Fractional Engineering Manager</strong>, I help early-stage
            startups:
          </p>

          <BulletedList>
            <BulletedListItem>
              <strong>Define a clear technical roadmap</strong> that aligns with
              business goals.
            </BulletedListItem>
            <BulletedListItem>
              <strong>Build a strong engineering foundation</strong> for
              scalability and growth
            </BulletedListItem>
            <BulletedListItem>
              <strong>Hire and scale the right engineering team</strong> at the
              right time
            </BulletedListItem>
            <BulletedListItem>
              <strong>Improve execution and development speed</strong> to ship
              faster
            </BulletedListItem>
            <BulletedListItem>
              <strong>Avoid costly technical mistakes</strong> through better
              decisions and due diligence
            </BulletedListItem>
          </BulletedList>
          <p>
            I focus on practical, high-impact solutions that help startups move
            fast and scale smart.
          </p>
        </div>
      </SectionIntro>
      <br />
      <SectionIntro title="My Background" smaller fullWidth>
        <div className="space-y-6">
          <p>
            As the founder of Blue Pixel Software, I&apos;ve taken on tech lead
            and staff engineering roles, helping companies scale their
            engineering efforts. I&apos;ve worked across full-stack and mobile
            development, ensuring teams build robust, high-performing software
            that lasts.
          </p>

          <p>
            I approach technology like a founder—balancing innovation with
            real-world constraints. Over the years, I&apos;ve helped companies
            in industries like gaming, media, streaming, e-commerce, healthcare,
            fintech, and edtech.
          </p>

          <p>
            Beyond writing code, I focus on building great teams and creating
            environments where engineers can do their best work. Whether
            it&apos;s defining architecture, optimizing workflows, or mentoring
            teams, my goal is to help companies build software that lasts and
            teams that thrive.
          </p>
        </div>
      </SectionIntro>

      <ContactSection />
    </>
  )
}
