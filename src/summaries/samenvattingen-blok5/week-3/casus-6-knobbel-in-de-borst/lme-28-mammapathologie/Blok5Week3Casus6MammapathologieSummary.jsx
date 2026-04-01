import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Layers,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AnatomieVanDeMamma from './Sect02AnatomieVanDeMamma'
import Sect03MicroscopischeOpbouw from './Sect03MicroscopischeOpbouw'
import Sect04Diagnostiek from './Sect04Diagnostiek'
import Sect05ChirurgischeBehandeling from './Sect05ChirurgischeBehandeling'
import Sect06GoedaardigeAfwijkingen from './Sect06GoedaardigeAfwijkingen'
import Sect07HyperplasieAdenosePapilloom from './Sect07HyperplasieAdenosePapilloom'
import Sect08CarcinomaInSitu from './Sect08CarcinomaInSitu'
import Sect09Dcis from './Sect09Dcis'
import Sect10Lcis from './Sect10Lcis'
import Sect11Tabel5DcisVersusLcis from './Sect11Tabel5DcisVersusLcis'
import Sect12Mammacarcinoom from './Sect12Mammacarcinoom'
import Sect13Gradering from './Sect13Gradering'
import Sect14Receptoren from './Sect14Receptoren'
import Sect15TumordiameterTnm from './Sect15TumordiameterTnm'
import Sect16Lymfklierstagering from './Sect16Lymfklierstagering'
import Sect17SamenvattingVanDeKern from './Sect17SamenvattingVanDeKern'
import Sect18Samenvatting from './Sect18Samenvatting'

const Blok5Week3Casus6MammapathologieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Anatomie van de mamma', icon: Stethoscope },
    { id: 'sect-03', title: 'Microscopische opbouw van de mamma', icon: Microscope },
    { id: 'sect-04', title: 'Diagnostiek van afwijkingen in de mamma', icon: ClipboardList },
    { id: 'sect-05', title: 'Chirurgische behandeling en lokale verwijdering', icon: Syringe },
    { id: 'sect-06', title: 'Veel voorkomende goedaardige afwijkingen in de mamma', icon: Layers },
    { id: 'sect-07', title: 'Hyperplasie, adenose en papilloom', icon: Layers },
    { id: 'sect-08', title: 'Carcinoma in situ', icon: Microscope },
    { id: 'sect-09', title: 'DCIS', icon: Microscope },
    { id: 'sect-10', title: 'LCIS', icon: Microscope },
    { id: 'sect-11', title: 'Tabel 5. DCIS versus LCIS', icon: Table2 },
    { id: 'sect-12', title: 'Mammacarcinoom', icon: Stethoscope },
    { id: 'sect-13', title: 'Gradering', icon: Table2 },
    { id: 'sect-14', title: 'Receptoren en predictieve factoren', icon: Table2 },
    { id: 'sect-15', title: 'Tumordiameter, radicaliteit en TNM', icon: ClipboardList },
    { id: 'sect-16', title: 'Lymfklierstagering en verspreiding', icon: Stethoscope },
    { id: 'sect-17', title: 'Samenvatting van de kern', icon: CircleCheck },
    { id: 'sect-18', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Mammapathologie"
      description="De mamma bestaat uit kliereweefsel, bindweefsel en vetweefsel. Daarnaast horen ook bloedvaten, lymfvaten en huid bij de bouw van de borst."
      caseLabel="Week 3 · Casus 6: Knobbel in de borst"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AnatomieVanDeMamma />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03MicroscopischeOpbouw />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Diagnostiek />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ChirurgischeBehandeling />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06GoedaardigeAfwijkingen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07HyperplasieAdenosePapilloom />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08CarcinomaInSitu />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Dcis />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Lcis />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Tabel5DcisVersusLcis />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Mammacarcinoom />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Gradering />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Receptoren />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15TumordiameterTnm />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Lymfklierstagering />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17SamenvattingVanDeKern />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus6MammapathologieSummary
