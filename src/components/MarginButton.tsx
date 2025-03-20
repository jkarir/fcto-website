import React from 'react'
import { Button } from '@/components/Button'

interface MarginButtonProps {
  href: string
  ariaLabel?: string
  className?: string
  children: React.ReactNode
}

export function MarginButton({
  href,
  ariaLabel,
  className = 'mt-8',
  children,
}: MarginButtonProps) {
  return (
    <div className={className}>
      <Button href={href} aria-label={ariaLabel || undefined}>
        {children}
      </Button>
    </div>
  )
}
