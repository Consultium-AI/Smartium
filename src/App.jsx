import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { isWaifuPremiumUser, isFlashcardsVipUser } from './utils/waifuPremiumUser'
import WaifuSiteBackground from './components/waifu/WaifuSiteBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaaromSmartium from './components/WaaromSmartium'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import PracticeQuestionsPage from './pages/PracticeQuestionsPage'
import FlashcardsPage from './pages/FlashcardsPage'
import SummaryPage from './pages/SummaryPage'
import ChatPage from './pages/ChatPage'
import ExamPage from './pages/ExamPage'
import ExamBlokPage from './pages/ExamBlokPage'
import LoginPage from './pages/LoginPage'
import BillingPage from './pages/BillingPage'
import ProfileSettingsPage from './pages/ProfileSettingsPage'
import ContentProtectionWrapper from './components/ContentProtectionWrapper'
import AccountRoute from './components/AccountRoute'
import ScrollToTopRoutes from './components/ScrollToTopRoutes'
import SubscriptionRenewalModal from './components/SubscriptionRenewalModal'
import { RewardProvider } from './context/RewardContext'
import CoinNotification from './components/CoinNotification'
import FeedbackButton from './components/FeedbackButton'

const HomePage = ({ waifuMode }) => (
  <>
    {!waifuMode && <ParticleBackground />}
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <WaaromSmartium />
      <Features />
      <CTA />
    </main>
    <Footer />
  </>
)

/** Flashcards alleen voor VIP-accounts (niet hetzelfde als waifu-achtergrond). */
function FlashcardsVipRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (!isFlashcardsVipUser(user)) return <Navigate to="/" replace />
  return children
}

const getBasename = () => {
  const baseUrl = import.meta.env.BASE_URL
  if (window.location.hostname === 'smartium.nl' || window.location.hostname === 'www.smartium.nl') {
    return ''
  }
  return baseUrl
}

function App() {
  const { user } = useAuth()
  const waifuMode = isWaifuPremiumUser(user)

  useEffect(() => {
    document.documentElement.classList.toggle('waifu-premium-mode', waifuMode)
    return () => document.documentElement.classList.remove('waifu-premium-mode')
  }, [waifuMode])

  return (
    <Router basename={getBasename()}>
      <RewardProvider>
        <div className={`relative min-h-screen overflow-x-hidden ${waifuMode ? 'waifu-premium-mode' : ''}`}>
          {waifuMode ? <WaifuSiteBackground /> : null}

          <div className="relative z-10">
            <ScrollToTopRoutes />
            <SubscriptionRenewalModal />
            <CoinNotification />
            <FeedbackButton />
            <Routes>
              <Route path="/" element={<HomePage waifuMode={waifuMode} />} />
              <Route path="/oefenvragen" element={<ContentProtectionWrapper><PracticeQuestionsPage /></ContentProtectionWrapper>} />
              <Route path="/oefenvragen-blok3" element={<ContentProtectionWrapper><PracticeQuestionsPage forcedBlok="blok3" /></ContentProtectionWrapper>} />
              <Route path="/oefenvragen-blok4" element={<ContentProtectionWrapper><PracticeQuestionsPage forcedBlok="blok4" /></ContentProtectionWrapper>} />
              <Route path="/oefenvragen-blok5" element={<ContentProtectionWrapper><PracticeQuestionsPage forcedBlok="blok5" /></ContentProtectionWrapper>} />
              <Route path="/oefenvragen-blok9" element={<ContentProtectionWrapper><PracticeQuestionsPage forcedBlok="blok9" /></ContentProtectionWrapper>} />
              <Route path="/oefenvragen-blok10" element={<ContentProtectionWrapper><PracticeQuestionsPage forcedBlok="blok10" /></ContentProtectionWrapper>} />
              <Route path="/summary" element={<ContentProtectionWrapper><SummaryPage /></ContentProtectionWrapper>} />
              <Route path="/summary-blok3" element={<ContentProtectionWrapper><SummaryPage forcedBlok="blok3" /></ContentProtectionWrapper>} />
              <Route path="/summary-blok4" element={<ContentProtectionWrapper><SummaryPage forcedBlok="blok4" /></ContentProtectionWrapper>} />
              <Route path="/summary-blok5" element={<ContentProtectionWrapper><SummaryPage forcedBlok="blok5" /></ContentProtectionWrapper>} />
              <Route path="/summary-blok9" element={<ContentProtectionWrapper><SummaryPage forcedBlok="blok9" /></ContentProtectionWrapper>} />
              <Route path="/summary-blok10" element={<ContentProtectionWrapper><SummaryPage forcedBlok="blok10" /></ContentProtectionWrapper>} />
              <Route path="/flashcards" element={<FlashcardsVipRoute><ContentProtectionWrapper><FlashcardsPage /></ContentProtectionWrapper></FlashcardsVipRoute>} />
              <Route path="/flashcards-blok10" element={<FlashcardsVipRoute><ContentProtectionWrapper><FlashcardsPage /></ContentProtectionWrapper></FlashcardsVipRoute>} />
              <Route path="/chat" element={<AccountRoute><ChatPage /></AccountRoute>} />
              <Route path="/tentamen" element={<ContentProtectionWrapper><ExamPage /></ContentProtectionWrapper>} />
              <Route path="/tentamen-blok4" element={<ContentProtectionWrapper><ExamBlokPage blokNumber={4} /></ContentProtectionWrapper>} />
              <Route path="/tentamen-blok5" element={<ContentProtectionWrapper><ExamBlokPage blokNumber={5} /></ContentProtectionWrapper>} />
              <Route path="/tentamen-blok9" element={<ContentProtectionWrapper><ExamBlokPage blokNumber={9} /></ContentProtectionWrapper>} />
              <Route path="/tentamen-blok10" element={<ContentProtectionWrapper><ExamBlokPage blokNumber={10} /></ContentProtectionWrapper>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/billing" element={<BillingPage />} />
              <Route path="/settings/profile" element={<ProfileSettingsPage />} />
            </Routes>
          </div>
        </div>
      </RewardProvider>
    </Router>
  )
}

export default App
