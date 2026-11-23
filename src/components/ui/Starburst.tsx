/**
 * A radiating sunburst of spokes, used as a static corner ornament (the hero
 * is the only place it's used). Pure inline SVG, colourable via `className`'s
 * text colour and opacity utilities — no image asset needed.
 */
export function Starburst({ className }: { className?: string }) {
  const spokeCount = 20

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {Array.from({ length: spokeCount }).map((_, index) => {
        const angle = (index * 360) / spokeCount
        // Alternating long/short spokes read as a sunburst rather than a
        // plain wheel of evenly-spaced lines.
        const length = index % 2 === 0 ? 46 : 32
        return (
          <line
            key={index}
            x1="50"
            y1="50"
            x2="50"
            y2={50 - length}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        )
      })}
    </svg>
  )
}
