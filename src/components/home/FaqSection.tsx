'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { faq } from '@/content/fr'

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="group border-b border-line last:border-b-0">
      <h3>
        <motion.button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          whileTap={{ scale: 0.99 }}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-medium text-navy-900 transition-colors duration-200 group-hover:text-accent-text">
            {question}
          </span>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
            <Icon name="chevron-down" className={`h-5 w-5 flex-none ${isOpen ? 'text-accent-text' : 'text-muted'}`} />
          </motion.span>
        </motion.button>
      </h3>
      {/* Real height/opacity animation via AnimatePresence, rather than the
          CSS grid-template-rows trick — smoother, and the exit state means
          the panel collapses with the same motion it opened with. */}
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-6 text-muted">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id={faq.id} aria-labelledby="faq-heading" className="bg-navy-50 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} lead={faq.lead} align="center" />
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl rounded-panel border border-line bg-white px-6 shadow-soft sm:px-8">
          {faq.items.map((item, index) => (
            <Reveal key={item.question} as="div" variant="fade" delay={index * 45}>
              <FaqItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
