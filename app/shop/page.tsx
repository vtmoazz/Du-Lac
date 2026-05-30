import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import ProductGrid from '@/components/shop/ProductGrid'
import type { Product } from '@/types'

export const metadata: Metadata = {
  title: 'Cửa Hàng',
  description: 'Khám phá bộ sưu tập sản phẩm văn hóa dân gian Du Lạc — kit DIY, board game, sticker, acrylic và sách.',
}

export default async function ShopPage() {
  let products: Product[] = []

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    products = data ?? []
  } catch (err) {
    console.error('Lỗi fetch products:', err)
  }

  return (
    <main>
      {/* Hero nhỏ */}
      <section
        style={{
          background: 'linear-gradient(180deg, #FFF8E0 0%, #FFF3C4 100%)',
          borderBottom: '1px solid rgba(92,51,23,0.15)',
          padding: '48px 24px 40px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(44,24,16,0.5)',
            marginBottom: '10px',
          }}
        >
          Du Lạc · Shop
        </p>
        <h1
          style={{
            fontFamily: '"Noto Serif Display", serif',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 700,
            color: '#C8392B',
            marginBottom: '12px',
          }}
        >
          Cửa Hàng Du Lạc
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'rgba(44,24,16,0.6)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Những sản phẩm mang hơi thở văn hóa dân gian Việt Nam — từ kit tự làm đến board game, sticker và sách.
        </p>
      </section>

      {/* Divider hoa sen */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '0 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ flex: 1, height: '1px', background: 'rgba(232,160,32,0.35)' }} />
        <span style={{ fontSize: '18px', color: '#E8A020' }}>🌸</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(232,160,32,0.35)' }} />
      </div>

      {/* Grid */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 24px 80px',
        }}
      >
        <ProductGrid products={products} />
      </section>
    </main>
  )
}
