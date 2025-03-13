import clsx from 'clsx'

interface BulletedListItemProps extends React.PropsWithChildren {}

export function BulletedListItem({ children }: BulletedListItemProps) {
  return <li>{children}</li>
}

interface BulletedListProps
  extends React.PropsWithChildren<BulletedListItemProps> {
  className?: string
}

export function BulletedList({ children, className }: BulletedListProps) {
  return (
    <ul className={clsx('ms-4 list-outside list-disc', className)}>
      {children}
    </ul>
  )
}
