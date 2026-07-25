'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle2 } from 'lucide-react'

type FormState = {
  name: string
  email: string
  phone: string
  time: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  time: '',
  message: '',
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulated submission for prototype.
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-gold/30 bg-surface p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold" aria-hidden="true" />
        <h3 className="font-serif text-2xl text-foreground">Thank you</h3>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Your request has been received. Isabella will personally reach out
          within one business day to arrange your private consultation.
        </p>
        <Button
          variant="outline"
          className="mt-2 border-gold/40 text-foreground hover:bg-gold hover:text-gold-foreground"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
        >
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className={compact ? 'flex flex-col gap-5' : 'grid gap-5 sm:grid-cols-2'}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="time">Preferred contact time</Label>
          <Select value={form.time} onValueChange={(v) => update('time', v)}>
            <SelectTrigger id="time" className="w-full">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
              <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
              <SelectItem value="anytime">Anytime</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">How can Isabella help?</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us a little about your goals — buying, selling, or exploring the market."
          rows={4}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-1 bg-gold font-medium text-gold-foreground hover:bg-gold/90"
      >
        {loading ? 'Sending…' : 'Book your consultation'}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        By submitting, you agree to be contacted about your inquiry. Your
        information is never shared.
      </p>
    </form>
  )
}
