import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon } from '@/components/ui/Icon'
import { payments } from '@/content/fr'

export function PaymentsTrust() {
  return (
    <section id={payments.id} aria-labelledby="payments-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={payments.eyebrow} heading={payments.heading} lead={payments.lead} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wide text-accent-text uppercase">{payments.flowTitle}</h3>
            <ol className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {payments.flow.map((step, index) => (
                <li key={step.title} className="rounded-panel border border-line bg-white p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <FeatureBadge feature={step.feature} />
                  </div>
                  <p className="mt-3.5 font-semibold text-navy-900">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full rounded-panel border border-sun/30 bg-sun-soft p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sun-ink">
                  <Icon name="lock" className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-semibold text-sun-ink">{payments.notice.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-sun-ink/90">{payments.notice.text}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
