import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-glass-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold mb-4">
              IMPACKTA <span className="text-accent">AI</span>
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              AI automation systems that eliminate repetitive work and allow businesses to scale without increasing headcount.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[['Home', '/'], ['About', '/about'], ['Solutions', '/solutions'], ['Services', '/services'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-accent transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:contact@impackta.online" className="text-sm text-muted hover:text-accent transition-colors">
                  contact@impackta.online
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-accent transition-colors">
                  Book a consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} IMPACKTA AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
