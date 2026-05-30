'use client'

import Link from 'next/link'
import { formatPrice } from '@/types'
import { useCartStore } from '@/store/cartStore'

const previewProducts = [
  { name: 'Bộ Kit Rối Nước Tự Làm', category: 'Bộ Kit DIY', price: 280000, emoji: '🎭', badgeColor: '#2E7D52' },
  { name: 'Board Game Ô Ăn Quan',   category: 'Board Game',  price: 350000, emoji: '♟️', badgeColor: '#E8A020' },
  { name: 'Sticker Pack Du Lạc',    category: 'Sticker',     price: 85000,  emoji: '🌸', badgeColor: '#C8392B' },
]

function ShopCard({ product }: { product: typeof previewProducts[0] }) {
  const openDrawer = useCartStore((s) => s.openDrawer)

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '2px solid rgba(92,51,23,0.25)',
        boxShadow: '0 2px 16px rgba(44,24,16,0.08)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#FFF3C4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '64px', lineHeight: 1 }}>{product.emoji}</span>
      </div>

      {/* Info */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
          <p style={{ fontWeight: 600, color: '#2C1810', fontSize: '0.875rem', lineHeight: 1.4, flex: 1 }}>
            {product.name}
          </p>
          <span style={{ backgroundColor: `${product.badgeColor}20`, color: product.badgeColor, border: `1px solid ${product.badgeColor}40`, borderRadius: '999px', padding: '2px 10px', fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
            {product.category}
          </span>
        </div>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: '#C8392B', fontSize: '1.1rem' }}>
          {formatPrice(product.price)}
        </p>
        <button
          onClick={openDrawer}
          style={{ marginTop: 'auto', backgroundColor: '#C8392B', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.6rem 1rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', width: '100%' }}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  )
}

export default function ShopPreviewSection() {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#FBF5E6' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section title */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(232,160,32,0.5)' }} />
            <span style={{ color: '#E8A020', fontSize: '1.2rem' }}>✿</span>
            <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(232,160,32,0.5)' }} />
          </div>
          <h2 style={{ fontFamily: 'Noto Serif Display, Georgia, serif', fontWeight: 700, color: '#5C3317', fontSize: '2rem', marginBottom: '0.75rem' }}>
            Cửa Hàng Du Lạc
          </h2>
          <p style={{ color: 'rgba(44,24,16,0.65)', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto' }}>
            Mang văn hóa dân gian về tay bạn — từ bộ kit DIY đến board game truyền thống.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {previewProducts.map((p) => (
            <ShopCard key={p.name} product={p} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/shop"
            style={{ display: 'inline-block', border: '2px solid #E8A020', color: '#5C3317', borderRadius: '12px', padding: '0.875rem 2rem', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}
          >
            Xem Tất Cả Sản Phẩm →
          </Link>
        </div>
      </div>
    </section>
  )
}
