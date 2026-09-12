'use client'

export default function Experience() {
  const experiences = [
    {
      date: '2021 – 2022',
      title: 'Junior Frontend Developer',
      company: 'WebWave Studios',
      description: 'Worked on responsive websites and collaborated with design & backend teams.',
    },
    {
      date: '2022 – 2023',
      title: 'Frontend Developer',
      company: 'Devate Technologies',
      description: 'Built scalable web apps using React, Next.js and modern tools.',
    },
    {
      date: '2023 – Present',
      title: 'Freelance Developer',
      company: 'Self-employed',
      description: 'Helping clients and brands build fast, modern and user-friendly websites.',
    },
  ]

  return (
    <section id="experience" className="section-shell">
      <div className="section-label">
        <span className="text-xs font-semibold tracking-widest">04</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">EXPERIENCE</h2>
        </div>
      </div>

      <div className="relative border-t border-text-primary">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pt-5">
              <div className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-text-primary"></div>
              <p className="mb-2 text-[11px] font-bold opacity-60">{exp.date}</p>
              <h4 className="mb-1 text-[13px] font-bold">{exp.title}</h4>
              <p className="mb-2 text-[11px] font-bold opacity-70">{exp.company}</p>
              <p className="max-w-xs text-[11px] leading-[1.5] text-text-secondary">
                {exp.description}
              </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
