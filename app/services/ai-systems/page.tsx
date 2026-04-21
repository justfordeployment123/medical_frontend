'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Particles from '@/components/ui/Particles'

export default function AISystemsPage() {
  const features = [
    { 
      title: 'Workflow Orchestration', 
      desc: 'Connect your entire tech stack into a single, automated ecosystem.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    },
    { 
      title: 'Data Synchronization', 
      desc: 'Real-time data flow between CRM, ERP, and custom applications.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
    },
    { 
      title: 'Automated Reporting', 
      desc: 'Get deep insights delivered directly to your inbox or Slack.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    },
    { 
      title: 'Process Monitoring', 
      desc: '24/7 monitoring of all automated workflows with instant alerts.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="7" r="4"></circle></svg>
    },
    { 
      title: 'Legacy Integration', 
      desc: 'Upgrade old systems without expensive migrations using AI bridges.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
    },
    { 
      title: 'System Scaling', 
      desc: 'Architecture designed to grow with your business volume effortlessly.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    }
  ]

  return (
    <div className="bg-[#030712] min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
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
              Tier 02 — Integration
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight mx-auto max-w-4xl">
              AI <span className="text-accent italic decoration-accent/20 underline underline-offset-8">Systems</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              Connect your business logic under a single automated umbrella. We build the architecture that allows your data to flow and your systems to talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-sm">
                 End-to-End <span className="text-accent">Connectivity</span>
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
              label="Architecture"
              title="What's included in Tier 2"
              subtitle="The backbone of a truly automated, scale-ready enterprise."
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
              <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] -ml-48 -mt-48" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Scale with confidence.</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Our AI systems are built to grow with your business. Let&apos;s build yours.
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
