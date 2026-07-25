'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { LeadForm } from '@/components/lead-form'

type BookingContextValue = {
  open: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto border-border bg-card sm:max-w-lg">
          <DialogHeader className="text-left">
            <DialogTitle className="font-serif text-2xl font-medium text-foreground">
              Request a private consultation
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Share a few details and Isabella will reach out personally to
              tailor a strategy around your goals.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <LeadForm compact />
          </div>
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  )
}
