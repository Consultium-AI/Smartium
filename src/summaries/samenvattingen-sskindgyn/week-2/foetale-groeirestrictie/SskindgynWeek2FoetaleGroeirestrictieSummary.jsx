// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module foetale-groeirestrictie
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectFoetaleGroeirestrictieWatBedoelenWeE from './sections/SectFoetaleGroeirestrictieWatBedoelenWeE'
import SectOorzakenEnRisicofactoren from './sections/SectOorzakenEnRisicofactoren'
import SectHoeStelJeFgrVast from './sections/SectHoeStelJeFgrVast'
import SectPercentielenEnAfkapwaarden from './sections/SectPercentielenEnAfkapwaarden'
import SectVroegeDetectieEnBiochemischeMarkers from './sections/SectVroegeDetectieEnBiochemischeMarkers'
import SectAanvullendOnderzoekBijVerdenkingOpFg from './sections/SectAanvullendOnderzoekBijVerdenkingOpFg'
import SectInfectiesEnGenetischeAfwijkingen from './sections/SectInfectiesEnGenetischeAfwijkingen'
import SectDoppleronderzoekEnFoetaleBewaking from './sections/SectDoppleronderzoekEnFoetaleBewaking'
import SectVruchtwaterEnCtg from './sections/SectVruchtwaterEnCtg'
import SectFoetaleBeweging from './sections/SectFoetaleBeweging'
import SectBeleidBijFgrWanneerAfwachtenEnWannee from './sections/SectBeleidBijFgrWanneerAfwachtenEnWannee'
import SectPreventieBijHoogrisicopatiNten from './sections/SectPreventieBijHoogrisicopatiNten'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Foetale groeirestrictie: wat bedoelen we ermee?", icon: FileText },
    { id: 'sect-03', title: "Oorzaken en risicofactoren", icon: FileText },
    { id: 'sect-04', title: "Hoe stel je FGR vast?", icon: FileText },
    { id: 'sect-05', title: "Percentielen en afkapwaarden", icon: FileText },
    { id: 'sect-06', title: "Vroege detectie en biochemische markers", icon: FileText },
    { id: 'sect-07', title: "Aanvullend onderzoek bij verdenking op FGR", icon: Microscope },
    { id: 'sect-08', title: "Infecties en genetische afwijkingen", icon: FileText },
    { id: 'sect-09', title: "Doppleronderzoek en foetale bewaking", icon: Microscope },
    { id: 'sect-10', title: "Vruchtwater en CTG", icon: FileText },
    { id: 'sect-11', title: "Foetale beweging", icon: FileText },
    { id: 'sect-12', title: "Beleid bij FGR: wanneer afwachten en wanneer bevallen?", icon: HeartPulse },
    { id: 'sect-13', title: "Preventie bij hoogrisicopatiënten", icon: FileText },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2FoetaleGroeirestrictieSummary = () => (
  <SummaryLayout
    title="Foetale groeirestrictie"
    description="Na het doornemen van deze stof moet je begrijpen wat foetale groeirestrictie is, hoe je het onderscheid maakt met een klein kind zonder groeirestrictie, welke controles en onderzoeken zinvol zijn bij een vermoeden van groeiproblemen, en…"
    caseLabel="Week 2 · Foetale groeirestrictie"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectFoetaleGroeirestrictieWatBedoelenWeE />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOorzakenEnRisicofactoren />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHoeStelJeFgrVast />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectPercentielenEnAfkapwaarden />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectVroegeDetectieEnBiochemischeMarkers />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAanvullendOnderzoekBijVerdenkingOpFg />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectInfectiesEnGenetischeAfwijkingen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectDoppleronderzoekEnFoetaleBewaking />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectVruchtwaterEnCtg />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectFoetaleBeweging />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectBeleidBijFgrWanneerAfwachtenEnWannee />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectPreventieBijHoogrisicopatiNten />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2FoetaleGroeirestrictieSummary
