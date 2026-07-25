// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module copd
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
import SectDefinitieEnEpidemiologie from './sections/SectDefinitieEnEpidemiologie'
import SectVanDefinitieNaarPathofysiologie from './sections/SectVanDefinitieNaarPathofysiologie'
import SectSymptomenEnDiagnose from './sections/SectSymptomenEnDiagnose'
import SectPrognoseEnSystemischeEffecten from './sections/SectPrognoseEnSystemischeEffecten'
import SectBehandeling from './sections/SectBehandeling'
import SectAcuteExacerbatieCopd from './sections/SectAcuteExacerbatieCopd'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Definitie en epidemiologie", icon: FileText },
    { id: 'sect-03', title: "Van definitie naar pathofysiologie", icon: Layers },
    { id: 'sect-04', title: "Symptomen en diagnose", icon: FileText },
    { id: 'sect-05', title: "Prognose en systemische effecten", icon: FileText },
    { id: 'sect-06', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-07', title: "Acute exacerbatie COPD", icon: FileText },
    { id: 'sect-08', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek3CopdSummary = () => (
  <SummaryLayout
    title="COPD"
    description="COPD staat voor Chronic Obstructive Pulmonary Disease. Het is een veelvoorkomende, chronische longaandoening met een hoge ziektelast en sterfte. COPD is wereldwijd een belangrijke doodsoorzaak en komt steeds vaker voor, onder andere…"
    caseLabel="Week 3 · COPD"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDefinitieEnEpidemiologie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectVanDefinitieNaarPathofysiologie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSymptomenEnDiagnose />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectPrognoseEnSystemischeEffecten />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAcuteExacerbatieCopd />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek3CopdSummary
