import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ClipboardCheck, Clock, FileText, ChevronUp, Lock, List, X } from 'lucide-react'
import { summaryModuleHeaderBadgeClass, summaryModuleKindLabel } from '../utils/summaryModuleLinkStyles'
import { useAccess } from '../hooks/useAccess'
import { isFreePlanBlockedLme } from '../utils/freePlanAccess'

const VariantSwitchCtx = createContext(null)

export function VariantSwitchProvider({ activeLmeId, onSwitch, children }) {
  return (
    <VariantSwitchCtx.Provider value={{ activeLmeId, onSwitch }}>
      {children}
    </VariantSwitchCtx.Provider>
  )
}

/**
 * Dark-mode voor typografie en callouts. Let op: algemene [&_p]/[&_h4]-regels overschrijven
 * gekleurde boxen — daarom eindigen we met strengere selectors voor .bg-*-50 callouts.
 */
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
  'dark:[&_.border-l-4.border-primary-400]:!border-primary-500/75 dark:[&_.border-l-4.border-rose-400]:!border-rose-500/85 ' +
  'dark:[&_.border-l-4.border-amber-400]:!border-amber-500/85 dark:[&_.border-l-4.border-emerald-400]:!border-emerald-500/85 ' +
  'dark:[&_.border-l-4.border-indigo-400]:!border-indigo-500/85 dark:[&_.border-l-4.border-accent-400]:!border-accent-500/85 ' +
  'dark:[&_.border-l-4.border-cyan-400]:!border-cyan-500/85 ' +
  // Gekleurde callouts: donkere achtergrond + tekst (wint van globale [&_p]/[&_h4] door hogere specificiteit)
  'dark:[&_.bg-rose-50]:!bg-rose-950/70 dark:[&_.bg-rose-50]:!border-rose-600/35 ' +
  'dark:[&_.bg-rose-50_p]:!text-rose-100 dark:[&_.bg-rose-50_h4]:!text-rose-200 dark:[&_.bg-rose-50_h3]:!text-rose-200 dark:[&_.bg-rose-50_strong]:!text-rose-50 ' +
  'dark:[&_.bg-rose-50_.text-rose-700]:!text-rose-200 dark:[&_.bg-rose-50_.text-rose-800]:!text-rose-200 dark:[&_.bg-rose-50_li]:!text-rose-100 dark:[&_.bg-rose-50_ul]:!text-rose-100 ' +
  'dark:[&_.bg-rose-100]:!bg-rose-900/50 dark:[&_.bg-rose-100_.text-rose-600]:!text-rose-300 ' +
  'dark:[&_.border-rose-200]:!border-rose-600/40 dark:[&_.border-rose-400]:!border-rose-500/80 ' +
  'dark:[&_.bg-amber-50]:!bg-amber-950/65 dark:[&_.bg-amber-50]:!border-amber-600/35 ' +
  'dark:[&_.bg-amber-50_p]:!text-amber-100 dark:[&_.bg-amber-50_h4]:!text-amber-200 dark:[&_.bg-amber-50_h3]:!text-amber-200 dark:[&_.bg-amber-50_strong]:!text-amber-50 ' +
  'dark:[&_.bg-amber-50_.text-amber-700]:!text-amber-200 dark:[&_.bg-amber-50_.text-amber-800]:!text-amber-200 dark:[&_.bg-amber-50_li]:!text-amber-100 ' +
  'dark:[&_.bg-amber-100]:!bg-amber-900/45 dark:[&_.bg-amber-100_.text-amber-600]:!text-amber-300 ' +
  'dark:[&_.border-amber-200]:!border-amber-600/40 ' +
  'dark:[&_.bg-red-50]:!bg-red-950/65 dark:[&_.bg-red-50]:!border-red-600/35 ' +
  'dark:[&_.bg-red-50_p]:!text-red-100 dark:[&_.bg-red-50_h4]:!text-red-200 dark:[&_.bg-red-50_strong]:!text-red-50 ' +
  'dark:[&_.bg-red-50_.text-red-700]:!text-red-200 dark:[&_.bg-red-50_.text-red-800]:!text-red-200 ' +
  'dark:[&_.border-red-200]:!border-red-600/40 ' +
  'dark:[&_.bg-green-50]:!bg-green-950/60 dark:[&_.bg-green-50]:!border-green-600/35 ' +
  'dark:[&_.bg-green-50_p]:!text-green-100 dark:[&_.bg-green-50_h4]:!text-green-200 dark:[&_.bg-green-50_strong]:!text-green-50 ' +
  'dark:[&_.bg-green-50_.text-green-700]:!text-green-200 dark:[&_.bg-green-50_.text-green-800]:!text-green-200 ' +
  'dark:[&_.border-green-200]:!border-green-600/40 ' +
  'dark:[&_.bg-emerald-50]:!bg-emerald-950/65 dark:[&_.bg-emerald-50]:!border-emerald-600/35 ' +
  'dark:[&_.bg-emerald-50_p]:!text-emerald-100 dark:[&_.bg-emerald-50_h4]:!text-emerald-200 dark:[&_.bg-emerald-50_strong]:!text-emerald-50 ' +
  'dark:[&_.bg-emerald-50_.text-emerald-700]:!text-emerald-200 dark:[&_.bg-emerald-50_.text-emerald-800]:!text-emerald-200 ' +
  'dark:[&_.border-emerald-200]:!border-emerald-600/40 dark:[&_.border-emerald-400]:!border-emerald-500/80 ' +
  'dark:[&_.bg-emerald-100]:!bg-emerald-900/45 dark:[&_.bg-emerald-100_.text-emerald-600]:!text-emerald-300 ' +
  'dark:[&_.bg-purple-50]:!bg-purple-950/65 dark:[&_.bg-purple-50]:!border-purple-600/35 ' +
  'dark:[&_.bg-purple-50_p]:!text-purple-100 dark:[&_.bg-purple-50_h4]:!text-purple-200 dark:[&_.bg-purple-50_strong]:!text-purple-50 ' +
  'dark:[&_.bg-purple-50_.text-purple-700]:!text-purple-200 dark:[&_.bg-purple-50_.text-purple-800]:!text-purple-200 ' +
  'dark:[&_.border-purple-200]:!border-purple-600/40 ' +
  'dark:[&_.bg-indigo-50]:!bg-indigo-950/65 dark:[&_.bg-indigo-50]:!border-indigo-600/35 ' +
  'dark:[&_.bg-indigo-50_p]:!text-indigo-100 dark:[&_.bg-indigo-50_h4]:!text-indigo-200 ' +
  'dark:[&_.bg-indigo-100]:!bg-indigo-950/50 dark:[&_.bg-indigo-100_.text-indigo-600]:!text-indigo-300 ' +
  'dark:[&_.border-indigo-200]:!border-indigo-600/40 ' +
  'dark:[&_.bg-teal-50]:!bg-teal-950/65 dark:[&_.bg-teal-50]:!border-teal-600/35 ' +
  'dark:[&_.bg-teal-50_p]:!text-teal-100 dark:[&_.bg-teal-50_h4]:!text-teal-200 ' +
  'dark:[&_.bg-teal-100]:!bg-teal-950/50 dark:[&_.bg-teal-100_.text-teal-600]:!text-teal-300 ' +
  'dark:[&_.border-teal-200]:!border-teal-600/40 ' +
  'dark:[&_.bg-sky-50]:!bg-sky-950/65 dark:[&_.bg-sky-50_p]:!text-sky-100 dark:[&_.bg-sky-50_h4]:!text-sky-200 ' +
  'dark:[&_.border-sky-200]:!border-sky-600/40 ' +
  'dark:[&_.bg-blue-50]:!bg-blue-950/65 dark:[&_.bg-blue-50_p]:!text-blue-100 dark:[&_.bg-blue-50_h4]:!text-blue-200 ' +
  'dark:[&_.border-blue-200]:!border-blue-600/40 ' +
  'dark:[&_.bg-cyan-50]:!bg-cyan-950/65 dark:[&_.bg-cyan-50_p]:!text-cyan-100 dark:[&_.bg-cyan-50_h4]:!text-cyan-200 ' +
  'dark:[&_.border-cyan-200]:!border-cyan-600/40'

const SummaryLayout = ({
  title,
  description,
  caseLabel,
  moduleKind,
  tableOfContents,
  practiceLink,
  practiceFooter,
  summaryVariantToggle,
  blokLabel = 'Blok 4',
  children,
  standalone = true,
}) => {
  if (!standalone) return <>{children}</>
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const showPremiumLocks = !accessLoading && (!hasAccess || plan === 'free')
  const variantCtx = useContext(VariantSwitchCtx)
  const activeVariantId = variantCtx?.activeLmeId ?? summaryVariantToggle?.activeLmeId ?? ''
  const isMiniSummary = typeof activeVariantId === 'string' && activeVariantId.endsWith('-mini')
  const readingTimeLabel = isMiniSummary ? '~5 min leestijd' : '~15 min leestijd'
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [tocOpen, setTocOpen] = useState(false)

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

  const closeTocOnMobile = () => {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      setTocOpen(false)
    }
  }

  const hasToc = tableOfContents && tableOfContents.length > 0

  return (
    <>
      <div className={hasToc && tocOpen ? 'mx-auto max-w-7xl grid lg:grid-cols-[280px_1fr] gap-6' : 'max-w-4xl mx-auto'}>
        {hasToc && tocOpen ? (
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/40 border border-slate-200/90 dark:border-slate-700/90 ring-1 ring-slate-900/5 dark:ring-white/5 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <BookOpen className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  Inhoud
                </h3>
                <button
                  type="button"
                  onClick={() => setTocOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Inhoud sluiten"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
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
            </div>
          </motion.aside>
        ) : null}

        {hasToc && (
          <>
            <AnimatePresence>
              {tocOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 bg-black/25 dark:bg-black/45 z-40 lg:hidden"
                  onClick={() => setTocOpen(false)}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {tocOpen && (
                <motion.aside
                  initial={{ x: -280, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -280, opacity: 0 }}
                  transition={{ type: 'spring', damping: 28, stiffness: 330 }}
                  className="fixed top-20 left-0 bottom-0 z-50 w-72 overflow-y-auto lg:hidden"
                >
                  <div className="h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-r-2xl shadow-xl dark:shadow-black/50 border-r border-slate-200/90 dark:border-slate-700/90 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm uppercase tracking-wide">
                        <BookOpen className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                        Inhoud
                      </h3>
                      <button
                        type="button"
                        onClick={() => setTocOpen(false)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Inhoud sluiten"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <nav className="space-y-1">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={closeTocOnMobile}
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
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Main Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/40 border border-slate-200/90 dark:border-slate-700/90 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5"
        >
          {/* Header */}
          <div className="px-6 py-8 md:px-8 md:py-10 border-b border-slate-100 dark:border-slate-800/80">
            {summaryVariantToggle?.variants?.length ? (
              <div
                className="mb-5 flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Versie van de samenvatting"
              >
                {summaryVariantToggle.variants.map((v) => {
                  const isActive = v.id === activeVariantId
                  const locked = showPremiumLocks && isFreePlanBlockedLme(v.id)
                  const canSwitchInline = variantCtx?.onSwitch && !locked

                  if (canSwitchInline) {
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => variantCtx.onSwitch(v.id)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400'
                            : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800'
                        }`}
                      >
                        {v.label}
                      </button>
                    )
                  }

                  const to = locked ? '/billing' : `/summary?lme=${encodeURIComponent(v.id)}`
                  return (
                    <Link
                      key={v.id}
                      to={to}
                      aria-current={isActive ? 'page' : undefined}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400'
                          : locked
                            ? 'border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-400'
                            : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {v.label}
                      {locked ? <Lock className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden /> : null}
                    </Link>
                  )
                })}
              </div>
            ) : null}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                {blokLabel}
              </span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 text-amber-800 dark:text-amber-300 rounded-full text-xs font-medium">
                {caseLabel}
              </span>
              {moduleKind ? (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${summaryModuleHeaderBadgeClass(moduleKind)}`}
                >
                  {summaryModuleKindLabel(moduleKind)}
                </span>
              ) : null}
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
                {readingTimeLabel}
              </span>
              {tableOfContents.length > 0 ? (
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  {tableOfContents.length} secties
                </span>
              ) : null}
              {hasToc && (
                <button
                  type="button"
                  onClick={() => setTocOpen((v) => !v)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium transition-colors ${
                    tocOpen
                      ? 'border-primary-300 bg-primary-50 text-primary-700 dark:border-primary-500/50 dark:bg-primary-500/15 dark:text-primary-300'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <List className="w-4 h-4" />
                  {tocOpen ? 'Inhoud verbergen' : 'Inhoud'}
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className={`px-6 py-8 md:px-8 md:py-10 ${SUMMARY_BODY_DARK}`}>
            {children}

            {practiceLink ? (
              practiceFooter ?? (
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
              )
            ) : null}
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
