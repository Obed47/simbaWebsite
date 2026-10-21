import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon, type IconName } from '@/components/ui/Icon'
import { delivery } from '@/content/fr'

export function DeliverySection() {
  return (
    <section id={delivery.id} aria-labelledby="delivery-heading" className="bg-navy-50 py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={delivery.eyebrow} heading={delivery.heading} lead={delivery.lead} />
            <div className="mt-5 flex items-center gap-2.5">
              <FeatureBadge feature={delivery.feature} />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{delivery.status}</p>
          </div>

          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {delivery.steps.map((step, index) => (
                <li key={step.title} className="relative rounded-panel border border-line bg-white p-5 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Icon name={step.icon as IconName} className="h-5 w-5" />
                  </span>
                  <p className="mt-3.5 text-xs font-semibold text-muted">Étape {index + 1}</p>
                  <p className="mt-1 text-sm leading-6 font-medium text-navy-900">{step.title}</p>
                  {index < delivery.steps.length - 1 ? (
                    <span
                      className="absolute top-1/2 -right-2.5 hidden h-px w-5 -translate-y-1/2 bg-line-strong sm:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
