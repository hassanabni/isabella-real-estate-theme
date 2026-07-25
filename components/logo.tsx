import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('group flex items-center gap-3', className)}
      aria-label="Isabella Reyes Realty home"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-surface font-serif text-sm font-semibold tracking-tight text-gold transition-colors group-hover:border-gold">
        IR
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-[0.2em] text-foreground">
          REYES
        </span>
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
          Realty
        </span>
      </span>
    </Link>
  )
}
