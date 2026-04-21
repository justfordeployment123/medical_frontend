'use client'

import { useState } from 'react'

interface ProblemRowProps {
  problem: string
  solution: string
  index: number
}

export default function ProblemRow({ problem, solution, index }: ProblemRowProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="border-b cursor-pointer select-none"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s ease-out',
      }}
      onClick={() => setExpanded(e => !e)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Background image — grayscale/dim → full-colour + scale on hover (Problem→Solution) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: expanded ? 0.13 : 0.04,
          filter: expanded
            ? 'grayscale(0%) brightness(0.5) saturate(0.8)'
            : 'grayscale(100%) brightness(0.3)',
          transform: expanded ? 'scale(1.05)' : 'scale(1)',
          transition: 'opacity 0.4s ease-out, filter 0.4s ease-out, transform 0.4s ease-out',
          transformOrigin: 'center center',
          pointerEvents: 'none',
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: expanded
            ? 'linear-gradient(90deg, rgba(2,6,23,0.7) 0%, rgba(2,6,23,0.3) 100%)'
            : 'rgba(2,6,23,0.6)',
          transition: 'background 0.4s ease-out',
          pointerEvents: 'none',
        }}
      />

      {/* Content — slight scale on expand */}
      <div
        style={{
          position: 'relative',
          transform: expanded ? 'scale(1.008)' : 'scale(1)',
          transition: 'transform 0.4s ease-out',
          transformOrigin: 'left center',
        }}
      >
        <div className="flex items-center justify-between py-5 px-2 gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <span
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 11,
                color: expanded ? 'rgba(125,211,252,0.6)' : 'rgba(125,211,252,0.3)',
                flexShrink: 0,
                letterSpacing: '0.05em',
                transition: 'color 0.4s ease',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 500,
                transition: 'color 0.25s',
                color: expanded ? 'rgba(248,113,113,0.8)' : 'rgba(255,255,255,0.9)',
              }}
            >
              {problem}
            </span>
          </div>
          <span
            style={{
              color: '#7dd3fc',
              fontSize: 18,
              lineHeight: 1,
              transition: 'transform 0.3s ease',
              transform: expanded ? 'translateX(0) rotate(0deg)' : 'translateX(0) rotate(-180deg)',
              flexShrink: 0,
            }}
          >
            →
          </span>
        </div>

        <div
          style={{
            overflow: 'hidden',
            maxHeight: expanded ? 72 : 0,
            transition: 'max-height 0.4s ease-out',
          }}
        >
          <div className="px-2 pb-5" style={{ paddingLeft: 52 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#7dd3fc',
              }}
            >
              {solution}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
