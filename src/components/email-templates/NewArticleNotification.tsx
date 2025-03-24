import { Button, Tailwind } from '@react-email/components'
import Image from 'next/image'

interface NewArticleNotificationProps {
  articleTitle: string
  articleDescription: string
  articleExcerpt: string
  articleUrl: string
  publicationDate: string
  authorName?: string
  coverImageUrl?: string
  recipientEmail: string
}

export function NewArticleNotification({
  articleTitle,
  articleDescription,
  articleExcerpt,
  articleUrl,
  publicationDate,
  authorName = 'Jürgen Karir',
  coverImageUrl,
  recipientEmail,
}: Readonly<NewArticleNotificationProps>) {
  // Encode the email for use in the URL
  const encodedEmail = encodeURIComponent(recipientEmail)
  const unsubscribeApiUrl = `/api/unsubscribe?email=${encodedEmail}`

  return (
    <Tailwind>
      <div className="font-sans">
        <div className="bg-neutral-950 px-6 py-12 text-white">
          <h1 className="font-display text-2xl font-medium tracking-tight">
            New Article Published
          </h1>
        </div>

        <div className="bg-white px-6 py-12 text-neutral-600">
          <p className="mb-6">Hi,</p>

          <div className="mb-6 space-y-6">
            <p>
              I&apos;ve just published a new article that might be relevant to
              your interests.
            </p>

            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              {coverImageUrl && (
                <div className="relative h-48 w-full bg-neutral-100">
                  <Image
                    src={coverImageUrl}
                    alt={articleTitle}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-neutral-950">
                  {articleTitle}
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Published on {publicationDate}
                </p>
                <p className="mt-4">{articleDescription}</p>

                <div className="mt-6 border-l-4 border-neutral-200 pl-4 italic">
                  &quot;{articleExcerpt}&quot;
                </div>

                <div className="mt-6">
                  <Button
                    href={articleUrl}
                    className="inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>

            <p>
              I hope you find it useful. As always, I welcome your thoughts and
              feedback!
            </p>
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-6">
            <p className="font-display text-base font-semibold text-neutral-950">
              {authorName}
            </p>
            <p className="mt-1 text-sm text-neutral-600">Fractional CTO</p>
            <p className="mt-2 text-sm text-neutral-600">
              <a
                href="https://jurgenkarir.com"
                className="text-neutral-950 hover:text-neutral-700"
              >
                jurgenkarir.com
              </a>
            </p>
          </div>

          <div className="mt-8 text-center text-xs text-neutral-400">
            <p className="mb-2">
              This email was sent to you because you subscribed to my blog
              updates.
            </p>
            <a
              href={unsubscribeApiUrl}
              className="text-neutral-500 underline hover:text-neutral-700"
            >
              Unsubscribe from these emails
            </a>
          </div>
        </div>
      </div>
    </Tailwind>
  )
}
