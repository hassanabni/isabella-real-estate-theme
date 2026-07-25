'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { useBooking } from '@/components/booking-modal'

export function Cta() {
  const { open } = useBooking()

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20">
            <Image
              src="/images/og-image.png"
              alt=""
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
            <div className="relative flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-20">
              <h2 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
                Let&apos;s find your next chapter, together.
              </h2>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Whether you&apos;re buying, selling, or simply exploring, a
                private consultation with Isabella is the perfect place to start.
              </p>
              <Button
                size="lg"
                onClick={open}
                className="group bg-gold font-medium text-gold-foreground hover:bg-gold/90"
              >
                Book a Consultation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
