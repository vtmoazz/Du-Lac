'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/',        label: 'Trang Chủ' },
  { href: '/#about',  label: 'Về Du Lạc' },
  { href: '/#game',   label: 'Game' },
  { href: '/shop',    label: 'Cửa Hàng' },
  { href: '/#contact',label: 'Liên Hệ' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const totalItems = useCartStore((s) => s.totalItems)
  const openDrawer  = useCartStore((s) => s.openDrawer)

  return (
    <header className="sticky top-0 z-50 bg-dulac-cream/90 backdrop-blur-md border-b border-dulac-brown/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-serif font-bold text-2xl text-dulac-red tracking-wide hover:opacity-80 transition-opacity">
          Du Lạc
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-dulac-ink/70 hover:text-dulac-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: Cart + CTA */}
        <div className="flex items-center gap-3">
          {/* Cart icon */}
          <button
            onClick={openDrawer}
            className="relative p-2 text-dulac-ink/70 hover:text-dulac-red transition-colors"
            aria-label="Giỏ hàng"
          >
            <ShoppingCart size={22} />
            {totalItems() > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-dulac-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems()}
              </span>
            )}
          </button>

          {/* CTA desktop */}
          <Button variant="primary" size="sm" href="/#game" className="hidden md:inline-flex">
            Tải Bản Demo
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-dulac-ink/70 hover:text-dulac-red transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dulac-cream border-t border-dulac-brown/20 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-dulac-ink/80 hover:text-dulac-red py-1 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" href="/#game" className="mt-2 w-full">
            Tải Bản Demo
          </Button>
        </div>
      )}
    </header>
  )
}
