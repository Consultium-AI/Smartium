import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ClipboardCheck, Clock, FileText, ChevronUp } from 'lucide-react'

const SummaryLayout = ({ title, description, caseLabel, tableOfContents, practiceLink, children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
              <BookOpen className="w-4 h-4 text-primary-500" />
              Inhoud
            </h3>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0 opacity-70" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <Link
                to={practiceLink}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-500 text-white rounded-xl font-medium hover:bg-accent-600 transition-colors text-sm"
              >
                <ClipboardCheck className="w-4 h-4" />
                Oefenvragen
              </Link>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-8 md:px-8 md:py-10 border-b border-slate-100">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                Blok 3 · Week 1
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                {caseLabel}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              {title}
            </h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-5 mt-5 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                ~15 min leestijd
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                {tableOfContents.length} secties
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 md:px-8 md:py-10">
            {children}

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border border-accent-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Klaar om te oefenen?</h3>
                  <p className="text-slate-600 text-sm">Test je kennis met meerkeuzevragen.</p>
                </div>
                <Link
                  to={practiceLink}
                  className="flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-xl font-bold hover:bg-accent-600 transition-colors shrink-0"
                >
                  <ClipboardCheck className="w-5 h-5" />
                  Oefenvragen
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors z-50"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default SummaryLayout
