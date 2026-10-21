import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Button } from '@/components/ui/Button'
import { buyers } from '@/content/fr'
import { appCtaHref } from '@/lib/links'

export function BuyerSection() {
  return (
    <section id={buyers.id} aria-labelledby="buyers-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={buyers.eyebrow} heading={buyers.heading} lead={buyers.lead} align="center" />

        <ol className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {buyers.journey.map((step, index) => (
            <li key={step.title} className="relative rounded-panel border border-line bg-white p-5 shadow-soft">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
              {step.feature ? <FeatureBadge feature={step.feature} className="mt-3" /> : null}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Button href={appCtaHref} variant="secondary">
            {buyers.cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}
