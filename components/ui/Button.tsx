import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondaryDark' | 'ghost' | 'ghostDark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

const variants = {
  primary: 'bg-dulac-red text-white shadow-red btn-pulse hover:bg-[#9E1717] active:scale-[0.98]',
  secondary:
    'border border-dulac-red/35 text-dulac-brown bg-dulac-cream/70 hover:border-dulac-red hover:bg-dulac-cream active:scale-[0.98]',
  secondaryDark:
    'border border-dulac-cyan/40 text-dulac-cream bg-dulac-cream/8 hover:border-dulac-cyan hover:bg-dulac-cyan/10 active:scale-[0.98]',
  ghost: 'text-dulac-ink/68 hover:text-dulac-red bg-transparent',
  ghostDark: 'text-dulac-cream/72 hover:text-dulac-cyan bg-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-base rounded-lg',
  lg: 'px-6 py-3 text-base md:text-lg rounded-lg',
}

const base = 'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

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
