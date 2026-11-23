'use client'

import { useInView } from '@/hooks/useInView'

/**
 * A small decorative "journey" strip under the vision heading: a filled
 * marker for where SIMBA operates today, a faint line trailing toward an
 * unnamed next step. Deliberately names no country or date beyond Cameroon —
 * the copy only commits to "other African markets" in general, so the
 * visual doesn't claim more than that.
 */
export function GrowthPath() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.5 })

  return (
    <div ref={ref} className="mt-8 rounded-panel border border-line bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 flex-none rounded-full bg-accent" aria-hidden="true" />
        <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-line">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent transition-[width] duration-700 ease-out"
            style={{ width: isInView ? '35%' : '0%' }}
          />
        </div>
        <span
          className="h-3 w-3 flex-none rounded-full border-2 border-line-strong bg-white"
          aria-hidden="true"
        />
      </div>
      <div className="mt-2.5 flex items-center justify-between text-xs">
        <span className="font-semibold text-navy-900">Cameroun · aujourd’hui</span>
        <span className="text-muted">D’autres marchés africains, ensuite</span>
      </div>
    </div>
  )
}
