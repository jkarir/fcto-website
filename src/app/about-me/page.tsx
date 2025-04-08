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
        title="Engineering Leadership That Scales Teams, Systems, and Outcomes"
      >
        <p>
          With over 20 years of experience building software and leading
          high-performing engineering teams, I&apos;ve helped companies—from
          startups to scale-ups—deliver scalable products and build the
          technical foundations needed for long-term success. My work spans
          mobile and full-stack development, architecture, DevOps, and developer
          experience. I&apos;ve led teams through complex system design, product
          delivery, and rapid growth—always with a pragmatic, business-first
          mindset. I focus on outcomes, not overengineering. Technology should
          enable growth—not become a bottleneck.
        </p>
      </PageIntro>
      <br />
      <SectionIntro title="How I Lead" smaller fullWidth>
        <div className="space-y-6">
          <p>
            My leadership approach blends <strong>strategic thinking</strong>{' '}
            with <strong>hands-on execution</strong>. I focus on:
          </p>

          <BulletedList>
            <BulletedListItem>
              Defining clear technical direction aligned with business goals
            </BulletedListItem>
            <BulletedListItem>
              Scaling teams and systems thoughtfully
            </BulletedListItem>
            <BulletedListItem>
              Coaching engineers and improving delivery performance
            </BulletedListItem>
            <BulletedListItem>
              Building systems that are maintainable and resilient
            </BulletedListItem>
            <BulletedListItem>
              Applying AI where it strengthens product value and developer
              experience
            </BulletedListItem>
          </BulletedList>
          <p>
            Great engineering leadership means creating the right environment
            for teams to thrive—where autonomy, clarity, and technical
            excellence go hand-in-hand.
          </p>
        </div>
      </SectionIntro>
      <br />
      <SectionIntro title="My Background" smaller fullWidth>
        <div className="space-y-6">
          <p>
            Through my work at Blue Pixel Software, I&apos;ve taken on
            Engineering Lead roles across a wide range of industries—including
            e-commerce, streaming, fintech, gaming, healthcare, and edtech.
          </p>

          <p>
            I approach technology like a founder: balancing innovation with
            real-world constraints, and always focusing on value delivery.
            Whether designing architecture, improving team performance, or
            mentoring engineers, my goal is to help teams build software that
            lasts—and love the process of building it.
          </p>

          <p>
            While I&apos;ve supported organizations through fractional
            leadership roles in the past, I&apos;m currently focused on
            full-time engineering leadership opportunities where I can drive
            long-term impact.
          </p>
        </div>
      </SectionIntro>

      <ContactSection />
    </>
  )
}
