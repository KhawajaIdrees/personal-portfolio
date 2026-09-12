'use client'

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: 'html5' }, { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' }, { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' }, { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' }, { name: 'Git', icon: 'git' }, { name: 'Figma', icon: 'figma' },
  ]

  return (
    <section id="skills" className="section-shell">
      <div className="section-label">
        <span className="text-xs font-semibold tracking-widest">02</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">SKILLS</h2>
        </div>
      </div>

      <div className="grid grid-cols-9 max-md:grid-cols-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2 border-r border-border-light py-2 last:border-r-0 transition-smooth hover:scale-105">
            <img src={`https://cdn.simpleicons.org/${skill.icon}`} alt={`${skill.name} logo`} className="h-7 w-7 object-contain" />
            <span className="text-[9px] font-bold tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
