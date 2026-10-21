import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  heading: string
  lead?: ReactNode
  align?: 'left' | 'center'
  tone?: 'default' | 'on-dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  heading,
  lead,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const isDark = tone === 'on-dark'

  return (
    <div className={cn('max-w-2xl', isCenter && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'text-xs font-semibold tracking-[0.18em] uppercase',
          isDark ? 'text-sun' : 'text-accent-text',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl',
          isDark ? 'text-white' : 'text-navy-900',
        )}
      >
        {heading}
      </h2>
      {lead ? (
        <p className={cn('mt-4 text-base leading-7 sm:text-lg sm:leading-8', isDark ? 'text-navy-100' : 'text-muted')}>
          {lead}
        </p>
      ) : null}
    </div>
  )
}
