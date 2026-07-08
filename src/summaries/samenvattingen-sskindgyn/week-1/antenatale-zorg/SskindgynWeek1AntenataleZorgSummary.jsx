// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module antenatale-zorg
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
import SectAntenataleZorgDoelEnOrganisatie from './sections/SectAntenataleZorgDoelEnOrganisatie'
import SectVaststellenVanDeZwangerschap from './sections/SectVaststellenVanDeZwangerschap'
import SectVerwijzingEnOrganisatieVanZorg from './sections/SectVerwijzingEnOrganisatieVanZorg'
import SectDeEerstePrenataleControle from './sections/SectDeEerstePrenataleControle'
import SectLichamelijkOnderzoekEnEcho from './sections/SectLichamelijkOnderzoekEnEcho'
import SectScreenendLaboratoriumonderzoek from './sections/SectScreenendLaboratoriumonderzoek'
import SectPrenataleScreeningEnDiagnostiek from './sections/SectPrenataleScreeningEnDiagnostiek'
import SectControlesEnBewakingTijdensDeZwangers from './sections/SectControlesEnBewakingTijdensDeZwangers'
import SectWatControleerJeBijElkeZwangerschapsc from './sections/SectWatControleerJeBijElkeZwangerschapsc'
import SectExtraAandachtRond30Weken from './sections/SectExtraAandachtRond30Weken'
import SectCasusEnKlinischeRelevantie from './sections/SectCasusEnKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Antenatale zorg: doel en organisatie", icon: FileText },
    { id: 'sect-03', title: "Vaststellen van de zwangerschap", icon: FileText },
    { id: 'sect-04', title: "Verwijzing en organisatie van zorg", icon: FileText },
    { id: 'sect-05', title: "De eerste prenatale controle", icon: FileText },
    { id: 'sect-06', title: "Lichamelijk onderzoek en echo", icon: Microscope },
    { id: 'sect-07', title: "Screenend laboratoriumonderzoek", icon: Microscope },
    { id: 'sect-08', title: "Prenatale screening en diagnostiek", icon: Microscope },
    { id: 'sect-09', title: "Controles en bewaking tijdens de zwangerschap", icon: FileText },
    { id: 'sect-10', title: "Wat controleer je bij elke zwangerschapscontrole?", icon: FileText },
    { id: 'sect-11', title: "Extra aandacht rond 30 weken", icon: FileText },
    { id: 'sect-12', title: "Casus en klinische relevantie", icon: Activity },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1AntenataleZorgSummary = () => (
  <SummaryLayout
    title="Antenatale zorg"
    description="Antenatale zorg betekent de zorg tijdens de zwangerschap. Het doel is een zo goed mogelijke uitkomst van de zwangerschap, zowel op korte als op lange termijn. Daarbij is er ook aandacht voor eigen keuzes van de zwangere en voor een zo…"
    caseLabel="Week 1 · Antenatale zorg"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectAntenataleZorgDoelEnOrganisatie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectVaststellenVanDeZwangerschap />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectVerwijzingEnOrganisatieVanZorg />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDeEerstePrenataleControle />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekEnEcho />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectScreenendLaboratoriumonderzoek />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectPrenataleScreeningEnDiagnostiek />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectControlesEnBewakingTijdensDeZwangers />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectWatControleerJeBijElkeZwangerschapsc />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectExtraAandachtRond30Weken />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectCasusEnKlinischeRelevantie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1AntenataleZorgSummary
