import { BookOpen, Leaf, Map, Play, TreePine, Volume2 } from 'lucide-react'

interface MediaCardProps {
  title: string
  index: number
}

// Per-slot icon and gradient hint
const SLOT_THEMES: Record<string, { icon: typeof Play; gradient: string; label: string }> = {
  'Cổng làng sáng sớm': {
    icon: Leaf,
    gradient: 'linear-gradient(140deg,rgba(46,125,50,0.22),rgba(217,164,65,0.14)),linear-gradient(160deg,#0A1A0E,#1E2A14)',
    label: 'Concept Art',
  },
  'Chiếc vòng rơm': {
    icon: Leaf,
    gradient: 'linear-gradient(140deg,rgba(217,164,65,0.22),rgba(183,28,28,0.12)),linear-gradient(160deg,#1E1408,#2A1C10)',
    label: 'Key Item',
  },
  'Bản đồ bốn điểm ký ức': {
    icon: Map,
    gradient: 'linear-gradient(140deg,rgba(183,28,28,0.18),rgba(127,231,196,0.12)),linear-gradient(160deg,#100A06,#1A1410)',
    label: 'Map',
  },
  'Gốc đa đom đóm': {
    icon: TreePine,
    gradient: 'linear-gradient(140deg,rgba(127,231,196,0.22),rgba(46,125,50,0.18)),linear-gradient(160deg,#020A06,#06140D)',
    label: 'Scene',
  },
  'Nhật Ký Du Lạc': {
    icon: BookOpen,
    gradient: 'linear-gradient(140deg,rgba(217,164,65,0.2),rgba(93,64,55,0.18)),linear-gradient(160deg,#160E06,#201610)',
    label: 'UI',
  },
}

export default function MediaCard({ title, index }: MediaCardProps) {
  const isAudio = title.includes('Nhật Ký')
  const slot = SLOT_THEMES[title]
  const SlotIcon = slot?.icon ?? Play

  return (
    <article className="group overflow-hidden rounded-xl border border-dulac-amber/22 bg-dulac-cream/6 transition duration-200 hover:border-dulac-amber/45 hover:-translate-y-0.5">
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/10', background: slot?.gradient ?? 'linear-gradient(160deg,#172B20,#2E1C18)' }}
      >
        {/* Subtle folklore pattern overlay */}
        <div className="folklore-pattern absolute inset-0 opacity-[0.12]" />

        {/* Index badge */}
        <div className="absolute left-3 top-3 rounded-md border border-dulac-amber/30 bg-dulac-deep/55 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-dulac-cream/65">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Type label */}
        {slot?.label && (
          <div className="absolute right-3 top-3 rounded-md border border-dulac-amber/25 bg-dulac-deep/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-dulac-amber/70">
            {slot.label}
          </div>
        )}

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dulac-cream/10 text-dulac-cyan ring-1 ring-dulac-cyan/30 transition duration-200 group-hover:scale-110 group-hover:bg-dulac-cyan/18">
            {isAudio ? <Volume2 size={20} /> : <SlotIcon size={20} />}
          </span>
        </div>

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="px-4 py-3">
        <h3 className="font-serif text-base font-bold text-dulac-cream">{title}</h3>
        <p className="mt-1 text-[11px] leading-5 text-dulac-cream/45">Concept · MVP placeholder</p>
      </div>
    </article>
  )
}
