'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'AI / ML',
    color: 'var(--accent-blue)',
    glow: 'rgba(0,212,255,0.1)',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'LangChain', level: 80 },
      { name: 'LangGraph', level: 72 },
      { name: 'OpenAI API', level: 85 },
      { name: 'RAG Systems', level: 85 },
      { name: 'AI Agents', level: 78 },
    ],
  },
  {
    category: 'Backend',
    color: 'var(--accent-purple)',
    glow: 'rgba(139,92,246,0.1)',
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'REST APIs', level: 82 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Docker', level: 68 },
      { name: 'ChromaDB', level: 80 },
      { name: 'Vector DBs', level: 80 },
    ],
  },
  {
    category: 'Frontend / Tools',
    color: 'var(--accent-green)',
    glow: 'rgba(0,255,136,0.1)',
    skills: [
      { name: 'Next.js', level: 65 },
      { name: 'TypeScript', level: 60 },
      { name: 'GitHub', level: 82 },
      { name: 'STT / TTS', level: 78 },
      { name: 'MATLAB', level: 70 },
      { name: 'Arduino/IoT', level: 75 },
    ],
  },
]

const techBadges = [
  'Python', 'LangChain', 'LangGraph', 'OpenAI API', 'FastAPI', 'Next.js',
  'Docker', 'PostgreSQL', 'ChromaDB', 'Vector Databases', 'RAG', 'AI Agents',
  'Prompt Engineering', 'Deep Learning', 'STT/TTS', 'REST APIs', 'Arduino', 'MATLAB',
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="glass px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest" style={{ color: 'var(--accent-blue)' }}>
            Tech Stack
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 card-lift"
              style={{ boxShadow: `0 0 40px ${group.glow}` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <span className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: group.color }}>
                  {group.category}
                </span>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.05 + 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}80)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-xs font-mono uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
            Full Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="glass px-4 py-2 rounded-xl text-sm font-mono cursor-default"
                style={{ color: 'var(--text-secondary)' }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
