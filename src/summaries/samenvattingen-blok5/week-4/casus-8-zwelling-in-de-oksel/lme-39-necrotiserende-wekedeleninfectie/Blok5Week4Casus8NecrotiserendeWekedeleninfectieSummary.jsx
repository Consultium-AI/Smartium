import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  HeartPulse,
  Layers,
  MessageCircle,
  Microscope,
  Skull,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsNecrotiserendeWekedeleninfectie from './Sect02WatIsNecrotiserendeWekedeleninfectie'
import Sect03Pathofysiologie from './Sect03Pathofysiologie'
import Sect04KlinischBeeld from './Sect04KlinischBeeld'
import Sect05KenmerkendeCombinatie from './Sect05KenmerkendeCombinatie'
import Sect06Risicofactoren from './Sect06Risicofactoren'
import Sect07Mortaliteit from './Sect07Mortaliteit'
import Sect08AanvullendOnderzoek from './Sect08AanvullendOnderzoek'
import Sect09PrimaireBehandeling from './Sect09PrimaireBehandeling'
import Sect10MedicamenteuzeTherapie from './Sect10MedicamenteuzeTherapie'
import Sect11ChirurgischeBehandeling from './Sect11ChirurgischeBehandeling'
import Sect12RolVanImmunoglobulinen from './Sect12RolVanImmunoglobulinen'
import Sect13VervolgchirurgieEnVerdereZorg from './Sect13VervolgchirurgieEnVerdereZorg'
import Sect14BehandelstrategieInStappen from './Sect14BehandelstrategieInStappen'
import Sect15BeloopVanEenTypischeCasus from './Sect15BeloopVanEenTypischeCasus'
import Sect16KlinischeRelevantie from './Sect16KlinischeRelevantie'
import Sect17Samenvatting from './Sect17Samenvatting'

const Blok5Week4Casus8NecrotiserendeWekedeleninfectieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is een necrotiserende wekedeleninfectie?', icon: Stethoscope },
    { id: 'sect-03', title: 'Pathofysiologie', icon: Activity },
    { id: 'sect-04', title: 'Klinisch beeld', icon: HeartPulse },
    { id: 'sect-05', title: 'Kenmerkende combinatie', icon: MessageCircle },
    { id: 'sect-06', title: 'Risicofactoren', icon: Table2 },
    { id: 'sect-07', title: 'Mortaliteit', icon: Skull },
    { id: 'sect-08', title: 'Aanvullend onderzoek', icon: Microscope },
    { id: 'sect-09', title: 'Primaire behandeling', icon: ClipboardList },
    { id: 'sect-10', title: 'Medicamenteuze therapie', icon: Syringe },
    { id: 'sect-11', title: 'Chirurgische behandeling', icon: Layers },
    { id: 'sect-12', title: 'Rol van immunoglobulinen', icon: Stethoscope },
    { id: 'sect-13', title: 'Vervolgchirurgie en verdere zorg', icon: ClipboardList },
    { id: 'sect-14', title: 'Behandelstrategie in stappen', icon: Activity },
    { id: 'sect-15', title: 'Beloop van een typische casus', icon: MessageCircle },
    { id: 'sect-16', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Necrotiserende wekedeleninfectie"
      description="Een necrotiserende wekedeleninfectie is een ernstige, snel progressieve infectie van de weke delen. De infectie kan voorkomen in de cutis, subcutis, oppervlakkige fascie zoals de fascie van Scarpa, de diepe fascie en de spier."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-necrotiserende-wekedeleninfectie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus8-necrotiserende-wekedeleninfectie',
      variants: [
        { id: 'blok5-week4-casus8-necrotiserende-wekedeleninfectie', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus8-necrotiserende-wekedeleninfectie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsNecrotiserendeWekedeleninfectie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Pathofysiologie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KlinischBeeld />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05KenmerkendeCombinatie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Risicofactoren />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Mortaliteit />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AanvullendOnderzoek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09PrimaireBehandeling />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10MedicamenteuzeTherapie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ChirurgischeBehandeling />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12RolVanImmunoglobulinen />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13VervolgchirurgieEnVerdereZorg />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14BehandelstrategieInStappen />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15BeloopVanEenTypischeCasus />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16KlinischeRelevantie />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8NecrotiserendeWekedeleninfectieSummary
