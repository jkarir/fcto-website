import { ListItem } from './List'

interface NestedListItemProps {}

export function NestedListItem({
  children,
}: React.PropsWithChildren<NestedListItemProps>) {
  return <li>{children}</li>
}

interface NestedListProps extends React.PropsWithChildren<NestedListItemProps> {
  title: string
}

export function NestedList({ title, children }: NestedListProps) {
  return (
    <ListItem title={title}>
      <ul className="ms-4 list-outside list-disc">{children}</ul>
    </ListItem>
  )
}
