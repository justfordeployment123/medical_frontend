'use client'

import React from 'react'

type CalendlySkeletonProps = {
  minWidth?: number | string
  height?: number | string
}

export default function CalendlySkeleton({
  minWidth = 320,
  height = 700,
}: CalendlySkeletonProps): React.ReactElement {
  const minWidthValue = typeof minWidth === 'number' ? `${minWidth}px` : minWidth
  const heightValue = typeof height === 'number' ? `${height}px` : height

  return (
    <>
      <div
        style={{
          position: 'relative',
          minWidth: minWidthValue,
          height: heightValue,
          background: '#0b1120',
          padding: '40px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        {/* Profile block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            marginBottom: 4,
          }}
        >
          <div className="calendly-skel" style={{ width: 52, height: 52, borderRadius: '50%' }} />
          <div className="calendly-skel" style={{ width: '38%', height: 14, borderRadius: 6 }} />
          <div
            className="calendly-skel"
            style={{
              width: '22%',
              height: 11,
              borderRadius: 6,
              animationDelay: '0.1s',
            }}
          />
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '0 -32px' }} />

        {/* Month navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4px 8px',
          }}
        >
          <div className="calendly-skel" style={{ width: 30, height: 30, borderRadius: '50%' }} />
          <div
            className="calendly-skel"
            style={{ width: '22%', height: 14, borderRadius: 6, animationDelay: '0.05s' }}
          />
          <div
            className="calendly-skel"
            style={{ width: 30, height: 30, borderRadius: '50%', animationDelay: '0.1s' }}
          />
        </div>

        {/* Day-of-week labels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 8,
            padding: '0 8px',
          }}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="calendly-skel"
              style={{ height: 11, borderRadius: 4, animationDelay: `${i * 0.04}s` }}
            />
          ))}
        </div>

        {/* Calendar date grid */}
        {Array.from({ length: 5 }).map((_, row) => (
          <div
            key={row}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 8,
              padding: '0 8px',
            }}
          >
            {Array.from({ length: 7 }).map((_, col) => {
              const isAvailable =
                (row === 0 && col === 3) ||
                (row === 1 && col === 1) ||
                (row === 1 && col === 5) ||
                (row === 2 && col === 2) ||
                (row === 3 && col === 4) ||
                (row === 3 && col === 0)
              return (
                <div
                  key={col}
                  className={isAvailable ? 'calendly-skel-available' : 'calendly-skel'}
                  style={{
                    height: 38,
                    borderRadius: 8,
                    animationDelay: `${(row * 7 + col) * 0.025}s`,
                  }}
                />
              )
            })}
          </div>
        ))}

        {/* Loading label */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            marginTop: 4,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              border: '2px solid rgba(125,211,252,0.12)',
              borderTopColor: '#7dd3fc',
              borderRadius: '50%',
              animation: 'calendly-spin 0.75s linear infinite',
              flexShrink: 0,
            }}
          />
          <span style={{ color: '#475569', fontSize: 12 }}>Loading calendar...</span>
        </div>
      </div>

      <style>{`
        @keyframes calendly-spin {
          to { transform: rotate(360deg); }
        }

        /* Base skeleton pulse */
        @keyframes calendly-skel-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }

        .calendly-skel {
          background: rgba(255,255,255,0.06);
          animation: calendly-skel-pulse 1.8s ease infinite;
        }

        /* Available-day skeleton */
        @keyframes calendly-skel-avail-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .calendly-skel-available {
          background: rgba(125,211,252,0.13);
          border: 1px solid rgba(125,211,252,0.22);
          animation: calendly-skel-avail-pulse 1.8s ease infinite;
        }
      `}</style>
    </>
  )
}
