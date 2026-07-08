// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module menstruatiestoornissen
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
import SectMenstruatiestoornissenDeBasisVanDeAn from './sections/SectMenstruatiestoornissenDeBasisVanDeAn'
import SectHevigMenstrueelBloedverlies from './sections/SectHevigMenstrueelBloedverlies'
import SectHoeDenkJeOorzakenVanHevigBloedverlie from './sections/SectHoeDenkJeOorzakenVanHevigBloedverlie'
import SectMetrorragieIntermenstrueelBloedverli from './sections/SectMetrorragieIntermenstrueelBloedverli'
import SectDeHormonaleCyclusInGroteLijnen from './sections/SectDeHormonaleCyclusInGroteLijnen'
import SectEndometriose from './sections/SectEndometriose'
import SectLichamelijkOnderzoekBijVerdenkingOpE from './sections/SectLichamelijkOnderzoekBijVerdenkingOpE'
import SectBehandelingVanEndometriose from './sections/SectBehandelingVanEndometriose'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Menstruatiestoornissen: de basis van de anamnese", icon: FileText },
    { id: 'sect-03', title: "Hevig menstrueel bloedverlies", icon: FileText },
    { id: 'sect-04', title: "Hoe denk je oorzaken van hevig bloedverlies uit?", icon: FileText },
    { id: 'sect-05', title: "Metrorragie, intermenstrueel bloedverlies en de cyclusanamnese", icon: FileText },
    { id: 'sect-06', title: "De hormonale cyclus in grote lijnen", icon: FileText },
    { id: 'sect-07', title: "Endometriose", icon: FileText },
    { id: 'sect-08', title: "Lichamelijk onderzoek bij verdenking op endometriose", icon: Microscope },
    { id: 'sect-09', title: "Behandeling van endometriose", icon: HeartPulse },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1MenstruatiestoornissenSummary = () => (
  <SummaryLayout
    title="Menstruatiestoornissen"
    description="Menstruatiestoornissen komen vaak voor en zijn een belangrijk onderdeel van de gynaecologische praktijk. Ook in de huisartsenpraktijk zie je deze klachten veel. De diagnostiek en behandeling hangen sterk samen met de leeftijd waarop de…"
    caseLabel="Week 1 · Menstruatiestoornissen"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectMenstruatiestoornissenDeBasisVanDeAn />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHevigMenstrueelBloedverlies />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHoeDenkJeOorzakenVanHevigBloedverlie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectMetrorragieIntermenstrueelBloedverli />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDeHormonaleCyclusInGroteLijnen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectEndometriose />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekBijVerdenkingOpE />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectBehandelingVanEndometriose />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1MenstruatiestoornissenSummary
