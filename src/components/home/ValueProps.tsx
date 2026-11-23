import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureBadge } from '@/components/ui/FeatureBadge'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { value } from '@/content/fr'

export function ValueProps() {
  const [featured, ...rest] = value.points

  return (
    <section id={value.id} aria-labelledby="value-heading" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={value.eyebrow} heading={value.heading} lead={value.lead} />
        </Reveal>

        {/* Asymmetric "bento" composition — one featured point in a larger,
            dark panel, the rest as compact rows — rather than four identical
            cards in a grid. */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal
            as="div"
            className="group relative overflow-hidden rounded-panel border border-navy-900/10 bg-navy-950 p-7 text-white shadow-lift transition-transform duration-500 hover:-translate-y-1 lg:col-span-5 lg:p-9"
          >
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl transition-transform duration-700 group-hover:scale-110"
              aria-hidden="true"
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
              <Icon name={featured.icon as IconName} className="h-6 w-6" />
            </span>
            <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-white">{featured.title}</h3>
            <p className="relative mt-3 max-w-sm text-sm leading-6 text-navy-100/85">{featured.text}</p>
            {featured.feature ? <FeatureBadge feature={featured.feature} className="relative mt-5" /> : null}
          </Reveal>

          <ul className="flex flex-col gap-4 lg:col-span-7">
            {rest.map((point, index) => (
              <Reveal
                key={point.title}
                as="li"
                delay={(index + 1) * 90}
                className="group flex items-start gap-4 rounded-panel border border-line bg-white p-5 shadow-soft transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-900 text-white transition-[background-color,transform] duration-300 group-hover:scale-110 group-hover:bg-accent">
                  <Icon name={point.icon as IconName} className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-navy-900">{point.title}</h3>
                    {point.feature ? <FeatureBadge feature={point.feature} /> : null}
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
