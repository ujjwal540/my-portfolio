'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const suggestions = [
  "What projects has Ujjwal built?",
  "What are his skills?",
  "Is he available for work?",
  "How to contact him?",
]

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Ujjwal's AI assistant. Ask me anything about his skills, projects, or how to get in touch! 🚀",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [messages, open])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setInput('')
    setShowSuggestions(false)

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: trimmed },
    ]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        const errMsg = data?.error || 'Request failed'
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: `Error: ${errMsg}` },
        ])
        setLoading(false)
        return
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err: any) {
      const errMsg = err?.message || "Sorry, I'm having trouble right now. Please email Ujjwal at karnujjwalkumar5@gmail.com 📧"
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: errMsg },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(8,8,14,0.97)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
            }}
          >
            {/* Header */}
            <div className="px-4 py-3.5 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)', boxShadow: '0 0 16px rgba(139,92,246,0.4)' }}
              >
                🤖
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Ask about Ujjwal</div>
                <div className="text-xs flex items-center gap-1.5" style={{ color: 'var(--accent-green)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--accent-green)' }} />
                  AI Assistant Online
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-lg"
                style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)' }}
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="overflow-y-auto px-4 py-3 space-y-3 no-scrollbar" style={{ height: '280px' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #00d4ff22, #8b5cf622)', border: '1px solid rgba(139,92,246,0.2)' }}
                    >
                      🤖
                    </div>
                  )}
                  <div
                    className="max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed"
                    style={
                      msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)', color: '#fff', borderRadius: '16px 16px 4px 16px' }
                        : { background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', borderRadius: '16px 16px 16px 4px', border: '1px solid rgba(255,255,255,0.06)' }
                    }
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs flex-shrink-0 mr-2" style={{ background: 'rgba(139,92,246,0.1)' }}>
                    🤖
                  </div>
                  <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px 16px 16px 4px' }}>
                    <div className="flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--accent-blue)' }}
                          animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.7, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showSuggestions && messages.length === 1 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="pt-1">
                  <p className="text-xs mb-2 px-1" style={{ color: 'var(--text-muted)' }}>Try asking:</p>
                  <div className="flex flex-col gap-1.5">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-left text-xs px-3 py-2 rounded-xl transition-all"
                        style={{ background: 'rgba(139,92,246,0.08)', color: 'var(--accent-purple)', border: '1px solid rgba(139,92,246,0.15)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(139,92,246,0.15)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(139,92,246,0.08)')}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 flex gap-2 items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send(input)}
                placeholder="Ask anything about Ujjwal…"
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: 'var(--text-primary)' }}
                disabled={loading}
              />
              <motion.button
                onClick={() => send(input)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                disabled={loading || !input.trim()}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                style={{
                  background: input.trim() && !loading ? 'linear-gradient(135deg, #00d4ff, #8b5cf6)' : 'rgba(255,255,255,0.06)',
                  color: input.trim() && !loading ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
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
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="chat-bubble relative"
        aria-label="Open AI chat assistant"
      >
        {!open && (
          <span
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full"
            style={{ background: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }}
          />
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="text-white text-2xl leading-none">
              ×
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="text-xl">
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}