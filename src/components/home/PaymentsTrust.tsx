import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon } from '@/components/ui/Icon'
import { MobileMoneyLogos } from '@/components/ui/MobileMoneyLogos'
import { Reveal } from '@/components/ui/Reveal'
import { HorizontalConnector } from '@/components/home/HorizontalConnector'
import { payments, ui } from '@/content/fr'

export function PaymentsTrust() {
  return (
    <section id={payments.id} aria-labelledby="payments-heading" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={payments.eyebrow} heading={payments.heading} lead={payments.lead} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wide text-accent-text uppercase">{payments.flowTitle}</h3>
            <ol className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {payments.flow.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 90}
                  className="group relative rounded-panel border border-line bg-white p-5 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  {/* Connects each step to the next one in its row (0→1,
                      2→3) — not 1→2, which wraps to a new row and has no
                      sensible horizontal line to draw. */}
                  {index % 2 === 0 ? <HorizontalConnector visibleFrom="sm" /> : null}
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-accent">
                      {index + 1}
                    </span>
                    <FeatureBadge feature={step.feature} />
                  </div>
                  <p className="mt-3.5 font-semibold text-navy-900">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
                  {step.operators ? <MobileMoneyLogos className="mt-3.5" /> : null}
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            {/* The real payment step from the app — alpha-transparent
                source, floating directly on the page with no card. */}
            <Reveal delay={120} className="relative mx-auto hidden w-44 sm:block lg:mx-0">
              <div
                className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-sun/20 blur-2xl"
                aria-hidden="true"
              />
              <Image
                src="/phone-mockups/checkout.webp"
                alt="Écran de paiement de l’application SIMBA avec détection de l’opérateur Mobile Money"
                width={775}
                height={1600}
                className="h-auto w-full drop-shadow-2xl"
                sizes="176px"
              />
              <p className="mt-3 text-center text-xs text-muted">{ui.realScreenshotNote}</p>
            </Reveal>

            <Reveal delay={200} className="mt-6 h-fit">
              <div className="rounded-panel border border-sun/30 bg-sun-soft p-6 transition-shadow duration-300 hover:shadow-soft">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sun-ink">
                    <Icon name="lock" className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-semibold text-sun-ink">{payments.notice.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-sun-ink/90">{payments.notice.text}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
