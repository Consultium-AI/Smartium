// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module e-health-wearables
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
import SectWearablesVanMetenNaarInterventie from './sections/SectWearablesVanMetenNaarInterventie'
import SectDeCommerciLeMarktVanWearables from './sections/SectDeCommerciLeMarktVanWearables'
import SectValiditeitVanWearables from './sections/SectValiditeitVanWearables'
import SectFitnessTrackersEnActiviteit from './sections/SectFitnessTrackersEnActiviteit'
import SectDetectieVanAtriumfibrillerenMetWeara from './sections/SectDetectieVanAtriumfibrillerenMetWeara'
import SectSensitiviteitEnPositiefPredictieveWa from './sections/SectSensitiviteitEnPositiefPredictieveWa'
import SectKlinischeBetekenisVanAfDetectie from './sections/SectKlinischeBetekenisVanAfDetectie'
import SectKritischBeoordelenVanLiteratuur from './sections/SectKritischBeoordelenVanLiteratuur'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wearables: van meten naar interventie", icon: FileText },
    { id: 'sect-03', title: "De commerciële markt van wearables", icon: FileText },
    { id: 'sect-04', title: "Validiteit van wearables", icon: FileText },
    { id: 'sect-05', title: "Fitness-trackers en activiteit", icon: FileText },
    { id: 'sect-06', title: "Detectie van atriumfibrilleren met wearables", icon: FileText },
    { id: 'sect-07', title: "Sensitiviteit en positief predictieve waarde", icon: FileText },
    { id: 'sect-08', title: "Klinische betekenis van AF-detectie", icon: FileText },
    { id: 'sect-09', title: "Kritisch beoordelen van literatuur", icon: FileText },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week2Casus4EHealthWearablesSummary = () => (
  <SummaryLayout
    title="E-health wearables"
    description="Wearables zijn apparaten of toepassingen die je gezondheid of lichaamsfuncties continu of regelmatig kunnen volgen. Denk aan stappen tellen, hartslag meten en slaap registreren. Dat soort metingen is voor veel mensen aantrekkelijk,…"
    caseLabel="Week 2 · Casus 4: Patiënt met dikke voeten en urine-afwijkingen"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWearablesVanMetenNaarInterventie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDeCommerciLeMarktVanWearables />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectValiditeitVanWearables />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectFitnessTrackersEnActiviteit />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDetectieVanAtriumfibrillerenMetWeara />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSensitiviteitEnPositiefPredictieveWa />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKlinischeBetekenisVanAfDetectie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectKritischBeoordelenVanLiteratuur />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week2Casus4EHealthWearablesSummary
