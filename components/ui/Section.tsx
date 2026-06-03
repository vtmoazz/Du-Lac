import type { ReactNode } from 'react'
import BackgroundLayer from '@/components/ui/BackgroundLayer'
import { cn } from '@/lib/cn'

type SectionVariant =
  | 'paper'
  | 'villageMorning'
  | 'memoryMap'
  | 'banyanNight'
  | 'folklorePattern'
  | 'darkGallery'
  | 'sunsetRoad'

interface SectionProps {
  id?: string
  variant?: SectionVariant
  children: ReactNode
  className?: string
  innerClassName?: string
}

export default function Section({
  id,
  variant = 'paper',
  children,
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('relative overflow-hidden py-16 md:py-24', className)}>
      <BackgroundLayer variant={variant} />
      <div className={cn('relative z-10 mx-auto max-w-7xl px-4 md:px-8', innerClassName)}>
        {children}
      </div>
    </section>
  )
}
