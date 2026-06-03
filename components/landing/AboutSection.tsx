import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { BookOpen } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-dulac-parchment/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Khung sách cổ — trái */}
          <div className="relative">
            {/* Border trang trí kiểu sách cổ */}
            <div className="relative bg-white rounded-2xl border-2 border-dulac-brown/20 p-8 shadow-card">
              {/* Góc trang trí */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-dulac-amber/50 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-dulac-amber/50 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-dulac-amber/50 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-dulac-amber/50 rounded-br-lg" />

              {/* Tab nhãn "Về Du Lạc" */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-dulac-brown/15">
                <BookOpen size={18} className="text-dulac-red" />
                <span className="font-serif font-semibold text-dulac-brown text-sm tracking-wide">Về Du Lạc</span>
                <div className="flex-1" />
                <span className="text-xs text-dulac-ink/40 italic">Travel Journal</span>
              </div>

              {/* Nội dung */}
              <h3 className="font-serif text-xl font-bold text-dulac-red mb-3">
                Sứ mệnh &ldquo;Sống lại&rdquo; giá trị cũ
              </h3>
              <p className="text-dulac-ink/70 text-sm leading-relaxed mb-4">
                Chúng tôi là một nhóm sinh viên mang trong mình tình yêu cháy bỏng với cội nguồn. Nhận thấy người trẻ ngày nay dần xa rời những giá trị truyền thống vì sách vở quá khó khan, Du Lạc ra đời với định vị là một <strong className="text-dulac-brown">Gaming Hub Văn Hóa</strong>.
              </p>
              <p className="text-dulac-ink/70 text-sm leading-relaxed">
                Chúng tôi không dạy lý thuyết, chúng tôi mời bạn trực tiếp nhập vai, tự tay chuẩn bị mâm cúng, gõ nhịp trống hội để thấy văn hóa Việt Nam sống động và gần gũi đến nhường nào.
              </p>

              {/* Quote */}
              <blockquote className="mt-5 pl-4 border-l-4 border-dulac-amber italic text-dulac-ink/55 text-sm">
                &ldquo;Chuyện cũ tích xưa, đón đưa người trẻ.&rdquo;
                <footer className="mt-2 not-italic font-medium text-dulac-brown/70 text-xs">— Du Lạc</footer>
              </blockquote>
            </div>
          </div>

          {/* Text phải */}
          <div>
            <SectionTitle
              title="Văn Hóa Việt Nam Trong Từng Màn Chơi"
              subtitle="Du Lạc không chỉ là game — đó là cách thế hệ trẻ chạm tay vào lịch sử, cảm nhận âm nhạc dân tộc và sống lại những lễ hội đã gần như bị lãng quên."
              align="left"
            />

            <div className="space-y-4 mb-8">
              {[
                { icon: '🏛', title: 'Hành trình lữ khách', desc: 'Khám phá 20+ vùng đất Việt Nam qua các tập phiêu lưu tương tác.' },
                { icon: '🎵', title: 'Âm nhạc dân tộc thực tế', desc: 'OST kết hợp đàn bầu, trống bỏi, sáo trúc — thu âm thực tế.' },
                { icon: '🎭', title: 'Lựa chọn tạo nên số phận', desc: 'Mỗi quyết định của bạn thay đổi câu chuyện và kết thúc của lữ khách.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-dulac-brown text-sm">{f.title}</p>
                    <p className="text-dulac-ink/60 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" size="md" href="/#game">
              Khám Phá Thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
