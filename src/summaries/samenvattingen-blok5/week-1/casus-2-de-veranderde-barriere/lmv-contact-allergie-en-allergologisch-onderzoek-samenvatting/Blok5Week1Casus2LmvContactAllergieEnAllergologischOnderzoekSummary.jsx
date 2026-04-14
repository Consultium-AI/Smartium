import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  FlaskConical,
  HelpCircle,
  Layers,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsAllergie from './Sect02WatIsAllergie'
import Sect03AandachtVraagjeEerste from './Sect03AandachtVraagjeEerste'
import Sect04TypenAllergieGellCoombsEnTabel1 from './Sect04TypenAllergieGellCoombsEnTabel1'
import Sect05TypeIAllergie from './Sect05TypeIAllergie'
import Sect06KlinischBeeldTypeIEnTabel2 from './Sect06KlinischBeeldTypeIEnTabel2'
import Sect07BelangrijksteAllergeengroepen from './Sect07BelangrijksteAllergeengroepen'
import Sect08TestmethodenTypeIEnTabel3 from './Sect08TestmethodenTypeIEnTabel3'
import Sect09TypeIVContactallergie from './Sect09TypeIVContactallergie'
import Sect10PathofysiologieAllergieContacteczeem from './Sect10PathofysiologieAllergieContacteczeem'
import Sect11AandachtVraagjeTweede from './Sect11AandachtVraagjeTweede'
import Sect12EpicutanePlaktesten from './Sect12EpicutanePlaktesten'
import Sect13UitvoeringPlakproeven from './Sect13UitvoeringPlakproeven'
import Sect14BeoordelingPlakproefEnTabel4 from './Sect14BeoordelingPlakproefEnTabel4'
import Sect15VeelvoorkomendeContactallergenen from './Sect15VeelvoorkomendeContactallergenen'
import Sect16AndereBelangrijkeAandachtspunten from './Sect16AndereBelangrijkeAandachtspunten'
import Sect17SlotSamenvatting from './Sect17SlotSamenvatting'

const Blok5Week1Casus2LmvContactAllergieEnAllergologischOnderzoekSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is allergie?', icon: HelpCircle },
    { id: 'sect-03', title: 'Aandacht-vraagje · eerste contact', icon: HelpCircle },
    { id: 'sect-04', title: 'Typen allergie volgens Gell en Coombs · Tabel 1', icon: Table2 },
    { id: 'sect-05', title: 'Type I-allergie', icon: Activity },
    { id: 'sect-06', title: 'Klinisch beeld type I-reacties · Tabel 2', icon: Stethoscope },
    { id: 'sect-07', title: 'Belangrijkste allergeengroepen bij type I-reacties', icon: Layers },
    { id: 'sect-08', title: 'Testmethoden bij type I-reacties · Tabel 3', icon: Syringe },
    { id: 'sect-09', title: 'Type IV-allergie: contactallergie', icon: Shield },
    { id: 'sect-10', title: 'Pathofysiologie van allergisch contacteczeem', icon: Microscope },
    { id: 'sect-11', title: 'Aandacht-vraagje · type I vs IV', icon: HelpCircle },
    { id: 'sect-12', title: 'Epicutane plaktesten', icon: ClipboardList },
    { id: 'sect-13', title: 'Uitvoering van plakproeven', icon: ClipboardList },
    { id: 'sect-14', title: 'Beoordeling van de plakproef · Tabel 4', icon: Table2 },
    { id: 'sect-15', title: 'Veelvoorkomende contactallergenen', icon: FlaskConical },
    { id: 'sect-16', title: 'Andere belangrijke aandachtspunten', icon: Pill },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Contactallergie en allergologisch onderzoek"
      description="Allergie is een veranderde reactiviteit van de gastheer bij tweede en verdere contacten met een bepaalde stof. Dat betekent dat het eerste contact vaak nog niet direct tot klachten hoeft te leiden. Eerst moet het immuunsysteem de stof herkennen en erop reageren. Dat proces heet sensibilisatie."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek"
      moduleKind="lmv"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek',
      variants: [
        { id: 'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek', label: 'Uitgebreid' },
        { id: 'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsAllergie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AandachtVraagjeEerste />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04TypenAllergieGellCoombsEnTabel1 />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TypeIAllergie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KlinischBeeldTypeIEnTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BelangrijksteAllergeengroepen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08TestmethodenTypeIEnTabel3 />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09TypeIVContactallergie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10PathofysiologieAllergieContacteczeem />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11AandachtVraagjeTweede />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12EpicutanePlaktesten />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13UitvoeringPlakproeven />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14BeoordelingPlakproefEnTabel4 />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15VeelvoorkomendeContactallergenen />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16AndereBelangrijkeAandachtspunten />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2LmvContactAllergieEnAllergologischOnderzoekSummary
