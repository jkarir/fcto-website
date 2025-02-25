import { Service } from '@/lib/types/services-model-schema'
import { ImageSection } from './ImageSection'
import { List, ListItem } from './List'

interface ServiceSectionProps {
  service: Service
}

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <ImageSection
      title={service.title}
      subTitle={service.subTitle}
      image={service.image}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          {service.intro}
        </h3>
        <List className="mt-8 text-lg">
          {service.items.map((item) => (
            <ListItem key={item.title} title={item.title}>
              {item.description}
            </ListItem>
          ))}
        </List>
      </div>
    </ImageSection>
  )
}
