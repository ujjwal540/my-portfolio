'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const systemPrompt = `You are an AI assistant on Ujjwal Kumar Karn's portfolio website. Answer questions about Ujjwal concisely and enthusiastically.

Key facts about Ujjwal:
- Electronics & Communication Engineering graduate from Nepal Engineering College (2022-Present)
- Based in Bhaktapur, Nepal
- Expert in: Python, AI/ML, LLMs, RAG systems, FastAPI, LangChain, LangGraph, ChromaDB, Vector DBs, Voice AI (STT/TTS), Docker, PostgreSQL
- Projects: AI-Powered RAG Assistant, Voice AI "Alex", Edge-AI Disease Detection (IEEE paper), Document Intelligence Platform
- Published IEEE research paper on AI-based crop disease classification - received Best Paper recognition
- Secretary of CTRC (Computer Technology & Robotronix Club) at Nepal Engineering College
- Certifications: Cisco Networking, Embedded Systems & IoT, Generative AI & LLMs
- Email: ujjwalkumarkarn81@gmail.com
- GitHub: https://github.com/ujjwal540
- LinkedIn: https://www.linkedin.com/in/ujjwal-kumar-karn-530950399
- Phone: +977-9804209993

Keep answers short (2-4 sentences). Be friendly and professional. If asked about availability, say he's actively looking for AI/ML opportunities.`

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Ujjwal's AI assistant. Ask me anything about his skills, projects, or how to get in touch! 🚀" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')

    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: systemPrompt,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response right now."
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops, something went wrong. Please try again!" }])
    }
    setLoading(false)
  }

  return (
    <div className="chat-widget">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(8,8,12,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3.5 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                style={{ background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))' }}
              >
                🤖
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Ask about Ujjwal</div>
                <div className="text-xs available-badge" style={{ color: 'var(--accent-green)' }}>AI Assistant online</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-lg"
                style={{ color: 'var(--text-muted)' }}
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-3 space-y-3 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={
                      msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', color: '#fff', borderBottomRightRadius: '4px' }
                        : { background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', borderBottomLeftRadius: '4px' }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', borderBottomLeftRadius: '4px' }}>
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--accent-blue)' }}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 flex gap-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: 'var(--text-primary)' }}
              />
              <motion.button
                onClick={send}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                style={{
                  background: input.trim() ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))' : 'rgba(255,255,255,0.06)',
                  color: input.trim() ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
              >
                ↑
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle bubble */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="chat-bubble"
        aria-label="Open AI chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} className="text-white text-xl">
              ×
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} className="text-xl">
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
