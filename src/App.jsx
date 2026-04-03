import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaaromSmartium from './components/WaaromSmartium'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import PracticeQuestionsPage from './pages/PracticeQuestionsPage'
import SummaryPage from './pages/SummaryPage'
import ChatPage from './pages/ChatPage'
import ExamPage from './pages/ExamPage'
import ExamBlokPage from './pages/ExamBlokPage'
import LoginPage from './pages/LoginPage'
import BillingPage from './pages/BillingPage'
import ProfileSettingsPage from './pages/ProfileSettingsPage'
import ContentProtectionWrapper from './components/ContentProtectionWrapper'
import PaidRoute from './components/PaidRoute'

// Home page component - Clean, professional layout
const HomePage = () => (
  <>
    <ParticleBackground />
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

// Get the base URL from Vite config for GitHub Pages compatibility
// For custom domain (smartium.nl), use empty string
// For GitHub Pages subpath (/Smartium/), use the base path
const getBasename = () => {
  const baseUrl = import.meta.env.BASE_URL
  // If we're on a custom domain (not consultium-ai.github.io), use empty basename
  if (window.location.hostname === 'smartium.nl' || window.location.hostname === 'www.smartium.nl') {
    return ''
  }
  return baseUrl
}

function App() {
  return (
    <Router basename={getBasename()}>
      <div className="relative min-h-screen overflow-hidden bg-[#f8f9fb] dark:bg-gradient-to-b dark:from-[#0c1018] dark:via-[#0a0d12] dark:to-[#080b10] transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oefenvragen" element={<PaidRoute><ContentProtectionWrapper><PracticeQuestionsPage /></ContentProtectionWrapper></PaidRoute>} />
          <Route path="/summary" element={<PaidRoute><ContentProtectionWrapper><SummaryPage /></ContentProtectionWrapper></PaidRoute>} />
          <Route path="/chat" element={<PaidRoute><ChatPage /></PaidRoute>} />
          <Route path="/tentamen" element={<PaidRoute><ContentProtectionWrapper><ExamPage /></ContentProtectionWrapper></PaidRoute>} />
          <Route path="/tentamen-blok5" element={<PaidRoute><ContentProtectionWrapper><ExamBlokPage blokNumber={5} /></ContentProtectionWrapper></PaidRoute>} />
          <Route path="/tentamen-blok9" element={<PaidRoute><ContentProtectionWrapper><ExamBlokPage blokNumber={9} /></ContentProtectionWrapper></PaidRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/settings/profile" element={<ProfileSettingsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
