'use client'

import Link from 'next/link'

const TIER_IMAGES: Record<string, string> = {
  'Tier 1': 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=600&q=80',
  'Tier 2': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'Tier 3': 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
}

const TIER_ICONS: Record<string, string> = {
  'Tier 1': '⚡',
  'Tier 2': '◈',
  'Tier 3': '◎',
}

const TIER_STATS: Record<string, { value: string; label?: string }[]> = {
  'Tier 1': [
    { value: '24/7', label: 'Availability' },
    { value: 'Always', label: 'Handled' },
    { value: 'Instant', label: 'Response' },
  ],
  'Tier 2': [
    { value: 'Scalable', label: 'Output' },
    { value: 'Process', label: 'Orchestration' },
    { value: 'Unified', label: 'Systems' },
  ],
  'Tier 3': [
    { value: '100%', label: 'Bespoke' },
    { value: 'Full', label: 'Integration' },
    { value: 'Always', label: 'Supported' },
  ],
}

interface TierCardProps {
  tag: string
  badge?: string
  title: string
  tagline: string
  items: string[]
  bestFor: string
  featured: boolean
  cta: string
  href?: string
}

export default function TierCard({
  tag,
  badge,
  title,
  tagline,
  items,
  bestFor,
  featured,
  cta,
  href = '#',
}: TierCardProps) {
  const stats = TIER_STATS[tag] || []
  const icon = TIER_ICONS[tag] || '✨'
  const image = TIER_IMAGES[tag] || ''

  return (
    <Link href={href} className="block h-full group no-underline">
      <div
        className={`relative h-full flex flex-col p-8 rounded-[32px] border transition-all duration-500 overflow-hidden ${
          featured
            ? 'bg-[#0b1120] border-blue-400/30 shadow-[0_0_50px_rgba(59,130,246,0.15)]'
            : 'bg-[#020617]/40 border-white/10 hover:border-white/20'
        }`}
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" 
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">
                  {tag}
                </span>
                {badge && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] uppercase tracking-wider font-extrabold text-blue-400">
                    {badge}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors min-h-[64px]">
                {title}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              {icon}
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[64px]">{tagline}</p>

          {/* Dynamic Stats Row */}
          <div className="grid grid-cols-3 gap-2 mb-8 p-3 rounded-2xl bg-white/5 border border-white/5">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-bold text-white">{s.value}</div>
                {s.label && (
                  <div className="text-[8px] uppercase tracking-tighter text-blue-300 font-bold whitespace-nowrap">
                    {s.label}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center justify-between group/cta">
              <span className="text-sm font-bold text-blue-400 group-hover/cta:translate-x-1 transition-transform">
                {cta}
              </span>
              <div className="w-8 h-8 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover/cta:bg-blue-400 group-hover/cta:text-white transition-all">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
