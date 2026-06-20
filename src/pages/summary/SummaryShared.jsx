import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../../components/Navbar'
import SummaryAiAssistant from '../../components/SummaryAiAssistant'
import { useAccess } from '../../hooks/useAccess'
import { VariantSwitchProvider } from '../../components/SummaryLayout'
import { lmeMap } from '../../data/lmeIndex'
import { BLOK5_SUMMARY_MODULE_IDS } from '../../data/blok5SummaryModuleIds.js'

const SUMMARY_ORDER_PREFIX = [
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
  'lme5-schimmelinfecties',
  'lme6-voorbereiding-vow-milt',
  'lme1-parasitaire-verwekkers-gastro-enteritis',
  'lme2-virale-verwekkers-gastro-enteritis',
  'lme3-welk-antibioticum-kies-ik',
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

const SUMMARY_ORDER_SUFFIX = [
  'blok9-week1-casus1-acute-nierschade',
  'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten',
  'blok9-week1-casus1-glomerulaire-nierziekten',
  'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten',
  'blok9-week1-casus1-acute-nierschade-verdieping',
  'blok9-week1-casus2-chronische-nierschade',
  'blok9-week1-casus2-niertransplantatie',
  'blok9-week1-casus2-dialyse',
  'blok9-week1-casus2-chronische-nierschade-verdieping',
  'blok9-week1-casus2-nierfunctievervangende-therapie',
  'blok9-week1-casus2-ethiek-van-orgaantransplantatie',
  'blok9-week2-casus3-klinische-stoornissen-water-en-volume-balans',
  'blok9-week2-casus3-klinische-stoornissen-kaliumbalans',
  'blok9-week2-casus3-klinische-stoornissen-zuur-basebalans',
  'blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping',
  'blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping',
  'blok9-week2-casus4-perifeer-arterieel-vaatlijden',
  'blok9-week2-casus4-diabetische-voet',
  'blok9-week2-casus4-dilaterend-vaatlijden',
  'blok9-week2-casus4-mdr-juridische-aspecten-medische-tools',
  'blok9-week2-casus4-preoperatieve-screening',
  'blok9-week2-casus4-ct-scans-beoordelen-vow-toegepaste-anatomie',
  'blok9-week3-casus5-hypertensie',
  'blok9-week3-casus5-secundaire-hypertensie',
  'blok9-week3-casus5-hypertensief-spoedgeval',
  'blok9-week3-casus5-farmacogenetica',
  'blok9-week3-casus5-ai-act',
  'blok9-week3-casus6-cvrm',
  'blok9-week4-casus7-pneumonie-epidemiologie-verwekkers-behandeling',
  'blok9-week4-casus7-pathofysiologie-kliniek-diagnostiek-pneumonie',
  'blok9-week4-casus7-klinisch-redeneren-respiratoire-insufficiëntie',
  'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie',
  'blok9-week4-casus8-toxidromen',
  'blok9-week4-casus8-shock',
  'blok9-week4-casus8-herkennen-gedecompenseerde-circulatie-en-alarmsymptomen',
  'blok9-week4-casus8-passende-zorg-op-de-intensive-care',
  'blok9-week4-casus8-lineare-regressielijn',
  'blok9-week5-casus9-longkanker',
  'blok9-week5-casus9-pleuravocht',
  'blok9-week5-casus9-voorbereiding-ct-en-pet-ct',
  'blok9-week5-casus9-voorbereiding-pathologie-longkanker',
  'blok9-week5-casus10-basis-analyse-ecg',
  'blok9-week5-casus10-atriumfibrilleren',
  'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices',
  'blok9-week5-casus10-tachyaritmie',
  'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren',
  'blok9-week5-casus10-syncope',
  'blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties',
  'blok9-week5-casus10-ritmestoornissen-bij-kinderen',
  'blok10-week1-casus1-maagklachten-endoscopie-basis-en-bloedingen',
  'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur',
  'blok10-week1-casus1-maagklachten-leefstijl-bij-reflux',
  'blok10-week1-casus1-maagklachten-logistische-regressie-analyse',
  'blok10-week1-casus1-maagklachten-reflux-bij-kinderen',
  'blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori',
  'blok10-week1-casus1-maagklachten-lmv-h-pylori-zorgkosten-vanuit-een-bacterie',
  'blok10-week1-casus1-maagklachten-lmv-ppi',
  'blok10-week1-casus2-passageklachten-lme-pre-maligne-bovenste-tractus-digestivus',
  'blok10-week1-casus2-passageklachten-lme-chemoradiatie',
  'blok10-week1-casus2-passageklachten-lme-kindergerelateerde-ziekten',
  'blok10-week1-casus2-passageklachten-lme-motiliteit-van-de-bovenste-tractus-digestivus',
  'blok10-week1-casus2-passageklachten-lmv-chirurgische-behandeling-van-aandoeningen-aan-de-bovenste-tractus-digestivus',
  'blok10-week2-casus-c03-rectaal-bloedverlies-acute-buik-en-acute-buikpijn',
  'blok10-week2-casus-c03-rectaal-bloedverlies-lmo-zelfstudie-differentiaal-diagnose-van-acute-buikpijn',
  'blok10-week2-casus-c03-rectaal-bloedverlies-bevolkingsonderzoek-darmkanker',
  'blok10-week2-casus-c03-rectaal-bloedverlies-colorectaalcarcinoom',
  'blok10-week2-casus-c03-rectaal-bloedverlies-endoscopische-resectietechnieken',
  'blok10-week2-casus-c03-rectaal-bloedverlies-erfelijke-darmkanker',
  'blok10-week2-casus-c03-rectaal-bloedverlies-rectaal-bloedverlies',
  'blok10-week2-casus-c03-rectaal-bloedverlies-lmo-basis-oncologische-chirurgie-coloncarcinoom',
  'blok10-week2-casus-c03-rectaal-bloedverlies-lmv-prehabilitatie-voor-een-operatie',
  'blok10-week2-casus-c04-diarree-aanhoudende-buikklachten',
  'blok10-week2-casus-c04-diarree-malabsorptie',
  'blok10-week2-casus-c04-diarree-morbus-crohn',
  'blok10-week2-casus-c04-diarree-vertering-en-opname',
  'blok10-week2-casus-c04-diarree-microscopische-anatomie-van-maag-tot-anus',
  'blok10-week2-casus-c04-diarree-lmo-rome-iv-c-bowel-disorders',
  'blok10-week3-casus-c05-chronische-pancreatitis-pancreasfysiologie',
  'blok10-week3-casus-c05-chronische-pancreatitis-acute-en-chronische-pancreatitis',
  'blok10-week3-casus-c05-chronische-pancreatitis-advanced-endoscopie-eus-ercp',
  'blok10-week3-casus-c05-chronische-pancreatitis-dieet-pancreatitis-pancreasenzymen',
  'blok10-week3-casus-c05-chronische-pancreatitis-pancreascarcinoom',
  'blok10-week3-casus-c05-chronische-pancreatitis-microscopische-anatomie-pancreas',
  'blok10-week3-casus-c05-chronische-pancreatitis-lmo-evaluatie-patient-met-buikpijn',
  'blok10-week3-casus-c05-chronische-pancreatitis-lmo-gestuurde-zelfstudie-overzichtsartikel',
  'blok10-week3-casus-c05-chronische-pancreatitis-lmo-pitch-patient-met-chronische-pancreatitis',
  'blok10-week3-casus-c06-dm-type1-symptomen-pathofysiologie-diagnostiek-dm1',
  'blok10-week3-casus-c06-dm-type1-acute-ontregelingen-dm1',
  'blok10-week3-casus-c06-dm-type1-lmo-endocriene-regulatie-kh-vet-en-eiwitstofwisseling',
  'blok10-week3-casus-c06-dm-type1-lmo-exogene-insulines',
  'blok10-week3-casus-c06-dm-type1-lmo-regulatie-van-metabolisme-enzymkinetiek',
  'blok10-week4-casus-c07-leververvetting-vetvertering-enterohepatische-cyclus',
  'blok10-week4-casus-c07-leververvetting-de-lever-als-fabriek',
  'blok10-week4-casus-c07-leververvetting-sld-en-masld',
  'blok10-week4-casus-c07-leververvetting-autoimmuun-gemedieerde-leverziekten',
  'blok10-week4-casus-c07-leververvetting-abcde-virale-hepatitis',
  'blok10-week4-casus-c07-leververvetting-lmo-consult-een-brede-blik-2-voorbereiding-klv-2-29',
  'blok10-week4-casus-c07-leververvetting-lmo-literatuur-over-leverfibrose',
  'blok10-week4-casus-c08-levercirrose-endoscopie-basis-en-bloedingen',
  'blok10-week4-casus-c08-levercirrose-levercirrose-en-complicaties',
  'blok10-week4-casus-c08-levercirrose-lmv-hcc',
  'blok10-week4-casus-c08-levercirrose-lmv-levertransplantatie',
  // 'blok10-week5-casus-c09-obesitas-chirurgische-obesitasbehandelingen' (LME 38) en
  // 'blok10-week5-casus-c09-obesitas-elke-arts-behandelt-obesitas' (LME 39) tijdelijk
  // verborgen: nog geen ingevuld bronmateriaal (alleen placeholder-samenvattingen).
  'blok10-week5-casus-c09-obesitas-lichaamsbeweging',
  'blok10-week5-casus-c09-obesitas-lmo-medicamenteuze-obesitasbehandelingen',
  'blok10-week5-casus-c09-obesitas-lmo-niet-medicamenteuze-obesitasbehandelingen',
  'blok10-week5-casus-c09-obesitas-lmo-nutritional-assessment',
  'blok10-week5-casus-c09-obesitas-lmv-leven-met-obesitas',
  'blok10-week5-casus-c10-dm-type2-symptomen-pathofysiologie-diagnostiek-dm2',
  'blok10-week5-casus-c10-dm-type2-langetermijn-complicaties-diabetes',
  'blok10-week5-casus-c10-dm-type2-leefstijl-voeding-preventie-dm2',
  // 'blok10-week5-casus-c10-dm-type2-lipiden-lipoproteinen-metabole-dysregulatie' (LME 44)
  // tijdelijk verborgen: nog geen ingevuld bronmateriaal (alleen placeholder-samenvatting).
  'blok10-week5-casus-c10-dm-type2-remissie-van-diabetes',
  'blok10-week5-casus-c10-dm-type2-lmo-medicamenteuze-behandeling-van-diabetes-type-2',
  'blok10-cooked-samenvatting-hele-blok',
  'blok10-stampfeitjes-hele-blok',
]

export const SUMMARY_ORDER = [
  ...SUMMARY_ORDER_PREFIX,
  ...BLOK5_SUMMARY_MODULE_IDS,
  ...SUMMARY_ORDER_SUFFIX,
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
      className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Vorige samenvatting
              </Link>
            ) : <span />}

            {nextLme ? (
              <Link
                to={`/summary?lme=${nextLme}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors"
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

export const SummaryLayout = ({ lmeId, lmeName, activeLmeId, onVariantSwitch, children }) => {
  const { hasAccess, plan, loading } = useAccess()
  const hasPaidAccess = !loading && hasAccess && plan !== 'free'
  const currentLme = activeLmeId || lmeId
  const prefersMini = typeof currentLme === 'string' && currentLme.endsWith('-mini')
  const fallbackBaseLme = prefersMini ? currentLme.replace(/-mini$/, '') : null
  const orderAnchorLme = SUMMARY_ORDER.includes(currentLme) ? currentLme : fallbackBaseLme
  const currentIndex = orderAnchorLme ? SUMMARY_ORDER.indexOf(orderAnchorLme) : -1

  const resolveTargetId = (baseCandidate) => {
    if (!baseCandidate) return null
    if (prefersMini) {
      const miniCandidate = `${baseCandidate}-mini`
      if (lmeMap[miniCandidate]) return miniCandidate
    }
    return baseCandidate
  }

  const prevLme = currentIndex > 0 ? resolveTargetId(SUMMARY_ORDER[currentIndex - 1]) : null
  const nextLme = currentIndex >= 0 && currentIndex < SUMMARY_ORDER.length - 1
    ? resolveTargetId(SUMMARY_ORDER[currentIndex + 1])
    : null

  const moduleNavButtons = (position = 'top') => (
    (prevLme || nextLme) ? (
      <div className={position === 'top' ? 'flex items-center gap-2' : 'mt-6 flex items-center justify-end gap-2'}>
        {prevLme ? (
          <Link
            to={`/summary?lme=${prevLme}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Vorige module
          </Link>
        ) : null}
        {nextLme ? (
          <Link
            to={`/summary?lme=${nextLme}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors text-sm"
          >
            Volgende module
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : null}
      </div>
    ) : null
  )

  const inner = (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <Header />
      <main className="container-custom py-8 md:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/summary"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Terug naar overzicht</span>
          </Link>
          {moduleNavButtons('top')}
        </div>
        <SummaryAiAssistant lmeId={lmeId} lmeName={lmeName} hasPaidAccess={hasPaidAccess}>
          {children}
        </SummaryAiAssistant>
        {moduleNavButtons('bottom')}
      </main>
      <Footer />
    </div>
  )

  if (onVariantSwitch) {
    return (
      <VariantSwitchProvider activeLmeId={activeLmeId} onSwitch={onVariantSwitch}>
        {inner}
      </VariantSwitchProvider>
    )
  }

  return inner
}
