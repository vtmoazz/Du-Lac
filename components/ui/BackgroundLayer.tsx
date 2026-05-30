import Image from 'next/image'
import { cn } from '@/lib/cn'

type BackgroundVariant =
  | 'paper'
  | 'villageMorning'
  | 'memoryMap'
  | 'banyanNight'
  | 'folklorePattern'
  | 'darkGallery'
  | 'sunsetRoad'

interface BackgroundLayerProps {
  variant: BackgroundVariant
  priority?: boolean
}

// Overlay gradients per variant — control text readability over real images
const OVERLAY: Record<string, string> = {
  villageMorning: 'linear-gradient(90deg,rgba(16,37,26,0.88) 0%,rgba(16,37,26,0.65) 38%,rgba(16,37,26,0.18) 72%,rgba(16,37,26,0.32) 100%)',
  sunsetRoad:     'linear-gradient(90deg,rgba(30,26,23,0.78) 0%,rgba(93,64,55,0.42) 48%,rgba(183,28,28,0.22) 100%)',
  banyanNight:    'linear-gradient(145deg,rgba(6,20,13,0.52) 0%,rgba(16,37,26,0.38) 50%,rgba(33,24,21,0.48) 100%)',
  memoryMap:      'linear-gradient(180deg,rgba(255,248,225,0.55) 0%,rgba(242,230,189,0.38) 100%)',
  folklorePattern:'linear-gradient(180deg,rgba(255,248,225,0.62) 0%,rgba(234,242,223,0.72) 100%)',
  darkGallery:    'linear-gradient(180deg,rgba(16,37,26,0.35) 0%,rgba(11,23,17,0.28) 100%)',
  paper:          'linear-gradient(180deg,rgba(255,248,225,0.45) 0%,rgba(255,248,225,0.28) 100%)',
}

export default function BackgroundLayer({ variant, priority = false }: BackgroundLayerProps) {
  // === Cinematic full-bleed image sections ===
  if (variant === 'villageMorning' || variant === 'sunsetRoad' || variant === 'banyanNight') {
    const src =
      variant === 'villageMorning' ? '/images/backgrounds/hero-village-gate.png'
      : variant === 'sunsetRoad'   ? '/images/backgrounds/cta-sunset-road..png'
      :                              '/images/backgrounds/banyan-night-fireflies.png'

    return (
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={cn(
            'object-cover',
            variant === 'sunsetRoad' && 'brightness-105 saturate-[1.06]',
          )}
        />
        <div className="absolute inset-0" style={{ background: OVERLAY[variant] }} />
        <div className="noise-layer absolute inset-0 opacity-50" />
        {variant === 'banyanNight' && <Fireflies count={18} />}
        {variant === 'sunsetRoad' && <Fireflies count={6} />}
      </div>
    )
  }

  // === Texture / pattern sections ===
  if (variant === 'paper' || variant === 'folklorePattern') {
    const src =
      variant === 'paper'
        ? '/images/backgrounds/story-paper-texture.png'
        : '/images/backgrounds/folklore-pattern.png'

    return (
      <div
        className={cn(
          'absolute inset-0 overflow-hidden',
          variant === 'paper' ? 'bg-dulac-cream' : 'bg-[#EAF2DF]'
        )}
        aria-hidden="true"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          style={{ mixBlendMode: 'multiply' }}
        />
        <div className="absolute inset-0" style={{ background: OVERLAY[variant] }} />
        <div className="noise-layer absolute inset-0 opacity-35" />
      </div>
    )
  }

  // === Memory map (Gameplay section) ===
  if (variant === 'memoryMap') {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#F5EDD8]" aria-hidden="true">
        <Image
          src="/images/backgrounds/memory-map.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
          style={{ mixBlendMode: 'multiply' }}
        />
        {/* SVG map overlay at lower opacity as secondary layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/backgrounds/memory-map.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-multiply"
        />
        <div className="absolute inset-0" style={{ background: OVERLAY.memoryMap }} />
        <div className="noise-layer absolute inset-0 opacity-30" />
      </div>
    )
  }

  // === Dark gallery (Media section) ===
  if (variant === 'darkGallery') {
    return (
      <div className="absolute inset-0 overflow-hidden bg-dulac-deep" aria-hidden="true">
        <Image
          src="/images/backgrounds/gallery-dark-texture.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-55"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,231,196,0.1),transparent_30%),linear-gradient(180deg,rgba(16,37,26,0.45),rgba(11,23,17,0.52))]" />
        <div className="noise-layer absolute inset-0 opacity-40" />
      </div>
    )
  }

  // Fallback (shouldn't reach here)
  return <div className="absolute inset-0 bg-dulac-cream" aria-hidden="true" />
}

function Fireflies({ count }: { count: number }) {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="firefly"
          style={{
            left: `${8 + ((index * 13) % 86)}%`,
            top: `${12 + ((index * 19) % 72)}%`,
            animationDelay: `${(index % 6) * 0.45}s`,
            animationDuration: `${5 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  )
}
