import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Jürgen Karir',
    default: 'Jürgen Karir | Engineering Leader',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  )
}
