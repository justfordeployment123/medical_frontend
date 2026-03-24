'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface Message {
  role: 'user' | 'bot'
  text: string
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')   // **bold**
    .replace(/\*(.+?)\*/g, '$1')        // *italic*
    .replace(/__(.+?)__/g, '$1')        // __bold__
    .replace(/_(.+?)_/g, '$1')          // _italic_
    .replace(/^#{1,6}\s+/gm, '')        // # headings
    .replace(/`(.+?)`/g, '$1')          // `code`
    .replace(/^\s*[-*+]\s+/gm, '• ')   // bullet lists
    .trim()
}

const HIDDEN_PATHS = ['/privacy', '/terms']

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL ?? 'http://localhost:3001'

export default function ChatWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m the IMPACKTA AI assistant. Ask me anything about our services, solutions, or how to get started.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Hide on legal pages
  if (HIDDEN_PATHS.some(p => pathname.startsWith(p))) return null

  // Auto-scroll to latest message
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // Focus input when popup opens
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error ?? 'Unknown error')
      }

      setMessages(prev => [...prev, { role: 'bot', text: stripMarkdown(data.answer) }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: 'Sorry, something went wrong. Please try again or email us at contact@impackta.online' },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      {/* ── Chat Popup ── */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 152,
            right: 24,
            width: 'min(380px, calc(100vw - 48px)',
            height: 480,
            background: 'rgba(11,17,32,0.97)',
            border: '1px solid rgba(125,211,252,0.2)',
            borderRadius: 20,
            boxShadow: '0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(125,211,252,0.08)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9998,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: 'rgba(125,211,252,0.12)',
                border: '1px solid rgba(125,211,252,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#7dd3fc" opacity="0.3"/>
                <circle cx="12" cy="12" r="3" fill="#7dd3fc"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: 0 }}>IMPACKTA AI</p>
              <p style={{ fontSize: 11, color: '#7dd3fc', margin: 0, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span
                  className="dot-blink"
                  style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#7dd3fc' }}
                />
                AI Assistant
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b',
                padding: 4,
                borderRadius: 6,
                display: 'flex',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#94a3b8')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#64748b')}
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 16px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '9px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user'
                      ? 'rgba(125,211,252,0.15)'
                      : 'rgba(255,255,255,0.05)',
                    border: msg.role === 'user'
                      ? '1px solid rgba(125,211,252,0.25)'
                      : '1px solid rgba(255,255,255,0.07)',
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: msg.role === 'user' ? '#e0f2fe' : '#cbd5e1',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '10px 16px',
                    borderRadius: '16px 16px 16px 4px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    gap: 5,
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#7dd3fc',
                        opacity: 0.6,
                        animation: `dot-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              gap: 8,
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              maxLength={1000}
              disabled={loading}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '9px 14px',
                fontSize: 13,
                color: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = 'rgba(125,211,252,0.4)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: input.trim() && !loading ? '#7dd3fc' : 'rgba(125,211,252,0.15)',
                border: 'none',
                cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke={input.trim() && !loading ? '#020617' : '#7dd3fc'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open AI chat assistant"
        style={{
          position: 'fixed',
          bottom: 88,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: open ? 'rgba(125,211,252,0.15)' : '#7dd3fc',
          border: open ? '1px solid rgba(125,211,252,0.4)' : 'none',
          boxShadow: open ? 'none' : '0 0 24px rgba(125,211,252,0.45), 0 4px 16px rgba(0,0,0,0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => {
          if (!open) {
            const el = e.currentTarget as HTMLButtonElement
            el.style.boxShadow = '0 0 36px rgba(125,211,252,0.65), 0 4px 20px rgba(0,0,0,0.5)'
            el.style.transform = 'scale(1.08)'
          }
        }}
        onMouseLeave={e => {
          if (!open) {
            const el = e.currentTarget as HTMLButtonElement
            el.style.boxShadow = '0 0 24px rgba(125,211,252,0.45), 0 4px 16px rgba(0,0,0,0.4)'
            el.style.transform = 'scale(1)'
          }
        }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#020617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <style>{`
        @keyframes dot-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  )
}
