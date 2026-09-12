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
    { id: 'about', label: '01 About' },
    { id: 'work', label: '02 Work' },
    { id: 'skills', label: '03 Skills' },
    { id: 'experience', label: '04 Experience' },
  ]

  return (
    <header
      className={`fixed left-[var(--rail)] right-0 top-0 z-40 bg-cream transition-smooth max-md:left-0 ${
        scrolled ? 'backdrop-blur-sm bg-opacity-95' : ''
      }`}
    >
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-14 px-10 py-7 max-md:flex max-md:flex-wrap max-md:gap-3 max-md:px-5 max-md:py-3">
        <div className="flex items-center gap-2 whitespace-nowrap text-xs">
          <Mail size={14} className="opacity-60" />
          <a href="mailto:khwajaidrees22@gmail.com" className="hover:opacity-60 transition-smooth">
            khwajaidrees22@gmail.com
          </a>
        </div>

        <nav className="flex items-center gap-8 text-xs font-bold uppercase max-md:order-3 max-md:w-full max-md:justify-center max-md:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`border-b pb-1 whitespace-nowrap transition-smooth ${
                activeNav === item.id
                  ? 'border-text-primary'
                  : 'border-transparent hover:border-text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection('contact')}
          className="whitespace-nowrap border border-text-primary px-8 py-3 text-xs font-bold transition-smooth hover:bg-text-primary hover:text-cream"
        >
          CONNECT
        </button>
      </div>
    </header>
  )
}
