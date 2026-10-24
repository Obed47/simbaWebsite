import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { vision } from '@/content/fr'

export function VisionSection() {
  return (
    <section id={vision.id} aria-labelledby="vision-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading eyebrow={vision.eyebrow} heading={vision.heading} lead={vision.lead} />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <ul className="space-y-4">
              {vision.principles.map((principle, index) => (
                <Reveal
                  key={principle}
                  as="li"
                  delay={index * 90}
                  className="group flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-x-1 hover:shadow-lift"
                >
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-soft text-accent-text transition-transform duration-300 group-hover:scale-110">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-navy-900">{principle}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
