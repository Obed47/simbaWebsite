'use client'

import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { PhoneMockup } from '@/components/home/PhoneMockup'
import { hero } from '@/content/fr'
import { appCtaHref } from '@/lib/links'
import { useScrollParallax } from '@/hooks/useScrollParallax'

export function Hero() {
  const { ref, progress } = useScrollParallax<HTMLElement>()

  return (
    <section ref={ref} id="accueil" aria-label="Présentation de SIMBA" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_0%,theme(colors.navy.100)_0%,transparent_60%)]" />
      {/* Slow-drifting, low-opacity accent blobs — decorative only, kept subtle
          so they add life without crowding the headline. */}
      <div
        className="animate-float pointer-events-none absolute top-10 right-[8%] -z-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl sm:h-72 sm:w-72"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute bottom-0 left-[4%] -z-10 h-40 w-40 rounded-full bg-sun/15 blur-3xl [animation-delay:2s] sm:h-56 sm:w-56"
        aria-hidden="true"
      />

      {/* The whole hero gently drifts up and fades as it scrolls past — a
          scroll-linked effect, not just an on-load one. `progress` is 0 while
          the hero fills the viewport and eases to 1 as it scrolls out. */}
      <div
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-12 pb-10 sm:px-6 sm:pt-16 sm:gap-12 sm:pb-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-20"
        style={{ opacity: 1 - progress * 0.55, transform: `translateY(${progress * 14}px)` }}
      >
        <div className="max-w-xl">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent-text uppercase">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-text/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-text" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            <span className="animate-rise block" style={{ animationDelay: '90ms' }}>
              {hero.headlineLines[0]}
            </span>
            <span className="animate-rise block text-accent" style={{ animationDelay: '220ms' }}>
              {hero.headlineLines[1]}
            </span>
          </h1>

          <p className="animate-rise mt-5 max-w-lg text-lg leading-8 text-muted" style={{ animationDelay: '360ms' }}>
            {hero.body}
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '460ms' }}
          >
            <Button href={appCtaHref} icon={<Icon name="arrow-right" className="h-4 w-4" />}>
              {hero.primaryCta}
            </Button>
            <Button href="#fonctionnement" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="animate-rise mt-8 flex items-center gap-2 text-sm text-muted" style={{ animationDelay: '540ms' }}>
            <Icon name="phone" className="h-4 w-4 text-accent-text" />
            <span>{hero.note}</span>
          </div>
        </div>

        <div
          className="animate-rise relative mx-auto lg:mx-0 lg:justify-self-end"
          style={{
            animationDelay: '200ms',
            transform: `translateY(${progress * -36}px)`,
            opacity: 1 - progress * 0.3,
          }}
        >
          {/* Hover tilt lives on its own inner element so it can keep using a
              plain CSS transform without fighting the scroll-linked inline
              transform on the wrapper above. */}
          <div className="relative transition-transform duration-500 ease-out hover:-translate-y-1 hover:-rotate-1">
            {/* Concentric rings, ambient motion behind the mockup — built from
                plain borders rather than an image so they stay crisp and cheap. */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
              aria-hidden="true"
              style={{ transform: `scale(${1 + progress * 0.08})` }}
            >
              <div className="absolute top-1/2 left-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-900/10 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]" />
              <div className="animate-ring-spin absolute top-1/2 left-1/2 h-[310px] w-[310px] rounded-full border border-dashed border-navy-900/15 sm:h-[390px] sm:w-[390px] lg:h-[450px] lg:w-[450px]" />
              <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15 sm:h-[470px] sm:w-[470px] lg:h-[540px] lg:w-[540px]" />
            </div>

            {/* A seller identity chip, in the spirit of the inspiration's
                floating profile photo — initials instead of a photo, since
                no authentic SIMBA user photography exists yet to put here.
                Anchored mid-left so it clears the "Mobile Money" card above
                and the "Code de remise" card below on the narrow frame. */}
            <div className="animate-float absolute top-[36%] -left-12 z-20 hidden items-center gap-2 rounded-full border border-line bg-white py-1.5 pr-4 pl-1.5 shadow-lift sm:flex [animation-delay:0.8s]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                A.
              </span>
              <div className="leading-tight">
                <p className="text-[0.68rem] font-semibold text-navy-900">Boutique Aline</p>
                <p className="text-[0.6rem] text-muted">Vendeuse vérifiée</p>
              </div>
            </div>

            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
