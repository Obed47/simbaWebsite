'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon, type IconName } from '@/components/ui/Icon'
import { MobileMoneyLogos } from '@/components/ui/MobileMoneyLogos'
import { Reveal } from '@/components/ui/Reveal'
import { ui, showcase } from '@/content/fr'

export function ProductShowcase() {
  const [active, setActive] = useState(0)
  const activeTab = showcase.tabs[active]

  const moveTab = (direction: 1 | -1) => {
    setActive((current) => (current + direction + showcase.tabs.length) % showcase.tabs.length)
  }

  return (
    <section id={showcase.id} aria-labelledby="showcase-heading" className="bg-navy-50 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={showcase.eyebrow} heading={showcase.heading} lead={showcase.lead} align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal as="div" className="lg:col-span-5" delay={80}>
            <div role="tablist" aria-label={showcase.heading} className="flex flex-col gap-3">
              {showcase.tabs.map((tab, index) => {
                const isActive = index === active
                return (
                  <motion.button
                    key={tab.key}
                    role="tab"
                    id={`showcase-tab-${tab.key}`}
                    aria-selected={isActive}
                    aria-controls={`showcase-panel-${tab.key}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                        event.preventDefault()
                        moveTab(1)
                      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                        event.preventDefault()
                        moveTab(-1)
                      }
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className={`group flex items-start gap-3.5 rounded-panel border p-4 text-left transition-[border-color,background-color,box-shadow] duration-300 sm:p-5 ${
                      isActive
                        ? 'border-accent bg-white shadow-lift'
                        : 'border-line bg-white/60 hover:border-line-strong hover:bg-white'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive ? 'bg-accent text-white' : 'bg-navy-900 text-white group-hover:bg-accent'
                      }`}
                    >
                      <Icon name={tab.icon as IconName} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-navy-900">{tab.title}</p>
                        <FeatureBadge feature={tab.feature} />
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted">{tab.text}</p>
                      {tab.operators ? <MobileMoneyLogos size="sm" stacked decorative className="mt-2" /> : null}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </Reveal>

          <Reveal as="div" className="lg:col-span-7" delay={160}>
            <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              {/* Real screenshots, not a hand-built phone frame — each source
                  file already includes its own device bezel. A fixed
                  aspect-ratio box (all five share almost the same ratio)
                  keeps the panel from jumping size when the tab switches,
                  since `fill` + `object-contain` scales each image to fit it
                  regardless of its exact native pixels. AnimatePresence
                  cross-fades/slides between screenshots instead of an
                  abrupt swap. */}
              <div className="relative aspect-[483/1000] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.key}
                    id={`showcase-panel-${activeTab.key}`}
                    role="tabpanel"
                    aria-labelledby={`showcase-tab-${activeTab.key}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeTab.image}
                      alt={activeTab.imageAlt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 360px, 320px"
                      priority={active === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-5 text-center text-xs text-muted">{ui.realScreenshotNote}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
