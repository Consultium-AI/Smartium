// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module cyclusstoornissen
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
import SectInleidingWatZijnCyclusstoornissen from './sections/SectInleidingWatZijnCyclusstoornissen'
import SectBegrippenEnDefinities from './sections/SectBegrippenEnDefinities'
import SectCyclusanamneseDeBasisVanHetOnderzoek from './sections/SectCyclusanamneseDeBasisVanHetOnderzoek'
import SectLichamelijkOnderzoek from './sections/SectLichamelijkOnderzoek'
import SectDifferentiaaldiagnoseHormonaleEnAnat from './sections/SectDifferentiaaldiagnoseHormonaleEnAnat'
import SectDiagnostiek from './sections/SectDiagnostiek'
import SectVoorbeeldVanDiagnostiekWho3EnPoi from './sections/SectVoorbeeldVanDiagnostiekWho3EnPoi'
import SectBehandeling from './sections/SectBehandeling'
import SectHormoonsubstitutietherapie from './sections/SectHormoonsubstitutietherapie'
import SectLeefstijlEnAlgemeneZorg from './sections/SectLeefstijlEnAlgemeneZorg'
import SectPsychosocialeGevolgen from './sections/SectPsychosocialeGevolgen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Inleiding: wat zijn cyclusstoornissen?", icon: FileText },
    { id: 'sect-03', title: "Begrippen en definities", icon: FileText },
    { id: 'sect-04', title: "Cyclusanamnese: de basis van het onderzoek", icon: Microscope },
    { id: 'sect-05', title: "Lichamelijk onderzoek", icon: Microscope },
    { id: 'sect-06', title: "Differentiaaldiagnose: hormonale en anatomische oorzaken", icon: Layers },
    { id: 'sect-07', title: "Diagnostiek", icon: Microscope },
    { id: 'sect-08', title: "Voorbeeld van diagnostiek: WHO3 en POI", icon: Microscope },
    { id: 'sect-09', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-10', title: "Hormoonsubstitutietherapie", icon: HeartPulse },
    { id: 'sect-11', title: "Leefstijl en algemene zorg", icon: FileText },
    { id: 'sect-12', title: "Psychosociale gevolgen", icon: FileText },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1CyclusstoornissenSummary = () => (
  <SummaryLayout
    title="Cyclusstoornissen"
    description="Inleiding: wat zijn cyclusstoornissen?"
    caseLabel="Week 1 · Cyclusstoornissen"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectInleidingWatZijnCyclusstoornissen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectBegrippenEnDefinities />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectCyclusanamneseDeBasisVanHetOnderzoek />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoek />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDifferentiaaldiagnoseHormonaleEnAnat />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectDiagnostiek />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectVoorbeeldVanDiagnostiekWho3EnPoi />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectHormoonsubstitutietherapie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectLeefstijlEnAlgemeneZorg />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectPsychosocialeGevolgen />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1CyclusstoornissenSummary
