'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, MapPin, Folder } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const infoRows = [
    { icon: GraduationCap, label: 'EDUCATION', value: 'BS Information Technology' },
    { icon: Folder, label: 'PROJECTS', value: '5+ completed' },
    { icon: MapPin, label: 'LOCATION', value: 'Based, Pakistan' },
  ]

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section-shell pt-20 transition-all duration-700 ease-out md:pt-24 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="section-label about-section-label">
        <span className="text-xs font-semibold tracking-widest">01</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">ABOUT ME</h2>
        </div>
      </div>

      <div className="grid items-start gap-14 md:grid-cols-[.72fr_1.28fr] md:gap-20">
        <div
          className={`transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
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

        <div
          className={`flex flex-col items-start pt-1 transition-all duration-700 delay-200 ease-out md:border-l md:border-border-light md:pl-10 md:pt-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="mb-10 max-w-lg text-sm leading-[1.9] text-text-secondary md:mb-12 md:text-base">
            I’m always exploring, learning and improving my skills. Outside of coding, I enjoy working on personal projects, reading, and staying up to date with the latest in tech.
          </p>
          <div className="flex w-full max-w-lg flex-col gap-7 md:gap-8">
            {infoRows.map((row, index) => {
              const Icon = row.icon
              return (
                <div
                  key={row.label}
                  style={{ transitionDelay: isVisible ? `${300 + index * 120}ms` : '0ms' }}
                  className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
                  }`}
                >
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
