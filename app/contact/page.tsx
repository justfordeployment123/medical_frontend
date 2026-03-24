'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  businessType: string
  challenge: string
  solution: string
}

const defaultForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  businessType: '',
  challenge: '',
  solution: '',
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
}: {
  label: string
  name: keyof FormState
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className={`float-field${value ? ' has-value' : ''}`}>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
      <label>
        {label}
        {required && (
          <span style={{ color: '#7dd3fc', marginLeft: 2 }}>*</span>
        )}
      </label>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(defaultForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const callPoints = [
    'Review your current workflows and identify bottlenecks',
    'Identify automation opportunities specific to your business',
    'Suggest potential AI solutions tailored to your goals',
  ]

  return (
    <>
      {/* ── Page Hero ── */}
      <section
        style={{
          paddingTop: 'calc(72px + 5rem)',
          paddingBottom: '5rem',
          background: '#0b1120',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hero background image — professional workspace, full colour */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.55,
            filter: 'brightness(0.72)',
          }}
        />
        {/* Gradient: dark left for text legibility, photo visible on the right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.7) 45%, rgba(11,17,32,0.2) 100%)',
          }}
        />

        <div className="container relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <p
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#7dd3fc' }}
            >
              <span
                className="dot-blink"
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#7dd3fc',
                }}
              />
              Free Consultation
            </p>
            <h1
              className="font-extrabold leading-tight max-w-3xl mb-5"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                background: 'linear-gradient(90deg, #ffffff 0%, #7dd3fc 30%, #38bdf8 55%, #93c5fd 75%, #ffffff 100%)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-color-shift 5s ease infinite',
              }}
            >
              Ready to automate your growth?
            </h1>
            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.75, maxWidth: 580 }}>
              Discover how AI automation can transform your business. No obligation, just
              practical insights.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Two-col Layout ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Left column */}
            <AnimatedSection delay={1}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 24 }}>
                  In this call we will:
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
                  {callPoints.map(point => (
                    <li
                      key={point}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 14,
                        fontSize: 14,
                        color: '#94a3b8',
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: 2,
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: 'rgba(125,211,252,0.1)',
                          border: '1px solid rgba(125,211,252,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#7dd3fc',
                          }}
                        />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Direct booking card */}
                <div
                  style={{
                    padding: '28px 28px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                    Book Directly
                  </h3>
                  <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20, lineHeight: 1.7 }}>
                    Prefer to skip the form? Book a time directly in our calendar.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 20px',
                      borderRadius: 10,
                      border: '1px solid rgba(125,211,252,0.3)',
                      color: '#7dd3fc',
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.background = 'rgba(125,211,252,0.08)'
                      el.style.borderColor = 'rgba(125,211,252,0.5)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.background = 'transparent'
                      el.style.borderColor = 'rgba(125,211,252,0.3)'
                    }}
                  >
                    Open Calendar →
                  </a>
                </div>

                {/* Contact info */}
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>Or email us directly:</p>
                  <a
                    href="mailto:contact@impackta.online"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#7dd3fc',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#bae6fd')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#7dd3fc')}
                  >
                    contact@impackta.online
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right column — Form */}
            <AnimatedSection delay={2}>
              <div style={{ position: 'relative' }}>
                {/* Geometric glowing corner brackets */}
                {(['tl', 'tr', 'bl', 'br'] as const).map((corner, ci) => (
                  <svg
                    key={corner}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    style={{
                      position: 'absolute',
                      top: corner.startsWith('t') ? -6 : undefined,
                      bottom: corner.startsWith('b') ? -6 : undefined,
                      left: corner.endsWith('l') ? -6 : undefined,
                      right: corner.endsWith('r') ? -6 : undefined,
                      zIndex: 2,
                      animation: `geo-pulse 2.5s ease-in-out ${ci * 0.4}s infinite`,
                    }}
                  >
                    {corner === 'tl' && <><path d="M28 2H4a2 2 0 0 0-2 2v24" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/></>}
                    {corner === 'tr' && <><path d="M0 2h24a2 2 0 0 1 2 2v24" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/></>}
                    {corner === 'bl' && <><path d="M28 26H4a2 2 0 0 1-2-2V0" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/></>}
                    {corner === 'br' && <><path d="M0 26h24a2 2 0 0 0 2-2V0" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/></>}
                  </svg>
                ))}

              <div
                style={{
                  padding: '36px 32px',
                  background: 'rgba(11,17,32,0.85)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 24,
                  backdropFilter: 'blur(16px)',
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'rgba(125,211,252,0.1)',
                        border: '2px solid rgba(125,211,252,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        fontSize: 24,
                        color: '#7dd3fc',
                        animation: 'pulse-glow 2.5s ease-in-out infinite',
                      }}
                    >
                      ✓
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 10 }}>
                      Thank you — we are on it!
                    </h3>
                    <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.75, maxWidth: 340, margin: '0 auto' }}>
                      Your submission has been received. A member of the IMPACKTA AI team will be in
                      touch within one business day to confirm your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
                      Book My Free Consultation
                    </h3>
                    <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 28, lineHeight: 1.6 }}>
                      Fill in the form and we will reach out to schedule your call.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {/* Row 1 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <Field
                          label="First Name"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                        <Field
                          label="Last Name"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <Field
                          label="Email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                        <Field
                          label="Phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Row 3 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <Field
                          label="Company Name"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                        />
                        <Field
                          label="Type of Business"
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Challenge textarea */}
                      <div className={`float-field${form.challenge ? ' has-value' : ''}`}>
                        <textarea
                          name="challenge"
                          rows={4}
                          value={form.challenge}
                          onChange={handleChange}
                          placeholder=" "
                          style={{ resize: 'none' }}
                        />
                        <label>Biggest Challenge</label>
                      </div>

                      {/* Solution select */}
                      <div
                        style={{ position: 'relative' }}
                        className={`float-field${form.solution ? ' has-value' : ''}`}
                      >
                        <select
                          name="solution"
                          value={form.solution}
                          onChange={handleChange}
                        >
                          <option value="" style={{ background: '#0b1120' }}> </option>
                          <option value="receptionist" style={{ background: '#0b1120' }}>AI Receptionist / Virtual Front Desk</option>
                          <option value="admin" style={{ background: '#0b1120' }}>AI Admin Assistant</option>
                          <option value="sales" style={{ background: '#0b1120' }}>AI Sales Support Agent</option>
                          <option value="backend" style={{ background: '#0b1120' }}>Backend Operations Automation</option>
                          <option value="systems" style={{ background: '#0b1120' }}>AI Systems</option>
                          <option value="custom" style={{ background: '#0b1120' }}>Custom AI Transformation</option>
                          <option value="unsure" style={{ background: '#0b1120' }}>Not sure — need advice</option>
                        </select>
                        <label>What Solution Interests You</label>
                        {/* Custom arrow */}
                        <span
                          style={{
                            position: 'absolute',
                            right: 14,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none',
                            color: '#64748b',
                            fontSize: 12,
                          }}
                        >
                          ▾
                        </span>
                      </div>

                      {/* Privacy */}
                      <p style={{ fontSize: 11, color: '#64748b', lineHeight: 1.7 }}>
                        By submitting you agree to our{' '}
                        <Link href="/privacy" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                          Privacy Policy
                        </Link>
                        . We never share your data with third parties.
                      </p>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-shimmer"
                        style={{
                          width: '100%',
                          padding: '15px 24px',
                          borderRadius: 12,
                          fontWeight: 700,
                          fontSize: 15,
                          background: loading ? 'rgba(125,211,252,0.5)' : '#7dd3fc',
                          color: '#020617',
                          border: 'none',
                          cursor: loading ? 'wait' : 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 8,
                        }}
                        onMouseEnter={e => {
                          if (!loading) {
                            const el = e.currentTarget as HTMLButtonElement
                            el.style.background = '#bae6fd'
                            el.style.boxShadow = '0 0 28px rgba(125,211,252,0.4)'
                          }
                        }}
                        onMouseLeave={e => {
                          if (!loading) {
                            const el = e.currentTarget as HTMLButtonElement
                            el.style.background = '#7dd3fc'
                            el.style.boxShadow = 'none'
                          }
                        }}
                      >
                        {loading ? (
                          <>
                            <span
                              style={{
                                display: 'inline-block',
                                width: 16,
                                height: 16,
                                border: '2px solid rgba(2,6,23,0.3)',
                                borderTopColor: '#020617',
                                borderRadius: '50%',
                                animation: 'spin 0.7s linear infinite',
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          'Book My Free Consultation →'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              </div>{/* closes position:relative wrapper */}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
