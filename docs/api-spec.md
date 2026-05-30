# Du Lạc — API Specification

## Tổng quan
Dùng Next.js App Router API Routes (`app/api/`).
Data fetch từ Server Components dùng Supabase trực tiếp (không qua API).
API Routes chỉ dùng cho: tạo order, webhook, mutation từ client.

---

## API Routes

### POST `/api/orders`
Tạo đơn hàng mới.

**Request body:**
```json
{
  "items": [
    {
      "product_id": "uuid",
      "product_name": "Áo Du Lạc Đen",
      "product_image": "https://...",
      "price": 350000,
      "quantity": 2,
      "size": "L"
    }
  ],
  "shipping_address": {
    "full_name": "Nguyễn Văn A",
    "phone": "0912345678",
    "address": "123 Đường ABC",
    "district": "Quận 1",
    "city": "TP. Hồ Chí Minh"
  },
  "payment_method": "cod",
  "note": "Giao giờ hành chính"
}
```

> **Lưu ý:** Client KHÔNG gửi `subtotal` hay `total`. Server tự tính từ `items`:
> ```typescript
> const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
> const total = subtotal // Hiện tại miễn phí ship. Sau này: total = subtotal + shippingFee
> ```

**Response 200:**
```json
{
  "success": true,
  "order_id": "uuid",
  "message": "Đặt hàng thành công"
}
```

**Response 400:**
```json
{
  "success": false,
  "error": "Thiếu thông tin bắt buộc"
}
```

---

### GET `/api/products`
Lấy danh sách sản phẩm (dùng cho client-side filter nếu cần).

**Query params:**
```
?category=ao          — lọc theo loại
?limit=12             — số sản phẩm mỗi trang
?offset=0             — phân trang
```

**Response 200:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Áo Du Lạc Đen",
      "slug": "ao-du-lac-den",
      "price": 350000,
      "images": ["https://..."],
      "category": "ao",
      "sizes": ["S","M","L","XL"],
      "stock": 50
    }
  ],
  "total": 3
}
```

---

## Supabase Queries (dùng trong Server Components)

```typescript
// Lấy tất cả sản phẩm
const { data: products } = await supabase
  .from('products')
  .select('*')
  .eq('is_active', true)
  .order('created_at', { ascending: false })

// Lấy 1 sản phẩm theo slug
const { data: product } = await supabase
  .from('products')
  .select('*')
  .eq('slug', slug)
  .single()

// Lấy đơn hàng của user
const { data: orders } = await supabase
  .from('orders')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false })
```

---

---

### GET `/api/reviews`
Lấy danh sách bình luận / đánh giá.

**Query params:**
```
?target=lore        — lọc theo mục tiêu ('lore' mặc định)
?featured=true      — chỉ lấy bình luận nổi bật
?limit=10
```

**Response 200:**
```json
{
  "data": [
    {
      "id": "uuid",
      "user_name": "Văn Thành",
      "avatar_url": null,
      "content": "Cốt truyện rất hay!",
      "rating": 5,
      "is_featured": true,
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

---

### POST `/api/reviews`
Gửi bình luận mới.

**Request body:**
```json
{
  "user_name": "Văn Thành",
  "content": "Cốt truyện rất hay!",
  "rating": 5,
  "target": "lore"
}
```

**Response 200:** `{ "success": true, "id": "uuid" }`

---

### GET `/api/game-hints`
Lấy hints từ note của người chơi game — hiển thị trên trang puzzle/lore của web.

**Query params:**
```
?puzzle_id=rong-nuoc-key    — lọc theo câu đố
?limit=5                    — số hint hiển thị
```

**Response 200:**
```json
{
  "data": [
    {
      "id": "uuid",
      "game_alias": "Lữ Khách #42",
      "content": "Nhìn kỹ vào hoa văn trống đồng...",
      "upvotes": 12,
      "puzzle_id": "rong-nuoc-key"
    }
  ]
}
```

---

### POST `/api/game-notes`
Game client gọi API này để lưu note của người chơi vào database chung.

**Request body:**
```json
{
  "game_alias": "Lữ Khách #42",
  "puzzle_id": "rong-nuoc-key",
  "content": "Nhìn kỹ vào hoa văn trống đồng...",
  "is_public": true
}
```

> **Lưu ý bảo mật**: API này cần rate-limit (1 note/10 giây/IP). Content nên được sanitize trước khi lưu.

**Response 200:** `{ "success": true, "id": "uuid" }`

---

### POST `/api/puzzles/verify`
Người chơi (web hoặc game) submit đáp án câu đố để nhận key/reward.

**Request body:**
```json
{
  "puzzle_id": "rong-nuoc-key",
  "answer": "HOA SEN"
}
```

**Response 200 (đúng):**
```json
{
  "success": true,
  "reward_key": "DL-ROI-NUOC-2025",
  "message": "Chính xác! Bạn đã giải mã câu đố."
}
```

**Response 400 (sai):**
```json
{ "success": false, "message": "Đáp án chưa đúng. Thử lại nhé!" }
```

---

### GET `/api/team`
Lấy danh sách thành viên (cho trang About).

**Response 200:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Văn Thành",
      "role": "Dev",
      "bio": "...",
      "avatar_url": "https://...",
      "social_url": "https://github.com/..."
    }
  ]
}
```

---

## Error Handling Convention

```typescript
// Luôn wrap Supabase calls với error check
const { data, error } = await supabase.from('products').select('*')

if (error) {
  console.error('Supabase error:', error.message)
  // Server component: throw error hoặc return notFound()
  // API route: return NextResponse.json({ error: error.message }, { status: 500 })
}
```

---

### POST `/api/orders` — cap nhat voi PayOS

payment_method co them gia tri: `'payos'`

Khi payment_method = 'payos':
- Server tao don hang trong DB voi status = 'pending'
- Server goi PayOS API tao payment link
- Tra ve checkoutUrl de client redirect
- Sau khi thanh toan xong, PayOS goi webhook -> server cap nhat status -> 'confirmed'

**Request body (PayOS flow):**
```json
{
  "items": [...],
  "shipping_address": {...},
  "payment_method": "payos",
  "note": ""
}
```

**Response 200 (payos):**
```json
{
  "success": true,
  "order_id": "uuid",
  "payment_method": "payos",
  "checkout_url": "https://pay.payos.vn/web/...",
  "message": "Chuyen huong den trang thanh toan"
}
```

**Response 200 (cod / bank_transfer — khong thay doi):**
```json
{
  "success": true,
  "order_id": "uuid",
  "payment_method": "cod",
  "message": "Dat hang thanh cong"
}
```

---

### POST `/api/payos/webhook`

PayOS goi endpoint nay sau khi giao dich thanh cong.
Can dung signature verification (checksum) truoc khi xu ly.

**Headers tu PayOS:**
```
x-payos-signature: <hmac-sha256>
```

**Request body tu PayOS:**
```json
{
  "code": "00",
  "desc": "success",
  "data": {
    "orderCode": 123456789,
    "amount": 350000,
    "description": "DL-123456789",
    "accountNumber": "...",
    "reference": "...",
    "transactionDateTime": "...",
    "paymentLinkId": "...",
    "code": "00",
    "desc": "Thanh toan thanh cong"
  },
  "signature": "..."
}
```

**Logic xu ly:**
1. Verify signature: `HMAC-SHA256(data, checksumKey)`
2. Tim order theo `payos_order_code = data.orderCode`
3. Neu `code == "00"`: cap nhat `status = 'confirmed'`
4. Neu `code != "00"`: cap nhat `status = 'cancelled'`
5. Tra ve `{ error: "0" }` de PayOS biet da nhan duoc

**File**: `app/api/payos/webhook/route.ts`

> **Bao mat**: Phai verify signature. NEU KHONG, bat ky ai cung co the fake webhook
> de confirm don hang gia. Dung `@payos/node` SDK de verify tu dong.

---

### GET `/api/payos/return`

PayOS redirect user ve day sau khi thanh toan (thanh cong hoac that bai).

**Query params tu PayOS:**
```
?code=00&id=...&cancel=false&status=PAID&orderCode=123456789
```

**Logic:**
- `status=PAID` va `code=00`: redirect -> `/checkout/success?order_id=...`
- `cancel=true` hoac `status=CANCELLED`: redirect -> `/checkout/cancel`

**File**: `app/api/payos/return/route.ts` (hoac xu ly trong `app/checkout/return/page.tsx`)
