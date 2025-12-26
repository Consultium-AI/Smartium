import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Summaries', href: '#summaries' },
      { name: 'Flashcards', href: '#flashcards' },
      { name: 'Practice Exams', href: '#exams' },
      { name: 'Pricing', href: '#' },
    ],
    Resources: [
      { name: 'Study Guides', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Help Center', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Press', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="pt-20 pb-8 bg-white border-t border-navy-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/smartium-logo.png"
                alt="Smartium"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold gradient-text">Smartium</span>
            </motion.a>

            <p className="text-navy-500 mb-6 leading-relaxed max-w-sm">
              The ultimate learning platform for medical students. 
              Study smarter, not harder.
            </p>

            {/* Contact */}
            <a 
              href="mailto:hello@smartium.app" 
              className="flex items-center gap-2 text-navy-500 hover:text-primary-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@smartium.app</span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-navy-50 text-navy-400 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-navy-800 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-navy-500 hover:text-primary-600 transition-colors text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-cream-100 rounded-3xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-navy-800 mb-1">
                Stay Updated
              </h4>
              <p className="text-navy-500 text-sm">
                Get study tips and new content delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1 md:w-64"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-navy-100">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Smartium. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-navy-400 hover:text-navy-600 text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-navy-400 hover:text-navy-600 text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-navy-400 hover:text-navy-600 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
