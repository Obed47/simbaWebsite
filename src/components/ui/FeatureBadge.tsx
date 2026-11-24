import { cn } from '@/lib/cn'
import { features, statusCopy, type FeatureKey, type FeatureStatus } from '@/config/features'

const styles: Record<FeatureStatus, string> = {
  live: 'bg-accent-soft text-accent-text border-accent/20',
  'in-development': 'bg-sun-soft text-sun-ink border-sun/30',
  planned: 'bg-navy-50 text-navy-800 border-navy-800/15',
  unknown: 'bg-line/40 text-muted border-line-strong',
}

/**
 * Small status pill shown next to any product claim that maps to an entry in
 * the feature-status matrix (`src/config/features.ts`). Keeps marketing copy
 * honest without needing a sentence of caveats next to every bullet.
 */
export function FeatureBadge({ feature, className }: { feature: FeatureKey; className?: string }) {
  const status = features[feature].status
  // Per the site owner, "En développement" pills aren't shown. The status
  // stays in the matrix, and section copy (payments notice, FAQ) still says
  // what isn't open yet.
  if (status === 'in-development') return null
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide whitespace-nowrap',
        styles[status],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {statusCopy[status]}
    </span>
  )
}
