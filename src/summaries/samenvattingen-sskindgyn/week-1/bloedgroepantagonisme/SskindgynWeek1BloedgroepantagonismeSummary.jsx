// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module bloedgroepantagonisme
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
import SectHyperbilirubinemieBijDePasgeborene from './sections/SectHyperbilirubinemieBijDePasgeborene'
import SectBloedgroepantagonismeHetBasisprincip from './sections/SectBloedgroepantagonismeHetBasisprincip'
import SectDiagnostiekBijDeNeonaat from './sections/SectDiagnostiekBijDeNeonaat'
import SectAntistoffenEnDeKlinischeBetekenis from './sections/SectAntistoffenEnDeKlinischeBetekenis'
import SectPreventiefBeleidZwangerschapsimmunis from './sections/SectPreventiefBeleidZwangerschapsimmunis'
import SectBloedproductenAanvragenBijMoederEnKi from './sections/SectBloedproductenAanvragenBijMoederEnKi'
import SectVolledigeKruisproefBijNeonaten from './sections/SectVolledigeKruisproefBijNeonaten'
import SectTransfusiereactiesBijJongeKinderen from './sections/SectTransfusiereactiesBijJongeKinderen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Hyperbilirubinemie bij de pasgeborene", icon: FileText },
    { id: 'sect-03', title: "Bloedgroepantagonisme: het basisprincipe", icon: FileText },
    { id: 'sect-04', title: "Diagnostiek bij de neonaat", icon: Microscope },
    { id: 'sect-05', title: "Antistoffen en de klinische betekenis", icon: FileText },
    { id: 'sect-06', title: "Preventief beleid: zwangerschapsimmunisatie en cEK-beleid", icon: HeartPulse },
    { id: 'sect-07', title: "Bloedproducten aanvragen bij moeder en kind", icon: FileText },
    { id: 'sect-08', title: "Volledige kruisproef bij neonaten", icon: FileText },
    { id: 'sect-09', title: "Transfusiereacties bij jonge kinderen", icon: FileText },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1BloedgroepantagonismeSummary = () => (
  <SummaryLayout
    title="Bloedgroepantagonisme"
    description="Bilirubine ontstaat bij de afbraak van hemoglobine uit rode bloedcellen. Bij een pasgeborene kan bilirubine snel stijgen, en dat kan fysiologisch of pathologisch zijn."
    caseLabel="Week 1 · Bloedgroepantagonisme"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHyperbilirubinemieBijDePasgeborene />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectBloedgroepantagonismeHetBasisprincip />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectDiagnostiekBijDeNeonaat />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectAntistoffenEnDeKlinischeBetekenis />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectPreventiefBeleidZwangerschapsimmunis />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBloedproductenAanvragenBijMoederEnKi />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectVolledigeKruisproefBijNeonaten />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectTransfusiereactiesBijJongeKinderen />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1BloedgroepantagonismeSummary
