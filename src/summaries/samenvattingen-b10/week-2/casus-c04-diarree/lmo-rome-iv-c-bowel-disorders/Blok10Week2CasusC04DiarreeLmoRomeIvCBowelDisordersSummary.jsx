import {
  BookOpen,
  FileText,
  LayoutList,
  Lightbulb,
  ListChecks,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02OnderwerpVanDezeModule from './sections/Sect02OnderwerpVanDezeModule'
import Sect03Tabel1KernVanDeLeerstof from './sections/Sect03Tabel1KernVanDeLeerstof'
import Sect04FunctioneleEnOrganischeDarmziekten from './sections/Sect04FunctioneleEnOrganischeDarmziekten'
import Sect05Prikkelbaredarmsyndroom from './sections/Sect05Prikkelbaredarmsyndroom'
import Sect06Tabel2WatJeBijPDSMoetOnthouden from './sections/Sect06Tabel2WatJeBijPDSMoetOnthouden'
import Sect07WaaromIsDitKlinischBelangrijk from './sections/Sect07WaaromIsDitKlinischBelangrijk'
import Sect08WatMoetJeHierVooralVanMeenemen from './sections/Sect08WatMoetJeHierVooralVanMeenemen'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Onderwerp van deze module', icon: LayoutList },
  { id: 'sect-03', title: 'Tabel 1. Kern van de leerstof', icon: Table2 },
  { id: 'sect-04', title: 'Functionele en organische darmziekten', icon: Stethoscope },
  { id: 'sect-05', title: 'Prikkelbaredarmsyndroom (PDS)', icon: Lightbulb },
  { id: 'sect-06', title: 'Tabel 2. Wat je bij PDS moet onthouden', icon: Table2 },
  { id: 'sect-07', title: 'Waarom is dit klinisch belangrijk?', icon: Stethoscope },
  { id: 'sect-08', title: 'Wat moet je hier vooral van meenemen?', icon: ListChecks },
  { id: 'sect-09', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC04DiarreeLmoRomeIvCBowelDisordersSummary = () => (
  <SummaryLayout
    title="Darmstoornissen volgens Rome IV"
    moduleKind="lmo"
    description="Deze module gaat over darmstoornissen binnen de Rome IV-criteria, met speciale aandacht voor PDS. Het belangrijkste is dat je leert hoe je functionele darmklachten onderscheidt van organische darmziekten."
    caseLabel="Week 2 · Casus C04: Diarree"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02OnderwerpVanDezeModule />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Tabel1KernVanDeLeerstof />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04FunctioneleEnOrganischeDarmziekten />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Prikkelbaredarmsyndroom />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Tabel2WatJeBijPDSMoetOnthouden />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07WaaromIsDitKlinischBelangrijk />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08WatMoetJeHierVooralVanMeenemen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC04DiarreeLmoRomeIvCBowelDisordersSummary
