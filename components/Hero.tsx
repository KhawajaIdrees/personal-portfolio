'use client'

import { ArrowRight, Download, Mouse } from 'lucide-react'

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
    <section className="hero-section relative flex min-h-screen flex-col items-center justify-center px-8 pb-10 pt-20 text-center max-md:min-h-screen max-md:px-5 max-md:pb-8 max-md:pt-24">
      <div className="z-10 flex w-full max-w-6xl flex-col items-center">
        <h3 className="mb-7 text-lg font-semibold tracking-[.1em]">HELLO, I&apos;M</h3>
        
        <h1 className="display-face mb-7 w-full whitespace-nowrap text-[clamp(5.25rem,10vw,10rem)] leading-[.88] tracking-[.01em] animate-fadeInUp max-md:text-[15vw]">
          KHAWAJA IDREES
        </h1>

        <div className="mb-4 h-[2px] w-10 bg-text-primary"></div>

        <p className="mb-3 text-lg font-semibold tracking-[.05em]">FRONTEND DEVELOPER & UI/UX ENTHUSIAST</p>
        <p className="mb-7 text-base text-text-secondary">khwajaidrees22@gmail.com</p>

        <div className="mb-5 flex items-center justify-center gap-3 max-md:flex-col max-md:items-center">
          <button
            onClick={() => scrollToSection('work')}
            className="flex h-12 w-[155px] items-center justify-center gap-2 bg-text-primary text-sm font-semibold text-cream transition-smooth hover:-translate-y-1 max-md:w-52"
          >
            VIEW MY WORK
            <ArrowRight size={14} />
          </button>
          <button
            onClick={handleDownloadCV}
            className="flex h-12 w-[160px] items-center justify-center gap-2 border border-text-primary text-sm font-semibold text-text-primary transition-smooth hover:bg-text-primary hover:text-cream max-md:w-52"
          >
            DOWNLOAD CV
            <Download size={14} />
          </button>
        </div>

        <button onClick={() => scrollToSection('about')} className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm font-semibold opacity-80 transition-smooth hover:opacity-100 max-md:bottom-12">
          <Mouse size={19} strokeWidth={2} />
          <span className="tracking-[.1em]">SCROLL DOWN</span>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-10 top-28 z-10 opacity-45 max-md:hidden">
        <div className="grid grid-cols-6 gap-[11px]">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="h-[3px] w-[3px] rounded-full bg-text-primary"></div>
          ))}
        </div>
      </div>

      {/* Scroll Circle */}
      <button onClick={() => scrollToSection('about')} aria-label="Scroll to explore" className="absolute bottom-16 right-12 h-28 w-28 overflow-visible border-0 p-0 opacity-85 no-underline max-md:hidden">
        <img src="/scroll-to-explore.png" alt="Scroll to explore" className="h-full w-full object-contain" />
      </button>
    </section>
  )
}
