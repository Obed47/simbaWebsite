import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { value } from '@/content/fr'

export function ValueProps() {
  return (
    <section id={value.id} aria-labelledby="value-heading" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={value.eyebrow} heading={value.heading} lead={value.lead} />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {value.points.map((point, index) => (
            <Reveal
              key={point.title}
              as="li"
              delay={index * 90}
              className="group rounded-panel border border-line bg-white p-6 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-accent">
                  <Icon name={point.icon as IconName} className="h-5 w-5" />
                </span>
                {point.feature ? <FeatureBadge feature={point.feature} /> : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{point.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
