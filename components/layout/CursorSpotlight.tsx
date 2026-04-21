'use client'

import { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.setProperty('--x', e.clientX + 'px')
      el.style.setProperty('--y', e.clientY + 'px')
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(125,211,252,0.05), transparent 80%)`,
        transition: 'background 0.1s',
      }}
    />
  )
}
