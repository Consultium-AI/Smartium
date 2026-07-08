// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module nls-newborn-life-support
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
import SectDeOpvangVanDePasgeboreneEerstGoedVoo from './sections/SectDeOpvangVanDePasgeboreneEerstGoedVoo'
import SectHetNlsAlgoritmeDeVolgordeVanHandelen from './sections/SectHetNlsAlgoritmeDeVolgordeVanHandelen'
import SectHypothermieVoorkomen from './sections/SectHypothermieVoorkomen'
import SectDeEersteLuchtwegstapAirway from './sections/SectDeEersteLuchtwegstapAirway'
import SectBreathingBeademenEnVentileren from './sections/SectBreathingBeademenEnVentileren'
import SectCirculationThoraxcompressies from './sections/SectCirculationThoraxcompressies'
import SectMedicatieEnEvaluatie from './sections/SectMedicatieEnEvaluatie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "De opvang van de pasgeborene: eerst goed voorbereiden", icon: FileText },
    { id: 'sect-03', title: "Het NLS-algoritme: de volgorde van handelen", icon: FileText },
    { id: 'sect-04', title: "Hypothermie voorkomen", icon: FileText },
    { id: 'sect-05', title: "De eerste luchtwegstap: Airway", icon: FileText },
    { id: 'sect-06', title: "Breathing: beademen en ventileren", icon: FileText },
    { id: 'sect-07', title: "Circulation: thoraxcompressies", icon: FileText },
    { id: 'sect-08', title: "Medicatie en evaluatie", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek3NlsNewbornLifeSupportSummary = () => (
  <SummaryLayout
    title="NLS Newborn Life Support"
    description="Na het doornemen van deze stof kun je de stappen van het NLS-algoritme uitvoeren bij de opvang en reanimatie van de pasgeborene. Daarbij hoort dat je weet hoe je een pasgeborene goed voorbereidt, hoe je de luchtweg opent, wanneer en hoe…"
    caseLabel="Week 3 · NLS Newborn Life Support"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDeOpvangVanDePasgeboreneEerstGoedVoo />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHetNlsAlgoritmeDeVolgordeVanHandelen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHypothermieVoorkomen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDeEersteLuchtwegstapAirway />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBreathingBeademenEnVentileren />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectCirculationThoraxcompressies />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectMedicatieEnEvaluatie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek3NlsNewbornLifeSupportSummary
