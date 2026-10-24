import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { payments } from '@/content/fr'

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
            <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {payments.flow.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 90}
                  className="group rounded-panel border border-line bg-white p-5 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-accent">
                      {index + 1}
                    </span>
                    <FeatureBadge feature={step.feature} />
                  </div>
                  <p className="mt-3.5 font-semibold text-navy-900">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="h-full">
              <div className="h-full rounded-panel border border-sun/30 bg-sun-soft p-6 transition-shadow duration-300 hover:shadow-soft">
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
