'use client'

import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { useCartStore } from '@/store/cartStore'
import { type Product, CATEGORY_LABELS, formatPrice, getEffectivePrice } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  const effectivePrice = getEffectivePrice(product)
  const isOnSale = product.discount_price !== null && product.discount_price < product.price
  const isSoldOut = product.stock === 0
  const hasSize = product.sizes.length > 0

  function handleAddToCart() {
    if (isSoldOut) return
    if (hasSize) return // product detail page sẽ xử lý chọn size
    addItem(product, 1, null)
  }

  return (
    <div
      style={{
        background: '#fff',
        border: '2px solid rgba(92,51,23,0.18)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
        boxShadow: '0 2px 12px rgba(44,24,16,0.06)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = 'rgba(232,160,32,0.6)'
        el.style.boxShadow = '0 8px 28px rgba(44,24,16,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'rgba(92,51,23,0.18)'
        el.style.boxShadow = '0 2px 12px rgba(44,24,16,0.06)'
      }}
    >
      {/* Ảnh */}
      <Link href={`/shop/${product.slug}`} style={{ display: 'block', position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            aspectRatio: '1/1',
            background: '#FFF3C4',
            overflow: 'hidden',
          }}
        >
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(92,51,23,0.3)',
                fontSize: '48px',
              }}
            >
              🎨
            </div>
          )}

          {/* Badge SALE */}
          {isOnSale && (
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#C8392B',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '20px',
                letterSpacing: '0.5px',
              }}
            >
              SALE
            </div>
          )}

          {/* Hết hàng overlay */}
          {isSoldOut && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#5C3317',
              }}
            >
              Hết hàng
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {/* Category badge */}
        <Badge label={CATEGORY_LABELS[product.category]} variant="amber" />

        {/* Tên sản phẩm */}
        <Link
          href={`/shop/${product.slug}`}
          style={{
            fontWeight: 600,
            fontSize: '14px',
            color: '#2C1810',
            textDecoration: 'none',
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </Link>

        {/* Giá */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: 'auto' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: '16px',
              color: '#C8392B',
            }}
          >
            {formatPrice(effectivePrice)}
          </span>
          {isOnSale && (
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: 'rgba(44,24,16,0.4)',
                textDecoration: 'line-through',
              }}
            >
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Nút */}
        {hasSize ? (
          <Link
            href={`/shop/${product.slug}`}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 600,
              background: isSoldOut ? 'rgba(92,51,23,0.08)' : '#C8392B',
              color: isSoldOut ? 'rgba(44,24,16,0.4)' : '#fff',
              textDecoration: 'none',
              pointerEvents: isSoldOut ? 'none' : 'auto',
            }}
          >
            {isSoldOut ? 'Hết hàng' : 'Chọn size →'}
          </Link>
        ) : (
          <button
            onClick={handleAddToCart}
            disabled={isSoldOut}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 600,
              border: 'none',
              cursor: isSoldOut ? 'not-allowed' : 'pointer',
              background: isSoldOut ? 'rgba(92,51,23,0.08)' : '#C8392B',
              color: isSoldOut ? 'rgba(44,24,16,0.4)' : '#fff',
              transition: 'opacity 0.15s',
            }}
          >
            {isSoldOut ? 'Hết hàng' : 'Thêm vào giỏ'}
          </button>
        )}
      </div>
    </div>
  )
}
