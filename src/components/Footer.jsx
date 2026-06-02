import { Link } from 'react-router-dom'

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const navLinks = [
  { name: 'Samenvattingen', href: '/summary' },
  { name: 'Oefenvragen', href: '/oefenvragen' },
  { name: 'Tentamens', href: '/tentamen' },
  { name: 'AI Chat', href: '/chat' },
  { name: 'Prijzen', href: '/billing' },
]

const legalDocs = [
  { label: 'Privacyverklaring', file: 'privacyverklaring-smartium.pdf' },
  { label: 'Cookiebeleid', file: 'cookiebeleid-smartium.pdf' },
  { label: 'Voorwaarden & regelgeving', file: 'smartium-regelgeving.pdf' },
]

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200/90 dark:border-slate-700/40 footer-section-bg">
      <div className="container-custom py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}smartium-logo.png`}
                alt="Smartium"
                className="w-9 h-9 object-contain"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-slate-50">
                Smartium
              </span>
            </Link>
            <p className="text-sm text-navy-500 dark:text-slate-400 leading-relaxed mb-3">
              Studiemateriaal voor geneeskunde,<br />
              afgestemd op het nieuwe curriculum.
            </p>
            <p className="text-xs text-navy-400 dark:text-slate-500">
              Een product van <span className="font-semibold text-navy-600 dark:text-slate-300">Consultium</span>
            </p>
          </div>

          {/* Navigatie + socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 dark:text-slate-500 mb-4">
              Navigatie
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigatie">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-navy-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <a
              href="https://www.instagram.com/smartiumcasusjes/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-navy-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Smartium op Instagram"
            >
              <Instagram className="w-5 h-5" />
              @smartiumcasusjes
            </a>
          </div>

          {/* Bedrijfsgegevens */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 dark:text-slate-500 mb-4">
              Contact
            </p>
            <address className="not-italic text-sm text-navy-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <p>Westerstraat 10</p>
              <p>3016DH Rotterdam</p>
              <p>Nederland</p>
              <p>
              </p>
              <a href="tel:0103603123" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                  010 360 3123
                </a>
                <p><a href="mailto:SmartiumSupport@gmail.com" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                  SmartiumSupport@gmail.com</a>
              </p>
            </address>
            <div className="mt-4 text-xs text-navy-400 dark:text-slate-500 space-y-0.5">
              <p>KVK: 96716606</p>
              <p>BTW: NL005227750B76</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-700/35 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-navy-400 dark:text-slate-500/90 tracking-wide">
            &copy; 2026 Smartium
          </p>
          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-navy-500 dark:text-slate-400"
            aria-label="Privacy en juridische documenten"
          >
            {legalDocs.map((doc, i) => (
              <span key={doc.file} className="inline-flex items-center gap-x-2">
                {i > 0 && (
                  <span className="text-navy-300 dark:text-slate-600 select-none" aria-hidden>
                    &middot;
                  </span>
                )}
                <a
                  href={`${import.meta.env.BASE_URL}legal/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy-900 dark:hover:text-white underline-offset-2 hover:underline transition-colors"
                >
                  {doc.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
