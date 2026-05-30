import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import MediaCard from '@/components/ui/MediaCard'
import Section from '@/components/ui/Section'
import { mediaItems } from '@/content/home'

export default function MediaSection() {
  const [trailer, ...items] = mediaItems

  return (
    <Section id="media" variant="darkGallery" className="text-dulac-cream">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-divider text-sm font-bold uppercase tracking-[0.22em] text-dulac-cyan">Media Preview</p>
        <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
          Nhìn thấy ký ức trước khi nó biến mất.
        </h2>
        <p className="mt-5 text-base leading-8 text-dulac-cream/65 md:text-lg">
          Các khung hình dưới đây là placeholder có chủ đích cho MVP, giữ đúng mood concept trong khi trailer và screenshot thật đang được phát triển.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        <article className="group overflow-hidden rounded-lg border border-dulac-amber/30 bg-dulac-cream/8">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/backgrounds/hero-village-gate.png"
              alt="Trailer teaser placeholder của Du Lạc"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover opacity-88 transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,37,26,0.2),rgba(16,37,26,0.82))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-dulac-red text-white shadow-red">
                <PlayCircle size={34} />
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-dulac-cyan">Teaser</p>
              <h3 className="mt-2 font-serif text-3xl font-black">{trailer}</h3>
            </div>
          </div>
        </article>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => (
            <MediaCard key={item} title={item} index={index + 1} />
          ))}
        </div>
      </div>
    </Section>
  )
}
