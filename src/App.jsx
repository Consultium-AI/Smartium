import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LectureSummaries from './components/LectureSummaries'
import Flashcards from './components/Flashcards'
import TestExams from './components/TestExams'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import FlashcardsPage from './pages/FlashcardsPage'
import SummaryPage from './pages/SummaryPage'

// Home page component
const HomePage = () => (
  <>
    <ParticleBackground />
    <Navbar />
    <main>
      <Hero />
      <Features />
      <LectureSummaries />
      <Flashcards />
      <TestExams />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </>
)

// Get the base URL from Vite config for GitHub Pages compatibility
const basename = import.meta.env.BASE_URL

function App() {
  return (
    <Router basename={basename}>
      <div className="relative min-h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
