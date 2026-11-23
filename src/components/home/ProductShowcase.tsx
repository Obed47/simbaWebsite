'use client'

import { useState, type ReactElement } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { ui, showcase } from '@/content/fr'

const products = [
  { name: 'Sac à dos en toile', price: '18 500 FCFA', badge: 'Bestseller' },
  { name: 'Chemise en coton naturel', price: '12 000 FCFA', badge: 'Nouveau' },
  { name: 'Sneakers urbaines', price: '25 000 FCFA', badge: 'Très apprécié' },
]

const orders = [
  { id: 'CMD-2031', customer: 'Awa N.', amount: '12 000 FCFA', status: 'Payée · séquestre', tone: 'sun' as const },
  { id: 'CMD-2030', customer: 'Junior T.', amount: '8 500 FCFA', status: 'Préparée', tone: 'navy' as const },
  { id: 'CMD-2029', customer: 'Marie K.', amount: '25 000 FCFA', status: 'Remise', tone: 'accent' as const },
]

const statusStyles = {
  sun: 'bg-sun-soft text-sun-ink',
  navy: 'bg-navy-100 text-navy-900',
  accent: 'bg-accent-soft text-accent-text',
}

function BoutiqueScreen() {
  return (
    <div className="space-y-2.5">
      {products.map((product) => (
        <div key={product.name} className="flex items-center gap-3 rounded-xl border border-line bg-white p-2.5 shadow-soft">
          <div className="h-12 w-12 flex-none rounded-lg bg-navy-50" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.72rem] font-semibold text-navy-900">{product.name}</p>
            <p className="text-[0.65rem] text-muted">{product.price}</p>
          </div>
          <span className="flex-none rounded-full bg-accent-soft px-2 py-0.5 text-[0.58rem] font-semibold text-accent-text">
            {product.badge}
          </span>
        </div>
      ))}
    </div>
  )
}

function CommandesScreen() {
  return (
    <div className="space-y-2.5">
      {orders.map((order) => (
        <div key={order.id} className="rounded-xl border border-line bg-white p-3 shadow-soft">
          <div className="flex items-center justify-between">
            <p className="text-[0.7rem] font-semibold text-navy-900">{order.customer}</p>
            <p className="text-[0.72rem] font-bold text-navy-900">{order.amount}</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[0.62rem] text-muted">{order.id}</p>
            <span className={`rounded-full px-2 py-0.5 text-[0.58rem] font-semibold ${statusStyles[order.tone]}`}>
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function PaiementScreen() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-line bg-white p-3.5 shadow-soft">
        <p className="text-[0.62rem] font-semibold text-muted uppercase">Téléphone</p>
        <p className="mt-1 text-[0.85rem] font-semibold text-navy-900">+237 6•• •• •• 12</p>
        <p className="mt-1.5 text-[0.62rem] leading-4 text-accent-text">
          Opérateur détecté : MTN MoMo. Confirmez la demande sur votre téléphone.
        </p>
      </div>
      <div className="rounded-xl border border-line bg-white p-3.5 shadow-soft">
        <div className="flex items-center justify-between text-[0.7rem]">
          <span className="text-muted">Chemise en coton naturel</span>
          <span className="font-semibold text-navy-900">12 000 FCFA</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 p-3 text-white">
        <span
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
          aria-hidden="true"
        />
        <span className="text-[0.7rem] font-semibold">En attente de confirmation…</span>
      </div>
    </div>
  )
}

const screens: Record<string, () => ReactElement> = {
  boutique: BoutiqueScreen,
  commandes: CommandesScreen,
  paiement: PaiementScreen,
}

export function ProductShowcase() {
  const [active, setActive] = useState(0)
  const activeTab = showcase.tabs[active]
  const ActiveScreen = screens[activeTab.key]

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
                  <button
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
                    </div>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <Reveal as="div" className="lg:col-span-7" delay={160}>
            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-[2.25rem] border-[6px] border-navy-950 bg-navy-950 p-2.5 shadow-lift">
                <div className="absolute top-3 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" />
                <div className="overflow-hidden rounded-4xl bg-ivory">
                  <div className="flex items-center justify-between px-4 pt-6 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-navy-900/70" />
                      <span className="text-[0.7rem] font-semibold text-navy-900">Boutique Aline</span>
                    </div>
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.6rem] font-semibold text-accent-text">
                      {activeTab.label}
                    </span>
                  </div>

                  {/* Keying by tab replays the entrance animation on every
                      switch, which is exactly the "tabs that change the
                      screenshot" interaction, without any extra JS. id/role
                      complete the tabs pattern each tab's aria-controls points to. */}
                  <div
                    key={activeTab.key}
                    id={`showcase-panel-${activeTab.key}`}
                    role="tabpanel"
                    aria-labelledby={`showcase-tab-${activeTab.key}`}
                    className="animate-rise px-4 pb-6"
                  >
                    {ActiveScreen ? <ActiveScreen /> : null}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-xs text-muted">{ui.illustrativeNote}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
