interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  return (
    <div className={['mb-10', align === 'center' ? 'text-center' : 'text-left', className].join(' ')}>
      {/* Decorative lotus divider above */}
      {align === 'center' && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-dulac-amber/50" />
          <span className="text-dulac-amber text-lg">✿</span>
          <div className="h-px w-12 bg-dulac-amber/50" />
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-dulac-brown leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-dulac-ink/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
