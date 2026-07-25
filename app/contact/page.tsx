import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Clock } from 'lucide-react'
import { BookingProvider } from '@/components/booking-modal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LeadForm } from '@/components/lead-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Isabella Reyes to schedule a private, no-pressure real estate consultation.',
}

const details = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@isabellareyesrealty.com',
    href: 'mailto:hello@isabellareyesrealty.com',
  },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat · 8am – 8pm' },
]

export default function ContactPage() {
  return (
    <BookingProvider>
      <SiteHeader />
      <main className="pt-16">
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
                Get in Touch
              </p>
              <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
                Let&apos;s start a conversation.
              </h1>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Share a few details and Isabella will personally reach out within
                one business day. No pressure — just thoughtful, expert guidance.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-surface text-gold">
                      <d.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-medium text-foreground transition-colors hover:text-gold"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </BookingProvider>
  )
}
