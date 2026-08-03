// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module pathofysiologie-van-copd-en-longemfyseem-en-behandeling
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
import SectWatIsCopd from './sections/SectWatIsCopd'
import SectEpidemiologieEnZiektelast from './sections/SectEpidemiologieEnZiektelast'
import SectOntstaanVanCopdRisicofactorenEnOorza from './sections/SectOntstaanVanCopdRisicofactorenEnOorza'
import SectPathofysiologieVanCopd from './sections/SectPathofysiologieVanCopd'
import SectDiagnostiekVanCopd from './sections/SectDiagnostiekVanCopd'
import SectLichamelijkOnderzoekEnAanvullendOnde from './sections/SectLichamelijkOnderzoekEnAanvullendOnde'
import SectBehandelingVanCopd from './sections/SectBehandelingVanCopd'
import SectBehandelingVanEenCopdExacerbatie from './sections/SectBehandelingVanEenCopdExacerbatie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is COPD?", icon: FileText },
    { id: 'sect-03', title: "Epidemiologie en ziektelast", icon: FileText },
    { id: 'sect-04', title: "Ontstaan van COPD: risicofactoren en oorzaken", icon: FileText },
    { id: 'sect-05', title: "Pathofysiologie van COPD", icon: Layers },
    { id: 'sect-06', title: "Diagnostiek van COPD", icon: Microscope },
    { id: 'sect-07', title: "Lichamelijk onderzoek en aanvullend onderzoek", icon: Microscope },
    { id: 'sect-08', title: "Behandeling van COPD", icon: HeartPulse },
    { id: 'sect-09', title: "Behandeling van een COPD-exacerbatie", icon: HeartPulse },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week4Casus7PathofysiologieVanCopdEnLongemfyseemEnBehandelingSummary = () => (
  <SummaryLayout
    title="Pathofysiologie van COPD en longemfyseem en behandeling"
    description="Wat is COPD?"
    caseLabel="Week 4 · Casus 7: Ademnood"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsCopd />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectEpidemiologieEnZiektelast />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectOntstaanVanCopdRisicofactorenEnOorza />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectPathofysiologieVanCopd />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDiagnostiekVanCopd />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekEnAanvullendOnde />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectBehandelingVanCopd />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectBehandelingVanEenCopdExacerbatie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week4Casus7PathofysiologieVanCopdEnLongemfyseemEnBehandelingSummary
