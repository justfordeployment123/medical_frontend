'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyBookCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9998,
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.95)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Link
        href="/contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 20px',
          borderRadius: 999,
          background: 'rgba(11,17,32,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(125,211,252,0.3)',
          color: '#7dd3fc',
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#7dd3fc',
            animation: 'dot-blink 1.5s ease-in-out infinite',
            flexShrink: 0,
          }}
        />
        Book a Free Call
      </Link>
    </div>
  )
}
