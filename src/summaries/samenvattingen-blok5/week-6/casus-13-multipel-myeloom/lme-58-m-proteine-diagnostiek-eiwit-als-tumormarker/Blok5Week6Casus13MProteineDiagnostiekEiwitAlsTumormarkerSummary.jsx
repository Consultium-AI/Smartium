import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Dna,
  GitCompare,
  Microscope,
  Stethoscope,
  Table2,
  TestTube2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsEenMProteine from './Sect02WatIsEenMProteine'
import Sect03Plasmaceldyscrasieen from './Sect03Plasmaceldyscrasieen'
import Sect04OnderzoekInBeenmergEnBloed from './Sect04OnderzoekInBeenmergEnBloed'
import Sect05BeenmergaspiraatEnBiopt from './Sect05BeenmergaspiraatEnBiopt'
import Sect06MProteineInHetBloed from './Sect06MProteineInHetBloed'
import Sect07DiagnoseVersusFollowUp from './Sect07DiagnoseVersusFollowUp'
import Sect08ResponsbeoordelingBijMyeloom from './Sect08ResponsbeoordelingBijMyeloom'
import Sect09Casus from './Sect09Casus'
import Sect10SamenvattingVanDeKern from './Sect10SamenvattingVanDeKern'

const Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is een M-proteïne?', icon: Dna },
    { id: 'sect-03', title: 'Plasmaceldyscrasieën: hoe onderscheid je ze?', icon: GitCompare },
    { id: 'sect-04', title: 'Onderzoek in beenmerg en bloed', icon: Table2 },
    { id: 'sect-05', title: 'Beenmergaspiraat en -biopt', icon: Microscope },
    { id: 'sect-06', title: 'M-proteïne in het bloed', icon: TestTube2 },
    { id: 'sect-07', title: 'Diagnose versus follow-up', icon: Activity },
    { id: 'sect-08', title: 'Responsbeoordeling bij myeloom', icon: ClipboardList },
    { id: 'sect-09', title: 'Casus: hoe loopt dit in de praktijk?', icon: Stethoscope },
    { id: 'sect-10', title: 'Samenvatting van de kern', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="M-proteine diagnostiek, eiwit als tumormarker"
      description="Een M-proteïne is een eiwit dat wordt gemaakt door een monoklonale plasmacelpopulatie."
      caseLabel="Week 6 · Casus 13: Multipel myeloom"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsEenMProteine />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Plasmaceldyscrasieen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04OnderzoekInBeenmergEnBloed />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05BeenmergaspiraatEnBiopt />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06MProteineInHetBloed />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DiagnoseVersusFollowUp />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ResponsbeoordelingBijMyeloom />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Casus />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10SamenvattingVanDeKern />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary
