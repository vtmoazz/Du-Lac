import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import { mediaItems } from '@/content/home'

export default function MediaSection() {
  const [trailer] = mediaItems

  return (
    <Section id="media" variant="darkGallery" className="text-dulac-cream">
      {/* Section header */}
      <div className="text-left">
        <p className="section-divider text-sm font-bold uppercase tracking-[0.22em] text-dulac-cyan">
          Teaser Preview
        </p>
        <h2 className="dulac-title section-reveal mt-4 font-serif text-4xl text-dulac-amber md:text-5xl">
          Nhìn thấy ký ức trước khi nó biến mất.
        </h2>
      </div>

      {/* Two-column: text left, video right */}
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">

        {/* LEFT — description + numbered points */}
        <div className="section-reveal flex flex-col gap-6 [animation-delay:0.12s]">
          <p className="dulac-paragraph text-base leading-8 text-dulac-cream/80">
            Du Lạc không đơn thuần là kể một cốt truyện mà còn là nơi ký ức của Tính và Lan Anh tiếp tục tồn tại, ngay cả khi người chơi đã rời khỏi game.
          </p>

          <ol className="flex flex-col gap-5">
            <li className="flex gap-4">
              <span className="dulac-title mt-0.5 shrink-0 text-2xl leading-none text-dulac-amber/50">01</span>
              <p className="dulac-paragraph text-dulac-cream/70">
                Mỗi câu đố trong game đều dẫn đến một mảnh ký ức ngoài đời thực trên website, biến hành trình khám phá thành trải nghiệm không thể tách rời.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="dulac-title mt-0.5 shrink-0 text-2xl leading-none text-dulac-amber/50">02</span>
              <p className="dulac-paragraph text-dulac-cream/70">
                Website liên tục hé lộ bí mật mới, vùng đất tiếp theo và hứa hẹn những nội dung đặc biệt để người chơi luôn muốn quay lại trước khi bỏ lỡ điều gì đó.
              </p>
            </li>
          </ol>
        </div>

        {/* RIGHT — teaser video card */}
        <article
          className="section-reveal group overflow-hidden rounded-xl border border-dulac-amber/30 bg-dulac-cream/8 [animation-delay:0.24s]"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/images/backgrounds/hero-village-gate.png"
              alt="Trailer teaser placeholder của Du Lạc"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-88 transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,37,26,0.2),rgba(16,37,26,0.82))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-dulac-red text-white shadow-red transition duration-300 group-hover:scale-110">
                <PlayCircle size={34} />
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-dulac-cyan">Teaser</p>
              <h3 className="dulac-title mt-2 font-serif text-2xl text-dulac-cream">{trailer}</h3>
            </div>
          </div>
        </article>

      </div>
    </Section>
  )
}
