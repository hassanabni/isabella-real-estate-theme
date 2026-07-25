import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/isabella-headshot.png"
              alt="Portrait of Isabella Reyes"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-gold/30 bg-card p-5 shadow-xl sm:block">
            <p className="font-serif text-2xl font-semibold text-gold">Top 1%</p>
            <p className="text-xs text-muted-foreground">of agents nationwide</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Meet Isabella
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            A trusted advisor for life&apos;s biggest moves.
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              For over fifteen years, Isabella Reyes has represented some of the
              most distinctive homes on the market — but her reputation was built
              on something less tangible: trust. She listens first, advises
              honestly, and treats every client as if they were her only one.
            </p>
            <p>
              From first-time buyers to seasoned investors, Isabella brings the
              same disciplined strategy, sharp negotiation, and quiet confidence
              to every transaction. The result is a experience that feels less
              like a sale and more like a partnership.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              { title: 'Certified Luxury Specialist', sub: 'CLHMS designation' },
              { title: 'Bilingual Representation', sub: 'English & Spanish' },
              { title: 'Data-Driven Pricing', sub: 'Precise market analysis' },
              { title: 'Concierge Network', sub: 'Vetted trusted partners' },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-gold/40 pl-4">
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
