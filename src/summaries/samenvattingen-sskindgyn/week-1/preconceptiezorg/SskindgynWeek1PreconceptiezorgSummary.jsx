// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module preconceptiezorg
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
import SectWatIsPreconceptiezorg from './sections/SectWatIsPreconceptiezorg'
import SectWieKomtInAanmerkingVoorPreconceptiea from './sections/SectWieKomtInAanmerkingVoorPreconceptiea'
import SectAlgemenePreconceptiezorgWatVraagJeUi from './sections/SectAlgemenePreconceptiezorgWatVraagJeUi'
import SectLichamelijkOnderzoekEnAanvullendOnde from './sections/SectLichamelijkOnderzoekEnAanvullendOnde'
import SectLeefstijlfactorenEnAlgemeneAdviezen from './sections/SectLeefstijlfactorenEnAlgemeneAdviezen'
import SectAlgemeneVersusSpecialistischePreconc from './sections/SectAlgemeneVersusSpecialistischePreconc'
import SectMedicatieEnZwangerschap from './sections/SectMedicatieEnZwangerschap'
import SectCasusMetReumatoDeArtritis from './sections/SectCasusMetReumatoDeArtritis'
import SectWanneerBeginJeOverPreconceptiezorg from './sections/SectWanneerBeginJeOverPreconceptiezorg'
import SectSpecialistischeRisicoInventarisatieW from './sections/SectSpecialistischeRisicoInventarisatieW'
import SectCasusMetMeerdereRisicofactoren from './sections/SectCasusMetMeerdereRisicofactoren'
import SectWatDoeJeAlsDeRisicoInventarisatieNog from './sections/SectWatDoeJeAlsDeRisicoInventarisatieNog'
import SectCasusMetDiabetesHartafwijkingEnErfel from './sections/SectCasusMetDiabetesHartafwijkingEnErfel'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is preconceptiezorg?", icon: FileText },
    { id: 'sect-03', title: "Wie komt in aanmerking voor preconceptieadvies?", icon: FileText },
    { id: 'sect-04', title: "Algemene preconceptiezorg: wat vraag je uit?", icon: FileText },
    { id: 'sect-05', title: "Lichamelijk onderzoek en aanvullend onderzoek", icon: Microscope },
    { id: 'sect-06', title: "Leefstijlfactoren en algemene adviezen", icon: FileText },
    { id: 'sect-07', title: "Algemene versus specialistische preconceptiezorg", icon: FileText },
    { id: 'sect-08', title: "Medicatie en zwangerschap", icon: FileText },
    { id: 'sect-09', title: "Casus met reumatoïde artritis", icon: Activity },
    { id: 'sect-10', title: "Wanneer begin je over preconceptiezorg?", icon: FileText },
    { id: 'sect-11', title: "Specialistische risico-inventarisatie: wat moet je uitvragen?", icon: FileText },
    { id: 'sect-12', title: "Casus met meerdere risicofactoren", icon: Activity },
    { id: 'sect-13', title: "Wat doe je als de risico-inventarisatie nog niet compleet is?", icon: FileText },
    { id: 'sect-14', title: "Casus met diabetes, hartafwijking en erfelijke belasting", icon: Activity },
    { id: 'sect-15', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1PreconceptiezorgSummary = () => (
  <SummaryLayout
    title="Preconceptiezorg"
    description="Wat is preconceptiezorg?"
    caseLabel="Week 1 · Preconceptiezorg"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsPreconceptiezorg />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectWieKomtInAanmerkingVoorPreconceptiea />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAlgemenePreconceptiezorgWatVraagJeUi />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekEnAanvullendOnde />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectLeefstijlfactorenEnAlgemeneAdviezen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAlgemeneVersusSpecialistischePreconc />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectMedicatieEnZwangerschap />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectCasusMetReumatoDeArtritis />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectWanneerBeginJeOverPreconceptiezorg />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSpecialistischeRisicoInventarisatieW />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectCasusMetMeerdereRisicofactoren />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectWatDoeJeAlsDeRisicoInventarisatieNog />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectCasusMetDiabetesHartafwijkingEnErfel />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1PreconceptiezorgSummary
