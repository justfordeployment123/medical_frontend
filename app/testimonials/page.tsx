'use client'

import Button from '@/components/ui/Button'

export default function TestimonialsPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary">
      <div className="container text-center max-w-xl py-32">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 28,
          }}
        >
          <span
            className="dot-blink"
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#7dd3fc',
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7dd3fc',
            }}
          >
            Client Results
          </span>
        </div>

        <h1
          className="font-extrabold text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 20 }}
        >
          We&apos;re just getting started.
        </h1>

        <p
          style={{
            fontSize: 17,
            color: '#94a3b8',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 460,
            margin: '0 auto 40px',
          }}
        >
          Testimonials and case studies are on their way. As we grow, real results from
          real clients will appear right here.
        </p>

        <Button to="/" variant="outline" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  )
}
