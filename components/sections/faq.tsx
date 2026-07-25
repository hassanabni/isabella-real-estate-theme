import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'What areas does Isabella serve?',
    a: 'Isabella specializes in luxury and premium residential properties across the greater metropolitan region, with deep expertise in its most sought-after neighborhoods. If you are unsure whether your area is covered, simply reach out.',
  },
  {
    q: 'How much does it cost to work with Isabella as a buyer?',
    a: 'In most transactions, buyer representation is provided at no direct cost to you, as the commission is typically paid by the seller. Isabella will always be transparent about any fees before you commit to anything.',
  },
  {
    q: 'What is the first step to selling my home?',
    a: 'It starts with a private consultation and a comprehensive market analysis of your property. Isabella will walk you through a tailored pricing and marketing strategy so you feel confident every step of the way.',
  },
  {
    q: 'How quickly can I expect a response?',
    a: 'Isabella personally responds to every inquiry within one business day — often much sooner. Responsiveness is a cornerstone of her concierge approach.',
  },
  {
    q: 'Do you work with first-time buyers?',
    a: 'Absolutely. Isabella takes special care with first-time buyers, guiding you through financing, inspections, and negotiations with patience and clarity so there are no surprises.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Questions
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Everything you need to know.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Still have a question? Reach out anytime — Isabella is happy to help
            you understand the process before you commit to anything.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={i} className="border-border">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-pretty leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
