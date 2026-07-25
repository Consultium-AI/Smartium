// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module ig01-5-thoraxradiologie
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
import SectXThoraxTechniekEnUitgangspunten from './sections/SectXThoraxTechniekEnUitgangspunten'
import SectKwaliteitVanDeThoraxfoto from './sections/SectKwaliteitVanDeThoraxfoto'
import SectAnatomieOpDeXThorax from './sections/SectAnatomieOpDeXThorax'
import SectLongkwabbenEnFissuren from './sections/SectLongkwabbenEnFissuren'
import SectSystematischeBeoordelingVanDeXThorax from './sections/SectSystematischeBeoordelingVanDeXThorax'
import SectCtThoraxWindowsettings from './sections/SectCtThoraxWindowsettings'
import SectCtProtocollen from './sections/SectCtProtocollen'
import SectLongembolieprotocol from './sections/SectLongembolieprotocol'
import SectAnatomieOpCt from './sections/SectAnatomieOpCt'
import SectKlinischeRelevantie from './sections/SectKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "X-thorax: techniek en uitgangspunten", icon: FileText },
    { id: 'sect-03', title: "Kwaliteit van de thoraxfoto", icon: FileText },
    { id: 'sect-04', title: "Anatomie op de X-thorax", icon: Layers },
    { id: 'sect-05', title: "Longkwabben en fissuren", icon: FileText },
    { id: 'sect-06', title: "Systematische beoordeling van de X-thorax", icon: FileText },
    { id: 'sect-07', title: "CT-thorax: windowsettings", icon: FileText },
    { id: 'sect-08', title: "CT-protocollen", icon: FileText },
    { id: 'sect-09', title: "Longembolieprotocol", icon: FileText },
    { id: 'sect-10', title: "Anatomie op CT", icon: Layers },
    { id: 'sect-11', title: "Klinische relevantie", icon: FileText },
    { id: 'sect-12', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek1Ig015ThoraxradiologieSummary = () => (
  <SummaryLayout
    title="IG01.5 Thoraxradiologie"
    description="Na deze module moet je de basisprincipes van de X-thorax en CT-thorax begrijpen, de normale thoraxanatomie op radiologische beelden kunnen herkennen en een thoraxfoto systematisch kunnen beoordelen. Ook moet je weten hoe verschillende…"
    caseLabel="Week 1 · IG01.5 Thoraxradiologie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectXThoraxTechniekEnUitgangspunten />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectKwaliteitVanDeThoraxfoto />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAnatomieOpDeXThorax />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectLongkwabbenEnFissuren />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectSystematischeBeoordelingVanDeXThorax />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectCtThoraxWindowsettings />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectCtProtocollen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectLongembolieprotocol />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectAnatomieOpCt />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectKlinischeRelevantie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek1Ig015ThoraxradiologieSummary
