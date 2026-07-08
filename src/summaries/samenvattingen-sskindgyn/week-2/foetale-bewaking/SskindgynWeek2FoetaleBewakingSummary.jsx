// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module foetale-bewaking
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
import SectFoetaleBewakingWaaromIsHetBelangrijk from './sections/SectFoetaleBewakingWaaromIsHetBelangrijk'
import SectWatRegistreertEenCtg from './sections/SectWatRegistreertEenCtg'
import SectFoetaleHartfrequentieEnOxygenatie from './sections/SectFoetaleHartfrequentieEnOxygenatie'
import SectRegistratieVanHetCtg from './sections/SectRegistratieVanHetCtg'
import SectBetrouwbaarheidVanDeRegistratie from './sections/SectBetrouwbaarheidVanDeRegistratie'
import SectHoeBeoordeelJeEenCtg from './sections/SectHoeBeoordeelJeEenCtg'
import SectWelkeTypenDeceleratiesZijnEr from './sections/SectWelkeTypenDeceleratiesZijnEr'
import SectUterusactiviteit from './sections/SectUterusactiviteit'
import SectFigoClassificatieVanHetCtg from './sections/SectFigoClassificatieVanHetCtg'
import SectWelkBeleidHoortBijWelkCtg from './sections/SectWelkBeleidHoortBijWelkCtg'
import SectAfwijkendCtgHoeDenkJeKlinisch from './sections/SectAfwijkendCtgHoeDenkJeKlinisch'
import SectKlinischeVoorbeeldenInHetKort from './sections/SectKlinischeVoorbeeldenInHetKort'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Foetale bewaking: waarom is het belangrijk?", icon: FileText },
    { id: 'sect-03', title: "Wat registreert een CTG?", icon: FileText },
    { id: 'sect-04', title: "Foetale hartfrequentie en oxygenatie", icon: FileText },
    { id: 'sect-05', title: "Registratie van het CTG", icon: FileText },
    { id: 'sect-06', title: "Betrouwbaarheid van de registratie", icon: FileText },
    { id: 'sect-07', title: "Hoe beoordeel je een CTG?", icon: FileText },
    { id: 'sect-08', title: "Welke typen deceleraties zijn er?", icon: FileText },
    { id: 'sect-09', title: "Uterusactiviteit", icon: FileText },
    { id: 'sect-10', title: "FIGO-classificatie van het CTG", icon: FileText },
    { id: 'sect-11', title: "Welk beleid hoort bij welk CTG?", icon: HeartPulse },
    { id: 'sect-12', title: "Afwijkend CTG: hoe denk je klinisch?", icon: FileText },
    { id: 'sect-13', title: "Klinische voorbeelden in het kort", icon: FileText },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2FoetaleBewakingSummary = () => (
  <SummaryLayout
    title="Foetale bewaking"
    description="Foetale bewaking: waarom is het belangrijk?"
    caseLabel="Week 2 · Foetale bewaking"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectFoetaleBewakingWaaromIsHetBelangrijk />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectWatRegistreertEenCtg />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectFoetaleHartfrequentieEnOxygenatie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectRegistratieVanHetCtg />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBetrouwbaarheidVanDeRegistratie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHoeBeoordeelJeEenCtg />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectWelkeTypenDeceleratiesZijnEr />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectUterusactiviteit />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectFigoClassificatieVanHetCtg />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectWelkBeleidHoortBijWelkCtg />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectAfwijkendCtgHoeDenkJeKlinisch />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectKlinischeVoorbeeldenInHetKort />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2FoetaleBewakingSummary
