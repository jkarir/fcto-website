import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { submitBlogSubscribeForm } from '@/lib/server-actions/blog-subscribe-form-submit'
import { useForm } from 'react-hook-form'
import {
  BlogSubscribeFormSchema,
  BlogSubscribeFormValues,
} from '@/lib/types/blog-subscribe-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

// NOTE: Commenting out the navigation items for now as I'm not sure if I want to keep them
const navigation = [
  {
    title: 'Jürgen Karir',
    links: [
      { title: 'About Me', href: '/about-me' },
      // { title: 'Services', href: '/services' },
      // { title: 'Ways To Work Together', href: '/ways-to-work-together' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact Me', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  const form = useForm<BlogSubscribeFormValues>({
    resolver: zodResolver(BlogSubscribeFormSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  })

  return (
    <form
      className="max-w-sm"
      onSubmit={form.handleSubmit(async (data) => {
        await submitBlogSubscribeForm(data)
      })}
    >
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for my Blog
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe for new posts on tech strategy, architecture, and real-world
        product development.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          {...form.register('email')}
          placeholder="Email address"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Blue Pixel Software Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
