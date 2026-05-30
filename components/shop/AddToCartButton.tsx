'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { type Product } from '@/types'

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem)
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length > 0 ? null : null
  )
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const isSoldOut = product.stock === 0
  const needsSize = product.sizes.length > 0
  const canAdd = !isSoldOut && (!needsSize || selectedSize !== null)

  function handleAdd() {
    if (!canAdd) return
    addItem(product, qty, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Chọn size */}
      {needsSize && (
        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#5C3317', marginBottom: '8px' }}>
            Chọn size:
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: selectedSize === size
                    ? '2px solid #C8392B'
                    : '1.5px solid rgba(92,51,23,0.25)',
                  background: selectedSize === size ? '#FFF3C4' : '#fff',
                  color: selectedSize === size ? '#C8392B' : 'rgba(44,24,16,0.7)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {size}
              </button>
            ))}
          </div>
          {needsSize && selectedSize === null && (
            <p style={{ fontSize: '12px', color: '#C8392B', marginTop: '6px' }}>
              Vui lòng chọn size trước khi thêm vào giỏ
            </p>
          )}
        </div>
      )}

      {/* Số lượng */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#5C3317' }}>Số lượng:</span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1.5px solid rgba(92,51,23,0.25)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            style={{
              width: '36px',
              height: '36px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
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
              width: '40px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 600,
              color: '#2C1810',
            }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
            style={{
              width: '36px',
              height: '36px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              color: '#5C3317',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            +
          </button>
        </div>
        <span style={{ fontSize: '12px', color: 'rgba(44,24,16,0.45)' }}>
          Còn {product.stock} sản phẩm
        </span>
      </div>

      {/* Nút thêm giỏ */}
      <button
        onClick={handleAdd}
        disabled={!canAdd}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: 700,
          border: 'none',
          cursor: canAdd ? 'pointer' : 'not-allowed',
          background: isSoldOut
            ? 'rgba(92,51,23,0.08)'
            : added
              ? '#2E7D52'
              : canAdd
                ? '#C8392B'
                : 'rgba(92,51,23,0.15)',
          color: isSoldOut || !canAdd ? 'rgba(44,24,16,0.4)' : '#fff',
          transition: 'background 0.2s',
          letterSpacing: '0.3px',
        }}
      >
        {isSoldOut
          ? 'Hết hàng'
          : added
            ? '✓ Đã thêm vào giỏ!'
            : 'Thêm vào giỏ hàng'}
      </button>
    </div>
  )
}
