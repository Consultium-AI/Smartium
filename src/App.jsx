import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import PracticeQuestionsPage from './pages/PracticeQuestionsPage'
import SummaryPage from './pages/SummaryPage'

// Home page component - Clean, professional layout
const HomePage = () => (
  <>
    <ParticleBackground />
    <Navbar />
    <main>
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
      <div className="relative min-h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oefenvragen" element={<PracticeQuestionsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
