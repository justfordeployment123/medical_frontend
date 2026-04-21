'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Particles from '@/components/ui/Particles'

export default function CustomAIPage() {
  const features = [
    { 
      title: 'Bespoke AI Modeling', 
      desc: 'Custom and fine-tuned AI models built on your data, your processes and your business logic.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.1 12.1"></path><path d="M12 12l9.9-0.1"></path><path d="M12 12l0 10"></path></svg>
    },
    { 
      title: 'Predictive Analytics', 
      desc: 'AI that identifies trends, anomalies, and risks in your data before they become problems.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    },
    { 
      title: 'Voice & Vision AI', 
      desc: 'Multimodal AI that can see, hear, and understand your business operations.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H7M19 9H5M21 13H3M19 17H5M17 21H7"></path></svg>
    },
    { 
      title: 'R&D Partnership', 
      desc: 'We act as your fractional AI research department, exploring and building custom solutions beyond off-the-shelf tools.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    },
    { 
      title: 'Edge Deployment', 
      desc: 'Run powerful AI models locally or on-device for maximum speed and privacy.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
    },
    { 
      title: 'AI Agent Development', 
      desc: 'Autonomous AI agents that execute multi-step tasks and make decisions within your business.',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><circle cx="12" cy="12" r="3"></circle><path d="M4 20c2.2-3.6 5.5-5 8-5s5.8 1.4 8 5"></path></svg>
    }
  ]

  return (
    <div className="bg-[#030712] min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
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
              Tier 03 — Innovation
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight mx-auto max-w-4xl">
              Custom <span className="text-accent italic decoration-accent/20 underline underline-offset-8">AI</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              When off-the-shelf isn&apos;t enough, we design and build AI models you own, tailored to your specific competitive advantage.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-sm">
                 Bespoke <span className="text-accent">Engineering</span>
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
              label="Innovation"
              title="What's included in Tier 3"
              subtitle="Where AI becomes your key competitive advantage."
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
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Build the future together.</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Our custom solutions are built from the ground up. No shortcuts, no generic tools - just solutions that work for your business.
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
