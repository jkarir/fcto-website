'use server'

import { Resend } from 'resend'
import { BlogSubscribeFormValues } from '@/lib/types/blog-subscribe-form-schema'
import { redirect } from 'next/navigation'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitBlogSubscribeForm({
  email,
}: BlogSubscribeFormValues) {
  try {
    const { data, error } = await resend.contacts.create({
      email,
      audienceId: process.env.BLOG_AUDIENCE_ID as string,
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
