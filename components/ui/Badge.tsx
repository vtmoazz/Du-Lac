interface BadgeProps {
  label: string
  variant?: 'jade' | 'red' | 'amber'
  className?: string
}

const variants = {
  jade:  'bg-dulac-jade/15 text-dulac-jade border border-dulac-jade/30',
  red:   'bg-dulac-red/10 text-dulac-red border border-dulac-red/20',
  amber: 'bg-dulac-amber/15 text-dulac-brown border border-dulac-amber/30',
}

export default function Badge({ label, variant = 'jade', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full',
        variants[variant],
        className,
      ].join(' ')}
    >
      {label}
    </span>
  )
}
