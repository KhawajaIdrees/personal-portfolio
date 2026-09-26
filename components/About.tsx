'use client'

import { GraduationCap, MapPin, Folder } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const infoRows = [
    { icon: GraduationCap, label: 'EDUCATION', value: 'BS Information Technology' },
    { icon: Folder, label: 'PROJECTS', value: '5+ completed' },
    { icon: MapPin, label: 'LOCATION', value: 'Based, Pakistan' },
  ]

  return (
    <section id="about" className="section-shell pt-20 md:pt-24">
      <div className="section-label about-section-label">
        <span className="text-xs font-semibold tracking-widest">01</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">ABOUT ME</h2>
        </div>
      </div>

      <div className="grid items-start gap-14 md:grid-cols-[.72fr_1.28fr] md:gap-20">
        <div>
          <h3 className="editorial-face mb-7 max-w-xl text-4xl leading-[1.12] md:text-5xl">
            I&apos;m a passionate developer who loves<br />
            turning ideas into <strong>real products.</strong>
          </h3>
          <p className="mb-9 max-w-md text-sm leading-[1.8] text-text-secondary md:text-base">
            I enjoy building responsive websites with great user experiences. I focus on writing clean code, paying attention to details and constantly learning new technologies.
          </p>
          <Image
            src="/about-sign.png"
            alt="Khawaja Idrees signature"
            width={190}
            height={78}
            className="h-auto w-[190px] object-contain object-left opacity-70"
          />
        </div>

        <div className="flex flex-col items-start pt-1 md:border-l md:border-border-light md:pl-10 md:pt-2">
          <p className="mb-10 max-w-lg text-sm leading-[1.9] text-text-secondary md:mb-12 md:text-base">
            I’m always exploring, learning and improving my skills. Outside of coding, I enjoy working on personal projects, reading, and staying up to date with the latest in tech.
          </p>
          <div className="flex w-full max-w-lg flex-col gap-7 md:gap-8">
            {infoRows.map((row) => {
              const Icon = row.icon
              return (
                <div key={row.label} className="flex items-start gap-4">
                  <Icon size={18} className="mt-0.5 shrink-0 text-text-secondary" strokeWidth={1.4} aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-[10px] font-semibold tracking-widest text-text-secondary">{row.label}</p>
                    <p className="text-sm font-normal leading-relaxed md:text-base">{row.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
