'use client'

import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Starburst } from '@/components/ui/Starburst'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { FallingProducts } from '@/components/home/FallingProducts'
import { hero, ui } from '@/content/fr'
import { useScrollParallax } from '@/hooks/useScrollParallax'
import { usePointerGlow } from '@/hooks/usePointerGlow'
import { useMagnetic } from '@/hooks/useMagnetic'

const PAGINATION_DOTS = 5

export function Hero() {
  const { ref: parallaxRef, progress } = useScrollParallax<HTMLElement>()
  const glowRef = usePointerGlow<HTMLElement>()
  const magneticRef = useMagnetic<HTMLDivElement>(0.2, 10)

  // Both hooks just need a live reference to the same <section> node; merging
  // them into one callback ref avoids a second wrapping element.
  const setSectionRef = (node: HTMLElement | null) => {
    parallaxRef.current = node
    glowRef.current = node
  }

  return (
    <section
      ref={setSectionRef}
      id="accueil"
      aria-label="Présentation de SIMBA"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_0%,theme(colors.navy.100)_0%,transparent_60%)]" />
      {/* Pointer-reactive spotlight — follows the cursor on desktop, static
          and unobtrusive everywhere else (the CSS var simply never updates). */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(480px circle at var(--glow-x, 80%) var(--glow-y, 10%), color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 70%)',
        }}
      />
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
      {/* Sunburst ornaments — static texture, not motion; the falling feed is
          the one "wow" animation in this section. */}
      <Starburst className="pointer-events-none absolute -top-6 -left-10 -z-10 h-36 w-36 text-navy-900/8 sm:h-44 sm:w-44" />
      <Starburst className="pointer-events-none absolute right-[6%] bottom-6 -z-10 h-28 w-28 text-navy-900/10 sm:h-32 sm:w-32" />

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
            <span className="animate-rise text-gradient-brand block" style={{ animationDelay: '220ms' }}>
              {hero.headlineLines[1]}
            </span>
          </h1>

          <p className="animate-rise mt-5 max-w-lg text-lg leading-8 text-muted" style={{ animationDelay: '360ms' }}>
            {hero.body}
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-3"
            style={{ animationDelay: '460ms' }}
          >
            {/* The primary call to action is now the store badges — a
                direct download prompt — rather than a generic "explore"
                button. Magnetic nudge reserved for this one pair, not every
                button, per the "restrained" guidance for this effect. */}
            <div ref={magneticRef} className="inline-block transition-transform duration-300 ease-out">
              <AppStoreButtons />
            </div>
            <Button href="#fonctionnement" variant="secondary" className="w-fit">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="animate-rise mt-8 flex items-center gap-2 text-sm text-muted" style={{ animationDelay: '540ms' }}>
            <Icon name="phone" className="h-4 w-4 text-accent-text" />
            <span>{hero.note}</span>
          </div>
        </div>

        <div
          className="animate-rise mx-auto lg:mx-0 lg:justify-self-end"
          style={{
            animationDelay: '200ms',
            transform: `translateY(${progress * -36}px)`,
            opacity: 1 - progress * 0.3,
          }}
        >
          {/* Hover tilt lives on its own element so it can keep using a plain
              CSS transform without fighting the scroll-linked inline
              transform on the wrapper above. The panel sizes itself from its
              own content (padding, not a guessed fixed height) so it can
              never collide with or clip what's inside it — the floating
              Mobile Money / Code de remise cards are still free to break
              past its edges, which is the intended layered look. */}
          <div
            className="relative mx-auto w-[320px] rounded-[2.75rem] bg-linear-to-br from-accent to-accent-ink px-4 pt-6 pb-5 shadow-lift transition-transform duration-500 ease-out hover:-translate-y-1 hover:-rotate-1 sm:w-[380px] sm:px-5 lg:w-[440px] lg:px-6"
            style={{ transform: `scale(${1 + progress * 0.04})` }}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-white uppercase">
                Nouveautés
              </span>
              <span className="flex items-center gap-1.5 text-[0.65rem] font-medium text-white/80">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                En direct
              </span>
            </div>

            {/* The falling-products cascade — a continuous, two-column
                stream of product photos drifting top to bottom. Hover
                pauses it (see .falling-products-pause in globals.css), a
                real interaction, not a decorative hover state. */}
            <div className="mt-4 h-[360px] sm:h-[420px] lg:h-[460px]">
              <FallingProducts />
            </div>

            {/* Floating card: payment confirmation. Anchored above the panel
                so it never covers the cascade's own content. */}
            <div className="animate-float absolute -top-7 -right-5 hidden w-40 rounded-xl border border-white/60 bg-white/75 p-3 shadow-lift backdrop-blur-md sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sun-soft text-sun-ink">
                  <Icon name="phone" className="h-3.5 w-3.5" />
                </span>
                <p className="text-[0.68rem] font-semibold text-navy-900">Mobile Money</p>
              </div>
              <p className="mt-1.5 text-[0.62rem] leading-4 text-muted">Confirmez le paiement sur votre téléphone</p>
            </div>

            {/* Floating card: handover code. Anchored below the panel for the same reason. */}
            <div className="animate-float absolute -bottom-7 -left-5 hidden w-36 rounded-xl border border-white/60 bg-white/75 p-3 shadow-lift backdrop-blur-md [animation-delay:1.4s] sm:block">
              <p className="text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Code de remise</p>
              <p className="mt-1 text-lg font-bold tracking-[0.2em] text-navy-900">48 21 06</p>
            </div>

            {/* Panel-level chrome echoing the reference composition's
                pagination strip — purely decorative texture, not a working
                carousel, so it's never styled or marked up as a control. */}
            <div className="mt-5 flex items-center justify-between" aria-hidden="true">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: PAGINATION_DOTS }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index === 0
                        ? 'h-1.5 w-5 rounded-full bg-white'
                        : 'h-1.5 w-1.5 rounded-full bg-white/40'
                    }
                  />
                ))}
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[0.65rem] font-semibold text-white">
                1
              </span>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted">{ui.photoPlaceholderNote}</p>
        </div>
      </div>
    </section>
  )
}
