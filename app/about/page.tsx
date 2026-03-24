'use client'

import { useState, useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedSection from '@/components/ui/AnimatedSection'

const pillars = [
  {
    label: 'Mission',
    title: 'Why We Exist',
    body: 'We believe many businesses spend too much time on manual processes that slow growth and drain productivity. Our goal is to replace these repetitive tasks with intelligent automation systems that allow teams to focus on higher-value work.',
    icon: '◎',
    // Mission — automation eliminating manual work: clean workflow/productivity
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
  },
  {
    label: 'Approach',
    title: 'How We Work',
    body: 'At IMPACKTA AI we focus on practical automation that delivers measurable results. Rather than introducing unnecessary complexity, we design systems that integrate seamlessly with existing tools and workflows.',
    icon: '⟳',
    // Approach — seamless integration: team working with connected tools
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80',
  },
  {
    label: 'Founder Perspective',
    title: 'Built From Experience',
    body: 'With experience in operations-heavy environments, we understand the real challenges businesses face when managing workflows, communication, and internal processes.',
    icon: '◈',
    // Founder — operations experience: hands-on working environment
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80',
  },
  {
    label: 'What We Do',
    title: 'Our Focus',
    body: 'IMPACKTA AI is an automation consultancy focused on helping businesses eliminate repetitive work and operate more efficiently through intelligent systems and AI-driven automation.',
    icon: '◉',
    // Focus — real estate automation: agent with property
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80',
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
  // Animated counters for stats
  const [counters, setCounters] = useState(['10–0', '24/7', '0%'])
  const statRefs = useRef<(HTMLDivElement | null)[]>([])
  const animated = useRef([false, false, false])

  useEffect(() => {
    const observers = statRefs.current.map((ref, i) => {
      if (!ref) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !animated.current[i]) {
            animated.current[i] = true
            if (i === 1) {
              // 24/7 — scramble then settle
              const steps = ['00/0', '12/3', '20/6', '24/7']
              steps.forEach((v, si) =>
                setTimeout(
                  () => setCounters(p => { const n = [...p]; n[1] = v; return n }),
                  si * 200
                )
              )
              return
            }
            const target = i === 0 ? 25 : 100
            const duration = 1600
            const start = Date.now()
            const tick = () => {
              const t = Math.min((Date.now() - start) / duration, 1)
              const eased = 1 - Math.pow(1 - t, 3)
              const val = Math.round(eased * target)
              setCounters(p => {
                const n = [...p]
                n[i] = i === 0 ? `10–${val}` : `${val}%`
                return n
              })
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        },
        { threshold: 0.6 }
      )
      obs.observe(ref)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

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
        {/* Hero background image — full colour, visible */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
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
            filter: 'brightness(0.7)',
          }}
        />
        {/* Gradient: dark on the left (text side) → transparent on the right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.75) 45%, rgba(11,17,32,0.3) 100%)',
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
                {/* Throb glow border wraps each stat */}
                <div
                  ref={el => { statRefs.current[i] = el }}
                  style={{
                    textAlign: 'center',
                    padding: '24px 16px',
                    borderRadius: 16,
                    border: '1px solid rgba(125,211,252,0.12)',
                    animation: `stat-throb 3s ease-in-out ${i * 0.8}s infinite`,
                  }}
                >
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
                    {counters[i]}
                    {/* Show unit only for index 0 (hrs) since 24/7 and 100% don't have separate units */}
                    {i === 0 && s.unit && (
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
                    position: 'relative',
                    overflow: 'hidden',
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
                  {/* Duotone background image — brand cyan + dark blue tones */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.45,
                      filter: 'brightness(0.75)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />
                  {/* Gradient overlay to fade image at bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 30%, rgba(11,17,32,0.85) 100%)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 2 }}>
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
                  </div>{/* closes position:relative zIndex:2 content wrapper */}
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
      <section style={{ paddingTop: '5rem', paddingBottom: 0, overflow: 'hidden' }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-stretch"
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1.5rem',
          }}
        >
          {/* Col 1 — Vision content */}
          <AnimatedSection delay={1}>
            <div
              className="flex flex-col items-start justify-center h-full"
              style={{
                paddingRight: 'clamp(0rem, 3vw, 3rem)',
                paddingBottom: '5rem',
                paddingTop: '1rem',
              }}
            >
              {/* Label — start */}
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
                  gap: 8,
                  textAlign: 'left',
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

              {/* Headline — centre */}
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  marginBottom: 20,
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                Helping businesses unlock the full potential of AI by transforming everyday operations
                into{' '}
                <span style={{ color: '#7dd3fc' }}>intelligent systems that scale efficiently.</span>
              </h2>

              {/* Body — start */}
              <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, marginBottom: 36, textAlign: 'left' }}>
                We are building a future where no team member wastes their talent on a task a machine
                can handle — freeing people to do the work that actually matters.
              </p>
              <Button to="/contact" variant="primary" size="lg" className="btn-shimmer">
                Start the Conversation
              </Button>
            </div>
          </AnimatedSection>

          {/* Col 2 — image */}
          <AnimatedSection delay={2}>
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '24px 0 0 0',
                height: '100%',
                minHeight: 360,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85"
                alt="Vision — intelligent systems scaling the future"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.85)',
                }}
              />
              {/* Left-edge fade so image blends into the content column */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(2,6,23,0.55) 0%, transparent 35%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Bottom-edge fade */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '35%',
                  background: 'linear-gradient(transparent, rgba(2,6,23,0.5))',
                  pointerEvents: 'none',
                }}
              />
              {/* Floating caption tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(2,6,23,0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(125,211,252,0.25)',
                  borderRadius: 999,
                  padding: '6px 14px',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#7dd3fc',
                    flexShrink: 0,
                    animation: 'dot-blink 1.5s ease-in-out infinite',
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 600, color: '#7dd3fc', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Intelligent Future
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
