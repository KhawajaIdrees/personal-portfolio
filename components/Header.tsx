'use client'

import { Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeNav, setActiveNav] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveNav(sectionId)
    }
  }

  const navItems = [
    { id: 'about', number: '01', label: 'About' },
    { id: 'work', number: '02', label: 'Work' },
    { id: 'skills', number: '03', label: 'Skills' },
    { id: 'experience', number: '04', label: 'Experience' },
  ]

  return (
    <header
      className={`fixed left-[var(--rail)] right-0 top-0 z-40 bg-cream transition-smooth max-md:left-0 ${
        scrolled ? 'backdrop-blur-sm bg-opacity-95' : ''
      }`}
    >
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
              className={`display-face inline-flex min-h-[46px] items-center whitespace-nowrap rounded-[3px] border px-4 py-2 text-base transition-smooth ${
                activeNav === item.id
                  ? 'border-text-primary bg-white/30'
                  : 'border-border-light hover:border-text-primary hover:bg-white/30'
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <span className="font-bold text-text-secondary">{item.number}</span>
                <span>{item.label}</span>
              </span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection('contact')}
          className="contact-nav-button display-face whitespace-nowrap rounded-[3px] border border-text-primary bg-text-primary px-7 py-3 text-base font-bold text-cream transition-smooth max-md:ml-auto"
        >
          CONTACT
        </button>
      </div>
    </header>
  )
}
