# Du Lạc — Kế hoạch triển khai (Ngày 0 + 3 ngày)

> **Mục tiêu**: Từ folder rỗng → website live trên Vercel có landing page + shop + cart + checkout + auth.
> **Stack**: Next.js 14 · Tailwind · Supabase · Zustand · Vercel
> **Quy ước**: Mỗi task có ✅ khi xong. Cập nhật `CLAUDE.md > Current Session Focus` trước mỗi buổi.

---

## NGÀY 0 (Buổi sáng) — Figma Design `(4h)`
> **Mục tiêu**: Có đủ 5 màn hình thiết kế làm reference trước khi code.
> **Nguyên tắc**: Không vẽ từ đầu — duplicate file có sẵn, đổi màu + nội dung + thêm màn hình mới.
> **Figma base**: [Game Website UI Dark](https://www.figma.com/community/file/1629878331978556191/game-website-ui-dark)
> **Design direction v2**: Sáng ấm · Đông Hồ rực rỡ · Youth-friendly (xem `docs/design-spec.md`)

---

### Task F0.1 — Duplicate file + đổi màu sang palette Đông Hồ `(60 phút)`

**Bước 1 — Duplicate file:**
- Vào link Figma Community bên trên → click **"Duplicate"** → file copy về account

**Bước 2 — Cài plugin đổi màu:**
- Mở Figma → Resources (Shift+I) → Plugins → tìm **"Find and Replace Color"** → Install

**Bước 3 — Đổi toàn bộ màu sang Du Lạc v2 (sáng):**

| Màu gốc (dark) | Hex gốc | Đổi thành | Hex Du Lạc v2 |
|---|---|---|---|
| Nền tối nhất | `#0D0D0D` / `#111` | Giấy Dó Kem | `#FBF5E6` |
| Surface/card | `#1A1A1A` / `#222` | Trắng kem | `#FFFDF5` |
| Accent xanh/tím | `#6C63FF` / `#00D4FF` | Đỏ Son | `#C8392B` |
| Heading trắng | `#FFFFFF` | Nâu Gỗ Sẫm | `#5C3317` |
| Accent highlight | màu sáng | Vàng Nghệ | `#E8A020` |
| Badge/tag | màu phụ | Xanh Lá Ngọc | `#2E7D52` |
| Body text | `#CCC` / `#E0E0E0` | Đen Mực | `#2C1810` |

**Bước 4 — Setup Color Styles trong Figma:**
Tạo Color Styles (panel bên phải → Local styles → +):
- `cream / background` → `#FBF5E6`
- `red / primary` → `#C8392B`
- `amber / gold` → `#E8A020`
- `jade / success` → `#2E7D52`
- `brown / frame` → `#5C3317`
- `ink / text` → `#2C1810`

**Bước 5 — Đổi font:**
- Select All → Set Heading font: **Noto Serif Display** (Google Fonts)
- Body font: **Be Vietnam Pro** hoặc Inter

**Done khi**: Toàn file có tone cream ấm, đỏ son, vàng nghệ — sáng và rực rỡ, không tối.

---

### Task F0.2 — Thêm chất liệu dân gian `(30 phút)`

**Frame rối nước cho Hero (vẽ trong Figma):**
1. Tạo 2 Rectangle: W=80px, H=500px, màu `#5C3317`
2. Bo góc trên: corner radius = 40px chỉ 2 góc trên
3. Thêm chi tiết: overlay pattern nhỏ opacity 20%
4. Đặt 2 bên Hero section như cột mái đình

**Section divider hoa văn:**
1. Line ngang: `border: 1px solid #E8A020, opacity 40%`
2. Giữa line: đặt icon hoa sen (tìm trong Figma Community: "lotus icon")
3. Copy divider này dùng giữa các section

**Tìm assets dân gian trên Figma Community:**
- Search: "Vietnamese folk art" → lấy border / illustration
- Search: "lotus ornament" → lấy divider elements
- Search: "traditional frame ornament" → lấy khung trang trí

**Done khi**: Hero có 2 frame cột dân gian 2 bên, các section có divider hoa sen.

---

### Task F0.3 — Chỉnh Landing Page screens `(45 phút)`

File gốc đã có: Hero, Features, Gallery, Footer. Chỉ cần **đổi nội dung + màu**.

**Hero section:**
- Background: gradient `#FFF8E0` → `#FBF5E6` (thay nền tối)
- Thêm radial glow: `rgba(200,57,43,0.08)` oval ở giữa
- Tiêu đề: `DU LẠC: CHƠI ĐỂ CHẠM – CHẠM ĐỂ CHỮA LÀNH`
  - Font: Noto Serif Display, Bold, màu `#C8392B`
- Subtitle: `Nền tảng game tương tác biến hành trình khám phá văn hóa Việt Nam thành chuyện "phuợt" mãn nhãn dành riêng cho thế hệ trẻ`
  - Font: Be Vietnam Pro, màu `#5C3317/70`
- CTA 1: `[Chơi Bản Thử Nghiệm ▶]` — bg `#C8392B`, text trắng
- CTA 2: `[Xem Trailer]` — border-2 `#E8A020`, text `#5C3317`
- Frame dân gian 2 bên (từ F0.2)

**About section ("Về Du Lạc"):**
- Layout sách cổ 2 cột: text trái, ảnh phải — giống ảnh thiết kế gốc
- Background: `#FFF3C4` nhạt
- Text: màu `#2C1810`, font Be Vietnam Pro

**Features (4 cards):**
- 🎮 `Versatile Gameplay` — PC, mobile, tablet
- 🏛 `Cultural Immersion` — 20+ lễ hội văn hóa
- 🥁 `Ethnic Soundscapes` — Nhạc cụ dân tộc thực tế
- 🎨 `Heritage Art Style` — Pixel art phong cách truyền thống

**Gallery section:**
- 6 placeholder rectangles, bg `#FFF3C4`
- Label mỗi ô: "Screenshot gameplay"

**Trailer section:**
- Rectangle tỷ lệ 16:9, bg `#FBF5E6`, border `#5C3317`
- Icon Play ở giữa, màu `#C8392B`
- Label: `Trailer Du Lạc — YouTube`

**Done khi**: Landing page đủ: Hero → About → Features → Gallery → Trailer → Shop Preview → Footer.

---

### Task F0.4 — Thiết kế Shop page + Product Cards `(45 phút)`

Frame mới: **1440 × 900**, đặt tên `Shop`.

```
┌─────────────────────────────────────────┐
│  NAVBAR (copy từ Landing, bg cream)     │
├─────────────────────────────────────────┤
│  SHOP HERO                              │
│  "Cửa Hàng Du Lạc"  (Noto Serif, red)  │
│  bg: dulac-parchment, py: 48px          │
│  Divider hoa sen bên dưới              │
├─────────────────────────────────────────┤
│  FILTER TABS                            │
│  [Tất cả] [Bộ Kit DIY] [Board Game]    │
│  [Sticker] [Acrylic] [Sách / Sổ tay]   │
├─────────────────────────────────────────┤
│  PRODUCT GRID (3 cột)                   │
│  ┌──────────┐┌──────────┐┌──────────┐  │
│  │  [ảnh]   ││  [ảnh]   ││  [ảnh]   │  │
│  │ Bộ Kit   ││ Ô Ăn     ││ Sticker  │  │
│  │ Rối Nước ││ Quan     ││ Du Lạc   │  │
│  │ 280.000₫ ││ 350.000₫ ││  85.000₫ │  │
│  │[Thêm vào]││[Thêm vào]││[Thêm vào]│  │
│  └──────────┘└──────────┘└──────────┘  │
└─────────────────────────────────────────┘
```

**Product Card style (Như Đũa Có Đôi inspired):**
- Container: `bg-white`, border `2px solid #5C3317/20`, rounded-xl
- Ảnh: aspect-square, bg `#FFF3C4` (placeholder kem)
- Badge trên ảnh: bg `#2E7D52/15` text `#2E7D52` border `#2E7D52/30`, rounded-full
- Tên: font Be Vietnam Pro semibold, màu `#2C1810`
- Giá: font JetBrains Mono bold, màu `#C8392B`
- Nút: bg `#C8392B` text trắng full-width rounded-lg

**Danh sách 6 sản phẩm mẫu:**
1. Bộ Kit Rối Nước Tự Làm — Badge "Kit DIY" — 280.000₫
2. Board Game Ô Ăn Quan — Badge "Board Game" — 350.000₫
3. Sticker Pack Du Lạc — Badge "Sticker" — 85.000₫
4. Card Game Như Đũa Có Đôi — Badge "Card Game" — 220.000₫
5. Acrylic Stand Nhân Vật — Badge "Acrylic" — 145.000₫
6. Sổ Tay Lữ Hành — Badge "Sổ tay" — 195.000₫

**Done khi**: Có 1 Product Card đẹp + grid 6 card + filter tabs.

---

### Task F0.5 — Thiết kế Product Detail + Cart Drawer `(30 phút)`

**Product Detail** — frame 1440×900:
```
┌──────────────────────┬──────────────────────┐
│  ẢNH SẢN PHẨM       │  THÔNG TIN           │
│  [ảnh lớn, bg kem]  │  Bộ Kit Rối Nước     │
│                      │  [Badge: Kit DIY]    │
│  [t1][t2][t3]        │  280.000 ₫           │
│  (thumbnails nhỏ)    │  ─────────────────── │
│                      │  Mô tả sản phẩm...   │
│                      │  ─────────────────── │
│                      │  Số lượng: [-] 1 [+] │
│                      │  [Thêm vào giỏ hàng] │
│                      │  Còn 50 sản phẩm     │
└──────────────────────┴──────────────────────┘
```

**Cart Drawer** — frame 380×900:
```
┌──────────────────────────────┐
│ 🛒 Giỏ Hàng (2)        [×]  │ ← Noto Serif, text-brown
├──────────────────────────────┤
│ [img] Bộ Kit Rối Nước        │
│       280.000 ₫              │
│       [-] 1 [+]        [×]   │
├──────────────────────────────┤
│ [img] Sticker Pack           │
│       85.000 ₫               │
│       [-] 2 [+]        [×]   │
├──────────────────────────────┤
│  Tổng cộng: 450.000 ₫        │
│  [    Xem giỏ hàng    ]      │
│  [  Thanh Toán  →     ]      │ ← bg-dulac-red
└──────────────────────────────┘
```

**Done khi**: Có frame Product Detail + Cart Drawer đủ để code theo.

---

### Task F0.6 — Checkout + Review toàn bộ `(30 phút)`

**Checkout** — frame 1440×900, layout 2 cột như ảnh thiết kế gốc.

Review checklist:
- [ ] Màu sáng ấm nhất quán trên tất cả frame?
- [ ] Navbar giống hệt trên tất cả frame?
- [ ] Frame dân gian / divider hoa sen có ở Hero và các section?
- [ ] Product card style nhất quán?
- [ ] CTA buttons màu đỏ son nổi bật?

Sau khi xong: Share link Figma public → paste vào `CLAUDE.md`.

**Done khi**: Có 5 frame hoàn chỉnh + Figma link public.

---

### Task F0.3 — Thiết kế Shop page `(45 phút)`

Tạo frame mới: **1440 × 900**, đặt tên `Shop`.

```
┌─────────────────────────────────────┐
│  NAVBAR (copy từ Landing)           │
├─────────────────────────────────────┤
│  SHOP HERO                          │
│  "Cửa Hàng Du Lạc"  (text-gold)    │
│  bg: dulac-wood/30, py: 48px        │
├─────────────────────────────────────┤
│  FILTER TABS                        │
│  [Tất cả] [Áo/Hoodie] [Sticker]    │
│           [Acrylic]                 │
├─────────────────────────────────────┤
│  PRODUCT GRID (3 cột)               │
│  ┌──────┐ ┌──────┐ ┌──────┐        │
│  │ img  │ │ img  │ │ img  │        │
│  │ tên  │ │ tên  │ │ tên  │        │
│  │ giá  │ │ giá  │ │ giá  │        │
│  │[Thêm]│ │[Thêm]│ │[Thêm]│        │
│  └──────┘ └──────┘ └──────┘        │
│  (duplicate product card × 6)       │
├─────────────────────────────────────┤
│  FOOTER (copy từ Landing)           │
└─────────────────────────────────────┘
```

**Product Card** (thiết kế 1 cái, duplicate × 5):
- Container: `#2E1F0F`, border `#3D2A14`, rounded-xl
- Ảnh: rectangle tỷ lệ 1:1, màu `#1A1208` (placeholder)
- Badge trên ảnh: `Áo` — bg `#4A6741`, text trắng, rounded-full
- Tên: `Áo Du Lạc Đen` — text `#F0E4C8`, font semibold
- Giá: `350.000 ₫` — text `#D4A853`, font bold
- Nút: `Thêm vào giỏ` — bg `#C4622D`, full-width, rounded-lg

**Done khi**: Có 1 Product Card đẹp + grid 6 card + filter tabs.

---

### Task F0.4 — Thiết kế Product Detail + Cart Drawer `(45 phút)`

**Product Detail** — frame 1440 × 900, đặt tên `Product Detail`:

```
┌─────────────────────────────────────┐
│  NAVBAR                             │
├──────────────────┬──────────────────┤
│  ẢNH SẢN PHẨM   │  THÔNG TIN       │
│                  │  Áo Du Lạc Đen  │
│  [ảnh lớn]       │  [Badge: Áo]    │
│                  │  350.000 ₫       │
│  [t1][t2][t3]    │  ─────────────  │
│  (thumbnails)    │  Chọn size:      │
│                  │  [S][M][L][XL]   │
│                  │  ─────────────  │
│                  │  Mô tả sản phẩm  │
│                  │  ...             │
│                  │  [Thêm vào giỏ] │
│                  │  Còn 50 sản phẩm│
└──────────────────┴──────────────────┘
```

**Cart Drawer** — frame 380 × 900, đặt tên `Cart Drawer` (vẽ như overlay panel):

```
┌──────────────────────┐
│ Giỏ hàng (2)    [X]  │  ← header, text-gold, border-bottom
├──────────────────────┤
│ [img] Áo Du Lạc Đen  │
│       Size: L        │
│       350.000 ₫      │
│       [-] 1 [+]  [x] │  ← controls
├──────────────────────┤
│ [img] Sticker Pack   │
│       85.000 ₫       │
│       [-] 2 [+]  [x] │
├──────────────────────┤
│                      │
│  Tổng: 520.000 ₫     │
│  [Xem giỏ hàng]      │
│  [Thanh toán  →]     │  ← bg-dulac-terra
└──────────────────────┘
```

**Done khi**: Có frame Product Detail + Cart Drawer panel đủ để code theo.

---

### Task F0.5 — Thiết kế Checkout page `(30 phút)`

Frame mới 1440 × 900, đặt tên `Checkout`:

```
┌─────────────────────────────────────┐
│  NAVBAR                             │
├──────────────────────┬──────────────┤
│  FORM THANH TOÁN     │  ORDER SUM   │
│  Họ và tên           │  ─────────── │
│  [_______________]   │  Áo DL Đen   │
│  Số điện thoại       │  ×1 = 350k   │
│  [_______________]   │  Sticker ×2  │
│  Địa chỉ             │  = 170k      │
│  [_______________]   │  ─────────── │
│  Quận / Huyện        │  Tổng: 520k  │
│  [_______________]   │  Ship: Miễn  │
│  Tỉnh / Thành phố    │  ─────────── │
│  [_______________]   │  520.000 ₫   │
│                      │              │
│  Thanh toán:         │              │
│  ◉ COD               │              │
│  ○ Chuyển khoản      │              │
│                      │              │
│  [  Đặt hàng  →  ]   │              │
└──────────────────────┴──────────────┘
```

**Done khi**: Checkout frame đủ 2 cột form + order summary.

---

### Task F0.6 — Review toàn bộ + xuất Figma link `(15 phút)`

Checklist review nhanh:
- [ ] Màu nhất quán trên tất cả 5 frame (Landing, Shop, Detail, Cart, Checkout)?
- [ ] Navbar giống hệt nhau trên tất cả frame?
- [ ] Text đọc được trên nền tối?
- [ ] Button CTA nổi bật, dễ nhìn?

Sau khi xong:
- Click **Share** (góc trên phải Figma) → copy link → paste vào `CLAUDE.md`:

```markdown
## Figma Design
Link: https://www.figma.com/file/YOUR_FILE_ID/Du-Lac
Screens: Landing, Shop, Product Detail, Cart Drawer, Checkout
```

**Done khi**: Có link Figma public, 5 màn hình thiết kế xong.

---

## NGÀY 1 — Setup + Design System
> **Mục tiêu cuối ngày**: Project chạy được trên localhost, có đủ UI primitive components, Navbar, Footer.

---

### 🌅 Buổi sáng — Project Setup (3h)

#### Task 1.1 — Khởi tạo Next.js project `(30 phút)`
```bash
# Chạy trong folder DuLacProject (đã có các file docs/, types/, store/, lib/)
npx create-next-app@latest . --typescript --tailwind --app --import-alias="@/*"

# Khi hỏi:
# ✓ Would you like to use ESLint? → Yes
# ✓ Would you like to use src/ directory? → No
# ✓ Overwrite tailwind.config.ts? → NO (giữ file đã có)
# ✓ Overwrite .gitignore? → NO (giữ file đã có)
```
**Done khi**: `npm run dev` chạy được tại `localhost:3000`.

---

#### Task 1.2 — Cài dependencies `(15 phút)`
```bash
npm install zustand @supabase/supabase-js lucide-react
npm install -D @types/node
```
**Done khi**: `npm run build` không báo lỗi missing module.

---

#### Task 1.3 — Tạo `.env.local` `(15 phút)`
```bash
# Sao chép từ template
cp .env.example .env.local
```
Điền giá trị thật vào `.env.local`:
- Vào [supabase.com](https://supabase.com) → Project Settings → API → lấy URL + anon key
- Vào [cloudinary.com](https://cloudinary.com) → Dashboard → lấy cloud name

**Done khi**: Không còn lỗi "Thiếu NEXT_PUBLIC_SUPABASE_URL" khi `npm run dev`.

---

#### Task 1.4 — Setup Supabase database `(45 phút)`
Vào Supabase Dashboard → SQL Editor → chạy lần lượt:

1. Copy toàn bộ SQL từ `docs/db-schema.md` phần **Table: products**
2. Copy SQL phần **Table: profiles**
3. Copy SQL phần **Table: orders**
4. Copy SQL phần **Trigger: Auto-create profile**
5. Copy SQL phần **Seed Data**

**Done khi**: Vào Supabase → Table Editor → thấy 3 bảng `products`, `profiles`, `orders` + có 3 sản phẩm trong `products`.

---

#### Task 1.5 — Setup GitHub + Vercel `(45 phút)`
```bash
git init
git add .
git commit -m "feat: initial project setup"
# Tạo repo mới trên github.com → copy remote URL
git remote add origin https://github.com/YOUR_USERNAME/dulac-website.git
git push -u origin main
```
Sau đó:
- Vào [vercel.com](https://vercel.com) → New Project → Import repo vừa tạo
- Thêm Environment Variables (copy từ `.env.local`)
- Deploy

**Done khi**: Vercel build thành công, URL live chạy được (dù chỉ có trang Next.js mặc định).

---

### ☀️ Buổi chiều — App Layout + UI Primitives (3h)

> **Cập nhật CLAUDE.md**: `Đang build UI primitive components — Button, Card, Badge, Input`

#### Task 1.6 — Setup `app/layout.tsx` `(20 phút)`
**Claude Code prompt:**
```
Update app/layout.tsx:
- Add Inter font from next/font/google
- Set html className: font-sans
- Set body className: bg-dulac-dark text-dulac-paper min-h-screen
- Import and render Navbar and Footer (create placeholder files if needed)
- Add metadata: title "Du Lạc", description ngắn về game
```
**File**: `app/layout.tsx`
**Done khi**: Trang có nền `#12100E`, chữ màu kem.

---

#### Task 1.7 — Build `Button.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build components/ui/Button.tsx following docs/components-list.md spec.
- 3 variants: primary (bg-dulac-terra), secondary (border dulac-gold), ghost
- 3 sizes: sm, md, lg
- Support disabled state with opacity-50 cursor-not-allowed
- Support type="submit" for forms
- Export default ButtonProps interface too
```
**File**: `components/ui/Button.tsx`

---

#### Task 1.8 — Build `Card.tsx` `(15 phút)`
**Claude Code prompt:**
```
Build components/ui/Card.tsx:
- bg-dulac-wood rounded-xl border border-dulac-wood/50
- hover prop: when true add transition hover:-translate-y-1 hover:border-dulac-gold/40
- Forward className prop for overrides
```
**File**: `components/ui/Card.tsx`

---

#### Task 1.9 — Build `Badge.tsx` + `Input.tsx` + `SectionTitle.tsx` `(30 phút)`
**Claude Code prompt:**
```
Build 3 components following docs/components-list.md:

1. components/ui/Badge.tsx — variants: moss, terra, gold. rounded-full px-3 py-1 text-xs font-semibold
2. components/ui/Input.tsx — extends HTMLInputElement props, add label and error props. bg-dulac-wood/50 border border-dulac-wood focus:border-dulac-terra
3. components/ui/SectionTitle.tsx — title (text-dulac-gold text-3xl font-bold) + optional subtitle + align prop (left|center)
```

---

#### Task 1.10 — Build `Navbar.tsx` `(45 phút)`
**Claude Code prompt:**
```
Build components/layout/Navbar.tsx:
- "use client" — dùng useCartStore từ store/cartStore.ts để lấy totalItems()
- sticky top-0 z-50 backdrop-blur-md bg-dulac-dark/90 border-b border-dulac-wood/40
- Logo "Du Lạc" bên trái (text-dulac-gold font-bold text-xl), link về /
- Navigation links giữa: Trang chủ (/), Shop (/shop) — ẩn trên mobile
- Bên phải: Cart icon (ShoppingCart từ lucide-react) + badge số lượng đỏ, click → mở CartDrawer
- Mobile: hamburger icon → slide menu từ trái (useState cho isMenuOpen)
- CartDrawer chưa có, để placeholder: openDrawer() từ useCartStore
```
**File**: `components/layout/Navbar.tsx`

---

#### Task 1.11 — Build `Footer.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build components/layout/Footer.tsx:
- bg-dulac-wood/30 border-t border-dulac-wood/60 py-12
- 3 columns: Logo + mô tả | Links (Trang chủ, Shop, Về game) | Social (GitHub icon)
- Bottom bar: © 2025 Du Lạc. All rights reserved.
- Màu text: text-dulac-paper/60, links hover:text-dulac-paper
```
**File**: `components/layout/Footer.tsx`

---

### 🌙 Buổi tối — Kiểm tra + Commit (1h)

#### Task 1.12 — Verify + Commit `(30 phút)`
```bash
npm run type-check
npm run lint
npm run dev   # Kiểm tra visual: nền tối, Navbar, Footer hiển thị đúng màu
git add .
git commit -m "feat: UI primitives + Navbar + Footer"
git push
```
**Done khi**: Vercel auto-deploy thành công, layout cơ bản live.

---

## NGÀY 2 — Landing Page + Shop + Cart
> **Mục tiêu cuối ngày**: Landing page hoàn chỉnh, shop có sản phẩm từ Supabase, cart hoạt động.

---

### 🌅 Buổi sáng — Landing Page (3h)

> **Cập nhật CLAUDE.md**: `Đang build Landing page — HeroSection, Trailer, Gallery, Features`

#### Task 2.1 — Build `HeroSection.tsx` `(45 phút)`
**Claude Code prompt:**
```
Build components/landing/HeroSection.tsx:
- Full viewport height (min-h-screen), relative positioning
- Background: placeholder gradient from dulac-dark via dulac-wood to dulac-dark (thay bằng ảnh thật sau)
- Radial glow: absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,98,45,0.15)_0%,transparent_70%)]
- Center content: "DU LẠC" lớn (text-6xl md:text-8xl font-bold text-dulac-gold tracking-widest)
- Subtitle: text-dulac-paper/80 text-lg md:text-xl max-w-xl mx-auto text-center
- 2 CTA buttons: primary "Khám Phá Ngay" → /shop, secondary "Xem Trailer" → scroll to #trailer
- Animated scroll arrow ở bottom center (animate-bounce)
```
**File**: `components/landing/HeroSection.tsx`

---

#### Task 2.2 — Build `TrailerSection.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build components/landing/TrailerSection.tsx:
- Props: youtubeId: string, title?: string
- Section id="trailer" bg-dulac-dark py-24
- SectionTitle centered phía trên
- YouTube iframe: width 100%, aspect-video, rounded-2xl overflow-hidden
- URL: https://www.youtube.com/embed/{youtubeId}?autoplay=0&rel=0
- Wrapper max-w-4xl mx-auto
```
**File**: `components/landing/TrailerSection.tsx`

---

#### Task 2.3 — Build `GallerySection.tsx` `(30 phút)`
**Claude Code prompt:**
```
Build components/landing/GallerySection.tsx:
- Props: images: string[]
- Section bg-dulac-wood/20 py-24
- SectionTitle "Screenshot & Gameplay"
- Grid: 2 cols mobile, 3 cols desktop, gap-4
- Mỗi ảnh: rounded-xl overflow-hidden, aspect-video, object-cover
- Dùng next/image với fill và sizes prop
- Hover: scale-105 transition, overlay màu dulac-dark/20
- Nếu images rỗng: render 6 placeholder div bg-dulac-wood animate-pulse
```
**File**: `components/landing/GallerySection.tsx`

---

#### Task 2.4 — Build `FeaturesSection.tsx` + `LoreSection.tsx` `(30 phút)`
**Claude Code prompt:**
```
Build 2 components:

1. components/landing/FeaturesSection.tsx
- Props: features: {icon: string, title: string, description: string}[]
- Section py-24 bg-dulac-dark
- Grid 1 col mobile, 3 col desktop
- Card: bg-dulac-wood/50 border border-dulac-wood/60 p-6 rounded-xl hover:border-dulac-gold/30
- icon: text-4xl mb-4, title: text-dulac-gold text-xl font-bold, desc: text-dulac-paper/70

2. components/landing/LoreSection.tsx
- Hardcode nội dung: "Du Lạc — hành trình của một lữ khách..."
- Layout: 2 cols desktop (text trái, ảnh phải), stack mobile
- Text: prose text-dulac-paper/80 leading-relaxed
- Quote block: border-l-4 border-dulac-gold pl-4 italic text-dulac-paper/60
```

---

#### Task 2.5 — Wire up `app/page.tsx` `(20 phút)`
**Claude Code prompt:**
```
Update app/page.tsx (Server Component, no "use client"):
- Import và render theo thứ tự: HeroSection, TrailerSection, GallerySection, FeaturesSection, LoreSection
- TrailerSection: youtubeId="REPLACE_WITH_REAL_ID" (placeholder)
- GallerySection: images=[] (placeholder, sẽ thay sau)
- FeaturesSection: 3 features mẫu về game Du Lạc (pixel art, dân gian VN, phiêu lưu)
```
**File**: `app/page.tsx`
**Done khi**: `localhost:3000` hiển thị đầy đủ landing page.

---

### ☀️ Buổi chiều — Shop (3h)

> **Cập nhật CLAUDE.md**: `Đang build Shop — ProductCard, ProductGrid, app/shop/page.tsx`

#### Task 2.6 — Build `ProductCard.tsx` `(30 phút)`
**Claude Code prompt:**
```
Build components/shop/ProductCard.tsx:
- Props: product: Product (từ types/index.ts)
- "use client" — dùng useCartStore.addItem()
- Wrap bằng Card.tsx với hover={true}
- Ảnh: next/image aspect-square object-cover, rounded-t-xl
- Badge: CATEGORY_LABELS[product.category] dùng Badge variant="moss"
- Tên: text-dulac-paper font-semibold, link → /shop/{product.id}
- Giá: formatPrice(product.price) text-dulac-gold font-bold
- Nút "Thêm vào giỏ": Button variant="primary" full-width
  - Nếu product.sizes.length > 0: click → mở modal chọn size TRƯỚC khi add
  - Nếu không có size: addItem(product, 1, null) luôn
- Nếu stock === 0: disable button, hiện "Hết hàng"
```
**File**: `components/shop/ProductCard.tsx`

---

#### Task 2.7 — Build `ProductGrid.tsx` `(30 phút)`
**Claude Code prompt:**
```
Build components/shop/ProductGrid.tsx:
- "use client" — cần useState cho activeCategory filter
- Props: products: Product[], initialCategory?: string
- Filter tabs: ["Tất cả", "Áo / Hoodie", "Sticker", "Acrylic"] map từ CATEGORY_LABELS
- Tab active: bg-dulac-terra text-white, inactive: border border-dulac-wood/60 text-dulac-paper/60
- Filtered products: hiển thị grid 1→2→3 cột (sm:grid-cols-2 lg:grid-cols-3) gap-6
- Nếu không có sản phẩm nào: "Chưa có sản phẩm trong danh mục này"
- Animate filter: transition opacity khi đổi tab
```
**File**: `components/shop/ProductGrid.tsx`

---

#### Task 2.8 — Build `app/shop/page.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build app/shop/page.tsx (Server Component):
- Fetch products từ Supabase: supabase.from('products').select('*').eq('is_active', true).order('created_at', {ascending: false})
- Xử lý error: nếu lỗi log ra console và truyền products=[]
- Hero nhỏ: bg-dulac-wood/30 py-12, tiêu đề "Cửa Hàng Du Lạc" text-dulac-gold
- Render <ProductGrid products={products} />
- Add metadata: title "Shop | Du Lạc"
```
**File**: `app/shop/page.tsx`

---

#### Task 2.9 — Build `app/shop/[id]/page.tsx` `(45 phút)`
**Claude Code prompt:**
```
Build app/shop/[id]/page.tsx (Server Component):
- Params: { id: string }
- Fetch: supabase.from('products').select('*').eq('id', id).single()
- Nếu không tìm thấy: notFound() từ next/navigation
- Layout 2 cột desktop: ảnh trái (gallery), info phải
- Ảnh: ảnh đầu tiên to, thumbnail nhỏ bên dưới nếu có nhiều ảnh
- Info: tên (text-4xl text-dulac-gold), giá lớn, category badge, description
- Size selector: nếu product.sizes.length > 0 — render buttons cho từng size, useState chọn
- Nút "Thêm vào giỏ" — "use client" wrapper riêng hoặc tách AddToCartButton.tsx
- Stock indicator: "Còn {stock} sản phẩm" text-dulac-moss
```
**File**: `app/shop/[id]/page.tsx`
> **Lưu ý**: Phần "use client" (chọn size + add to cart) → tách thành `components/shop/AddToCartButton.tsx` riêng để giữ page là Server Component.

---

### 🌙 Buổi tối — Cart Drawer (2h)

> **Cập nhật CLAUDE.md**: `Đang build CartDrawer và CartItemRow`

#### Task 2.10 — Build `CartItemRow.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build components/shop/CartItemRow.tsx:
- Props: item: CartItem (từ types/index.ts)
- "use client" — dùng useCartStore (updateQuantity, removeItem)
- Layout flex: ảnh 64x64 rounded-lg | tên + size | giá | controls
- Controls: nút "-", input số lượng, nút "+"
- Nút xóa: X icon (lucide-react X), text-dulac-paper/40 hover:text-red-400
- Tên: text-dulac-paper text-sm, size: text-dulac-paper/50 text-xs
- Giá: formatPrice(item.price * item.quantity) text-dulac-gold
```
**File**: `components/shop/CartItemRow.tsx`

---

#### Task 2.11 — Build `CartDrawer.tsx` `(40 phút)`
**Claude Code prompt:**
```
Build components/shop/CartDrawer.tsx:
- "use client" — useCartStore (items, isDrawerOpen, closeDrawer, clearCart, totalPrice)
- Fixed overlay: inset-0 bg-black/60 z-40, click để đóng
- Drawer: fixed right-0 top-0 bottom-0 w-80 md:w-96 z-50 bg-dulac-dark border-l border-dulac-wood/60
- Animation: translate-x-full → translate-x-0, dùng animate-slide-in-right (đã có trong tailwind.config.ts)
- Header: "Giỏ hàng ({totalItems()})" text-dulac-gold, nút X đóng
- Body: list CartItemRow, scroll nếu nhiều item
- Nếu giỏ rỗng: icon ShoppingCart lớn + text "Giỏ hàng trống" text-dulac-paper/40
- Footer: tổng tiền + 2 nút: "Xem giỏ hàng" → /cart, "Thanh toán" → /checkout (bg-dulac-terra)
```
**File**: `components/shop/CartDrawer.tsx`

---

#### Task 2.12 — Mount CartDrawer vào layout + Verify `(20 phút)`
**Claude Code prompt:**
```
Update app/layout.tsx:
- Import CartDrawer
- Render <CartDrawer /> ngay sau <Navbar /> (ngoài <main>)
```
Sau đó:
```bash
npm run type-check && npm run lint
git add . && git commit -m "feat: landing page + shop + cart drawer"
git push
```
**Done khi**: Vào shop, thêm sản phẩm vào giỏ, drawer mở ra đúng.

---

## NGÀY 3 — Auth + Checkout + Deploy
> **Mục tiêu cuối ngày**: Website hoàn chỉnh live, user đặt hàng được end-to-end.

---

### 🌅 Buổi sáng — Auth (2h)

> **Cập nhật CLAUDE.md**: `Đang build Auth — Login, Register pages với Supabase`

#### Task 3.1 — Build `app/auth/login/page.tsx` `(40 phút)`
**Claude Code prompt:**
```
Build app/auth/login/page.tsx:
- "use client"
- Form: email + password, dùng useState
- Submit: supabase.auth.signInWithPassword({ email, password })
- Loading state trên button khi đang submit
- Error handling: hiển thị error.message dưới form
- Sau khi login thành công: router.push('/') từ next/navigation
- Link "Chưa có tài khoản? Đăng ký" → /auth/register
- Layout: max-w-sm mx-auto mt-24, Card, logo Du Lạc nhỏ ở trên
```
**File**: `app/auth/login/page.tsx`

---

#### Task 3.2 — Build `app/auth/register/page.tsx` `(40 phút)`
**Claude Code prompt:**
```
Build app/auth/register/page.tsx:
- "use client"
- Form: email + password + confirm password, useState
- Validate: password === confirmPassword trước khi submit
- Submit: supabase.auth.signUp({ email, password })
- Sau khi đăng ký: hiển thị "Kiểm tra email để xác nhận tài khoản"
- Error và loading giống login page
- Link "Đã có tài khoản? Đăng nhập" → /auth/login
```
**File**: `app/auth/register/page.tsx`

---

#### Task 3.3 — Update Navbar với auth state `(30 phút)`
**Claude Code prompt:**
```
Update components/layout/Navbar.tsx:
- Thêm useEffect để lắng nghe supabase.auth.onAuthStateChange
- Nếu đã login: hiển thị avatar icon + dropdown (Tài khoản, Đăng xuất)
- Nếu chưa login: hiển thị nút "Đăng nhập" → /auth/login
- Đăng xuất: supabase.auth.signOut() rồi router.refresh()
```

---

### ☀️ Buổi chiều — Checkout + API (3h)

> **Cập nhật CLAUDE.md**: `Đang build Checkout flow — CheckoutForm, OrderSummary, API route`

#### Task 3.4 — Build `OrderSummary.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build components/shop/OrderSummary.tsx:
- Props: items: CartItem[]
- List sản phẩm: ảnh nhỏ, tên, size, số lượng × giá
- Divider
- Subtotal, phí ship (miễn phí), tổng
- Tất cả dùng formatPrice() từ types/index.ts
- bg-dulac-wood/50 rounded-xl p-6 sticky top-24
```
**File**: `components/shop/OrderSummary.tsx`

---

#### Task 3.5 — Build `CheckoutForm.tsx` `(45 phút)`
**Claude Code prompt:**
```
Build components/shop/CheckoutForm.tsx:
- "use client"
- Fields: full_name, phone, address, district, city (dùng Input.tsx)
- Payment method: radio COD hoặc Chuyển khoản ngân hàng
- Note: textarea optional
- Validate: tất cả required trừ note
- Submit: POST /api/orders với body từ docs/api-spec.md
  - Body: { items: useCartStore.items, shipping_address, payment_method, note }
- Loading state, error display
- Sau khi thành công: clearCart() + router.push('/checkout/success')
```
**File**: `components/shop/CheckoutForm.tsx`

---

#### Task 3.6 — Build `app/checkout/page.tsx` `(20 phút)`
**Claude Code prompt:**
```
Build app/checkout/page.tsx:
- "use client" — cần useCartStore
- Nếu cart rỗng: redirect về /shop
- Layout 2 cột desktop: CheckoutForm trái (flex-1), OrderSummary phải (w-80)
- Stack 1 cột mobile (form trên, summary dưới)
- Tiêu đề "Thanh toán" text-dulac-gold
```
**File**: `app/checkout/page.tsx`

---

#### Task 3.7 — Build `app/api/orders/route.ts` `(40 phút)`
**Claude Code prompt:**
```
Build app/api/orders/route.ts (Next.js Route Handler):
- Method: POST
- Parse request body: { items, shipping_address, payment_method, note }
- Validate: items không rỗng, shipping_address có đủ fields
- Tính toán server-side:
  subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  total = subtotal (free ship)
- Lấy user hiện tại: getCurrentUser() từ lib/supabase.ts (null nếu guest)
- Insert vào Supabase orders table
- Response 200: { success: true, order_id, message: "Đặt hàng thành công" }
- Response 400: { success: false, error: message }
- Response 500: nếu Supabase lỗi
Xem docs/api-spec.md để biết đầy đủ schema.
```
**File**: `app/api/orders/route.ts`

---

#### Task 3.8 — Build `app/checkout/success/page.tsx` `(15 phút)`
**Claude Code prompt:**
```
Build app/checkout/success/page.tsx:
- Server Component
- Hiển thị: icon check lớn (màu dulac-moss), "Đặt hàng thành công!"
- Text: "Cảm ơn bạn đã ủng hộ Du Lạc. Chúng tôi sẽ liên hệ qua SĐT để xác nhận đơn."
- Nút: "Về trang chủ" + "Tiếp tục mua sắm" → /shop
```

---

### 🌙 Buổi tối — Polish + Deploy (3h)

> **Cập nhật CLAUDE.md**: `Đang polish UI, responsive check, và deploy lên Vercel`

#### Task 3.9 — Upload ảnh thật lên Cloudinary `(45 phút)`
- Vào [cloudinary.com](https://cloudinary.com) → Media Library → Upload
- Upload ảnh game (hero background, gallery screenshots)
- Upload ảnh sản phẩm (áo, sticker, acrylic)
- Update `products` table trong Supabase với URL thật từ Cloudinary

---

#### Task 3.10 — Responsive check `(30 phút)`
Mở Chrome DevTools → Toggle device toolbar → kiểm tra từng trang:
- [ ] Mobile 375px: Navbar hamburger, 1 cột shop, form checkout stack
- [ ] Tablet 768px: 2 cột shop, layout checkout bắt đầu 2 cột
- [ ] Desktop 1280px: full layout

**Claude Code prompt nếu có lỗi:**
```
Fix responsive issues in [tên file]:
- [mô tả lỗi cụ thể, ví dụ: "text overflow trong ProductCard trên mobile 375px"]
```

---

#### Task 3.11 — SEO + Metadata `(20 phút)`
**Claude Code prompt:**
```
Add metadata to all pages:
- app/layout.tsx: default metadata (title template "%s | Du Lạc", description, OG image)
- app/page.tsx: title "Du Lạc — Game Indie Pixel Art Dân Gian Việt Nam"
- app/shop/page.tsx: title "Shop | Du Lạc"
- app/shop/[id]/page.tsx: generateMetadata function lấy tên sản phẩm từ Supabase
Dùng Metadata type từ next.
```

---

#### Task 3.12 — Final deploy + End-to-end test `(45 phút)`
```bash
npm run type-check  # 0 errors
npm run lint        # 0 errors
npm run build       # Build thành công
git add .
git commit -m "feat: complete — auth + checkout + polish"
git push            # Vercel auto-deploy
```

**Test checklist end-to-end:**
- [ ] Vào trang chủ: hero, trailer, gallery load đúng
- [ ] Vào /shop: sản phẩm hiển thị từ Supabase
- [ ] Click sản phẩm: vào product detail, chọn size
- [ ] Thêm vào giỏ: CartDrawer mở ra, số lượng đúng
- [ ] Vào /checkout: form điền được, OrderSummary đúng
- [ ] Submit đơn: order lưu vào Supabase, redirect về /checkout/success
- [ ] Đăng ký tài khoản: email xác nhận gửi đi
- [ ] Đăng nhập: Navbar đổi sang avatar
- [ ] Mobile: tất cả layout không bị vỡ

---

## Tổng hợp thời gian

| Ngày | Buổi | Nội dung | Tasks | Thời gian |
|---|---|---|---|---|
| **0** | Sáng | **Figma Design** | F0.1 → F0.6 | **4h** |
| 1 | Sáng | Project setup, Supabase, GitHub/Vercel | 1.1 → 1.5 | 3h |
| 1 | Chiều | UI primitives, Navbar, Footer | 1.6 → 1.11 | 3h |
| 1 | Tối | Verify + commit | 1.12 | 1h |
| 2 | Sáng | Landing page (Hero → Lore) | 2.1 → 2.5 | 3h |
| 2 | Chiều | Shop (ProductCard, Grid, Detail) | 2.6 → 2.9 | 3h |
| 2 | Tối | Cart Drawer + CartItemRow | 2.10 → 2.12 | 2h |
| 3 | Sáng | Auth (Login, Register, Navbar update) | 3.1 → 3.3 | 2h |
| 3 | Chiều | Checkout (Form, API, Success page) | 3.4 → 3.8 | 3h |
| 3 | Tối | Ảnh thật, responsive, SEO, deploy | 3.9 → 3.12 | 3h |
| **Tổng** | | | **28 tasks** | **~27h** |

---

## Sơ đồ timeline tổng quan

```
Ngày 0 sáng    Ngày 1              Ngày 2               Ngày 3
──────────────────────────────────────────────────────────────────
[  FIGMA  ]    [ SETUP  │ PRIMIT ] [ LANDING │ SHOP+CART] [ AUTH │ CHECKOUT │ DEPLOY ]
   4h             3h   │  3h+1h      3h      │   3h+2h      2h  │    3h     │   3h
```

---

## Nếu bị trễ deadline

**Cắt được — không ảnh hưởng core:**

| Task | Thay thế |
|---|---|
| `LoreSection.tsx` | Bỏ qua, trang chủ vẫn đủ đẹp |
| Auth (Login/Register) | Dùng guest checkout — không cần đăng nhập |
| `app/cart/page.tsx` | CartDrawer là đủ, bỏ trang /cart riêng |
| Figma F0.4 Checkout | Sketch tay hoặc bỏ, code trực tiếp từ spec |

**Bắt buộc phải có — không cắt:**

| Phần | Lý do |
|---|---|
| Hero + Trailer + Gallery | Đây là landing page chính |
| Shop + ProductCard + ProductDetail | Core tính năng bán hàng |
| CartDrawer + Checkout + API order | Flow mua hàng end-to-end |
| Deploy lên Vercel | Mục tiêu cuối cùng |

---

## Tiến độ hiện tại

- [x] Folder setup — docs/, types/, store/, lib/, tailwind.config.ts
- [ ] **Ngày 0**: Figma design
- [ ] **Ngày 1**: Project setup + UI system
- [ ] **Ngày 2**: Landing + Shop + Cart
- [ ] **Ngày 3**: Auth + Checkout + Deploy
- [ ] **Phase 2**: Tính năng mở rộng (xem bên dưới)

---

## PHASE 2 — Tính năng mở rộng

> **Scope bổ sung** sau khi hoàn thành 3 ngày cơ bản.
> Ưu tiên: Fix routing → Discount → Lore page → About/Team → Episode Carousel → Puzzle/Hint system

---

### Fix: Auth Login/Signup (cải thiện so với kế hoạch cũ)

Các điểm cần update so với Tasks 3.1–3.3:

- **Redirect sau login**: Nếu user vào từ `/checkout`, sau login redirect về `/checkout` (dùng `?redirect=` param)
- **Social login Google** (nếu bật OAuth trong Supabase): Thêm nút "Đăng nhập với Google"
- **Persist session**: Dùng `supabase.auth.getSession()` trong middleware để bảo vệ route `/checkout`
- **Profile page** `/account`: Xem lịch sử đơn hàng, cập nhật thông tin

**Prompt bổ sung cho Task 3.1:**
```
Update app/auth/login/page.tsx:
- Đọc searchParams.get('redirect') để redirect đúng sau login
- Thêm nút "Đăng nhập với Google" (supabase.auth.signInWithOAuth provider='google')
- Sau login: router.push(redirect || '/')
```

---

### Fix: API Routing — Kiểm tra và sửa các route sai

**Các route cần verify:**

| Route | Đúng | Ghi chú |
|---|---|---|
| `/shop/[id]` | `/shop/[slug]` | Dùng `slug` thay `id` nhất quán với DB |
| `POST /api/orders` | ✅ | Đã đúng |
| `GET /api/products` | ✅ | Đã đúng |
| Navbar links | Kiểm tra `/about`, `/lore` | Thêm sau khi tạo pages |
| Auth redirect | `?redirect=/checkout` | Thêm middleware |

**Task: Fix slug routing**
```
Rename app/shop/[id] → app/shop/[slug]
Update page.tsx: fetch by .eq('slug', slug) thay vì .eq('id', id)
Update ProductCard link: href={`/shop/${product.slug}`}
```

---

### Feature P2.1 — Giảm giá sản phẩm (Discount)

**Scope**: Sản phẩm luôn hiển thị giá giảm khi có `discount_price`.

**DB**: Đã thêm `discount_price` và `is_featured` vào bảng `products` (xem `db-schema.md`).

**Task P2.1a — Update `types/index.ts`:**
```
Thêm vào Product interface:
  discount_price?: number | null
  is_featured?: boolean
```

**Task P2.1b — Update `ProductCard.tsx`:**
```
Update components/shop/ProductCard.tsx:
- Nếu product.discount_price: hiển thị discount_price (text-dulac-red bold)
  + price gốc gạch ngang (line-through text-dulac-ink/40 text-sm)
- Badge "SALE" tự động: bg-dulac-red text-white absolute top-2 right-2
- Hàm getEffectivePrice(product): return discount_price ?? price
- CartStore.addItem() truyền getEffectivePrice(product) thay vì price thẳng
```

**Task P2.1c — Update seed data** — thêm `discount_price` cho một số sản phẩm:
```sql
UPDATE products SET discount_price = 240000 WHERE slug = 'bo-kit-roi-nuoc-tu-lam';
UPDATE products SET discount_price = 299000 WHERE slug = 'board-game-o-an-quan';
UPDATE products SET discount_price = 70000  WHERE slug = 'sticker-pack-nhan-vat';
UPDATE products SET is_featured = true WHERE slug IN (
  'bo-kit-roi-nuoc-tu-lam', 'board-game-o-an-quan', 'card-game-nhu-dua-co-doi'
);
```

---

### Feature P2.2 — Trang Cốt Truyện (`/lore`)

**Mục đích**: Giới thiệu cốt truyện gốc + bình luận/đánh giá nổi bật của user.

**Quyết định thiết kế**: Dùng **scrollable timeline accordion** thay vì ảnh truyện tranh.
- Timeline làm được ngay, không cần artwork
- Khi có artwork thêm ảnh minh họa nhỏ vào từng chapter sau
- SEO tốt hơn (text thuần), dễ cập nhật nội dung

**Route**: `app/lore/page.tsx`

**Thứ tự render:** Hero → Chapter Nav → LoreTimeline → Quote → DuLacDefinition → EpisodeCarousel → FeaturedReviews → ReviewForm

---

#### Nội dung cốt truyện (hardcode trong `lib/lore-data.ts`)

```typescript
// lib/lore-data.ts
export const LORE_CHAPTERS = [
  {
    id: 'ch1',
    number: 'I',
    label: 'Tuổi trẻ',
    title: 'Đôi bạn thanh xuân & Chặng đường tuổi 30',
    color: '#C8392B',
    events: [
      {
        icon: '🌱',
        title: 'Thuở thiếu thời',
        body: 'Tính và Lan Anh là đôi bạn thanh mai trúc mã, lớn lên cùng nhau. Ngay từ nhỏ, cả hai đã nuôi dưỡng niềm đam mê khám phá văn hóa, phong tục và lịch sử dọc khắp chiều dài đất nước Việt Nam.',
        type: 'neutral',
      },
      {
        icon: '🗺️',
        title: 'Hành trình tuổi trẻ',
        body: 'Cùng nhau đi qua những mái ngói rêu phong của Phố cổ, những điệu hò sông nước, những lễ hội truyền thống. Mỗi vùng đất không chỉ làm dày thêm cuốn sổ tay tư liệu mà còn thắt chặt tình yêu.',
        tag: 'Bắc · Trung · Nam',
        type: 'positive',
      },
      {
        icon: '🏠',
        title: 'Cột mốc tuổi 30 — Nghịch cảnh',
        body: 'Sau những năm bôn ba, cả hai dừng chân xây dựng mái ấm. Hạnh phúc không trọn vẹn khi họ phát hiện Lan Anh bị hiếm muộn. Áp lực, tổn thương, xung đột bắt đầu rạn nứt gia đình.',
        type: 'conflict',
      },
      {
        icon: '💡',
        title: 'Sự thấu suốt',
        body: 'Họ nhận ra: thứ gắn kết hai người chính là kho tàng kỷ niệm họ đã chắt chiu. Quyết định lớn: sẽ nhận nuôi một người con vào đầu tháng Tư.',
        tag: 'Bước ngoặt tích cực',
        type: 'positive',
      },
    ],
  },
  {
    id: 'ch2',
    number: 'II',
    label: 'Biến cố',
    title: 'Biến cố trớ trêu trước "Ngày hẹn"',
    color: '#5C3317',
    events: [
      {
        icon: '🚨',
        title: 'Cuối tháng Ba — Tai nạn lao động',
        body: 'Một ngày trước ngày hẹn nhận con, Lan Anh gặp tai nạn lao động nghiêm trọng, phải nhập viện cấp cứu trong tình trạng gãy chân.',
        type: 'conflict',
      },
      {
        icon: '🚗',
        title: 'Cú sốc của Tính',
        body: 'Nghe tin dữ, Tính hoảng loạn phóng xe đến bệnh viện. Định mệnh trớ trêu — trên đường đi, anh bị một chiếc xe tải tông trúng.',
        type: 'conflict',
      },
      {
        icon: '🛌',
        title: 'Hệ quả đau lòng',
        body: 'Tính giữ được mạng sống nhưng chấn thương sọ não nặng khiến anh rơi vào trạng thái sống thực vật. Từ một người đàn ông hoạt bát, anh giờ chỉ có thể nằm bất động trên giường bệnh.',
        tag: 'Điểm đứt gãy',
        type: 'conflict',
      },
    ],
  },
  {
    id: 'ch3',
    number: 'III',
    label: 'Đứt gãy',
    title: '3 năm đằng đẵng — Kiên trì của Lan Anh',
    color: '#888888',
    events: [
      {
        icon: '🩺',
        title: 'Lan Anh một mình chống đỡ',
        body: '3 năm trôi qua, Lan Anh nén nỗi đau, vừa tập phục hồi đôi chân mình, vừa một lòng chăm sóc Tính. Làm thêm nghề báo online tại nhà để tiện trông nom chồng. Chưa bao giờ có ý nghĩ buông bỏ.',
        type: 'neutral',
      },
      {
        icon: '📺',
        title: 'Đoạn video kỳ lạ',
        body: 'Một ngày, chiếc máy tính bỏ ngỏ vô tình phát đi phát lại một clip YouTube — khung cảnh làng cổ miền Bắc với tiếng trống hội và múa rối nước. Lỗi hệ thống khiến âm thanh bập bùng vang vọng khắp căn phòng nhỏ.',
        tag: 'Tín hiệu chuyển hóa',
        type: 'positive',
      },
    ],
  },
  {
    id: 'ch4',
    number: 'IV',
    label: 'Thức tỉnh',
    title: 'Sự thức tỉnh thần kỳ',
    color: '#2E7D52',
    events: [
      {
        icon: '🧠',
        title: 'Phản xạ não bộ hoạt động trở lại',
        body: 'Thứ âm thanh văn hóa quen thuộc ấy — từng là linh hồn trong những chuyến đi ngày xưa — đã chạm đến tầng sâu ý thức của Tính. Anh cử động, cố hướng về phía âm thanh và ngã khỏi ghế.',
        type: 'positive',
      },
      {
        icon: '✨',
        title: 'Phép màu có thật',
        body: 'Bác sĩ xác nhận: Tính thực sự có dấu hiệu hồi phục nhận thức. Nhưng tổn thương não quá lớn khiến trí não của anh hiện tại trống rỗng và ngây ngô như một đứa trẻ lên 4 tuổi.',
        tag: 'Tuổi trí khôn: 4 · Tuổi thật: 33',
        type: 'positive',
      },
    ],
  },
  {
    id: 'ch5',
    number: 'V',
    label: 'Hành trình mới',
    title: 'Lời mở đầu cho hành trình Du Lạc',
    color: '#C8392B',
    events: [
      {
        icon: '🎒',
        title: 'Quyết định táo bạo của Lan Anh',
        body: 'Nhìn Tính ngơ ngác trước những đồ vật quen thuộc, Lan Anh hiểu: ký ức không mất đi, chúng chỉ đang bị khóa chặt. Cô quyết định dắt tay "đứa trẻ 4 tuổi" này ngược dòng thời gian, trở lại những ngôi làng cổ để dùng văn hóa và phong tục đánh thức linh hồn đang ngủ say của chồng.',
        type: 'positive',
      },
      {
        icon: '🥁',
        title: 'Trạm dừng đầu tiên',
        body: 'Ngôi làng cổ có tiếng trống hội rối nước ở Hà Nội — nơi đã phát ra âm thanh cứu sống anh. Đây là khởi đầu của Du Lạc.',
        tag: 'Bắt đầu game · Tập 1',
        type: 'positive',
      },
    ],
  },
]

export const LORE_QUOTE = {
  text: 'Những ký ức ngày xưa không mất đi — chúng chỉ đang bị khóa chặt ở một góc nào đó, chờ được đánh thức.',
  author: 'Lan Anh, Prologue Du Lạc',
}

export const DULAC_DEFINITION = {
  summary: 'Một chuỗi series game giải đố ngắn, đa nền tảng — kể về hành trình ngược dòng ký ức của Lan Anh và Tính qua từng vùng văn hóa Việt Nam.',
  formats: ['🎲 Game dân gian đơn giản', '📱 Mobile mini-game', '🎮 Side-scrolling 2D', '🌐 Web game tâm lý'],
  mission: 'Dùng nét đẹp văn hóa, trò chơi dân gian và địa điểm lịch sử để chữa lành.',
}

export const EPISODES = [
  { id: 'ep1', title: 'Tập 1 — Lữ Khách Lạc Đường', summary: 'Hà Nội · Rối nước · Tiếng trống hội', status: 'available' as const, youtubeId: 'REPLACE_ID', image: '' },
  { id: 'ep2', title: 'Tập 2 — Tiếng Trống Hội Làng', summary: 'Lễ hội · Bí mật ngôi làng · Kẻ thù trong bóng tối', status: 'available' as const, youtubeId: 'REPLACE_ID', image: '' },
  { id: 'ep3', title: 'Tập 3 — Rối Nước & Bí Mật Cổ Xưa', summary: 'Sân khấu linh thiêng · Linh hồn tổ tiên', status: 'coming_soon' as const, image: '' },
  { id: 'ep4', title: 'Tập 4 — ???', summary: 'Bí mật vẫn chưa được hé lộ...', status: 'coming_soon' as const, image: '' },
]
```

---

#### Tasks build trang Lore

**P2.2a — Build `LoreTimeline.tsx`:**
```
Build components/lore/LoreTimeline.tsx:
- "use client" — useState cho mảng openChapters (mặc định tất cả open)
- Props: chapters: typeof LORE_CHAPTERS
- Đường dọc: absolute 2px, gradient red→amber→jade
- Chapter header: click toggle, chevron rotate animation
- Event item: dot absolute left, icon + title + body + optional tag
- Event dot màu theo type: positive=#2E7D52, conflict=#C8392B, neutral=#E8A020
- Chapter nav pills: sticky top-[64px] z-40, scroll đến chapter khi click
- Smooth scroll: element.scrollIntoView({ behavior: 'smooth', block: 'start' })
```
**File**: `components/lore/LoreTimeline.tsx`

**P2.2b — Build `EpisodeCarousel.tsx`:**
```
Build components/lore/EpisodeCarousel.tsx:
- "use client" — useState cho activeIndex
- Props: episodes: typeof EPISODES
- Hiển thị 3 cards desktop, 1 card mobile
- Arrows ← →, dots indicator bên dưới
- status="available": badge xanh "● Có thể xem", nút "Xem Trailer ▶" bg-dulac-red
  click → mở modal YouTube iframe (useState cho modalYoutubeId)
- status="coming_soon": ảnh grayscale opacity-40, overlay icon 🔒, nút disabled
- Modal YouTube: fixed overlay (dùng faux-viewport div, không dùng position:fixed)
```
**File**: `components/lore/EpisodeCarousel.tsx`

**P2.2c — Build `ReviewCard.tsx` + `ReviewForm.tsx`:**
```
1. components/lore/ReviewCard.tsx:
- Props: review: { user_name, content, rating, avatar_url?, created_at, is_featured? }
- Avatar: initials bg-dulac-amber/30 text-dulac-brown nếu không có ảnh
- Stars: 5 sao — filled text-dulac-amber, empty text-dulac-brown/20
- Content: italic text-dulac-ink/80 line-clamp-3
- Featured: border-l-4 border-dulac-amber

2. components/lore/ReviewForm.tsx:
- "use client"
- Fields: user_name, rating (click stars), content textarea
- Submit: POST /api/reviews { user_name, rating, content, target: 'lore' }
- Loading, success "Cảm ơn bạn đã chia sẻ!", error handling
```

**P2.2d — Build `app/lore/page.tsx`:**
```
Build app/lore/page.tsx (Server Component):
- Import LORE_CHAPTERS, LORE_QUOTE, DULAC_DEFINITION, EPISODES từ lib/lore-data.ts
- Fetch featured reviews: supabase.from('reviews').select('*')
    .eq('target','lore').eq('is_featured',true).limit(6)
- Render thứ tự:
    1. Hero section (eyebrow + h1 + subtitle)
    2. <LoreTimeline chapters={LORE_CHAPTERS} />
    3. Quote block (LORE_QUOTE)
    4. Du Lạc definition card (DULAC_DEFINITION)
    5. <EpisodeCarousel episodes={EPISODES} />
    6. Featured reviews grid (3 cột desktop, 1 cột mobile)
    7. <ReviewForm />
- Metadata: title "Cốt Truyện | Du Lạc"
```

---

### Feature P2.3 — Trang Thành Viên & Tri Ân (`/about`)

**Mục đích**: Giới thiệu team + cảm ơn cộng đồng đã hỗ trợ.

**Route**: `app/about/page.tsx`

**Layout:**
```
┌─────────────────────────────────────────┐
│  HERO: "Đội Ngũ Du Lạc"                 │
│  Subtitle + mission statement           │
├─────────────────────────────────────────┤
│  TEAM GRID (3 cột)                      │
│  [Avatar] Tên — Role                    │
│  Bio ngắn + social links               │
├─────────────────────────────────────────┤
│  SECTION: "Tri Ân Cộng Đồng"            │
│  Text cảm ơn + logo/tên các supporter  │
│  (beta testers, contributors, mentors) │
├─────────────────────────────────────────┤
│  CTA: "Tham gia cộng đồng"             │
│  Link Discord / Facebook Group          │
└─────────────────────────────────────────┘
```

**Tasks:**

**P2.3a — Build `TeamCard.tsx`:**
```
Build components/about/TeamCard.tsx:
- Props: member: { name, role, bio, avatar_url?, social_url? }
- Avatar: next/image nếu có URL, initials fallback
- Role badge: Badge variant theo role (dev=moss, design=terra, sound=gold)
- Social link: GitHub/LinkedIn icon (lucide-react ExternalLink)
- Hover: border-dulac-amber, lift effect
```

**P2.3b — Build `app/about/page.tsx`:**
```
Build app/about/page.tsx (Server Component):
- Fetch team: GET /api/team
- Hardcode community acknowledgements (supporters list)
- Sections: Hero → Mission → TeamGrid → TributeSection → CommunityCTA
- Metadata: title "Về Chúng Tôi | Du Lạc"
```

---

### Feature P2.4 — Puzzle / Câu Đố & Hint System

**Concept**: Data của game và web dùng **chung một Supabase database**.
- Trong game, người chơi có thể để lại note khi giải câu đố
- Những note này (`game_notes`) hiển thị trên trang web như **hints cộng đồng**
- Tạo vòng lặp tò mò: user web thấy hint → tải game → để lại hint → thu hút user mới

**Route**: `app/puzzle/page.tsx` hoặc tích hợp vào `/lore`

**Layout trang Puzzle:**
```
┌─────────────────────────────────────────┐
│  HERO: "Giải Mã Du Lạc"                 │
│  "Bí ẩn nằm trong từng lát gỗ..."       │
├─────────────────────────────────────────┤
│  PUZZLE CARD                            │
│  Tiêu đề câu đố + mô tả                │
│  [Input đáp án] [Submit]               │
├─────────────────────────────────────────┤
│  HINTS TỪ CỘNG ĐỒNG                     │
│  "Lữ Khách #42 gợi ý: ..."             │
│  "Lữ Khách #17 gợi ý: ..."             │
│  (load từ game_notes table)             │
│  [Để lại hint của bạn...]              │
└─────────────────────────────────────────┘
```

**Tasks:**

**P2.4a — Build `PuzzleCard.tsx`:**
```
Build components/puzzle/PuzzleCard.tsx:
- "use client"
- Props: puzzle: { id, title, description, hint_prefix }
- Form: input đáp án + submit button
- Submit: POST /api/puzzles/verify { puzzle_id, answer }
- Success state: hiển thị reward_key với confetti effect (CSS keyframes)
- Error state: "Chưa đúng rồi, thử lại nhé!" + shake animation
```

**P2.4b — Build `HintFeed.tsx`:**
```
Build components/puzzle/HintFeed.tsx:
- "use client" — SWR hoặc useEffect để fetch hints
- Props: puzzleId: string
- Fetch: GET /api/game-hints?puzzle_id={puzzleId}&limit=5
- Hiển thị: avatar (game_alias initials) + content + upvote count
- Form gửi hint mới: POST /api/game-notes
- Real-time feel: poll mỗi 30s hoặc dùng Supabase realtime subscription
- Hint mới nhất lên đầu, sort by upvotes
```

**P2.4c — Build `app/puzzle/page.tsx`:**
```
Build app/puzzle/page.tsx (Server Component):
- Fetch puzzles: supabase.from('puzzles').select('*').eq('is_active', true)
- Render lần lượt từng PuzzleCard
- Dưới mỗi card: HintFeed với puzzle_id tương ứng
- Metadata: title "Câu Đố | Du Lạc"
```

**P2.4d — Build API routes** (xem `api-spec.md`):
- `app/api/game-hints/route.ts` — GET
- `app/api/game-notes/route.ts` — POST (với rate limit)
- `app/api/puzzles/verify/route.ts` — POST (hash compare với bcrypt)

---

### Update Navbar — Thêm links mới

```
Update components/layout/Navbar.tsx:
Thêm vào navigation links:
- "Cốt Truyện" → /lore
- "Câu Đố" → /puzzle
- "Về Chúng Tôi" → /about
Desktop: hiển thị đủ; Mobile: thêm vào slide menu
```

---

## Tiến độ hiện tại

- [x] Folder setup — docs/, types/, store/, lib/, tailwind.config.ts
- [ ] **Ngày 0**: Figma design
- [ ] **Ngày 1**: Project setup + UI system
- [ ] **Ngày 2**: Landing + Shop + Cart
- [ ] **Ngày 3**: Auth + Checkout + Deploy
- [ ] **Phase 2 — Fix**: Auth redirect + slug routing
- [ ] **Phase 2 — P2.1**: Giảm giá sản phẩm
- [ ] **Phase 2 — P2.2**: Trang Lore + Episode Carousel + Reviews
- [ ] **Phase 2 — P2.3**: Trang About / Team
- [ ] **Phase 2 — P2.4**: Puzzle / Hint system

---

*Cập nhật lần cuối: Bổ sung Phase 2 — discount, lore page, about/team, episode carousel, puzzle+hint system*

---

## PHASE 2 ADDON - PayOS QR Payment Integration

> **Quyet dinh**: Dung PayOS thay cho bank_transfer thu cong.
> User quet QR VietQR bang app ngan hang bat ky - thanh toan that, realtime.
> PayOS mien phi tich hop. Khong co sandbox -> test voi 1.000d that.
> SDK: `npm install @payos/node` (server) + `npm install payos-checkout` (client)

### Setup PayOS (15 phut - lam thu cong)

1. Dang ky tai https://my.payos.vn
2. Xac minh to chuc + ket noi tai khoan ngan hang
3. Tao kenh thanh toan -> lay 3 keys:
   - `PAYOS_CLIENT_ID`
   - `PAYOS_API_KEY`
   - `PAYOS_CHECKSUM_KEY`
4. Them vao `.env.local`:
```
PAYOS_CLIENT_ID=your_client_id
PAYOS_API_KEY=your_api_key
PAYOS_CHECKSUM_KEY=your_checksum_key
```
5. Cau hinh Webhook URL tren my.payos.vn:
   `https://your-vercel-url.vercel.app/api/payos/webhook`
6. Cau hinh Return URL:
   `https://your-vercel-url.vercel.app/api/payos/return`

### Task P3.1 - Install PayOS SDK + tao lib/payos.ts

```
npm install @payos/node
```

```typescript
// lib/payos.ts
import PayOS from '@payos/node'

if (!process.env.PAYOS_CLIENT_ID || !process.env.PAYOS_API_KEY || !process.env.PAYOS_CHECKSUM_KEY) {
  throw new Error('Thieu PAYOS env variables')
}

export const payos = new PayOS(
  process.env.PAYOS_CLIENT_ID,
  process.env.PAYOS_API_KEY,
  process.env.PAYOS_CHECKSUM_KEY
)
```

### Task P3.2 - Update `app/api/orders/route.ts` - tich hop PayOS

```
Update app/api/orders/route.ts:

Them xu ly khi payment_method === 'payos':

1. Tao order trong Supabase voi status = 'pending' truoc
2. Tao orderCode = Date.now() (so nguyen, max 9 chu so)
3. Goi PayOS API:
   const paymentLink = await payos.createPaymentLink({
     orderCode: orderCode,
     amount: total,           // so nguyen VND
     description: `DL-${orderCode}`,  // MAX 25 ky tu
     returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payos/return`,
     cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?cancelled=true`,
   })
4. Luu payos_order_code, payos_payment_link_id, payos_checkout_url vao order vua tao
5. Tra ve { success: true, order_id, payment_method: 'payos', checkout_url: paymentLink.checkoutUrl }

Voi COD / bank_transfer: giu nguyen logic cu, status = 'pending', tra ve { success: true, order_id }

QUAN TRONG:
- description phai <= 25 ky tu (gioi han PayOS)
- orderCode phai la so nguyen duong, unique
- Tinh gia theo getEffectivePrice() tu types/index.ts (co discount)
```

### Task P3.3 - Update `CheckoutForm.tsx` - them PayOS option

```
Update components/shop/CheckoutForm.tsx:
- Them radio option thu 3: "Chuyen khoan QR (PayOS)" - payment_method = 'payos'
- Hien thi badge "Thanh toan ngay" mau xanh ben canh option PayOS
- Khi chon PayOS: hien thi mo ta nho "Quet ma QR VietQR bang app ngan hang bat ky"
- Sau khi submit thanh cong voi PayOS:
  if (result.checkout_url) {
    window.location.href = result.checkout_url  // redirect sang trang PayOS
  } else {
    clearCart()
    router.push('/checkout/success')
  }
- Voi COD: giu nguyen clearCart() + router.push('/checkout/success')
```

### Task P3.4 - Build `app/api/payos/webhook/route.ts`

```
Build app/api/payos/webhook/route.ts:
- Method: POST
- import { payos } from '@/lib/payos'
- Verify webhook data:
  const isValid = payos.verifyPaymentWebhookData(body)
  if (!isValid) return NextResponse.json({ error: '1' }, { status: 400 })
- Lay orderCode tu body.data.orderCode
- Tim order: supabase.from('orders').select().eq('payos_order_code', orderCode).single()
- Neu body.code === '00' && body.data.code === '00':
    update status = 'confirmed'
  Neu khac:
    update status = 'cancelled'
- Tra ve NextResponse.json({ error: '0' }) de PayOS biet OK
- KHONG dung supabase auth (webhook khong co session)
  -> Dung supabase createClient voi service_role key hoac dung RLS policy cho phep update
```

### Task P3.5 - Build `app/api/payos/return/route.ts`

```
Build app/api/payos/return/route.ts:
- Method: GET (PayOS redirect GET request)
- Doc query params: code, status, orderCode, cancel
- Neu status === 'PAID' hoac code === '00':
    redirect('/checkout/success?via=payos')
- Neu cancel === 'true' hoac status === 'CANCELLED':
    redirect('/checkout?cancelled=true')
- Mac dinh: redirect('/checkout')
```

### Task P3.6 - Update `app/checkout/success/page.tsx`

```
Update app/checkout/success/page.tsx:
- Doc searchParams.via
- Neu via === 'payos': hien thi "Thanh toan QR thanh cong!" + icon the ngan hang
- Mac dinh (COD): hien thi "Dat hang thanh cong! Chung toi se lien he qua SDT."
```

### Them env variables can thiet

```
# .env.local (them vao)
PAYOS_CLIENT_ID=
PAYOS_API_KEY=
PAYOS_CHECKSUM_KEY=
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app   # khong co /
```

### Them env vao Vercel

Them 4 env vars tren vao Vercel Dashboard -> Settings -> Environment Variables.

### Flow test PayOS (dung tien that 1.000d)

1. Them san pham vao gio
2. Vao /checkout -> dien form -> chon "Chuyen khoan QR (PayOS)"
3. Nhan "Dat hang" -> redirect sang trang PayOS
4. Quet QR bang app ngan hang -> chuyen 1.000d
5. PayOS redirect ve /api/payos/return -> /checkout/success
6. Kiem tra Supabase: order status = 'confirmed'
7. Kiem tra webhook log tren my.payos.vn
