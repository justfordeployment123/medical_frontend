'use client'

import Link from 'next/link'

const TIER_IMAGES: Record<string, string> = {
  // AI receptionist & scheduling — professional with headset
  'Tier 1': 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=600&q=80',
  // AI Systems / analytics & sales pipelines — data dashboard
  'Tier 2': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  // Custom AI enterprise — team in modern office strategy setting
  'Tier 3': 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
}

const TIER_ICONS: Record<string, string> = {
  'Tier 1': '⚡',
  'Tier 2': '◈',
  'Tier 3': '◎',
}

const TIER_STATS: Record<string, { value: string; label: string }[]> = {
  'Tier 1': [
    { value: '24/7', label: 'Availability' },
    { value: '10–25h', label: 'Saved/Week' },
    { value: 'Instant', label: 'Response' },
  ],
  'Tier 2': [
    { value: '3×', label: 'More Leads' },
    { value: '100%', label: 'Automated' },
    { value: 'Zero', label: 'Manual Work' },
  ],
  'Tier 3': [
    { value: '100%', label: 'Bespoke' },
    { value: 'Full', label: 'Integration' },
    { value: 'Always', label: 'Supported' },
  ],
}

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

export default function TierCard({ tag, badge, title, tagline, featured, cta }: TierCardProps) {
  const img = TIER_IMAGES[tag] ?? TIER_IMAGES['Tier 1']
  const icon = TIER_ICONS[tag] ?? '◎'
  const stats = TIER_STATS[tag] ?? TIER_STATS['Tier 1']

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        minHeight: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        border: featured
          ? '1px solid rgba(125,211,252,0.4)'
          : '1px solid rgba(255,255,255,0.1)',
        boxShadow: featured ? '0 0 48px rgba(125,211,252,0.15)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        const imgEl = el.querySelector('img') as HTMLImageElement | null
        if (imgEl) imgEl.style.transform = 'scale(1.07)'
        el.style.boxShadow = '0 20px 56px rgba(125,211,252,0.22)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        const imgEl = el.querySelector('img') as HTMLImageElement | null
        if (imgEl) imgEl.style.transform = 'scale(1)'
        el.style.boxShadow = featured ? '0 0 48px rgba(125,211,252,0.15)' : 'none'
      }}
    >
      {/* Full-bleed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          transition: 'transform 0.5s ease',
        }}
      />
      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(2,6,23,0.28) 0%, rgba(2,6,23,0.72) 50%, rgba(2,6,23,0.97) 100%)',
          zIndex: 1,
        }}
      />

      {/* Top row: icon + badge + arrow */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          right: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'rgba(2,6,23,0.72)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(125,211,252,0.3)',
              fontSize: 20,
              color: '#7dd3fc',
            }}
          >
            {icon}
          </span>
          {featured && (
            <span
              style={{
                display: 'inline-block',
                background: '#7dd3fc',
                color: '#020617',
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '3px 10px',
                borderRadius: 999,
                animation: 'pulse-glow 2.5s ease-in-out infinite',
                whiteSpace: 'nowrap',
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <Link
          href="/contact"
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(2,6,23,0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: '#ffffff',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          ↗
        </Link>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 24px 20px' }}>
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7dd3fc',
            marginBottom: 8,
          }}
        >
          {tag}
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          {tagline}
        </p>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 16,
          }}
        >
          {stats.map((stat, si) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                textAlign: 'center',
                borderRight:
                  si < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                paddingRight: si < stats.length - 1 ? 10 : 0,
                paddingLeft: si > 0 ? 10 : 0,
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(125,211,252,0.75)',
                  marginTop: 3,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
