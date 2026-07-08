// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module kinderinfectieziekten-en-immunologie
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
import SectKoortsBijKinderen from './sections/SectKoortsBijKinderen'
import SectAcuutZiekKindSepsisEnMeningitis from './sections/SectAcuutZiekKindSepsisEnMeningitis'
import SectRijksvaccinatieprogramma from './sections/SectRijksvaccinatieprogramma'
import SectEmpirischeBehandelingMetAntibiotica from './sections/SectEmpirischeBehandelingMetAntibiotica'
import SectRecidiverendeLuchtweginfecties from './sections/SectRecidiverendeLuchtweginfecties'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Koorts bij kinderen", icon: FileText },
    { id: 'sect-03', title: "Acuut ziek kind: sepsis en meningitis", icon: FileText },
    { id: 'sect-04', title: "Rijksvaccinatieprogramma", icon: FileText },
    { id: 'sect-05', title: "Empirische behandeling met antibiotica", icon: HeartPulse },
    { id: 'sect-06', title: "Recidiverende luchtweginfecties", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek4KinderinfectieziektenEnImmunologieSummary = () => (
  <SummaryLayout
    title="Kinderinfectieziekten en immunologie"
    description="Na het doorlopen van deze stof kun je verschijnselen passend bij het normale kraambed herkennen en benoemen, en kun je de etiologie, symptomen, diagnostiek, behandeling en prognose van enkele veelvoorkomende pathologie van het kraambed…"
    caseLabel="Week 4 · Kinderinfectieziekten en immunologie"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectKoortsBijKinderen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectAcuutZiekKindSepsisEnMeningitis />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectRijksvaccinatieprogramma />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectEmpirischeBehandelingMetAntibiotica />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectRecidiverendeLuchtweginfecties />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek4KinderinfectieziektenEnImmunologieSummary
