import { motion } from 'framer-motion'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { ArrowRight, Shield, Sparkles, Activity, Stethoscope } from 'lucide-react'
import Navbar from '../components/Navbar'
import { getProgressUserId } from '../utils/accountProgressStorage'
import { useAuth } from '../context/AuthContext'

const TENTAMEN_BA1_CARDS = [
  {
    to: '/tentamen-blok4',
    title: 'Blok 4',
    subtitle: 'Microbiologie en Immunologie',
    Icon: Shield,
    iconBg: 'bg-indigo-100 dark:bg-indigo-500/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    to: '/tentamen-blok5',
    title: 'Blok 5',
    subtitle: 'Bedreigingen van binnenuit en buitenaf',
    Icon: Sparkles,
    iconBg: 'bg-rose-100 dark:bg-rose-500/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
]

const TENTAMEN_BA2_CARDS = [
  {
    to: '/tentamen-blok9',
    title: 'Blok 9',
    subtitle: 'Homeostase II',
    Icon: Activity,
    iconBg: 'bg-teal-100 dark:bg-teal-500/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
  },
  {
    to: '/tentamen-blok10',
    title: 'Blok 10',
    subtitle: 'Maag-Darm-Lever',
    Icon: Stethoscope,
    iconBg: 'bg-amber-100 dark:bg-amber-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
]

// ─── Exam Selection (Blok 4, 5 & 9) ──────────────────────────────
const ExamSelection = () => {
  const { user, loading: authLoading } = useAuth()
  const progressUserId = getProgressUserId(user, authLoading)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-12 max-w-md mx-auto space-y-3"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            Tentamens
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
            Oefententamens
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Kies je blok — daarna zie je de beschikbare oefententamens.
          </p>
          {progressUserId && (
            <p className="text-xs text-slate-500 dark:text-slate-500 pt-0.5">
              Voortgang wordt per account op dit apparaat bewaard.
            </p>
          )}
        </motion.div>

        <div className="max-w-md mx-auto space-y-10 text-left">
          <section aria-labelledby="exam-index-ba1-heading">
            <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
              <h2 id="exam-index-ba1-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                Bachelorjaar 1
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Blokken 4 en 5
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              {TENTAMEN_BA1_CARDS.map((b, i) => (
                <motion.div
                  key={b.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.05 }}
                >
                  <Link
                    to={b.to}
                    className="group relative flex min-w-0 items-center gap-4 rounded-xl border border-slate-200/90 bg-white px-4 py-4 transition-all duration-200 sm:px-5 sm:py-4
                      hover:border-slate-300 hover:bg-slate-50/90
                      dark:border-slate-700/90 dark:bg-slate-900/50 dark:hover:border-slate-600 dark:hover:bg-slate-900/80
                      active:scale-[0.995]"
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${b.iconBg}`}>
                      <b.Icon className={`w-5 h-5 ${b.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="font-medium text-slate-900 dark:text-slate-100 text-[15px] leading-snug">
                        {b.title}
                      </h3>
                      <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-slate-500">
                        {b.subtitle}
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-400 transition-colors group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section aria-labelledby="exam-index-ba2-heading">
            <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
              <h2 id="exam-index-ba2-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                Bachelorjaar 2
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Blokken 9 en 10
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              {TENTAMEN_BA2_CARDS.map((b, i) => (
                <motion.div
                  key={b.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={b.to}
                    className="group relative flex min-w-0 items-center gap-4 rounded-xl border border-slate-200/90 bg-white px-4 py-4 transition-all duration-200 sm:px-5 sm:py-4
                      hover:border-slate-300 hover:bg-slate-50/90
                      dark:border-slate-700/90 dark:bg-slate-900/50 dark:hover:border-slate-600 dark:hover:bg-slate-900/80
                      active:scale-[0.995]"
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${b.iconBg}`}>
                      <b.Icon className={`w-5 h-5 ${b.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="font-medium text-slate-900 dark:text-slate-100 text-[15px] leading-snug">
                        {b.title}
                      </h3>
                      <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-slate-500">
                        {b.subtitle}
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-400 transition-colors group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

const ExamPage = () => {
  const [searchParams] = useSearchParams()
  const examNr = parseInt(searchParams.get('nr'), 10)

  if (Number.isFinite(examNr) && examNr >= 1 && examNr <= 5) {
    return <Navigate to="/tentamen" replace />
  }

  return <ExamSelection />
}

export default ExamPage
