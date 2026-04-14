import {
  BookOpen,
  Table2,
  Activity,
  HelpCircle,
  Clock,
  Dna,
  Droplets,
  CircleDot,
  CheckCircle2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Intro from './Sect01Intro'
import Sect02GlomerulairVsTubulair from './Sect02GlomerulairVsTubulair'
import Sect03AtnVsTin from './Sect03AtnVsTin'
import Sect04Leukocyturie from './Sect04Leukocyturie'
import Sect05ChronischTubulair from './Sect05ChronischTubulair'
import Sect06ErfelijkNatrium from './Sect06ErfelijkNatrium'
import Sect07Watertransport from './Sect07Watertransport'
import Sect08CysteuzeNieren from './Sect08CysteuzeNieren'
import Sect09Samengevat from './Sect09Samengevat'

const Blok9Week1Casus1TubulaireErfelijkeNierziektenMiniSummary = () => {
  const tableOfContents = [
    { id: 'mini-sect-01', title: 'Tubulaire en erfelijke nierziekten: kern', icon: BookOpen },
    { id: 'mini-sect-02', title: 'Glomerulair versus tubulair (urinestrip)', icon: Table2 },
    { id: 'mini-sect-03', title: 'Acute tubulair: ATN versus TIN', icon: Activity },
    { id: 'mini-sect-04', title: 'Leukocyturie: UWI of TIN?', icon: HelpCircle },
    { id: 'mini-sect-05', title: 'Chronische tubulaire stoornissen', icon: Clock },
    { id: 'mini-sect-06', title: 'Erfelijk: natriumtransport', icon: Dna },
    { id: 'mini-sect-07', title: 'Watertransport: AVP-resistentie', icon: Droplets },
    { id: 'mini-sect-08', title: 'Cysteuze nierziekten (ADPKD)', icon: CircleDot },
    { id: 'mini-sect-09', title: 'Samengevat', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Tubulaire en erfelijke nierziekten"
      description="De niertubulus zorgt voor de terugresorptie van water en elektrolyten. Daardoor geven tubulaire aandoeningen vaak vooral stoornissen in de water- en zouthuishouding, terwijl de urine soms verrassend weinig afwijkingen laat zien."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten-mini',
        variants: [
          { id: 'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="mini-sect-01" className="scroll-mt-24 mb-12">
        <Sect01Intro />
      </section>
      <section id="mini-sect-02" className="scroll-mt-24 mb-12">
        <Sect02GlomerulairVsTubulair />
      </section>
      <section id="mini-sect-03" className="scroll-mt-24 mb-12">
        <Sect03AtnVsTin />
      </section>
      <section id="mini-sect-04" className="scroll-mt-24 mb-12">
        <Sect04Leukocyturie />
      </section>
      <section id="mini-sect-05" className="scroll-mt-24 mb-12">
        <Sect05ChronischTubulair />
      </section>
      <section id="mini-sect-06" className="scroll-mt-24 mb-12">
        <Sect06ErfelijkNatrium />
      </section>
      <section id="mini-sect-07" className="scroll-mt-24 mb-12">
        <Sect07Watertransport />
      </section>
      <section id="mini-sect-08" className="scroll-mt-24 mb-12">
        <Sect08CysteuzeNieren />
      </section>
      <section id="mini-sect-09" className="scroll-mt-24 mb-12">
        <Sect09Samengevat />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1TubulaireErfelijkeNierziektenMiniSummary
