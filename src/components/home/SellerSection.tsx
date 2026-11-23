import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { sellers } from '@/content/fr'
import { appCtaHref } from '@/lib/links'
import { features, type FeatureStatus } from '@/config/features'
import { cn } from '@/lib/cn'

// Icon chip colour echoes the same status the badge already states, so the
// grid reads at a glance instead of every chip being identically navy.
const iconToneByStatus: Record<FeatureStatus, string> = {
  live: 'bg-accent/25 text-accent',
  'in-development': 'bg-sun/25 text-sun',
  planned: 'bg-white/15 text-navy-100',
  unknown: 'bg-white/10 text-navy-100',
}

export function SellerSection() {
  return (
    <section id={sellers.id} aria-labelledby="sellers-heading" className="bg-navy-950 py-20 text-white sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow={sellers.eyebrow} heading={sellers.heading} lead={sellers.lead} tone="on-dark" />
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8">
                <Button href={appCtaHref} className="w-full justify-center sm:w-auto">
                  {sellers.cta}
                </Button>
                <p className="mt-3 max-w-sm text-sm text-navy-100/75">{sellers.ctaNote}</p>
              </div>
            </Reveal>
          </div>

          {/* Alternate columns sit slightly lower on larger screens — a light
              masonry rhythm instead of a perfectly even grid. */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {sellers.benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                as="li"
                delay={index * 80}
                className={cn(
                  'group rounded-panel border border-white/10 bg-white/[0.04] p-5 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-white/[0.07]',
                  index % 2 === 1 && 'sm:translate-y-6',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110',
                      iconToneByStatus[features[benefit.feature].status],
                    )}
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <FeatureBadge feature={benefit.feature} />
                </div>
                <h3 className="mt-3.5 text-base font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-navy-100/80">{benefit.outcome}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
