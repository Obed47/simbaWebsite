'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { isAppCtaExternal } from '@/lib/links'

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-soft hover:bg-accent-hover hover:shadow-lift active:bg-accent-hover',
  secondary:
    'bg-white text-navy-900 border border-line-strong hover:border-navy-800 hover:bg-navy-50 hover:shadow-soft',
  ghost: 'text-navy-900 hover:bg-navy-50',
  'on-dark': 'bg-white text-navy-900 hover:bg-navy-50 hover:shadow-lift',
}

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

// Wrapped once at module scope, not per render — motion.create() memoises
// its own result anyway, but there's no reason to call it twice.
const MotionLink = motion.create(Link)
const MotionAnchor = motion.create('a')

// Spring hover/tap feedback lives here, not in a CSS :hover rule — Framer
// keeps an inline `transform` on the element once any motion prop is set,
// which would silently out-rank a stylesheet transform rule anyway.
const tapSpring = { type: 'spring', stiffness: 400, damping: 17 } as const

export function Button({ href, children, variant = 'primary', className, icon, onClick }: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold',
    'transition-[background-color,color,border-color,box-shadow] duration-200 ease-out',
    variantClasses[variant],
    className,
  )

  const content = (
    <>
      {children}
      {icon ? <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1">{icon}</span> : null}
    </>
  )

  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.96 },
    transition: tapSpring,
  }

  if (isAppCtaExternal(href)) {
    return (
      <MotionAnchor href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick} {...motionProps}>
        {content}
      </MotionAnchor>
    )
  }

  return (
    <MotionLink href={href} className={classes} onClick={onClick} {...motionProps}>
      {content}
    </MotionLink>
  )
}
