import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Layers,
  Microscope,
  Scan,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02VanRontgenstralenNaarMammografie from './Sect02VanRontgenstralenNaarMammografie'
import Sect03TechniekEnCompressie from './Sect03TechniekEnCompressie'
import Sect04Standaardopnames from './Sect04Standaardopnames'
import Sect05AnatomieOpHetMammogram from './Sect05AnatomieOpHetMammogram'
import Sect06BorstdichtheidTabel1 from './Sect06BorstdichtheidTabel1'
import Sect07AfwijkingenTabel2 from './Sect07AfwijkingenTabel2'
import Sect08Architectuurverstoring from './Sect08Architectuurverstoring'
import Sect09Calcificaties from './Sect09Calcificaties'
import Sect10BiradsTabel3 from './Sect10BiradsTabel3'
import Sect11EchografieTabel4 from './Sect11EchografieTabel4'
import Sect12MriVanDeMamma from './Sect12MriVanDeMamma'
import Sect13PetCtEnFesTabel5 from './Sect13PetCtEnFesTabel5'
import Sect14LocoregionaalOfOpAfstand from './Sect14LocoregionaalOfOpAfstand'
import Sect15Biopten from './Sect15Biopten'
import Sect16BevolkingsonderzoekVerslagleggingToekomst from './Sect16BevolkingsonderzoekVerslagleggingToekomst'
import Sect17Samenvatting from './Sect17Samenvatting'

const Blok5Week3Casus6RadiologischeDiagnostiekMammacarcinoomSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Van röntgenstralen naar mammografie', icon: Activity },
    { id: 'sect-03', title: 'Techniek en standaardopnames', icon: Scan },
    { id: 'sect-04', title: 'Standaardopnames', icon: Scan },
    { id: 'sect-05', title: 'Anatomie op het mammogram', icon: Layers },
    { id: 'sect-06', title: 'Borstdichtheid en de ACR-classificatie', icon: Table2 },
    { id: 'sect-07', title: 'Afwijkingen herkennen: benigne en maligne kenmerken', icon: Table2 },
    { id: 'sect-08', title: 'Wat is architectuurverstoring?', icon: Microscope },
    { id: 'sect-09', title: 'Calcificaties: klein detail, groot belang', icon: Microscope },
    { id: 'sect-10', title: 'BI-RADS-classificatie', icon: Table2 },
    { id: 'sect-11', title: 'Echografie van de mamma', icon: Stethoscope },
    { id: 'sect-12', title: 'MRI van de mamma', icon: Scan },
    { id: 'sect-13', title: 'PET/CT en FES PET/CT', icon: Activity },
    { id: 'sect-14', title: 'Locoregionaal of op afstand?', icon: ClipboardList },
    { id: 'sect-15', title: 'Biopten', icon: Syringe },
    { id: 'sect-16', title: 'Bevolkingsonderzoek, verslaglegging en toekomst', icon: ClipboardList },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Radiologische diagnostiek mammacarcinoom"
      description="Mammografie is een röntgentechniek, maar de borst vraagt om een andere aanpak dan bijvoorbeeld een thoraxfoto. Op een gewone röntgenfoto zijn de verschillen tussen weefsels soms groot, terwijl de borst juist vooral uit weke delen bestaat. Daardoor zijn de contrastverschillen klein en moet je subtiele verschillen tussen vetweefsel, klierweefsel en kleine calcificaties goed zichtbaar maken."
      caseLabel="Week 3 · Casus 6: Knobbel in de borst"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02VanRontgenstralenNaarMammografie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03TechniekEnCompressie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Standaardopnames />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05AnatomieOpHetMammogram />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BorstdichtheidTabel1 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07AfwijkingenTabel2 />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Architectuurverstoring />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Calcificaties />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BiradsTabel3 />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11EchografieTabel4 />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12MriVanDeMamma />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13PetCtEnFesTabel5 />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14LocoregionaalOfOpAfstand />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Biopten />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16BevolkingsonderzoekVerslagleggingToekomst />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus6RadiologischeDiagnostiekMammacarcinoomSummary
