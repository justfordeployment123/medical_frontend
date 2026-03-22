'use client'

import { useState, useEffect } from 'react'

export default function LiveCounter() {
  const [count, setCount] = useState(847)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const tick = () => {
      setCount(c => c + Math.floor(Math.random() * 3) + 1)
      timeoutId = setTimeout(tick, 4000 + Math.random() * 3000)
    }
    timeoutId = setTimeout(tick, 4000 + Math.random() * 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
      style={{
        background: 'rgba(11,17,32,0.7)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(125,211,252,0.15)',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#7dd3fc',
          animation: 'dot-blink 1.5s ease-in-out infinite',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'ui-monospace, monospace',
          fontSize: 11,
          letterSpacing: '0.08em',
          color: 'rgba(125,211,252,0.65)',
        }}
      >
        SYS.STATUS: ACTIVE &nbsp;|&nbsp; AUTOMATIONS RUNNING:{' '}
        <span style={{ color: '#7dd3fc', fontWeight: 700 }}>{count}</span>
      </span>
    </div>
  )
}
