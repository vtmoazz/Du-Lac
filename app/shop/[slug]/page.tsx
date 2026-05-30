import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import Badge from '@/components/ui/Badge'
import AddToCartButton from '@/components/shop/AddToCartButton'
import { type Product, CATEGORY_LABELS, formatPrice, getEffectivePrice } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = await supabase
    .from('products')
    .select('name, description')
    .eq('slug', slug)
    .single()

  if (!data) return { title: 'Sản phẩm không tồn tại' }
  return {
    title: data.name,
    description: data.description ?? undefined,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (!product || error) notFound()

  const p = product as Product
  const effectivePrice = getEffectivePrice(p)
  const isOnSale = p.discount_price !== null && p.discount_price < p.price
  const mainImage = p.images[0] ?? null
  const thumbImages = p.images.slice(1)

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* Breadcrumb */}
      <nav style={{ fontSize: '13px', color: 'rgba(44,24,16,0.45)', marginBottom: '32px' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Trang chủ</a>
        {' / '}
        <a href="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</a>
        {' / '}
        <span style={{ color: '#2C1810' }}>{p.name}</span>
      </nav>

      {/* Layout 2 cột */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Cột trái — ảnh */}
        <div>
          {/* Ảnh chính */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              background: '#FFF3C4',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid rgba(92,51,23,0.12)',
            }}
          >
            {mainImage ? (
              <Image
                src={mainImage}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '72px',
                  color: 'rgba(92,51,23,0.2)',
                }}
              >
                🎨
              </div>
            )}
            {isOnSale && (
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: '#C8392B',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}
              >
                SALE
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {thumbImages.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {thumbImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    width: '72px',
                    height: '72px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(92,51,23,0.2)',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={img}
                    alt={`${p.name} ảnh ${i + 2}`}
                    fill
                    sizes="72px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cột phải — thông tin */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Category */}
          <Badge label={CATEGORY_LABELS[p.category]} variant="amber" />

          {/* Tên */}
          <h1
            style={{
              fontFamily: '"Noto Serif Display", serif',
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 700,
              color: '#5C3317',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {p.name}
          </h1>

          {/* Giá */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '28px',
                fontWeight: 700,
                color: '#C8392B',
              }}
            >
              {formatPrice(effectivePrice)}
            </span>
            {isOnSale && (
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '16px',
                  color: 'rgba(44,24,16,0.4)',
                  textDecoration: 'line-through',
                }}
              >
                {formatPrice(p.price)}
              </span>
            )}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(92,51,23,0.12)' }} />

          {/* Mô tả */}
          {p.description && (
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(44,24,16,0.7)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {p.description}
            </p>
          )}

          {/* Nút thêm giỏ (client component) */}
          <AddToCartButton product={p} />
        </div>
      </div>
    </main>
  )
}
