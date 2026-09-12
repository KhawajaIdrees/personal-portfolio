'use client'

import { Github, Linkedin, FileText, Mail, ArrowRight, Download } from 'lucide-react'

export default function Connect() {
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
    
    2022 – 2023
    Frontend Developer
    Devate Technologies
    
    2021 – 2022
    Junior Frontend Developer
    WebWave Studios
    `
    
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent))
    element.setAttribute('download', 'Khawaja_Idrees_CV.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const connectCards = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/khwajaidrees',
      href: 'https://github.com/khwajaidrees',
      isExternal: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/khwajaidrees',
      href: 'https://linkedin.com/in/khwajaidrees',
      isExternal: true,
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download My Resume',
      onClick: handleDownloadCV,
      isDownload: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'khwajaidrees22@gmail.com',
      href: 'mailto:khwajaidrees22@gmail.com',
    },
  ]

  return (
    <section id="connect" className="section-shell">
      <div className="grid items-center gap-12 md:grid-cols-[.65fr_1.35fr]">
        <div>
          <div className="section-label mb-8"><span>05</span><span>LET&apos;S CONNECT</span></div>
          <h2 className="editorial-face mb-4 text-2xl leading-tight md:text-[27px]">
            Let&apos;s build something amazing together.
          </h2>
          <p className="text-xs leading-relaxed text-text-secondary">
            I&apos;m always open to new opportunities and exciting projects.
          </p>
        </div>

        <div className="grid grid-cols-2">
          {connectCards.map((card, i) => {
            const Icon = card.icon
            
            return (
              <a
                key={i}
                href={card.href || '#'}
                onClick={card.onClick ? (e) => { e.preventDefault(); card.onClick?.() } : undefined}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noopener noreferrer' : undefined}
                className="border border-border-light p-5 transition-smooth hover:-translate-y-1 hover:bg-white/30 group"
              >
                <Icon size={22} className="mb-4" strokeWidth={1.5} />
                <p className="mb-2 text-[10px] font-bold tracking-widest opacity-70">{card.label}</p>
                <p className="mb-3 text-[10px] leading-relaxed text-text-secondary">{card.value}</p>
                {card.isDownload ? (
                  <Download size={14} className="text-text-primary opacity-60" />
                ) : (
                  <ArrowRight size={14} className="text-text-primary opacity-60" />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
