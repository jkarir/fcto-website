import { Button, Tailwind } from '@react-email/components'

interface ContactFormReplyProps {
  firstName: string
  inquiryCompany?: string
  inquiryProjectDetails: string
}

export function ContactFormReply({
  firstName,
  inquiryCompany,
  inquiryProjectDetails,
}: Readonly<ContactFormReplyProps>) {
  return (
    <Tailwind>
      <div className="font-sans">
        <div className="bg-neutral-950 px-6 py-12 text-white">
          <h1 className="font-display text-2xl font-medium tracking-tight">
            Let&apos;s talk about your project
          </h1>
        </div>

        <div className="bg-white px-6 py-12 text-neutral-600">
          <p className="mb-6">Hi {firstName},</p>

          <div className="mb-6 space-y-6">
            <p>
              Thanks for reaching out. I&apos;d be glad to learn more about your
              project and what led you to get in touch.
            </p>
            <p>
              Let&apos;s arrange a quick call to connect—feel free to suggest a
              time that works for you, or you can schedule directly using my
              calendar here:
            </p>
            <Button
              href="https://calendly.com/jurgen-karir/quick-intro-chat"
              className="inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Quick Intro Chat
            </Button>
          </div>

          {(inquiryCompany || inquiryProjectDetails) && (
            <div className="mb-6 rounded-2xl bg-neutral-50 p-6">
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Your Inquiry Details
              </h2>
              {inquiryCompany && (
                <p className="mt-2">Company: {inquiryCompany}</p>
              )}
              <p className="mt-2">Project Details: {inquiryProjectDetails}</p>
            </div>
          )}

          <div className="mt-12 border-t border-neutral-200 pt-6">
            <p className="font-display text-base font-semibold text-neutral-950">
              Jürgen
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
        </div>
      </div>
    </Tailwind>
  )
}
