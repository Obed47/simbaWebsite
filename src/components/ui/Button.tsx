import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { isAppCtaExternal } from '@/lib/links'

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-soft hover:bg-accent-hover active:bg-accent-hover',
  secondary:
    'bg-white text-navy-900 border border-line-strong hover:border-navy-800 hover:bg-navy-50',
  ghost: 'text-navy-900 hover:bg-navy-50',
  'on-dark': 'bg-white text-navy-900 hover:bg-navy-50',
}

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

export function Button({ href, children, variant = 'primary', className, icon, onClick }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold',
    'transition-colors duration-150 ease-out',
    variantClasses[variant],
    className,
  )

  if (isAppCtaExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
      {icon}
    </Link>
  )
}
