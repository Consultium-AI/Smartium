import { motion } from 'framer-motion'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { getProgressUserId } from '../utils/accountProgressStorage'
import { useAuth } from '../context/AuthContext'

// ─── Exam Selection (Blok 5 & 9) ─────────────────────────────────
const ExamSelection = () => {
  const { user, loading: authLoading } = useAuth()
  const progressUserId = getProgressUserId(user, authLoading)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-2xl mx-auto space-y-4"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            <span className="text-primary-500 dark:text-primary-400">Oefententamens</span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Casusgerichte oefententamens per blok. Kies hieronder Blok 5 of Blok 9.
          </p>
          {progressUserId && (
            <p className="text-xs text-slate-500 dark:text-slate-500 pt-1">
              Je voortgang wordt bewaard per account op dit apparaat.
            </p>
          )}
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Link
              to="/tentamen-blok5"
              className="group flex items-center justify-between gap-4 p-6 rounded-2xl border-2 border-primary-300/60 dark:border-primary-500/40 transition-all
                bg-gradient-to-r from-primary-50/90 to-white dark:bg-slate-900/85 dark:from-transparent dark:to-transparent
                shadow-md dark:shadow-black/30
                hover:border-primary-500 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center font-bold shrink-0">
                  B5
                </div>
                <div className="min-w-0 text-left">
                  <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Oefententamen Blok 5</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Bedreigingen van binnenuit en buitenaf · casusgerichte tentamens
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.04 }}
          >
            <Link
              to="/tentamen-blok9"
              className="group flex items-center justify-between gap-4 p-6 rounded-2xl border-2 border-sky-300/60 dark:border-sky-500/40 transition-all
                bg-gradient-to-r from-sky-50/90 to-white dark:bg-slate-900/85 dark:from-transparent dark:to-transparent
                shadow-md dark:shadow-black/30
                hover:border-sky-500 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shrink-0">
                  B9
                </div>
                <div className="min-w-0 text-left">
                  <h2 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Oefententamen Blok 9</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Homeostase Ba2 · casusgerichte tentamens
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-sky-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
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
