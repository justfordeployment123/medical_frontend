'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Particles from '@/components/ui/Particles'

export default function AIAutomationsPage() {
  const features = [
    { 
      title: 'AI Receptionist Systems', 
      desc: 'Never miss a call or inquiry again. Our AI handles inbound 24/7.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    },
    { 
      title: 'Scheduling Automation', 
      desc: 'Automatically book appointments and meetings directly into your calendar.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    { 
      title: 'Email Triage', 
      desc: 'Identify critical emails and auto-respond with precision.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    { 
      title: 'CRM Automation', 
      desc: 'Keep your CRM perfectly synced without manual entry or errors.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    { 
      title: 'Internal Agents', 
      desc: 'Empower your staff with AI assistants trained on your internal workflows.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.1 12.1"></path><path d="M12 12l9.9-0.1"></path><path d="M12 12l0 10"></path></svg>
    },
    { 
      title: 'Quality Control', 
      desc: 'Auto-verify data and processes to ensure zero-defect operations.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    }
  ]

  return (
    <div className="bg-[#030712] min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.22] filter brightness-[0.45]"
          aria-hidden="true"
        />

        {/* Particles */}
        <Particles className="absolute inset-0 z-0" count={60} />

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

        <div className="container relative z-10 px-6 mx-auto py-32 text-center">
          <AnimatedSection>
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Tier 01 — Foundation
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight mx-auto max-w-4xl">
              AI <span className="text-accent italic decoration-accent/20 underline underline-offset-8">Automations</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              Quick wins that deliver immediate efficiency gains. We identify bottlenecks in your operations and automate them with precision, freeing your team to focus on what matters.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-sm">
                 <span className="text-white">Rapid</span> <span className="text-accent">Deployment</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container px-6 mx-auto">
          <AnimatedSection>
            <SectionHeading 
              label="Capabilities"
              title="What's included in Tier 1"
              subtitle="Everything you need to remove manual admin from your business."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={((i % 3) + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 h-full relative overflow-hidden text-center">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#050a18] relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <AnimatedSection>
            <div className="p-12 md:p-24 rounded-[4rem] bg-[#0b1120] border border-white/10 text-center relative overflow-hidden shadow-2xl">
              {/* Immersive Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
                alt=""
                fill
                className="object-cover opacity-10 filter grayscale brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-accent/5" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] -mr-48 -mt-48" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to automate?</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Our automation solutions are designed for rapid deployment and immediate impact. Let&apos;s find your quick wins.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer px-12 py-5 text-lg">
                    Book a Free AI Consultation
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
