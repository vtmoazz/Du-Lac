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
  title: {
    default: 'Du Lac - Choi De Cham, Cham De Chua Lanh',
    template: '%s | Du Lac',
  },
  description: 'Game tuong tac kham pha van hoa Viet Nam.',
  keywords: ['Du Lac', 'game van hoa', 'dan gian Viet Nam'],
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
