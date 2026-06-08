import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  LayoutList,
  Scale,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02NutritionalAssessmentBredeBeoordeling from './sections/Sect02NutritionalAssessmentBredeBeoordeling'
import Sect03WaaromIsEenBredeBeoordelingNodig from './sections/Sect03WaaromIsEenBredeBeoordelingNodig'
import Sect04DeDrieBelangrijksteDomeinen from './sections/Sect04DeDrieBelangrijksteDomeinen'
import Sect05VoedselinnameVerbruikEnVerliezen from './sections/Sect05VoedselinnameVerbruikEnVerliezen'
import Sect06LichaamssamenstellingEnNutrientenreserves from './sections/Sect06LichaamssamenstellingEnNutrientenreserves'
import Sect07FunctioneleParameters from './sections/Sect07FunctioneleParameters'
import Sect08KlinischeBetekenis from './sections/Sect08KlinischeBetekenis'
import Sect09PraktischeKern from './sections/Sect09PraktischeKern'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Brede beoordeling voedingsstatus', icon: ClipboardList },
  { id: 'sect-03', title: 'Waarom brede beoordeling?', icon: Stethoscope },
  { id: 'sect-04', title: 'Drie domeinen · Tabel 1', icon: Table2 },
  { id: 'sect-05', title: 'Voedselinname, verbruik en verliezen', icon: LayoutList },
  { id: 'sect-06', title: 'Lichaamssamenstelling · Tabel 2', icon: Scale },
  { id: 'sect-07', title: 'Functionele parameters', icon: Activity },
  { id: 'sect-08', title: 'Klinische betekenis · Tabel 3', icon: Stethoscope },
  { id: 'sect-09', title: 'Praktische kern', icon: LayoutList },
  { id: 'sect-10', title: 'Samenvatting', icon: FileText },
]

const Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNutritionalAssessmentSummary = () => (
  <SummaryLayout
    title="Nutritional assessment"
    moduleKind="lmo"
    description="Na deze samenvatting kun je uitleggen wat nutritional assessment is, de drie domeinen benoemen en beoordelen waarom gewicht of BMI alleen niet volstaat bij het opsporen van ondervoeding."
    caseLabel="Week 5 · Casus C09: Obesitas"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week5-casus-c09-obesitas-lmo-nutritional-assessment"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02NutritionalAssessmentBredeBeoordeling />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03WaaromIsEenBredeBeoordelingNodig />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04DeDrieBelangrijksteDomeinen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05VoedselinnameVerbruikEnVerliezen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06LichaamssamenstellingEnNutrientenreserves />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07FunctioneleParameters />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08KlinischeBetekenis />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09PraktischeKern />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNutritionalAssessmentSummary
