'use client'

import { Sun } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false)

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[var(--rail)] flex-col items-center justify-between border-r border-border-light bg-cream py-5 max-md:hidden">
      <div className="sidebar-mark">Ki.</div>
      <div className="flex h-96 items-center justify-center">
        <div
          className="whitespace-nowrap text-[15px] font-black tracking-[.34em]"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          KHAWAJA IDREES
        </div>
      </div>

      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 transition-smooth hover:scale-110"
        aria-label="Toggle theme"
      >
        <Sun size={20} className="text-text-primary" />
      </button>
    </aside>
  )
}
