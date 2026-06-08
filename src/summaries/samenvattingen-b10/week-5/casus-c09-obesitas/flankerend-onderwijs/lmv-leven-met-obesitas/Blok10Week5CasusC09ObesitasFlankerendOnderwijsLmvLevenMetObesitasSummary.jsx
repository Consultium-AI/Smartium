import {
  BookOpen,
  FileText,
  Heart,
  LayoutList,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02LevenMetObesitas from './sections/Sect02LevenMetObesitas'
import Sect03FysiekeEnMentaleImpact from './sections/Sect03FysiekeEnMentaleImpact'
import Sect04VooroordelenOverGewicht from './sections/Sect04VooroordelenOverGewicht'
import Sect05HetDikMaakPak from './sections/Sect05HetDikMaakPak'
import Sect06DeRolVanDeArts from './sections/Sect06DeRolVanDeArts'
import Sect07ReflectieOpMaatschappijEnZorg from './sections/Sect07ReflectieOpMaatschappijEnZorg'
import Sect08Samenvatting from './sections/Sect08Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Leven met obesitas', icon: Heart },
  { id: 'sect-03', title: 'Fysieke en mentale impact', icon: Users },
  { id: 'sect-04', title: 'Vooroordelen · Tabel 1', icon: Table2 },
  { id: 'sect-05', title: 'Het “dik-maak-pak”', icon: LayoutList },
  { id: 'sect-06', title: 'De rol van de arts', icon: Stethoscope },
  { id: 'sect-07', title: 'Reflectie maatschappij en zorg', icon: Users },
  { id: 'sect-08', title: 'Samenvatting', icon: FileText },
]

const Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmvLevenMetObesitasSummary = () => (
  <SummaryLayout
    title="Leven met obesitas"
    moduleKind="lmv"
    description="Na deze e-module kun je de fysieke en mentale impact van obesitas herkennen, vooroordelen en stigma begrijpen, en reflecteren op je rol als arts bij het doorbreken van stigma rond overgewicht."
    caseLabel="Week 5 · Casus C09: Obesitas"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week5-casus-c09-obesitas-lmv-leven-met-obesitas"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02LevenMetObesitas />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03FysiekeEnMentaleImpact />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04VooroordelenOverGewicht />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05HetDikMaakPak />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06DeRolVanDeArts />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07ReflectieOpMaatschappijEnZorg />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmvLevenMetObesitasSummary
