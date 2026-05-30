import { Layers, MapPin, Sparkles, Users, Zap } from 'lucide-react'

const BADGES = [
  { icon: <Layers size={14} />, label: 'Tập 01 · Tuổi Thơ' },
  { icon: <Users size={14} />, label: '6 Nhân vật' },
  { icon: <MapPin size={14} />, label: 'Làng cổ Bắc Bộ' },
  { icon: <Sparkles size={14} />, label: 'Vietnamese Folklore' },
  { icon: <Zap size={14} />, label: 'Đang phát triển' },
]

export default function GameInfoStrip() {
  return (
    <div className="relative border-y border-dulac-brown/12 bg-dulac-cream/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 md:gap-x-0 md:divide-x md:divide-dulac-brown/15">
          {BADGES.map((badge, i) => (
            <li
              key={i}
              className="flex items-center gap-1.5 px-4 py-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-dulac-brown/65"
            >
              <span className="text-dulac-amber">{badge.icon}</span>
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
