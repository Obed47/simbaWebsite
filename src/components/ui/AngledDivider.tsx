/**
 * A thin angled seam between two sections of contrasting background colour —
 * used only at the page's most jarring transitions (into and out of the dark
 * seller section), not on every boundary. The wrapper's own background is
 * the colour of the section above; the polygon inside is the colour of the
 * section below, so the component is just dropped between the two in normal
 * document flow — no absolute positioning or z-index juggling needed.
 */
export function AngledDivider({
  from,
  to,
  direction,
}: {
  from: string
  to: string
  direction: 'into-dark' | 'out-of-dark'
}) {
  const points = direction === 'into-dark' ? '0,48 1440,0 1440,48' : '0,0 1440,0 0,48'

  return (
    <div style={{ background: from }} aria-hidden="true">
      <svg className="block h-8 w-full sm:h-12" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <polygon points={points} fill={to} />
      </svg>
    </div>
  )
}
