# Du Lạc — Component List

## Quy tắc đặt tên
- PascalCase cho component: `ProductCard.tsx`
- Folder theo nhóm: `components/ui/`, `components/landing/`, `components/shop/`, `components/layout/`
- 1 file = 1 component = 1 export default
- Props luôn có TypeScript interface

---

## UI Primitives — `components/ui/`

### `Button.tsx`
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit'
}
// primary: bg-dulac-terra text-dulac-paper
// secondary: border border-dulac-gold text-dulac-gold
// ghost: text-dulac-paper/60 hover:text-dulac-paper
```

### `Card.tsx`
```typescript
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean  // thêm hover effect nếu true
}
// bg-dulac-wood rounded-xl border border-dulac-wood/50
// hover: border-dulac-gold/40 -translate-y-1
```

### `Badge.tsx`
```typescript
interface BadgeProps {
  label: string
  variant?: 'moss' | 'terra' | 'gold'
}
// moss: bg-dulac-moss/30 text-dulac-moss border border-dulac-moss/40
```

### `Input.tsx`
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}
// bg-dulac-wood/50 border border-dulac-wood text-dulac-paper
// focus: border-dulac-terra outline-none
```

### `SectionTitle.tsx`
```typescript
interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}
// title: text-dulac-gold text-3xl font-bold
// subtitle: text-dulac-paper/70 mt-2
```

---

## Layout — `components/layout/`

### `Navbar.tsx`
```typescript
// Không cần props — lấy cart count từ useCartStore
// sticky top-0 backdrop-blur-md bg-dulac-dark/90
// Logo bên trái, links giữa, cart icon + avatar bên phải
// Mobile: hamburger → slide menu
```

### `Footer.tsx`
```typescript
// Không cần props
// Logo + mô tả ngắn | Links | Social media icons
// bg-dulac-wood/50 border-t border-dulac-wood/60
```

---

## Landing Page — `components/landing/`

### `HeroSection.tsx`
```typescript
// Không cần props — nội dung hardcode hoặc từ config
// Full viewport, background pixel art + overlay
// Tiêu đề game lớn (text-dulac-gold)
// CTA: "Khám phá Du Lạc" → /shop, "Xem Trailer" → scroll to video
// Animated scroll indicator xuống
```

### `TrailerSection.tsx`
```typescript
interface TrailerSectionProps {
  youtubeId: string  // VD: "dQw4w9WgXcQ"
  title?: string
}
// Section với YouTube iframe embed
// rounded-2xl overflow-hidden, aspect-video
// Tiêu đề section phía trên
```

### `GallerySection.tsx`
```typescript
interface GallerySectionProps {
  images: string[]  // Mảng URL ảnh screenshot
}
// Grid ảnh 2x2 hoặc 3x2
// Click → lightbox (có thể dùng thư viện react-image-lightbox hoặc tự build)
```

### `FeaturesSection.tsx`
```typescript
interface Feature {
  icon: string       // emoji hoặc tên icon Lucide
  title: string
  description: string
}
interface FeaturesSectionProps {
  features: Feature[]
}
// Grid 3 cột desktop, 1 cột mobile
// Mỗi card: icon lớn, tiêu đề dulac-gold, mô tả
```

### `LoreSection.tsx`
```typescript
// Hardcode nội dung câu chuyện game
// Layout: text bên trái, ảnh minh họa bên phải
// Hoặc ngược lại xen kẽ (alternating)
```

---

## Shop — `components/shop/`

### `ProductGrid.tsx`
```typescript
interface ProductGridProps {
  products: Product[]
  initialCategory?: string
}
// Filter tabs: Tất cả | Áo | Sticker | Acrylic
// Grid 3 cột desktop, 2 cột tablet, 1 cột mobile
// Render ProductCard cho mỗi sản phẩm
```

### `ProductCard.tsx`
```typescript
interface ProductCardProps {
  product: Product
}
// Dùng Card.tsx làm wrapper
// Ảnh (aspect-square), tên, category badge, giá, nút "Thêm vào giỏ"
// Hover: zoom ảnh nhẹ, border dulac-gold
// Link to /shop/[id] khi click vào ảnh/tên
```

### `CartDrawer.tsx`
```typescript
// "use client"
// Không cần props — lấy state từ useCartStore
// Overlay bên phải (fixed inset-y-0 right-0 w-80 md:w-96)
// List CartItem, tổng tiền, nút "Thanh toán" → /checkout
// Nút đóng (X) phía trên
```

### `CartItemRow.tsx`
```typescript
// Tên file là CartItemRow để tránh trùng với CartItem type từ types/index.ts
interface CartItemRowProps {
  item: CartItem  // CartItem type từ @/types
}
// Dùng trong CartDrawer
// Ảnh nhỏ, tên sản phẩm, size, giá, input số lượng, nút xóa
// Dùng useCartStore để update/remove
```

### `CheckoutForm.tsx`
```typescript
// "use client"
// Form: họ tên, SĐT, địa chỉ, quận/huyện, tỉnh/thành
// Radio: COD hoặc Chuyển khoản
// Nút "Đặt hàng" → POST /api/orders
// Sau khi thành công: clear cart + hiện thông báo
```

### `OrderSummary.tsx`
```typescript
interface OrderSummaryProps {
  items: CartItem[]
}
// Sidebar trong trang checkout
// List sản phẩm, số lượng, giá từng món
// Tổng cộng, phí ship (miễn phí hoặc cố định)
```

---

## Checklist build order (thứ tự nên làm)

1. [ ] `types/index.ts` — Interfaces trước
2. [ ] `store/cartStore.ts` — Cart state
3. [ ] `lib/supabase.ts` — Client
4. [ ] `tailwind.config.ts` — Theme colors
5. [ ] UI primitives: Button, Card, Badge, Input, SectionTitle
6. [ ] Layout: Navbar, Footer
7. [ ] Landing sections: Hero, Trailer, Gallery, Features, Lore
8. [ ] Shop: ProductGrid, ProductCard
9. [ ] Cart: CartDrawer, CartItem
10. [ ] Auth: Login, Register pages
11. [ ] Checkout: CheckoutForm, OrderSummary
12. [ ] API: `/api/orders`
