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
  'blok5-week1-casus1-huidtypen-met-invloed-van-uva-en-uvb',
  'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid',
  'blok5-week1-casus1-externe-verstorende-factoren-op-de-huidbarriere',
  'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid',
  'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud',
  'blok5-week1-casus2-lmo-eczeem',
  'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek',
  'blok5-week1-casus2-psoriasis',
  'blok5-week1-casus2-voeding-en-inhalatieallergie',
  'blok5-week1-casus2-nadelige-reacties-van-medicatie',
  'blok5-week1-casus2-provoke',
  'blok5-week1-casus2-lmv-anafylaxie-type-i-allergie',
  'blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie',
  'blok5-week1-casus2-stm-pathogenese-type-iv-allergie',
  'blok5-week2-casus3-begripsbepaling-dermatologische-uitingen',
  'blok5-week2-casus3-hemostase-basis',
  'blok5-week2-casus3-aangeboren-stollingsstoornissen',
  'blok5-week2-casus3-vasculitis-klein-middel-groot',
  'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie',
  'blok5-week2-casus4-goedaardige-en-kwaadaardige-huidafwijkingen',
  'blok5-week2-casus4-melanoom-gelokaliseerd',
  'blok5-week2-casus4-sentinel-node',
  'blok5-week2-casus4-immuuntherapie-van-kanker',
  'blok5-week2-casus4-systemische-therapie-van-melanoom',
  'blok5-week2-casus4-chronische-ontsteking',
  'blok5-week2-casus4-mri-en-pet-scan-benignemaligne',
  'blok5-week3-casus5-lmo-verdachte-huidafwijkingen',
  'blok5-week3-casus5-huidtumoren-benigne-en-premaligne',
  'blok5-week3-casus5-huidtumoren-basaalcel-en-plaveiselcelcarcinoom',
  'blok5-week3-casus5-lmo-zorgmijding',
  'blok5-week3-casus5-milieu-en-gezondheid',
  'blok5-week3-casus5-leefstijl-en-kanker',
  'blok5-week3-casus6-radiologische-diagnostiek-mammacarcinoom',
  'blok5-week3-casus6-mammapathologie',
  'blok5-week3-casus6-behandeling-van-mammacarcinoom',
  'blok5-week3-casus6-het-slechtnieuwsgesprek',
  'blok5-week3-casus6-familiair-mammacarcinoom',
  'blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom',
  'blok5-week4-casus7-flebologische-aandoeningen',
  'blok5-week4-casus7-trombose-verhoogde-stollingsneiging',
  'blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been',
  'blok5-week4-casus7-lymfadenopathie',
  'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten',
  'blok5-week4-casus8-lymfeklierdissectie',
  'blok5-week4-casus8-erysipelas-en-cellulitis',
  'blok5-week4-casus8-necrotiserende-wekedeleninfectie',
  'blok5-week4-casus8-radiotherapie-in-de-praktijk',
  'blok5-week4-casus8-hydradenitis-suppurativa',
  'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24',
  'blok5-week4-casus8-volksgezondheidsindicatoren-dalys',
  'blok5-week4-casus8-introductiemodule-planetary-health',
  'blok5-week4-casus8-lmv-verworven-stollingsstoornissen',
  'blok5-week5-casus9-pathogenese-auto-immuunziekten',
  'blok5-week5-casus9-endocriene-auto-immuunziekten',
  'blok5-week5-casus9-bouw-en-functie-van-de-thymus',
  'blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie',
  'blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit',
  'blok5-week5-casus11-introductie-kinderoncologie',
  'blok5-week5-casus11-typen-kinderoncologie-bij-kinderen',
  'blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks',
  'blok5-week5-casus11-alarmsymptomen-op-de-kinderleeftijd',
  'blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd',
  'blok5-week6-casus12-gaswisseling-hb-o2-co2-co',
  'blok5-week6-casus12-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties',
  'blok5-week6-casus12-nvic-acute-vergiftiging',
  'blok5-week6-casus13-botopbouw-botafbraak-en-pathologische-breuken',
  'blok5-week6-casus13-m-proteine-diagnostiek-eiwit-als-tumormarker',
  'blok5-week6-casus13-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie',
  'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten',
  'blok5-week6-casus13-transplantatiegeneeskunde',
  'blok5-week7-casus14-dermatoloog-in-je-broekzak',
  'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie',
  'blok5-week8-casus15-scylla-en-charybdis',
  'blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem',
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
