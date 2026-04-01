import {
  BookOpen,
  Table2,
  Activity,
  HelpCircle,
  Clock,
  Dna,
  Droplets,
  CircleDot,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01LeerdoelenPresentatie from './Sect01LeerdoelenPresentatie'
import Sect02Tabel1Urinestrip from './Sect02Tabel1Urinestrip'
import Sect03AcuteTubulair from './Sect03AcuteTubulair'
import Sect04Leukocyturie from './Sect04Leukocyturie'
import Sect05ChronischTubulair from './Sect05ChronischTubulair'
import Sect06ErfelijkNatrium from './Sect06ErfelijkNatrium'
import Sect07Watertransport from './Sect07Watertransport'
import Sect08CysteuzeNieren from './Sect08CysteuzeNieren'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week1Casus1TubulaireErfelijkeNierziektenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen en presentatie tubulaire stoornissen', icon: BookOpen },
    { id: 'sect-02', title: 'Glomerulair versus tubulair (tabel 1)', icon: Table2 },
    { id: 'sect-03', title: 'Acute tubulaire stoornissen', icon: Activity },
    { id: 'sect-04', title: 'Leukocyturie: UWI of TIN?', icon: HelpCircle },
    { id: 'sect-05', title: 'Chronische tubulaire stoornissen', icon: Clock },
    { id: 'sect-06', title: 'Erfelijk: natriumtransport', icon: Dna },
    { id: 'sect-07', title: 'Watertransport en tabel 4', icon: Droplets },
    { id: 'sect-08', title: 'Cysteuze nierziekten', icon: CircleDot },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Tubulaire en erfelijke nierziekten"
      description="De niertubulus zorgt voor de terugresorptie van water en elektrolyten. Daardoor geven tubulaire aandoeningen vaak vooral stoornissen in de water- en zouthuishouding, terwijl de urine soms verrassend weinig afwijkingen laat zien."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01LeerdoelenPresentatie />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Tabel1Urinestrip />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AcuteTubulair />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Leukocyturie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ChronischTubulair />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ErfelijkNatrium />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Watertransport />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08CysteuzeNieren />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1TubulaireErfelijkeNierziektenSummary
