interface BulletedListItemProps extends React.PropsWithChildren {}

export function BulletedListItem({ children }: BulletedListItemProps) {
  return <li>{children}</li>
}

interface BulletedListProps
  extends React.PropsWithChildren<BulletedListItemProps> {}

export function BulletedList({ children }: BulletedListProps) {
  return <ul className="ms-4 list-outside list-disc">{children}</ul>
}
