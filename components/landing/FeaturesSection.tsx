import SectionTitle from '@/components/ui/SectionTitle'

const features = [
  {
    icon: '🎮',
    title: 'Versatile Gameplay',
    desc: 'PC, điện thoại, máy tính bảng — chơi mọi lúc mọi nơi với tương tác đa dạng.',
  },
  {
    icon: '🏛',
    title: 'Cultural Immersion',
    desc: 'Khám phá 20+ lễ hội và phong tục truyền thống Việt Nam qua từng tập game.',
  },
  {
    icon: '🥁',
    title: 'Ethnic Soundscapes',
    desc: 'Nhạc cụ dân tộc thực tế — đàn bầu, trống bỏi, sáo trúc thu âm trực tiếp.',
  },
  {
    icon: '🎨',
    title: 'Heritage Art Style',
    desc: 'Pixel art lấy cảm hứng từ tranh Đông Hồ và nghệ thuật dân gian truyền thống.',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="game"
      style={{ padding: '5rem 0', backgroundColor: '#FFF3C4' }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <SectionTitle
          title="Tại Sao Du Lạc?"
          subtitle="Bốn trụ cột làm nên trải nghiệm văn hóa độc đáo chưa từng có."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1.5rem',
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '2px solid rgba(92,51,23,0.25)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: '0 2px 16px rgba(44,24,16,0.08)',
              }}
            >
              <span style={{ fontSize: '40px', lineHeight: 1 }}>{f.icon}</span>
              <div>
                <h3
                  style={{
                    fontFamily: 'Noto Serif Display, Georgia, serif',
                    fontWeight: 600,
                    color: '#5C3317',
                    fontSize: '1.125rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(44,24,16,0.65)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider hoa sen */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '4rem',
          }}
        >
          <div style={{ height: '1px', width: '6rem', backgroundColor: 'rgba(232,160,32,0.4)' }} />
          <span style={{ color: '#E8A020', fontSize: '1.5rem' }}>❋</span>
          <div style={{ height: '1px', width: '6rem', backgroundColor: 'rgba(232,160,32,0.4)' }} />
        </div>
      </div>
    </section>
  )
}
