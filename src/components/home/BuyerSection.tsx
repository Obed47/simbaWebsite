'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon, type IconName } from '@/components/ui/Icon'
import { MobileMoneyLogos } from '@/components/ui/MobileMoneyLogos'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { buyers } from '@/content/fr'
import { appCtaHref } from '@/lib/links'

export function BuyerSection() {
  const timelineRef = useRef<HTMLOListElement>(null)
  // The spine fills as the timeline scrolls through the viewport — 0 when
  // its top reaches 80% down the screen, 1 once its bottom passes 35% down,
  // so the fill tracks reading progress rather than the whole page's scroll.
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 0.8', 'end 0.35'] })

  return (
    <section id={buyers.id} aria-labelledby="buyers-heading" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_12%_0%,theme(colors.navy.50)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      <Container>
        <Reveal>
          <SectionHeading eyebrow={buyers.eyebrow} heading={buyers.heading} lead={buyers.lead} align="center" />
        </Reveal>

        <ol ref={timelineRef} className="relative mx-auto mt-16 max-w-3xl sm:flex sm:flex-col">
          {/* Spine: a static track plus a fill that grows with scroll
              progress — a different kind of motion from the entrance
              reveals, tied to how far the visitor has actually read. */}
          <div
            className="absolute top-2 bottom-2 left-[15px] w-px bg-line sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              className="absolute inset-x-0 top-0 w-px origin-top bg-accent"
              style={{ height: '100%', scaleY: scrollYProgress }}
            />
          </div>

          {buyers.journey.map((step, index) => {
            const isRight = index % 2 === 1
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 90}
                // Each card is half the timeline minus 2rem, so the spine sits
                // exactly 2rem beyond its inner edge. From the second card on,
                // a negative top margin tucks it up alongside the previous one
                // (they're on opposite sides, so they interleave instead of
                // leaving a card-sized empty gap on each side of the zigzag).
                className={`relative mb-10 pl-12 last:mb-0 sm:mb-0 sm:w-[calc(50%-2rem)] sm:pl-0 ${
                  isRight ? 'sm:self-end' : 'sm:self-start'
                } ${index > 0 ? 'sm:-mt-20' : ''}`}
              >
                {/* Node on the spine. On mobile the spine is 15px in from the
                    left; on desktop it's 2rem past the card's inner edge —
                    right of a left-hand card, left of a right-hand one. */}
                <span
                  className={`absolute top-7 left-[15px] z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ivory bg-accent ${
                    isRight ? 'sm:-left-8' : 'sm:left-auto sm:-right-8 sm:translate-x-1/2'
                  }`}
                  aria-hidden="true"
                />

                <div className="group relative overflow-hidden rounded-panel border border-line bg-white p-5 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  {/* Large faded numeral — an editorial touch instead of a
                      plain numbered circle repeated five times. */}
                  <span
                    className="pointer-events-none absolute top-1 right-3 text-6xl font-black text-line/70 select-none"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>

                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent">
                    <Icon name={step.icon as IconName} className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-3.5 text-base font-semibold text-navy-900">{step.title}</h3>
                  <p className="relative mt-1.5 max-w-[85%] text-sm leading-6 text-muted">{step.text}</p>
                  {step.operators ? <MobileMoneyLogos className="relative mt-3" /> : null}
                  {step.feature ? <FeatureBadge feature={step.feature} className="relative mt-3" /> : null}
                </div>
              </Reveal>
            )
          })}
        </ol>

        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <Button href={appCtaHref} variant="secondary">
              {buyers.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
