import {
  BookOpen,
  FileText,
  LayoutList,
  Lightbulb,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02ChronischePancreatitisWatIsHet from './sections/Sect02ChronischePancreatitisWatIsHet'
import Sect03DiagnoseVanChronischePancreatitis from './sections/Sect03DiagnoseVanChronischePancreatitis'
import Sect04MorfologischeVeranderingenOpBeeldvorming from './sections/Sect04MorfologischeVeranderingenOpBeeldvorming'
import Sect05WatBetekentDitVoorDeFunctieVanDePancreas from './sections/Sect05WatBetekentDitVoorDeFunctieVanDePancreas'
import Sect06BehandelingVanChronischePancreatitis from './sections/Sect06BehandelingVanChronischePancreatitis'
import Sect07KlinischeRelevantie from './sections/Sect07KlinischeRelevantie'
import Sect08Samenvatting from './sections/Sect08Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is chronische pancreatitis?', icon: Stethoscope },
  { id: 'sect-03', title: 'Diagnose', icon: LayoutList },
  { id: 'sect-04', title: 'Morfologie · Tabel 1', icon: Table2 },
  { id: 'sect-05', title: 'Functie van de pancreas', icon: Lightbulb },
  { id: 'sect-06', title: 'Behandeling · Tabel 2', icon: Pill },
  { id: 'sect-07', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-08', title: 'Samenvatting', icon: FileText },
]

const Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoGestuurdeZelfstudieOverzichtsartikelSummary = () => (
  <SummaryLayout
    title="Gestuurde zelfstudie – overzichtsartikel"
    moduleKind="lmo"
    description="Chronische pancreatitis is een langdurige ontsteking van de alvleesklier waarbij het orgaan geleidelijk beschadigd raakt. Door die aanhoudende schade verandert de structuur van de pancreas steeds verder."
    caseLabel="Week 3 · Casus C05: Chronische pancreatitis"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-lmo-gestuurde-zelfstudie-overzichtsartikel"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02ChronischePancreatitisWatIsHet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03DiagnoseVanChronischePancreatitis />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04MorfologischeVeranderingenOpBeeldvorming />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05WatBetekentDitVoorDeFunctieVanDePancreas />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06BehandelingVanChronischePancreatitis />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07KlinischeRelevantie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoGestuurdeZelfstudieOverzichtsartikelSummary
