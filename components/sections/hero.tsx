'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-modal'

export function Hero() {
  const { open } = useBooking()

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero-estate.png"
        alt="Luxury modern estate at dusk"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 pt-24 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-gold"
        >
          Luxury Real Estate · Concierge Service
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-balance font-serif text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
        >
          Finding your next home, with intention and grace.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Isabella Reyes delivers white-glove guidance for discerning buyers and
          sellers — pairing market mastery with a genuinely personal touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button
            size="lg"
            onClick={open}
            className="group bg-gold font-medium text-gold-foreground hover:bg-gold/90"
          >
            Book a Consultation
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="#listings" />}
            className="border-border bg-transparent text-foreground hover:bg-secondary"
          >
            View Featured Listings
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8"
        >
          {[
            { value: '$1.2B+', label: 'In career sales' },
            { value: '15+', label: 'Years of experience' },
            { value: '400+', label: 'Families served' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-foreground">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
