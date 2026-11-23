'use client'

import { useEffect, useRef } from 'react'

/**
 * Restrained "magnetic" hover: the element nudges toward the cursor within a
 * small radius, then eases back on mouse-leave. Desktop pointer only
 * (`pointer: fine`) and skipped entirely under `prefers-reduced-motion` —
 * mutates the DOM node's style directly in the event handler rather than
 * going through React state, so moving the mouse never triggers a re-render.
 *
 * Reserved for a single, meaningful call to action — not every button.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.25, maxOffset = 14) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      const dx = Math.max(-maxOffset, Math.min(maxOffset, x * strength))
      const dy = Math.max(-maxOffset, Math.min(maxOffset, y * strength))
      node.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const onLeave = () => {
      node.style.transform = ''
    }

    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)
    return () => {
      node.removeEventListener('mousemove', onMove)
      node.removeEventListener('mouseleave', onLeave)
      node.style.transform = ''
    }
  }, [strength, maxOffset])

  return ref
}
