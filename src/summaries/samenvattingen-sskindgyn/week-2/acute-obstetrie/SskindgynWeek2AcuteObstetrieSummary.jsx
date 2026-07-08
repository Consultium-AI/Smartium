// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module acute-obstetrie
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectAcuteObstetrieWaaromDitZoBelangrijkI from './sections/SectAcuteObstetrieWaaromDitZoBelangrijkI'
import SectZwangerschapEnPlacentacirculatie from './sections/SectZwangerschapEnPlacentacirculatie'
import SectMaternaleMortaliteitEnMorbiditeit from './sections/SectMaternaleMortaliteitEnMorbiditeit'
import SectHetAbcdefPrincipeBijDeZwangere from './sections/SectHetAbcdefPrincipeBijDeZwangere'
import SectDeAbcdefStappen from './sections/SectDeAbcdefStappen'
import SectReanimatieVanDeZwangere from './sections/SectReanimatieVanDeZwangere'
import SectEclamptischInsult from './sections/SectEclamptischInsult'
import SectSolutioPlacentae from './sections/SectSolutioPlacentae'
import SectNavelstrengprolaps from './sections/SectNavelstrengprolaps'
import SectSchouderdystocie from './sections/SectSchouderdystocie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Acute obstetrie: waarom dit zo belangrijk is", icon: FileText },
    { id: 'sect-03', title: "Zwangerschap en placentacirculatie", icon: FileText },
    { id: 'sect-04', title: "Maternale mortaliteit en morbiditeit", icon: FileText },
    { id: 'sect-05', title: "Het ABCDEF-principe bij de zwangere", icon: FileText },
    { id: 'sect-06', title: "De ABCDEF-stappen", icon: FileText },
    { id: 'sect-07', title: "Reanimatie van de zwangere", icon: FileText },
    { id: 'sect-08', title: "Eclamptisch insult", icon: FileText },
    { id: 'sect-09', title: "Solutio placentae", icon: FileText },
    { id: 'sect-10', title: "Navelstrengprolaps", icon: FileText },
    { id: 'sect-11', title: "Schouderdystocie", icon: FileText },
    { id: 'sect-12', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2AcuteObstetrieSummary = () => (
  <SummaryLayout
    title="Acute Obstetrie"
    description="Na het doornemen van deze stof kun je acute obstetrische complicaties herkennen en opvangen volgens het ABCDEF-principe. Daarbij hoort dat je niet alleen naar de moeder kijkt, maar ook steeds de foetale conditie meeneemt. In acute…"
    caseLabel="Week 2 · Acute Obstetrie"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectAcuteObstetrieWaaromDitZoBelangrijkI />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectZwangerschapEnPlacentacirculatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectMaternaleMortaliteitEnMorbiditeit />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectHetAbcdefPrincipeBijDeZwangere />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDeAbcdefStappen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectReanimatieVanDeZwangere />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectEclamptischInsult />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSolutioPlacentae />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectNavelstrengprolaps />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSchouderdystocie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2AcuteObstetrieSummary
