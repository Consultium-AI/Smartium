import {
  Activity,
  BarChart3,
  BookOpen,
  CircleEllipsis,
  FileText,
  HelpCircle,
  Layers,
  LineChart,
  Scale,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WaaromMaatschappelijk from './sections/Sect02WaaromMaatschappelijk'
import Sect03ImpactRisicofactor from './sections/Sect03ImpactRisicofactor'
import Sect04Maagkanker from './sections/Sect04Maagkanker'
import Sect05AndereAandoeningen from './sections/Sect05AndereAandoeningen'
import Sect06ZiektelastVerschillendeLanden from './sections/Sect06ZiektelastVerschillendeLanden'
import Sect07Preventie from './sections/Sect07Preventie'
import Sect08WatLevertScreeningOp from './sections/Sect08WatLevertScreeningOp'
import Sect09Balans from './sections/Sect09Balans'
import Sect10EffectPreventie from './sections/Sect10EffectPreventie'
import Sect11KosteneffectiviteitScreenAndTreat from './sections/Sect11KosteneffectiviteitScreenAndTreat'
import Sect12KosteneffectiviteitEndoscopie from './sections/Sect12KosteneffectiviteitEndoscopie'
import Sect13Preventielogica from './sections/Sect13Preventielogica'
import Sect14Samenvatting from './sections/Sect14Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  {
    id: 'sect-02',
    title: 'Waarom maatschappelijk belangrijk',
    icon: Layers,
  },
  { id: 'sect-03', title: 'Impact van een risicofactor · Tabel 1', icon: Table2 },
  {
    id: 'sect-04',
    title: 'H. pylori en maagkanker · Tabel 2',
    icon: Activity,
  },
  { id: 'sect-05', title: 'Andere aandoeningen · Tabel 3', icon: Stethoscope },
  { id: 'sect-06', title: 'Ziektelast in de populatie', icon: BarChart3 },
  { id: 'sect-07', title: 'Preventie · Tabel 4', icon: Target },
  {
    id: 'sect-08',
    title: 'Wat levert screening op?',
    icon: HelpCircle,
  },
  {
    id: 'sect-09',
    title: 'Balans schatten (NNS/NNT)',
    icon: Scale,
  },
  { id: 'sect-10', title: 'Effect van preventie', icon: LineChart },
  { id: 'sect-11', title: 'Kosten-effectiviteit screen-and-treat · Tabel 5', icon: Table2 },
  { id: 'sect-12', title: 'Kosten-effectiviteit endoscopische screening', icon: Table2 },
  { id: 'sect-13', title: 'Samenvatting van de preventielogica', icon: CircleEllipsis },
  { id: 'sect-14', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacterieSummary = () => (
  <SummaryLayout
    title="H. pylori, de zorgkosten die ontstaan vanuit een bacterie"
    moduleKind="lmv"
    description={
      'Helicobacter pylori is een bacterie die niet alleen bij één individuele patiënt ziekte kan veroorzaken, maar ook op populatieniveau een grote zorglast geeft. Dat komt doordat de bacterie samenhangt met meerdere aandoeningen, waaronder maagkanker, ulcusziekte en andere maag-darmklachten.'
    }
    caseLabel="Week 1 · Casus 1: Maagklachten"
    blokLabel="Blok 10"
    practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-lmv-h-pylori-zorgkosten-vanuit-een-bacterie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WaaromMaatschappelijk />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03ImpactRisicofactor />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Maagkanker />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05AndereAandoeningen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06ZiektelastVerschillendeLanden />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Preventie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08WatLevertScreeningOp />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Balans />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10EffectPreventie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11KosteneffectiviteitScreenAndTreat />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12KosteneffectiviteitEndoscopie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Preventielogica />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacterieSummary
