'use client'

import { useInView } from '@/hooks/useInView'

/**
 * The vertical line joining one numbered step to the next, drawn in with an
 * SVG stroke-dashoffset animation instead of a static div — a small, cheap
 * touch (one `<line>`, no library) that reinforces the step-by-step pacing.
 */
export function StepConnector() {
  const { ref, isInView } = useInView<SVGSVGElement>({ threshold: 0.6 })

  return (
    <svg
      ref={ref}
      className="absolute top-8 left-[15px] h-[calc(100%-0.5rem)] w-0.5"
      viewBox="0 0 2 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="100"
        stroke="var(--color-line-strong)"
        strokeWidth="2"
        pathLength={100}
        style={{
          strokeDasharray: 100,
          strokeDashoffset: isInView ? 0 : 100,
          transition: 'stroke-dashoffset 0.8s cubic-bezier(0.2, 0.7, 0.2, 1)',
        }}
      />
    </svg>
  )
}
