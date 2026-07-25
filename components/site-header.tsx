'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/logo'
import { useBooking } from '@/components/booking-modal'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Listings', href: '/#listings' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { open: openBooking } = useBooking()

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={openBooking}
            className="bg-gold font-medium text-gold-foreground hover:bg-gold/90"
          >
            Book a Consultation
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="border-border bg-card">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="mt-4 px-4">
              <Logo onClick={() => setOpen(false)} />
            </div>
            <nav
              className="mt-8 flex flex-col gap-1 px-2"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-6 px-4">
              <Button
                onClick={() => {
                  setOpen(false)
                  openBooking()
                }}
                className="w-full bg-gold font-medium text-gold-foreground hover:bg-gold/90"
              >
                Book a Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
