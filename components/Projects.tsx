'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered RAG Assistant',
    description: 'A production-grade RAG chatbot enabling natural language querying over enterprise documents. Built with semantic chunking, hybrid retrieval, and re-ranking for high-precision answers.',
    tech: ['Python', 'FastAPI', 'ChromaDB', 'OpenAI API', 'LangChain'],
    metrics: [
      { label: 'Retrieval Accuracy', value: '94%' },
      { label: 'Avg Latency', value: '1.2s' },
      { label: 'Doc Sources', value: '50+' },
    ],
    color: 'var(--accent-blue)',
    glow: 'rgba(0,212,255,0.12)',
    icon: '🤖',
    github: 'https://github.com/ujjwal540',
    featured: true,
  },
  {
    title: 'Voice AI Assistant (Alex)',
    description: 'Real-time conversational voice assistant integrating STT/TTS pipelines with LLM-based reasoning. Features low-latency audio processing and an interactive web interface.',
    tech: ['Python', 'Whisper STT', 'ElevenLabs TTS', 'OpenAI', 'WebSocket'],
    metrics: [
      { label: 'Response Time', value: '<800ms' },
      { label: 'Languages', value: '3+' },
      { label: 'Uptime', value: '99.5%' },
    ],
    color: 'var(--accent-purple)',
    glow: 'rgba(139,92,246,0.12)',
    icon: '🎙️',
    github: 'https://github.com/ujjwal540',
    featured: true,
  },
  {
    title: 'Edge-AI Disease Detection',
    description: 'Deep learning model for pigeon pea disease classification optimized for edge-device inference. Published IEEE-recognized research paper. Achieves high accuracy with minimal compute.',
    tech: ['TensorFlow', 'Python', 'Edge AI', 'Transfer Learning', 'OpenCV'],
    metrics: [
      { label: 'Accuracy', value: '96.4%' },
      { label: 'Model Size', value: '2.1MB' },
      { label: 'Inference', value: '45ms' },
    ],
    color: 'var(--accent-green)',
    glow: 'rgba(0,255,136,0.12)',
    icon: '🌱',
    github: 'https://github.com/ujjwal540',
    featured: false,
    badge: 'IEEE Paper',
  },
  {
    title: 'Document Intelligence Platform',
    description: 'Multi-format document processing pipeline with intelligent extraction, summarization, and Q&A. Supports PDF, DOCX, images with OCR. Enterprise-ready REST API.',
    tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Docker'],
    metrics: [
      { label: 'Formats', value: '8+' },
      { label: 'Throughput', value: '200/min' },
      { label: 'Accuracy', value: '91%' },
    ],
    color: 'var(--accent-blue)',
    glow: 'rgba(0,212,255,0.12)',
    icon: '📄',
    github: 'https://github.com/ujjwal540',
    featured: false,
  },
  {
    title: 'AI Agent Workflow Engine',
    description: 'Multi-agent orchestration system using LangGraph for complex task decomposition. Agents collaborate to research, plan, and execute multi-step workflows autonomously.',
    tech: ['LangGraph', 'LangChain', 'Python', 'OpenAI', 'Redis'],
    metrics: [
      { label: 'Task Types', value: '20+' },
      { label: 'Agents', value: '5' },
      { label: 'Success Rate', value: '88%' },
    ],
    color: 'var(--accent-purple)',
    glow: 'rgba(139,92,246,0.12)',
    icon: '⚡',
    github: 'https://github.com/ujjwal540',
    featured: false,
  },
  {
    title: 'Smart IoT Monitor',
    description: 'Real-time IoT sensor data aggregation and anomaly detection system with ML-powered predictions. Dashboard with live charts, alerts, and predictive maintenance insights.',
    tech: ['Arduino', 'Python', 'FastAPI', 'MQTT', 'React'],
    metrics: [
      { label: 'Sensors', value: '12' },
      { label: 'Data Points/s', value: '500' },
      { label: 'Alert Precision', value: '93%' },
    ],
    color: 'var(--accent-green)',
    glow: 'rgba(0,255,136,0.12)',
    icon: '📡',
    github: 'https://github.com/ujjwal540',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest" style={{ color: 'var(--accent-green)' }}>
            Projects
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            AI-powered products built with a focus on real-world impact and production quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="glass rounded-2xl p-6 card-lift relative overflow-hidden cursor-default"
              style={{
                boxShadow: hoveredIdx === i ? `0 0 60px ${project.glow}` : '0 0 0 transparent',
                transition: 'box-shadow 0.4s ease, transform 0.3s ease',
              }}
            >
              {/* Badge */}
              {project.badge && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold"
                  style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--accent-green)', border: '1px solid rgba(0,255,136,0.2)' }}
                >
                  {project.badge}
                </div>
              )}
              {project.featured && !project.badge && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold"
                  style={{ background: `${project.glow}`, color: project.color, border: `1px solid ${project.color}25` }}
                >
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="text-3xl mb-4">{project.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{project.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-2.5 text-center"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div className="text-sm font-bold font-mono" style={{ color: project.color }}>{m.value}</div>
                    <div className="text-xs mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-xs font-mono"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex-1 py-2 rounded-xl text-xs font-medium text-center"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
