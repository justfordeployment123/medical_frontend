'use client'

import { useEffect, useRef, useState } from 'react'

const TOOLS = [
  { label: 'CRM', angle: 0 },
  { label: 'Email', angle: 60 },
  { label: 'Calendar', angle: 120 },
  { label: 'Slack', angle: 180 },
  { label: 'Accounting', angle: 240 },
  { label: 'Support', angle: 300 },
]

const CENTER = 200
const RADIUS = 130
const toRad = (deg: number) => (deg - 90) * (Math.PI / 180)

export default function AnimatedBeam() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div style={{ padding: '72px', maxWidth: 560, margin: '0 auto', boxSizing: 'border-box' }}>
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
      }}
    >
      {/* SVG layer */}
      <svg
        viewBox="0 0 400 400"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
      >
        {TOOLS.map((tool, i) => {
          const x = CENTER + RADIUS * Math.cos(toRad(tool.angle))
          const y = CENTER + RADIUS * Math.sin(toRad(tool.angle))
          const length = Math.hypot(x - CENTER, y - CENTER)
          return (
            <g key={tool.label}>
              {/* Static dim line */}
              <line
                x1={x}
                y1={y}
                x2={CENTER}
                y2={CENTER}
                stroke="rgba(125,211,252,0.12)"
                strokeWidth={1}
              />
              {/* Animated traveling dot */}
              <line
                x1={x}
                y1={y}
                x2={CENTER}
                y2={CENTER}
                stroke="#7dd3fc"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray={`6 ${length}`}
                style={{
                  animation: `beam-travel ${2 + i * 0.1}s linear infinite`,
                  animationDelay: `${i * 0.42}s`,
                }}
              />
            </g>
          )
        })}
      </svg>

      {/* Tool nodes */}
      {TOOLS.map((tool, i) => {
        const xPct = 50 + (RADIUS / 200) * 100 * Math.cos(toRad(tool.angle))
        const yPct = 50 + (RADIUS / 200) * 100 * Math.sin(toRad(tool.angle))
        return (
          <div
            key={tool.label}
            style={{
              position: 'absolute',
              left: `${xPct}%`,
              top: `${yPct}%`,
              transform: 'translate(-50%, -50%)',
              padding: '7px 14px',
              background: 'rgba(11,17,32,0.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 600,
              color: '#e2e8f0',
              whiteSpace: 'nowrap',
              animation: mounted ? `orbit-glow 3.5s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.55}s`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            {tool.label}
          </div>
        )
      })}

      {/* Center node */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '14px 18px',
          background: 'rgba(11,17,32,0.95)',
          backdropFilter: 'blur(12px)',
          border: '2px solid rgba(125,211,252,0.4)',
          borderRadius: 16,
          textAlign: 'center',
          animation: 'pulse-glow 2.5s ease-in-out infinite',
          boxShadow: '0 0 32px rgba(125,211,252,0.1)',
        }}
      >
        <p style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', lineHeight: 1.2, letterSpacing: '0.06em' }}>
          IMPACKTA
        </p>
        <p style={{ fontSize: 13, fontWeight: 800, color: '#7dd3fc', letterSpacing: '0.06em' }}>
          AI
        </p>
      </div>
    </div>
    </div>
  )
}
