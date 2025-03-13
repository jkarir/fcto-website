import { z } from 'zod'
import { StaticImageData } from 'next/image'

// Base schema for items with just a title
const ServiceItemBase = z.object({
  title: z.string(),
})

// Schema for items with a description
const ServiceItemWithDescription = ServiceItemBase.extend({
  description: z.string(),
})
export type ServiceItemWithDescriptionType = z.infer<
  typeof ServiceItemWithDescription
>

// Schema for items with an array of strings or nested items
const ServiceItemWithItems = ServiceItemBase.extend({
  items: z.array(z.string()),
})
export type ServiceItemWithItemsType = z.infer<typeof ServiceItemWithItems>

// Union type that allows either format
export const ServiceItemSchema = z.union([
  ServiceItemWithDescription,
  ServiceItemWithItems,
])

// Define the schema for the entire service
export const ServiceSchema = z.object({
  title: z.string(),
  subTitle: z.string(),
  bestFor: z.string(),
  image: z.object({
    src: z.custom<StaticImageData>(),
    shape: z.number(),
  }),
  items: z.array(ServiceItemSchema),
})

// TypeScript types inferred from the schemas
export type ServiceItem = z.infer<typeof ServiceItemSchema>
export type Service = z.infer<typeof ServiceSchema>

// Type guards for easier usage
export function isServiceItemWithDescription(
  item: ServiceItem,
): item is z.infer<typeof ServiceItemWithDescription> {
  return 'description' in item
}

export function isServiceItemWithItems(
  item: ServiceItem,
): item is z.infer<typeof ServiceItemWithItems> {
  return 'items' in item
}
