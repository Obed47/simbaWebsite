import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { sellers } from '@/content/fr'
import { appCtaHref } from '@/lib/links'

export function SellerSection() {
  return (
    <section id={sellers.id} aria-labelledby="sellers-heading" className="bg-navy-950 py-20 text-white sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={sellers.eyebrow} heading={sellers.heading} lead={sellers.lead} tone="on-dark" />
            <div className="mt-8">
              <Button href={appCtaHref} className="w-full justify-center sm:w-auto">
                {sellers.cta}
              </Button>
              <p className="mt-3 max-w-sm text-sm text-navy-100/75">{sellers.ctaNote}</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {sellers.benefits.map((benefit) => (
              <li key={benefit.title} className="rounded-panel border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <FeatureBadge feature={benefit.feature} />
                </div>
                <h3 className="mt-3.5 text-base font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-navy-100/80">{benefit.outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
