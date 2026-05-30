# Du Lạc — CLAUDE.md

## Tài liệu tham chiếu
- `docs/design-spec.md` — Màu sắc, typography, component visual guide
- `docs/plan-3-days.md` — Kế hoạch triển khai chi tiết
- `docs/db-schema.md` — Schema Supabase + seed data
- `docs/components-list.md` — Danh sách components cần build
- `docs/api-spec.md` — API endpoints

---

## Trạng thái hiện tại — 2026-05-29

### ✅ ĐÃ HOÀN THÀNH

**Setup & Config**
- Next.js 16 + Tailwind v4 + TypeScript
- `tailwind.config.ts` — palette Đông Hồ (cream, red, amber, jade, brown, ink)
- `app/globals.css` — `@theme` với tất cả CSS variables (KHÔNG dùng `@config` — gây conflict Tailwind v4)
- `app/layout.tsx` — Noto Serif Display + Be Vietnam Pro fonts
- `lib/supabase.ts` — client
- `store/cartStore.ts` — Zustand cart
- `types/index.ts` — Product, Cart, Order interfaces; **ProductCategory mới**: `kit_diy | board_game | sticker | acrylic | sach`
- `.env.local` — Supabase URL + anon key đã điền

**Components đã build**
- `components/ui/Button.tsx` — variant primary/secondary/ghost, size sm/md/lg, **hỗ trợ `href` prop** (render thành Link) — QUAN TRỌNG: KHÔNG wrap `<Link>` bên trong `<Button>`, phải dùng `href` prop
- `components/ui/Card.tsx` — bg white, border, shadow dùng inline style (Tailwind custom shadow không work trong v4)
- `components/ui/Badge.tsx` — jade/red/amber variants
- `components/ui/Input.tsx`
- `components/ui/SectionTitle.tsx`
- `components/layout/Navbar.tsx` — sticky, cart icon, mobile menu
- `components/layout/Footer.tsx` — 3 cột, social icons SVG inline (lucide-react v1.17 không có Youtube/Facebook)
- `components/landing/HeroSection.tsx`
- `components/landing/AboutSection.tsx`
- `components/landing/FeaturesSection.tsx` — **dùng 100% inline styles** (Tailwind grid/flex đôi khi không compile đúng trong v4)
- `components/landing/GallerySection.tsx` — **dùng 100% inline styles**, `width: '100%'` bắt buộc cho aspect-ratio
- `components/landing/ShopPreviewSection.tsx` — `'use client'`, dùng inline styles

**Pages**
- `app/page.tsx` — Landing page đầy đủ (Hero → About → Features → Gallery → ShopPreview)

---

### ❌ CHƯA LÀM — LÀM TIẾP TỪ ĐÂY

#### BƯỚC 1 — Setup Supabase database (15 phút)
Vào [supabase.com](https://supabase.com) → Project → SQL Editor → chạy lần lượt:
1. SQL tạo bảng từ `docs/db-schema.md` (products, profiles, orders)
2. Trigger `handle_new_user`
3. Seed data (11 sản phẩm) từ cuối file `docs/db-schema.md`

#### BƯỚC 2 — Trang `/shop` (Ngày 2 sáng)
Cần tạo:
- `app/shop/page.tsx` — fetch products từ Supabase, filter theo category
- `components/shop/ProductGrid.tsx` — grid 3 cột + filter tabs
- `components/shop/ProductCard.tsx` — card với ảnh, badge, giá, nút thêm giỏ

#### BƯỚC 3 — Product Detail `/shop/[slug]` (Ngày 2 chiều)
- `app/shop/[slug]/page.tsx` — fetch product by slug, chọn size, thêm giỏ

#### BƯỚC 4 — CartDrawer (Ngày 2 chiều)
- `components/shop/CartDrawer.tsx` — slide từ phải, useCartStore, checkout CTA

#### BƯỚC 5 — Checkout + Orders (Ngày 3 sáng)
- `app/checkout/page.tsx`
- `components/shop/CheckoutForm.tsx`
- `app/api/orders/route.ts` — POST order vào Supabase

#### BƯỚC 6 — Auth (Ngày 3 chiều)
- `app/auth/page.tsx` — login/register với Supabase Auth
- Protect checkout nếu cần

#### BƯỚC 7 — Deploy Vercel
- Push lên GitHub
- Import vào Vercel, điền env vars
- Test production build

---

## Lưu ý kỹ thuật quan trọng (PHẢI ĐỌC)

### Tailwind v4 quirks
- **KHÔNG dùng `@config`** trong globals.css — conflict với `@theme`, làm grid/layout classes không compile
- Dùng `@theme` để define custom colors/shadows
- Với complex layout (grid nhiều cột, flex với nhiều children), dùng **inline styles** để chắc ăn
- `aspect-ratio` cần `width: '100%'` đi kèm mới hoạt động

### Next.js 16 quirks
- **KHÔNG wrap `<Link>` bên trong `<Button>` hoặc bất kỳ component nào** → gây "Router action dispatched before initialization"
- Thay bằng `<Button href="/path">` — Button.tsx đã hỗ trợ sẵn
- Social icons (`Youtube`, `Facebook`) bị xóa khỏi lucide-react v1.17+ → dùng SVG inline

### Lucide React v1.17
- Một số brand icons bị remove: Youtube, Facebook, Twitter
- Dùng SVG inline cho social icons (đã làm trong Footer.tsx)

### Stack
```
Next.js 16.2.6 · React 19 · Tailwind v4 · TypeScript 5
Zustand 5 · Supabase JS 2 · Lucide React 1.17
```
