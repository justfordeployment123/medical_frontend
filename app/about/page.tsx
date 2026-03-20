import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

const pillars = [
  {
    label: 'Mission',
    title: 'Why We Exist',
    body: 'We believe many businesses spend too much time on manual processes that slow growth and drain productivity. Our goal is to replace these repetitive tasks with intelligent automation systems that allow teams to focus on higher-value work.',
  },
  {
    label: 'Approach',
    title: 'How We Work',
    body: 'At IMPACKTA AI we focus on practical automation that delivers measurable results. Rather than introducing unnecessary complexity, we design systems that integrate seamlessly with existing tools and workflows.',
  },
  {
    label: 'Founder Perspective',
    title: 'Built From Experience',
    body: 'With experience in operations-heavy environments, we understand the real challenges businesses face when managing workflows, communication, and internal processes.',
  },
  {
    label: 'What We Do',
    title: 'Our Focus',
    body: 'IMPACKTA AI is an automation consultancy focused on helping businesses eliminate repetitive work and operate more efficiently through intelligent systems and AI-driven automation.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero bg-secondary border-b border-glass-border">
        <div className="container">
          <AnimatedSection>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="dot-blink" />
              About IMPACKTA AI
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
              We help businesses work <span className="text-accent">smarter</span>, not harder.
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              IMPACKTA AI is an automation consultancy that designs and deploys intelligent systems
              to remove manual work, reduce costs, and help teams operate at full capacity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Who We Are"
              title={`The principles behind <span class="text-accent">everything we build</span>`}
              subtitle="Four core ideas that guide our work and define our approach to AI automation."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <GlassCard className="p-8 h-full">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border border-accent-border rounded-full px-3 py-1 mb-4">
                    {p.label}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                  <p className="text-muted leading-relaxed">{p.body}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Block ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
                <span className="dot-blink" />
                Our Vision
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Our vision is to help businesses unlock the full potential of AI by transforming
                everyday operations into{' '}
                <span className="text-accent">intelligent systems that scale efficiently.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-10">
                We are building a future where no team member wastes their talent on a task a
                machine can handle — freeing people to do the work that actually matters.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Start the Conversation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
