'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '2+', label: 'Years Building AI' },
  { value: '5+', label: 'AI Projects' },
  { value: '1', label: 'IEEE Paper' },
  { value: '∞', label: 'Curiosity' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest" style={{ color: 'var(--accent-purple)' }}>
            About Me
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
            The Human Behind the <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 card-lift">
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(139,92,246,0.2))',
                    border: '1px solid rgba(139,92,246,0.3)',
                    color: 'var(--accent-purple)',
                  }}
                >
                  U
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Ujjwal Kumar Karn
                  </h3>
                  <p className="text-sm font-mono mt-0.5" style={{ color: 'var(--accent-blue)' }}>
                    ECE Graduate · AI Builder
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>📍</span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Bhaktapur, Nepal</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 mb-6">
                <a
                  href="https://github.com/ujjwal540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ujjwal-kumar-karn-530950399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2"
                  style={{ color: 'var(--accent-blue)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:karnujjwalkumar5@gmail.com"
                  className="glass px-4 py-2 rounded-xl text-xs font-medium"
                  style={{ color: 'var(--accent-green)' }}
                >
                  ✉ Email
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center glass rounded-xl p-3">
                    <div className="text-xl font-black gradient-text">{stat.value}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m a recent graduate in <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Electronics and Communication Engineering</span> with a strong passion for Artificial Intelligence, Machine Learning, Large Language Models (LLMs), and Software Development.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Throughout my journey, I&apos;ve worked on diverse projects spanning <span style={{ color: 'var(--accent-blue)' }}>AI-powered applications</span>, <span style={{ color: 'var(--accent-purple)' }}>Retrieval-Augmented Generation (RAG) systems</span>, document intelligence, automation tools, and modern web development.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My research experience includes developing machine learning models for real-world applications, including agricultural intelligence systems. One of my research contributions was recognized with a <span style={{ color: 'var(--accent-green)', fontWeight: 500 }}>Best Paper Award</span>, reflecting my commitment to combining research excellence with practical impact.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My goal is to contribute to innovative projects that create meaningful value and solve real-world problems through technology.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['AI/ML', 'RAG Systems', 'LLMs', 'FastAPI', 'Python', 'Voice AI', 'IoT', 'IEEE Research'].map((tag) => (
                <span
                  key={tag}
                  className="glass px-3 py-1 rounded-lg text-xs font-mono font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
