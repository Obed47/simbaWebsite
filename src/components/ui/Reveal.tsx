'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  /** Rendered tag — pass "li" to reveal a grid/flex item directly, no wrapper div. */
  as?: 'div' | 'li'
  className?: string
  /** Stagger delay in milliseconds, typically `index * 80`. */
  delay?: number
  /** Animation style: fade-and-rise (default) or a plain fade for dense text blocks. */
  variant?: 'rise' | 'fade'
}

// Only two tags are ever passed through `as` — keeping this a plain lookup
// (rather than something like `motion[as]`) keeps every variant fully typed.
const motionTags = { div: motion.div, li: motion.li } as const

const variants: Record<'rise' | 'fade', Variants> = {
  rise: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

/**
 * Reveals its children with a spring-eased fade/rise the first time they
 * scroll into view, once, via Framer Motion's `whileInView`. Rendered with
 * the same `hidden` inline styles on the server and on first client paint
 * (no environment-dependent branch), so there's nothing for hydration to
 * disagree on; `.js-reveal` is forced visible for no-JS visitors by the
 * `<noscript>` rule in the root layout, since an inline style otherwise
 * can't be overridden by a plain stylesheet selector.
 */
export function Reveal({ children, as = 'div', className, delay = 0, variant = 'rise' }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motionTags[as]

  return (
    <MotionTag
      className={cn('js-reveal', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
      variants={variants[variant]}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 120, damping: 20, mass: 0.6, delay: delay / 1000 }
      }
    >
      {children}
    </MotionTag>
  )
}
