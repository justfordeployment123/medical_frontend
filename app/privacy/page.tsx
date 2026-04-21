'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted">Last updated: March 2025</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Prose ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl prose-custom space-y-10 text-muted leading-relaxed">

              <p>
                This Privacy Policy explains how IMPACKTA AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects,
                uses, stores, and protects your personal data when you use our website or services.
                By using our website you agree to the practices described in this policy.
              </p>

              {/* 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

                <h3 className="text-lg font-semibold text-white mt-5 mb-2">1.1 Information You Provide Directly</h3>
                <p>
                  When you complete a contact form, book a consultation, or communicate with us, we
                  may collect your name, email address, phone number, company name, and any other
                  information you choose to share.
                </p>

                <h3 className="text-lg font-semibold text-white mt-5 mb-2">1.2 Information Collected Automatically</h3>
                <p>
                  When you visit our website we may automatically collect certain technical data
                  including your IP address, browser type, device information, pages visited, and
                  time spent on the site. This data is collected via cookies and similar
                  technologies.
                </p>

                <h3 className="text-lg font-semibold text-white mt-5 mb-2">1.3 Information from Third Parties</h3>
                <p>
                  We may receive information about you from third-party platforms such as calendar
                  booking tools or analytics providers, where you have consented to such sharing.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    'To respond to enquiries and provide our services',
                    'To schedule and conduct consultations',
                    'To send relevant communications about our services',
                    'To improve our website and user experience',
                    'To comply with legal obligations',
                    'To prevent fraud and ensure security',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis for Processing (GDPR)</h2>
                <p>
                  Where applicable under UK GDPR and EU GDPR, we process your personal data on
                  the following lawful bases: consent (where you have given explicit permission),
                  contract performance (to fulfil our services), legitimate interests (to improve
                  our business and communicate with prospects), and legal obligation (to comply
                  with applicable law).
                </p>
              </div>

              {/* 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes
                  outlined in this policy, or as required by law. Client data is retained for a
                  minimum of six years following the end of a contract for legal and accounting
                  purposes. You may request deletion of your data at any time, subject to legal
                  retention requirements.
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing &amp; Third Parties</h2>
                <p>
                  We do not sell your personal data. We may share your data with trusted third-party
                  service providers (such as CRM platforms, email services, and calendar tools)
                  where necessary to deliver our services. All third parties are contractually
                  required to handle your data securely and in accordance with applicable law.
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. International Data Transfers</h2>
                <p>
                  Some of our service providers may process data outside of the United Kingdom or
                  European Economic Area. Where this occurs, we ensure appropriate safeguards are
                  in place, such as Standard Contractual Clauses, to protect your data in
                  accordance with UK GDPR requirements.
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your
                  personal data against unauthorised access, loss, destruction, or alteration.
                  While we take security seriously, no method of transmission over the internet is
                  completely secure and we cannot guarantee absolute security.
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Cookies &amp; Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar technologies to improve your experience,
                  analyse traffic, and understand user behaviour. You can control cookie settings
                  through your browser preferences. Disabling certain cookies may affect the
                  functionality of our website.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights</h2>
                <p className="mb-3">
                  Under applicable data protection law you have the following rights:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    'Right to access — request a copy of your personal data',
                    'Right to correct — request correction of inaccurate data',
                    'Right to delete — request deletion of your personal data',
                    'Right to restrict — request restriction of processing',
                    'Right to withdraw consent — at any time, where processing is based on consent',
                    'Right to data portability — receive your data in a portable format',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:contact@impackta.ai" className="text-accent hover:underline">
                    contact@impackta.ai
                  </a>
                  .
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed at individuals under the age of 18. We do not
                  knowingly collect personal data from children. If you believe a child has
                  provided us with personal data, please contact us immediately and we will take
                  steps to delete that information.
                </p>
              </div>

              {/* 11 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted
                  on this page with an updated effective date. We encourage you to review this
                  policy periodically. Continued use of our website following any changes
                  constitutes your acceptance of the updated policy.
                </p>
              </div>

              {/* 12 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  our data practices, please contact us at:
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
