import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { vision } from '@/content/fr'

export function VisionSection() {
  return (
    <section id={vision.id} aria-labelledby="vision-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={vision.eyebrow} heading={vision.heading} lead={vision.lead} />
          </div>
          <div className="lg:col-span-6">
            <ul className="space-y-4">
              {vision.principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-soft text-accent-text">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-navy-900">{principle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
