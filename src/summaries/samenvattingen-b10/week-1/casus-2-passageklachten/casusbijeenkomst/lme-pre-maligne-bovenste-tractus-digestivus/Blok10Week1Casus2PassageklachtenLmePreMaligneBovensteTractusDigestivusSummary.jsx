import {
  Activity,
  BookOpen,
  Dna,
  FileText,
  Flame,
  GitBranch,
  Layers,
  Microscope,
  Search,
  Stethoscope,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02Anatomie from './sections/Sect02Anatomie'
import Sect03Barretts from './sections/Sect03Barretts'
import Sect04BehandelingBarrett from './sections/Sect04BehandelingBarrett'
import Sect05Plaveiselcelcarcinoom from './sections/Sect05Plaveiselcelcarcinoom'
import Sect06MaagcarcinoomEpidemiologie from './sections/Sect06MaagcarcinoomEpidemiologie'
import Sect07ChronischeAtrofischeGastritis from './sections/Sect07ChronischeAtrofischeGastritis'
import Sect08PremaligneCorrea from './sections/Sect08PremaligneCorrea'
import Sect09SurveillanceAtrofisch from './sections/Sect09SurveillanceAtrofisch'
import Sect10EndoscopischBeeldMaag from './sections/Sect10EndoscopischBeeldMaag'
import Sect11RisicofactorenMaagca from './sections/Sect11RisicofactorenMaagca'
import Sect12ErfelijkeMaag from './sections/Sect12ErfelijkeMaag'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Anatomie · Tabel 1', icon: Layers },
  { id: 'sect-03', title: "Barrett's oesofagus · Tabel 2", icon: Flame },
  { id: 'sect-04', title: 'Behandeling Barrett, dysplasie, vroegcarcinoom', icon: Syringe },
  { id: 'sect-05', title: 'Plaveiselcelcarcinoom · Tabel 3', icon: Activity },
  { id: 'sect-06', title: 'Maagcarcinoom · Tabel 4', icon: Stethoscope },
  { id: 'sect-07', title: 'Chronische / atrofische gastritis', icon: Microscope },
  { id: 'sect-08', title: 'Premaligne maag / Correa · Tabel 5', icon: GitBranch },
  { id: 'sect-09', title: 'Surveillance atrofische maag', icon: Target },
  { id: 'sect-10', title: 'Endoscopisch beeld maag', icon: Search },
  { id: 'sect-11', title: 'Risicofactoren maagcarcinoom', icon: Table2 },
  { id: 'sect-12', title: 'Erfelijke syndromen · Tabel 6', icon: Dna },
  { id: 'sect-13', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusSummary = () => (
  <SummaryLayout
    title="(Pre)maligne bovenste tractus digestivus"
    moduleKind="lme"
    description={
      'De bovenste tractus digestivus loopt van slokdarm naar maag en bevat een aantal belangrijke herkenningspunten. Denk hierbij aan de bovenste slokdarmsfincter, de slokdarm zelf, het gebied rond de gastro-oesofageale junctie, het diafragma en in de maag aan fundus, corpus, antrum en pylorus.'
    }
    caseLabel="Week 1 · Casus 2: Passageklachten"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02Anatomie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Barretts />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04BehandelingBarrett />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Plaveiselcelcarcinoom />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06MaagcarcinoomEpidemiologie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07ChronischeAtrofischeGastritis />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08PremaligneCorrea />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09SurveillanceAtrofisch />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10EndoscopischBeeldMaag />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11RisicofactorenMaagca />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12ErfelijkeMaag />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusSummary
