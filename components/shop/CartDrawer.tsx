'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import CartItemRow from './CartItemRow'
import { formatPrice } from '@/types'

export default function CartDrawer() {
  const items = useCartStore((s) => s.items)
  const isOpen = useCartStore((s) => s.isDrawerOpen)
  const closeDrawer = useCartStore((s) => s.closeDrawer)
  const totalItems = useCartStore((s) => s.totalItems)
  const totalPrice = useCartStore((s) => s.totalPrice)

  // Khoá scroll body khi drawer mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Đóng khi nhấn Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeDrawer()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeDrawer])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(44,24,16,0.45)',
          zIndex: 40,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '400px',
          zIndex: 50,
          background: '#FBF5E6',
          borderLeft: '2px solid rgba(92,51,23,0.15)',
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '-8px 0 32px rgba(44,24,16,0.12)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 20px 16px',
            borderBottom: '1px solid rgba(92,51,23,0.12)',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.04em',
              color: '#D9A441',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            🛒 Giỏ hàng
            {totalItems() > 0 && (
              <span
                style={{
                  background: '#C8392B',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '20px',
                  minWidth: '24px',
                  textAlign: 'center',
                }}
              >
                {totalItems()}
              </span>
            )}
          </h2>
          <button
            onClick={closeDrawer}
            style={{
              background: 'transparent',
              border: '1px solid rgba(92,51,23,0.2)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '20px',
              color: 'rgba(44,24,16,0.5)',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s',
            }}
            aria-label="Đóng giỏ hàng"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0 20px',
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '12px',
                color: 'rgba(44,24,16,0.35)',
                paddingBottom: '40px',
              }}
            >
              <span style={{ fontSize: '48px' }}>🛒</span>
              <p style={{ fontSize: '15px', fontWeight: 500 }}>Giỏ hàng trống</p>
              <p style={{ fontSize: '13px' }}>Hãy khám phá cửa hàng nhé!</p>
              <Link
                href="/shop"
                onClick={closeDrawer}
                style={{
                  marginTop: '8px',
                  padding: '9px 20px',
                  borderRadius: '10px',
                  background: '#C8392B',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Vào Shop →
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={`${item.product_id}-${item.size ?? 'nosize'}`}
                item={item}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: '16px 20px 20px',
              borderTop: '1px solid rgba(92,51,23,0.12)',
              background: '#FBF5E6',
              flexShrink: 0,
            }}
          >
            {/* Tổng */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '14px',
              }}
            >
              <span style={{ fontSize: '14px', color: 'rgba(44,24,16,0.6)' }}>Tổng cộng</span>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#C8392B',
                }}
              >
                {formatPrice(totalPrice())}
              </span>
            </div>

            <p style={{ fontSize: '12px', color: 'rgba(44,24,16,0.4)', marginBottom: '14px' }}>
              Miễn phí vận chuyển toàn quốc 🎉
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link
                href="/checkout"
                onClick={closeDrawer}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px',
                  borderRadius: '12px',
                  background: '#C8392B',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.3px',
                }}
              >
                Thanh toán →
              </Link>
              <button
                onClick={closeDrawer}
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(92,51,23,0.25)',
                  background: 'transparent',
                  color: 'rgba(44,24,16,0.6)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
