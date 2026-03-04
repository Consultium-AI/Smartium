import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ClipboardCheck } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { name: 'Samenvattingen', href: '/summary', icon: FileText },
    { name: 'Oefenvragen', href: '/oefenvragen', icon: ClipboardCheck },
  ]

  return (
    <footer className="pt-16 pb-8 bg-white border-t border-navy-100">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 mb-4">
            <motion.img
              src={`${import.meta.env.BASE_URL}smartium-logo.png`}
              alt="Smartium"
              className="w-12 h-12 object-contain"
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-2xl font-bold gradient-text">Smartium</span>
          </Link>

          <p className="text-navy-500 mb-8 max-w-md">
            Studiemateriaal voor geneeskundestudenten. Gemaakt door studenten, voor studenten.
          </p>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-50 text-navy-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{link.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center pt-6 border-t border-navy-100">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Smartium
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
