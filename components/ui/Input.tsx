import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-dulac-brown">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={[
            'w-full px-4 py-2.5 rounded-lg text-dulac-ink text-base',
            'bg-dulac-parchment/50 border-2 border-dulac-brown/20',
            'placeholder:text-dulac-ink/40',
            'focus:outline-none focus:border-dulac-red transition-colors',
            error ? 'border-dulac-red' : '',
            className,
          ].join(' ')}
          {...props}
        />
        {error && <p className="text-xs text-dulac-red">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
