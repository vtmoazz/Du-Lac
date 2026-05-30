'use client'

import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'
import { type CartItem, formatPrice } from '@/types'

interface CartItemRowProps {
  item: CartItem
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '14px 0',
        borderBottom: '1px solid rgba(92,51,23,0.1)',
        alignItems: 'flex-start',
      }}
    >
      {/* Ảnh */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#FFF3C4',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        {item.product_image ? (
          <Image
            src={item.product_image}
            alt={item.product_name}
            fill
            sizes="64px"
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
              fontSize: '24px',
            }}
          >
            🎨
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#2C1810',
            margin: '0 0 2px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item.product_name}
        </p>
        {item.size && (
          <p style={{ fontSize: '12px', color: 'rgba(44,24,16,0.5)', margin: '0 0 8px' }}>
            Size: {item.size}
          </p>
        )}

        {/* Số lượng + giá */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Qty controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(92,51,23,0.2)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => updateQuantity(item.product_id, item.size, item.quantity - 1)}
              style={{
                width: '28px',
                height: '28px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#5C3317',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              −
            </button>
            <span
              style={{
                width: '28px',
                textAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                color: '#2C1810',
              }}
            >
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product_id, item.size, item.quantity + 1)}
              style={{
                width: '28px',
                height: '28px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#5C3317',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              +
            </button>
          </div>

          {/* Giá */}
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              fontWeight: 700,
              color: '#C8392B',
            }}
          >
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>

      {/* Nút xóa */}
      <button
        onClick={() => removeItem(item.product_id, item.size)}
        title="Xóa sản phẩm"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          color: 'rgba(44,24,16,0.3)',
          padding: '2px',
          lineHeight: 1,
          flexShrink: 0,
          transition: 'color 0.15s',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#C8392B' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(44,24,16,0.3)' }}
      >
        ×
      </button>
    </div>
  )
}
