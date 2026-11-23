'use client'

import { useEffect, useRef } from 'react'

/**
 * Updates `--glow-x`/`--glow-y` custom properties on the ref'd element to
 * follow the pointer, for a radial-gradient spotlight in the stylesheet.
 * Direct DOM mutation (no React state), desktop pointer only, and a no-op
 * under `prefers-reduced-motion` — the background simply stays wherever it
 * was last set (its CSS default), never animating.
 */
export function usePointerGlow<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      node.style.setProperty('--glow-x', `${x}%`)
      node.style.setProperty('--glow-y', `${y}%`)
    }

    node.addEventListener('mousemove', onMove)
    return () => node.removeEventListener('mousemove', onMove)
  }, [])

  return ref
}
