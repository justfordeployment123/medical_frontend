'use client'

import { useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  tag?: keyof JSX.IntrinsicElements
  style?: React.CSSProperties
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'div',
  style,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `reveal--delay-${delay}` : ''

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
