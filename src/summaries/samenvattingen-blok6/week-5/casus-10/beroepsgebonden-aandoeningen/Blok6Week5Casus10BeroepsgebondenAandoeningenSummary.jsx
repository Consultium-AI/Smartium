// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module beroepsgebonden-aandoeningen
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
import SectInleidingWatZijnBeroepsgebondenInter from './sections/SectInleidingWatZijnBeroepsgebondenInter'
import SectHoeVaakKomtHetVoor from './sections/SectHoeVaakKomtHetVoor'
import SectIndelingVanBeroepsgebondenIld from './sections/SectIndelingVanBeroepsgebondenIld'
import SectEpidemiologieEnKlinischeRelevantie from './sections/SectEpidemiologieEnKlinischeRelevantie'
import SectDiagnostischeAanpak from './sections/SectDiagnostischeAanpak'
import SectBehandeling from './sections/SectBehandeling'
import SectPreventie from './sections/SectPreventie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Inleiding: wat zijn beroepsgebonden interstitiële longaandoeningen?", icon: FileText },
    { id: 'sect-03', title: "Hoe vaak komt het voor?", icon: FileText },
    { id: 'sect-04', title: "Indeling van beroepsgebonden ILD", icon: FileText },
    { id: 'sect-05', title: "Epidemiologie en klinische relevantie", icon: FileText },
    { id: 'sect-06', title: "Diagnostische aanpak", icon: Microscope },
    { id: 'sect-07', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-08', title: "Preventie", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week5Casus10BeroepsgebondenAandoeningenSummary = () => (
  <SummaryLayout
    title="Beroepsgebonden aandoeningen"
    description="Na het doornemen van deze stof moet je weten dat interstitiële longaandoeningen ook beroepsmatig kunnen ontstaan door blootstelling aan ingeademde schadelijke stoffen. Je moet begrijpen dat er verschillende vormen van ILD kunnen…"
    caseLabel="Week 5 · Casus 10: Kortademigheid bij inspanning"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectInleidingWatZijnBeroepsgebondenInter />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHoeVaakKomtHetVoor />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectIndelingVanBeroepsgebondenIld />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectEpidemiologieEnKlinischeRelevantie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDiagnostischeAanpak />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectPreventie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week5Casus10BeroepsgebondenAandoeningenSummary
