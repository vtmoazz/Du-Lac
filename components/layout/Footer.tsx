import Link from 'next/link'
import { Heart, Mail, MessageCircle, PlayCircle } from 'lucide-react'
import { navigationItems, siteConfig } from '@/content/home'

export default function Footer() {
  return (
    <footer className="border-t border-dulac-brown/18 bg-dulac-deep py-14 text-dulac-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <p className="dulac-title font-serif text-3xl text-dulac-amber">{siteConfig.name}</p>
            <p className="dulac-subtitle mt-3 max-w-md font-serif text-xl text-dulac-cream/90">
              {siteConfig.tagline}
            </p>
            <p className="dulac-paragraph mt-4 max-w-md text-dulac-cream/60">
              Game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, ký ức, tình thân và những trò chơi tuổi thơ.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-dulac-cream/38">
              Nhóm Dự Án Khởi Nghiệp Du Lạc · Đại học FPT
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-dulac-cyan">Điều hướng</p>
            <ul className="space-y-3">
              {navigationItems.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-dulac-cream/58 transition-colors hover:text-dulac-cyan">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-dulac-cyan">Kết nối</p>
            <div className="mb-5 flex gap-3">
              {[
                { href: '#media', label: 'Trailer', icon: <PlayCircle size={18} /> },
                { href: '#community', label: 'Discord', icon: <MessageCircle size={18} /> },
                { href: 'mailto:dulac.contact@gmail.com', label: 'Email', icon: <Mail size={18} /> },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-dulac-cyan/20 text-dulac-cream/58 transition-colors hover:border-dulac-cyan hover:text-dulac-cyan"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="flex items-center gap-2 text-sm text-dulac-cream/58">
              <Heart size={16} className="text-dulac-red" />
              Contact: dulac.contact@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-dulac-cream/10 pt-6 md:flex-row">
          <p className="text-xs text-dulac-cream/38">© 2026 Du Lạc Project. All rights reserved.</p>
          <p className="text-xs text-dulac-cream/38">Made by Du Lạc Team</p>
        </div>
      </div>
    </footer>
  )
}
