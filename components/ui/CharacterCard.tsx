import Image from 'next/image'
import { cn } from '@/lib/cn'

interface CharacterCardProps {
  name: string
  role: string
  description: string
  quote?: string
  motif: string
  featured?: boolean
  image?: string
}

// Per-character atmospheric themes
const CHAR_THEMES: Record<string, { bg: string; accent: string; fg: string; dark: boolean }> = {
  'Lan Anh': { bg: 'linear-gradient(150deg,#FFF8E1 0%,#F2E6BD 55%,rgba(183,28,28,0.14) 100%)', accent: '#B71C1C', fg: '#5D4037', dark: false },
  'Tính':    { bg: 'linear-gradient(155deg,#06140D 0%,#10251A 52%,#1B3A2E 100%)',               accent: '#7FE7C4', fg: '#7FE7C4', dark: true },
  'Ông Nhiêu':{ bg: 'linear-gradient(145deg,#FFF8E1 0%,#EDE0C4 60%,rgba(93,64,55,0.22) 100%)', accent: '#D9A441', fg: '#5D4037', dark: false },
  'Minh':    { bg: 'linear-gradient(145deg,#EAF4EB 0%,#CFEACE 60%,rgba(46,125,50,0.18) 100%)', accent: '#2E7D32', fg: '#2E7D32', dark: false },
  'Hùng':    { bg: 'linear-gradient(145deg,#FFF8E1 0%,#F5E8CC 60%,rgba(217,164,65,0.2) 100%)', accent: '#D9A441', fg: '#5D4037', dark: false },
  'Bà Tư':   { bg: 'linear-gradient(145deg,#FFF8E1 0%,#F5EFE2 60%,rgba(183,28,28,0.1) 100%)', accent: '#B71C1C', fg: '#5D4037', dark: false },
}

function getInitials(name: string) {
  const parts = name.split(' ')
  return parts.slice(-2).map((p) => p[0]).join('').toUpperCase().slice(0, 2)
}

function FeaturedPortrait({ name, motif, image }: { name: string; motif: string; image?: string }) {
  const theme = CHAR_THEMES[name] ?? CHAR_THEMES['Bà Tư']
  const initials = getInitials(name)

  if (image) {
    return (
      <div className="relative aspect-4/3 overflow-hidden">
        <Image src={image} alt={`Portrait of ${name}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-linear-to-t from-dulac-ink/25 to-transparent" />
        <div className="absolute bottom-3 right-3 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{ borderColor: theme.accent + '70', color: theme.accent, background: theme.accent + '18' }}>
          {motif}
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-4/3 overflow-hidden" style={{ background: theme.bg }}>
      {/* SVG motif layer — Lan Anh: red threads */}
      {name === 'Lan Anh' && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-10,240 Q120,180 220,120 Q300,74 410,40" stroke="#B71C1C" strokeWidth="1.8" fill="none" opacity="0.28" strokeDasharray="10 6"/>
          <path d="M-10,268 Q140,210 240,148 Q330,100 410,68" stroke="#B71C1C" strokeWidth="1.2" fill="none" opacity="0.16" strokeDasharray="10 6"/>
          <path d="M-10,290 Q100,255 200,200 Q300,148 400,110" stroke="#D9A441" strokeWidth="1" fill="none" opacity="0.14" strokeDasharray="8 5"/>
          {/* Notebook */}
          <rect x="268" y="76" width="84" height="116" rx="5" stroke="#5D4037" strokeWidth="1.2" fill="rgba(255,248,225,0.45)" opacity="0.6"/>
          <rect x="268" y="76" width="10" height="116" rx="3 0 0 3" fill="rgba(183,28,28,0.18)" opacity="0.6"/>
          <line x1="292" y1="100" x2="338" y2="100" stroke="#5D4037" strokeWidth="0.9" opacity="0.45"/>
          <line x1="292" y1="116" x2="338" y2="116" stroke="#5D4037" strokeWidth="0.9" opacity="0.35"/>
          <line x1="292" y1="132" x2="330" y2="132" stroke="#5D4037" strokeWidth="0.9" opacity="0.3"/>
          <line x1="292" y1="148" x2="338" y2="148" stroke="#5D4037" strokeWidth="0.9" opacity="0.25"/>
          {/* Red thread end dot */}
          <circle cx="405" cy="40" r="4.5" fill="#B71C1C" opacity="0.5"/>
          <circle cx="405" cy="68" r="3" fill="#B71C1C" opacity="0.3"/>
        </svg>
      )}

      {/* SVG motif layer — Tính: drum circles + fireflies */}
      {name === 'Tính' && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <circle cx="200" cy="150" r="110" stroke="#7FE7C4" strokeWidth="0.8" fill="none" opacity="0.18"/>
          <circle cx="200" cy="150" r="80"  stroke="#7FE7C4" strokeWidth="0.7" fill="none" opacity="0.24"/>
          <circle cx="200" cy="150" r="52"  stroke="#7FE7C4" strokeWidth="0.9" fill="none" opacity="0.3"/>
          <circle cx="200" cy="150" r="26"  stroke="#7FE7C4" strokeWidth="1.1" fill="none" opacity="0.4"/>
          <circle cx="200" cy="150" r="8"   fill="#7FE7C4"  opacity="0.32"/>
          {/* Firefly dots */}
          <circle cx="78"  cy="82"  r="2.5" fill="#7FE7C4" opacity="0.7"/>
          <circle cx="310" cy="65"  r="2"   fill="#7FE7C4" opacity="0.55"/>
          <circle cx="330" cy="200" r="1.8" fill="#7FE7C4" opacity="0.6"/>
          <circle cx="60"  cy="220" r="2.2" fill="#7FE7C4" opacity="0.5"/>
          <circle cx="155" cy="45"  r="1.5" fill="#7FE7C4" opacity="0.45"/>
          {/* Horizontal line — horizon */}
          <line x1="0" y1="190" x2="400" y2="190" stroke="#7FE7C4" strokeWidth="0.6" opacity="0.15"/>
          {/* Moon */}
          <circle cx="340" cy="56" r="18" fill="none" stroke="#D9A441" strokeWidth="0.9" opacity="0.4"/>
          <circle cx="350" cy="52" r="16" fill="#06140D" opacity="0.6"/>
        </svg>
      )}

      {/* Generic motif for NPCs if needed */}
      {name !== 'Lan Anh' && name !== 'Tính' && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <circle cx="200" cy="150" r="90" stroke={theme.accent} strokeWidth="0.7" fill="none" opacity="0.18"/>
          <circle cx="200" cy="150" r="60" stroke={theme.accent} strokeWidth="0.6" fill="none" opacity="0.12"/>
        </svg>
      )}

      {/* Large ghost initials */}
      <div
        className="absolute inset-0 flex items-center justify-center font-serif font-black select-none"
        style={{ fontSize: '7rem', color: theme.accent, opacity: theme.dark ? 0.12 : 0.09 }}
        aria-hidden="true"
      >
        {initials}
      </div>

      {/* Motif badge bottom-right */}
      <div
        className="absolute bottom-3 right-3 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
        style={{ borderColor: theme.accent + '60', color: theme.accent, background: theme.accent + '18' }}
      >
        {motif}
      </div>

      {/* Placeholder label */}
      <div className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: theme.accent, opacity: 0.45 }}>
        Portrait coming soon
      </div>

      <div className="noise-layer absolute inset-0 opacity-40" />
    </div>
  )
}

function NPCAvatar({ name, image }: { name: string; image?: string }) {
  const theme = CHAR_THEMES[name] ?? CHAR_THEMES['Bà Tư']
  const initials = getInitials(name)

  if (image) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2" style={{ borderColor: theme.accent + '40' }}>
        <Image src={image} alt={`Portrait of ${name}`} fill sizes="56px" className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 font-serif text-xl font-bold select-none"
      style={{ background: theme.bg, borderColor: theme.accent + '55', color: theme.accent }}
    >
      {initials}
      <span className="absolute -right-0.5 bottom-0.5 h-3 w-3 rounded-full border-2 border-dulac-cream"
        style={{ background: theme.accent, boxShadow: `0 0 10px ${theme.accent}90` }} />
    </div>
  )
}

export default function CharacterCard({ name, role, description, quote, motif, featured = false, image }: CharacterCardProps) {
  const theme = CHAR_THEMES[name] ?? CHAR_THEMES['Bà Tư']

  if (featured) {
    return (
      <article className={cn(
        'group overflow-hidden rounded-2xl border shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-card-hover',
        theme.dark
          ? 'border-dulac-cyan/18 bg-dulac-deep/95'
          : 'border-dulac-brown/18 bg-dulac-cream/92'
      )}>
        <FeaturedPortrait name={name} motif={motif} image={image} />

        <div className={cn('p-6', theme.dark && 'text-dulac-cream')}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className={cn('font-serif text-2xl font-black', theme.dark ? 'text-dulac-cream' : 'text-dulac-brown')}>
                {name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: theme.accent }}>
                {role}
              </p>
            </div>
          </div>

          <p className={cn('mt-4 text-sm leading-7 md:text-base md:leading-8', theme.dark ? 'text-dulac-cream/70' : 'text-dulac-ink/70')}>
            {description}
          </p>

          {quote && (
            <blockquote
              className={cn('mt-5 border-l-2 pl-4 font-serif text-lg italic leading-8', theme.dark ? 'text-dulac-cream/82' : 'text-dulac-ink/78')}
              style={{ borderColor: theme.accent + '60' }}
            >
              ❝{quote}❞
            </blockquote>
          )}
        </div>
      </article>
    )
  }

  // NPC card — compact horizontal
  return (
    <article className="group flex gap-4 overflow-hidden rounded-xl border border-dulac-brown/15 bg-dulac-cream/88 p-4 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
      style={{ ['--hover-border' as string]: theme.accent }}>
      <NPCAvatar name={name} image={image} />
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-[1.05rem] font-bold text-dulac-brown">{name}</h3>
        <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: theme.accent }}>{role}</p>
        <p className="mt-2 text-sm leading-6 text-dulac-ink/65">{description}</p>
        <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-dulac-amber/70">
          ✦ {motif}
        </span>
      </div>
    </article>
  )
}
