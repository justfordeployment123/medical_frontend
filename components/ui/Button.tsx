'use client'

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'default' | 'lg' | 'sm'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer'

  const variants = {
    primary:
      'bg-accent text-primary border border-accent hover:bg-sky-200 hover:shadow-[0_0_24px_rgba(125,211,252,0.4)] hover:-translate-y-px',
    outline:
      'bg-transparent text-accent border border-accent-border hover:bg-accent-glow hover:border-accent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) return <Link href={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
