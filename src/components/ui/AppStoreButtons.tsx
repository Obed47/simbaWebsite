import Image from 'next/image'
import Link from 'next/link'
import { ui } from '@/content/fr'
import { appStoreHref, playStoreHref, isAppCtaExternal } from '@/lib/links'
import { cn } from '@/lib/cn'

/**
 * App Store / Google Play download badges, using the official icon glyphs
 * (not the full "Download on the App Store" badge artwork) paired with our
 * own text — the standard sanctioned way to reference a store listing.
 * Each badge points at its own real listing once configured
 * (`NEXT_PUBLIC_APP_STORE_URL` / `NEXT_PUBLIC_PLAY_STORE_URL`); until then
 * it falls back to the contact section rather than a fabricated listing.
 */
function StoreBadge({
  href,
  iconSrc,
  iconAlt,
  line1,
  line2,
}: {
  href: string
  iconSrc: string
  iconAlt: string
  line1: string
  line2: string
}) {
  const classes = cn(
    'group flex items-center gap-2.5 rounded-xl bg-navy-950 px-4 py-2.5 text-white',
    'transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-navy-900 active:translate-y-0',
  )

  const content = (
    <>
      {/* Neither source file has a transparent background, so the icon sits
          in its own small white tile rather than showing a stray white box
          against the dark pill — a common, intentional-looking treatment
          for store glyphs either way. */}
      <span className="flex h-8 w-8 flex-none items-center justify-center overflow-hidden rounded-lg bg-white transition-transform duration-200 group-hover:scale-110">
        <Image src={iconSrc} alt={iconAlt} width={28} height={28} className="h-6 w-6 object-contain" />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.6rem] text-navy-100/80">{line1}</span>
        <span className="block text-sm font-semibold">{line2}</span>
      </span>
    </>
  )

  if (isAppCtaExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

export function AppStoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <StoreBadge
        href={appStoreHref}
        iconSrc="/elements/app-store.jpeg"
        iconAlt="App Store"
        line1={ui.appStoreLine1}
        line2={ui.appStoreLine2}
      />
      <StoreBadge
        href={playStoreHref}
        iconSrc="/elements/google-play.png"
        iconAlt="Google Play"
        line1={ui.playStoreLine1}
        line2={ui.playStoreLine2}
      />
    </div>
  )
}
