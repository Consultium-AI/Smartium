// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module multipel-myeloom
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
import SectMultipelMyeloomWatIsHet from './sections/SectMultipelMyeloomWatIsHet'
import SectCasusAlsIngangTotDeDiagnostiek from './sections/SectCasusAlsIngangTotDeDiagnostiek'
import SectLaboratoriumonderzoekWaarLetJeOp from './sections/SectLaboratoriumonderzoekWaarLetJeOp'
import SectEiwithspectrumEnMProteNe from './sections/SectEiwithspectrumEnMProteNe'
import SectImmunofixatieWelkTypeMProteNe from './sections/SectImmunofixatieWelkTypeMProteNe'
import SectKanMultipelMyeloomOokZonderMProteNeB from './sections/SectKanMultipelMyeloomOokZonderMProteNeB'
import SectBeenmergonderzoekEnAanvullendeDiagno from './sections/SectBeenmergonderzoekEnAanvullendeDiagno'
import SectDiagnostischeClassificatie from './sections/SectDiagnostischeClassificatie'
import SectOrgaanschadeBijMultipelMyeloom from './sections/SectOrgaanschadeBijMultipelMyeloom'
import SectPrognoseWaaromZijnCytogenetischeAfwi from './sections/SectPrognoseWaaromZijnCytogenetischeAfwi'
import SectBehandeling from './sections/SectBehandeling'
import SectKlinischeRelevantie from './sections/SectKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Multipel myeloom: wat is het?", icon: FileText },
    { id: 'sect-03', title: "Casus als ingang tot de diagnostiek", icon: Microscope },
    { id: 'sect-04', title: "Laboratoriumonderzoek: waar let je op?", icon: Microscope },
    { id: 'sect-05', title: "Eiwithspectrum en M-proteïne", icon: FileText },
    { id: 'sect-06', title: "Immunofixatie: welk type M-proteïne?", icon: FileText },
    { id: 'sect-07', title: "Kan multipel myeloom ook zonder M-proteïne bestaan?", icon: FileText },
    { id: 'sect-08', title: "Beenmergonderzoek en aanvullende diagnostiek", icon: Microscope },
    { id: 'sect-09', title: "Diagnostische classificatie", icon: Microscope },
    { id: 'sect-10', title: "Orgaanschade bij multipel myeloom", icon: FileText },
    { id: 'sect-11', title: "Prognose: waarom zijn cytogenetische afwijkingen belangrijk?", icon: FileText },
    { id: 'sect-12', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-13', title: "Klinische relevantie", icon: FileText },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek2MultipelMyeloomSummary = () => (
  <SummaryLayout
    title="Multipel Myeloom"
    description="Multipel myeloom: wat is het?"
    caseLabel="Week 2 · Multipel Myeloom"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectMultipelMyeloomWatIsHet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectCasusAlsIngangTotDeDiagnostiek />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectLaboratoriumonderzoekWaarLetJeOp />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectEiwithspectrumEnMProteNe />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectImmunofixatieWelkTypeMProteNe />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectKanMultipelMyeloomOokZonderMProteNeB />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectBeenmergonderzoekEnAanvullendeDiagno />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectDiagnostischeClassificatie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectOrgaanschadeBijMultipelMyeloom />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectPrognoseWaaromZijnCytogenetischeAfwi />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectKlinischeRelevantie />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek2MultipelMyeloomSummary
