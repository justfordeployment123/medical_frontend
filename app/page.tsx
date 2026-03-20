import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

const problems = [
  {
    title: 'Missed Calls & Enquiries',
    body: 'Every unanswered call or slow reply is a lost opportunity. Businesses miss revenue simply because they cannot respond fast enough.',
  },
  {
    title: 'Repetitive Admin Tasks',
    body: 'Hours are wasted on data entry, scheduling, and manual updates that add no strategic value to your business.',
  },
  {
    title: 'Slow Response Times',
    body: 'Customers expect instant answers. Delays in follow-up damage trust and cause potential clients to look elsewhere.',
  },
  {
    title: 'Disconnected Systems',
    body: 'Teams juggle multiple tools that do not talk to each other, creating silos, duplication, and constant manual hand-offs.',
  },
  {
    title: 'Manual Follow-Ups',
    body: 'Leads and clients fall through the cracks because there is no automated system to nurture relationships at scale.',
  },
  {
    title: 'Onboarding Inefficiencies',
    body: 'New clients and staff take too long to get up to speed due to fragmented processes and inconsistent documentation.',
  },
]

const services = [
  {
    tag: 'Tier 1',
    title: 'AI Automations',
    tagline: 'Quick wins that deliver immediate efficiency gains.',
    description:
      'We identify the highest-impact repetitive tasks in your business and replace them with intelligent automation — fast.',
    bullets: [
      'AI receptionist & scheduling',
      'Email triage & CRM automation',
      'Internal productivity agents',
      'Workflow notifications & triggers',
    ],
  },
  {
    tag: 'Tier 2',
    title: 'AI Systems',
    tagline: 'Strategic AI implementations that transform operations.',
    description:
      'End-to-end automation systems that connect your tools, workflows, and teams into a single intelligent operation.',
    bullets: [
      'Automated lead generation pipelines',
      'Sales automation & follow-ups',
      'Internal workflow automation',
      'Customer support AI systems',
    ],
  },
  {
    tag: 'Tier 3',
    title: 'Custom AI',
    tagline: 'Fully bespoke AI solutions built around your organisation.',
    description:
      'A complete AI transformation engagement — from deep process audit to custom agent development and ongoing optimisation.',
    bullets: [
      'Deep business process audit',
      'Automation opportunity mapping',
      'Custom AI agent development',
      'System integration & ongoing support',
    ],
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
    body: 'We learn about your business, current workflows, and the biggest time-draining tasks your team faces.',
  },
  {
    num: '02',
    title: 'System Design',
    body: 'We map out a custom automation architecture tailored to your tools, team structure, and business goals.',
  },
  {
    num: '03',
    title: 'Implementation',
    body: 'We build and deploy your AI systems — integrating with your existing stack with minimal disruption.',
  },
  {
    num: '04',
    title: 'Optimisation',
    body: 'After launch we monitor performance, refine outputs, and continuously improve your automation systems.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(125,211,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(125,211,252,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="container relative z-10 py-32 text-center">
          <AnimatedSection>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              <span className="dot-blink" />
              AI Automation Consultancy
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <h1 className="mx-auto max-w-4xl text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6">
              AI systems that eliminate{' '}
              <span className="text-accent">repetitive work.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted leading-relaxed mb-10">
              We design and deploy intelligent automation systems that remove manual admin,
              reduce operational costs, and allow your business to scale without increasing
              headcount.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Book a Free AI Consultation
              </Button>
              <Button to="/solutions" variant="outline" size="lg">
                View Solutions
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="The Problem"
              title={`Why businesses are <span class="text-accent">losing time</span> every day`}
              subtitle="These are the operational bottlenecks we see across every industry — and every one of them can be solved with the right automation."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={(((i % 5) + 1) as 1 | 2 | 3 | 4 | 5)}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.body}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={(((i % 5) + 1) as 1 | 2 | 3 | 4 | 5)}>
                <GlassCard className="p-8 h-full flex flex-col">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent-border rounded-full px-3 py-1 mb-4 self-start">
                    {s.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{s.tagline}</p>
                  <p className="text-muted text-sm leading-relaxed mb-6">{s.description}</p>
                  <ul className="mt-auto space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
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
              subtitle="Our automation systems are already helping businesses across a wide range of sectors remove manual work and scale smarter."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc} delay={(((i % 5) + 1) as 1 | 2 | 3 | 4 | 5)}>
                <div className="glass-card px-5 py-4 text-center text-sm font-medium text-white hover:text-accent transition-colors">
                  {uc}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How It Works"
              title={`From first call to <span class="text-accent">live system</span> in weeks`}
              subtitle="Our process is designed to be clear, efficient, and low-friction — so you can start seeing results as fast as possible."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={(((i % 5) + 1) as 1 | 2 | 3 | 4 | 5)}>
                <GlassCard className="p-8 h-full">
                  <p className="text-4xl font-extrabold text-accent/30 mb-4 leading-none">{s.num}</p>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.body}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Button to="/contact" variant="primary" size="lg">
                Book a Free AI Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
