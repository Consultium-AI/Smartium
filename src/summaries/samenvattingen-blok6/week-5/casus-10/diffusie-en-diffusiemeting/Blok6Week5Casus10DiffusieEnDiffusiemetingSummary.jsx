// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module diffusie-en-diffusiemeting
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
import SectGaswisselingInDeLongVentilatieDiffus from './sections/SectGaswisselingInDeLongVentilatieDiffus'
import SectDeWetVanFick from './sections/SectDeWetVanFick'
import SectWaaromKoolmonoxideWordtGebruikt from './sections/SectWaaromKoolmonoxideWordtGebruikt'
import SectHoeDeDlcoWordtGemeten from './sections/SectHoeDeDlcoWordtGemeten'
import SectInterpretatieVanDlcoVaEnKco from './sections/SectInterpretatieVanDlcoVaEnKco'
import SectFactorenDieDlcoBeNvloeden from './sections/SectFactorenDieDlcoBeNvloeden'
import SectKlinischeBetekenis from './sections/SectKlinischeBetekenis'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Gaswisseling in de long: ventilatie, diffusie en perfusie", icon: FileText },
    { id: 'sect-03', title: "De wet van Fick", icon: FileText },
    { id: 'sect-04', title: "Waarom koolmonoxide wordt gebruikt", icon: FileText },
    { id: 'sect-05', title: "Hoe de DLCO wordt gemeten", icon: FileText },
    { id: 'sect-06', title: "Interpretatie van DLCO, VA en KCO", icon: FileText },
    { id: 'sect-07', title: "Factoren die DLCO beïnvloeden", icon: FileText },
    { id: 'sect-08', title: "Klinische betekenis", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week5Casus10DiffusieEnDiffusiemetingSummary = () => (
  <SummaryLayout
    title="Diffusie en diffusiemeting"
    description="Na het bestuderen van deze stof kun je uitleggen hoe gaswisseling in de long verloopt, hoe diffusie wordt beschreven met de wet van Fick, waarom bij diffusietesten koolmonoxide wordt gebruikt, hoe de diffusiecapaciteit van de long wordt…"
    caseLabel="Week 5 · Casus 10: Kortademigheid bij inspanning"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectGaswisselingInDeLongVentilatieDiffus />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDeWetVanFick />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectWaaromKoolmonoxideWordtGebruikt />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectHoeDeDlcoWordtGemeten />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectInterpretatieVanDlcoVaEnKco />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectFactorenDieDlcoBeNvloeden />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKlinischeBetekenis />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week5Casus10DiffusieEnDiffusiemetingSummary
