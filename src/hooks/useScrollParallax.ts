'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Tracks how far a section has scrolled past the top of the viewport, as a
 * 0–1 progress value: 0 while the section's top is at or below the viewport
 * top, rising to 1 once it has scrolled up by one viewport height. Drives
 * the hero's scroll-linked motion (mockup drift/fade) without a library —
 * a rAF-throttled scroll listener and a couple of CSS transforms.
 *
 * Starts at `0` on both server and client (no environment-dependent branch
 * in the initializer), so there's nothing for hydration to disagree on, and
 * does nothing at all under `prefers-reduced-motion` — progress simply stays 0.
 */
export function useScrollParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const measure = () => {
      const node = ref.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const raw = -rect.top / window.innerHeight
      setProgress(Math.min(1, Math.max(0, raw)))
    }
    const onScrollOrResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  return { ref, progress }
}
