import Image from 'next/image'
import { BookOpenText, Gamepad2, MessageCircle, Puzzle, Sparkles } from 'lucide-react'
import FeatureCard from '@/components/ui/FeatureCard'
import Section from '@/components/ui/Section'
import { gameplayPillars } from '@/content/gameplay'

const icons = {
  memory:      <Sparkles size={24} />,
  diary:       <BookOpenText size={24} />,
  puzzle:      <Puzzle size={24} />,
  'folk-game': <Gamepad2 size={24} />,
}

const MEMORY_POINTS = [
  { label: 'Gốc Sung', x: '14%', y: '38%', active: true },
  { label: 'Giếng Làng', x: '38%', y: '22%', active: true },
  { label: 'Bờ Ao', x: '62%', y: '54%', active: false },
  { label: 'Gốc Đa', x: '82%', y: '34%', active: false },
]

// Connections between adjacent points [from, to]
const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [0, 2],
]

export default function GameplaySection() {
  return (
    <Section id="gameplay" variant="memoryMap">
      <div className="grid gap-12 lg:grid-cols-[1fr_minmax(360px,0.72fr)] lg:items-start">

        {/* Left: heading + cards */}
        <div>
          <p className="section-divider text-sm font-bold uppercase tracking-[0.22em] text-dulac-red">Gameplay Pillars</p>
          <h2 className="dulac-title reveal mt-4 font-serif text-4xl text-dulac-amber md:text-5xl">
            Khám phá bằng bước chân. Ghi nhớ bằng trái tim.
          </h2>
          <p className="dulac-paragraph reveal mt-5 text-dulac-ink/70" data-delay="1">
            Trong Du Lạc, mỗi phong tục, trò chơi và địa điểm đều có thể trở thành một mảnh khóa ký ức.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {gameplayPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="reveal"
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                <FeatureCard
                  title={pillar.title}
                  description={pillar.description}
                  icon={icons[pillar.icon as keyof typeof icons]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Memory map panel */}
        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-2xl border border-dulac-brown/20 bg-dulac-cream/72 shadow-card backdrop-blur-sm">
            {/* Map header */}
            <div className="border-b border-dulac-brown/12 bg-dulac-cream/60 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-dulac-brown/60">Nhật Ký Du Lạc — Bản đồ ký ức</p>
            </div>

            {/* Memory map — real image + SVG dot overlay */}
            <div className="relative h-52 w-full overflow-hidden bg-[#F5EDD8]">
              <Image
                src="/images/backgrounds/memory-map.png"
                alt="Bản đồ ký ức làng cổ"
                fill
                sizes="400px"
                className="object-cover object-center opacity-55"
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-dulac-cream/40" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 208" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                {/* Grid lines */}
                {[0,1,2,3].map(i => (
                  <line key={`h${i}`} x1="0" y1={52 * i} x2="400" y2={52 * i} stroke="#5D4037" strokeWidth="0.5" opacity="0.1"/>
                ))}
                {[0,1,2,3,4,5,6].map(i => (
                  <line key={`v${i}`} x1={66 * i} y1="0" x2={66 * i} y2="208" stroke="#5D4037" strokeWidth="0.5" opacity="0.1"/>
                ))}
                {/* Path connections */}
                {CONNECTIONS.map(([a, b], i) => {
                  const pa = MEMORY_POINTS[a]
                  const pb = MEMORY_POINTS[b]
                  const x1 = parseFloat(pa.x) / 100 * 400
                  const y1 = parseFloat(pa.y) / 100 * 208
                  const x2 = parseFloat(pb.x) / 100 * 400
                  const y2 = parseFloat(pb.y) / 100 * 208
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="#B71C1C" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.35"/>
                  )
                })}
                {/* Memory point dots */}
                {MEMORY_POINTS.map((pt, i) => {
                  const cx = parseFloat(pt.x) / 100 * 400
                  const cy = parseFloat(pt.y) / 100 * 208
                  return (
                    <g key={pt.label}>
                      {/* Outer ring — pulse on active */}
                      <circle
                        cx={cx} cy={cy} r="13"
                        fill={pt.active ? 'rgba(127,231,196,0.15)' : 'rgba(93,64,55,0.08)'}
                        className={pt.active ? 'memory-dot-svg' : ''}
                      />
                      {/* Inner dot */}
                      <circle cx={cx} cy={cy} r="5.5"
                        fill={pt.active ? '#7FE7C4' : '#D9A441'}
                        opacity={pt.active ? 1 : 0.55}
                      />
                      {/* Glow for active */}
                      {pt.active && (
                        <circle cx={cx} cy={cy} r="5.5" fill="none" stroke="#7FE7C4" strokeWidth="2" opacity="0.5"/>
                      )}
                      {/* Label */}
                      <text
                        x={cx} y={cy + 22}
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="600"
                        fill={pt.active ? '#2E7D32' : '#5D4037'}
                        opacity="0.8"
                        fontFamily="serif"
                      >
                        {pt.label}
                      </text>
                    </g>
                  )
                })}
                {/* Lock icon on inactive points */}
                {MEMORY_POINTS.filter(pt => !pt.active).map((pt) => {
                  const cx = parseFloat(pt.x) / 100 * 400
                  const cy = parseFloat(pt.y) / 100 * 208
                  return (
                    <text key={`lock-${pt.label}`} x={cx} y={cy + 4} textAnchor="middle" fontSize="7" fill="#5D4037" opacity="0.5">
                      🔒
                    </text>
                  )
                })}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-2 right-3 flex gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-dulac-cyan shadow-[0_0_8px_rgba(127,231,196,0.8)]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-dulac-jade">Đã khám phá</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-dulac-amber opacity-55" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-dulac-brown/60">Chưa mở khóa</span>
                </div>
              </div>
            </div>

            {/* Tính status panel */}
            <div className="border-t border-dulac-brown/12 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle size={15} className="text-dulac-jade" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-dulac-brown/70">Tính đang…</p>
                </div>
                <span className="h-1.5 w-1.5 rounded-full bg-dulac-cyan shadow-[0_0_8px_rgba(127,231,196,0.9)]" />
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {[
                  { label: 'yên lặng', active: true },
                  { label: 'tò mò', active: false },
                  { label: 'bồn chồn', active: false },
                  { label: 'đi theo tín hiệu', active: false },
                ].map((state) => (
                  <span
                    key={state.label}
                    className="rounded-md border px-2.5 py-1 text-xs font-medium"
                    style={state.active
                      ? { borderColor: 'rgba(127,231,196,0.5)', background: 'rgba(127,231,196,0.1)', color: '#7FE7C4' }
                      : { borderColor: 'rgba(93,64,55,0.2)', background: 'transparent', color: 'rgba(30,26,23,0.5)' }
                    }
                  >
                    {state.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}
