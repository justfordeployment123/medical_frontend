'use client'

import SectionHeading from './SectionHeading'
import AnimatedSection from './AnimatedSection'

const testimonials = [
  {
    quote: "IMPACKTA AI totally transformed how we handle inbound enquiries. We haven't missed a single lead since their custom voice agent went live. It's like having a superhuman receptionist.",
    name: "Sarah Jenkins",
    role: "Operations Director, Healthcare Clinic",
  },
  {
    quote: "The automated bid due diligence system they built cut our processing time from hours down to just minutes. The return on investment was immediate and obvious.",
    name: "David Chen",
    role: "Managing Partner, Legal Firm",
  },
  {
    quote: "Our team was drowning in repetitive administrative tasks. Working with IMPACKTA resulted in a seamless automation ecosystem that gave us back 20+ hours a week per person.",
    name: "Michael Torres",
    role: "CEO, Tech Startup",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title={`What our <span class="text-accent">clients</span> say`}
            subtitle="Real results from businesses that have embraced AI automation to scale their operations."
            center
          />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <div 
                style={{
                  padding: '32px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  height: '100%',
                }}
              >
                <div style={{ color: '#7dd3fc', opacity: 0.5 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p style={{ fontSize: 15, color: '#f1f5f9', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>
                  &quot;{t.quote}&quot;
                </p>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>
                    {t.name}
                  </h4>
                  <p style={{ fontSize: 13, color: '#94a3b8' }}>{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
