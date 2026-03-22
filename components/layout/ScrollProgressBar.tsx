'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] pointer-events-none"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(90deg, #7dd3fc, #38bdf8, #7dd3fc)',
        backgroundSize: '200% 100%',
        animation: 'shimmer-bg 2s linear infinite',
        transition: 'width 0.1s linear',
        boxShadow: '0 0 8px rgba(125,211,252,0.6)',
      }}
    />
  )
}
