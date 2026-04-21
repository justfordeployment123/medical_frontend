'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

export default function TermsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero bg-secondary border-b border-glass-border">
        <div className="container">
          <AnimatedSection>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="dot-blink" />
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-muted">Last updated: March 2025</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Prose ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl space-y-10 text-muted leading-relaxed">

              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the services provided by
                IMPACKTA AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By engaging our services or using our
                website, you agree to be bound by these Terms. Please read them carefully.
              </p>

              {/* 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Eligibility</h2>
                <p>
                  You must be at least 18 years of age and have the legal authority to enter into
                  binding contracts on behalf of yourself or your organisation to use our services.
                  By engaging IMPACKTA AI you confirm that you meet these requirements.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services Overview</h2>
                <p>
                  IMPACKTA AI provides AI automation consultancy services including but not limited
                  to AI automation design and implementation, web scraping solutions, outreach
                  automation, and lead generation systems for B2B clients. The specific scope of
                  services is defined in individual client agreements or statements of work.
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Accounts &amp; Access</h2>
                <p>
                  Where access credentials are provided to you for any platform, tool, or system
                  operated by IMPACKTA AI, you are responsible for maintaining the confidentiality
                  of those credentials. You must not share access with unauthorised parties and must
                  notify us immediately of any suspected breach or unauthorised use.
                </p>
              </div>

              {/* 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Fees &amp; Payments</h2>
                <p>
                  Payment terms are set out in your individual service agreement. Unless otherwise
                  agreed in writing: payment is required in advance of service delivery; subscriptions
                  or retainer arrangements will auto-renew unless cancelled with written notice prior
                  to the renewal date; late payments may incur interest charges or result in
                  suspension of services.
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
                <p className="mb-3">You agree not to use our services to:</p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    'Send unsolicited commercial communications (spam) in violation of applicable law',
                    'Distribute malware, viruses, or any malicious code',
                    'Reverse engineer, decompile, or attempt to extract source code from our systems',
                    'Violate any applicable data protection law including GDPR',
                    'Engage in any activity that is unlawful, harmful, or fraudulent',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <p>
                  All intellectual property created by IMPACKTA AI in the course of delivering
                  services — including code, workflows, systems, and documentation — remains the
                  property of IMPACKTA AI until full and final payment has been received. Upon
                  receipt of full payment, ownership of deliverables specifically created for the
                  client will transfer to the client as agreed in writing. We retain the right to
                  use anonymised work samples for portfolio and marketing purposes.
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Client Data &amp; Confidentiality</h2>
                <p>
                  We treat all client data and business information as confidential. We will not
                  disclose confidential information to third parties without your written consent
                  except as required by law. You retain ownership of all data you provide to us.
                  We will process your data in accordance with our Privacy Policy and applicable
                  data protection legislation.
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Service Availability</h2>
                <p>
                  We aim to deliver reliable, high-quality services but we do not guarantee
                  uninterrupted or error-free service availability. We are not responsible for
                  downtime caused by third-party platforms, internet outages, or factors outside
                  our reasonable control. We will endeavour to communicate planned maintenance or
                  service interruptions in advance where possible.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers</h2>
                <p>
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
                  kind, whether express or implied, including but not limited to implied warranties
                  of merchantability, fitness for a particular purpose, or non-infringement. We do
                  not warrant that our services will meet your specific requirements or that results
                  achieved will be accurate, complete, or suitable for your purposes.
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, IMPACKTA AI will not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including but
                  not limited to loss of profits, data, or business opportunities. Our total
                  liability for any claim arising from your use of our services will not exceed the
                  total fees paid by you to IMPACKTA AI in the three months preceding the claim.
                </p>
              </div>

              {/* 11 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless IMPACKTA AI and its affiliates,
                  directors, employees, and agents from any claims, liabilities, damages, costs,
                  and expenses (including reasonable legal fees) arising from your use of our
                  services, your violation of these Terms, or your violation of any third-party
                  rights.
                </p>
              </div>

              {/* 12 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
                <p>
                  Either party may terminate a service agreement by providing written notice as
                  specified in the relevant agreement. Upon termination, all outstanding invoices
                  become immediately payable. We reserve the right to suspend or terminate access
                  to our services immediately in the event of a material breach of these Terms
                  without refund of prepaid fees.
                </p>
              </div>

              {/* 13 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of England
                  and Wales. Any disputes arising under or in connection with these Terms shall be
                  subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              {/* 14 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">14. Changes to These Terms</h2>
                <p>
                  We reserve the right to update these Terms at any time. Changes will be published
                  on this page with an updated effective date. Your continued use of our services
                  following any changes constitutes acceptance of the revised Terms. We recommend
                  reviewing this page periodically.
                </p>
              </div>

              {/* 15 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-3">
                  <strong className="text-white">IMPACKTA AI</strong>
                  <br />
                  Email:{' '}
                  <a href="mailto:contact@impackta.ai" className="text-accent hover:underline">
                    contact@impackta.ai
                  </a>
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
