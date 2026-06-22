'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'AI Engineer',
  'ML Developer',
  'Full Stack Dev',
  'LLM Builder',
  'RAG Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 50 : 90

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(
          isDeleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1)
        )
      }, speed)
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blobs */}
      <div className="blob w-96 h-96 opacity-20" style={{ background: 'var(--accent-purple)', top: '10%', left: '10%' }} />
      <div className="blob w-80 h-80 opacity-15" style={{ background: 'var(--accent-blue)', bottom: '15%', right: '15%', animationDelay: '2s' }} />
      <div className="blob w-64 h-64 opacity-10" style={{ background: 'var(--accent-green)', top: '50%', right: '30%', animationDelay: '4s' }} />

      {/* Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + i * 6}%`,
            bottom: '20%',
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + (i % 3)}s`,
            background: i % 3 === 0 ? 'var(--accent-blue)' : i % 3 === 1 ? 'var(--accent-purple)' : 'var(--accent-green)',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{ color: 'var(--accent-green)' }}
        >
          <span className="available-badge" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
          style={{ color: 'var(--text-primary)' }}
        >
          Ujjwal Kumar
          <br />
          <span className="gradient-text">Karn</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg font-medium mb-4 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Electronics &amp; Communication Engineer Building Intelligent Solutions<br className="hidden sm:block" /> with AI, Machine Learning, and Modern Software Technologies
        </motion.p>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="text-xl sm:text-2xl font-mono" style={{ color: 'var(--text-muted)' }}>~$</span>
          <span
            className="text-xl sm:text-2xl font-mono typing-cursor"
            style={{ color: 'var(--accent-blue)', minWidth: '260px', textAlign: 'left' }}
          >
            {displayText}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="magnetic-btn px-8 py-3.5 rounded-2xl text-sm font-semibold"
            style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              color: '#fff',
            }}
          >
            View Projects →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="magnetic-btn glass px-8 py-3.5 rounded-2xl text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="magnetic-btn glass px-8 py-3.5 rounded-2xl text-sm font-semibold"
            style={{ color: 'var(--accent-green)' }}
          >
            Resume ↓
          </motion.a>
        </motion.div>

        {/* Floating AI visual elements */}
        <div className="mt-16 relative max-w-lg mx-auto h-24 select-none pointer-events-none">
          {[
            { label: 'LLM', left: '0%', delay: 0, color: 'var(--accent-blue)' },
            { label: 'RAG', left: '20%', delay: 0.5, color: 'var(--accent-purple)' },
            { label: 'FastAPI', left: '42%', delay: 1, color: 'var(--accent-green)' },
            { label: 'Vector DB', left: '64%', delay: 0.3, color: 'var(--accent-blue)' },
            { label: 'AI Agent', left: '83%', delay: 0.8, color: 'var(--accent-purple)' },
          ].map((tag) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + tag.delay, duration: 0.5 }}
              className="absolute glass px-3 py-1.5 rounded-xl text-xs font-mono font-medium"
              style={{
                left: tag.left,
                color: tag.color,
                border: `1px solid ${tag.color}30`,
                animation: `float-up ${4 + tag.delay * 2}s ease-in-out infinite ${tag.delay}s`,
              }}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
