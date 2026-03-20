'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'About',        href: '/about' },
  { label: 'Solutions',    href: '/solutions' },
  { label: 'Services',     href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-primary/75 backdrop-blur-md border-b border-glass-border">
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white" onClick={() => setOpen(false)}>
          IMPACKTA <span className="text-accent">AI</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium pb-0.5 transition-colors duration-200 after:absolute after:bottom-[-2px] after:h-px after:bg-accent after:transition-all after:duration-200
                  ${isActive
                    ? 'text-accent after:left-0 after:right-0'
                    : 'text-muted hover:text-accent after:left-1/2 after:right-1/2 hover:after:left-0 hover:after:right-0'
                  }`}
              >
                {label}
              </Link>
            )
          })}
          <Button to="/contact" size="sm">Book Consultation</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-secondary/97 backdrop-blur-md border-b border-glass-border px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Button to="/contact" size="sm" className="mt-2 self-start" onClick={() => setOpen(false)}>
            Book Consultation
          </Button>
        </div>
      )}
    </nav>
  )
}
