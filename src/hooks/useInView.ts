'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has entered the viewport, once. Used to drive
 * scroll-triggered reveal animations without pulling in an animation library.
 *
 * Starts `false` on both server and client — deliberately not branching on
 * `typeof IntersectionObserver` in the initializer, since that check is
 * `true` during server rendering (no DOM in Node) and `false` once hydrated
 * in a real browser, which would make the server-rendered markup disagree
 * with the client's first render and trigger a hydration mismatch on every
 * revealed element. The one-time feature check instead happens inside the
 * effect, which only ever runs client-side.
 *
 * Fires once (`triggerOnce`) so content doesn't re-animate on every scroll
 * past it, and fires immediately when the browser doesn't support
 * IntersectionObserver rather than leaving content permanently hidden.
 */
export function useInView<T extends Element>(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      // One-time browser-capability fallback (pre-2019 browsers), not derived
      // state — can't be a lazy useState initializer without reintroducing
      // the SSR/client mismatch this hook exists to avoid (see file comment).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options?.threshold, options?.rootMargin])

  return { ref, isInView }
}
