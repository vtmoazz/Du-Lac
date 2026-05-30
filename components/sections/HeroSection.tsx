import { Compass, Heart, PlayCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import BackgroundLayer from '@/components/ui/BackgroundLayer'
import { siteConfig } from '@/content/home'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
      <BackgroundLayer variant="villageMorning" priority />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center px-4 md:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)] md:px-8">
        <div className="max-w-3xl text-dulac-cream">
          <div className="section-reveal inline-flex items-center gap-2 rounded-full border border-dulac-cyan/30 bg-dulac-deep/45 px-4 py-2 text-sm font-semibold text-dulac-cyan backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-dulac-cyan shadow-[0_0_16px_rgba(127,231,196,0.95)]" />
            Narrative adventure · Vietnamese folklore
          </div>
          <h1 className="section-reveal mt-6 font-serif text-5xl font-black leading-[0.96] text-dulac-cream md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="section-reveal mt-5 font-serif text-2xl font-semibold leading-tight text-dulac-cyan md:text-4xl">
            {siteConfig.tagline}
          </p>
          <p className="section-reveal mt-6 max-w-2xl text-base leading-8 text-dulac-cream/78 md:text-lg md:leading-9">
            {siteConfig.description}
          </p>
          <div className="section-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#media" variant="primary" size="lg">
              <PlayCircle size={20} />
              {siteConfig.cta.secondary}
            </Button>
            <Button href="#community" variant="secondaryDark" size="lg">
              <Heart size={20} />
              {siteConfig.cta.primary}
            </Button>
            <Button href="#story" variant="ghostDark" size="lg">
              <Compass size={20} />
              {siteConfig.cta.tertiary}
            </Button>
          </div>
        </div>
        <div className="pointer-events-none hidden h-[520px] md:block" aria-hidden="true">
          <div className="relative h-full">
            <span className="firefly left-[18%] top-[24%]" />
            <span className="firefly left-[68%] top-[58%] [animation-delay:1.2s]" />
            <span className="firefly left-[44%] top-[72%] [animation-delay:2.1s]" />
          </div>
        </div>
      </div>
    </section>
  )
}
