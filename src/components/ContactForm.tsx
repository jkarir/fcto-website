'use client'

import {
  ContactFormValues,
  ContactFormSchema,
} from '@/lib/types/contact-form-model-schema'
import { Button } from './Button'
import { FadeIn } from './FadeIn'
import { TextInput } from './TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitContactForm } from '@/lib/server-actions/contact-form-submit'

interface ContactFormProps {}

export function ContactForm({}: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  })

  return (
    <FadeIn className="lg:order-last">
      <form action={submitContactForm} className="space-y-6">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput {...form.register('email')} label="Email" />
          <TextInput label="Company" {...form.register('company')} />
          <TextInput label="Message" {...form.register('message')} />
        </div>
        <Button type="submit" className="mt-10">
          Let's work together
        </Button>
      </form>
    </FadeIn>
  )
}
