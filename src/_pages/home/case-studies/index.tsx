import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { type CaseStudy, type MDXEntry } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudiesProps {
  caseStudies: MDXEntry<CaseStudy>[]
  className?: string
  title?: string
  description?: string
}

function CaseStudyCard({ caseStudy }: { caseStudy: MDXEntry<CaseStudy> }) {
  return (
    <FadeIn className="flex">
      <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
        <h3>
          <Link href={caseStudy.href}>
            <span className="absolute inset-0 rounded-3xl" />
            <Image
              src={caseStudy.logo}
              alt={caseStudy.client}
              className="h-16 w-16"
              width={64}
              height={64}
              loading="lazy"
            />
          </Link>
        </h3>
        <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
          <time dateTime={caseStudy.date} className="font-semibold">
            {new Date(caseStudy.date).getFullYear()}
          </time>
          <span className="text-neutral-300" aria-hidden="true">
            /
          </span>
          <span>Case study</span>
        </p>
        <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
          {caseStudy.title}
        </p>
        <p className="mt-4 text-base text-neutral-600">
          {caseStudy.description}
        </p>
      </article>
    </FadeIn>
  )
}

export function CaseStudies({
  caseStudies,
  className,
  title = 'Harnessing technology for a brighter future',
  description = "We believe technology is the answer to the world's greatest challenges. It's also the cause, so we find ourselves in bit of a catch 22 situation.",
}: CaseStudiesProps) {
  return (
    <>
      <SectionIntro
        title={title}
        className={className ?? 'mt-24 sm:mt-32 lg:mt-40'}
      >
        <p>{description}</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.href} caseStudy={caseStudy} />
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
