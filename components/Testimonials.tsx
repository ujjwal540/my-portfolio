'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Dr. Binod Prasad Bhatta',
    role: 'Research Supervisor',
    company: 'Nepal Engineering College',
    text: 'Ujjwal demonstrated exceptional research aptitude in developing our edge-AI crop disease detection system. His ability to bridge deep learning theory with practical edge deployment is remarkable for a student at his level.',
    avatar: 'BB',
    color: 'var(--accent-blue)',
  },
  {
    name: 'Rajan Shrestha',
    role: 'CTRC Club Advisor',
    company: 'Nepal Engineering College',
    text: 'As Secretary of CTRC, Ujjwal organized some of our most impactful technical workshops. His leadership style combines technical depth with genuine enthusiasm for mentoring fellow students.',
    avatar: 'RS',
    color: 'var(--accent-purple)',
  },
  {
    name: 'Priya Adhikari',
    role: 'Senior Engineer',
    company: 'Tech Community Nepal',
    text: 'Working alongside Ujjwal on AI projects, I was impressed by his end-to-end ownership — from designing RAG pipelines to shipping production APIs. He thinks like a product engineer, not just a coder.',
    avatar: 'PA',
    color: 'var(--accent-green)',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="section">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest" style={{ color: 'var(--accent-blue)' }}>
            Social Proof
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-lift"
            >
              {/* Quote mark */}
              <div className="text-4xl font-black mb-4 leading-none" style={{ color: t.color, opacity: 0.4 }}>"</div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: `${t.color}20`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
