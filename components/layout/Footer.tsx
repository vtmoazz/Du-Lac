import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dulac-parchment border-t border-dulac-brown/20 py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo + mô tả */}
          <div>
            <p className="font-serif font-bold text-2xl text-dulac-red mb-3">Du Lạc</p>
            <p className="text-dulac-ink/65 text-sm leading-relaxed max-w-xs">
              Nền tảng game tương tác biến hành trình khám phá văn hóa Việt Nam thành chuyện "phượt" mãn nhãn dành riêng cho thế hệ trẻ.
            </p>
            <p className="mt-4 text-xs text-dulac-ink/40 italic">
              Nhóm Dự Án Khởi Nghiệp Du Lạc · Đại học FPT
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-dulac-brown text-sm mb-4 uppercase tracking-widest">Điều Hướng</p>
            <ul className="space-y-2.5">
              {[
                { href: '/',        label: 'Trang Chủ' },
                { href: '/#about',  label: 'Về Du Lạc' },
                { href: '/#game',   label: 'Game Overview' },
                { href: '/shop',    label: 'Cửa Hàng' },
                { href: '/#contact',label: 'Liên Hệ' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-dulac-ink/60 hover:text-dulac-red transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="font-semibold text-dulac-brown text-sm mb-4 uppercase tracking-widest">Kết Nối</p>
            <div className="flex gap-3 mb-5">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-dulac-brown/20 text-dulac-ink/60 hover:text-dulac-red hover:border-dulac-red transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="p-2 rounded-full border border-dulac-brown/20 text-dulac-ink/60 hover:text-dulac-red hover:border-dulac-red transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-dulac-brown/20 text-dulac-ink/60 hover:text-dulac-red hover:border-dulac-red transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
            <p className="text-sm text-dulac-ink/60">vaanthanh2005@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dulac-brown/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dulac-ink/40">© 2026 Du Lạc Project. All rights reserved.</p>
          <p className="text-xs text-dulac-ink/40">Made with ❤ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
