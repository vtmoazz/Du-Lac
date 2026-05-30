// ============================================
// Du Lạc — Supabase Client
// Cài: npm install @supabase/supabase-js
// Import: import { supabase } from '@/lib/supabase'
// ============================================

import { createClient } from '@supabase/supabase-js'

// Không dùng ! assertion — để runtime check bên dưới xử lý
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY trong .env.local'
  )
}

// Singleton client — dùng chung toàn project
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ----------------------------------------
// Helper: lấy user hiện tại
// Dùng getUser() thay vì getSession() — getSession() deprecated trong Supabase v2
// getUser() gọi server để verify token, bảo mật hơn
// ----------------------------------------
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) return null
  return user
}

// ----------------------------------------
// Helper: kiểm tra user đã đăng nhập chưa (dùng trong middleware/layout)
// ----------------------------------------
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return user !== null
}
