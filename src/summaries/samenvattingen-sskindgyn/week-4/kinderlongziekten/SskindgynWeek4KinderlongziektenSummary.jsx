// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module kinderlongziekten
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
import SectHetAcuutBenauwdeKind from './sections/SectHetAcuutBenauwdeKind'
import SectBeoordelingVanDeAdemhaling from './sections/SectBeoordelingVanDeAdemhaling'
import SectNormaleVitaleParametersPerLeeftijd from './sections/SectNormaleVitaleParametersPerLeeftijd'
import SectLuchtwegobstructieHoogOfLaag from './sections/SectLuchtwegobstructieHoogOfLaag'
import SectLonggeluiden from './sections/SectLonggeluiden'
import SectBronchiolitis from './sections/SectBronchiolitis'
import SectLaryngitisSubglottica from './sections/SectLaryngitisSubglottica'
import SectWestleyCroupScore from './sections/SectWestleyCroupScore'
import SectAstmaViraalPiepenEnInhalatietherapie from './sections/SectAstmaViraalPiepenEnInhalatietherapie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Het acuut benauwde kind", icon: FileText },
    { id: 'sect-03', title: "Beoordeling van de ademhaling", icon: FileText },
    { id: 'sect-04', title: "Normale vitale parameters per leeftijd", icon: FileText },
    { id: 'sect-05', title: "Luchtwegobstructie: hoog of laag?", icon: FileText },
    { id: 'sect-06', title: "Longgeluiden", icon: FileText },
    { id: 'sect-07', title: "Bronchiolitis", icon: FileText },
    { id: 'sect-08', title: "Laryngitis subglottica", icon: FileText },
    { id: 'sect-09', title: "Westley-Croup-score", icon: FileText },
    { id: 'sect-10', title: "Astma, viraal piepen en inhalatietherapie", icon: HeartPulse },
    { id: 'sect-11', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek4KinderlongziektenSummary = () => (
  <SummaryLayout
    title="Kinderlongziekten"
    description="Luchtweg- en longaandoeningen komen bij kinderen vaak voor. Vooral jonge kinderen krijgen er veel mee te maken, en deze aandoeningen behoren tot de meest voorkomende redenen voor een bezoek aan de spoedeisende hulp of opname op de…"
    caseLabel="Week 4 · Kinderlongziekten"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHetAcuutBenauwdeKind />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectBeoordelingVanDeAdemhaling />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectNormaleVitaleParametersPerLeeftijd />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectLuchtwegobstructieHoogOfLaag />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectLonggeluiden />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBronchiolitis />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectLaryngitisSubglottica />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectWestleyCroupScore />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectAstmaViraalPiepenEnInhalatietherapie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek4KinderlongziektenSummary
