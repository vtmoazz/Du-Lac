import { Layers, MapPin, Sparkles, Users, Zap } from 'lucide-react'

const BADGES = [
  { icon: <Layers size={13} />, label: 'Tập 01 · Tuổi Thơ' },
  { icon: <Users size={13} />, label: '6 Nhân vật' },
  { icon: <MapPin size={13} />, label: 'Làng cổ Bắc Bộ' },
  { icon: <Sparkles size={13} />, label: 'Vietnamese Folklore' },
  { icon: <Zap size={13} />, label: 'Đang phát triển' },
]

/** Một badge item — dùng cho cả bản gốc lẫn bản duplicate */
function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li
      className="flex shrink-0 items-center gap-2 border-r border-dulac-brown/14 px-5 py-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-dulac-brown/60"
      aria-hidden="true"
    >
      <span className="text-dulac-amber shrink-0">{icon}</span>
      {label}
    </li>
  )
}

export default function GameInfoStrip() {
  return (
    <div
      className="relative overflow-hidden border-y border-dulac-brown/12 bg-dulac-cream/90 py-3 backdrop-blur-sm"
      role="marquee"
      aria-label="Thông tin game Du Lạc"
    >
      {/* Fade mask trái */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
        style={{
          background: 'linear-gradient(to right, #FFF8E1 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Fade mask phải */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
        style={{
          background: 'linear-gradient(to left, #FFF8E1 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Track chạy — duplicate list để loop liền mạch */}
      <ul className="marquee-track" aria-label="Thông tin Du Lạc">
        {/* Bản gốc */}
        {BADGES.map((b, i) => (
          <Badge key={`a-${i}`} icon={b.icon} label={b.label} />
        ))}
        {/* Bản duplicate — giúp marquee không bị nhảy */}
        {BADGES.map((b, i) => (
          <Badge key={`b-${i}`} icon={b.icon} label={b.label} />
        ))}
      </ul>

      {/* Screen-reader fallback — nội dung thật, visually hidden */}
      <ul className="sr-only">
        {BADGES.map((b, i) => (
          <li key={i}>{b.label}</li>
        ))}
      </ul>
    </div>
  )
}
