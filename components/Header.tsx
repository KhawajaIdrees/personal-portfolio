'use client'

import { Mail } from 'lucide-react'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ]

  return (
    <header className="absolute left-[var(--rail)] right-0 top-0 z-40 bg-cream max-md:left-0">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 px-8 py-5 max-md:flex max-md:flex-wrap max-md:gap-3 max-md:px-5 max-md:py-3 lg:px-12">
        <div className="flex items-center gap-2 whitespace-nowrap rounded-[3px] border border-border-light px-3 py-[10px] text-xs font-semibold text-text-secondary transition-smooth hover:border-text-primary">
          <Mail size={15} strokeWidth={2} />
          <a href="mailto:khwajaidrees22@gmail.com" className="hover:opacity-60 transition-smooth">
            khwajaidrees22@gmail.com
          </a>
        </div>

        <nav className="flex items-center justify-self-center gap-2 text-sm uppercase text-text-secondary max-md:order-3 max-md:w-full max-md:flex-wrap max-md:justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-pill display-face inline-flex min-h-[46px] items-center whitespace-nowrap rounded-[3px] border border-border-light px-4 py-2 text-[16px] font-normal leading-none text-text-primary transition-smooth hover:border-text-primary"
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection('contact')}
          className="contact-nav-button display-face whitespace-nowrap rounded-[3px] border border-text-primary bg-text-primary px-7 py-3 text-[16px] font-normal leading-none text-cream transition-smooth max-md:ml-auto"
        >
          <span className="contact-label text-cream transition-smooth">CONTACT</span>
        </button>
      </div>
    </header>
  )
}
