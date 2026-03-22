'use client'

import Button from '@/components/ui/Button'

export default function TestimonialsPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary">
      <div className="container text-center max-w-2xl py-32">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
          <span className="dot-blink" />
          Client Results
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Client <span className="text-accent">Results</span>
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-10">
          We are just getting started. Testimonials and case studies will appear here as we grow.
        </p>
        <Button to="/" variant="outline" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  )
}
