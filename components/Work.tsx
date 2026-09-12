'use client'

import { ExternalLink } from 'lucide-react'

export default function Work() {
  const projects = [
    { year: '2026', category: 'SHOPPING GUIDE', name: 'GERMAN MUSEUMS ASSOCIATION' },
    { year: '2026', category: 'PSYCHOLOGIST', name: 'ALICE TOSCHI' },
    { year: '2026', category: 'BIKES', name: 'THÖMUS' },
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
            href="#"
            className="group grid min-h-[60px] items-center gap-5 border-b border-border-light py-3 transition-smooth hover:bg-black/[.025] md:grid-cols-[.65fr_1.8fr_.15fr]"
          >
            {/* Meta */}
            <div className="text-[11px] font-bold tracking-wider opacity-60">
              {project.year}, {project.category}
            </div>

            {/* Project Name */}
            <div>
              <h3 className="display-face text-[25px] tracking-tight md:text-[26px]">
                {project.name}
              </h3>
            </div>

            {/* Link Button */}
            <div className="flex justify-start md:justify-end">
              <div className="flex h-7 w-7 items-center justify-center border border-text-primary transition-smooth group-hover:bg-text-primary group-hover:text-cream md:ml-auto">
                <ExternalLink size={14} strokeWidth={1.5} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
