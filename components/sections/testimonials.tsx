import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Isabella made selling our family home feel effortless. She anticipated every question and negotiated a price we never thought possible.',
    name: 'Marcus & Elena Whitfield',
    role: 'Sold in Bel Air',
  },
  {
    quote:
      'As first-time buyers we were nervous, but Isabella was patient, honest, and never pushy. We found the perfect home in six weeks.',
    name: 'Priya Nair',
    role: 'Purchased in Pacific Heights',
  },
  {
    quote:
      'Her concierge network is unmatched. From inspection to closing, everything was handled with total professionalism.',
    name: 'David Chen',
    role: 'Investment client',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Client Stories
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Trusted by families and investors alike.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-gold/60" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                  {`"${t.quote}"`}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
