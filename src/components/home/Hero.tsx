import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { PhoneMockup } from '@/components/home/PhoneMockup'
import { hero } from '@/content/fr'
import { appCtaHref } from '@/lib/links'

export function Hero() {
  return (
    <section id="accueil" aria-label="Présentation de SIMBA" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_0%,theme(colors.navy.100)_0%,transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-12 pb-10 sm:px-6 sm:pt-16 sm:gap-12 sm:pb-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-20">
        <div className="animate-rise max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent-text uppercase">
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {hero.headline}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-muted">{hero.body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={appCtaHref} icon={<Icon name="arrow-right" className="h-4 w-4" />}>
              {hero.primaryCta}
            </Button>
            <Button href="#fonctionnement" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted">
            <Icon name="phone" className="h-4 w-4 text-accent-text" />
            <span>{hero.note}</span>
          </div>
        </div>

        <div className="animate-rise-delay lg:justify-self-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
