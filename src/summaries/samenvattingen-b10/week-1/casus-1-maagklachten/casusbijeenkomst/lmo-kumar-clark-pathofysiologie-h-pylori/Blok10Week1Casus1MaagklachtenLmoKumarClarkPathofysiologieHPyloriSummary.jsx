import {
  BookOpen,
  Layers,
  Microscope,
  ShieldAlert,
  Activity,
  Stethoscope,
  ListChecks as ListChecksIcon,
  FileText,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02AlgemeneBeschrijving from './sections/Sect02AlgemeneBeschrijving'
import Sect03KlinischeBeelden from './sections/Sect03KlinischeBeelden'
import Sect04Kolonisatie from './sections/Sect04Kolonisatie'
import Sect05BeschadigingMaagwand from './sections/Sect05BeschadigingMaagwand'
import Sect06KlinischeRelevantie from './sections/Sect06KlinischeRelevantie'
import Sect07BelangrijkMeeTeNemen from './sections/Sect07BelangrijkMeeTeNemen'
import Sect08Samenvatting from './sections/Sect08Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  {
    id: 'sect-02',
    title: 'Algemene beschrijving van het onderwerp',
    icon: Layers,
  },
  {
    id: 'sect-03',
    title: 'Helicobacter pylori en klinische beelden',
    icon: Stethoscope,
  },
  { id: 'sect-04', title: 'Hoe koloniseert H. pylori de maagwand?', icon: Microscope },
  { id: 'sect-05', title: 'Beschadiging van de maagwand', icon: ShieldAlert },
  { id: 'sect-06', title: 'Klinische relevantie', icon: Activity },
  { id: 'sect-07', title: 'Belangrijk om mee te nemen', icon: ListChecksIcon },
  { id: 'sect-08', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriSummary = () => (
  <SummaryLayout
    title="Pathofysiologie Helicobacter pylori"
    moduleKind="lmo"
    description={
      'Deze leerstof gaat over Helicobacter pylori en de gevolgen van infectie in de maag. Het belangrijkste idee is dat deze bacterie zich in de maag kan handhaven, de maagwand kan beschadigen en zo kan leiden tot klachten en ziektebeelden.'
    }
    caseLabel="Week 1 · Casus 1: Maagklachten"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02AlgemeneBeschrijving />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03KlinischeBeelden />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Kolonisatie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05BeschadigingMaagwand />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06KlinischeRelevantie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07BelangrijkMeeTeNemen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriSummary
