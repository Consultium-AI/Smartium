// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module diabetes-typen-behandeling-keto-acidose
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
import SectWatIsDiabetesMellitus from './sections/SectWatIsDiabetesMellitus'
import SectNormaleGlucoseregulatie from './sections/SectNormaleGlucoseregulatie'
import SectDiabetesType1 from './sections/SectDiabetesType1'
import SectDiabetesType2 from './sections/SectDiabetesType2'
import SectAcuteOntregelingen from './sections/SectAcuteOntregelingen'
import SectHypoglykemie from './sections/SectHypoglykemie'
import SectLangeTermijnComplicaties from './sections/SectLangeTermijnComplicaties'
import SectDiabetesGravidarum from './sections/SectDiabetesGravidarum'
import SectDiabeteszorg from './sections/SectDiabeteszorg'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is diabetes mellitus?", icon: FileText },
    { id: 'sect-03', title: "Normale glucoseregulatie", icon: FileText },
    { id: 'sect-04', title: "Diabetes type 1", icon: FileText },
    { id: 'sect-05', title: "Diabetes type 2", icon: FileText },
    { id: 'sect-06', title: "Acute ontregelingen", icon: FileText },
    { id: 'sect-07', title: "Hypoglykemie", icon: FileText },
    { id: 'sect-08', title: "Lange termijn complicaties", icon: FileText },
    { id: 'sect-09', title: "Diabetes gravidarum", icon: FileText },
    { id: 'sect-10', title: "Diabeteszorg", icon: FileText },
    { id: 'sect-11', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek3DiabetesTypenBehandelingKetoAcidoseSummary = () => (
  <SummaryLayout
    title="Diabetes typen, behandeling, keto-acidose"
    description="Na het bestuderen van deze stof kun je uitleggen wat diabetes mellitus is, hoe de normale glucoseregulatie werkt en wat er misgaat bij diabetes type 1 en type 2. Je kunt de belangrijkste klachten, diagnostische criteria en…"
    caseLabel="Week 3 · Diabetes typen, behandeling, keto-acidose"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsDiabetesMellitus />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectNormaleGlucoseregulatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectDiabetesType1 />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDiabetesType2 />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectAcuteOntregelingen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHypoglykemie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectLangeTermijnComplicaties />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectDiabetesGravidarum />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectDiabeteszorg />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek3DiabetesTypenBehandelingKetoAcidoseSummary
