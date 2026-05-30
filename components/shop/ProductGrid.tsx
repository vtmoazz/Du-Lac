'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import { type Product, type ProductCategory, CATEGORY_LABELS } from '@/types'

interface ProductGridProps {
  products: Product[]
}

const ALL = 'all'
type FilterValue = ProductCategory | typeof ALL

const FILTER_TABS: { value: FilterValue; label: string }[] = [
  { value: ALL, label: 'Tất cả' },
  { value: 'kit_diy', label: CATEGORY_LABELS.kit_diy },
  { value: 'board_game', label: CATEGORY_LABELS.board_game },
  { value: 'sticker', label: CATEGORY_LABELS.sticker },
  { value: 'acrylic', label: CATEGORY_LABELS.acrylic },
  { value: 'sach', label: CATEGORY_LABELS.sach },
]

export default function ProductGrid({ products }: ProductGridProps) {
  const [active, setActive] = useState<FilterValue>(ALL)

  const filtered = active === ALL
    ? products
    : products.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '32px',
        }}
      >
        {FILTER_TABS.map((tab) => {
          const isActive = active === tab.value
          return (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              style={{
                padding: '7px 18px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                border: isActive ? 'none' : '1.5px solid rgba(92,51,23,0.25)',
                background: isActive ? '#C8392B' : 'transparent',
                color: isActive ? '#fff' : 'rgba(44,24,16,0.6)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 0',
            color: 'rgba(44,24,16,0.4)',
            fontSize: '15px',
          }}
        >
          Chưa có sản phẩm trong danh mục này.
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
