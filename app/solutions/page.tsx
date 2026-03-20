import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

const solutions = [
  {
    number: '01',
    title: 'AI Receptionist & Virtual Front Desk',
    subtitle: 'An AI receptionist that answers calls, messages, and website chats 24/7.',
    capabilities: [
      'Answers inbound calls using voice AI',
      'Qualifies enquiries automatically',
      'Books appointments directly into calendars',
      'Sends confirmations and reminders',
      'Routes urgent calls to humans',
    ],
    impact: [
      'Zero missed leads',
      'Faster response times',
      'Reduced front desk workload',
    ],
  },
  {
    number: '02',
    title: 'AI Admin Assistant',
    subtitle: 'An internal AI agent trained on company workflows to manage repetitive admin.',
    capabilities: [
      'Email triage and prioritisation',
      'CRM updates and data entry',
      'Invoice generation',
      'Document reminders',
      'Internal summaries and reporting',
    ],
    impact: [
      'Saves 10–25 hours per employee per week',
      'Reduces operational errors',
      'Improves internal communication',
    ],
  },
  {
    number: '03',
    title: 'AI Sales Support Agent',
    subtitle: 'An AI system that qualifies and nurtures leads before human involvement.',
    capabilities: [
      'Instant lead engagement',
      'Qualification questions and lead scoring',
      'Automated follow-up sequences',
      'Calendar booking for sales calls',
      'CRM integration and handoff',
    ],
    impact: [
      'Higher quality sales calls',
      'Improved close rates',
      'Reduced sales team workload',
    ],
  },
  {
    number: '04',
    title: 'Backend Operations Automation',
    subtitle: 'AI automation that connects and manages backend workflows.',
    capabilities: [
      'CRM automation and management',
      'Accounting integrations',
      'Order processing automation',
      'Automated approvals and notifications',
      'Data syncing between systems',
    ],
    impact: [
      'Reduced operational workload',
      'Faster execution across teams',
      'Improved visibility for management',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero bg-secondary border-b border-glass-border">
        <div className="container">
          <AnimatedSection>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="dot-blink" />
              Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
              AI solutions built for <span className="text-accent">real business problems.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Each solution is designed around a specific operational challenge. Explore how
              IMPACKTA AI removes friction, reduces workload, and improves performance across your
              business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="section">
        <div className="container">
          <div className="space-y-8">
            {solutions.map((sol, i) => (
              <AnimatedSection key={sol.number} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <GlassCard className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-3xl font-extrabold text-accent/30 leading-none flex-shrink-0">
                      {sol.number}
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {sol.title}
                      </h2>
                      <p className="text-accent font-medium">{sol.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Capabilities */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                        <span className="h-px flex-1 bg-accent-border" />
                        Capabilities
                        <span className="h-px flex-1 bg-accent-border" />
                      </h3>
                      <ul className="space-y-3">
                        {sol.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                        <span className="h-px flex-1 bg-accent-border" />
                        Impact
                        <span className="h-px flex-1 bg-accent-border" />
                      </h3>
                      <ul className="space-y-3">
                        {sol.impact.map((imp) => (
                          <li key={imp} className="flex items-start gap-3 text-sm font-medium text-white">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-14">
              <p className="text-muted mb-6">
                Not sure which solution is right for you? Book a free consultation and we will
                identify the highest-impact opportunities for your business.
              </p>
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
