'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'Edge-AI Pigeon Pea Disease Detection',
    description: 'Edge-AI based crop disease diagnosis system integrating deep learning with a mobile application for automated pigeon pea disease classification. Published IEEE-recognized paper and received Best Paper Award.',
    tech: ['TensorFlow', 'Computer Vision', 'Edge AI', 'Deep Learning', 'Mobile App'],
    metrics: [
      { label: 'Accuracy', value: '96.4%' },
      { label: 'Model Size', value: '2.1MB' },
      { label: 'Inference', value: '45ms' },
    ],
    color: '#00ff88',
    glow: 'rgba(0,255,136,0.15)',
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,255,136,0.03))',
    icon: '🌱',
    github: 'https://github.com/ujjwal540',
    badge: 'IEEE Best Paper',
    featured: false,
  },
  {
    title: 'Alex Voice RAG Assistant',
    description: 'Voice-enabled RAG assistant integrating Groq LLM, Google Gemini, Whisper, and ChromaDB for intelligent document question answering with Speech-to-Text and Text-to-Speech.',
    tech: ['Python', 'FastAPI', 'Docker', 'ChromaDB', 'Groq LLM', 'Whisper'],
    metrics: [
      { label: 'STT/TTS', value: 'Live' },
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Deploy', value: 'Docker' },
    ],
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.15)',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.03))',
    icon: '🎙️',
    github: 'https://github.com/ujjwal540/Alex-Voice-RAG-Assistant',
    badge: 'Featured',
    featured: true,
  },
  {
    title: 'LLM Document Analyzer',
    description: 'AI-powered document intelligence platform for PDF analysis, contextual question answering, semantic search, and automatic summarization using Large Language Models and Groq API.',
    tech: ['Python', 'FastAPI', 'Groq API', 'LLM', 'REST APIs'],
    metrics: [
      { label: 'Tasks', value: '4+' },
      { label: 'Format', value: 'PDF' },
      { label: 'Search', value: 'Semantic' },
    ],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.15)',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))',
    icon: '📄',
    github: 'https://github.com/ujjwal540/llm-doc-analyzer-groq',
    badge: undefined,
    featured: false,
  },
  {
    title: 'Tomato Disease Detection YOLOv8',
    description: 'Deep learning object detection model for automated tomato leaf disease identification using YOLOv8. Optimized for ONNX deployment enabling efficient cross-platform real-time inference.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'ONNX', 'Computer Vision'],
    metrics: [
      { label: 'Model', value: 'YOLOv8' },
      { label: 'Deploy', value: 'ONNX' },
      { label: 'Type', value: 'Real-time' },
    ],
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.15)',
    gradient: 'linear-gradient(135deg, rgba(255,107,107,0.15), rgba(255,107,107,0.03))',
    icon: '🍅',
    github: 'https://github.com/ujjwal540/Tomato-Disease-Detection-YOLOv8',
    badge: undefined,
    featured: false,
  },
  {
    title: 'Student Performance Prediction',
    description: 'Machine learning model predicting student academic performance using linear regression. Covers full ML pipeline including data preprocessing, feature engineering, model training and evaluation.',
    tech: ['Python', 'Linear Regression', 'Scikit-learn', 'Pandas', 'ML Pipeline'],
    metrics: [
      { label: 'Algorithm', value: 'LinReg' },
      { label: 'Pipeline', value: 'Full' },
      { label: 'Type', value: 'ML' },
    ],
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.15)',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.03))',
    icon: '📊',
    github: 'https://github.com/ujjwal540/student-performance-prediction-linear-regression',
    badge: undefined,
    featured: false,
  },
  {
    title: 'Salary Prediction ML',
    description: 'End-to-end machine learning project covering data preprocessing, feature engineering, and salary prediction. Demonstrates full ML workflow from raw data cleaning to model deployment-ready output.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Preprocessing'],
    metrics: [
      { label: 'Type', value: 'Regression' },
      { label: 'Pipeline', value: 'E2E' },
      { label: 'Stack', value: 'Python' },
    ],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.15)',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))',
    icon: '💰',
    github: 'https://github.com/ujjwal540/Machine-Learning-Data-Preprocessing-and-Salary-Prediction-Project',
    badge: undefined,
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: '#00d4ff' }}>
              Projects
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            AI-powered products built with a focus on real-world impact and production quality.
          </p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { value: '6+', label: 'Projects' },
              { value: '1', label: 'IEEE Paper' },
              { value: '100%', label: 'Real & Verified' },
              { value: '5+', label: 'AI/ML Projects' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass px-5 py-2.5 rounded-2xl flex items-center gap-3"
              >
                <span className="text-xl font-black gradient-text">{stat.value}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                background: hoveredIdx === i ? project.gradient : 'rgba(255,255,255,0.02)',
                border: `1px solid ${hoveredIdx === i ? project.color + '40' : 'rgba(255,255,255,0.06)'}`,
                transition: 'all 0.4s ease',
                boxShadow: hoveredIdx === i
                  ? `0 0 0 1px ${project.color}20, 0 20px 60px ${project.glow}, inset 0 1px 0 ${project.color}15`
                  : '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background: hoveredIdx === i
                    ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                    : 'transparent',
                }}
              />

              {/* Corner decoration */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${project.color}, transparent 70%)`,
                  opacity: hoveredIdx === i ? 0.2 : 0.05,
                }}
              />

              <div className="p-6">
                {/* Top row: icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    animate={hoveredIdx === i ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}25`,
                    }}
                  >
                    {project.icon}
                  </motion.div>

                  {project.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.08 + 0.3, type: 'spring' }}
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: project.badge === 'IEEE Best Paper'
                          ? 'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.05))'
                          : `${project.color}15`,
                        color: project.badge === 'IEEE Best Paper' ? '#00ff88' : project.color,
                        border: `1px solid ${project.badge === 'IEEE Best Paper' ? 'rgba(0,255,136,0.3)' : project.color + '30'}`,
                      }}
                    >
                      {project.badge === 'IEEE Best Paper' ? '🏆 ' : '⭐ '}{project.badge}
                    </motion.div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{ color: hoveredIdx === i ? project.color : 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {project.metrics.map((m, mi) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.08 + mi * 0.05 + 0.2 }}
                      className="rounded-xl p-2.5 text-center"
                      style={{
                        background: hoveredIdx === i ? `${project.color}10` : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${hoveredIdx === i ? project.color + '20' : 'rgba(255,255,255,0.05)'}`,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        className="text-sm font-black font-mono"
                        style={{ color: project.color }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {m.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-300"
                      style={{
                        background: hoveredIdx === i ? `${project.color}12` : 'rgba(255,255,255,0.04)',
                        color: hoveredIdx === i ? project.color : 'var(--text-muted)',
                        border: `1px solid ${hoveredIdx === i ? project.color + '25' : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-300"
                  style={{
                    background: hoveredIdx === i
                      ? `linear-gradient(135deg, ${project.color}25, ${project.color}10)`
                      : 'rgba(255,255,255,0.04)',
                    color: hoveredIdx === i ? project.color : 'var(--text-secondary)',
                    border: `1px solid ${hoveredIdx === i ? project.color + '35' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </motion.a>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5"
                initial={{ width: '0%' }}
                animate={{ width: hoveredIdx === i ? '100%' : '0%' }}
                transition={{ duration: 0.4 }}
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            Want to see more?
          </p>
          <motion.a
            href="https://github.com/ujjwal540"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-semibold text-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))',
              border: '1px solid rgba(0,212,255,0.25)',
              color: '#00d4ff',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}