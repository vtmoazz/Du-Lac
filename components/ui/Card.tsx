interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border-2',
        hover
          ? 'transition-all duration-200 hover:-translate-y-1 cursor-pointer'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        backgroundColor: '#ffffff',
        borderColor: 'rgba(92,51,23,0.35)',
        boxShadow: '0 2px 16px rgba(44,24,16,0.08)',
      }}
    >
      {children}
    </div>
  )
}
