import {
  Activity,
  BookOpen,
  ClipboardList,
  Eye,
  FileText,
  GitCompareArrows,
  Lightbulb,
  Pill,
  Scan,
  Stethoscope,
  Table2,
  TrendingUp,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsDeZiekteVanCrohn from './sections/Sect02WatIsDeZiekteVanCrohn'
import Sect03KlinischBeeldEnAnamnese from './sections/Sect03KlinischBeeldEnAnamnese'
import Sect04DiagnostiekBijVerdenkingOpCrohn from './sections/Sect04DiagnostiekBijVerdenkingOpCrohn'
import Sect05EndoscopiePathologieEnClassificatie from './sections/Sect05EndoscopiePathologieEnClassificatie'
import Sect06WelkeKlachtenPassenBijCrohn from './sections/Sect06WelkeKlachtenPassenBijCrohn'
import Sect07DifferentieleDiagnose from './sections/Sect07DifferentieleDiagnose'
import Sect08BehandelingVanMorbusCrohn from './sections/Sect08BehandelingVanMorbusCrohn'
import Sect09BijwerkingenVanMedicatie from './sections/Sect09BijwerkingenVanMedicatie'
import Sect10BeloopVanDeCasus from './sections/Sect10BeloopVanDeCasus'
import Sect11ExtraIntestinaleManifestaties from './sections/Sect11ExtraIntestinaleManifestaties'
import Sect12Samenvatting from './sections/Sect12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is de ziekte van Crohn?', icon: Lightbulb },
  { id: 'sect-03', title: 'Klinisch beeld en anamnese', icon: ClipboardList },
  {
    id: 'sect-04',
    title: 'Diagnostiek bij verdenking op Crohn · Tabel 1 · Fecaal calprotectine',
    icon: Stethoscope,
  },
  { id: 'sect-05', title: 'Endoscopie, pathologie en classificatie', icon: Scan },
  { id: 'sect-06', title: 'Welke klachten passen bij Crohn? · Tabel 2', icon: Table2 },
  { id: 'sect-07', title: 'Differentiële diagnose', icon: GitCompareArrows },
  { id: 'sect-08', title: 'Behandeling van Morbus Crohn · Tabel 3', icon: Pill },
  { id: 'sect-09', title: 'Bijwerkingen van medicatie', icon: Activity },
  { id: 'sect-10', title: 'Beloop van de casus', icon: TrendingUp },
  { id: 'sect-11', title: 'Extra-intestinale manifestaties', icon: Eye },
  { id: 'sect-12', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC04DiarreeMorbusCrohnSummary = () => (
  <SummaryLayout
    title="Morbus Crohn"
    moduleKind="lme"
    description="Morbus Crohn is een chronische darmziekte die in het hele maag-darmkanaal kan voorkomen. In de praktijk zie je vaak klachten zoals buikpijn, diarree, gewichtsverlies en vermoeidheid."
    caseLabel="Week 2 · Casus C04: Diarree"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week2-casus-c04-diarree-morbus-crohn"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatIsDeZiekteVanCrohn />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03KlinischBeeldEnAnamnese />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04DiagnostiekBijVerdenkingOpCrohn />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05EndoscopiePathologieEnClassificatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06WelkeKlachtenPassenBijCrohn />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07DifferentieleDiagnose />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08BehandelingVanMorbusCrohn />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09BijwerkingenVanMedicatie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10BeloopVanDeCasus />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11ExtraIntestinaleManifestaties />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC04DiarreeMorbusCrohnSummary
