// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module zwangerschapsaandoeningen-buikpijn-en-forse-toename-buikomvang
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
import SectBuikpijnInDeZwangerschap from './sections/SectBuikpijnInDeZwangerschap'
import SectMijnBuikGroeitZoSnelObesitasEnDiabet from './sections/SectMijnBuikGroeitZoSnelObesitasEnDiabet'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Buikpijn in de zwangerschap", icon: FileText },
    { id: 'sect-03', title: "Mijn buik groeit zo snel: obesitas en diabetes in de zwangerschap", icon: FileText },
    { id: 'sect-04', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2ZwangerschapsaandoeningenBuikpijnEnForseToenameBuikomvangSummary = () => (
  <SummaryLayout
    title="Zwangerschapsaandoeningen - Buikpijn en forse toename buikomvang"
    description="Na het bestuderen van deze stof kun je zwangerschapsaandoeningen herkennen, de juiste diagnostiek inzetten en een passend behandelplan opstellen. Je kunt een zwangere ook uitleggen wat de gevolgen van deze aandoeningen kunnen zijn voor…"
    caseLabel="Week 2 · Zwangerschapsaandoeningen - Buikpijn en forse toename buikomvang"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectBuikpijnInDeZwangerschap />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectMijnBuikGroeitZoSnelObesitasEnDiabet />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2ZwangerschapsaandoeningenBuikpijnEnForseToenameBuikomvangSummary
