import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { buyers } from '@/content/fr'
import { appCtaHref } from '@/lib/links'

export function BuyerSection() {
  return (
    <section id={buyers.id} aria-labelledby="buyers-heading" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={buyers.eyebrow} heading={buyers.heading} lead={buyers.lead} align="center" />
        </Reveal>

        <ol className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {buyers.journey.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 90}
              className="group relative rounded-panel border border-line bg-white p-5 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-accent">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
              {step.feature ? <FeatureBadge feature={step.feature} className="mt-3" /> : null}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Button href={appCtaHref} variant="secondary">
              {buyers.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
