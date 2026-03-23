import { Link } from 'react-router-dom'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Samenvattingen', href: '/summary' },
    { name: 'Oefenvragen', href: '/oefenvragen' },
    { name: 'Oefententamens', href: '/tentamen' },
    { name: 'AI Chat', href: '/chat' },
  ]

  return (
    <footer className="relative z-10 border-t border-slate-200/90 dark:border-slate-700/40 footer-section-bg">
      <div className="container-custom py-14 md:py-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <Link to="/" className="flex items-center gap-2.5 mb-5">
            <img
              src={`${import.meta.env.BASE_URL}smartium-logo.png`}
              alt="Smartium"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-slate-50">
              Smartium
            </span>
          </Link>

          <p className="text-sm md:text-base text-navy-500 dark:text-slate-300/90 leading-relaxed mb-10">
            Studiemateriaal voor geneeskundestudenten. Gemaakt door studenten, voor studenten.
          </p>

          <nav
            className="flex flex-wrap justify-center gap-x-1 gap-y-2 text-sm"
            aria-label="Footer navigatie"
          >
            {navLinks.map((link, i) => (
              <span key={link.href} className="inline-flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-slate-300 dark:text-slate-600 select-none" aria-hidden>
                    ·
                  </span>
                )}
                <Link
                  to={link.href}
                  className="text-navy-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors px-1 py-0.5 rounded"
                >
                  {link.name}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-700/35">
          <p className="text-center text-xs text-navy-400 dark:text-slate-500/90 tracking-wide">
            © {new Date().getFullYear()} Smartium
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
