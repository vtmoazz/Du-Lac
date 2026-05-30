// ============================================
// Du Lạc — Cart Store (Zustand)
// Cài: npm install zustand
// Import: import { useCartStore } from '@/store/cartStore'
// ============================================

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type CartItem, type Product, calcTotal } from '@/types'

interface CartStore {
  // State
  items: CartItem[]
  isDrawerOpen: boolean

  // Actions
  addItem: (product: Product, quantity: number, size: string | null) => void
  removeItem: (product_id: string, size: string | null) => void
  updateQuantity: (product_id: string, size: string | null, quantity: number) => void
  clearCart: () => void
  openDrawer: () => void
  closeDrawer: () => void

  // Computed (getters)
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // ----------------------------------------
      // Initial State
      // ----------------------------------------
      items: [],
      isDrawerOpen: false,

      // ----------------------------------------
      // Actions
      // ----------------------------------------
      addItem: (product, quantity, size) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.product_id === product.id && item.size === size
          )

          if (existingIndex >= 0) {
            // Sản phẩm đã có trong giỏ → tăng số lượng
            // QUAN TRỌNG: tạo object mới, không mutate trực tiếp
            const updatedItems = state.items.map((item, idx) =>
              idx === existingIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
            return { items: updatedItems, isDrawerOpen: true }
          }

          // Thêm mới
          const newItem: CartItem = {
            product_id: product.id,
            product_name: product.name,
            product_image: product.images[0] ?? '',
            price: product.price,
            quantity,
            size,
          }
          return {
            items: [...state.items, newItem],
            isDrawerOpen: true,
          }
        })
      },

      removeItem: (product_id, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product_id === product_id && item.size === size)
          ),
        }))
      },

      updateQuantity: (product_id, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(product_id, size)
          return
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product_id === product_id && item.size === size
              ? { ...item, quantity }
              : item
          ),
        }))
      },

      clearCart: () => set({ items: [], isDrawerOpen: false }),

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),

      // ----------------------------------------
      // Computed
      // ----------------------------------------
      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      totalPrice: () => calcTotal(get().items),
    }),
    {
      name: 'dulac-cart',        // Key trong localStorage
      partialize: (state) => ({ items: state.items }),  // Chỉ persist items
    }
  )
)
