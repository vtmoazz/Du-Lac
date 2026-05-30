import type { ReactNode } from 'react'

interface FolkloreCardProps {
  title: string
  description: string
  icon: ReactNode
  tag?: string
}

export default function FolkloreCard({ title, description, icon, tag }: FolkloreCardProps) {
  return (
    <article className="group relative min-h-52 overflow-hidden rounded-xl border border-dulac-brown/18 bg-[#FFFDF4]/90 p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-dulac-amber/50 hover:shadow-card-hover">
      {/* Top accent bar — tri-color */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-dulac-red via-dulac-amber to-dulac-jade opacity-70 transition duration-300 group-hover:opacity-100" />

      {/* Corner dot motif */}
      <div className="absolute right-4 top-5 h-2 w-2 rounded-full bg-dulac-amber/40 shadow-[0_0_8px_rgba(217,164,65,0.4)]" />

      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-dulac-jade/25 bg-dulac-jade/8 text-dulac-jade transition duration-200 group-hover:border-dulac-jade/50 group-hover:bg-dulac-jade/14">
        {icon}
      </div>

      <h3 className="font-serif text-xl font-bold text-dulac-brown">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-dulac-ink/68">{description}</p>

      {tag && (
        <span className="mt-3 inline-block rounded-full border border-dulac-amber/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-dulac-amber/80">
          {tag}
        </span>
      )}

      <p className="absolute bottom-4 left-0 right-0 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-dulac-red/0 transition duration-200 group-hover:text-dulac-red/80">
        Xem trong Sổ Tay Du Lạc →
      </p>
    </article>
  )
}
