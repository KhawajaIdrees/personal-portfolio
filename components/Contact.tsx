'use client'

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email')
      return
    }

    // Show success
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })

    // Hide success after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <section id="contact" className="section-shell">
      <div className="section-label">
        <span className="text-xs font-semibold tracking-widest">06</span>
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-12 bg-border-light"></div>
          <h2 className="text-xs font-semibold tracking-widest whitespace-nowrap">LET&apos;S WORK TOGETHER</h2>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-[.9fr_.8fr_1.3fr]">
        <div>
          <h3 className="editorial-face mb-4 text-2xl leading-tight md:text-[25px]">
            Have a project in mind or want to say hello?
          </h3>
          <p className="text-xs text-text-secondary">
            Feel free to reach out. I&apos;ll get back to you soon!
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="flex items-start gap-3">
            <Mail size={16} className="mt-1 opacity-70 flex-shrink-0" />
            <span>khwajaidrees22@gmail.com</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={16} className="mt-1 opacity-70 flex-shrink-0" />
            <span>+92 312 4567890</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-1 opacity-70 flex-shrink-0" />
            <span>Based, Pakistan</span>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-border-light bg-white/30 px-3 py-3 text-xs transition-smooth placeholder:text-text-secondary/70 focus:border-text-primary focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-border-light bg-white/30 px-3 py-3 text-xs transition-smooth placeholder:text-text-secondary/70 focus:border-text-primary focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none border border-border-light bg-white/30 px-3 py-3 text-xs transition-smooth placeholder:text-text-secondary/70 focus:border-text-primary focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 bg-text-primary px-6 py-3 text-[10px] font-bold text-cream transition-smooth hover:-translate-y-1"
            >
              SEND MESSAGE
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-text-primary text-cream px-12 py-8 rounded z-50 animate-slideIn text-center">
          <p className="text-sm font-semibold">Message sent successfully! I&apos;ll get back to you soon.</p>
        </div>
      )}
    </section>
  )
}
