'use client'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Work() {
  const projects = [
    { year: '2026', category: 'AI RESUME BUILDER', name: 'RECRUMA', href: 'https://recruma-3k2a.vercel.app/', preview: '/recruma.png' },
    { year: '2026', category: 'PREMIUM E-COMMERCE', name: 'MORT', href: 'https://mort-pink.vercel.app/', preview: '/mort.png' },
    { year: '2026', category: 'E-COMMERCE STORE', name: "WALK 'N' TALK", href: 'https://walk-n-talk-eight.vercel.app/', preview: '/walk-n-talk.png' },
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
            data-project-row
            onPointerEnter={(event) => {
              if (event.pointerType !== 'mouse' || !project.href) return
              const row = event.currentTarget as HTMLElement
              const badge = row.querySelector<HTMLElement>('.live-website-cursor')
              if (!badge) return
              badge.style.opacity = '1'
            }}
            onPointerMove={(event) => {
              if (event.pointerType !== 'mouse' || !project.href) return
              const row = event.currentTarget as HTMLElement
              const badge = row.querySelector<HTMLElement>('.live-website-cursor')
              if (!badge) return

              const rowBounds = row.getBoundingClientRect()
              const badgeWidth = badge.offsetWidth || 112
              const badgeHeight = badge.offsetHeight || 28
              const x = Math.max(8, Math.min(event.clientX - rowBounds.left + 12, rowBounds.width - badgeWidth - 12))
              const y = Math.max(8, Math.min(event.clientY - rowBounds.top + 12, rowBounds.height - badgeHeight - 8))

              row.style.setProperty('--live-link-left', `${x}px`)
              row.style.setProperty('--live-link-top', `${y}px`)
            }}
            onPointerLeave={(event) => {
              if (!project.href) return
              const row = event.currentTarget as HTMLElement
              const badge = row.querySelector<HTMLElement>('.live-website-cursor')
              if (badge) badge.style.opacity = '0'
            }}
            className={`group relative mx-3 grid min-h-[100px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 rounded-sm border-b border-border-light px-4 py-3 transition-smooth hover:z-10 hover:rounded-md hover:border-white/30 hover:bg-[#111111] hover:text-cream focus-visible:z-10 focus-visible:rounded-md focus-visible:border-white/30 focus-visible:bg-[#111111] focus-visible:text-cream md:mx-4 md:min-h-[100px] md:grid-cols-[.95fr_144px_1.8fr_20px] md:gap-3 md:px-5 md:py-1 lg:grid-cols-[.95fr_208px_1.8fr_20px] ${project.preview ? 'md:hover:min-h-[144px] md:focus-visible:min-h-[144px] lg:hover:min-h-[168px] lg:focus-visible:min-h-[168px]' : ''}`}
          >
            {/* Meta */}
            <div className="col-span-2 font-mono text-base font-normal text-text-secondary transition-smooth group-hover:text-cream group-focus-visible:text-cream md:col-span-1 md:col-start-1 md:row-start-1 md:text-sm lg:text-lg">
              <p>{project.year}, {project.category}</p>
              {project.href && (
                <span
                  className="live-website-cursor pointer-events-none absolute left-[var(--live-link-left,16px)] top-[var(--live-link-top,16px)] z-30 inline-flex h-7 items-center gap-2 whitespace-nowrap bg-cream px-2.5 font-sans text-[9px] font-bold tracking-wide text-text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ left: 'var(--live-link-left, 16px)', top: 'var(--live-link-top, 16px)' }}
                >
                  <ExternalLink size={12} strokeWidth={1.8} aria-hidden="true" />
                  LIVE WEBSITE
                </span>
              )}
            </div>

            {/* Project Name */}
            <div className="col-start-1 row-start-2 md:col-start-3 md:row-start-1">
              <h3 className="display-face text-[36px] leading-none transition-smooth group-hover:text-cream group-focus-visible:text-cream md:text-[40px] lg:text-[52px]">
                {project.name}
              </h3>
            </div>

            {project.preview && (
              <div className="relative col-span-2 hidden h-0 w-full md:col-span-1 md:col-start-2 md:row-start-1 md:block">
                <Image
                  src={project.preview}
                  alt={`${project.name} website preview`}
                  width={240}
                  height={118}
                  quality={100}
                  sizes="(min-width: 1024px) 240px, 184px"
                  loading="lazy"
                  className="absolute left-[-29px] top-1/2 z-20 h-[90px] w-[184px] -translate-y-1/2 scale-95 rounded-xl border border-[#999999] object-cover opacity-0 transition-smooth group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 lg:h-[118px] lg:w-[240px]"
                />
              </div>
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
