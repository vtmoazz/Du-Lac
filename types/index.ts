// Du Lac - TypeScript Interfaces

// Product
export interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  price: number
  discount_price: number | null
  images: string[]
  category: ProductCategory
  sizes: string[]
  stock: number
  is_active: boolean
  is_featured: boolean
  created_at: string
}

export type ProductCategory =
  | 'kit_diy'
  | 'board_game'
  | 'sticker'
  | 'acrylic'
  | 'sach'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  kit_diy:    'Bo Kit DIY',
  board_game: 'Board Game',
  sticker:    'Sticker',
  acrylic:    'Acrylic / Moc khoa',
  sach:       'Sach / So tay',
}

export function getEffectivePrice(product: Pick<Product, 'price' | 'discount_price'>): number {
  return product.discount_price ?? product.price
}

// Cart
export interface CartItem {
  product_id: string
  product_name: string
  product_image: string
  price: number
  quantity: number
  size: string | null
}

// Order
export interface Order {
  id: string
  user_id: string | null
  items: OrderItem[]
  subtotal: number
  total: number
  status: OrderStatus
  payment_method: PaymentMethod
  shipping_address: ShippingAddress
  note: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  product_id: string
  product_name: string
  product_image: string
  price: number
  quantity: number
  size: string | null
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipping'
  | 'delivered'
  | 'cancelled'

export type PaymentMethod = 'cod' | 'bank_transfer' | 'payos'

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending:    'Cho xac nhan',
  confirmed:  'Da xac nhan',
  processing: 'Dang chuan bi',
  shipping:   'Dang giao hang',
  delivered:  'Da giao',
  cancelled:  'Da huy',
}

// Shipping Address
export interface ShippingAddress {
  full_name: string
  phone: string
  address: string
  district: string
  city: string
}

// User Profile
export interface Profile {
  id: string
  email: string | null
  full_name: string | null
  phone: string | null
  address: string | null
  updated_at: string
}

// API Response
export interface ApiResponse<T = null> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Checkout Form
export interface CheckoutFormData {
  full_name: string
  phone: string
  address: string
  district: string
  city: string
  payment_method: PaymentMethod
  note?: string
}

// Helpers
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}

export function calcTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
