import { Home, KeyRound, TrendingUp, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: KeyRound,
    title: 'Buyer Representation',
    description:
      'From private showings to winning offers, Isabella guides you to the right home with clarity and zero pressure.',
  },
  {
    icon: Home,
    title: 'Seller Representation',
    description:
      'Strategic pricing, elevated staging, and cinematic marketing that positions your property to command its full value.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description:
      'Identify high-potential properties and build a portfolio backed by rigorous market data and long-term strategy.',
  },
  {
    icon: Sparkles,
    title: 'Concierge Services',
    description:
      'A vetted network of designers, inspectors, and lenders — coordinated seamlessly so every detail is handled.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            What Isabella Offers
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Full-service guidance, tailored to you.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-gold/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-surface text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
