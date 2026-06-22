import { NextRequest, NextResponse } from 'next/server'

const systemPrompt = `You are an AI assistant on Ujjwal Kumar Karn's portfolio website. Answer questions about Ujjwal concisely and enthusiastically.

Key facts about Ujjwal:
- Electronics & Communication Engineering graduate from Nepal Engineering College (2022–Present)
- Based in Bhaktapur, Nepal
- Expert in: Python, AI/ML, LLMs, RAG systems, FastAPI, LangChain, LangGraph, ChromaDB, Vector DBs, Voice AI (STT/TTS), Docker, PostgreSQL
- Projects: AI-Powered RAG Assistant, Voice AI "Alex", Edge-AI Disease Detection (IEEE paper), Document Intelligence Platform, AI Agent Workflow Engine, Smart IoT Monitor
- Published IEEE research paper on AI-based crop disease classification — received Best Paper recognition
- Secretary of CTRC (Computer Technology & Robotronix Club) at Nepal Engineering College
- Certifications: Cisco Networking, Embedded Systems & IoT, Generative AI & LLMs, PLC Training, UI/UX Fundamentals
- Email: karnujjwalkumar5@gmail.com
- GitHub: https://github.com/ujjwal540
- LinkedIn: https://www.linkedin.com/in/ujjwal-kumar-karn-530950399
- Phone: +977-9712047195
- Available for AI/ML opportunities, research collaborations, and freelance projects

Keep answers short (2-4 sentences). Be friendly and professional.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured. Set GEMINI_API_KEY in your environment.' }, { status: 500 })
    }

    const geminiContents = [
      { role: 'model', parts: [{ text: systemPrompt }] },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      })),
    ]

    const modelName = 'models/gemini-2.5-flash'
    const url = `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${apiKey}`
    let response
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: geminiContents,
          generationConfig: { maxOutputTokens: 300, temperature: 0.7 },
        }),
      })
    } catch (fetchErr) {
      console.error('Gemini fetch failed:', fetchErr)
      return NextResponse.json({ error: 'Failed to reach Gemini API' }, { status: 502 })
    }

    let data: any = null
    try {
      data = await response.json()
    } catch (parseErr) {
      const txt = await response.text().catch(() => null)
      console.error('Failed to parse Gemini response JSON:', parseErr, txt)
      return NextResponse.json({ error: 'Invalid response from Gemini API' }, { status: 502 })
    }

    if (!response.ok) {
      console.error('Gemini API error', response.status, data)

      // If Gemini fails and an OpenAI key is available, try OpenAI as a fallback
      const openaiKey = process.env.OPENAI_API_KEY
      if (openaiKey) {
        try {
          const openaiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages.map((m: { role: string; content: string }) => ({ role: m.role as any, content: m.content })),
          ]
          const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${openaiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: openaiMessages,
              max_tokens: 300,
              temperature: 0.7,
            }),
          })
          const openaiData = await openaiRes.json()
          if (openaiRes.ok) {
            const reply = openaiData.choices?.[0]?.message?.content?.trim()
            return NextResponse.json({ reply: reply || "Sorry, I couldn't respond right now." })
          } else {
            console.error('OpenAI fallback error', openaiRes.status, openaiData)
          }
        } catch (openaiErr) {
          console.error('OpenAI fallback failed:', openaiErr)
        }
      }

      return NextResponse.json({ error: data?.error?.message || JSON.stringify(data) || 'Gemini API error' }, { status: response.status })
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't respond right now."
    return NextResponse.json({ reply: text })

  } catch (err) {
    console.error('Chat route error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}