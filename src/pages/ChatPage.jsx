import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Send, Bot, User, Loader2, ChevronDown, Trash2, MessageSquare, Menu } from 'lucide-react'
import Navbar from '../components/Navbar'
import lmeIndex, { lmeMap } from '../data/lmeIndex'

const STORAGE_KEY = 'smartium-chat-chats'
const SIDEBAR_HIDDEN = true // Sidebar verborgen voor nu
const INITIAL_MESSAGE = { role: 'assistant', content: 'Hoi! Ik ben Smartium AI. Stel me een vraag over de leerstof en ik geef je een kort antwoord met verwijzing naar de relevante samenvatting.' }

function loadChats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveChats(chats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats))
  } catch (e) {
    console.warn('Chat opslaan mislukt:', e)
  }
}

function generateId() {
  return 'chat-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9)
}

function getChatTitle(messages) {
  const firstUser = messages.find(m => m.role === 'user')
  if (!firstUser) return 'Nieuwe chat'
  const text = firstUser.content.slice(0, 50)
  return text.length < firstUser.content.length ? text + '…' : text
}

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
        <div className="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-500/30 flex items-center justify-center shrink-0 mt-1">
          <Bot className="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        isUser
          ? 'bg-primary-500 text-white rounded-br-md'
          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 rounded-bl-md shadow-sm'
      }`}>
        {isUser ? (
          <div className="whitespace-pre-wrap">{displayText}</div>
        ) : (
          <div className="[&_p]:my-1 [&_ul]:my-2 [&_ol]:my-2 [&_li]:my-0.5 [&_li]:list-disc [&_li]:ml-4 [&_ol>li]:list-decimal [&_strong]:font-bold [&_em]:italic [&_code]:bg-slate-100 dark:[&_code]:bg-slate-700 [&_code]:px-1 [&_code]:rounded text-sm">
            <ReactMarkdown>{displayText}</ReactMarkdown>
          </div>
        )}
        {!isUser && refs.length > 0 && (
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-600 flex flex-wrap gap-x-2 gap-y-0.5">
            {refs.map((r, i) => {
              const lme = lmeMap[r.id]
              const label = lme ? `${lme.week} ${lme.casus} LME: ${lme.name}` : r.name
              return (
                <Link
                  key={i}
                  to={`/summary?lme=${r.id}`}
                  className="text-[10px] text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline"
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-xl bg-accent-100 dark:bg-accent-500/30 flex items-center justify-center shrink-0 mt-1">
          <User className="w-4 h-4 text-accent-600 dark:text-accent-400" />
        </div>
      )}
    </motion.div>
  )
}

const ChatPage = () => {
  const [chats, setChats] = useState(() => loadChats())
  const [currentChatId, setCurrentChatId] = useState(null)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [answerMode, setAnswerMode] = useState('short')
  const [answerModeOpen, setAnswerModeOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const answerModeRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (answerModeRef.current && !answerModeRef.current.contains(e.target)) {
        setAnswerModeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentChat = chats.find(c => c.id === currentChatId)
  const messages = currentChat?.messages ?? [INITIAL_MESSAGE]

  useEffect(() => {
    if (chats.length === 0) {
      const id = generateId()
      setChats([{ id, title: 'Nieuwe chat', messages: [INITIAL_MESSAGE], createdAt: Date.now(), updatedAt: Date.now() }])
      setCurrentChatId(id)
      saveChats([{ id, title: 'Nieuwe chat', messages: [INITIAL_MESSAGE], createdAt: Date.now(), updatedAt: Date.now() }])
    } else if (!currentChatId) {
      const sorted = [...chats].sort((a, b) => (b.updatedAt ?? b.createdAt) - (a.updatedAt ?? a.createdAt))
      setCurrentChatId(sorted[0].id)
    }
  }, [chats.length, currentChatId])

  const setMessages = useCallback((updater) => {
    if (!currentChatId) return
    setChats(prev => {
      const chat = prev.find(c => c.id === currentChatId)
      const currentMsgs = chat?.messages ?? [INITIAL_MESSAGE]
      const next = typeof updater === 'function' ? updater(currentMsgs) : updater
      const title = getChatTitle(next)
      const updated = prev.some(c => c.id === currentChatId)
        ? prev.map(c => c.id === currentChatId ? { ...c, messages: next, title, updatedAt: Date.now() } : c)
        : [...prev, { id: currentChatId, title, messages: next, createdAt: Date.now(), updatedAt: Date.now() }]
      saveChats(updated)
      return updated
    })
  }, [currentChatId])

  const clearChat = () => {
    if (!currentChatId) return
    setMessages([INITIAL_MESSAGE])
    setInput('')
  }

  const selectChat = (id) => {
    setCurrentChatId(id)
    setSidebarOpen(false)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMessage = { role: 'user', content: trimmed }
    let chatId = currentChatId
    const isNewChat = !chatId
    if (isNewChat) chatId = startNewChat(userMessage)

    const newMessages = isNewChat ? [INITIAL_MESSAGE, userMessage] : [...messages, userMessage]
    if (!isNewChat) setMessages(newMessages)
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
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col transition-colors duration-300">
      <Navbar />
      <div className="h-20" />

      <div className="flex-1 flex min-h-0">
        {!SIDEBAR_HIDDEN && (
        <>
        {/* Sidebar - chat history */}
        <aside className={`shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-200 overflow-hidden
          ${sidebarOpen
            ? 'w-64 md:w-64 fixed md:relative inset-y-0 left-0 z-20 md:z-auto pt-20 md:pt-0 shadow-xl md:shadow-none'
            : 'w-0 md:w-0'
          }`}
          style={sidebarOpen ? { top: 0, bottom: 0 } : {}}
        >
          <div className="p-3 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between min-h-[52px]">
            <button
              onClick={clearChat}
              disabled={!currentChatId}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Chat leegmaken"
            >
              <Trash2 className="w-4 h-4" />
              Clear chat
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500"
              title="Sidebar sluiten"
            >
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                className={`w-full text-left px-4 py-2.5 text-sm truncate transition-colors ${
                  chat.id === currentChatId
                    ? 'bg-primary-50 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 border-r-2 border-primary-500'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <MessageSquare className="w-4 h-4 inline-block mr-2 text-slate-400" />
                {chat.title}
              </button>
            ))}
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed left-4 bottom-24 z-10 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700"
            title="Chatgeschiedenis"
          >
            <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
        )}
        </>
        )}

      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6 flex flex-col items-center gap-3"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-slate-100">
            Smartium <span className="text-primary-500 dark:text-primary-400">AI</span>
          </h1>
          <p className="text-navy-500 dark:text-slate-400 text-sm mt-1">
            Stel een vraag over de leerstof – antwoorden met directe verwijzingen
          </p>
          <button
            onClick={clearChat}
            disabled={!currentChatId}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Chat leegmaken"
          >
            <Trash2 className="w-4 h-4" />
            Clear chat
          </button>
        </motion.div>

        <div className="flex-1 overflow-y-auto space-y-4 pb-4 min-h-0">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <MessageBubble key={`${currentChatId}-${i}-${msg.role}-${String(msg.content).slice(0, 20)}`} message={msg} />
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-primary-100 dark:bg-primary-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary-600" />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <Loader2 className="w-5 h-5 text-primary-500 animate-spin" />
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent dark:from-slate-950 dark:via-slate-950 pt-4 pb-6">
          <div className="flex items-end gap-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-soft p-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Stel een vraag over de leerstof..."
              rows={1}
              className="flex-1 resize-none bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none text-sm"
              style={{ maxHeight: '120px' }}
              onInput={(e) => {
                e.target.style.height = 'auto'
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
              }}
            />
            <div className="relative shrink-0" ref={answerModeRef}>
              <button
                type="button"
                onClick={() => setAnswerModeOpen(o => !o)}
                title={answerMode === 'short' ? 'Korte antwoorden' : 'Uitgebreide antwoorden'}
                className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-500/50 cursor-pointer"
              >
                <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </button>
              <AnimatePresence>
                {answerModeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute bottom-full left-0 mb-1 py-1 min-w-[180px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    <button
                      type="button"
                      onClick={() => { setAnswerMode('short'); setAnswerModeOpen(false) }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        answerMode === 'short'
                          ? 'bg-primary-50 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 font-medium'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      Korte antwoorden
                    </button>
                    <button
                      type="button"
                      onClick={() => { setAnswerMode('extended'); setAnswerModeOpen(false) }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        answerMode === 'extended'
                          ? 'bg-primary-50 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 font-medium'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      Uitgebreide antwoorden
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
    </div>
  )
}

export default ChatPage
