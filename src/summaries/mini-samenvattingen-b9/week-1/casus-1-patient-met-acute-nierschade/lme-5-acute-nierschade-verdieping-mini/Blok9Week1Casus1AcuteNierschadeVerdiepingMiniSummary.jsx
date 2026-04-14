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
import Sect01Intro from './Sect01Intro'
import Sect02EssentieleDiagnostiek from './Sect02EssentieleDiagnostiek'
import Sect03Anamnese from './Sect03Anamnese'
import Sect04LichamelijkOnderzoek from './Sect04LichamelijkOnderzoek'
import Sect05AanvullendOnderzoek from './Sect05AanvullendOnderzoek'
import Sect06Behandeling from './Sect06Behandeling'
import Sect07Dynamiek from './Sect07Dynamiek'
import Sect08RenaleMicrocirculatie from './Sect08RenaleMicrocirculatie'
import Sect09Patronen from './Sect09Patronen'
import Sect10Samengevat from './Sect10Samengevat'

const Blok9Week1Casus1AcuteNierschadeVerdiepingMiniSummary = () => {
  const tableOfContents = [
    { id: 'mini-sect-01', title: 'Acute nierschade (verdieping): kern', icon: BookOpen },
    { id: 'mini-sect-02', title: 'Essentiële diagnostiek', icon: ClipboardList },
    { id: 'mini-sect-03', title: 'Anamnese', icon: MessageSquare },
    { id: 'mini-sect-04', title: 'Lichamelijk onderzoek', icon: Stethoscope },
    { id: 'mini-sect-05', title: 'Aanvullend onderzoek', icon: FlaskConical },
    { id: 'mini-sect-06', title: 'Behandeling', icon: Pill },
    { id: 'mini-sect-07', title: 'Dynamiek prerenaal / renaal / postrenaal', icon: GitBranch },
    { id: 'mini-sect-08', title: 'Renale microcirculatie', icon: Activity },
    { id: 'mini-sect-09', title: 'Patronen', icon: Grid3X3 },
    { id: 'mini-sect-10', title: 'Samengevat', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Acute nierschade - verdieping"
      description="Acute nierschade betekent dat de nierfunctie in korte tijd achteruitgaat. Juist daarom is een rustige, systematische aanpak zo belangrijk. Met een goede anamnese, lichamelijk onderzoek en een beperkt aantal aanvullende onderzoeken kun je al heel ver komen. De kern is steeds hetzelfde: je wilt snel richting krijgen in de oorzaak én tegelijk inschatten of er nog functionerend nierweefsel aanwezig is."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-acute-nierschade-verdieping-mini',
        variants: [
          { id: 'blok9-week1-casus1-acute-nierschade-verdieping', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-acute-nierschade-verdieping-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="mini-sect-01" className="scroll-mt-24 mb-12">
        <Sect01Intro />
      </section>
      <section id="mini-sect-02" className="scroll-mt-24 mb-12">
        <Sect02EssentieleDiagnostiek />
      </section>
      <section id="mini-sect-03" className="scroll-mt-24 mb-12">
        <Sect03Anamnese />
      </section>
      <section id="mini-sect-04" className="scroll-mt-24 mb-12">
        <Sect04LichamelijkOnderzoek />
      </section>
      <section id="mini-sect-05" className="scroll-mt-24 mb-12">
        <Sect05AanvullendOnderzoek />
      </section>
      <section id="mini-sect-06" className="scroll-mt-24 mb-12">
        <Sect06Behandeling />
      </section>
      <section id="mini-sect-07" className="scroll-mt-24 mb-12">
        <Sect07Dynamiek />
      </section>
      <section id="mini-sect-08" className="scroll-mt-24 mb-12">
        <Sect08RenaleMicrocirculatie />
      </section>
      <section id="mini-sect-09" className="scroll-mt-24 mb-12">
        <Sect09Patronen />
      </section>
      <section id="mini-sect-10" className="scroll-mt-24 mb-12">
        <Sect10Samengevat />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1AcuteNierschadeVerdiepingMiniSummary
