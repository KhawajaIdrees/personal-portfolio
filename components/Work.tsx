'use client'

import { ExternalLink } from 'lucide-react'

export default function Work() {
  const projects = [
    { year: '2026', category: 'AI RESUME BUILDER', name: 'RECRUMA', href: 'https://recruma-3k2a.vercel.app/', preview: '/recruma.png' },
    { year: '2026', category: 'PREMIUM E-COMMERCE', name: 'MORT', href: 'https://mort-pink.vercel.app/', preview: '/mort.png' },
    { year: '2026', category: 'E-COMMERCE STORE', name: 'WALK AND TALK', href: 'https://walk-n-talk-eight.vercel.app/', preview: '/walk-n-talk.png' },
    { year: '2026', category: 'RESTAURANT', name: 'ANATOLYA FOOD' },
    { year: '2025', category: 'LANDSCAPING', name: 'SB SOLARTECH' },
  ]

  return (
    <section id="work" className="section-shell">
      <div className="section-label">
        <span className="text-xs font-semibold tracking-widest">03</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">SELECTED WORK</h2>
        </div>
      </div>

      <div>
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.href ?? '#'}
            target={project.href ? '_blank' : undefined}
            rel={project.href ? 'noopener noreferrer' : undefined}
            onPointerMove={(event) => {
              if (event.pointerType !== 'mouse' || !project.href) return
              const bounds = event.currentTarget.getBoundingClientRect()
              const tooltipWidth = 112
              const tooltipHeight = 28
              const left = Math.max(8, Math.min(event.clientX - bounds.left + 14, bounds.width - tooltipWidth - 8))
              const top = Math.max(8, Math.min(event.clientY - bounds.top + 14, bounds.height - tooltipHeight - 8))
              event.currentTarget.style.setProperty('--live-link-left', `${left}px`)
              event.currentTarget.style.setProperty('--live-link-top', `${top}px`)
            }}
            className="group relative mx-3 grid min-h-[112px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 rounded-sm border-b border-border-light px-4 py-5 transition-smooth hover:z-10 hover:scale-[1.01] hover:border-white/30 hover:bg-[#111111] hover:text-cream focus-visible:z-10 focus-visible:scale-[1.01] focus-visible:border-white/30 focus-visible:bg-[#111111] focus-visible:text-cream md:mx-4 md:min-h-[120px] md:grid-cols-[.65fr_1.8fr_112px_20px] md:gap-3 md:px-5 lg:min-h-[120px] lg:grid-cols-[.65fr_1.8fr_176px_20px] lg:gap-5"
          >
            {/* Meta */}
            <div className="col-span-2 font-mono text-base font-normal text-text-secondary transition-smooth group-hover:text-cream group-focus-visible:text-cream md:col-span-1 md:col-start-1 md:row-start-1 md:text-sm lg:text-lg">
              <p>{project.year}, {project.category}</p>
              {project.href && (
                <span
                  className="live-website-cursor pointer-events-none absolute left-[var(--live-link-left,16px)] top-[var(--live-link-top,16px)] z-10 inline-flex h-7 items-center gap-2 whitespace-nowrap bg-cream px-2.5 font-sans text-[9px] font-bold tracking-wide text-text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100"
                  style={{ left: 'var(--live-link-left, 16px)', top: 'var(--live-link-top, 16px)' }}
                >
                  <ExternalLink size={12} strokeWidth={1.8} aria-hidden="true" />
                  LIVE WEBSITE
                </span>
              )}
            </div>

            {/* Project Name */}
            <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-1">
              <h3 className="display-face text-[36px] leading-none transition-smooth group-hover:text-cream group-focus-visible:text-cream md:text-[40px] lg:text-[52px]">
                {project.name}
              </h3>
            </div>

            {project.preview && (
              <img
                src={project.preview}
                alt={`${project.name} website preview`}
                loading="lazy"
                className="col-span-2 hidden aspect-[3/2] w-[112px] scale-95 object-cover opacity-0 transition-smooth group-hover:z-20 group-hover:scale-[1.12] group-hover:opacity-100 group-focus-visible:z-20 group-focus-visible:scale-[1.12] group-focus-visible:opacity-100 md:col-span-1 md:col-start-3 md:row-start-1 md:block lg:w-[176px]"
              />
            )}

            {/* Link Button */}
            <div className="col-start-2 row-start-2 flex justify-end text-text-primary transition-smooth group-hover:text-cream group-focus-visible:text-cream md:col-start-4 md:row-start-1">
              <ExternalLink size={20} strokeWidth={1.5} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
