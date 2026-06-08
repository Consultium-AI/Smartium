import {
  Activity,
  BookOpen,
  FileText,
  FlaskConical,
  LayoutList,
  Pill,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02DeEndocrienePancreas from './sections/Sect02DeEndocrienePancreas'
import Sect03SecretieVanInsuline from './sections/Sect03SecretieVanInsuline'
import Sect04SecretieVanGlucagon from './sections/Sect04SecretieVanGlucagon'
import Sect05WerkingVanInsulineInDoelcellen from './sections/Sect05WerkingVanInsulineInDoelcellen'
import Sect06WerkingVanGlucagon from './sections/Sect06WerkingVanGlucagon'
import Sect07AdrenalineEnCortisol from './sections/Sect07AdrenalineEnCortisol'
import Sect08KlinischeRelevantie from './sections/Sect08KlinischeRelevantie'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Endocriene pancreas · Tabel 1', icon: Stethoscope },
  { id: 'sect-03', title: 'Secretie insuline · Tabel 2', icon: FlaskConical },
  { id: 'sect-04', title: 'Secretie glucagon', icon: Activity },
  { id: 'sect-05', title: 'Insuline doelcellen · Tabel 3–4', icon: Table2 },
  { id: 'sect-06', title: 'Werking glucagon · Tabel 5', icon: LayoutList },
  { id: 'sect-07', title: 'Adrenaline en cortisol · Tabel 6', icon: Zap },
  { id: 'sect-08', title: 'Klinische relevantie', icon: Pill },
  { id: 'sect-09', title: 'Samenvatting', icon: FileText },
]

const Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoEndocrieneRegulatieKhVetEnEiwitstofwisselingSummary = () => (
  <SummaryLayout
    title="Endocriene regulatie KH-, vet- en eiwitstofwisseling"
    moduleKind="lmo"
    description="Na deze samenvatting kun je de belangrijkste paden van het koolhydraat-, vet- en eiwitmetabolisme beschrijven. Ook kun je uitleggen hoe insuline, glucagon, adrenaline en cortisol deze stofwisselingspaden beïnvloeden via de regulatie van sleutelenzymen."
    caseLabel="Week 3 · Casus C06: DM type 1"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c06-dm-type1-lmo-endocriene-regulatie-kh-vet-en-eiwitstofwisseling"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02DeEndocrienePancreas />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03SecretieVanInsuline />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04SecretieVanGlucagon />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05WerkingVanInsulineInDoelcellen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06WerkingVanGlucagon />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07AdrenalineEnCortisol />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08KlinischeRelevantie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoEndocrieneRegulatieKhVetEnEiwitstofwisselingSummary
