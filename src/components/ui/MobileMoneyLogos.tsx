import Image from 'next/image'
import { cn } from '@/lib/cn'

const operators = [
  { src: '/payments/orange-money.png', name: 'Orange Money' },
  { src: '/payments/mtn-momo.png', name: 'MTN Mobile Money' },
] as const

/**
 * The two Mobile Money operators SIMBA is integrating, shown by their own
 * app icons. Purely a "which operators" signal — availability is stated by
 * the FeatureBadge next to it, never implied by the logos themselves.
 *
 * `stacked` overlaps the tiles (compact, for small cards); otherwise they sit
 * side by side with their names.
 */
export function MobileMoneyLogos({
  size = 'md',
  stacked = false,
  decorative = false,
  className,
}: {
  size?: 'sm' | 'md'
  stacked?: boolean
  /** Empty alt text — for spots where adjacent copy already names both operators. */
  decorative?: boolean
  className?: string
}) {
  const tile = size === 'sm' ? 'h-6 w-6 rounded-md' : 'h-8 w-8 rounded-lg'
  const px = size === 'sm' ? 24 : 32

  if (stacked) {
    return (
      <span className={cn('flex -space-x-2', className)}>
        {operators.map((op) => (
          <Image
            key={op.name}
            src={op.src}
            alt={decorative ? '' : op.name}
            width={px * 2}
            height={px * 2}
            className={cn(tile, 'ring-2 ring-white')}
          />
        ))}
      </span>
    )
  }

  return (
    <ul className={cn('flex flex-wrap items-center gap-x-4 gap-y-2', className)} aria-label="Opérateurs Mobile Money">
      {operators.map((op) => (
        <li key={op.name} className="flex items-center gap-2">
          <Image src={op.src} alt="" width={px * 2} height={px * 2} className={cn(tile, 'shadow-soft')} />
          <span className="text-xs font-semibold text-navy-900">{op.name}</span>
        </li>
      ))}
    </ul>
  )
}
