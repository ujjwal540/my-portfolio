'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-10 text-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-black mb-2">
            <span className="gradient-text">UKK</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>.dev</span>
          </p>
          <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
            Electronics &amp; Communication Engineer · AI Builder · Nepal
          </p>
          <div className="flex justify-center gap-6 mb-6">
            {[
              { label: 'GitHub', href: 'https://github.com/ujjwal540' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ujjwal-kumar-karn-530950399' },
              { label: 'Email', href: 'mailto:ujjwalkumarkarn81@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Ujjwal Kumar Karn. Built with Next.js 15, Tailwind CSS &amp; Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
