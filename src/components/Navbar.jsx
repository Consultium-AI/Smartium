import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  FileText,
  ClipboardCheck,
  Home,
  Bot,
  Brain,
  GraduationCap,
  ChevronDown,
  Sun,
  Moon,
  LogIn,
  LogOut,
  Settings,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { useAccess } from '../hooks/useAccess'
import { useReward } from '../context/RewardContext'
import { hasFlashcardsAccess } from '../utils/waifuPremiumUser'
import { getSubscriptionRenewalState } from '../lib/subscriptionRenewal'
import { DEFAULT_PFP_URL } from '../constants/defaultPfps'
import { getRewardPfpById } from '../constants/rewardPfps'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  {
    name: 'Samenvattingen',
    href: '/summary',
    icon: FileText,
    subGroups: [
      { label: 'Ba1', links: [
        { name: 'Blok 3', href: '/summary-blok3' },
        { name: 'Blok 4', href: '/summary-blok4' },
        { name: 'Blok 5', href: '/summary-blok5' },
      ]},
      { label: 'Ba2', links: [
        { name: 'Blok 9', href: '/summary-blok9' },
        { name: 'Blok 10', href: '/summary-blok10' },
      ]},
    ],
  },
  {
    name: 'Oefenvragen',
    href: '/oefenvragen',
    icon: ClipboardCheck,
    subGroups: [
      { label: 'Ba1', links: [
        { name: 'Blok 3', href: '/oefenvragen-blok3' },
        { name: 'Blok 4', href: '/oefenvragen-blok4' },
        { name: 'Blok 5', href: '/oefenvragen-blok5' },
      ]},
      { label: 'Ba2', links: [
        { name: 'Blok 9', href: '/oefenvragen-blok9' },
        { name: 'Blok 10', href: '/oefenvragen-blok10' },
      ]},
    ],
  },
  {
    name: 'Tentamens',
    href: '/tentamen',
    icon: GraduationCap,
    subGroups: [
      { label: 'Ba1', links: [
        { name: 'Blok 4', href: '/tentamen-blok4' },
        { name: 'Blok 5', href: '/tentamen-blok5' },
      ]},
      { label: 'Ba2', links: [
        { name: 'Blok 9', href: '/tentamen-blok9' },
        { name: 'Blok 10', href: '/tentamen-blok10' },
      ]},
    ],
  },
  {
    name: 'Flashcards',
    href: '/flashcards',
    icon: Brain,
    subGroups: [
      { label: 'Ba2', links: [
        { name: 'Blok 10', href: '/flashcards-blok10' },
      ]},
    ],
  },
  { name: 'AI Chat', href: '/chat', icon: Bot },
]

function isActiveDropdown(item, pathname) {
  if (!item.subGroups) return false
  if (item.href && pathname === item.href) return true
  return item.subGroups.some((g) => g.links.some((l) => pathname === l.href || pathname.startsWith(l.href.split('?')[0])))
}

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

function UserAvatar({ user, className = '' }) {
  const { selectedRewardPfp } = useReward()

  if (selectedRewardPfp) {
    const pfp = getRewardPfpById(selectedRewardPfp)
    if (pfp?.image) {
      return (
        <img
          src={pfp.image}
          alt=""
          aria-hidden
          className={`rounded-full object-cover ${className}`}
        />
      )
    }
  }

  const photo = user?.photoURL?.trim() || DEFAULT_PFP_URL
  return (
    <img
      src={photo}
      alt=""
      aria-hidden
      className={`rounded-full object-cover ${className}`}
      onError={(event) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = DEFAULT_PFP_URL
      }}
    />
  )
}

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const { user, loading: authLoading, signOut } = useAuth()
  const { hasAccess, plan, paidUntil, subscriptionStopped, loading: accessLoading } = useAccess()
  const { showRenewalReminder } = getSubscriptionRenewalState(plan, paidUntil, subscriptionStopped)
  const showBillingRenewalBadge = Boolean(user && !authLoading && !accessLoading && showRenewalReminder)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const profileMenuRef = useRef(null)
  const rafIdRef = useRef(null)
  const isScrolledRef = useRef(false)
  const tickingRef = useRef(false)
  const location = useLocation()

  // Flashcards: alle premium/VIP-accounts — waifu-achtergrond blijft apart (2 Gmail).
  const hasFlashcardsTab = Boolean(user && !accessLoading && hasFlashcardsAccess(hasAccess, plan))
  const visibleNavItems = hasFlashcardsTab ? navItems : navItems.filter((item) => item.name !== 'Flashcards')

  useEffect(() => {
    const syncScrolledState = () => {
      tickingRef.current = false
      const next = window.scrollY > 8
      if (isScrolledRef.current === next) return
      isScrolledRef.current = next
      setIsScrolled(next)
    }
    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      rafIdRef.current = window.requestAnimationFrame(syncScrolledState)
    }
    syncScrolledState()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafIdRef.current != null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileExpanded(null)
    setIsProfileMenuOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isProfileMenuOpen) return

    const onPointerDown = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileMenuOpen(false)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsProfileMenuOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isProfileMenuOpen])

  const pillClass = (href) => {
    const active = location.pathname === href
    return `relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0d12] ${
      active
        ? 'bg-white text-navy-900 shadow-sm dark:bg-slate-800 dark:text-white dark:shadow-none dark:ring-1 dark:ring-white/10'
        : 'text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'
    }`
  }

  const mobileLinkClass = (href) => {
    const active = location.pathname + location.search === href || location.pathname === href.split('?')[0]
    return `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
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

          {/* Desktop nav */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-slate-200/90 bg-slate-100/90 p-1 shadow-inner dark:border-slate-600/50 dark:bg-slate-900/80 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
              {visibleNavItems.map((item) =>
                item.subGroups ? (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={`relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                        isActiveDropdown(item, location.pathname)
                          ? 'bg-white text-navy-900 shadow-sm dark:bg-slate-800 dark:text-white dark:shadow-none dark:ring-1 dark:ring-white/10'
                          : 'text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" strokeWidth={2} />
                    </Link>
                    <div
                      role="menu"
                      className="pointer-events-none invisible absolute left-0 top-full z-50 pt-1.5 opacity-0 transition-all group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
                    >
                      <div className="min-w-[13rem] rounded-xl border border-slate-200/90 bg-white p-2 shadow-lg dark:border-slate-600 dark:bg-slate-800 dark:shadow-black/40">
                        {item.subGroups.map((group) => (
                          <div key={group.label} className="mb-1 last:mb-0">
                            <p className="px-2.5 pt-1.5 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                              {group.label}
                            </p>
                            {group.links.map((link) => (
                              <Link
                                key={link.href}
                                role="menuitem"
                                to={link.href}
                                className={`block rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/80 ${
                                  (location.pathname + location.search) === link.href || location.pathname === link.href.split('?')[0]
                                    ? 'text-primary-600 dark:text-primary-400'
                                    : 'text-navy-700 dark:text-slate-200'
                                }`}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className={pillClass(item.href)}>
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {!authLoading && user && (
              <div ref={profileMenuRef} className="relative hidden sm:block">
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => setIsProfileMenuOpen((o) => !o)}
                    className="flex h-10 items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-1.5 pr-2.5 text-xs font-semibold text-navy-700 shadow-sm transition hover:bg-white dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup="menu"
                  >
                    <span className="relative">
                      <UserAvatar user={user} className="h-7 w-7" />
                      {showBillingRenewalBadge && (
                        <span
                          className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900"
                          title="Betalingsherinnering"
                          aria-label="Er is een betalingsherinnering voor je abonnement"
                        />
                      )}
                    </span>
                    <span className="hidden max-w-[9rem] truncate md:block" title={userDisplayTitle(user)}>
                      {userDisplayLabel(user)}
                    </span>
                    <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} strokeWidth={2} />
                  </button>
                </div>

                <AnimatePresence>
                  {isProfileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      role="menu"
                      className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-lg dark:border-slate-600 dark:bg-slate-800"
                    >
                      <div className="px-2.5 pb-2 pt-1.5">
                        <p className="truncate text-sm font-semibold text-navy-900 dark:text-white">{userDisplayLabel(user)}</p>
                        <p className="truncate text-xs text-slate-500 dark:text-slate-400">{user.email || ''}</p>
                      </div>
                      <Link
                        to="/settings/profile"
                        role="menuitem"
                        className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-navy-700 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700/80"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" strokeWidth={2} />
                        Profile settings
                      </Link>
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => { setIsProfileMenuOpen(false); signOut() }}
                        className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-medium text-rose-700 transition hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/30"
                      >
                        <LogOut className="h-4 w-4" strokeWidth={2} />
                        Uitloggen
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
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

      {/* Mobile menu */}
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
              <div className="container-custom max-h-[min(70vh,32rem)] overflow-y-auto py-3">
                <div className="flex flex-col gap-0.5 pb-2">
                  {visibleNavItems.map((item) =>
                    item.subGroups ? (
                      <div key={item.name} className="py-0.5">
                        <div className="flex items-center gap-1 rounded-xl px-2 py-1">
                          <Link
                            to={item.href}
                            className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-2 py-2 text-[15px] font-medium text-navy-700 transition-colors hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/80"
                          >
                            <item.icon className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-80" strokeWidth={1.75} />
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileExpanded((p) => (p === item.name ? null : item.name))}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/80"
                            aria-label={mobileExpanded === item.name ? `${item.name} inklappen` : `${item.name} uitklappen`}
                          >
                          <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} strokeWidth={2} />
                          </button>
                        </div>
                        <AnimatePresence initial={false}>
                          {mobileExpanded === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 border-l-2 border-slate-200/90 dark:border-slate-600/70 pl-2 pb-1">
                                {item.subGroups.map((group) => (
                                  <div key={group.label} className="mt-1">
                                    <p className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                      {group.label}
                                    </p>
                                    {group.links.map((link) => (
                                      <Link key={link.href} to={link.href} className={mobileLinkClass(link.href)}>
                                        {link.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link key={item.name} to={item.href} className={mobileLinkClass(item.href)}>
                        <item.icon className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-80" strokeWidth={1.75} />
                        {item.name}
                      </Link>
                    )
                  )}
                  {!authLoading && !user && (
                    <Link to="/login" className={mobileLinkClass('/login')}>
                      <LogIn className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-80" strokeWidth={1.75} />
                      Inloggen
                    </Link>
                  )}
                  {!authLoading && user && (
                    <>
                      <div className="flex items-center gap-3 px-4 py-2">
                        <div className="relative shrink-0">
                          <UserAvatar user={user} className="h-9 w-9 shrink-0" />
                          {showBillingRenewalBadge && (
                            <span
                              className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-[#0c1018]"
                              title="Betalingsherinnering"
                              aria-label="Er is een betalingsherinnering voor je abonnement"
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-navy-900 dark:text-slate-100">{userDisplayLabel(user)}</p>
                          {user.email && (
                            <p className="truncate text-xs text-navy-500 dark:text-slate-500">{user.email}</p>
                          )}
                        </div>
                      </div>
                      <Link to="/settings/profile" className={mobileLinkClass('/settings/profile')}>
                        <Settings className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-80" strokeWidth={1.75} />
                        Profile settings
                      </Link>
                      <button
                        type="button"
                        onClick={() => { signOut(); setIsMobileMenuOpen(false) }}
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
