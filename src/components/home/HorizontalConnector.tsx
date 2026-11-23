'use client'

import { useInView } from '@/hooks/useInView'

/**
 * Draws a short horizontal line into the gap between two adjacent cards in a
 * single-row grid, once it scrolls into view — the buyer journey's
 * equivalent of `StepConnector`'s vertical line. Hidden below `visibleFrom`:
 * it has nowhere sensible to sit once the grid wraps onto multiple rows.
 */
export function HorizontalConnector({ visibleFrom = 'lg' }: { visibleFrom?: 'sm' | 'lg' }) {
  const { ref, isInView } = useInView<SVGSVGElement>({ threshold: 0.5 })

  return (
    <svg
      ref={ref}
      className={`pointer-events-none absolute top-9 left-full z-0 hidden h-0.5 w-5 ${visibleFrom === 'sm' ? 'sm:block' : 'lg:block'}`}
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="var(--color-line-strong)"
        strokeWidth="2"
        pathLength={100}
        style={{
          strokeDasharray: 100,
          strokeDashoffset: isInView ? 0 : 100,
          transition: 'stroke-dashoffset 0.5s cubic-bezier(0.2, 0.7, 0.2, 1)',
        }}
      />
    </svg>
  )
}
