'use client'

import { User, GraduationCap, MapPin, Briefcase, Folder, Phone } from 'lucide-react'

export default function About() {
  const infoCards = [
    { icon: User, label: 'NAME', value: 'Khawaja Idrees' },
    { icon: GraduationCap, label: 'EDUCATION', value: 'BS Information Technology' },
    { icon: MapPin, label: 'LOCATION', value: 'Based, Pakistan' },
    { icon: Briefcase, label: 'EXPERIENCE', value: '3+ Years' },
    { icon: Folder, label: 'PROJECTS', value: '5+ Completed' },
    { icon: Phone, label: 'PHONE', value: '+92 312 4567890' },
  ]

  return (
    <section id="about" className="section-shell">
      <div className="section-label">
        <span className="text-xs font-semibold tracking-widest">01</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">ABOUT ME</h2>
        </div>
      </div>

      <div className="grid items-start gap-12 md:grid-cols-[.72fr_1.28fr] md:gap-16">
        <div>
          <h3 className="editorial-face mb-5 max-w-md text-2xl leading-tight md:text-[27px]">
            I&apos;m a passionate developer who loves turning ideas into real products.
          </h3>
          <p className="mb-7 max-w-sm text-xs leading-relaxed text-text-secondary">
            I enjoy building responsive websites with great user experiences. I focus on writing clean code, paying attention to details and constantly learning new technologies.
          </p>
          <div className="editorial-face text-2xl italic opacity-70">Idrees</div>
        </div>

        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {infoCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div key={i} className="border border-border-light p-4 transition-smooth hover:bg-white/40">
                <Icon size={20} className="mb-3" strokeWidth={1.5} />
                <p className="mb-1 text-[9px] font-bold tracking-widest opacity-70">{card.label}</p>
                <p className="text-[10px] font-bold leading-tight">{card.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
