import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

const tiers = [
  {
    tag: 'Tier 1',
    title: 'AI Automations',
    tagline: 'Quick wins that deliver immediate efficiency gains.',
    items: [
      'AI receptionist systems',
      'Scheduling automation',
      'Email triage',
      'CRM automation',
      'Internal productivity agents',
    ],
    bestFor: 'Businesses seeking immediate efficiency improvements.',
    featured: false,
  },
  {
    tag: 'Tier 2',
    title: 'AI Systems',
    tagline: 'Strategic AI implementations that transform operations.',
    items: [
      'Automated lead generation',
      'Sales automation pipelines',
      'Internal workflow automation',
      'Customer support AI systems',
    ],
    bestFor: 'Businesses ready to scale operations with automation.',
    featured: true,
  },
  {
    tag: 'Tier 3',
    title: 'Custom AI Transformation',
    tagline: 'Fully bespoke AI solutions built around the organisation.',
    items: [
      'Deep business process audit',
      'Automation opportunity mapping',
      'Custom AI agent development',
      'System integration',
      'Ongoing optimisation',
    ],
    bestFor: 'Businesses pursuing long-term operational transformation.',
    featured: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero bg-secondary border-b border-glass-border">
        <div className="container">
          <AnimatedSection>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="dot-blink" />
              Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
              Choose the right level of <span className="text-accent">AI transformation.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              From targeted automation fixes to complete operational overhauls — our three service
              tiers are designed to match where your business is and where you want to go.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Tiers ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Service Tiers"
              title={`Three tiers. <span class="text-accent">One goal.</span>`}
              subtitle="Every tier is designed to deliver measurable ROI. We recommend starting with a free consultation to identify the right fit."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <GlassCard
                  className={`p-8 h-full flex flex-col relative ${tier.featured ? 'border-accent-border' : ''}`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-primary text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent-border rounded-full px-3 py-1 mb-4 self-start">
                    {tier.tag}
                  </span>

                  <h2 className="text-2xl font-bold text-white mb-2">{tier.title}</h2>
                  <p className="text-accent text-sm font-medium mb-6">{tier.tagline}</p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-glass-border pt-5 mb-6">
                    <p className="text-xs text-muted">
                      <span className="text-white font-semibold">Best for: </span>
                      {tier.bestFor}
                    </p>
                  </div>

                  <Button to="/contact" variant={tier.featured ? 'primary' : 'outline'} className="w-full justify-center">
                    Get Started →
                  </Button>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
