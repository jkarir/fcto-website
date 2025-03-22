'use server'

import { redirect } from 'next/navigation'
import { ContactFormValues } from '@/lib/types/contact-form-model-schema'
import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm({
  email,
  message,
  name,
  company,
}: ContactFormValues) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Jürgen <jurgen@jurgenkarir.com>',
      to: [email],
      subject: 'Thanks For Reaching Out!',
      react: EmailTemplate({
        firstName: name,
        inquiryCompany: company,
        inquiryProjectDetails: message,
      }),
    })

    if (error) {
      console.error({ error1: error })
      return { success: false }
    }
  } catch (error) {
    console.error({ error2: error })
    return { success: false }
  }
  redirect('/')
}
