import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ClipboardCheck, Clock, FileText, ChevronUp } from 'lucide-react'

/** Dark-mode voor typografie en veelgebruikte callout-boxen in samenvattingen. */
const SUMMARY_BODY_DARK =
  'dark:[&_h2]:!text-slate-100 dark:[&_h3]:!text-slate-100 dark:[&_h4]:!text-slate-200 ' +
  'dark:[&_p]:!text-slate-300 dark:[&_strong]:!text-slate-100 dark:[&_li]:!text-slate-300 dark:[&_ul]:!text-slate-300 ' +
  'dark:[&_hr]:!border-slate-700 ' +
  'dark:[&_.text-slate-900]:!text-slate-100 dark:[&_.text-slate-800]:!text-slate-200 dark:[&_.text-slate-700]:!text-slate-300 dark:[&_.text-slate-600]:!text-slate-400 ' +
  'dark:[&_.text-primary-900]:!text-primary-200 dark:[&_.text-primary-800]:!text-primary-200 dark:[&_.text-primary-700]:!text-primary-300 ' +
  'dark:[&_.text-accent-900]:!text-accent-200 dark:[&_.text-accent-800]:!text-accent-200 dark:[&_.text-accent-700]:!text-accent-300 ' +
  'dark:[&_.text-purple-800]:!text-purple-300 dark:[&_.text-purple-700]:!text-purple-300 ' +
  'dark:[&_.bg-primary-50]:!bg-primary-500/10 dark:[&_.bg-primary-100]:!bg-primary-500/20 ' +
  'dark:[&_.bg-accent-50]:!bg-accent-500/10 dark:[&_.bg-accent-100]:!bg-accent-500/20 ' +
  'dark:[&_.bg-slate-50]:!bg-slate-800/50 dark:[&_.bg-slate-100]:!bg-slate-800/70 dark:[&_.bg-slate-200]:!bg-slate-700 ' +
  'dark:[&_.bg-purple-100]:!bg-purple-500/20 ' +
  'dark:[&_.text-primary-600]:!text-primary-400 dark:[&_.text-accent-600]:!text-accent-400 dark:[&_.text-purple-600]:!text-purple-400 ' +
  'dark:[&_.border-slate-200]:!border-slate-600 dark:[&_.border-primary-200]:!border-primary-500/30 dark:[&_.border-accent-200]:!border-accent-500/30 ' +
  'dark:[&_.border-l-4]:!border-primary-500/50'

const SummaryLayout = ({ title, description, caseLabel, tableOfContents, practiceLink, children, standalone = true }) => {
  if (!standalone) return <>{children}</>
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
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
          <div className="sticky top-24 bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/40 border border-slate-200/90 dark:border-slate-700/90 ring-1 ring-slate-900/5 dark:ring-white/5 p-5">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
              <BookOpen className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              Inhoud
            </h3>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeSection === item.id
                      ? 'bg-primary-50 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 font-medium'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0 opacity-70" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/80">
              <Link
                to={practiceLink}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-500 dark:bg-accent-600 text-white rounded-xl font-medium hover:bg-accent-600 dark:hover:bg-accent-500 transition-colors text-sm shadow-sm"
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
          className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/40 border border-slate-200/90 dark:border-slate-700/90 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5"
        >
          {/* Header */}
          <div className="px-6 py-8 md:px-8 md:py-10 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                Blok 4
              </span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 text-amber-800 dark:text-amber-300 rounded-full text-xs font-medium">
                {caseLabel}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              {title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-5 mt-5 text-sm text-slate-500 dark:text-slate-400">
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
          <div className={`px-6 py-8 md:px-8 md:py-10 ${SUMMARY_BODY_DARK}`}>
            {children}

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-500/10 dark:to-primary-500/10 rounded-2xl border border-accent-200/90 dark:border-accent-500/25">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Klaar om te oefenen?</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Test je kennis met meerkeuzevragen.</p>
                </div>
                <Link
                  to={practiceLink}
                  className="flex items-center gap-2 px-6 py-3 bg-accent-500 dark:bg-accent-600 text-white rounded-xl font-bold hover:bg-accent-600 dark:hover:bg-accent-500 transition-colors shrink-0 shadow-sm"
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
            className="fixed bottom-6 right-6 p-3 bg-slate-900 dark:bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors z-50"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default SummaryLayout
