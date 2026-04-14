import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Droplets,
  GitBranch,
  HelpCircle,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatZijnVerworvenStollingsstoornissen from './Sect02WatZijnVerworvenStollingsstoornissen'
import Sect03Tabel1 from './Sect03Tabel1'
import Sect04TrombocytopathieEnTrombopenie from './Sect04TrombocytopathieEnTrombopenie'
import Sect05Itp from './Sect05Itp'
import Sect06BehandelingItp from './Sect06BehandelingItp'
import Sect07VerworvenHemofilieAEpidemiologie from './Sect07VerworvenHemofilieAEpidemiologie'
import Sect08VerworvenHemofilieAPresentatieMortaliteit from './Sect08VerworvenHemofilieAPresentatieMortaliteit'
import Sect09DiagnostiekHemofilieATabel2 from './Sect09DiagnostiekHemofilieATabel2'
import Sect10BehandelingVerworvenHemofilieA from './Sect10BehandelingVerworvenHemofilieA'
import Sect11VerworvenVwd from './Sect11VerworvenVwd'
import Sect12PraktischeKernpunten from './Sect12PraktischeKernpunten'
import Sect13SlotSamenvatting from './Sect13SlotSamenvatting'

const Blok5Week4Casus8LmvVerworvenStollingsstoornissenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat zijn verworven stollingsstoornissen?', icon: Droplets },
    { id: 'sect-03', title: 'Tabel 1. Overzicht verworven stollingsstoornissen', icon: Table2 },
    { id: 'sect-04', title: 'Primaire hemostase: trombocytopathie en trombopenie', icon: Activity },
    { id: 'sect-05', title: 'ITP', icon: Stethoscope },
    { id: 'sect-06', title: 'Behandeling van ITP', icon: Syringe },
    { id: 'sect-07', title: 'Verworven hemofilie A: epidemiologie en oorzaken', icon: GitBranch },
    { id: 'sect-08', title: 'Verworven hemofilie A: presentatie en mortaliteit', icon: ClipboardList },
    { id: 'sect-09', title: 'Diagnostiek verworven hemofilie A en tabel 2', icon: Microscope },
    { id: 'sect-10', title: 'Behandeling van verworven hemofilie A', icon: Syringe },
    { id: 'sect-11', title: 'Verworven VWD', icon: Droplets },
    { id: 'sect-12', title: 'Praktische kernpunten voor de kliniek', icon: HelpCircle },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Verworven stollingsstoornissen"
      description="Bij een verworven stollingsstoornis is er een verhoogde bloedingsneiging die later in het leven ontstaat. De stoornis kan op verschillende plekken in de stollingscascade zitten."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      moduleKind="lmv"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-lmv-verworven-stollingsstoornissen"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen',
      variants: [
        { id: 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatZijnVerworvenStollingsstoornissen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04TrombocytopathieEnTrombopenie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Itp />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BehandelingItp />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07VerworvenHemofilieAEpidemiologie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08VerworvenHemofilieAPresentatieMortaliteit />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09DiagnostiekHemofilieATabel2 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BehandelingVerworvenHemofilieA />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11VerworvenVwd />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12PraktischeKernpunten />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8LmvVerworvenStollingsstoornissenSummary
