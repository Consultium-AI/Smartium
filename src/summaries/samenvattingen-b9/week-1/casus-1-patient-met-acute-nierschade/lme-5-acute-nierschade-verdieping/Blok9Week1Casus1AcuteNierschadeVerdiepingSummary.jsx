import {
  BookOpen,
  ClipboardList,
  MessageSquare,
  Stethoscope,
  FlaskConical,
  Pill,
  GitBranch,
  Activity,
  Grid3X3,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02EssentieleDiagnostiekTabel1 from './Sect02EssentieleDiagnostiekTabel1'
import Sect03Anamnese from './Sect03Anamnese'
import Sect04LichamelijkOnderzoek from './Sect04LichamelijkOnderzoek'
import Sect05AanvullendOnderzoek from './Sect05AanvullendOnderzoek'
import Sect06Behandeling from './Sect06Behandeling'
import Sect07Dynamiek from './Sect07Dynamiek'
import Sect08RenaleMicrocirculatie from './Sect08RenaleMicrocirculatie'
import Sect09Patronen from './Sect09Patronen'
import Sect10Samenvatting from './Sect10Samenvatting'

const Blok9Week1Casus1AcuteNierschadeVerdiepingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Essentiële diagnostiek bij acute nierschade', icon: ClipboardList },
    { id: 'sect-03', title: 'Anamnese', icon: MessageSquare },
    { id: 'sect-04', title: 'Lichamelijk onderzoek', icon: Stethoscope },
    { id: 'sect-05', title: 'Aanvullend onderzoek', icon: FlaskConical },
    { id: 'sect-06', title: 'Behandeling van acute nierschade', icon: Pill },
    { id: 'sect-07', title: 'Dynamiek in de systemische indeling van acute nierschade', icon: GitBranch },
    { id: 'sect-08', title: 'Renale microcirculatie en mechanisme van nierschade', icon: Activity },
    { id: 'sect-09', title: 'Patronen bij acute nierschade', icon: Grid3X3 },
    { id: 'sect-10', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Acute nierschade - verdieping"
      description="Acute nierschade betekent dat de nierfunctie in korte tijd achteruitgaat. Juist daarom is een rustige, systematische aanpak zo belangrijk. Met een goede anamnese, lichamelijk onderzoek en een beperkt aantal aanvullende onderzoeken kun je al heel ver komen. De kern is steeds hetzelfde: je wilt snel richting krijgen in de oorzaak én tegelijk inschatten of er nog functionerend nierweefsel aanwezig is."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02EssentieleDiagnostiekTabel1 /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Anamnese /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04LichamelijkOnderzoek /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05AanvullendOnderzoek /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06Behandeling /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Dynamiek /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08RenaleMicrocirculatie /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Patronen /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1AcuteNierschadeVerdiepingSummary
