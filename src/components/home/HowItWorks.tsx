import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Reveal } from '@/components/ui/Reveal'
import { StepConnector } from '@/components/home/StepConnector'
import { howItWorks } from '@/content/fr'
import type { FeatureKey } from '@/config/features'

function StepList({
  title,
  steps,
  panelDelay,
}: {
  title: string
  steps: { title: string; text: string; feature: FeatureKey | null }[]
  panelDelay: number
}) {
  return (
    <Reveal delay={panelDelay} className="rounded-panel border border-line bg-white p-6 shadow-soft sm:p-7">
      <h3 className="text-sm font-semibold tracking-wide text-accent-text uppercase">{title}</h3>
      <ol className="mt-5 space-y-0">
        {steps.map((step, index) => (
          <Reveal key={step.title} as="li" delay={panelDelay + index * 90} className="relative flex gap-4 pb-7 last:pb-0">
            {index < steps.length - 1 ? <StepConnector /> : null}
            <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white transition-colors duration-300 hover:bg-accent">
              {index + 1}
            </span>
            <div className="flex-1 pt-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-navy-900">{step.title}</p>
                {step.feature ? <FeatureBadge feature={step.feature} /> : null}
              </div>
              <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Reveal>
  )
}

export function HowItWorks() {
  return (
    <section id={howItWorks.id} aria-labelledby="how-it-works-heading" className="bg-navy-50 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            heading={howItWorks.heading}
            lead={howItWorks.lead}
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StepList title={howItWorks.seller.title} steps={[...howItWorks.seller.steps]} panelDelay={0} />
          <StepList title={howItWorks.buyer.title} steps={[...howItWorks.buyer.steps]} panelDelay={120} />
        </div>
      </Container>
    </section>
  )
}
