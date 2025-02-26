'use server'

import { redirect } from 'next/navigation'
import { ContactFormValues } from '../types/contact-form-model-schema'

export async function submitContactForm(formData: ContactFormValues) {
  // const name = formData.get('name')
  // const email = formData.get('email')
  // const company = formData.get('company')
  // const message = formData.get('message')
  // console.log({ name, email, company, message })

  // return { success: true }
  redirect('/')
}
