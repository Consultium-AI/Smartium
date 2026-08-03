// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module circulatie-van-de-longen
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
import SectDeTweeCirculatiesInDeLongen from './sections/SectDeTweeCirculatiesInDeLongen'
import SectDeBronchialeCirculatie from './sections/SectDeBronchialeCirculatie'
import SectDePulmonaleCirculatie from './sections/SectDePulmonaleCirculatie'
import SectDeRouteVanHetBloedDoorHetHartEnDeLon from './sections/SectDeRouteVanHetBloedDoorHetHartEnDeLon'
import SectPulmonaleEnBronchialeCirculatieNietH from './sections/SectPulmonaleEnBronchialeCirculatieNietH'
import SectDeFysiologischeShunt from './sections/SectDeFysiologischeShunt'
import SectBelangrijkeBegrippenOmTeOnthouden from './sections/SectBelangrijkeBegrippenOmTeOnthouden'
import SectSamenvattendBeeld from './sections/SectSamenvattendBeeld'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "De twee circulaties in de longen", icon: FileText },
    { id: 'sect-03', title: "De bronchiale circulatie", icon: FileText },
    { id: 'sect-04', title: "De pulmonale circulatie", icon: FileText },
    { id: 'sect-05', title: "De route van het bloed door het hart en de longen", icon: FileText },
    { id: 'sect-06', title: "Pulmonale en bronchiale circulatie: niet hetzelfde", icon: FileText },
    { id: 'sect-07', title: "De fysiologische shunt", icon: Layers },
    { id: 'sect-08', title: "Belangrijke begrippen om te onthouden", icon: FileText },
    { id: 'sect-09', title: "Samenvattend beeld", icon: FileText },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week4Casus8CirculatieVanDeLongenSummary = () => (
  <SummaryLayout
    title="Circulatie van de longen"
    description="De longen hebben twee verschillende bloedvoorzieningen, en die hebben elk een eigen taak. Dat is belangrijk om goed uit elkaar te houden, want ze lijken op elkaar maar doen iets anders."
    caseLabel="Week 4 · Casus 8: Pijn en benauwd"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDeTweeCirculatiesInDeLongen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDeBronchialeCirculatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectDePulmonaleCirculatie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDeRouteVanHetBloedDoorHetHartEnDeLon />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectPulmonaleEnBronchialeCirculatieNietH />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectDeFysiologischeShunt />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectBelangrijkeBegrippenOmTeOnthouden />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvattendBeeld />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week4Casus8CirculatieVanDeLongenSummary
