import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../../components/Navbar'

const SUMMARY_ORDER = [
  'embryogenese',
  'beeldvorming',
  'extraembryonaal',
  'extremiteiten',
  'aangeboren-immuniteit-herkenning',
  'introductie-bacteriologie',
  'introductie-immunologie',
  'introductie-mycologie',
  'introductie-parasitologie',
  'introductie-virologie',
  'voorbereiding-vow-microbiologie',
  'aangeboren-immuniteit-respons',
  'antibiotica-leerlijn',
  'introductie-antimicrobiele-therapie',
  'urineweginfecties',
  'infectiepreventie',
  'introductie-luchtweginfecties',
  'microscopische-anatomie-luchtwegen',
  'pathofysiologie-virale-luchtweginfecties',
  'vervolg-introductie-virologie-2',
  'virale-diagnostiek',
  'cytokinen',
  'infectieuze-oorzaken-koorts',
  'niet-infectieuze-oorzaken-koorts',
  'ontstekingsmediatoren',
  'wat-is-koorts',
  'specifieke-verwekkers-lagere-luchtweginfecties',
  'therapie-lagere-luchtweginfecties',
  'homing-migratie-recirculatie',
  'infectieuze-lymfadenopathie',
  'introductie-verworven-immuniteit',
  'secundaire-lymfoide-organen',
  'antivirale-therapie',
  'de-grote-drie-malaria',
  'duurzame-hiv-zorg',
  'immunologische-consequenties-hiv',
  'tuberculose-bij-migranten',
  'tuberculose-inleiding',
  ...Array.from({ length: 25 }, (_, i) => `lme5-schimmelinfecties-image${String(i + 1).padStart(2, '0')}`),
  ...Array.from({ length: 14 }, (_, i) => `lme6-voorbereiding-vow-milt-image${String(i + 1).padStart(2, '0')}`),
  ...Array.from({ length: 11 }, (_, i) => `lme1-parasitaire-verwekkers-gastro-enteritis-image${String(i + 1).padStart(2, '0')}`),
  ...Array.from({ length: 24 }, (_, i) => `lme2-virale-verwekkers-gastro-enteritis-image${String(i + 1).padStart(2, '0')}`),
  ...Array.from({ length: 14 }, (_, i) => `lme3-welk-antibioticum-kies-ik-image${String(i + 1).padStart(2, '0')}`),
  'casus10-lme1-dwang-en-drang-historisch-perspectief',
  'casus10-lme2-immunomodulatie',
  'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas',
  'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie',
  'casus11-lme1-leefstijl-en-immuunsysteem',
  'casus12-lme1-antibioticaresistentie-en-therapie',
  'casus12-lme2-sepsis',
  'casus12-lme3-patient-en-medicatieveiligheid',
  'casus12-lme4-zorggerelateerde-infecties',
  'casus13-lme1-antibiotica-introductie',
  'casus13-lme2-antibiotica-resistentie',
]

export const Header = () => (
  <>
    <Navbar />
    <div className="h-20" />
  </>
)

export const BackButton = () => (
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

export const Footer = () => {
  const [searchParams] = useSearchParams()
  const lme = searchParams.get('lme')
  const currentIndex = lme ? SUMMARY_ORDER.indexOf(lme) : -1
  const prevLme = currentIndex > 0 ? SUMMARY_ORDER[currentIndex - 1] : null
  const nextLme = currentIndex >= 0 && currentIndex < SUMMARY_ORDER.length - 1 ? SUMMARY_ORDER[currentIndex + 1] : null

  return (
    <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-12">
      {lme && lme !== 'index' && (prevLme || nextLme) && (
        <div className="container-custom mb-6">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
            {prevLme ? (
              <Link
                to={`/summary?lme=${prevLme}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Vorige samenvatting
              </Link>
            ) : <span />}

            {nextLme ? (
              <Link
                to={`/summary?lme=${nextLme}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
              >
                Volgende samenvatting
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : <span />}
          </div>
        </div>
      )}
      <p>© {new Date().getFullYear()} Smartium</p>
    </footer>
  )
}
