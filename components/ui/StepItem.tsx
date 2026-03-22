'use client'

import { useRef, useEffect, useState } from 'react'

interface StepItemProps {
  num: string
  title: string
  body: string
  isLast?: boolean
}

export default function StepItem({ num, title, body, isLast = false }: StepItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-7">
      {/* Number column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: `2px solid ${active ? '#7dd3fc' : 'rgba(255,255,255,0.1)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 17,
            fontWeight: 700,
            color: active ? '#7dd3fc' : 'rgba(255,255,255,0.2)',
            transition: 'all 0.5s ease',
            boxShadow: active ? '0 0 20px rgba(125,211,252,0.25)' : 'none',
            transform: active ? 'scale(1.08)' : 'scale(1)',
            flexShrink: 0,
          }}
        >
          {num}
        </div>
        {!isLast && (
          <div
            style={{
              width: 1,
              flex: 1,
              minHeight: 48,
              marginTop: 6,
              background: active
                ? 'linear-gradient(180deg, rgba(125,211,252,0.5) 0%, rgba(125,211,252,0.1) 100%)'
                : 'rgba(255,255,255,0.07)',
              transition: 'background 0.5s ease',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="pb-12"
        style={{
          paddingTop: 12,
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(-16px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: '#94a3b8', maxWidth: 500 }}>{body}</p>
      </div>
    </div>
  )
}
