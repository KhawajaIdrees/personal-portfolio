'use client'

import { ArrowRight, Download, ChevronDown, Mouse } from 'lucide-react'

export default function Hero() {
  const handleDownloadCV = () => {
    const cvContent = `
    KHAWAJA IDREES
    Frontend Developer & UI/UX Enthusiast
    
    EMAIL: khwajaidrees22@gmail.com
    PHONE: +92 312 4567890
    LOCATION: Based, Pakistan
    
    ═══════════════════════════════════════════════════════════
    EDUCATION
    ═══════════════════════════════════════════════════════════
    
    BS Information Technology
    
    ═══════════════════════════════════════════════════════════
    EXPERIENCE
    ═══════════════════════════════════════════════════════════
    
    2023 – Present
    Freelance Developer
    Self-employed
    Helping clients and brands build fast, modern and user-friendly websites.
    
    2022 – 2023
    Frontend Developer
    Devate Technologies
    Built scalable web apps using React, Next.js and modern tools.
    
    2021 – 2022
    Junior Frontend Developer
    WebWave Studios
    Worked on responsive websites and collaborated with design & backend teams.
    
    ═══════════════════════════════════════════════════════════
    SKILLS
    ═══════════════════════════════════════════════════════════
    
    • HTML5
    • CSS3
    • JavaScript
    • TypeScript
    • React
    • Next.js
    • Tailwind CSS
    • Git
    • Figma
    `
    
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent))
    element.setAttribute('download', 'Khawaja_Idrees_CV.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-12 pb-20 pt-32 max-md:px-5 max-md:py-28">
      <div className="z-10 max-w-5xl text-center">
        <h3 className="mb-4 text-xs font-bold tracking-[.16em]">HELLO, I&apos;M</h3>
        
        <h1 className="display-face mb-5 whitespace-nowrap text-[clamp(3rem,9vw,8.5rem)] leading-none tracking-[-.025em] animate-fadeInUp max-md:text-[15vw]">
          KHAWAJA IDREES
        </h1>

        <div className="mx-auto mb-5 h-px w-10 bg-text-primary"></div>

        <p className="mb-2 text-xs font-bold tracking-[.08em]">FRONTEND DEVELOPER & UI/UX ENTHUSIAST</p>
        <p className="mb-8 text-[11px] text-text-secondary">khwajaidrees22@gmail.com</p>

        {/* Buttons */}
        <div className="mb-10 flex justify-center gap-4 max-md:flex-col max-md:items-center">
          <button
            onClick={() => scrollToSection('work')}
            className="flex items-center justify-center gap-2 bg-text-primary px-7 py-3 text-[10px] font-bold text-cream transition-smooth hover:-translate-y-1 max-md:w-48"
          >
            VIEW MY WORK
            <ArrowRight size={14} />
          </button>
          <button
            onClick={handleDownloadCV}
            className="flex items-center justify-center gap-2 border border-text-primary px-7 py-3 text-[10px] font-bold text-text-primary transition-smooth hover:bg-text-primary hover:text-cream max-md:w-48"
          >
            DOWNLOAD CV
            <Download size={14} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <button onClick={() => scrollToSection('about')} className="mx-auto flex items-center gap-2 text-[10px] opacity-70 transition-smooth hover:opacity-100">
          <Mouse size={16} />
          <span className="tracking-[.1em]">SCROLL DOWN</span>
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-12 top-20 opacity-20 max-md:hidden">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-text-primary"></div>
          ))}
        </div>
      </div>

      {/* Scroll Circle */}
      <button onClick={() => scrollToSection('about')} aria-label="Scroll to explore" className="absolute bottom-16 right-12 h-28 w-28 opacity-70 max-md:hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
          </defs>
          <text fontSize="8" letterSpacing="2" fill="currentColor">
            <textPath href="#circlePath" startOffset="0%">SCROLL TO EXPLORE</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-light">↓</span>
      </button>
    </section>
  )
}
