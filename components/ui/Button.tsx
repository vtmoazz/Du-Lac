'use client'

import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

const variants = {
  primary:   'bg-dulac-red text-white hover:opacity-90 active:scale-[0.97]',
  secondary: 'border-2 border-dulac-amber text-dulac-brown bg-transparent hover:opacity-80 active:scale-[0.97]',
  ghost:     'text-dulac-ink/60 hover:text-dulac-ink bg-transparent',
}

const sizes = {
  sm: 'px-4 py-1.5 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-base rounded-lg',
  lg: 'px-8 py-3.5 text-lg rounded-xl',
}

const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, disabled, ...props }, ref) => {
    const cls = [base, variants[variant], sizes[size], className].join(' ')

    if (href) {
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} disabled={disabled} className={cls} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
