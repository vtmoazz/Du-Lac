import Button from '@/components/ui/Button'
import { Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#FFF8E0_0%,#FBF5E6_100%)]">

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-100 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Frame dân gian trái */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 flex flex-col pointer-events-none select-none">
        <div className="flex-1 border-r-4 border-dulac-brown/25 ml-4 md:ml-8 rounded-tr-[40px] rounded-br-[40px]" />
        <div className="h-8 w-8 md:w-12 ml-2 md:ml-4 rounded-full border-4 border-dulac-amber/40 mb-4" />
      </div>

      {/* Frame dân gian phải */}
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 flex flex-col pointer-events-none select-none">
        <div className="flex-1 border-l-4 border-dulac-brown/25 mr-4 md:mr-8 rounded-tl-[40px] rounded-bl-[40px]" />
        <div className="h-8 w-8 md:w-12 ml-auto mr-2 md:mr-4 rounded-full border-4 border-dulac-amber/40 mb-4" />
      </div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-dulac-red/10 text-dulac-red border border-dulac-red/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-dulac-red animate-pulse" />
          Game văn hóa dân gian Việt Nam
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-5xl md:text-7xl text-dulac-red leading-tight tracking-tight mb-6">
          Du Lạc
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-dulac-brown font-medium mb-4">
          Hành trình dân gian, trải nghiệm chất trẻ
        </p>
        <p className="text-dulac-ink/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Nền tảng game tương tác biến hành trình khám phá văn hóa Việt Nam thành chuyện &ldquo;phượt&rdquo; mãn nhãn dành riêng cho thế hệ trẻ.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="gap-2">
            <Play size={18} className="fill-white" />
            Chơi Bản Thử Nghiệm
          </Button>
          <Button variant="secondary" size="lg" href="#trailer" className="gap-2">
            Xem Trailer
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mt-12 text-dulac-amber/60">
          <div className="h-px w-16 bg-dulac-amber/40" />
          <span className="text-lg">✿</span>
          <div className="h-px w-16 bg-dulac-amber/40" />
        </div>
      </div>
    </section>
  )
}
