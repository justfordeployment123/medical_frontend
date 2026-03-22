'use client'

import Button from '@/components/ui/Button'

interface TierCardProps {
  tag: string
  badge: string
  title: string
  tagline: string
  items: string[]
  bestFor: string
  featured: boolean
  cta: string
}

export default function TierCard({ tag, badge, title, tagline, items, bestFor, featured, cta }: TierCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        padding: featured ? '36px 32px 32px' : '32px',
        background: featured ? 'rgba(125,211,252,0.07)' : 'rgba(255,255,255,0.03)',
        border: featured ? '1px solid rgba(125,211,252,0.4)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        ...(featured && {
          boxShadow: '0 0 48px rgba(125,211,252,0.08)',
        }),
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = '0 16px 48px rgba(125,211,252,0.15)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = featured ? '0 0 48px rgba(125,211,252,0.08)' : 'none'
      }}
    >
      {/* Most popular badge */}
      {featured && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: '#7dd3fc',
              color: '#020617',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '5px 16px',
              borderRadius: 999,
              whiteSpace: 'nowrap',
              animation: 'pulse-glow 2.5s ease-in-out infinite',
            }}
          >
            {badge}
          </span>
        </div>
      )}

      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
        {title}
      </h2>
      <p style={{ fontSize: 13, fontWeight: 600, color: '#7dd3fc', marginBottom: 20 }}>
        {tagline}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, flex: 1 }}>
        {items.map(item => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 13,
              color: '#94a3b8',
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                flexShrink: 0,
                marginTop: 5,
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#7dd3fc',
              }}
            />
            {item}
          </li>
        ))}
      </ul>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 18,
          marginBottom: 20,
        }}
      >
        <p style={{ fontSize: 12, color: '#94a3b8' }}>
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Best for: </span>
          {bestFor}
        </p>
      </div>

      <Button
        to="/contact"
        variant={featured ? 'primary' : 'outline'}
        className={`w-full justify-center${featured ? ' btn-shimmer' : ''}`}
      >
        {cta}
      </Button>
    </div>
  )
}
