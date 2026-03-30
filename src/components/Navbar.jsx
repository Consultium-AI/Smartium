import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  FileText,
  ClipboardCheck,
  Home,
  Bot,
  GraduationCap,
  Sun,
  Moon,
  LogIn,
  LogOut,
  CreditCard,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Samenvattingen', href: '/summary', icon: FileText },
  { name: 'Oefenvragen', href: '/oefenvragen', icon: ClipboardCheck },
  { name: 'Oefententamens', href: '/tentamen', icon: GraduationCap },
  { name: 'AI Chat', href: '/chat', icon: Bot },
  { name: 'Prijzen', href: '/billing', icon: CreditCard },
]

function userDisplayLabel(user) {
  const n = user?.displayName?.trim()
  if (n) return n
  return user?.email ?? ''
}

function userDisplayTitle(user) {
  const n = user?.displayName?.trim()
  const e = user?.email ?? ''
  if (n && e) return `${n} · ${e}`
  return e || n || ''
}

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const { user, loading: authLoading, signOut } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const desktopLinkClass = (href) => {
    const active = location.pathname === href
    return `relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0d12] ${
      active
        ? 'bg-white text-navy-900 shadow-sm dark:bg-slate-800 dark:text-white dark:shadow-none dark:ring-1 dark:ring-white/10'
        : 'text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'
    }`
  }

  const mobileLinkClass = (href) => {
    const active = location.pathname === href
    return `flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-inset ${
      active
        ? 'bg-slate-100 text-navy-900 dark:bg-slate-800 dark:text-white'
        : 'text-navy-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/80'
    }`
  }

  const barStyles = isScrolled
    ? 'bg-white/92 dark:bg-[#0a0d12]/94 backdrop-blur-lg shadow-[0_1px_0_0_rgba(15,23,42,0.06)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
    : 'bg-white/75 dark:bg-[#0a0d12]/65 backdrop-blur-md dark:backdrop-blur-lg'

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300 ${barStyles} border-slate-200/80 dark:border-slate-700/45`}
    >
      <nav className="container-custom" aria-label="Hoofdnavigatie">
        <div className="relative flex h-[3.75rem] items-center justify-between sm:h-16">
          <Link
            to="/"
            aria-label="Smartium — home"
            className="flex items-center gap-2.5 shrink-0 rounded-lg outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary-500/50 dark:ring-offset-[#0a0d12]"
          >
            <img
              src={`${import.meta.env.BASE_URL}smartium-logo.png`}
              alt=""
              aria-hidden
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              width={40}
              height={40}
            />
            <span className="font-display text-[1.0625rem] font-semibold tracking-tight text-navy-900 dark:text-slate-50 sm:text-lg">
              Smartium
            </span>
          </Link>

          {/* Desktop — gecentreerde pill-nav */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-slate-200/90 bg-slate-100/90 p-1 shadow-inner dark:border-slate-600/50 dark:bg-slate-900/80 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} className={desktopLinkClass(item.href)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {!authLoading && user && (
              <div className="hidden items-center gap-2 sm:flex">
                <span
                  className="max-w-[12rem] truncate text-xs font-semibold text-navy-800 dark:text-slate-200"
                  title={userDisplayTitle(user)}
                >
                  {userDisplayLabel(user)}
                </span>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="flex h-9 items-center gap-1.5 rounded-full border border-slate-200/90 px-3 text-xs font-semibold text-navy-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  aria-label="Uitloggen"
                >
                  <LogOut className="h-3.5 w-3.5" strokeWidth={2} />
                  Uitloggen
                </button>
              </div>
            )}
            {!authLoading && !user && (
              <Link
                to="/login"
                className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-full bg-navy-900 px-3.5 text-xs font-semibold text-white transition hover:bg-navy-800 dark:bg-primary-600 dark:hover:bg-primary-500"
              >
                <LogIn className="h-3.5 w-3.5" strokeWidth={2} />
                Inloggen
              </Link>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-navy-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              title={isDark ? 'Licht thema' : 'Donker thema'}
              aria-label={isDark ? 'Schakel naar licht thema' : 'Schakel naar donker thema'}
            >
              {isDark ? <Sun className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} /> : <Moon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />}
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed left-0 right-0 bottom-0 z-40 top-[3.75rem] sm:top-16 flex flex-col"
          >
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 shrink-0 border-b border-slate-200/90 bg-white shadow-xl dark:border-slate-700/50 dark:bg-[#0c1018] dark:shadow-2xl"
            >
              <div className="container-custom max-h-[min(70vh,28rem)] overflow-y-auto py-3">
                <div className="flex flex-col gap-0.5 pb-2">
                  {navItems.map((item) => (
                    <Link key={item.name} to={item.href} className={mobileLinkClass(item.href)}>
                      <item.icon className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-80" strokeWidth={1.75} />
                      {item.name}
                    </Link>
                  ))}
                  {!authLoading && !user && (
                    <Link to="/login" className={mobileLinkClass('/login')}>
                      <LogIn className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-80" strokeWidth={1.75} />
                      Inloggen
                    </Link>
                  )}
                  {!authLoading && user && (
                    <>
                      <div className="px-4 py-2">
                        <p className="truncate text-sm font-semibold text-navy-900 dark:text-slate-100">
                          {userDisplayLabel(user)}
                        </p>
                        {user.email && user.displayName?.trim() && (
                          <p className="truncate text-xs text-navy-500 dark:text-slate-500">{user.email}</p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          signOut()
                          setIsMobileMenuOpen(false)
                        }}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium text-rose-700 transition-colors hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/30"
                      >
                        <LogOut className="h-[1.125rem] w-[1.125rem] shrink-0" strokeWidth={1.75} />
                        Uitloggen
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
            <button
              type="button"
              className="min-h-0 flex-1 bg-navy-950/40 backdrop-blur-[2px] dark:bg-black/50"
              aria-label="Menu sluiten"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
