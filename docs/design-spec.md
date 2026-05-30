# Du Lạc — Design Specification (v2 · Tươi Sáng · Dân Gian · Youth-Friendly)

> **Định hướng mới**: Sáng ấm · Màu Đông Hồ · Frame rối nước · Gần gũi giới trẻ
> Tham khảo layout: Figma "Game Website UI Dark" | Chất liệu: Behance "Như Đũa Có Đôi"

---

## Tổng quan phong cách
- **Mood**: Dân gian Việt Nam · Đông Hồ rực rỡ · Ấm áp · Trẻ trung
- **Cảm hứng**: Game Website UI Dark (layout) + tranh Đông Hồ + card game "Như Đũa Có Đôi"
- **Không gian**: Sáng ấm như giấy dó dưới nắng — không tối, không nặng nề

---

## Color Palette — "Đông Hồ Rực Rỡ"

```
Tên             Class Tailwind       Hex         Dùng cho
──────────────────────────────────────────────────────────────────
Giấy Dó Kem    dulac-cream          #FBF5E6     Background toàn trang
Giấy Vàng      dulac-parchment      #FFF3C4     Card, surface nhẹ
Đỏ Son         dulac-red            #C8392B     Button CTA, accent chính
Vàng Nghệ      dulac-amber          #E8A020     Tiêu đề, highlight, border
Xanh Lá Ngọc  dulac-jade           #2E7D52     Badge, tag, icon phụ
Nâu Gỗ Sẫm    dulac-brown          #5C3317     Border, frame, text heading
Đen Mực        dulac-ink            #2C1810     Body text chính
──────────────────────────────────────────────────────────────────
```

### Alias giữ tương thích code cũ (map 1:1, không cần sửa components)
```
dulac-dark   → dulac-cream   (#FBF5E6)
dulac-wood   → dulac-parchment (#FFF3C4)
dulac-terra  → dulac-red     (#C8392B)
dulac-gold   → dulac-amber   (#E8A020)
dulac-moss   → dulac-jade    (#2E7D52)
dulac-paper  → dulac-ink     (#2C1810)
```

### Cách dùng màu theo ngữ cảnh

**Background hierarchy:**
```
Trang:     bg-dulac-cream         (#FBF5E6)
Section:   bg-dulac-parchment/60  (xen kẽ các section)
Card:      bg-white hoặc bg-dulac-parchment
Hover:     bg-dulac-parchment/80
```

**Text hierarchy:**
```
Heading H1/H2:  text-dulac-red    — đỏ son nổi bật
Heading H3:     text-dulac-brown  — nâu gỗ
Body text:      text-dulac-ink/80
Muted text:     text-dulac-ink/40
```

**Button:**
```
Primary:   bg-dulac-red text-white hover:bg-dulac-red/90
Secondary: border-2 border-dulac-amber text-dulac-brown hover:bg-dulac-amber/10
Ghost:     text-dulac-ink/60 hover:text-dulac-ink
```

**Border:**
```
Default:   border-dulac-brown/30
Highlight: border-dulac-amber/60
Focus:     border-dulac-red
```

---

## Typography

```
Font heading (H1/H2):  Noto Serif Display — serif cổ điển, Google Fonts
Font body:             Be Vietnam Pro / Inter — đọc tốt, trẻ trung
Font mono:             JetBrains Mono (giá, số liệu)
```

**Scale:**
```
Hero title:    text-5xl md:text-7xl font-bold tracking-tight
H2 section:    text-3xl md:text-4xl font-bold
H3 card:       text-xl font-semibold
Body:          text-base (16px) leading-relaxed
Caption:       text-sm text-dulac-ink/60
```

---

## Chất Liệu Dân Gian (Visual Language)

Học từ **Như Đũa Có Đôi** (Behance) — tích hợp vào UI:

### Đường viền & Frame
- **Frame rối nước / sân khấu chèo**: Viền cong 2 bên như mái đình, màu dulac-brown `#5C3317`
- **Hoa văn trống đồng**: SVG pattern làm section divider
- **Khung sách cổ**: Cho About section — giữ phong cách như ảnh thiết kế gốc
- **Lá sen & hoa sen**: Góc trang trí, màu dulac-jade

### Icon Style (Đông Hồ-inspired)
- Nét viền đậm, màu phẳng, không gradient phức tạp
- Icons theo chủ đề: 🥁 trống bỏi · 🎭 mặt nạ rối · 📜 cuộn giấy · 🏮 đèn lồng · 🌸 hoa sen · 🎋 tre

### Pattern & Texture
- Texture giấy dó nhẹ (opacity 4–6%) trên background cream
- SVG hoa văn trống đồng làm horizontal divider giữa sections
- Radial warm glow ở hero: `rgba(200, 57, 43, 0.08)` từ giữa ra ngoài

---

## Spacing & Layout

```
Container:     max-w-7xl mx-auto px-4 md:px-8
Section:       py-16 md:py-24
Card:          p-6 md:p-8
Grid gap:      gap-6 md:gap-8
Border radius: rounded-xl (cards), rounded-lg (buttons), rounded-full (badges)
```

---

## Animation & Effects

```css
/* Fade in khi scroll */
transition: opacity 0.6s ease, transform 0.6s ease;
transform: translateY(20px) → translateY(0);

/* Hover card */
hover: translateY(-4px), border-color: dulac-amber/60

/* Button press */
active: scale(0.97)

/* Cart drawer slide */
transform: translateX(100%) → translateX(0)
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### Texture & Divider
- Noise texture SVG (opacity 4%) trên `bg-dulac-cream`
- Section divider: `border-y border-dulac-brown/20` + icon hoa sen ở giữa
- Hero: `radial-gradient(ellipse at center, rgba(200,57,43,0.08) 0%, transparent 70%)`

---

## Component Visual Guide

### Hero Section
```
- Full viewport height (min-h-screen)
- Background: gradient #FFF8E0 → #FBF5E6 + noise texture 4%
- Frame dân gian 2 bên (mái đình / rối nước) màu dulac-brown
- Radial glow đỏ son nhẹ ở giữa
- Tiêu đề: text-dulac-red, Noto Serif Display, bold, tracking-tight
- Subtitle: text-dulac-brown/70, Be Vietnam Pro
- CTA 1: bg-dulac-red text-white (primary)
- CTA 2: border-2 border-dulac-amber text-dulac-brown (secondary)
- Nhân vật pixel art Đông Hồ style ở dưới
- Animated scroll arrow (bounce)
```

### Product Card (Shop)
```
- bg-white border-2 border-dulac-brown/20 rounded-xl
- Ảnh: aspect-1:1, bg-dulac-parchment, object-cover
- Hover: border-dulac-amber/60, translateY(-4px), shadow-amber
- Badge category: bg-dulac-jade/15 text-dulac-jade border border-dulac-jade/30
- Giá: text-dulac-red font-bold (JetBrains Mono)
- Button "Thêm vào giỏ": bg-dulac-red text-white full-width
```

### Cart Drawer
```
- Slide từ phải, w-80 md:w-96
- Background: bg-dulac-cream border-l-2 border-dulac-brown/20
- Header: "Giỏ Hàng" text-dulac-brown font Noto Serif Display
- Item: flex, ảnh nhỏ rounded-lg, tên, giá đỏ son, nút xóa
- Footer sticky: tổng tiền + nút "Thanh Toán" bg-dulac-red
```

### Navigation
```
- sticky top-0 backdrop-blur-md bg-dulac-cream/90
- border-b border-dulac-brown/20
- Logo: text-dulac-red font-bold Noto Serif Display
- Links: text-dulac-ink/70 hover:text-dulac-red
- Cart icon: badge bg-dulac-red text-white
- Mobile: hamburger → slide menu từ trái
```

---

## Responsive Breakpoints

```
Mobile:  < 768px    — 1 cột, font nhỏ hơn
Tablet:  768–1024px — 2 cột
Desktop: > 1024px   — 3–4 cột shop, full layout
```

---

## Danh Sách Sản Phẩm Shop

### Bộ Kit DIY
- Bộ Kit Rối Nước Tự Làm — 280.000₫
- Bộ Kit Trống Bỏi Mini — 150.000₫
- Bộ Kit Đèn Lồng Dân Gian — 120.000₫

### Board Game & Card Game
- Board Game Ô Ăn Quan (gỗ MDF cao cấp) — 350.000₫
- Card Game Như Đũa Có Đôi (80 thẻ Đông Hồ) — 220.000₫
- Domino Dân Gian Du Lạc — 180.000₫

### Sticker & Acrylic
- Sticker Pack Nhân Vật Du Lạc (20 sticker holo) — 85.000₫
- Acrylic Stand Nhân Vật (3 nhân vật + chân đế) — 145.000₫
- Móc Khóa Rối Nước (5 mẫu) — 65.000₫

### Sách & Sổ Tay
- Sổ Tay Lữ Hành Du Lạc (A5, bìa cứng) — 195.000₫
- Artbook Du Lạc Tập 1 — 320.000₫

---

---

## Component Visual Guide — Bổ sung Phase 2

### Product Card — Discount State
```
- Khi có discount_price:
  Badge "SALE" absolute top-2 right-2: bg-dulac-red text-white text-xs px-2 py-0.5 rounded-full
  Giá mới: text-dulac-red font-bold text-lg (JetBrains Mono)
  Giá cũ: line-through text-dulac-ink/40 text-sm ml-1
- Khi không có discount: chỉ hiển thị price bình thường
```

### Episode Carousel
```
- Container: relative overflow-hidden rounded-2xl
- Track: flex transition-transform duration-500 ease-in-out
- Arrows: absolute left/right center, bg-dulac-cream border border-dulac-brown/30 rounded-full p-2
- Dots: flex gap-2 justify-center mt-4 — dot active: bg-dulac-red, inactive: bg-dulac-brown/30

Card — trạng thái "available" (Tập 1, Tập 2):
  - border-2 border-dulac-brown/20 rounded-xl bg-dulac-parchment
  - Active: border-dulac-amber shadow-lg scale-[1.02]
  - Ảnh episode: aspect-video rounded-lg object-cover (full opacity)
  - Badge top-left: "● Có thể xem" — bg-dulac-jade/15 text-dulac-jade border border-dulac-jade/30 rounded-full text-xs px-2
  - Title: text-dulac-brown font-bold Noto Serif
  - Summary: text-dulac-ink/70 text-sm line-clamp-2
  - Nút "Xem Trailer ▶": bg-dulac-red text-white rounded-lg w-full hover:bg-dulac-red/90

Card — trạng thái "coming_soon" (Tập 3+):
  - border-2 border-dulac-brown/10 rounded-xl bg-dulac-parchment/60
  - Ảnh: opacity-40 grayscale, overlay "🔒" icon giữa ảnh (text-4xl)
  - Badge top-left: "🔒 Sắp Ra Mắt" — bg-dulac-brown/10 text-dulac-brown/50 border border-dulac-brown/20 rounded-full text-xs px-2
  - Title: text-dulac-brown/50 font-bold Noto Serif
  - Summary: text-dulac-ink/40 text-sm line-clamp-2
  - Nút disabled: border border-dulac-brown/20 text-dulac-ink/30 rounded-lg w-full cursor-not-allowed
    text: "Sắp Ra Mắt..."
  - Hover tooltip (title attr): "Tập truyện đang trong quá trình phát triển"
```

---

### Lore Page — Cốt Truyện (Scrollable Timeline Accordion)

> **Quyết định thiết kế**: Dùng timeline accordion thay vì ảnh truyện tranh.
> Timeline làm được ngay không cần artwork, SEO tốt hơn, dễ cập nhật.
> Khi có artwork sau này có thể bổ sung ảnh minh họa nhỏ vào từng chapter mà không phá layout.

**Layout tổng thể trang `/lore`:**
```
┌─────────────────────────────────────────┐
│  HERO                                   │
│  eyebrow: "Cốt truyện gốc · Background" │
│  h1: "Du Lạc — Hành Trình Ngược Dòng   │
│        Ký Ức"  (Noto Serif, text-red)   │
│  subtitle: 1-2 dòng mô tả              │
├─────────────────────────────────────────┤
│  CHAPTER NAV PILLS (sticky top)         │
│  [I·Tuổi trẻ] [II·Biến cố] [III·Đứt   │
│   gãy] [IV·Thức tỉnh] [V·Hành trình]  │
│  Active pill: bg-dulac-red text-white   │
├─────────────────────────────────────────┤
│  TIMELINE (vertical, accordion)         │
│  Đường dọc: gradient đỏ→vàng→xanh      │
│  Mỗi chapter: header click → mở/đóng  │
│  Mỗi event: dot + icon + title + text  │
├─────────────────────────────────────────┤
│  QUOTE BLOCK                            │
│  border-left-4 border-dulac-amber       │
│  "Những ký ức không mất đi..."         │
│  — Lan Anh, Prologue Du Lạc            │
├─────────────────────────────────────────┤
│  "DU LẠC LÀ GÌ?" CARD                  │
│  Định nghĩa + format tags              │
├─────────────────────────────────────────┤
│  EPISODE CAROUSEL (trailer tập 1 & 2)  │
├─────────────────────────────────────────┤
│  REVIEWS SECTION                        │
│  Featured reviews + form gửi đánh giá  │
└─────────────────────────────────────────┘
```

**Timeline structure:**
```
Đường dọc: 2px, gradient #C8392B → #E8A020 → #2E7D52
Chapter node: circle 18px bg màu theo chapter
Event dot: circle 8px, màu theo trạng thái event
  - Sự kiện tích cực: #2E7D52
  - Sự kiện trung tính: #E8A020
  - Sự kiện bi kịch/đứt gãy: #C8392B
  - Sự kiện chưa xảy ra: dashed border, transparent bg
```

**5 Chapters và màu sắc:**
```
I   · Đôi bạn thanh xuân    → dulac-red    #C8392B
II  · Biến cố trớ trêu      → dulac-brown  #5C3317
III · 3 năm đằng đẵng       → gray         #888
IV  · Sự thức tỉnh           → dulac-jade   #2E7D52
V   · Hành trình mới         → dulac-red    #C8392B  (vòng lặp, khởi đầu mới)
```

**Chapter header style:**
```
- Flex row: [chapter-node] [eyebrow label] [chapter title] [chevron ↓]
- Click → toggle accordion open/close với transition max-height 0.35s
- Chevron rotate 180deg khi open
- Mặc định: tất cả open (người đọc mới thấy full story)
```

**Event item style:**
```
- Relative position, dot absolute left: -19px
- Icon emoji: text-lg mb-1
- Title: font-weight 500 text-dulac-ink
- Body: text-sm text-dulac-ink/70 leading-relaxed border-l-2 border-dulac-brown/20 pl-3
- Tag badge (tùy chọn): text-xs border rounded-full px-2 py-0.5 mt-1
```

### Review Card (Lore Page)
```
- bg-white border border-dulac-brown/15 rounded-xl p-5 shadow-sm
- Avatar: w-10 h-10 rounded-full — ảnh hoặc initials (bg-dulac-amber/30 text-dulac-brown font-bold)
- Stars: text-dulac-amber (filled ★), text-dulac-brown/20 (empty ☆), size text-sm
- Content: italic text-dulac-ink/80 leading-relaxed line-clamp-3
- Date: text-dulac-ink/40 text-xs
- Featured badge: border-l-4 border-dulac-amber (ghim nổi bật)
```

### Team Card (About Page)
```
- bg-white border-2 border-dulac-brown/15 rounded-2xl p-6 text-center
- Avatar: w-24 h-24 rounded-full mx-auto border-4 border-dulac-parchment shadow
  - Fallback initials: bg-dulac-amber/20 text-dulac-brown text-2xl font-bold
- Name: text-dulac-brown font-bold text-lg Noto Serif
- Role Badge: variant theo role
  - Dev/Engineer: bg-dulac-jade/15 text-dulac-jade
  - Designer: bg-dulac-red/10 text-dulac-red
  - Sound/Music: bg-dulac-amber/20 text-dulac-brown
- Bio: text-dulac-ink/70 text-sm leading-relaxed mt-2
- Social link: lucide ExternalLink icon, hover text-dulac-red
- Hover card: border-dulac-amber/60 translateY(-4px)
```

### Puzzle Card
```
- bg-dulac-parchment border-2 border-dulac-brown/30 rounded-2xl p-8 max-w-xl mx-auto
- Title: text-dulac-red font-bold text-2xl Noto Serif + 🔮 icon
- Description: text-dulac-ink/80 leading-relaxed
- Input đáp án: full-width bg-white border-2 border-dulac-brown/30 focus:border-dulac-red
  font-mono tracking-wider uppercase
- Submit button: bg-dulac-red text-white full-width
- Success state: bg-dulac-jade/10 border-dulac-jade text-dulac-jade — reward key mono
- Error state: shake animation + border-red-400 message
```

### Hint Feed
```
- Section title: "💬 Gợi Ý Từ Cộng Đồng" text-dulac-brown
- Hint item: flex gap-3 py-3 border-b border-dulac-brown/10
  - Avatar alias: w-8 h-8 bg-dulac-amber/20 rounded-full text-xs font-bold text-dulac-brown
  - Content: text-dulac-ink/80 text-sm italic
  - Upvotes: text-dulac-jade text-xs "▲ 12"
- "Để lại gợi ý" textarea: max 140 ký tự, submit nhỏ
- Empty state: "Chưa có gợi ý nào. Hãy là người đầu tiên!" text-dulac-ink/40
```

---

## Assets cần thiết

- [ ] Logo Du Lạc (PNG transparent + SVG) — style Đông Hồ
- [ ] Hero illustration: nhân vật + background dân gian
- [ ] Frame rối nước SVG (dùng lại nhiều chỗ)
- [ ] Icon set dân gian: trống, sen, rối, đèn lồng, tre, cuộn giấy
- [ ] Ảnh sản phẩm: kit DIY, board game, sticker, acrylic, sổ tay
- [ ] Screenshot gameplay / gallery (6 ảnh)
- [ ] **Ảnh episode x4** (tỷ lệ 16:9, cho carousel trang Lore)
- [ ] **Ảnh avatar thành viên** (tỷ lệ 1:1, tối thiểu 200×200px)
- [ ] YouTube trailer link
- [ ] Favicon (32×32, 64×64)
- [ ] OG Image (1200×630) cho social share
