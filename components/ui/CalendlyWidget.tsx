'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        resize?: boolean
      }) => void
    }
  }
}

interface CalendlyWidgetProps {
  url: string
}

export default function CalendlyWidget({
  url,
}: CalendlyWidgetProps) {
  const calendlyRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initCalendly = () => {
      if (!window.Calendly || !calendlyRef.current) return

      // clear previous widget if any
      calendlyRef.current.innerHTML = ''

      window.Calendly.initInlineWidget({
        url,
        parentElement: calendlyRef.current,
        resize: true,
      })

      setIsLoading(false)
    }

    const existingScript = document.getElementById(
      'calendly-script'
    )

    if (existingScript) {
      setTimeout(initCalendly, 300)
      return
    }

    const script = document.createElement('script')
    script.id = 'calendly-script'
    script.src =
      'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    script.onload = () => {
      setTimeout(initCalendly, 300)
    }

    script.onerror = () => {
      console.error('Calendly script failed to load')
      setIsLoading(false)
    }

    document.body.appendChild(script)
  }, [url])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: 24,
        overflow: 'hidden',
        border: '1px solid rgba(125,211,252,0.15)',
        boxShadow: '0 0 30px rgba(56,189,248,0.08)',
        background: '#0b1120',
      }}
    >
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 650,
            zIndex: 10,
            background: '#0b1120',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: '3px solid rgba(125,211,252,0.2)',
              borderTopColor: '#7dd3fc',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      )}

      <div
        ref={calendlyRef}
        style={{
          width: '100%',
          minHeight: 700,
        }}
      />

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}