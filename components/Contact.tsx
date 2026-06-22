'use client'

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In production: connect to API route or Formspree
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest" style={{ color: 'var(--accent-green)' }}>
            Contact
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
            Let&apos;s <span className="gradient-text">Build Together</span>
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Open to AI/ML roles, research collaborations, and freelance projects. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              { icon: '✉', label: 'Email', value: 'karnujjwalkumar5@gmail.com', href: 'mailto:karnujjwalkumar5@gmail.com', color: 'var(--accent-blue)' },
              { icon: '📞', label: 'Phone', value: '+977-972047195', href: 'tel:+977-972047195', color: 'var(--accent-purple)' },
              { icon: '📍', label: 'Location', value: 'Bhaktapur, Nepal', href: null, color: 'var(--accent-green)' },
              { icon: '💼', label: 'LinkedIn', value: 'ujjwal-kumar-karn', href: 'https://www.linkedin.com/in/ujjwal-kumar-karn-530950399', color: 'var(--accent-blue)' },
              { icon: '⌨️', label: 'GitHub', value: 'ujjwal540', href: 'https://github.com/ujjwal540', color: 'var(--accent-purple)' },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 4 }}
                className="glass rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <span className="text-lg">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-sm font-medium truncate block" style={{ color: item.color }}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={5}
                  placeholder="What would you like to build together?"
                  className="form-input resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 rounded-xl text-sm font-semibold"
                style={{
                  background: sent ? 'linear-gradient(135deg, var(--accent-green), #00cc6a)' : 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                  color: '#fff',
                  transition: 'background 0.4s ease',
                }}
              >
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
