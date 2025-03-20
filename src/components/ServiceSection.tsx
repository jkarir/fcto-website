import {
  Service,
  type ServiceItem,
  type ServiceItemWithDescriptionType,
  type ServiceItemWithItemsType,
  isServiceItemWithItems,
} from '@/lib/types/services-model-schema'
import { BulletedList, BulletedListItem } from './BulletedList'
import { ImageSection } from './ImageSection'
import { List, ListItem } from './List'
import { MarginButton } from './MarginButton'

function ServiceItemGroup(serviceItemGroup: ServiceItemWithItemsType) {
  return (
    <ListItem title={serviceItemGroup.title}>
      <BulletedList className="mt-1">
        {serviceItemGroup.items.map((item, index) => (
          <BulletedListItem key={index}>
            <div dangerouslySetInnerHTML={{ __html: item }} />
          </BulletedListItem>
        ))}
      </BulletedList>
    </ListItem>
  )
}

function ServiceItem(item: ServiceItemWithDescriptionType) {
  return (
    <ListItem title={item.title}>
      <div
        className="mt-1"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </ListItem>
  )
}

interface ServiceSectionProps {
  service: Service
}

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <ImageSection
      title={service.title}
      subTitle={service.subTitle}
      image={{
        ...service.image,
        shape:
          typeof service.image.shape === 'number'
            ? (service.image.shape as 0 | 1 | 2)
            : 0,
      }}
    >
      <div className="space-y-12 text-base text-neutral-600">
        <List className="mt-8 text-lg">
          {service.items.map((item) =>
            isServiceItemWithItems(item) ? (
              <ServiceItemGroup key={item.title} {...item} />
            ) : (
              <ServiceItem key={item.title} {...item} />
            ),
          )}
        </List>
        <div>
          <strong className="text-lg">{service.cta.header}</strong>
          <MarginButton href="/contact">{service.cta.title}</MarginButton>
        </div>
      </div>
    </ImageSection>
  )
}
