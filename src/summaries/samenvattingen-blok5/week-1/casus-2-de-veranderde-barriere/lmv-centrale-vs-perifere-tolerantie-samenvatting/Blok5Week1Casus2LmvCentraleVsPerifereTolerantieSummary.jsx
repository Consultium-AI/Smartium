import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  GitBranch,
  Layers,
  Microscope,
  Shield,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ImmunologischeTolerantie from './Sect02ImmunologischeTolerantie'
import Sect03Tabel1EnCentraleIntro from './Sect03Tabel1EnCentraleIntro'
import Sect04CentraleTTymusEnAandacht from './Sect04CentraleTTymusEnAandacht'
import Sect05CentraleBBeenmerg from './Sect05CentraleBBeenmerg'
import Sect06PerifereTolerantieIntro from './Sect06PerifereTolerantieIntro'
import Sect07Anergie from './Sect07Anergie'
import Sect08Tabel2Signalen from './Sect08Tabel2Signalen'
import Sect09SuppressieDoorTreg from './Sect09SuppressieDoorTreg'
import Sect10AandachtAnergieVsSuppressie from './Sect10AandachtAnergieVsSuppressie'
import Sect11CheckpointsBuitenPrimaireOrganen from './Sect11CheckpointsBuitenPrimaireOrganen'
import Sect12VerliesVanTolerantie from './Sect12VerliesVanTolerantie'
import Sect13AandachtIPEX from './Sect13AandachtIPEX'
import Sect14TolerantieEnAutoImmuniteit from './Sect14TolerantieEnAutoImmuniteit'
import Sect15Tabel3Mechanismen from './Sect15Tabel3Mechanismen'
import Sect16SlotSamenvatting from './Sect16SlotSamenvatting'

const Blok5Week1Casus2LmvCentraleVsPerifereTolerantieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Immunologische tolerantie', icon: Shield },
    { id: 'sect-03', title: 'Tabel 1 · Centrale tolerantie (intro)', icon: Table2 },
    { id: 'sect-04', title: 'Centrale tolerantie van T-cellen in de thymus', icon: Microscope },
    { id: 'sect-05', title: 'Centrale tolerantie van B-cellen in het beenmerg', icon: Microscope },
    { id: 'sect-06', title: 'Perifere tolerantie', icon: Activity },
    { id: 'sect-07', title: 'Anergie', icon: Layers },
    { id: 'sect-08', title: 'Tabel 2 · Signalen bij T-celactivatie', icon: Table2 },
    { id: 'sect-09', title: 'Suppressie door regulatoire T-lymfocyten', icon: Shield },
    { id: 'sect-10', title: 'Korte aandachtvraag: anergie vs suppressie', icon: GitBranch },
    { id: 'sect-11', title: 'Checkpoints buiten de primaire organen', icon: ClipboardList },
    { id: 'sect-12', title: 'Verlies van tolerantie', icon: Activity },
    { id: 'sect-13', title: 'Korte aandachtvraag: IPEX', icon: GitBranch },
    { id: 'sect-14', title: 'Tolerantie en auto-immuniteit', icon: Shield },
    { id: 'sect-15', title: 'Tabel 3 · Verlies van tolerantie', icon: Table2 },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Centrale vs perifere tolerantie"
      description="Tolerantie is het gecontroleerd niet reageren op (auto)antigenen. Dit proces is antigeenspecifiek en voorkomt dat het immuunsysteem lichaamseigen structuren aanvalt. Er zijn twee hoofdvormen. Centrale tolerantie vindt plaats in beenmerg en thymus en berust vooral op deletie/apoptose van sterk autoreactieve lymfocyten; bij B-cellen speelt ook receptor editing een rol. Perifere tolerantie vindt plaats in lymfeklieren, milt en overige weefsels en berust vooral op anergie en suppressie door Treg-cellen. Tolerantie kan doorbroken worden door onder andere polyclonale activatie, superantigenen, molecular mimicry, bystander-activatie, het vrijkomen van afgeschermde autoantigenen, vorming van neoantigenen en verlies van Treg-functie. Als deze mechanismen falen, kan dat leiden tot auto-immuniteit."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie"
      moduleKind="lmv"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02ImmunologischeTolerantie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1EnCentraleIntro />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04CentraleTTymusEnAandacht />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05CentraleBBeenmerg />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06PerifereTolerantieIntro />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Anergie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Tabel2Signalen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SuppressieDoorTreg />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10AandachtAnergieVsSuppressie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11CheckpointsBuitenPrimaireOrganen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12VerliesVanTolerantie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AandachtIPEX />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14TolerantieEnAutoImmuniteit />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Tabel3Mechanismen />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2LmvCentraleVsPerifereTolerantieSummary
