# Du Lạc — Database Schema (Supabase / PostgreSQL)

## Tổng quan
Dùng Supabase làm database + auth.
Tất cả table đều có Row Level Security (RLS) bật.

---

## Table: `products`

```sql
CREATE TABLE products (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,          -- URL-friendly: "ao-du-lac-den"
  description TEXT,
  price       NUMERIC(10, 0) NOT NULL,       -- VNĐ, không dùng decimal
  images      TEXT[] NOT NULL DEFAULT '{}',  -- Mảng URL Cloudinary
  category    TEXT NOT NULL,                 -- 'ao', 'sticker', 'acrylic'
  sizes       TEXT[] DEFAULT '{}',           -- ['S','M','L','XL'] hoặc [] nếu không có size
  stock       INTEGER NOT NULL DEFAULT 0,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Index
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_slug ON products(slug);

-- RLS: ai cũng đọc được, chỉ admin mới sửa
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON products FOR SELECT USING (is_active = true);
```

**Dữ liệu mẫu category:**
- `'kit_diy'`    — Bộ Kit tự làm tại nhà
- `'board_game'` — Board game / Card game
- `'sticker'`    — Sticker nhân vật
- `'acrylic'`    — Charm acrylic, móc khóa
- `'sach'`       — Sách, sổ tay, artbook

---

## Table: `profiles`

```sql
-- Tự động tạo khi user đăng ký (trigger từ auth.users)
CREATE TABLE profiles (
  id         UUID REFERENCES auth.users(id) PRIMARY KEY,
  email      TEXT,
  full_name  TEXT,
  phone      TEXT,
  address    TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- RLS: user chỉ đọc/sửa profile của mình
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "User own profile" ON profiles
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
```

---

## Table: `orders`

```sql
CREATE TABLE orders (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id          UUID REFERENCES auth.users(id),   -- null nếu guest
  items            JSONB NOT NULL,                    -- Xem format bên dưới
  subtotal         NUMERIC(12, 0) NOT NULL,
  total            NUMERIC(12, 0) NOT NULL,
  status           TEXT DEFAULT 'pending',            -- Xem states bên dưới
  payment_method   TEXT DEFAULT 'cod',               -- 'cod' | 'bank_transfer'
  shipping_address JSONB NOT NULL,                   -- Xem format bên dưới
  note             TEXT,
  created_at       TIMESTAMPTZ DEFAULT now(),
  updated_at       TIMESTAMPTZ DEFAULT now()
);

-- Index
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "User own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Insert order" ON orders
  FOR INSERT WITH CHECK (true);  -- Guest cũng đặt được
```

### Format JSONB `items`

```json
[
  {
    "product_id": "uuid-here",
    "product_name": "Áo Du Lạc Đen",
    "product_image": "https://res.cloudinary.com/...",
    "price": 350000,
    "quantity": 2,
    "size": "L"
  }
]
```

### Format JSONB `shipping_address`

```json
{
  "full_name": "Nguyễn Văn A",
  "phone": "0912345678",
  "address": "123 Đường ABC",
  "district": "Quận 1",
  "city": "TP. Hồ Chí Minh"
}
```

### Order Status States

```
pending       → Vừa đặt, chờ xác nhận
confirmed     → Đã xác nhận
processing    → Đang chuẩn bị hàng
shipping      → Đang giao
delivered     → Đã giao thành công
cancelled     → Đã hủy
```

---

## Trigger: Auto-create profile

```sql
-- Chạy khi user đăng ký mới
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

---

## Seed Data — Chạy để có dữ liệu test

```sql
INSERT INTO products (name, slug, description, price, images, category, sizes, stock) VALUES
-- Bộ Kit DIY
(
  'Bộ Kit Rối Nước Tự Làm',
  'bo-kit-roi-nuoc-tu-lam',
  'Nguyên liệu + hướng dẫn chi tiết để tự chế rối nước mini tại nhà. Chất liệu gỗ tự nhiên, an toàn cho trẻ em.',
  280000,
  ARRAY['https://via.placeholder.com/600x600?text=Kit+Roi+Nuoc'],
  'kit_diy',
  ARRAY[]::TEXT[],
  50
),
(
  'Bộ Kit Trống Bỏi Mini',
  'bo-kit-trong-boi-mini',
  'Tự lắp ráp trống truyền thống thu nhỏ từ nguyên liệu thủ công. Kèm hướng dẫn và bài nhạc cơ bản.',
  150000,
  ARRAY['https://via.placeholder.com/600x600?text=Kit+Trong+Boi'],
  'kit_diy',
  ARRAY[]::TEXT[],
  60
),
(
  'Bộ Kit Đèn Lồng Dân Gian',
  'bo-kit-den-long-dan-gian',
  'Nguyên liệu giấy dó + khung tre + nến sáp để tự làm đèn lồng phong cách Hội An.',
  120000,
  ARRAY['https://via.placeholder.com/600x600?text=Kit+Den+Long'],
  'kit_diy',
  ARRAY[]::TEXT[],
  80
),
-- Board Game & Card Game
(
  'Board Game Ô Ăn Quan',
  'board-game-o-an-quan',
  'Phiên bản cao cấp gỗ MDF + hạt đá màu tự nhiên. 2-4 người chơi, phù hợp mọi lứa tuổi.',
  350000,
  ARRAY['https://via.placeholder.com/600x600?text=O+An+Quan'],
  'board_game',
  ARRAY[]::TEXT[],
  40
),
(
  'Card Game Như Đũa Có Đôi',
  'card-game-nhu-dua-co-doi',
  '80 thẻ hình Đông Hồ, chủ đề ghép đôi văn hóa dân gian. 2-6 người chơi.',
  220000,
  ARRAY['https://via.placeholder.com/600x600?text=Card+Game'],
  'board_game',
  ARRAY[]::TEXT[],
  60
),
(
  'Domino Dân Gian Du Lạc',
  'domino-dan-gian-du-lac',
  '28 quân domino họa tiết trống đồng và hoa sen. Hộp gỗ cao cấp.',
  180000,
  ARRAY['https://via.placeholder.com/600x600?text=Domino'],
  'board_game',
  ARRAY[]::TEXT[],
  45
),
-- Sticker & Acrylic
(
  'Sticker Pack Nhân Vật Du Lạc',
  'sticker-pack-nhan-vat',
  'Bộ 20 sticker holo in hình các nhân vật pixel art trong game Du Lạc.',
  85000,
  ARRAY['https://via.placeholder.com/600x600?text=Sticker+Pack'],
  'sticker',
  ARRAY[]::TEXT[],
  120
),
(
  'Acrylic Stand Nhân Vật',
  'acrylic-stand-nhan-vat',
  '3 nhân vật chính + chân đế acrylic trong suốt. Kích thước 8cm.',
  145000,
  ARRAY['https://via.placeholder.com/600x600?text=Acrylic+Stand'],
  'acrylic',
  ARRAY[]::TEXT[],
  70
),
(
  'Móc Khóa Rối Nước',
  'moc-khoa-roi-nuoc',
  'Acrylic 2 mặt in hình rối nước truyền thống. 5 mẫu nhân vật khác nhau.',
  65000,
  ARRAY['https://via.placeholder.com/600x600?text=Moc+Khoa'],
  'acrylic',
  ARRAY[]::TEXT[],
  150
),
-- Sách & Sổ tay
(
  'Sổ Tay Lữ Hành Du Lạc',
  'so-tay-lu-hanh-du-lac',
  'Sổ tay A5 bìa cứng, họa tiết Đông Hồ. 200 trang giấy kem cao cấp, kèm sticker trang trí.',
  195000,
  ARRAY['https://via.placeholder.com/600x600?text=So+Tay'],
  'sach',
  ARRAY[]::TEXT[],
  90
),
(
  'Artbook Du Lạc Tập 1',
  'artbook-du-lac-tap-1',
  'Tập 1 artbook chính thức: concept art, lore game, và câu chuyện hậu trường. In màu toàn bộ.',
  320000,
  ARRAY['https://via.placeholder.com/600x600?text=Artbook'],
  'sach',
  ARRAY[]::TEXT[],
  35
);
```

---

---

## Cập nhật Table: `products` — thêm trường giảm giá

```sql
-- Thêm cột discount_price vào products (NULL = không giảm giá)
ALTER TABLE products ADD COLUMN IF NOT EXISTS
  discount_price NUMERIC(10, 0) DEFAULT NULL;

-- Cột is_featured để ghim sản phẩm nổi bật
ALTER TABLE products ADD COLUMN IF NOT EXISTS
  is_featured BOOLEAN DEFAULT false;
```

> **Quy tắc hiển thị giá:**
> - Nếu `discount_price IS NOT NULL` → hiển thị `discount_price` đỏ + `price` gạch ngang
> - Badge "SALE" tự động xuất hiện trên card khi có `discount_price`
> - Luôn tính tổng giỏ hàng theo `discount_price ?? price`

---

## Table: `reviews`

```sql
CREATE TABLE reviews (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id),
  user_name   TEXT NOT NULL,                    -- Tên hiển thị (không cần login)
  avatar_url  TEXT,
  content     TEXT NOT NULL,
  rating      SMALLINT CHECK (rating BETWEEN 1 AND 5),
  target      TEXT NOT NULL DEFAULT 'lore',     -- 'lore' | product_slug
  is_featured BOOLEAN DEFAULT false,            -- Admin ghim bình luận nổi bật
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Anyone can insert review" ON reviews FOR INSERT WITH CHECK (true);
```

---

## Table: `game_notes`

Dữ liệu chung giữa game và web — note người chơi trong game được hiển thị làm hint trên website.

```sql
CREATE TABLE game_notes (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id),   -- null nếu guest game
  game_alias  TEXT,                             -- Tên người chơi trong game
  puzzle_id   TEXT NOT NULL,                    -- ID của câu đố liên quan
  content     TEXT NOT NULL,                    -- Nội dung note/hint
  is_public   BOOLEAN DEFAULT true,             -- Có hiển thị lên web không
  upvotes     INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE game_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read game_notes" ON game_notes
  FOR SELECT USING (is_public = true);
CREATE POLICY "Anyone insert game_note" ON game_notes
  FOR INSERT WITH CHECK (true);
```

---

## Table: `puzzles`

```sql
CREATE TABLE puzzles (
  id          TEXT PRIMARY KEY,                 -- Slug: 'rong-nuoc-key', 'dong-ho-cipher'
  title       TEXT NOT NULL,
  description TEXT NOT NULL,                   -- Mô tả câu đố (hiển thị trên web)
  hint_prefix TEXT,                            -- Phần gợi ý mặc định từ game master
  answer_hash TEXT NOT NULL,                   -- bcrypt hash của đáp án (không lộ raw)
  reward_key  TEXT,                            -- Key/code người chơi nhận được khi giải xong
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- RLS: đọc được, không cho sửa
ALTER TABLE puzzles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read puzzles" ON puzzles FOR SELECT USING (is_active = true);
```

---

## Table: `team_members`

```sql
CREATE TABLE team_members (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  role        TEXT NOT NULL,                   -- 'Dev', 'Designer', 'Game Dev', 'Sound'
  bio         TEXT,
  avatar_url  TEXT,
  social_url  TEXT,                            -- GitHub / LinkedIn / Facebook
  sort_order  INTEGER DEFAULT 0,
  is_active   BOOLEAN DEFAULT true
);

-- RLS: public read only
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read team" ON team_members FOR SELECT USING (is_active = true);
```

---

## Checklist Setup Supabase

- [ ] Tạo project mới tại supabase.com
- [ ] Chạy các SQL CREATE TABLE ở trên trong SQL Editor
- [ ] Chạy `ALTER TABLE products ADD COLUMN discount_price` và `is_featured`
- [ ] Chạy trigger `handle_new_user`
- [ ] Chạy seed data
- [ ] Chạy CREATE TABLE cho: `reviews`, `game_notes`, `puzzles`, `team_members`
- [ ] Lấy `Project URL` và `anon key` → điền vào `.env.local`
- [ ] Bật Email Auth trong Authentication → Providers
- [ ] (Tùy chọn) Bật Google OAuth trong Authentication → Providers

---

## Cap nhat Table: `orders` — them truong PayOS

```sql
-- Them cac cot luu thong tin giao dich PayOS
ALTER TABLE orders ADD COLUMN IF NOT EXISTS
  payos_order_code BIGINT UNIQUE;          -- Ma don hang PayOS (so nguyen)

ALTER TABLE orders ADD COLUMN IF NOT EXISTS
  payos_payment_link_id TEXT;             -- ID link thanh toan PayOS

ALTER TABLE orders ADD COLUMN IF NOT EXISTS
  payos_checkout_url TEXT;                -- URL trang thanh toan PayOS

-- Index
CREATE INDEX IF NOT EXISTS idx_orders_payos_code ON orders(payos_order_code);
```

> **Luu y**: `payos_order_code` phai la so nguyen duong, unique, toi da 9 chu so.
> Dung `Date.now()` hoac sequence de sinh ra, KHONG dung UUID.
