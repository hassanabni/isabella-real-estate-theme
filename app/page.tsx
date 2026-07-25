import { BookingProvider } from '@/components/booking-modal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Listings } from '@/components/sections/listings'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { Cta } from '@/components/sections/cta'

export default function Page() {
  return (
    <BookingProvider>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Listings />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </BookingProvider>
  )
}
