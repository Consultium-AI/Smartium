// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module klinische-chemie-in-de-praktijk
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
import SectKlinischeChemieInDePraktijk from './sections/SectKlinischeChemieInDePraktijk'
import SectSerumEnPlasma from './sections/SectSerumEnPlasma'
import SectJuistheidEnPrecisie from './sections/SectJuistheidEnPrecisie'
import SectInterferentiesStorendeFactorenBijLab from './sections/SectInterferentiesStorendeFactorenBijLab'
import SectSensitiviteitEnSpecificiteit from './sections/SectSensitiviteitEnSpecificiteit'
import SectLevermarkers from './sections/SectLevermarkers'
import SectPancreasmarkers from './sections/SectPancreasmarkers'
import SectNierfunctieEnNiermarkers from './sections/SectNierfunctieEnNiermarkers'
import SectKlinischeBetekenisVanLaboratoriumond from './sections/SectKlinischeBetekenisVanLaboratoriumond'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Klinische chemie in de praktijk", icon: FileText },
    { id: 'sect-03', title: "Serum en plasma", icon: FileText },
    { id: 'sect-04', title: "Juistheid en precisie", icon: FileText },
    { id: 'sect-05', title: "Interferenties: storende factoren bij laboratoriumonderzoek", icon: Microscope },
    { id: 'sect-06', title: "Sensitiviteit en specificiteit", icon: FileText },
    { id: 'sect-07', title: "Levermarkers", icon: FileText },
    { id: 'sect-08', title: "Pancreasmarkers", icon: FileText },
    { id: 'sect-09', title: "Nierfunctie en niermarkers", icon: FileText },
    { id: 'sect-10', title: "Klinische betekenis van laboratoriumonderzoek", icon: Microscope },
    { id: 'sect-11', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek4KlinischeChemieInDePraktijkSummary = () => (
  <SummaryLayout
    title="Klinische chemie in de praktijk"
    description="Klinische chemie gaat over het meten van biomarkers in lichaamsvloeistoffen, meestal in bloed, urine of soms andere materialen. Een biomarker is een meetbare stof die iets kan zeggen over gezondheid of ziekte. Door zulke stoffen te…"
    caseLabel="Week 4 · Klinische chemie in de praktijk"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectKlinischeChemieInDePraktijk />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectSerumEnPlasma />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectJuistheidEnPrecisie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectInterferentiesStorendeFactorenBijLab />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectSensitiviteitEnSpecificiteit />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectLevermarkers />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectPancreasmarkers />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectNierfunctieEnNiermarkers />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectKlinischeBetekenisVanLaboratoriumond />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek4KlinischeChemieInDePraktijkSummary
