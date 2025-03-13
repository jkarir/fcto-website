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

export const structuredData = {
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
          For over 20 years, I&apos;ve been{' '}
          <strong>building software, leading teams,</strong> and solving tough
          technical challenges across industries. My expertise spans{' '}
          <strong>
            full-stack and mobile development, MACH and composable commerce,
          </strong>{' '}
          and <strong>technical leadership</strong>. At my core, I&apos;m driven
          by <strong>solving complex problems</strong> and helping companies{' '}
          <strong>build software that delivers real value</strong>.
        </p>
      </PageIntro>
      <br />
      <SectionIntro title="My Approach" smaller fullWidth>
        <div className="space-y-6">
          <p>
            Technology should be a{' '}
            <strong>business enabler, not a roadblock</strong>. I&apos;ve worked
            with startups and scale-ups to:
          </p>

          <BulletedList>
            <BulletedListItem>
              <strong>Define and execute technical strategy</strong> that aligns
              with business goals.
            </BulletedListItem>
            <BulletedListItem>
              <strong>Build scalable, maintainable systems</strong> using
              technologies like{' '}
              <strong>React, Next.js, Node.js, and cloud platforms</strong> for
              full-stack applications, and{' '}
              <strong>React Native, iOS, and Flutter</strong> for mobile
              solutions.
            </BulletedListItem>
            <BulletedListItem>
              <strong>Optimize engineering teams</strong> through better
              processes, mentorship, and leadership.
            </BulletedListItem>
            <BulletedListItem>
              <strong>Navigate startup advisory and tech due diligence</strong>{' '}
              to mitigate risks.
            </BulletedListItem>
            <BulletedListItem>
              <strong>Explore AI and ML opportunities</strong> where they create
              real impact.
            </BulletedListItem>
          </BulletedList>
          <p>
            I take a <strong>pragmatic, results-driven approach</strong>,
            focusing on{' '}
            <strong>what actually moves the business forward</strong>, rather
            than chasing trends or over-engineering solutions.
          </p>
        </div>
      </SectionIntro>
      <br />
      <SectionIntro title="My Background" smaller fullWidth>
        <div className="space-y-6">
          <p>
            As the{' '}
            <strong>
              Founder and Software Consultant at Blue Pixel Software
            </strong>
            , I&apos;ve taken on{' '}
            <strong>
              technical leadership roles as a Tech Lead and Staff Engineer
            </strong>
            , driving strategy, mentoring teams, and helping companies{' '}
            <strong>scale their engineering efforts</strong>. My work spans both{' '}
            <strong>full-stack development</strong> using{' '}
            <strong>React, Next.js, Node.js, and cloud platforms</strong>, and{' '}
            <strong>mobile engineering</strong> with{' '}
            <strong>React Native, iOS, and Flutter</strong>— ensuring teams
            build{' '}
            <strong>scalable, maintainable, and high-performing systems</strong>
            .
          </p>

          <p>
            I&apos;ve always had an <strong>entrepreneurial mindset</strong>,
            shaping how I approach{' '}
            <strong>technology, leadership, and decision-making</strong>.
            Whether working with{' '}
            <strong>startups or established companies</strong>, I bring a{' '}
            <strong>founder’s perspective</strong>— focused on{' '}
            <strong>efficiency, scalability, and long-term impact</strong>. Over
            the years, I&apos;ve{' '}
            <strong>led teams and guided technical decisions</strong> in
            industries including{' '}
            <strong>
              Gaming & Interactive Entertainment, Media & Publishing, Streaming
              & Digital Media, E-Commerce & Retail, Healthcare & HealthTech,
              Lotteries & Gaming, Banking & FinTech, and EdTech & Education
            </strong>
            . I help organizations navigate{' '}
            <strong>
              complex technical challenges with strong leadership, strategic
              thinking, and hands-on expertise
            </strong>
            .
          </p>

          <p>
            Beyond <strong>hands-on development</strong>, I focus on{' '}
            <strong>building and empowering high-performing teams</strong>. I
            help organizations{' '}
            <strong>
              establish technical vision, improve engineering culture,
            </strong>{' '}
            and implement{' '}
            <strong>processes that enable teams to scale efficiently</strong>.{' '}
            Whether it&apos;s{' '}
            <strong>
              defining architecture, optimizing workflows, or mentoring
              engineers
            </strong>
            , my goal is to create an environment where{' '}
            <strong>teams thrive and deliver meaningful impact</strong>.
          </p>
        </div>
      </SectionIntro>

      <ContactSection />
    </>
  )
}
