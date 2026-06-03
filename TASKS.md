# Du Lac - Danh Sach Cong Viec

> Nguyen tac: Deploy cho team xem duoc truoc, moi thu khac tinh sau.
> Cap nhat [ ] -> [x] khi xong tung task.

---

## GIAI DOAN 1 - Deploy MVP (Uu tien toi cao)

### Buoc 1 - Supabase database - CAN LAM THU CONG
- [ ] Vao supabase.com -> SQL Editor -> chay SQL tao bang products, profiles, orders (docs/db-schema.md)
- [ ] Chay trigger handle_new_user
- [ ] Chay seed data (11 san pham)
- [ ] Chay ALTER TABLE them discount_price va is_featured (docs/db-schema.md phan cap nhat)
- [ ] Verify: Table Editor thay products co 11 rows

### Buoc 2 - Trang Shop - XONG
- [x] components/shop/ProductCard.tsx
- [x] components/shop/ProductGrid.tsx
- [x] app/shop/page.tsx
- [x] app/shop/[slug]/page.tsx
- [x] components/shop/AddToCartButton.tsx
- [ ] Verify: /shop hien thi san pham, click vao thay detail

### Buoc 3 - Cart Drawer - XONG
- [x] components/shop/CartItemRow.tsx
- [x] components/shop/CartDrawer.tsx
- [x] Mount CartDrawer vao app/layout.tsx
- [ ] Verify: them san pham -> drawer mo, so luong dung, tong tien dung

### Buoc 4 - Deploy Vercel - CAN LAM THU CONG
- [ ] npm run build tren may local - khong co loi
- [ ] git add . && git commit -m "feat: shop + cart" && git push
- [ ] vercel.com -> New Project -> Import repo
- [ ] Them env variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- [ ] Deploy thanh cong -> copy URL -> gui cho team

> XONG BUOC NAY = TEAM XEM DUOC WEB ROI

---

## GIAI DOAN 1.5 - UI Optimization + Tich hop Shop vao Landing (lam truoc G2)

> Uu tien: sua bug critical truoc, sau do visual polish.

### Bug Critical (anh huong usability ngay bay gio)
- [ ] Them nut cart icon vao Navbar.tsx: goi openDrawer() tu cartStore, hien badge so luong item
- [ ] Chuyen Navbar + Footer tu app/page.tsx vao app/layout.tsx de shop pages co header/footer
- [ ] Them { href: '/shop', label: 'Cua hang' } vao navigationItems trong content/home.ts
- [ ] Them pt-16 (padding-top: 64px) cho shop page hero de khong bi navbar che

### Visual Consistency - Shop khop voi Landing
- [ ] Viet lai shop hero (app/shop/page.tsx) dung Section variant="paper" + typography dulac-*
- [ ] Port ProductCard inline styles sang dulac-* Tailwind classes
- [ ] Port ProductGrid inline styles sang dulac-* Tailwind classes
- [ ] Port shop/[slug] page inline styles sang dulac-* Tailwind classes

### Tich hop Shop vao Landing Page
- [ ] Them ShopPreviewSection vao app/page.tsx (component da co tai components/landing/ShopPreviewSection.tsx, chua dung)
- [ ] Kiem tra lai ShopPreviewSection co dung dulac-* tokens va khop voi landing mood khong

### UX Polish
- [ ] Them quantity selector vao AddToCartButton (tang/giam so luong truoc khi them vao gio)
- [ ] Product detail: click thumbnail doi anh chinh (hien tai thumbnail chi hien thi, khong interactive)

---

## GIAI DOAN 2 - Auth + Checkout + SePay

### Auth
- [ ] app/auth/login/page.tsx - form email + password, redirect sau login
- [ ] app/auth/register/page.tsx - form dang ky, confirm password
- [ ] Update Navbar.tsx - avatar khi da login, nut dang xuat
- [ ] (Tuy chon) Google OAuth

### Checkout
- [ ] components/shop/OrderSummary.tsx - tom tat don hang
- [ ] components/shop/CheckoutForm.tsx - form dia chi + phuong thuc thanh toan (COD / Chuyen khoan SePay)
- [ ] app/checkout/page.tsx - layout 2 cot
- [ ] app/checkout/success/page.tsx - trang cam on (xu ly ca COD va SePay)
- [ ] app/checkout/cancel/page.tsx - xu ly khi huy thanh toan

### SePay QR Payment - CO SANDBOX, DANG KY BANG CCCD
- [ ] Dang ky tai sepay.vn, xac minh CCCD, lay API key
- [ ] npm install axios (hoac dung fetch thuan) - SePay khong co official SDK
- [ ] Them env: SEPAY_API_KEY, SEPAY_ACCOUNT_NUMBER, SEPAY_BANK_CODE, NEXT_PUBLIC_BASE_URL
- [ ] lib/sepay.ts - ham tao QR code URL va verify webhook signature
- [ ] app/api/orders/route.ts - tao don hang, sinh ma don (orderCode), tra ve QR URL SePay
- [ ] app/api/sepay/webhook/route.ts - nhan callback tu SePay, verify signature, update order status
- [ ] Them webhook URL vao dashboard SePay
- [ ] Them env vars vao Vercel Dashboard
- [ ] Chay SQL them cot sepay_transaction_id, sepay_order_code vao orders
- [ ] Test sandbox: tao don -> hien QR -> gia lap webhook -> order confirmed
- [ ] Verify end-to-end that: chon hang -> gio -> checkout -> quet QR ngan hang -> order confirmed

---

## GIAI DOAN 3 - Noi dung & Trang mo rong

### Trang Cot Truyen /lore
- [ ] lib/lore-data.ts - hardcode data cot truyen
- [ ] components/lore/LoreTimeline.tsx - timeline accordion 5 chapters
- [ ] components/lore/EpisodeCarousel.tsx - tap 1&2 co trailer, tap 3&4 sap ra mat
- [ ] components/lore/ReviewCard.tsx + ReviewForm.tsx
- [ ] app/lore/page.tsx
- [ ] SQL tao bang reviews

### Trang Thanh Vien /about
- [ ] SQL tao bang team_members, insert data thanh vien
- [ ] components/about/TeamCard.tsx
- [ ] app/about/page.tsx

### Puzzle / Hint /puzzle
- [ ] SQL tao bang game_notes, puzzles
- [ ] components/puzzle/PuzzleCard.tsx + HintFeed.tsx
- [ ] app/puzzle/page.tsx
- [ ] API: game-hints, game-notes, puzzles/verify

---

## GIAI DOAN 4 - Polish

- [ ] Responsive check (375px / 768px / 1280px)
- [ ] Upload anh that len Cloudinary, update URL Supabase
- [ ] Update Navbar: them links /lore, /puzzle, /about
- [ ] SEO: generateMetadata cho tung trang
- [ ] OG Image

---

## Trang thai tong quan

| Giai doan | Noi dung | Trang thai |
|---|---|---|
| G1 Deploy MVP | Landing + Shop + Cart + Vercel | Can Supabase + deploy |
| G1.5 UI Optimization | Cart trigger, Navbar/Footer global, Shop visual | Chua bat dau |
| G2 Auth + Checkout + SePay | Login / Checkout / QR payment | Chua bat dau |
| G3 Noi dung | Lore / About / Puzzle | Chua bat dau |
| G4 Polish | Responsive / Anh that / SEO | Chua bat dau |

Da xong: Next.js, Tailwind, Supabase client, Zustand cart, UI components,
Navbar, Footer, Landing page, ProductCard, ProductGrid, Shop pages,
CartItemRow, CartDrawer, layout mount, types voi PayOS support.

---

## Loi da biet

- Tailwind v4: KHONG dung @config, chi dung @theme trong globals.css
- Shadow custom khong work -> dung inline style
- Lucide-react v1.17: khong co Youtube/Facebook -> SVG inline
- Button voi Link: dung href prop, KHONG wrap Link trong Button
- FeaturesSection/GallerySection: 100% inline styles
- Shop routing: dung [slug], fetch .eq('slug', slug)
- File encoding: Write/Edit tool co the truncate file -> dung bash cat ENDOFFILE
- SePay: co sandbox, dang ky CCCD ca nhan duoc
- SePay: khong co official SDK, dung fetch/axios thuan toi
- SePay webhook: verify bang HMAC-SHA256 voi API key
- SePay orderCode: chuoi tu sinh, gan vao noi dung chuyen khoan de auto-detect

---

Cap nhat: 2026-06-01
