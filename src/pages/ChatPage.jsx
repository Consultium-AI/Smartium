import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Send, Bot, User, Loader2, ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import lmeIndex, { lmeMap } from '../data/lmeIndex'

const LME_LIST = lmeIndex.map(l => `- ${l.name} (id: ${l.id}) [${l.blok}, ${l.week}, ${l.casus}] – Onderwerpen: ${l.topics}`).join('\n')

const getSystemPrompt = (answerMode) => {
  const lengthRule = answerMode === 'short'
    ? '1. Geef KORTE, directe antwoorden (max 3-4 zinnen per punt). Wees beknopt en to-the-point.'
    : '1. Geef UITGEBREIDE antwoorden met meer uitleg, context en voorbeelden waar relevant.'
  return `Je bent Smartium AI, een slimme studieassistent voor geneeskundestudenten. Je hebt toegang tot de volgende samenvattingen (LME's) uit het curriculum:

${LME_LIST}

REGELS:
${lengthRule}
2. Als het antwoord gebaseerd is op stof uit een LME, verwijs er ALTIJD naar met exact dit formaat: [[lme-id|LME Naam]]. Bijvoorbeeld: [[embryogenese|Embryogenese Bouwplan]]
3. Gebruik meerdere referenties als het antwoord meerdere LME's betreft.
4. Als de vraag NIET gerelateerd is aan de beschikbare samenvattingen, geef dan een antwoord zonder referentie.
5. Antwoord altijd in het Nederlands.
6. Gebruik bullet points waar relevant.`
}

function parseReferences(text) {
  const refs = []
  let displayText = ''
  let lastIndex = 0
  const regex = /\[\[([^|]+)\|([^\]]+)\]\]/g
  let match

  while ((match = regex.exec(text)) !== null) {
    displayText += text.slice(lastIndex, match.index)
    refs.push({ id: match[1], name: match[2] })
    lastIndex = regex.lastIndex
  }
  displayText += text.slice(lastIndex)

  return { displayText: displayText.trim(), refs }
}

const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user'
  const { displayText, refs } = isUser
    ? { displayText: message.content, refs: [] }
    : parseReferences(message.content)

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
        <div className="whitespace-pre-wrap">{displayText}</div>
        {!isUser && refs.length > 0 && (
          <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap gap-x-2 gap-y-0.5">
            {refs.map((r, i) => {
              const lme = lmeMap[r.id]
              const label = lme ? `${lme.week} ${lme.casus} LME: ${lme.name}` : r.name
              return (
                <Link
                  key={i}
                  to={`/summary?lme=${r.id}`}
                  className="text-[10px] text-slate-500 hover:text-primary-600 hover:underline"
                >
                  {label}
                </Link>
              )
            })}
          </div>
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
  const [answerMode, setAnswerMode] = useState('short')
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
        { role: 'system', content: getSystemPrompt(answerMode) },
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
          max_tokens: answerMode === 'extended' ? 2000 : 800,
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
          <div className="flex items-end gap-2 bg-white rounded-2xl border border-slate-200 shadow-soft p-2">
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
            <div className="relative shrink-0">
              <select
                value={answerMode}
                onChange={(e) => setAnswerMode(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 cursor-pointer min-w-[140px]"
              >
                <option value="short">Korte antwoorden</option>
                <option value="extended">Uitgebreide antwoorden</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
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
