import { type StaticImageData } from 'next/image'
import { z } from 'zod'

export const ServiceItemSchema = z.object({
  title: z.string(),
  description: z.string(),
})

export const ServiceSchema = z.object({
  title: z.string(),
  subTitle: z.string(),
  intro: z.string(),
  image: z.object({
    src: z.custom<StaticImageData>(),
    shape: z.number().optional(),
  }),
  items: z.array(ServiceItemSchema),
})

export type Service = z.infer<typeof ServiceSchema>
