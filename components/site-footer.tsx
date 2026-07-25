import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Concierge-level luxury real estate. Guiding discerning buyers and
              sellers with discretion, strategy, and care.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Explore
            </h4>
            <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About Isabella
            </Link>
            <Link href="/#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/#listings" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Featured Listings
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Get in touch
            </h4>
            <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              (555) 123-4567
            </a>
            <a href="mailto:hello@isabellareyesrealty.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              hello@isabellareyesrealty.com
            </a>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              1200 Coastline Ave, Suite 400
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} Isabella Reyes Realty. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            Equal Housing Opportunity · Licensed Real Estate Advisor
          </p>
        </div>
      </div>
    </footer>
  )
}
