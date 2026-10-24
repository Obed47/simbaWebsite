'use client'

import type { ElementType, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  /** Rendered tag — pass "li" to reveal a grid/flex item directly, no wrapper div. */
  as?: ElementType;
  className?: string
  /** Stagger delay in milliseconds, typically `index * 80`. */
  delay?: number
  /** Animation style: fade-and-rise (default) or a plain fade for dense text blocks. */
  variant?: 'rise' | 'fade'
}

/**
 * Reveals its children with a short fade/rise transition the first time they
 * scroll into view. Pure CSS transition + IntersectionObserver — no animation
 * library — so it stays cheap on slow connections and respects
 * `prefers-reduced-motion` via the global stylesheet override.
 */
export function Reveal({ children, as: Tag = 'div', className, delay = 0, variant = 'rise' }: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out',
        variant === 'rise' && !isInView && 'translate-y-5 opacity-0',
        variant === 'rise' && isInView && 'translate-y-0 opacity-100',
        variant === 'fade' && !isInView && 'opacity-0',
        variant === 'fade' && isInView && 'opacity-100',
        className,
      )}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
