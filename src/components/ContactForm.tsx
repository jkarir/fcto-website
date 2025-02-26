'use client'

import { submitContactForm } from '@/lib/server-actions/contact-form-submit'
import {
  ContactFormSchema,
  ContactFormValues,
} from '@/lib/types/contact-form-model-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import { FadeIn } from './FadeIn'
import { TextInput } from './TextInput'

interface ContactFormProps {}

export function ContactForm({}: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    mode: 'onChange',
  })

  return (
    <FadeIn className="lg:order-last">
      <form
        onSubmit={form.handleSubmit(async (data) => {
          await submitContactForm(data)
        })}
        className="space-y-6"
      >
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Get In Touch
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput<ContactFormValues>
            label="Name"
            controllerProps={{
              name: 'name',
              control: form.control,
            }}
            autoComplete="name"
          />
          <TextInput<ContactFormValues>
            controllerProps={{
              name: 'email',
              control: form.control,
            }}
            label="Email"
          />
          <TextInput<ContactFormValues>
            label="Company"
            controllerProps={{
              name: 'company',
              control: form.control,
            }}
          />
          <TextInput<ContactFormValues>
            label="Message"
            controllerProps={{
              name: 'message',
              control: form.control,
            }}
          />
        </div>
        <Button type="submit" className="mt-10">
          Let's work together
        </Button>
      </form>
    </FadeIn>
  )
}
