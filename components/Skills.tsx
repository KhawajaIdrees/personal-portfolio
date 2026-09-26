'use client'

import { Database } from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
    { name: 'Bootstrap', icon: 'bootstrap', color: '7952B3' },
    { name: 'React', icon: 'react', color: '61DAFB' },
    { name: 'Next.js', icon: 'nextdotjs', color: '000000' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
    { name: 'Git', icon: 'git', color: 'F05032' },
    { name: 'Vercel', icon: 'vercel', color: '000000', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
    { name: 'SQL', icon: '', color: '' },
    { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
    { name: 'ASP.NET', icon: 'dotnet', color: '512BD4' },
    { name: 'Framer Motion', icon: 'framer', color: '0055FF' },
    { name: 'Python', icon: 'python', color: '3776AB' },
  ]

  return (
    <section id="skills" className="section-shell py-14">
      <div className="section-label">
        <span className="text-xs font-semibold tracking-widest">02</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">SKILLS</h2>
        </div>
      </div>

      <div className="skills-marquee overflow-hidden">
        <div className="skills-marquee-track flex w-max items-center">
          {[false, true].map((isDuplicate) => (
            <ul key={String(isDuplicate)} className="flex shrink-0 items-center gap-9 pr-9" aria-hidden={isDuplicate}>
              {skills.map((skill) => (
                <li key={skill.name} className="flex min-w-max items-center gap-3.5 py-3">
                  {skill.name === 'SQL' ? (
                    <Database size={30} strokeWidth={1.5} aria-hidden="true" />
                  ) : skill.name === 'Vercel' ? (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                      <img src={skill.src} alt="" className="h-4 w-4 object-contain brightness-0 invert" />
                    </span>
                  ) : (
                    <img src={skill.src ?? `https://cdn.simpleicons.org/${skill.icon}/${skill.color}`} alt="" className="h-8 w-8 object-contain" />
                  )}
                  <span className="text-sm font-semibold text-text-secondary">{skill.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
