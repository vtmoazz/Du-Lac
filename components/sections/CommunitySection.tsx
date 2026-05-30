import { Mail, MessageCircle, Send, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'

export default function CommunitySection() {
  return (
    <Section id="community" variant="sunsetRoad" className="text-dulac-cream" innerClassName="py-6 md:py-12">
      {/* Ghost watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden select-none pr-4 md:pr-12"
        aria-hidden="true"
      >
        <span
          className="font-serif font-black text-dulac-cream opacity-[0.04]"
          style={{ fontSize: 'clamp(6rem, 22vw, 18rem)', lineHeight: 1 }}
        >
          DU LẠC
        </span>
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="section-divider text-sm font-bold uppercase tracking-[0.22em] text-dulac-cyan">Community</p>
        <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-6xl">
          Cùng lưu giữ những điều đang dần bị quên.
        </h2>
        <p className="mt-6 text-base leading-8 text-dulac-cream/76 md:text-lg md:leading-9">
          Du Lạc đang được phát triển như một hành trình dài qua ký ức, văn hóa và những vùng đất Việt Nam. Theo dõi quá trình phát triển, tham gia cộng đồng và chia sẻ những ký ức tuổi thơ của bạn.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="#" variant="primary" size="lg">
            <Sparkles size={20} />
            Wishlist trên Steam
          </Button>
          <Button href="#" variant="secondaryDark" size="lg">
            <MessageCircle size={20} />
            Tham gia Discord
          </Button>
          <Button href="mailto:hello@dulac.game" variant="ghostDark" size="lg">
            <Mail size={20} />
            Đăng ký Devlog
          </Button>
        </div>
        <div className="mt-10 rounded-lg border border-dulac-cyan/24 bg-dulac-deep/44 p-5 backdrop-blur">
          <div className="flex items-start gap-3">
            <Send className="mt-1 shrink-0 text-dulac-cyan" size={20} />
            <p className="text-sm leading-7 text-dulac-cream/72">
              Gửi ký ức tuổi thơ của bạn: một trò chơi, một lễ hội, một câu hát ru, một ngôi làng hoặc một câu chuyện dân gian mà bạn không muốn bị lãng quên.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
