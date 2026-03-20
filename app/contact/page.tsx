'use client'

import { useState } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
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

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(defaultForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero bg-secondary border-b border-glass-border">
        <div className="container">
          <AnimatedSection>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="dot-blink" />
              Free Consultation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
              Book your free <span className="text-accent">AI consultation.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Tell us about your business and we will identify the highest-impact automation
              opportunities for your team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Two-col Layout ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left column */}
            <AnimatedSection delay={1}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">In this call we will:</h2>
                <ul className="space-y-4 mb-10">
                  {[
                    'Review your current workflows and identify bottlenecks',
                    'Identify automation opportunities specific to your business',
                    'Suggest potential AI solutions tailored to your goals',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-accent/10 border border-accent-border flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">Book Directly</h3>
                  <p className="text-muted text-sm mb-6">
                    Prefer to skip the form? Book a time directly in our calendar.
                  </p>
                  <Button href="#" variant="outline">
                    Open Calendly →
                  </Button>
                </GlassCard>
              </div>
            </AnimatedSection>

            {/* Right column — Form */}
            <AnimatedSection delay={2}>
              <GlassCard className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-14 w-14 rounded-full bg-accent/10 border border-accent-border flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl text-accent">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Thank you — we are on it!
                    </h3>
                    <p className="text-muted leading-relaxed">
                      Your submission has been received. A member of the IMPACKTA AI team will be
                      in touch within one business day to confirm your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-white mb-1">Book My Free Consultation</h3>
                    <p className="text-muted text-sm mb-4">
                      Fill in the form and we will reach out to schedule your call.
                    </p>

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          First Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          Last Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors"
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors"
                          placeholder="+44 7700 000000"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors"
                          placeholder="Acme Ltd"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                          Type of Business
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                          className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors"
                          placeholder="e.g. Healthcare, Legal..."
                        />
                      </div>
                    </div>

                    {/* Biggest Challenge */}
                    <div>
                      <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                        Biggest Challenge
                      </label>
                      <textarea
                        name="challenge"
                        rows={4}
                        value={form.challenge}
                        onChange={handleChange}
                        className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-border transition-colors resize-none"
                        placeholder="Describe the biggest operational challenge your team faces..."
                      />
                    </div>

                    {/* Solution Select */}
                    <div>
                      <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                        What Solution Interests You
                      </label>
                      <select
                        name="solution"
                        value={form.solution}
                        onChange={handleChange}
                        className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-border transition-colors appearance-none"
                      >
                        <option value="" className="bg-secondary">Select an option...</option>
                        <option value="receptionist" className="bg-secondary">AI Receptionist / Virtual Front Desk</option>
                        <option value="admin" className="bg-secondary">AI Admin Assistant</option>
                        <option value="sales" className="bg-secondary">AI Sales Support Agent</option>
                        <option value="backend" className="bg-secondary">Backend Operations Automation</option>
                        <option value="systems" className="bg-secondary">AI Systems</option>
                        <option value="custom" className="bg-secondary">Custom AI Transformation</option>
                        <option value="unsure" className="bg-secondary">Not sure – need advice</option>
                      </select>
                    </div>

                    {/* Privacy */}
                    <p className="text-xs text-muted">
                      By submitting this form you agree to our{' '}
                      <Link href="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </Link>
                      . We will never share your data with third parties without your consent.
                    </p>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 px-6 py-3 text-sm bg-accent text-primary border border-accent hover:bg-sky-200 hover:shadow-[0_0_24px_rgba(125,211,252,0.4)] hover:-translate-y-px cursor-pointer"
                    >
                      Book My Free Consultation
                    </button>
                  </form>
                )}
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
