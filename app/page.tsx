'use client'

import { useRef } from 'react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Particles from '@/components/ui/Particles'
import LiveCounter from '@/components/ui/LiveCounter'
import CyclingText from '@/components/ui/CyclingText'
import ProblemRow from '@/components/ui/ProblemRow'
import StepItem from '@/components/ui/StepItem'

const problemRows = [
  {
    problem: 'Missed calls and lost enquiries',
    solution: 'AI Receptionist answers 24/7 — zero missed leads, instant response',
  },
  {
    problem: 'Repetitive admin work consuming your team',
    solution: 'AI Admin Assistant saves 10–25 hrs per employee per week',
  },
  {
    problem: 'Slow responses to inbound leads',
    solution: 'Instant lead engagement within seconds of every enquiry',
  },
  {
    problem: 'Disconnected software systems creating silos',
    solution: 'Backend automation syncs all your tools automatically',
  },
  {
    problem: 'Constant manual follow-ups falling through cracks',
    solution: 'Automated follow-up sequences, fully personalised at scale',
  },
  {
    problem: 'Onboarding and training inefficiencies',
    solution: 'AI Onboarding Assistant guides new hires instantly from day one',
  },
]

const services = [
  {
    tag: 'Tier 1',
    badge: 'Quick Wins',
    title: 'AI Automations',
    tagline: 'Immediate efficiency gains.',
    description:
      'We identify the highest-impact repetitive tasks in your business and replace them with intelligent automation — fast.',
    bullets: [
      'AI receptionist & scheduling',
      'Email triage & CRM automation',
      'Internal productivity agents',
      'Workflow notifications & triggers',
    ],
    featured: false,
    // AI Receptionist & scheduling — real estate agent on the phone
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80',
  },
  {
    tag: 'Tier 2',
    badge: 'Most Popular',
    title: 'AI Systems',
    tagline: 'Operational transformation.',
    description:
      'End-to-end automation systems that connect your tools, workflows, and teams into a single intelligent operation.',
    bullets: [
      'Automated lead generation pipelines',
      'Sales automation & follow-ups',
      'Internal workflow automation',
      'Customer support AI systems',
    ],
    featured: true,
    // Sales pipelines & CRM — business analytics dashboard
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80',
  },
  {
    tag: 'Tier 3',
    badge: 'Enterprise',
    title: 'Custom AI',
    tagline: 'Fully bespoke AI solutions.',
    description:
      'A complete AI transformation engagement — from deep process audit to custom agent development and ongoing optimisation.',
    bullets: [
      'Deep business process audit',
      'Automation opportunity mapping',
      'Custom AI agent development',
      'System integration & ongoing support',
    ],
    featured: false,
    // Bespoke enterprise development — team strategy/consulting
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80',
  },
]

const useCases = [
  'Medical & Healthcare Clinics',
  'Legal & Professional Services',
  'Real Estate Agencies',
  'Recruitment Firms',
  'E-commerce & Retail',
  'Financial Services',
  'Marketing & Creative Agencies',
  'SaaS & Tech Startups',
]

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    body: 'We analyse your workflows and identify the biggest automation opportunities for your specific business.',
  },
  {
    num: '02',
    title: 'System Design',
    body: 'We design a custom AI solution tailored precisely to your processes, tools, and team structure.',
  },
  {
    num: '03',
    title: 'Implementation',
    body: 'The system is built, integrated, and deployed into your existing stack with minimal disruption.',
  },
  {
    num: '04',
    title: 'Optimisation',
    body: 'We monitor performance and continuously refine the system as your business grows.',
  },
]

export default function HomePage() {
  const magnetRef = useRef<HTMLDivElement>(null)

  function handleMagnet(e: React.MouseEvent<HTMLDivElement>) {
    const el = magnetRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.3
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  function resetMagnet() {
    if (magnetRef.current) magnetRef.current.style.transform = 'translate(0, 0)'
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ background: '#020617' }}
      >
        {/* Hero background — luxury real estate property, matches AI-for-RE theme */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.22,
            filter: 'brightness(0.45)',
          }}
        />

        {/* Particles */}
        <Particles className="absolute inset-0 z-0" count={75} />

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(rgba(125,211,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(125,211,252,0.11) 0%, transparent 70%)',
          }}
        />

        {/* Fluid gradient overlay — slow-moving abstract background */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              'linear-gradient(135deg, rgba(125,211,252,0.06) 0%, rgba(56,189,248,0.04) 25%, transparent 50%, rgba(14,165,233,0.05) 75%, rgba(125,211,252,0.05) 100%)',
            backgroundSize: '400% 400%',
            animation: 'fluid-bg 18s ease infinite',
          }}
        />

        <div className="container relative z-10 py-36 text-center">
          {/* Industry cycling label */}
          <AnimatedSection>
            <p
              className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#94a3b8' }}
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
              AI Automation built for&nbsp;
              <CyclingText />
            </p>
          </AnimatedSection>

          {/* Main headline — word-by-word staggered slide-in */}
          <h1
            className="mx-auto max-w-4xl font-extrabold leading-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            {(['AI', 'systems', 'that'] as const).map((word, i) => (
              <span
                key={word}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  animation: `word-slide-in 0.5s ease ${0.3 + i * 0.1}s forwards`,
                  marginRight: '0.28em',
                }}
              >
                {word}
              </span>
            ))}
            <span
              className="text-accent"
              style={{
                display: 'inline-block',
                opacity: 0,
                animation: 'word-slide-in 0.5s ease 0.6s forwards, glitch 0.45s ease 2.1s 1',
                marginRight: '0.28em',
              }}
            >
              eliminate
            </span>
            {(['repetitive', 'work.'] as const).map((word, i) => (
              <span
                key={word}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  animation: `word-slide-in 0.5s ease ${0.7 + i * 0.1}s forwards`,
                  marginRight: i === 1 ? 0 : '0.28em',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <AnimatedSection delay={2}>
            <p
              className="mx-auto max-w-2xl leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8' }}
            >
              We design and deploy intelligent automation systems that remove manual admin,
              reduce operational costs, and allow your business to scale without increasing
              headcount.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Magnetic hover button */}
              <div
                ref={magnetRef}
                onMouseMove={handleMagnet}
                onMouseLeave={resetMagnet}
                style={{ display: 'inline-block', transition: 'transform 0.2s ease' }}
              >
                <Button to="/contact" variant="primary" size="lg" className="btn-shimmer">
                  Book a Free AI Consultation
                </Button>
              </div>
              <Button to="/solutions" variant="outline" size="lg">
                View Solutions →
              </Button>
            </div>
          </AnimatedSection>

          {/* Live counter */}
          <AnimatedSection delay={4}>
            <div className="mt-14 flex justify-center">
              <LiveCounter />
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32"
          style={{
            background: 'linear-gradient(transparent, #020617)',
          }}
        />
      </section>

      {/* ── Problems (interactive) ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="The Problem"
              title={`Most growing businesses struggle with:`}
              subtitle="Hover each row to reveal the AI solution — every problem below has been solved for businesses just like yours."
              center
            />
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div
              style={{
                maxWidth: 760,
                margin: '0 auto',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {problemRows.map((row, i) => (
                <ProblemRow
                  key={i}
                  index={i}
                  problem={row.problem}
                  solution={row.solution}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <p
              className="text-center mt-10"
              style={{ color: '#94a3b8', fontSize: 14 }}
            >
              Our AI systems automate these processes so your team can focus on higher-value work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Services"
              title={`Three tiers of <span class="text-accent">AI transformation</span>`}
              subtitle="Whether you need quick wins or a full operational overhaul, we have a service tier designed to match your ambition."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <div
                  className="h-full flex flex-col relative"
                  style={{
                    background: s.featured
                      ? 'rgba(125,211,252,0.06)'
                      : 'rgba(255,255,255,0.03)',
                    border: s.featured
                      ? '1px solid rgba(125,211,252,0.35)'
                      : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    padding: 32,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(-6px)'
                    el.style.boxShadow = '0 12px 40px rgba(125,211,252,0.12)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {/* Corner image — abstract tech/RE visual in top-right */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: s.featured
                        ? '1px solid rgba(125,211,252,0.35)'
                        : '1px solid rgba(125,211,252,0.15)',
                      boxShadow: s.featured
                        ? '0 0 20px rgba(125,211,252,0.18)'
                        : '0 0 10px rgba(125,211,252,0.08)',
                      animation: `float ${6.5 + (s.featured ? 0 : 1)}s ease-in-out infinite`,
                      pointerEvents: 'none',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9)',
                      }}
                    />
                  </div>

                  {s.featured && (
                    <div
                      style={{
                        position: 'absolute',
                        top: -14,
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          background: '#7dd3fc',
                          color: '#020617',
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '4px 14px',
                          borderRadius: 999,
                          animation: 'pulse-glow 2.5s ease-in-out infinite',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {s.badge}
                      </span>
                    </div>
                  )}

                  {s.featured && <div style={{ marginBottom: 8 }} />}

                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#7dd3fc',
                      marginBottom: 12,
                    }}
                  >
                    {s.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: '#94a3b8',
                      marginBottom: 20,
                    }}
                  >
                    {s.description}
                  </p>

                  <ul style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {s.bullets.map(b => (
                      <li
                        key={b}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          fontSize: 13,
                          color: '#94a3b8',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            marginTop: 6,
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#7dd3fc',
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 24 }}>
                    <Button
                      to="/services"
                      variant={s.featured ? 'primary' : 'outline'}
                      className={`w-full justify-center${s.featured ? ' btn-shimmer' : ''}`}
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Use Cases"
              title={`Built for <span class="text-accent">every industry</span>`}
              subtitle="Our automation systems help businesses across all sectors remove manual work and scale smarter."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc} delay={(((i % 5) + 1) as 1 | 2 | 3 | 4 | 5)}>
                <div
                  style={{
                    padding: '14px 20px',
                    borderRadius: 14,
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#e2e8f0',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.22s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.color = '#7dd3fc'
                    el.style.borderColor = 'rgba(125,211,252,0.3)'
                    el.style.background = 'rgba(125,211,252,0.05)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.color = '#e2e8f0'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.background = 'rgba(255,255,255,0.03)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  {uc}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works (scroll-driven timeline) ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How It Works"
              title={`From first call to <span class="text-accent">live system</span> in weeks`}
              subtitle="Our process is clear, low-friction, and built for speed — so you see results as fast as possible."
              center
            />
          </AnimatedSection>

          <div className="max-w-xl mx-auto mt-2">
            {steps.map((s, i) => (
              <StepItem
                key={s.num}
                num={s.num}
                title={s.title}
                body={s.body}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-4">
              <Button to="/contact" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
