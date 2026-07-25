import Image from 'next/image'
import { Bed, Bath, Maximize } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const listings = [
  {
    image: '/images/property-1.png',
    price: '$3,450,000',
    name: 'The Hillcrest Residence',
    location: 'Bel Air, CA',
    beds: 5,
    baths: 6,
    sqft: '6,200',
    status: 'For Sale',
  },
  {
    image: '/images/property-2.png',
    price: '$2,180,000',
    name: 'Skyline Penthouse 42',
    location: 'Downtown, CA',
    beds: 3,
    baths: 3,
    sqft: '3,100',
    status: 'New Listing',
  },
  {
    image: '/images/property-3.png',
    price: '$1,895,000',
    name: 'Willowbrook Estate',
    location: 'Pacific Heights, CA',
    beds: 4,
    baths: 4,
    sqft: '4,050',
    status: 'For Sale',
  },
]

export function Listings() {
  return (
    <section id="listings" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Featured Portfolio
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              A curated collection of exceptional homes.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, i) => (
            <Reveal key={listing.name} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={listing.image || '/placeholder.svg'}
                    alt={listing.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium text-gold-foreground">
                    {listing.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-serif text-2xl font-semibold text-gold">
                    {listing.price}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-foreground">
                    {listing.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {listing.location}
                  </p>
                  <div className="mt-5 flex items-center gap-5 border-t border-border pt-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Bed className="h-4 w-4 text-gold" aria-hidden="true" />
                      {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-gold" aria-hidden="true" />
                      {listing.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="h-4 w-4 text-gold" aria-hidden="true" />
                      {listing.sqft} sqft
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
