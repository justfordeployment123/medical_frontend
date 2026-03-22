'use client'

import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

const pillars = [
  {
    label: 'Mission',
    title: 'Why We Exist',
    body: 'We believe many businesses spend too much time on manual processes that slow growth and drain productivity. Our goal is to replace these repetitive tasks with intelligent automation systems that allow teams to focus on higher-value work.',
    icon: '◎',
  },
  {
    label: 'Approach',
    title: 'How We Work',
    body: 'At IMPACKTA AI we focus on practical automation that delivers measurable results. Rather than introducing unnecessary complexity, we design systems that integrate seamlessly with existing tools and workflows.',
    icon: '⟳',
  },
  {
    label: 'Founder Perspective',
    title: 'Built From Experience',
    body: 'With experience in operations-heavy environments, we understand the real challenges businesses face when managing workflows, communication, and internal processes.',
    icon: '◈',
  },
  {
    label: 'What We Do',
    title: 'Our Focus',
    body: 'IMPACKTA AI is an automation consultancy focused on helping businesses eliminate repetitive work and operate more efficiently through intelligent systems and AI-driven automation.',
    icon: '◉',
  },
]

const values = [
  'Practical', 'Measurable', 'Seamless', 'Intelligent', 'Scalable',
  'Efficient', 'Transformative', 'Results-Driven', 'Practical', 'Measurable',
  'Seamless', 'Intelligent', 'Scalable', 'Efficient', 'Transformative', 'Results-Driven',
]

const stats = [
  { value: '10–25', unit: 'hrs', label: 'Saved per employee per week' },
  { value: '24/7', unit: '', label: 'AI systems running non-stop' },
  { value: '100%', unit: '', label: 'Focused on practical automation' },
]

export default function AboutPage() {
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
        <div className="container relative">
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
              About IMPACKTA AI
            </p>
            <h1
              className="font-extrabold text-white leading-tight max-w-3xl mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              We help businesses work{' '}
              <span style={{ color: '#7dd3fc' }}>smarter</span>, not harder.
            </h1>
            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.75, maxWidth: 640 }}>
              IMPACKTA AI is an automation consultancy that designs and deploys intelligent systems
              to remove manual work, reduce costs, and help teams operate at full capacity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ background: '#020617', padding: '48px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 24,
            }}
          >
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={(i + 1) as 1 | 2 | 3}>
                <div style={{ textAlign: 'center', padding: '16px 8px' }}>
                  <p
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 900,
                      color: '#7dd3fc',
                      lineHeight: 1,
                      marginBottom: 8,
                      fontFamily: 'ui-monospace, monospace',
                    }}
                  >
                    {s.value}
                    {s.unit && (
                      <span style={{ fontSize: '0.55em', fontWeight: 600, marginLeft: 4 }}>
                        {s.unit}
                      </span>
                    )}
                  </p>
                  <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: 48 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7dd3fc',
                  marginBottom: 12,
                }}
              >
                <span
                  className="dot-blink"
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#7dd3fc',
                    marginRight: 8,
                    verticalAlign: 'middle',
                  }}
                />
                Who We Are
              </p>
              <h2
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}
              >
                The principles behind{' '}
                <span style={{ color: '#7dd3fc' }}>everything we build</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div
                  style={{
                    height: '100%',
                    padding: 32,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = '0 8px 32px rgba(125,211,252,0.1)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 22, color: 'rgba(125,211,252,0.6)' }}>{p.icon}</span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#7dd3fc',
                        border: '1px solid rgba(125,211,252,0.3)',
                        borderRadius: 999,
                        padding: '3px 11px',
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.8 }}>{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values Marquee ── */}
      <section
        style={{
          background: '#0b1120',
          padding: '40px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-track" aria-hidden="true">
          {values.map((v, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 28,
                paddingRight: 28,
                fontSize: 15,
                fontWeight: 700,
                color: i % 2 === 0 ? '#7dd3fc' : 'rgba(255,255,255,0.3)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {v}
              <svg width="6" height="6" viewBox="0 0 6 6" style={{ flexShrink: 0 }}>
                <polygon points="3,0 6,3 3,6 0,3" fill="rgba(125,211,252,0.4)" />
              </svg>
            </span>
          ))}
        </div>
      </section>

      {/* ── Vision Block ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7dd3fc',
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
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
                Our Vision
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  marginBottom: 20,
                }}
              >
                Helping businesses unlock the full potential of AI by transforming everyday operations
                into{' '}
                <span style={{ color: '#7dd3fc' }}>intelligent systems that scale efficiently.</span>
              </h2>
              <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, marginBottom: 36 }}>
                We are building a future where no team member wastes their talent on a task a machine
                can handle — freeing people to do the work that actually matters.
              </p>
              <Button to="/contact" variant="primary" size="lg" className="btn-shimmer">
                Start the Conversation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
