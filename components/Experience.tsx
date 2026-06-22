'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    period: '2022 – Present',
    role: 'B.E. Electronics & Communication Engineering',
    company: 'Nepal Engineering College',
    type: 'Education',
    color: 'var(--accent-blue)',
    description: 'Solid foundation in signal processing, embedded systems, and communication engineering. Applied engineering principles to build AI-powered applications and research projects.',
    highlights: ['IEEE Research Paper', 'Edge-AI systems', 'GPA: Strong'],
  },
  {
    period: '2024',
    role: 'AI/ML Developer (Projects)',
    company: 'Independent',
    type: 'Development',
    color: 'var(--accent-purple)',
    description: 'Built production-grade RAG systems, LLM applications, and Voice AI assistants using Python, FastAPI, LangChain, and OpenAI APIs. Developed full-stack AI apps deployed on cloud infrastructure.',
    highlights: ['RAG Chatbot', 'Voice AI (Alex)', 'FastAPI Backends'],
  },
  {
    period: '2023 – 2024',
    role: 'Secretary',
    company: 'CTRC — Nepal Engineering College',
    type: 'Leadership',
    color: 'var(--accent-green)',
    description: 'Led Computer Technology & Robotronix Club as Secretary. Coordinated technical workshops, innovation programs, and student-led projects promoting collaborative learning.',
    highlights: ['Technical Workshops', 'Innovation Programs', 'Student Leadership'],
  },
  {
    period: '2023',
    role: 'Research: AI Crop Disease Detection',
    company: 'IEEE Publication',
    type: 'Research',
    color: 'var(--accent-blue)',
    description: 'Developed and published an IEEE-recognized research paper on AI-based crop disease classification using deep learning optimized for edge devices. Best Paper recognition.',
    highlights: ['IEEE Published', 'Best Paper Award', '96.4% Accuracy'],
  },
  {
    period: '2022 – 2023',
    role: 'Certifications & Upskilling',
    company: 'Cisco · Online Platforms',
    type: 'Learning',
    color: 'var(--accent-purple)',
    description: 'Earned certifications in Cisco Networking Essentials, Embedded Systems & IoT, PLC Training, UI/UX Fundamentals, and Generative AI & LLM Learning.',
    highlights: ['Cisco Networking', 'Embedded IoT', 'Gen AI & LLMs'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest" style={{ color: 'var(--accent-purple)' }}>
            Journey
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
            Experience &amp; <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-start`}
              >
                {/* Dot on center line */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full z-10 items-center justify-center"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-5 card-lift">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span
                        className="text-xs font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded-lg"
                        style={{ background: `${exp.color}15`, color: exp.color }}
                      >
                        {exp.type}
                      </span>
                      <h3 className="text-base font-bold mt-2" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <p className="text-sm font-medium" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono flex-shrink-0 mt-1" style={{ color: 'var(--text-muted)' }}>{exp.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)' }}
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
