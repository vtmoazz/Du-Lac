'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Heart, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { navigationItems, siteConfig } from '@/content/home'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition duration-300',
        scrolled || menuOpen
          ? 'border-dulac-brown/15 bg-dulac-cream/92 shadow-card backdrop-blur-md'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className={cn(
            'dulac-title group font-serif text-2xl transition-colors',
            scrolled || menuOpen ? 'text-dulac-amber' : 'text-dulac-cream'
          )}
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.name}
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-dulac-cyan shadow-[0_0_14px_rgba(127,231,196,0.95)] transition group-hover:scale-125" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm font-semibold transition-colors',
                scrolled ? 'text-dulac-ink/68 hover:text-dulac-red' : 'text-dulac-cream/78 hover:text-dulac-cyan'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" href="#community" className="hidden md:inline-flex">
            <Heart size={16} />
            Trải nghiệm
          </Button>

          <button
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden',
              scrolled || menuOpen
                ? 'border-dulac-brown/20 text-dulac-ink hover:text-dulac-red'
                : 'border-dulac-cream/20 text-dulac-cream hover:text-dulac-cyan'
            )}
            style={{ touchAction: 'manipulation' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mở menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-dulac-brown/15 bg-dulac-cream px-4 py-4 shadow-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationItems.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-dulac-ink/75 transition-colors hover:bg-dulac-red/8 hover:text-dulac-red"
              >
                {l.label}
              </Link>
            ))}
            <Button variant="primary" size="md" href="#community" className="mt-2 w-full">
              <Heart size={18} />
              Trải nghiệm
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
