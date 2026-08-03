// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module hematurie
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
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectHematurieWatBetekentHetEnWaaromIsHet from './sections/SectHematurieWatBetekentHetEnWaaromIsHet'
import SectDifferentiaaldiagnoseBijHematurie from './sections/SectDifferentiaaldiagnoseBijHematurie'
import SectAanvullendOnderzoekBijHematurie from './sections/SectAanvullendOnderzoekBijHematurie'
import SectBlaaskankerPresentatieEnDiagnostiek from './sections/SectBlaaskankerPresentatieEnDiagnostiek'
import SectNietSpierinvasiefEnSpierinvasiefBlaa from './sections/SectNietSpierinvasiefEnSpierinvasiefBlaa'
import SectTumorgraadEnRisicoclassificatie from './sections/SectTumorgraadEnRisicoclassificatie'
import SectBehandelingVanNietSpierinvasiefBlaas from './sections/SectBehandelingVanNietSpierinvasiefBlaas'
import SectBehandelingVanSpierinvasiefBlaaskarc from './sections/SectBehandelingVanSpierinvasiefBlaaskarc'
import SectUrineafleidingEnComplicatiesOpLangeT from './sections/SectUrineafleidingEnComplicatiesOpLangeT'
import SectPrognoseEnKlinischeRelevantie from './sections/SectPrognoseEnKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Hematurie: wat betekent het en waarom is het belangrijk?", icon: FileText },
    { id: 'sect-03', title: "Differentiaaldiagnose bij hematurie", icon: FileText },
    { id: 'sect-04', title: "Aanvullend onderzoek bij hematurie", icon: Microscope },
    { id: 'sect-05', title: "Blaaskanker: presentatie en diagnostiek", icon: Microscope },
    { id: 'sect-06', title: "Niet-spierinvasief en spierinvasief blaaskarcinoom", icon: FileText },
    { id: 'sect-07', title: "Tumorgraad en risicoclassificatie", icon: FileText },
    { id: 'sect-08', title: "Behandeling van niet-spierinvasief blaaskarcinoom", icon: HeartPulse },
    { id: 'sect-09', title: "Behandeling van spierinvasief blaaskarcinoom", icon: HeartPulse },
    { id: 'sect-10', title: "Urineafleiding en complicaties op lange termijn", icon: FileText },
    { id: 'sect-11', title: "Prognose en klinische relevantie", icon: FileText },
    { id: 'sect-12', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week2Casus4HematurieSummary = () => (
  <SummaryLayout
    title="Hematurie"
    description="4. de belangrijkste behandelingsmogelijkheden bij blaaskanker benoemen."
    caseLabel="Week 2 · Casus 4: Patiënt met dikke voeten en urine-afwijkingen"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHematurieWatBetekentHetEnWaaromIsHet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDifferentiaaldiagnoseBijHematurie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAanvullendOnderzoekBijHematurie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectBlaaskankerPresentatieEnDiagnostiek />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectNietSpierinvasiefEnSpierinvasiefBlaa />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectTumorgraadEnRisicoclassificatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectBehandelingVanNietSpierinvasiefBlaas />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectBehandelingVanSpierinvasiefBlaaskarc />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectUrineafleidingEnComplicatiesOpLangeT />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectPrognoseEnKlinischeRelevantie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week2Casus4HematurieSummary
