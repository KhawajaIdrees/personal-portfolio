import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khawaja Idrees - Frontend Developer & UI/UX Enthusiast',
  description: 'Professional portfolio of Khawaja Idrees, a passionate frontend developer with 3+ years of experience in building modern web applications.',
  keywords: 'Frontend Developer, React, Next.js, TypeScript, UI/UX, Web Development, Pakistan',
  authors: [{ name: 'Khawaja Idrees' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
