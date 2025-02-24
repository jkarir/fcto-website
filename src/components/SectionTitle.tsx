interface SectionTitleProps extends React.PropsWithChildren {}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <span className="block font-display text-2xl font-semibold text-neutral-950">
      {children}
    </span>
  )
}
