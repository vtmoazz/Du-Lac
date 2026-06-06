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
      <h2 className="dulac-title font-serif text-3xl md:text-4xl text-dulac-amber leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="dulac-subtitle mt-3 font-serif text-dulac-red text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
