import {
  BookOpen,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  Layers,
  Scissors,
  Stethoscope,
  Syringe,
  TableProperties,
  Target,
  UsersRound,
  Microscope,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02AlgemeneUitgangspunten from './sections/Sect02AlgemeneUitgangspunten'
import Sect03SlokdarmkankerAlgemeneBehandeling from './sections/Sect03SlokdarmkankerAlgemeneBehandeling'
import Sect04OperatiesSlokdarm from './sections/Sect04OperatiesSlokdarm'
import Sect05MinimaalInvasiefSlokdarm from './sections/Sect05MinimaalInvasiefSlokdarm'
import Sect06ComplicatiesNaSlokdarmchirurgie from './sections/Sect06ComplicatiesNaSlokdarmchirurgie'
import Sect07PathologieFollowUpSlokdarm from './sections/Sect07PathologieFollowUpSlokdarm'
import Sect08MaagkankerAchtergrond from './sections/Sect08MaagkankerAchtergrond'
import Sect09DiagnostiekMaagkanker from './sections/Sect09DiagnostiekMaagkanker'
import Sect10CuratiefEnPalliatiefMaagkanker from './sections/Sect10CuratiefEnPalliatiefMaagkanker'
import Sect11OperatieBijMaagkanker from './sections/Sect11OperatieBijMaagkanker'
import Sect12AdjuvanteBehandelingEnFollowUp from './sections/Sect12AdjuvanteBehandelingEnFollowUp'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Algemene uitgangspunten', icon: UsersRound },
  {
    id: 'sect-03',
    title: 'Slokdarmkanker · voorbehandeling · Tabel 1',
    icon: ClipboardList,
  },
  {
    id: 'sect-04',
    title: 'Operaties slokdarm · McKeown · Ivor-Lewis · Tabel 2',
    icon: Scissors,
  },
  {
    id: 'sect-05',
    title: 'Minimaal-invasief · Tabel 3',
    icon: Syringe,
  },
  { id: 'sect-06', title: 'Complicaties na slokdarmchirurgie', icon: HeartPulse },
  { id: 'sect-07', title: 'Pathologie en follow-up slokdarm', icon: Microscope },
  {
    id: 'sect-08',
    title: 'Maagkanker: achtergrond · Tabel 4',
    icon: Layers,
  },
  {
    id: 'sect-09',
    title: 'Diagnostiek maagkanker · Tabel 5',
    icon: Stethoscope,
  },
  {
    id: 'sect-10',
    title: 'Curatief en palliatief maagkanker',
    icon: FlaskConical,
  },
  {
    id: 'sect-11',
    title: 'Operatie maagkanker · Laparoscopisch · Tabel 6',
    icon: Target,
  },
  {
    id: 'sect-12',
    title: 'Adjuvant en follow-up',
    icon: TableProperties,
  },
  { id: 'sect-13', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusSummary = () => (
  <SummaryLayout
    title="Chirurgische behandeling van aandoeningen aan de bovenste tractus digestivus"
    moduleKind="lmv"
    description={
      <>
        De behandeling van slokdarm- en maagkanker is sterk afhankelijk van locatie, stadium en conditie van de patiënt.
        Daarom gebeurt de besluitvorming multidisciplinair. In een MDO bespreken onder andere chirurg, MDL-arts, medisch
        oncoloog, radioloog, nucleair geneeskundige en radiotherapeut samen de beste aanpak.
      </>
    }
    caseLabel="Week 1 · Casus 2: Passageklachten"
    blokLabel="Blok 10"
    practiceLink="/oefenvragen?lme=blok10-week1-casus2-passageklachten-lmv-chirurgische-behandeling-van-aandoeningen-aan-de-bovenste-tractus-digestivus"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02AlgemeneUitgangspunten />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03SlokdarmkankerAlgemeneBehandeling />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04OperatiesSlokdarm />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05MinimaalInvasiefSlokdarm />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06ComplicatiesNaSlokdarmchirurgie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07PathologieFollowUpSlokdarm />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08MaagkankerAchtergrond />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09DiagnostiekMaagkanker />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10CuratiefEnPalliatiefMaagkanker />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11OperatieBijMaagkanker />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12AdjuvanteBehandelingEnFollowUp />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusSummary
