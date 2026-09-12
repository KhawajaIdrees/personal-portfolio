'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border-light px-10 py-6 max-md:px-5">
      <div className="flex flex-col items-center justify-between gap-3 text-[10px] text-text-secondary md:flex-row">
        <p>&copy; 2024 Khawaja Idrees. All Rights Reserved.</p>
        <p>
          Designed & Built with <span className="text-red-600 animate-heartbeat inline-block">♡</span> by Khawaja Idrees
        </p>
      </div>
    </footer>
  )
}
