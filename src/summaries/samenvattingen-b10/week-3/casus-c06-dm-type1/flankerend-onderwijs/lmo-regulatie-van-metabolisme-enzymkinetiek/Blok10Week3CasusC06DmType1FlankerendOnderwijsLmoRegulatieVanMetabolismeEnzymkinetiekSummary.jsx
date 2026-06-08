import {
  Activity,
  BookOpen,
  FileText,
  FlaskConical,
  LayoutList,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02EnzymenAlsKatalysatoren from './sections/Sect02EnzymenAlsKatalysatoren'
import Sect03Enzymkinetiek from './sections/Sect03Enzymkinetiek'
import Sect04MichaelisMentenKinetiek from './sections/Sect04MichaelisMentenKinetiek'
import Sect05AllosterischeEnzymkinetiek from './sections/Sect05AllosterischeEnzymkinetiek'
import Sect06RegulatieVanMetabolePaden from './sections/Sect06RegulatieVanMetabolePaden'
import Sect07MassawerkingEnAllostereRegulatie from './sections/Sect07MassawerkingEnAllostereRegulatie'
import Sect08CovalenteModificatie from './sections/Sect08CovalenteModificatie'
import Sect09InductieEnRepressie from './sections/Sect09InductieEnRepressie'
import Sect10Sleutelenzymen from './sections/Sect10Sleutelenzymen'
import Sect11RegulatieVanVetzuurmetabolismeEnGluconeogenese from './sections/Sect11RegulatieVanVetzuurmetabolismeEnGluconeogenese'
import Sect12Samenvatting from './sections/Sect12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Enzymen als katalysatoren', icon: FlaskConical },
  { id: 'sect-03', title: 'Enzymkinetiek', icon: Activity },
  { id: 'sect-04', title: 'Michaelis-Menten · Tabel 1', icon: Table2 },
  { id: 'sect-05', title: 'Allosterisch · Tabel 2', icon: LayoutList },
  { id: 'sect-06', title: 'Regulatie metabole paden', icon: Zap },
  { id: 'sect-07', title: 'Massawerking en allostere', icon: Activity },
  { id: 'sect-08', title: 'Covalente modificatie', icon: FlaskConical },
  { id: 'sect-09', title: 'Inductie/repressie · Tabel 3', icon: Table2 },
  { id: 'sect-10', title: 'Sleutelenzymen', icon: Stethoscope },
  { id: 'sect-11', title: 'Vetzuurmetabolisme en gluconeogenese', icon: LayoutList },
  { id: 'sect-12', title: 'Samenvatting', icon: FileText },
]

const Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoRegulatieVanMetabolismeEnzymkinetiekSummary = () => (
  <SummaryLayout
    title="Regulatie van metabolisme enzymkinetiek"
    moduleKind="lmo"
    description="Na deze module kun je uitleggen via welke principes de snelheid en de richting van metabole paden worden aangepast. Je kunt deze principes ook toepassen op de endocriene regulatie van de koolhydraat-, vet- en eiwitstofwisseling."
    caseLabel="Week 3 · Casus C06: DM type 1"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c06-dm-type1-lmo-regulatie-van-metabolisme-enzymkinetiek"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02EnzymenAlsKatalysatoren />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Enzymkinetiek />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04MichaelisMentenKinetiek />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05AllosterischeEnzymkinetiek />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06RegulatieVanMetabolePaden />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07MassawerkingEnAllostereRegulatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08CovalenteModificatie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09InductieEnRepressie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Sleutelenzymen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11RegulatieVanVetzuurmetabolismeEnGluconeogenese />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoRegulatieVanMetabolismeEnzymkinetiekSummary
