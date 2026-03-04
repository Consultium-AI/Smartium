import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Send, Bot, User, BookOpen, Loader2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import lmeIndex from '../data/lmeIndex'

const SYSTEM_PROMPT = `Je bent Smartium AI, een slimme studieassistent voor geneeskundestudenten. Je hebt toegang tot de volgende samenvattingen (LME's) uit het curriculum:

${lmeIndex.map(l => `- ${l.name} (id: ${l.id}) [${l.blok}, ${l.week}, ${l.casus}] – Onderwerpen: ${l.topics}`).join('\n')}

REGELS:
1. Geef KORTE, directe antwoorden (max 3-4 zinnen per punt).
2. Als het antwoord gebaseerd is op stof uit een LME, verwijs er ALTIJD naar met exact dit formaat: [[lme-id|LME Naam]]. Bijvoorbeeld: [[embryogenese|Embryogenese Bouwplan]]
3. Gebruik meerdere referenties als het antwoord meerdere LME's betreft.
4. Als de vraag NIET gerelateerd is aan de beschikbare samenvattingen, geef dan een kort antwoord zonder referentie.
5. Antwoord altijd in het Nederlands.
6. Wees beknopt en to-the-point. Studenten willen snel de kern weten.
7. Gebruik bullet points waar relevant.`

function parseReferences(text) {
  const parts = []
  let lastIndex = 0
  const regex = /\[\[([^|]+)\|([^\]]+)\]\]/g
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }
    parts.push({ type: 'ref', id: match[1], name: match[2] })
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return parts
}

const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user'
  const parts = isUser ? [{ type: 'text', content: message.content }] : parseReferences(message.content)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 mt-1">
          <Bot className="w-4 h-4 text-primary-600" />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        isUser
          ? 'bg-primary-500 text-white rounded-br-md'
          : 'bg-white border border-slate-200 text-slate-800 rounded-bl-md shadow-sm'
      }`}>
        {parts.map((part, i) =>
          part.type === 'text' ? (
            <span key={i} className="whitespace-pre-wrap">{part.content}</span>
          ) : (
            <Link
              key={i}
              to={`/summary?lme=${part.id}`}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-sm font-medium transition-colors mx-0.5 ${
                isUser
                  ? 'bg-white/20 text-white hover:bg-white/30'
                  : 'bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-200'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              {part.name}
            </Link>
          )
        )}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-xl bg-accent-100 flex items-center justify-center shrink-0 mt-1">
          <User className="w-4 h-4 text-accent-600" />
        </div>
      )}
    </motion.div>
  )
}

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hoi! Ik ben Smartium AI. Stel me een vraag over de leerstof en ik geef je een kort antwoord met verwijzing naar de relevante samenvatting.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMessage = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...newMessages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content }))
      ]

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: apiMessages,
          temperature: 0.4,
          max_tokens: 800,
        }),
      })

      const data = await res.json()

      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `Fout: ${data.error.message}` }])
      } else {
        const reply = data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
        setMessages(prev => [...prev, { role: 'assistant', content: reply }])
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Er ging iets mis met de verbinding. Probeer het opnieuw.' }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 flex flex-col">
      <Navbar />
      <div className="h-20" />

      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
            Smartium <span className="text-primary-500">AI</span>
          </h1>
          <p className="text-navy-500 text-sm mt-1">
            Stel een vraag over de leerstof – antwoorden met directe verwijzingen
          </p>
        </motion.div>

        <div className="flex-1 overflow-y-auto space-y-4 pb-4 min-h-0">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary-600" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <Loader2 className="w-5 h-5 text-primary-500 animate-spin" />
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-4 pb-6">
          <div className="flex items-end gap-3 bg-white rounded-2xl border border-slate-200 shadow-soft p-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Stel een vraag over de leerstof..."
              rows={1}
              className="flex-1 resize-none bg-transparent px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none text-sm"
              style={{ maxHeight: '120px' }}
              onInput={(e) => {
                e.target.style.height = 'auto'
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="p-2.5 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ChatPage
