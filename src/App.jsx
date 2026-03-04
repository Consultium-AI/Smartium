import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import PracticeQuestionsPage from './pages/PracticeQuestionsPage'
import SummaryPage from './pages/SummaryPage'
import ChatPage from './pages/ChatPage'
import ExamPage from './pages/ExamPage'

// Home page component - Clean, professional layout
const HomePage = () => (
  <>
    <ParticleBackground />
    <Navbar />
    <main className="relative z-10">
      <Hero />
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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-100/60 via-cream-50 to-accent-100/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oefenvragen" element={<PracticeQuestionsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/tentamen" element={<ExamPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
