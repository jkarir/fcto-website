import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imagePhobia from '@/images/clients/phobia/logo-dark.svg'
import imageFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import imageUnseal from '@/images/clients/unseal/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'

import type { CaseStudy, MDXEntry } from '@/lib/mdx' // Adjust the import path as necessary

const mockCaseStudies: MDXEntry<CaseStudy>[] = [
  {
    href: '/work/family-fund',
    metadata: {
      date: '2023-01-01',
      client: 'Family Fund',
      title: 'Financial Management Platform',
      description:
        'Revolutionizing how families manage their finances together.',
      summary: [
        'Complete financial platform rebuild',
        'Custom budget tracking system',
        'Real-time family expense sharing',
      ],
      logo: logoFamilyFund,
      image: {
        src: imageFamilyFund,
        alt: 'Family Fund dashboard on laptop',
      },
      service: 'App Development',
      testimonial: {
        author: {
          name: 'Sarah Thompson',
          role: 'CEO of Family Fund',
        },
        content: 'The team delivered beyond our expectations.',
      },
    },
    date: '2023-01-01',
    client: 'Family Fund',
    title: 'Financial Management Platform',
    description: 'Revolutionizing how families manage their finances together.',
    summary: [
      'Complete financial platform rebuild',
      'Custom budget tracking system',
      'Real-time family expense sharing',
    ],
    logo: logoFamilyFund,
    image: {
      src: imageFamilyFund,
      alt: 'Family Fund dashboard on laptop',
    },
    service: 'App Development',
    testimonial: {
      author: {
        name: 'Sarah Thompson',
        role: 'CEO of Family Fund',
      },
      content: 'The team delivered beyond our expectations.',
    },
  },
  {
    href: '/work/phobia',
    metadata: {
      date: '2023-02-01',
      client: 'Phobia',
      title: 'Mental Health Support App',
      description: 'A supportive platform for overcoming phobias.',
      summary: [
        'User-friendly interface',
        'Progress tracking',
        'Expert guidance',
      ],
      logo: logoPhobiaLight,
      image: {
        src: imagePhobia,
        alt: 'Phobia app interface',
      },
      service: 'App Development',
      testimonial: {
        author: {
          name: 'Michael Chen',
          role: 'Founder of Phobia',
        },
        content: 'Outstanding work on our mental health platform.',
      },
    },
    date: '2023-02-01',
    client: 'Phobia',
    title: 'Mental Health Support App',
    description: 'A supportive platform for overcoming phobias.',
    summary: [
      'User-friendly interface',
      'Progress tracking',
      'Expert guidance',
    ],
    logo: logoPhobiaLight,
    image: {
      src: imagePhobia,
      alt: 'Phobia app interface',
    },
    service: 'App Development',
    testimonial: {
      author: {
        name: 'Michael Chen',
        role: 'Founder of Phobia',
      },
      content: 'Outstanding work on our mental health platform.',
    },
  },
  {
    href: '/work/unseal',
    metadata: {
      date: '2023-03-01',
      client: 'Unseal',
      title: 'Secure Document Sharing',
      description: 'Enterprise-grade document security made simple.',
      summary: ['End-to-end encryption', 'Granular permissions', 'Audit logs'],
      logo: logoUnseal,
      image: {
        src: imageUnseal,
        alt: 'Unseal security dashboard',
      },
      service: 'Web Development',
      testimonial: {
        author: {
          name: 'Alex Rivera',
          role: 'CTO of Unseal',
        },
        content: 'Security and simplicity perfectly balanced.',
      },
    },
    date: '2023-03-01',
    client: 'Unseal',
    title: 'Secure Document Sharing',
    description: 'Enterprise-grade document security made simple.',
    summary: ['End-to-end encryption', 'Granular permissions', 'Audit logs'],
    logo: logoUnseal,
    image: {
      src: imageUnseal,
      alt: 'Unseal security dashboard',
    },
    service: 'Web Development',
    testimonial: {
      author: {
        name: 'Alex Rivera',
        role: 'CTO of Unseal',
      },
      content: 'Security and simplicity perfectly balanced.',
    },
  },
]

export function loadCaseStudies() {
  return Promise.resolve(mockCaseStudies)
}

import type { Article } from './mdx'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'

export const mockArticles: MDXEntry<Article>[] = [
  {
    href: '/blog/future-of-web-development',
    metadata: {
      date: '2023-04-06',
      title: 'The Future of Web Development',
      description:
        'Exploring upcoming trends and technologies in web development.',
      author: {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: {
          src: imageLeslieAlexander,
        },
      },
    },
    date: '2023-04-06',
    title: 'The Future of Web Development',
    description:
      'Exploring upcoming trends and technologies in web development.',
    author: {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: {
        src: imageLeslieAlexander,
      },
    },
  },
  {
    href: '/blog/mastering-typescript',
    metadata: {
      date: '2023-04-12',
      title: 'Mastering TypeScript',
      description: 'A comprehensive guide to TypeScript best practices.',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: {
          src: imageMichaelFoster,
        },
      },
    },
    date: '2023-04-12',
    title: 'Mastering TypeScript',
    description: 'A comprehensive guide to TypeScript best practices.',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      image: {
        src: imageMichaelFoster,
      },
    },
  },
  {
    href: '/blog/design-systems',
    metadata: {
      date: '2023-04-18',
      title: 'Building Design Systems',
      description: 'Creating scalable and maintainable design systems.',
      author: {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: {
          src: imageDriesVincent,
        },
      },
    },
    date: '2023-04-18',
    title: 'Building Design Systems',
    description: 'Creating scalable and maintainable design systems.',
    author: {
      name: 'Dries Vincent',
      role: 'Partner & Business Relations',
      image: {
        src: imageDriesVincent,
      },
    },
  },
]

export function loadArticles() {
  return Promise.resolve(mockArticles)
}

// import { fn } from '@storybook/test'
// import * as actual from './mdx' // 👈 Import the actual implementation

// // 👇 Re-export the actual implementation.
// // This catch-all ensures that the exports of the mock file always contains
// // all the exports of the original. It is up to the user to override
// // individual exports below as appropriate.
// export * from './mdx'

// // 👇 Export a mock function whose default implementation is the actual implementation.
// // With a useful mockName, it displays nicely in Storybook's Actions addon
// // for debugging.
// export const loadCaseStudies = fn(actual.loadCaseStudies).mockName(
//   'mdx::loadCaseStudies',
// )
