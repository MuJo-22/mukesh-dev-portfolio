import { useRef, useState } from 'react'
import { AI_SUGGESTIONS } from '../data'

export default function AIChat({ open, onOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi — I'm an AI trained on Mukesh's résumé and background. Ask me about his experience, stack, or projects, and I'll answer as best I can.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesRef = useRef(null)

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight
      }
    })
  }

  async function sendMessage(text) {
    const q = (text ?? input).trim()
    if (!q || loading) return

    const nextMessages = [...messages, { role: 'user', content: q }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    scrollToBottom()

    try {
      // This calls YOUR OWN backend function (api/chat.js), not Anthropic
      // directly. The API key stays server-side. See README.md for setup.
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) throw new Error('Request failed')

      const data = await res.json()
      const answer = data.text || "Sorry, I couldn't generate a response — try asking again."
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now — this usually means the AI backend isn't configured yet (see README.md). Feel free to email mukeshta1422@gmail.com directly.",
        },
      ])
    } finally {
      setLoading(false)
      scrollToBottom()
    }
  }

  return (
    <>
      <button className="ai-fab" onClick={open ? onClose : onOpen}>
        <span className="pulse" /> Ask my AI
      </button>

      <div className={`ai-panel ${open ? 'open' : ''}`}>
        <div className="ai-head">
          <div className="ai-head-title">
            <span className="d" /> mukesh-assistant
          </div>
          <button className="ai-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="ai-messages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.role === 'user' ? 'user' : 'bot'}`}>
              {m.content}
            </div>
          ))}
          {loading && <div className="msg bot typing">thinking…</div>}
        </div>

        <div className="ai-suggestions">
          {AI_SUGGESTIONS.map((q) => (
            <button className="sugg" key={q} onClick={() => sendMessage(q)}>
              {q}
            </button>
          ))}
        </div>

        <div className="ai-input-row">
          <input
            type="text"
            placeholder="Ask about Mukesh's work..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={() => sendMessage()}>Send</button>
        </div>
      </div>
    </>
  )
}
