import type { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="group rounded-lg border border-dulac-brown/20 bg-dulac-cream/82 p-5 shadow-card backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-dulac-red/45 hover:shadow-card-hover">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-dulac-red/20 bg-dulac-red/10 text-dulac-red">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-dulac-brown">{title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-7 text-dulac-ink/70">{description}</p>
    </article>
  )
}
