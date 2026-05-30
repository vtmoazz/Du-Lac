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

## GIAI DOAN 2 - Auth + Checkout + PayOS

### Auth
- [ ] app/auth/login/page.tsx - form email + password, redirect sau login
- [ ] app/auth/register/page.tsx - form dang ky, confirm password
- [ ] Update Navbar.tsx - avatar khi da login, nut dang xuat
- [ ] (Tuy chon) Google OAuth

### Checkout
- [ ] components/shop/OrderSummary.tsx - tom tat don hang
- [ ] components/shop/CheckoutForm.tsx - form dia chi + phuong thuc thanh toan (COD / PayOS)
- [ ] app/checkout/page.tsx - layout 2 cot
- [ ] app/checkout/success/page.tsx - trang cam on (xu ly ca COD va PayOS)
- [ ] app/checkout/[cancelled route] - xu ly khi huy PayOS

### PayOS QR Payment - KHONG CO SANDBOX, TEST VOI 1.000D THAT
- [ ] Dang ky tai my.payos.vn, xac minh, lay 3 keys (CLIENT_ID, API_KEY, CHECKSUM_KEY)
- [ ] npm install @payos/node
- [ ] Them env: PAYOS_CLIENT_ID, PAYOS_API_KEY, PAYOS_CHECKSUM_KEY, NEXT_PUBLIC_BASE_URL
- [ ] lib/payos.ts - khoi tao PayOS client
- [ ] app/api/orders/route.ts - tao don hang, neu PayOS thi goi API lay checkout_url
- [ ] app/api/payos/webhook/route.ts - nhan ket qua PayOS, verify signature, update order status
- [ ] app/api/payos/return/route.ts - redirect user sau khi thanh toan
- [ ] Them webhook URL va return URL vao my.payos.vn
- [ ] Them 4 env vars vao Vercel Dashboard
- [ ] Chay SQL them cot payos_order_code, payos_payment_link_id, payos_checkout_url vao orders
- [ ] Verify end-to-end: chon hang -> gio -> checkout PayOS -> quet QR -> order confirmed

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
| G2 Auth + Checkout + PayOS | Login / Checkout / QR payment | Chua bat dau |
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
- PayOS: khong co sandbox, test voi 1.000d that
- PayOS description: toi da 25 ky tu
- PayOS orderCode: so nguyen duong, dung Date.now()

---

Cap nhat: 2026-05-30
