import type { Metadata } from 'next'
import { Noto_Serif_Display, Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import CartDrawer from '@/components/shop/CartDrawer'

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif',
  display: 'swap',
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Du Lạc — Vietnamese Folklore Narrative Adventure Game',
    template: '%s | Du Lạc',
  },
  description:
    'Du Lạc là game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam, kể về hành trình Lan Anh đưa Tính đi qua làng quê, trò chơi tuổi thơ và truyền thuyết cũ để đánh thức ký ức đã ngủ quên.',
  keywords: [
    'game dân gian Việt Nam',
    'Vietnamese folklore game',
    'narrative adventure Vietnam',
    'Vietnamese indie game',
    'Ô Ăn Quan game',
    'rối nước game',
    'folklore adventure game',
    'Du Lạc game',
  ],
  openGraph: {
    title: 'Du Lạc — Đi qua văn hóa. Chạm lại ký ức.',
    description: 'Một game phiêu lưu cốt truyện lấy cảm hứng từ văn hóa dân gian Việt Nam.',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/images/backgrounds/hero-village-gate.png',
        width: 1672,
        height: 941,
        alt: 'Lan Anh dắt Tính trước cổng làng, xa xa có đom đóm và ánh sớm.',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cls = [notoSerifDisplay.variable, beVietnamPro.variable, 'h-full', 'antialiased'].join(' ')
  return (
    <html lang="vi" className={cls}>
      <body className="min-h-full flex flex-col bg-dulac-cream font-sans text-dulac-ink">
        {children}
        <CartDrawer />
      </body>
    </html>
  )
}
