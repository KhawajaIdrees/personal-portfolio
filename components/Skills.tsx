'use client'

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: 'html5', color: 'E34F26' }, { name: 'CSS', icon: 'css3', color: '1572B6' },
    { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' }, { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
    { name: 'React', icon: 'react', color: '61DAFB' }, { name: 'Next.js', icon: 'nextdotjs', color: '000000' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' }, { name: 'Git', icon: 'git', color: 'F05032' }, { name: 'Figma', icon: 'figma', color: 'F24E1E' },
  ]

  return (
    <section id="skills" className="section-shell py-12">
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
            <img src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`} alt={`${skill.name} logo`} className="h-8 w-8 object-contain" />
            <span className="text-[10px] font-semibold tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
