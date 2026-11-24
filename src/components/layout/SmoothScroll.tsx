'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Site-wide inertial smooth scrolling. Mounted once in the root layout;
 * renders nothing itself, just drives the scroll physics in the background.
 *
 * Skipped entirely under `prefers-reduced-motion` — native scroll is simply
 * left alone, which is both the accessible choice and means there's nothing
 * here for a reduced-motion user to opt out of.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
