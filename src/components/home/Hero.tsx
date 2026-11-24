'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Starburst } from '@/components/ui/Starburst'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { MobileMoneyLogos } from '@/components/ui/MobileMoneyLogos'
import { hero } from '@/content/fr'
import { usePointerGlow } from '@/hooks/usePointerGlow'
import { useMagnetic } from '@/hooks/useMagnetic'

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const glowRef = usePointerGlow<HTMLElement>()
  const magneticRef = useMagnetic<HTMLDivElement>(0.2, 10)
  const prefersReducedMotion = useReducedMotion()

  // Both hooks just need a live reference to the same <section> node; merging
  // them into one callback ref avoids a second wrapping element.
  const setSectionRef = (node: HTMLElement | null) => {
    sectionRef.current = node
    glowRef.current = node
  }

  // Scroll-linked drift/fade as the hero scrolls out of view, 0 at the top of
  // the viewport to 1 once it's scrolled a full viewport height up. A spring
  // smooths the raw scroll progress so the motion lags and settles instead
  // of tracking the scrollbar frame-for-frame.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 })
  const contentOpacity = useTransform(progress, [0, 1], [1, 0.45])
  const contentY = useTransform(progress, [0, 1], [0, 14])
  const visualY = useTransform(progress, [0, 1], [0, -36])
  const visualOpacity = useTransform(progress, [0, 1], [1, 0.7])
  const panelScale = useTransform(progress, [0, 1], [1, 1.04])

  return (
    <section
      ref={setSectionRef}
      id="accueil"
      aria-label="Présentation de SIMBA"
      className="relative overflow-hidden"
    >
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
      {/* Sunburst ornaments — static texture, not motion. */}
      <Starburst className="pointer-events-none absolute -top-6 -left-10 -z-10 h-36 w-36 text-navy-900/8 sm:h-44 sm:w-44" />
      <Starburst className="pointer-events-none absolute right-[6%] bottom-6 -z-10 h-28 w-28 text-navy-900/10 sm:h-32 sm:w-32" />

      {/* The whole hero gently drifts up and fades as it scrolls past — a
          scroll-linked effect, not just an on-load one, smoothed through a
          spring rather than tracking the scrollbar 1:1. */}
      <motion.div
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-12 pb-10 sm:px-6 sm:pt-16 sm:gap-12 sm:pb-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-20"
        style={prefersReducedMotion ? undefined : { opacity: contentOpacity, y: contentY }}
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
            {/* The primary call to action is the store badges — a direct
                download prompt. Magnetic nudge reserved for this one pair,
                not every button, per the "restrained" guidance for this effect. */}
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

        <motion.div
          className="animate-rise mx-auto lg:mx-0 lg:justify-self-end"
          style={{
            animationDelay: '200ms',
            ...(prefersReducedMotion ? {} : { y: visualY, opacity: visualOpacity }),
          }}
        >
          {/* Hover tilt lives on its own element so it can keep using a plain
              CSS transform without fighting the scroll-linked transform on
              the wrapper above. The panel sizes itself from its own content
              (padding, not a guessed fixed height) so it can never collide
              with or clip what's inside it — the floating Mobile Money /
              Code de remise cards are still free to break past its edges,
              which is the intended layered look. */}
          <motion.div
            className="relative mx-auto w-[320px] transition-transform duration-500 ease-out hover:-translate-y-1 hover:-rotate-1 sm:w-[380px] lg:w-[440px]"
            style={prefersReducedMotion ? undefined : { scale: panelScale }}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-accent-text uppercase">
                Aperçu de l’app
              </span>
              <span className="flex items-center gap-1.5 text-[0.65rem] font-medium text-muted">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                En ligne
              </span>
            </div>

            {/* The real SIMBA app homepage, not an illustration. The source
                photo isn't transparent (a JPEG), so it sits on its own white
                card rather than showing a hard rectangular edge against the
                green panel. */}
            <div className="mt-4 overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-lift">
              <Image
                src="/phone-mockups/homepage.jpeg"
                alt="Page d’accueil de l’application SIMBA : catalogue de produits avec catégories et favoris"
                width={704}
                height={1471}
                className="h-auto w-full rounded-2xl"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 280px"
                priority
              />
            </div>

            {/* Floating card: payment confirmation. Anchored above the panel
                so it never covers the screenshot. */}
            <div className="animate-float absolute top-20 -right-8 hidden w-40 lg:-right-12 rounded-xl border border-white/60 bg-white/75 p-3 shadow-lift backdrop-blur-md sm:block">
              <div className="flex items-center gap-2">
                <MobileMoneyLogos size="sm" stacked />
                <p className="text-[0.68rem] font-semibold text-navy-900">Mobile Money</p>
              </div>
              <p className="mt-1.5 text-[0.62rem] leading-4 text-muted">Confirmez le paiement sur votre téléphone</p>
            </div>

            {/* Floating card: handover code. Anchored below the panel for the same reason. */}
            <div className="animate-float absolute -bottom-7 -left-5 hidden w-36 rounded-xl border border-white/60 bg-white/75 p-3 shadow-lift backdrop-blur-md [animation-delay:1.4s] sm:block">
              <p className="text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Code de remise</p>
              <p className="mt-1 text-lg font-bold tracking-[0.2em] text-navy-900">48 21 06</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
