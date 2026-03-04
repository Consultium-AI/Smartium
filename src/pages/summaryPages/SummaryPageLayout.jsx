import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Home, ArrowLeft } from 'lucide-react'
const Header = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
    <div className="container-custom">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}smartium-logo.png`}
            alt="Smartium"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold gradient-text">Smartium</span>
        </Link>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
          <FileText className="w-4 h-4" />
          <span className="font-medium text-sm">Samenvatting</span>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline font-medium">Home</span>
        </Link>
      </div>
    </div>
  </header>
)

// Back Button Component
const BackButton = () => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="mb-6"
  >
    <Link
      to="/summary"
      className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="font-medium">Terug naar overzicht</span>
    </Link>
  </motion.div>
)

// Footer Component
const Footer = () => (
  <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-12">
    <p>Â© {new Date().getFullYear()} Smartium</p>
  </footer>
)

export default SummaryPage

