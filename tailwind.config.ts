import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dulac: {
          // ── Palette v2 · Đông Hồ Rực Rỡ ──────────────────
          cream:     '#FBF5E6',   // Giấy Dó Kem   — background chính
          parchment: '#FFF3C4',   // Giấy Vàng     — card, surface nhẹ
          red:       '#C8392B',   // Đỏ Son        — CTA, accent chính
          amber:     '#E8A020',   // Vàng Nghệ     — heading, highlight, border
          jade:      '#2E7D52',   // Xanh Lá Ngọc — badge, tag
          brown:     '#5C3317',   // Nâu Gỗ Sẫm   — border, frame, heading
          ink:       '#2C1810',   // Đen Mực       — body text
          // ── Alias giữ tương thích code cũ ─────────────────
          dark:      '#FBF5E6',
          wood:      '#FFF3C4',
          terra:     '#C8392B',
          gold:      '#E8A020',
          moss:      '#2E7D52',
          paper:     '#2C1810',
        },
      },
      fontFamily: {
        serif: ['Noto Serif Display', 'Georgia', 'serif'],
        sans:  ['Be Vietnam Pro', 'Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-amber': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232,160,32,0)' },
          '50%':       { boxShadow: '0 0 0 8px rgba(232,160,32,0.15)' },
        },
      },
      animation: {
        'fade-in-up':      'fade-in-up 0.6s ease forwards',
        'slide-in-right':  'slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1)',
        'slide-out-right': 'slide-out-right 0.3s cubic-bezier(0.4,0,0.2,1)',
        'pulse-amber':     'pulse-amber 2s ease infinite',
      },
      backgroundImage: {
        'noise':     "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'hero-glow': 'radial-gradient(ellipse at center, rgba(200,57,43,0.08) 0%, transparent 70%)',
      },
      boxShadow: {
        'red':        '0 4px 24px rgba(200,57,43,0.25)',
        'amber':      '0 4px 24px rgba(232,160,32,0.2)',
        'card':       '0 2px 16px rgba(44,24,16,0.08)',
        'card-hover': '0 8px 32px rgba(44,24,16,0.14)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
