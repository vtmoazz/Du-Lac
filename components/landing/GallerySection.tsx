import SectionTitle from '@/components/ui/SectionTitle'

interface GallerySectionProps {
  images?: string[]
}

const placeholders = [
  'Tập 1: Tiếng Trống Thức Tỉnh (Hà Nội)',
  'Tập 2: Hội An Dưới Ánh Đèn Lồng',
  'Tập 3: Rừng Cấm Tây Bắc',
  'Tập 4: Làng Gốm Bát Tràng',
  'Tập 5: Chợ Nổi Cửu Long',
  'Tập 6: Thánh Địa Mỹ Sơn',
]

export default function GallerySection({ images = [] }: GallerySectionProps) {
  const items = images.length > 0 ? images : placeholders

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#FBF5E6' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <SectionTitle
          title="Hành Trình Của Lữ Khách"
          subtitle="Mỗi tập game là một vùng đất mới — mỗi lựa chọn là một ký ức Việt Nam."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.5rem',
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(92,51,23,0.2)',
                cursor: 'pointer',
              }}
            >
              {images.length > 0 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item}
                  alt={`Screenshot ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#FFF3C4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '32px', lineHeight: 1 }}>🎮</span>
                  <p
                    style={{
                      color: 'rgba(92,51,23,0.6)',
                      fontSize: '0.75rem',
                      textAlign: 'center',
                      padding: '0 1rem',
                      lineHeight: '1.4',
                    }}
                  >
                    {item}
                  </p>
                </div>
              )}

              {/* Badge tập số */}
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  backgroundColor: 'rgba(92,51,23,0.8)',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '999px',
                }}
              >
                Tập {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
