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
        background: expanded ? 'rgba(125,211,252,0.03)' : 'transparent',
        transition: 'background 0.2s',
      }}
      onClick={() => setExpanded(e => !e)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex items-center justify-between py-5 px-2 gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 11,
              color: 'rgba(125,211,252,0.3)',
              flexShrink: 0,
              letterSpacing: '0.05em',
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
          transition: 'max-height 0.3s ease',
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
  )
}
