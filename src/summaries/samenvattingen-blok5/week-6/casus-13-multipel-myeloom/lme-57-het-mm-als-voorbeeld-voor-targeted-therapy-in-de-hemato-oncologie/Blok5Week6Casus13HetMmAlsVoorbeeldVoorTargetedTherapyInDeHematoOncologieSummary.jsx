import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  FlaskConical,
  GitBranch,
  Layers,
  ListChecks,
  Microscope,
  Pill,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Table2,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsMultipelMyeloom from './Sect02WatIsMultipelMyeloom'
import Sect03FunctieVanPlasmacellen from './Sect03FunctieVanPlasmacellen'
import Sect04HoeVaakKomtMultipelMyeloomVoor from './Sect04HoeVaakKomtMultipelMyeloomVoor'
import Sect05KlinischeKenmerkenEnOrgaanschade from './Sect05KlinischeKenmerkenEnOrgaanschade'
import Sect06RotiEnCrab from './Sect06RotiEnCrab'
import Sect07VanMgusNaarMultipelMyeloom from './Sect07VanMgusNaarMultipelMyeloom'
import Sect08MyelomaDefiningEvents from './Sect08MyelomaDefiningEvents'
import Sect09AlgemeneBehandelingEnOndersteunendeMaatregelen from './Sect09AlgemeneBehandelingEnOndersteunendeMaatregelen'
import Sect10Geneesmiddelengroepen from './Sect10Geneesmiddelengroepen'
import Sect11ChemotherapieMelfalanCyclofosfamide from './Sect11ChemotherapieMelfalanCyclofosfamide'
import Sect12ImiDs from './Sect12ImiDs'
import Sect13Proteasoomremmers from './Sect13Proteasoomremmers'
import Sect14MonoklonaleAntistoffen from './Sect14MonoklonaleAntistoffen'
import Sect15BispecifiekeAntistoffen from './Sect15BispecifiekeAntistoffen'
import Sect16CARTCeltherapie from './Sect16CARTCeltherapie'
import Sect17NieuweTargetsBcmaEnGprc5d from './Sect17NieuweTargetsBcmaEnGprc5d'
import Sect18AndereNieuweMiddelen from './Sect18AndereNieuweMiddelen'
import Sect19EersteLijnVervolgEnEerstelijnsbehandeling from './Sect19EersteLijnVervolgEnEerstelijnsbehandeling'
import Sect20WaaromOntstaatResistentie from './Sect20WaaromOntstaatResistentie'
import Sect21Samenvatting from './Sect21Samenvatting'

const Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is multipel myeloom?', icon: Microscope },
    { id: 'sect-03', title: 'Functie van plasmacellen', icon: Dna },
    { id: 'sect-04', title: 'Hoe vaak komt multipel myeloom voor?', icon: TrendingUp },
    { id: 'sect-05', title: 'Klinische kenmerken en orgaanschade', icon: Stethoscope },
    { id: 'sect-06', title: 'ROTI en CRAB', icon: Table2 },
    { id: 'sect-07', title: 'Van MGUS naar multipel myeloom', icon: GitBranch },
    { id: 'sect-08', title: 'Myeloma defining events', icon: ListChecks },
    { id: 'sect-09', title: 'Algemene behandeling van multipel myeloom', icon: Activity },
    { id: 'sect-10', title: 'Welke geneesmiddelengroepen worden gebruikt?', icon: Layers },
    { id: 'sect-11', title: 'Werking: chemotherapie, melfalan, cyclofosfamide', icon: FlaskConical },
    { id: 'sect-12', title: 'Immunomodulerende middelen (IMiDs)', icon: ShieldAlert },
    { id: 'sect-13', title: 'Proteasoomremmers', icon: Pill },
    { id: 'sect-14', title: 'Monoklonale antistoffen', icon: Target },
    { id: 'sect-15', title: 'Bispecifieke antistoffen', icon: Users },
    { id: 'sect-16', title: 'CAR-T-celtherapie', icon: Zap },
    { id: 'sect-17', title: 'Nieuwe targets: BCMA en GPRC5D', icon: Syringe },
    { id: 'sect-18', title: 'Andere nieuwe middelen', icon: Pill },
    { id: 'sect-19', title: 'Eerste lijn en vervolgbehandeling', icon: Activity },
    { id: 'sect-20', title: 'Waarom ontstaat resistentie?', icon: ShieldAlert },
    { id: 'sect-21', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Het MM als voorbeeld voor targeted therapy in de hemato-oncologie"
      description="Multipel myeloom is een kwaadaardige woekering van plasmacellen in het beenmerg."
      caseLabel="Week 6 · Casus 13: Multipel myeloom"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsMultipelMyeloom />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03FunctieVanPlasmacellen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HoeVaakKomtMultipelMyeloomVoor />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05KlinischeKenmerkenEnOrgaanschade />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06RotiEnCrab />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07VanMgusNaarMultipelMyeloom />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08MyelomaDefiningEvents />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AlgemeneBehandelingEnOndersteunendeMaatregelen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Geneesmiddelengroepen />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ChemotherapieMelfalanCyclofosfamide />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ImiDs />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Proteasoomremmers />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14MonoklonaleAntistoffen />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15BispecifiekeAntistoffen />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16CARTCeltherapie />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17NieuweTargetsBcmaEnGprc5d />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18AndereNieuweMiddelen />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19EersteLijnVervolgEnEerstelijnsbehandeling />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20WaaromOntstaatResistentie />
      </section>
      <section id="sect-21" className="scroll-mt-24 mb-12">
        <Sect21Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary
