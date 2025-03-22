import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '#src/lib/mdx'

export const metadata: Metadata = {
  title: 'Software Engineering Blog | Technical Insights | Jürgen Karir',
  description:
    'Practical insights on software architecture, product development, and technical leadership for startups and engineering teams building scalable solutions.',
  keywords: [
    'Software Engineering Blog',
    'Technical Leadership',
    'Software Architecture',
    'Product Development',
    'Startup Technology',
    'Engineering Best Practices',
    'Fractional CTO Insights',
    'Development Strategy',
  ],
  alternates: {
    canonical: 'https://jurgenkarir.com/blog',
  },
  openGraph: {
    title: 'Software Engineering Blog | Technical Insights | Jürgen Karir',
    description:
      'Practical insights on software architecture, product development, and technical leadership for startups.',
    url: 'https://jurgenkarir.com/blog',
    siteName: 'Jürgen Karir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurgenkarir.com/images/blog-og.png',
        width: 1200,
        height: 630,
        alt: 'Jürgen Karir Software Engineering Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Blog | Jürgen Karir',
    description:
      'Practical insights on software architecture and technical leadership for startups.',
    creator: '@jurgenkarir',
    images: ['https://jurgenkarir.com/images/blog-og.png'],
  },
}

export default async function Blog() {
  let articles = await loadArticles()

  // Structured data for blog page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'Software Engineering Blog | Jürgen Karir',
    description: metadata.description,
    author: {
      '@type': 'Person',
      name: 'Jürgen Karir',
      url: 'https://jurgenkarir.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Jürgen Karir',
      url: 'https://jurgenkarir.com',
    },
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      author: {
        '@type': 'Person',
        name: article.author.name,
      },
      url: `https://jurgenkarir.com${article.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageIntro
        eyebrow="Blog"
        title="Thoughts And Experiences On Building Products"
      >
        <p>
          Notes on architecture, product development, and early-stage technical
          decisions. For founders, engineers, and teams building real things.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article itemScope itemType="https://schema.org/BlogPosting">
                <meta itemProp="datePublished" content={article.date} />
                <meta itemProp="author" content={article.author.name} />
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2
                        className="font-display text-2xl font-semibold text-neutral-950"
                        itemProp="headline"
                      >
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt={`${article.author.name}'s profile`}
                              {...article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
